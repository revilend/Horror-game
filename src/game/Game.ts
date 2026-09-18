import * as THREE from 'three';
import {
  buildWorld,
  CELL,
  EYE_HEIGHT,
  isOutdoor,
  MapInfo,
  OUTDOOR_ROWS,
  relocalizeWallTexts,
  RoomInfo,
  roomIndexAt,
  floorAt,
  floorName,
} from './World';
import {
  ELEVATOR_DECKS,
  relocalizeElevator,
  type ElevatorHandle,
  type ElevatorHooks,
} from './Elevator';
import {
  advanceDoor,
  advanceDrawer,
  advanceLocker,
  type DoorFixture,
  type DrawerFixture,
  type LockerFixture,
} from './Fixtures';
import { Player } from './Player';
import { Monster } from './Monster';
import { HorrorEffects } from './HorrorEffects';
import { HorrorAudio } from './Audio';
import { createJumpscareFaceDataUrl } from './Textures';
import { Inventory, ItemId } from './Inventory';
import { Minimap, MinimapState } from './Minimap';
import {
  applyTranslations,
  getLanguage,
  L,
  onLanguageChange,
  setLanguage,
  t,
  type Lang,
  type Localized,
} from './i18n';
import { NOTES } from './notes';

/** A pickup lying in the world, waiting to be taken by hand. */
interface PickupRecord {
  object: THREE.Object3D;
  kind: 'item' | 'note';
  /** Only set for notes. */
  noteIndex: number;
  /** Only set for items. */
  item: ItemId;
  label: string;
}

/** Whatever the player is close enough to reach right now. */
type Interaction =
  | { kind: 'pickup'; label: string; pickup: PickupRecord }
  | { kind: 'breaker'; label: string }
  | { kind: 'boards'; label: string };

/**
 * A fixture the action button would work right now.
 *
 * Doors, drawers and lockers are kept out of `Interaction` on purpose: that
 * union drives the hand prompt and the reach-out handler, which own the
 * pickups. Fixtures get their own prompt so the two can never fight over the
 * same press or swallow a fuse.
 */
type FixtureTarget =
  | { kind: 'door'; label: string; door: DoorFixture }
  | { kind: 'drawer'; label: string; desk: DrawerFixture }
  | { kind: 'locker'; label: string; locker: LockerFixture };

/** How far a fixture can be worked from, in metres. */
const FIXTURE_REACH = 2.4;
/** Fixtures further away than this are hidden and skipped entirely. */
const FIXTURE_RADIUS = 30;

/** How close you have to be before a prompt appears. */
const REACH = 2.3;

type GameState = 'loading' | 'menu' | 'playing' | 'paused' | 'jumpscare' | 'gameover' | 'win';
type Quality = 'low' | 'medium' | 'high';
/** Story progression: restore power, then find the keys, then run for the door. */
/**
 * Story progression: restore power, find the keys, walk out, then get the
 * keycard and the substation up and run the main gate.
 */
type Phase = 'power' | 'keys' | 'escape' | 'outside' | 'gate';

interface Settings {
  sensitivity: number;
  quality: Quality;
  muted: boolean;
}

const SETTINGS_KEY = 'dark-asylum.settings';
const BEST_TIME_KEY = 'dark-asylum.best-time';

const MAX_HEALTH = 100;
const MONSTER_DAMAGE = 22;
const INVULNERABLE_TIME = 2.6;
const TOTAL_KEYS = 3;
const TOTAL_NOTES = 20;
const BATTERY_DRAIN = 0.4;
const BATTERY_RECOVER = 2.4;

/**
 * How long the intro cutscene may make no progress before the game gives up on
 * it and hands control back. The cinematic itself is longer than this - the
 * watchdog measures stalls, not total length, so a slow-but-working intro is
 * never cut short while a hung one always ends.
 */
const INTRO_STALL_MS = 5000;
/** Ambient floor enforced once the intro ends: the room must be readable. */
const GAMEPLAY_AMBIENT_FLOOR = 0.85;

/**
 * The story, told through twenty notes (see notes.ts).
 */

/** Rooms that have a scripted scare the first time you step inside. */
/**
 * Rooms that have a scripted scare the first time you step inside.
 * Keyed by the LAYOUT character: the one room identifier that does not
 * change when the language does.
 */
const SCARE_ROOMS: Record<string, 'whisper' | 'scare' | 'blackout'> = {
  'o': 'scare',
  'h': 'whisper',
  'q': 'scare',
  'j': 'whisper',
  'm': 'blackout',
  'e': 'whisper',
  'p': 'blackout',
  'v': 'whisper',
  'z': 'blackout',
  'y': 'scare',
  't': 'blackout',
  'u': 'whisper',
  'x': 'whisper',
  'A': 'whisper',
  'D': 'scare',
  'F': 'blackout',
  'E': 'whisper',
  'P': 'scare',
  'M': 'blackout',
  'Q': 'scare',
  'S': 'scare',
  'T': 'whisper',
  'U': 'scare',
  'X': 'blackout',
  'R': 'scare',
  'O': 'whisper',
};

export class Game {
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private player: Player | null = null;
  private monster: Monster | null = null;
  private effects: HorrorEffects | null = null;
  private audio: HorrorAudio | null = null;
  private mapInfo: MapInfo | null = null;

  private keys: THREE.Object3D[] = [];
  private notes: THREE.Object3D[] = [];
  private cards: THREE.Object3D[] = [];
  private keysCollected = 0;
  private notesCollected = 0;
  private cardCollected = false;

  /** Substation lever thrown: the gate motor has power. */
  private substationOn = false;
  /** Reception door swung open - the run has moved outside. */
  private exitOpened = false;
  /** Main gate unlocked and swinging. */
  private gateOpened = false;
  private gateSwing = 0;
  private gateNoticeCooldown = 0;
  private wasOutdoors = false;
  private outdoorLights: THREE.PointLight[] = [];

  private flashlight: THREE.SpotLight | null = null;
  private flashlightOn = true;
  private flashlightBattery = 100;

  private health = MAX_HEALTH;
  private invulnerable = 0;
  private danger = 0;
  private heartbeatTimer = 0;
  private lockedNoticeCooldown = 0;

  private shakeAmount = 0;
  private shakeTime = 0;
  private shakeDuration = 1;

  private state: GameState = 'loading';
  private phase: Phase = 'power';
  private powerOn = false;
  private currentRoomIndex = -1;
  private readonly visitedRooms = new Set<number>();
  private readonly scriptedScares = new Set<string>();

  private elapsed = 0;
  private readonly scratch = new THREE.Vector3();
  private clock = new THREE.Clock();
  private animationId = 0;

  private settings: Settings = { sensitivity: 1, quality: 'high', muted: false };

  // DOM elements
  private loadingBar: HTMLElement | null = null;
  private loadingText: HTMLElement | null = null;
  private loadingScreen: HTMLElement | null = null;
  private startScreen: HTMLElement | null = null;
  private hud: HTMLElement | null = null;
  private mobileControls: HTMLElement | null = null;
  private jumpscareOverlay: HTMLElement | null = null;
  private minimapPanel: HTMLElement | null = null;
  private minimap: Minimap | null = null;
  /** Which pickup of each type has already been taken, by map index. */
  private readonly keyTaken = new Set<number>();
  private readonly noteTaken = new Set<number>();
  private readonly cardTaken = new Set<number>();
  private readonly minimapState: MinimapState = {
    player: { x: 0, z: 0, yaw: 0 },
    monster: null,
    chased: false,
    marks: [],
  };
  private inventory: Inventory | null = null;
  private interactPrompt: HTMLElement | null = null;
  private interactLabel: HTMLElement | null = null;
  private handButton: HTMLButtonElement | null = null;
  /** Everything on the floor that can still be picked up. */
  private readonly pickups: PickupRecord[] = [];
  /** Planks nailed over the shower room door, dropped once pried off. */
  private boardedDoors: THREE.Object3D[] = [];
  /** The thing within reach, recomputed a few times a second. */
  private interaction: Interaction | null = null;
  private interactionTimer = 0;
  private marksDirty = true;
  private gameoverScreen: HTMLElement | null = null;
  private winScreen: HTMLElement | null = null;
  private pauseMenu: HTMLElement | null = null;
  private hudMessage: HTMLElement | null = null;
  private noteToast: HTMLElement | null = null;
  private noteToastTitle: HTMLElement | null = null;
  private noteToastText: HTMLElement | null = null;
  private dangerVignette: HTMLElement | null = null;
  private damageFlash: HTMLElement | null = null;
  private lightningFlash: HTMLElement | null = null;
  private lightningTimeout: number | null = null;
  private objectiveText: HTMLElement | null = null;
  private noteCount: HTMLElement | null = null;
  private roomBanner: HTMLElement | null = null;
  private roomBannerName: HTMLElement | null = null;
  private roomBannerSubtitle: HTMLElement | null = null;
  private hudMessageTimeout: number | null = null;
  private noteToastTimeout: number | null = null;
  private roomBannerTimeout: number | null = null;
  private damageTimeout: number | null = null;
  /** The floor indicator card: a black plate with the deck name on it. */
  private stairTransition: HTMLElement | null = null;
  private stairFloorName: HTMLElement | null = null;
  /** Index into ELEVATOR_DECKS for the deck the player is standing on. */
  private currentFloor = 1;

  // --- Vintage cage elevator ------------------------------------------------
  private elevator: ElevatorHandle | null = null;
  /** Touch panel of floor buttons, raised while the player is in the cage. */
  private liftPanel: HTMLElement | null = null;
  private liftFloorButtons: HTMLButtonElement[] = [];
  private liftLocationText: HTMLElement | null = null;
  private liftArriveTimeout: number | null = null;
  /** True while the player is standing inside the cage. */
  private inLift = false;

  // --- Doors, drawers and lockers -------------------------------------------
  /** One entry per doorway; shut doors block the player outright. */
  private doors: DoorFixture[] = [];
  private desks: DrawerFixture[] = [];
  private lockers: LockerFixture[] = [];
  /** What the action button would work right now, if anything. */
  private fixtureTarget: FixtureTarget | null = null;
  private fixturePrompt: HTMLElement | null = null;
  private fixtureLabel: HTMLElement | null = null;
  /** Set while the player is shut inside a locker. */
  private hidingInLocker: LockerFixture | null = null;
  private lockerView: HTMLElement | null = null;
  private lockerTimeout: number | null = null;
  /**
   * Hooks the lift calls back into. Held as a field so the module never gets a
   * fresh pair of closures sixty times a second.
   */
  private readonly liftHooks: ElevatorHooks = {
    onGateClank: () => this.audio?.playElevatorGate(),
    onMotorStart: () => this.audio?.playElevatorMotor(),
    onDing: () => this.audio?.playElevatorDing(),
    onTeleport: (deckIndex) => this.onLiftTeleport(deckIndex),
    onArrive: (deckIndex) => this.onLiftArrive(deckIndex),
    shake: (amount, decay) => this.addShake(amount, decay),
    flicker: (intensity) => this.effects?.setAmbientFloor(GAMEPLAY_AMBIENT_FLOOR * intensity),
  };

  // Intro cutscene
  private introActive = false;
  private introSkipRequested = false;
  /** Set once the intro has handed control back; every exit path goes through forceEndIntro(). */
  private introFinished = false;
  private introWatchdogId: number | null = null;
  private introRenderId: number | null = null;
  private introLastProgress = 0;
  private introEyelid: HTMLElement | null = null;
  private introTypewriter: HTMLElement | null = null;
  private introTypewriterLabel: HTMLElement | null = null;
  private introTypewriterText: HTMLElement | null = null;
  private skipIntroBtn: HTMLElement | null = null;
  /** The live SKIP handler, held so it can be detached when the intro ends. */
  private introSkipHandler: (() => void) | null = null;

  async init(): Promise<void> {
    this.cacheDom();
    this.prepareJumpscareFace();
    this.settings = this.loadSettings();
    this.syncSettingsUI();
    this.installLanguageUI();
    this.installRotateGuard();
    this.installLiftUI();
    this.installFixtures();
    this.installAudioUnlock();

    this.setLoadingProgress(8, t('loading.1'));
    await this.yieldToBrowser();

    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.35;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.setLoadingProgress(20, t('loading.2'));
    await this.yieldToBrowser();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.08, 90);
    this.scene.add(this.camera);

    // 18 rooms, doorways, gore - the heavy synchronous step
    try {
      this.mapInfo = buildWorld(this.scene);
    } catch (buildErr) {
      console.error('[buildWorld] failed:', buildErr);
      throw buildErr;
    }
    this.bindFixtures();
    this.currentFloor = floorAt(this.mapInfo.playerSpawn.z / CELL);
    if (this.liftLocationText) {
      this.liftLocationText.textContent = floorName(this.currentFloor);
    }

    this.setLoadingProgress(55, t('loading.3'));
    await this.yieldToBrowser();

    this.audio = new HorrorAudio();
    this.audio.setMuted(this.settings.muted);

    this.setLoadingProgress(65, t('loading.4'));
    await this.yieldToBrowser();

    this.effects = new HorrorEffects(this.scene);
    this.effects.setFluorescentMaterials(this.mapInfo.fluorescentMaterials);
    this.flashlight = this.effects.createFlashlight(this.camera);
    this.effects.setCallbacks(
      () => this.triggerJumpscare(),
      () => this.audio?.playCreepySound()
    );
    this.effects.onLightning = () => this.onLightning();
    // A tube stuttering dark should be heard as well as seen
    this.effects.onFluorescentBuzz = () => this.audio?.playElectricBuzz();

    this.addMapLights();

    this.player = new Player(this.camera);
    this.player.init(this.mapInfo.grid, this.mapInfo.playerSpawn);
    this.player.setColliders(this.mapInfo.colliders);
    this.player.setupKeyboard();
    this.player.setupMouseLook();
    this.player.setLookSensitivity(this.settings.sensitivity);
    this.player.onFootstep = (running) => this.audio?.playFootstep(running ? 0.34 : 0.2);

    this.collectPickups();

    this.setLoadingProgress(85, t('loading.5'));
    await this.yieldToBrowser();

    this.monster = new Monster(this.mapInfo.grid, this.mapInfo.monsterSpawn);
    this.monster.addToScene(this.scene);
    this.monster.setColliders(this.mapInfo.colliders);
    this.monster.onGrowl = () => this.audio?.playGrowl();

    if (this.minimapPanel && !this.minimap) this.minimap = new Minimap(this.minimapPanel);
    this.minimap?.attach(this.mapInfo);

    this.applyQuality();

    this.setLoadingProgress(100, t('loading.6'));
    await this.delay(400);

    this.setupEvents();
    this.updateBestTimeUI();
    this.updateObjective();

    this.loadingScreen?.classList.add('hidden');
    this.startScreen?.classList.remove('hidden');
    this.state = 'menu';
  }

  private cacheDom(): void {
    const id = (value: string): HTMLElement | null => document.getElementById(value);
    this.loadingBar = id('loading-bar');
    this.loadingText = id('loading-text');
    this.loadingScreen = id('loading-screen');
    this.startScreen = id('start-screen');
    this.hud = id('game-hud');
    this.mobileControls = id('mobile-controls');
    this.jumpscareOverlay = id('jumpscare-overlay');
    this.minimapPanel = id('minimap-panel');
    this.interactPrompt = id('interact-prompt');
    this.interactLabel = id('interact-label');
    this.handButton = id('hand-btn') as HTMLButtonElement | null;
    this.inventory = new Inventory(id('inventory'));
    this.inventory.onUse = (item) => this.useItem(item);
    this.gameoverScreen = id('gameover-screen');
    this.winScreen = id('win-screen');
    this.pauseMenu = id('pause-menu');
    this.hudMessage = id('hud-message');
    this.noteToast = id('note-toast');
    this.noteToastTitle = id('note-toast-title');
    this.noteToastText = id('note-toast-text');
    this.dangerVignette = id('danger-vignette');
    this.damageFlash = id('damage-flash');
    this.lightningFlash = id('lightning-flash');
    this.objectiveText = id('objective-text');
    this.noteCount = id('note-count');
    this.roomBanner = id('room-banner');
    this.roomBannerName = id('room-banner-name');
    this.roomBannerSubtitle = id('room-banner-subtitle');
    this.stairTransition = id('stair-transition');
    this.stairFloorName = id('stair-floor-name');
    this.liftPanel = id('lift-panel');
    this.liftLocationText = id('lift-location-text');
    this.fixturePrompt = id('fixture-prompt');
    this.fixtureLabel = id('fixture-label');
    this.lockerView = id('locker-view');
    this.introEyelid = id('intro-eyelid');
    this.introTypewriter = id('intro-typewriter');
    this.introTypewriterLabel = id('intro-typewriter')?.querySelector('.typewriter-label') as HTMLElement | null;
    this.introTypewriterText = id('intro-typewriter')?.querySelector('.typewriter-text') as HTMLElement | null;
    this.skipIntroBtn = id('skip-intro');
  }

  private yieldToBrowser(): Promise<void> {
    return new Promise((resolve) => window.requestAnimationFrame(() => window.setTimeout(resolve, 0)));
  }

  // --- Settings ------------------------------------------------------------

  private isTouchDevice(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  private defaultQuality(): Quality {
    return this.isTouchDevice() ? 'medium' : 'high';
  }

  private loadSettings(): Settings {
    const defaults: Settings = { sensitivity: 1, quality: this.defaultQuality(), muted: false };

    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (!raw) return defaults;
      const parsed = JSON.parse(raw) as Partial<Settings>;
      return {
        sensitivity: typeof parsed.sensitivity === 'number' ? parsed.sensitivity : defaults.sensitivity,
        quality:
          parsed.quality === 'low' || parsed.quality === 'medium' || parsed.quality === 'high'
            ? parsed.quality
            : defaults.quality,
        muted: typeof parsed.muted === 'boolean' ? parsed.muted : defaults.muted,
      };
    } catch {
      return defaults;
    }
  }

  private saveSettings(): void {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings));
    } catch {
      /* private mode */
    }
  }

  private syncSettingsUI(): void {
    document.querySelectorAll<HTMLInputElement>('.setting-sensitivity').forEach((input) => {
      input.value = String(this.settings.sensitivity);
    });
    document.querySelectorAll<HTMLSelectElement>('.setting-quality').forEach((select) => {
      select.value = this.settings.quality;
    });
    document.querySelectorAll<HTMLInputElement>('.setting-muted').forEach((input) => {
      input.checked = this.settings.muted;
    });
  }

  private applyQuality(): void {
    if (!this.renderer) return;

    const dpr = window.devicePixelRatio || 1;
    const cap = this.settings.quality === 'low' ? 1 : this.settings.quality === 'medium' ? 1.5 : 2;
    this.renderer.setPixelRatio(Math.min(dpr, cap));
    this.renderer.shadowMap.enabled = this.settings.quality !== 'low';
    this.effects?.setDustEnabled(this.settings.quality !== 'low');
    this.effects?.setRainEnabled(this.settings.quality !== 'low');

    this.scene?.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      for (const material of materials) material.needsUpdate = true;
    });
  }

  // --- Lighting ------------------------------------------------------------

  private addMapLights(): void {
    if (!this.mapInfo || !this.effects) return;

    // Point lights are expensive in three's forward renderer, so the budget
    // scales with quality. They idle at ~12% until the breaker is thrown.
    // Keep the total well under ~15: every extra light is another loop in every
    // fragment shader in this forward renderer.
    const budget = this.settings.quality === 'low' ? 8 : this.settings.quality === 'medium' ? 12 : 18;

    for (const keyPos of this.mapInfo.keyPositions) {
      const light = this.effects.createWallLight(keyPos.x, 2.6, keyPos.z, 0xffab2e);
      light.distance = 8;
      this.effects.addFlickerLight(light, 1.1);
    }

    // Spread the rest across the hospital's corridors and rooms. The grounds
    // get their own lamp posts, which stay dead until the substation comes up.
    const candidates: Array<[number, number]> = [];
    for (let row = OUTDOOR_ROWS; row < this.mapInfo.grid.length; row++) {
      for (let col = 0; col < this.mapInfo.grid[0].length; col++) {
        if (this.mapInfo.grid[row][col] !== 0) candidates.push([row, col]);
      }
    }
    for (let i = candidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }

    const step = Math.max(1, Math.floor(candidates.length / budget));
    for (let i = 0; i < budget && i * step < candidates.length; i++) {
      const [row, col] = candidates[i * step];
      const light = this.effects.createWallLight(
        col * CELL + (Math.random() - 0.5),
        3.05,
        row * CELL + (Math.random() - 0.5),
        0xffb066
      );
      light.distance = 10;
      this.effects.addFlickerLight(light, 0.72);
    }
  }

  /**
   * The yard's lamp posts. Wired up only once the substation is thrown, so the
   * light count in the forward renderer stays low for most of the run.
   */
  private lightOutdoorLamps(): void {
    if (!this.mapInfo || !this.effects || this.outdoorLights.length > 0) return;

    const budget = this.settings.quality === 'low' ? 3 : this.settings.quality === 'medium' ? 4 : 6;
    for (const pos of this.mapInfo.outdoorLampPositions.slice(0, budget)) {
      const light = this.effects.createWallLight(pos.x, pos.y, pos.z, 0xffd9a0);
      light.distance = 18;
      this.effects.addFlickerLight(light, 0.95);
      this.outdoorLights.push(light);
    }
  }

  // --- Events --------------------------------------------------------------

  private setupEvents(): void {
    document.getElementById('start-btn')?.addEventListener('click', () => void this.startGame());
    document.getElementById('retry-btn')?.addEventListener('click', () => this.restartGame());
    document.getElementById('replay-btn')?.addEventListener('click', () => this.restartGame());
    document.getElementById('pause-btn')?.addEventListener('click', () => this.pauseGame());
    document.getElementById('resume-btn')?.addEventListener('click', () => this.resumeGame());
    document.getElementById('pause-restart-btn')?.addEventListener('click', () => this.restartGame());

    // Touch controls use pointer events: a `click` handler fires after
    // touchend and used to leave the run button stuck on.
    const runButton = document.getElementById('run-btn');
    runButton?.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      this.player?.setRunning(true);
      runButton.classList.add('active');
    });
    for (const type of ['pointerup', 'pointercancel', 'pointerleave'] as const) {
      runButton?.addEventListener(type, () => {
        this.player?.setRunning(false);
        runButton.classList.remove('active');
      });
    }

    document.getElementById('flashlight-btn')?.addEventListener('click', (event) => {
      event.stopPropagation();
      this.toggleFlashlight();
    });

    // The reaching hand. Fires on pointerdown so it responds instantly, and it
    // never sticks because there is no held state to get out of sync.
    const handButton = document.getElementById('hand-btn');
    handButton?.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.interact();
    });

    // The thrown vial. Same instant-response contract as the hand button.
    document.getElementById('throw-btn')?.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.throwBottle();
    });

    // Crouch button uses pointerdown/pointerup so it does not stick
    const crouchButton = document.getElementById('crouch-btn');
    crouchButton?.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      this.player?.setCrouching(true);
      crouchButton.classList.add('active');
    });
    for (const type of ['pointerup', 'pointercancel', 'pointerleave'] as const) {
      crouchButton?.addEventListener(type, () => {
        this.player?.setCrouching(false);
        crouchButton.classList.remove('active');
      });
    }

    document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyF' && this.state === 'playing') this.toggleFlashlight();
    if (event.code === 'KeyM' && this.state === 'playing') this.minimap?.toggle();
    if (event.code === 'KeyE' && this.state === 'playing') this.interact();
    if (event.code === 'KeyB' && this.state === 'playing') this.throwBottle();
    if (event.code === 'ShiftLeft' && this.state === 'playing') this.player?.setRunning(true);
    if ((event.code === 'ControlLeft' || event.code === 'ControlRight') && this.state === 'playing') this.player?.setCrouching(true);
      if (event.code === 'Escape') {
        if (this.state === 'playing') this.pauseGame();
        else if (this.state === 'paused') this.resumeGame();
      }
    });
    document.addEventListener('keyup', (event) => {
      if (event.code === 'ShiftLeft') this.player?.setRunning(false);
    if (event.code === 'ControlLeft' || event.code === 'ControlRight') this.player?.setCrouching(false);
    });

    const canvas = document.getElementById('game-canvas');
    canvas?.addEventListener('click', () => {
      if (this.state === 'playing' && !this.isTouchDevice()) {
        void canvas.requestPointerLock();
      }
    });

    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('orientationchange', () => {
      window.setTimeout(() => this.onResize(), 120);
    });

    document.querySelectorAll<HTMLInputElement>('.setting-sensitivity').forEach((input) => {
      input.addEventListener('input', () => {
        this.settings.sensitivity = Number(input.value);
        this.player?.setLookSensitivity(this.settings.sensitivity);
        this.syncSettingsUI();
        this.saveSettings();
      });
    });
    document.querySelectorAll<HTMLSelectElement>('.setting-quality').forEach((select) => {
      select.addEventListener('change', () => {
        this.settings.quality = select.value as Quality;
        this.applyQuality();
        this.syncSettingsUI();
        this.saveSettings();
      });
    });
    document.querySelectorAll<HTMLInputElement>('.setting-muted').forEach((input) => {
      input.addEventListener('change', () => {
        this.settings.muted = input.checked;
        this.audio?.setMuted(this.settings.muted);
        this.syncSettingsUI();
        this.saveSettings();
      });
    });
  }

  // --- Run lifecycle -------------------------------------------------------

  // --- Intro cutscene -----------------------------------------------------

  /** Typewriter effect: types `text` into `el` char-by-char, returns when done. */
  private async typewriterEffect(el: HTMLElement, text: string, speed = 38): Promise<void> {
    el.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    el.appendChild(cursor);
    for (let i = 0; i < text.length; i++) {
      if (this.introSkipRequested) { el.textContent = text; cursor.remove(); return; }
      el.insertBefore(document.createTextNode(text[i]), cursor);
      // Typing is progress, and the narration is long enough that the watchdog
      // would otherwise mistake it for a hang.
      this.introAlive();
      await this.delay(speed + (Math.random() * 20 - 10));
    }
    await this.delay(600);
    cursor.remove();
  }

  /** Procedural cassette-click + tape hiss via Web Audio API. */
  private playTapeClick(): void {
    const ctx = this.audio?.['ctx'] as AudioContext | undefined;
    if (!ctx) return;
    const now = ctx.currentTime;
    // Click
    const clickOsc = ctx.createOscillator();
    const clickGain = ctx.createGain();
    clickOsc.type = 'square';
    clickOsc.frequency.value = 80;
    clickGain.gain.setValueAtTime(0.12, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    clickOsc.connect(clickGain).connect(ctx.destination);
    clickOsc.start(now);
    clickOsc.stop(now + 0.1);
    // Tape hiss
    const bufferSize = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.015;
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const hissGain = ctx.createGain();
    hissGain.gain.setValueAtTime(0, now + 0.1);
    hissGain.gain.linearRampToValueAtTime(0.06, now + 0.3);
    hissGain.gain.linearRampToValueAtTime(0, now + 4);
    const hissFilter = ctx.createBiquadFilter();
    hissFilter.type = 'highpass';
    hissFilter.frequency.value = 3000;
    noise.connect(hissFilter).connect(hissGain).connect(ctx.destination);
    noise.start(now + 0.1);
    noise.stop(now + 4);
  }

  /** Procedural rain + distant thunder via Web Audio API. */
  private playIntroRain(): void {
    const ctx = this.audio?.['ctx'] as AudioContext | undefined;
    if (!ctx) return;
    const now = ctx.currentTime;
    // Rain noise
    const bufLen = ctx.sampleRate * 8;
    const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
    const ch = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) ch[i] = (Math.random() * 2 - 1);
    const rain = ctx.createBufferSource();
    rain.buffer = buf;
    rain.loop = true;
    const rainGain = ctx.createGain();
    rainGain.gain.setValueAtTime(0, now);
    rainGain.gain.linearRampToValueAtTime(0.08, now + 2);
    const rainFilter = ctx.createBiquadFilter();
    rainFilter.type = 'lowpass';
    rainFilter.frequency.value = 800;
    rain.connect(rainFilter).connect(rainGain).connect(ctx.destination);
    rain.start(now);
    // Fade out after 6 seconds
    rainGain.gain.linearRampToValueAtTime(0, now + 6);
    rain.stop(now + 6.5);
  }

  /** Procedural gasp sound. */
  private playGasp(): void {
    const ctx = this.audio?.['ctx'] as AudioContext | undefined;
    if (!ctx) return;
    const now = ctx.currentTime;
    const bufLen = ctx.sampleRate * 0.5;
    const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
    const ch = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) ch[i] = (Math.random() * 2 - 1);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.15, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1200;
    filter.Q.value = 2;
    src.connect(filter).connect(gain).connect(ctx.destination);
    src.start(now);
    src.stop(now + 0.55);
  }

  /** Procedural heartbeat pulse. */
  private playHeartbeatPulse(): void {
    const ctx = this.audio?.['ctx'] as AudioContext | undefined;
    if (!ctx) return;
    const now = ctx.currentTime;
    for (let beat = 0; beat < 2; beat++) {
      const t = now + beat * 0.25;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(55, t);
      osc.frequency.exponentialRampToValueAtTime(35, t + 0.18);
      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.22);
    }
  }

  // --- Intro control: rendering, watchdog and the single exit path --------

  /**
   * The in-engine part of the intro needs its own render loop: the gameplay
   * loop bails out immediately unless `state === 'playing'`, so without this
   * the camera rising off the cot would never actually be drawn and the
   * player would sit through a cutscene made entirely of black frames.
   */
  private introRenderTick = (): void => {
    this.introRenderId = requestAnimationFrame(this.introRenderTick);
    if (!this.renderer || !this.scene || !this.camera) return;
    this.effects?.update(1 / 60, 0, this.camera);
    this.renderer.render(this.scene, this.camera);
  };

  private startIntroRendering(): void {
    if (this.introRenderId !== null) return;
    this.introRenderId = requestAnimationFrame(this.introRenderTick);
  }

  private stopIntroRendering(): void {
    if (this.introRenderId === null) return;
    cancelAnimationFrame(this.introRenderId);
    this.introRenderId = null;
  }

  /** Marks the cinematic as alive. The watchdog ends the intro if this stops. */
  private introAlive(): void {
    this.introLastProgress = performance.now();
  }

  /**
   * A delay that gives up the moment the intro is over, checked in small
   * slices so SKIP INTRO is instant instead of waiting out the current beat.
   */
  private async introDelay(ms: number): Promise<void> {
    const slice = 50;
    let waited = 0;
    while (waited < ms && !this.introFinished) {
      await this.delay(Math.min(slice, ms - waited));
      waited += slice;
      // A timer firing is progress, so the watchdog stays quiet through the
      // long intentional beats and only trips on a genuine stall.
      this.introAlive();
    }
  }

  /** Polls the heartbeat so a hung animation can never strand the player on black. */
  private armIntroWatchdog(): void {
    this.clearIntroWatchdog();
    this.introAlive();
    this.introWatchdogId = window.setInterval(() => {
      if (!this.introActive) {
        this.clearIntroWatchdog();
        return;
      }
      if (performance.now() - this.introLastProgress > INTRO_STALL_MS) {
        this.forceEndIntro('failsafe');
      }
    }, 250);
  }

  private clearIntroWatchdog(): void {
    if (this.introWatchdogId === null) return;
    window.clearInterval(this.introWatchdogId);
    this.introWatchdogId = null;
  }

  /** Puts one overlay away for good, inline styles and all. */
  private killOverlay(el: HTMLElement | null): void {
    if (!el) return;
    el.classList.add('hidden');
    el.classList.remove('open', 'in-cutscene');
    el.style.display = 'none';
    el.style.opacity = '0';
    el.style.visibility = 'hidden';
    el.style.pointerEvents = 'none';
  }

  /** Re-arms an overlay that killOverlay() shut down, for a replay. */
  private reviveOverlay(el: HTMLElement | null): void {
    if (!el) return;
    el.classList.remove('hidden', 'open');
    el.style.display = '';
    el.style.opacity = '';
    el.style.visibility = '';
    el.style.pointerEvents = '';
  }

  /**
   * The single way out of the cutscene.
   *
   * A finished intro, the SKIP button and the watchdog all funnel through
   * here, so exactly one piece of code decides the player is back in control.
   * That is what fixes the black screen: the eyelid overlay used to be left
   * closed across the whole viewport, and nothing ever reopened it.
   */
  private forceEndIntro(reason: 'finished' | 'skipped' | 'failsafe'): void {
    if (this.introFinished) return;
    this.introFinished = true;
    this.introActive = false;
    // Aborts the running cinematic: every await in it checks this flag.
    this.introSkipRequested = true;

    this.clearIntroWatchdog();
    this.stopIntroRendering();

    // The SKIP button is gone with the cutscene, so its listener goes too:
    // a stale handler would otherwise pile up on every replay.
    if (this.skipIntroBtn && this.introSkipHandler) {
      this.skipIntroBtn.removeEventListener('click', this.introSkipHandler);
    }
    this.introSkipHandler = null;

    // 1. Every black curtain, forced out of the way.
    this.killOverlay(this.introEyelid);
    this.killOverlay(this.introTypewriter);
    this.killOverlay(this.skipIntroBtn);
    document.body.classList.remove('in-cutscene');

    // 2. A pose that cannot be inside the bed, a wall or the floor. The spawn
    //    cell is validated by buildWorld (it throws if it is inside a wall) and
    //    sits in the corridor, clear of the gurney at the old spawn.
    const spawn = this.mapInfo?.playerSpawn;
    if (this.mapInfo && spawn) {
      this.player?.reset(this.mapInfo.grid, spawn);
      if (this.camera) {
        this.camera.position.set(spawn.x, EYE_HEIGHT, spawn.z);
        this.camera.rotation.set(0, 0, 0);
        this.camera.updateMatrixWorld(true);
      }
    }

    // 3. Light: the room, the walls and the doors are legible from the very
    //    first frame, before the breaker is ever thrown.
    this.effects?.setAmbientFloor(GAMEPLAY_AMBIENT_FLOOR);
    this.flashlightOn = true;
    this.flashlightBattery = Math.max(this.flashlightBattery, 60);
    if (this.flashlight) {
      this.flashlight.visible = true;
      this.flashlight.intensity = Math.max(this.flashlight.intensity, 3.8);
    }

    // 4. Controls, HUD and the touch stick all come back.
    if (this.player) this.player.inputDisabled = false;
    this.hud?.classList.remove('hidden');
    if (this.isTouchDevice()) {
      this.mobileControls?.classList.remove('hidden');
      const joystick = document.getElementById('dynamic-joystick');
      if (joystick) {
        joystick.classList.remove('hidden');
        joystick.style.display = '';
      }
    }

    // 5. If the cinematic hung or threw, startGame() may be awaiting it
    //    forever. Starting the loop here is what makes the failsafe a real
    //    guarantee rather than a cosmetic cleanup.
    if (reason === 'failsafe' && this.state !== 'playing') this.beginPlay();
  }

  /** Run the full intro cutscene. Resolves when gameplay should start. */
  private async runIntroCutscene(): Promise<void> {
    this.introFinished = false;
    this.introActive = true;
    this.introSkipRequested = false;
    if (this.player) this.player.inputDisabled = true;

    // Phase 0: black screen over a rendered (but unseen) room. The overlays are
    // revived here because a previous run may have forced them shut.
    this.hud?.classList.add('hidden');
    this.mobileControls?.classList.add('hidden');
    document.body.classList.add('in-cutscene');
    this.reviveOverlay(this.introEyelid);
    this.reviveOverlay(this.introTypewriter);
    this.reviveOverlay(this.skipIntroBtn);

    // The in-engine phases need frames drawn while the game state is not
    // 'playing' yet, and the watchdog guards against those frames never coming.
    this.startIntroRendering();
    this.armIntroWatchdog();

    // Skip button handler. It ends the cutscene outright rather than setting a
    // flag the remaining beats would still have to wait out. Held as a field so
    // forceEndIntro() can detach this exact listener again.
    this.introSkipHandler = () => { this.forceEndIntro('skipped'); };
    this.skipIntroBtn?.addEventListener('click', this.introSkipHandler);

    // ── PHASE 1: TAPE TRANSCRIPTION (black screen) ──
    this.introTypewriterLabel && (this.introTypewriterLabel.textContent = t('intro.tapeLabel'));
    await this.introDelay(800);
    if (this.introFinished) return;
    this.playIntroRain();
    await this.introDelay(600);
    if (this.introFinished) return;
    this.playTapeClick();
    await this.introDelay(1200);
    if (this.introFinished) return;

    const narration = t('intro.narration');
    await this.typewriterEffect(this.introTypewriterText!, narration, 42);
    this.introAlive();
    if (this.introFinished) return;
    if (!this.introSkipRequested) await this.introDelay(1200);
    this.introAlive();
    if (this.introFinished) return;

    // ── PHASE 2: SENSORY AWAKENING (eyelid blink) ──
    // Fade typewriter out
    this.introTypewriter!.style.transition = 'opacity 0.8s ease';
    this.introTypewriter!.style.opacity = '0';
    await this.introDelay(900);
    this.introAlive();
    if (this.introFinished) return;
    this.introTypewriter!.classList.add('hidden');
    this.introTypewriter!.style.opacity = '';
    this.introTypewriter!.style.transition = '';

    // Eyelids: three blinks, ending OPEN. The final state must be open, or the
    // two black bars cover the entire viewport for the rest of the game.
    const blink = async (openMs: number, closedMs: number): Promise<void> => {
      this.introEyelid!.classList.add('open');
      await this.introDelay(openMs);
      this.introAlive();
      this.introEyelid!.classList.remove('open');
      await this.introDelay(closedMs);
      this.introAlive();
    };
    await blink(700, 500);
    if (this.introFinished) return;
    await blink(600, 400);
    if (this.introFinished) return;
    this.introEyelid!.classList.add('open');

    // Play gasp
    this.playGasp();
    await this.introDelay(400);
    this.introAlive();
    if (this.introFinished) return;

    // Camera: start lying on the cot, looking straight up at the ceiling
    if (this.player && this.camera && this.mapInfo) {
      const spawn = this.mapInfo.playerSpawn.clone();
      this.player.init(this.mapInfo.grid, spawn);
      this.player.setColliders(this.mapInfo.colliders);

      // Position camera on the cot (lying down)
      this.camera.position.set(spawn.x, 0.65, spawn.z);
      // Look straight up at ceiling
      const lookUp = new THREE.Vector3(spawn.x, spawn.y + 5, spawn.z);
      this.camera.lookAt(lookUp);
      // Add a slight roll for disorientation
      this.camera.rotation.z = 0.15;
    }

    // The eyelids have done their job: take the overlay away entirely rather
    // than leaving two 52%-height black bars sitting over the viewport.
    await this.introDelay(300);
    this.introAlive();
    this.killOverlay(this.introEyelid);
    await this.introDelay(800);
    this.introAlive();
    if (this.introFinished) return;

    // ── PHASE 3: GETTING UP ──
    // Smoothly rise from lying (Y 0.65 → 1.7) with dizziness sway
    const riseDuration = 2200;
    const riseStart = performance.now();
    const startPos = this.camera!.position.clone();

    await new Promise<void>((resolve) => {
      const animate = () => {
        // Every frame counts as progress: if rAF ever stops firing the
        // watchdog notices and finishes the intro for us.
        this.introAlive();
        if (this.introFinished) { resolve(); return; }
        const elapsed = performance.now() - riseStart;
        const t = Math.min(1, elapsed / riseDuration);
        // Smooth ease-in-out
        const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        // Camera rises
        const baseY = 0.65 + (EYE_HEIGHT - 0.65) * ease;
        const swayX = Math.sin(t * Math.PI * 3) * 0.08 * (1 - t);
        const swayZ = Math.cos(t * Math.PI * 2.5) * 0.06 * (1 - t);
        this.camera!.position.set(startPos.x + swayX, baseY, startPos.z + swayZ);

        // Pitch down from looking up to looking forward
        const startPitch = -Math.PI / 2.5; // looking nearly up
        const targetPitch = 0; // looking forward
        const currentPitch = startPitch + (targetPitch - startPitch) * ease;
        const lookTarget = new THREE.Vector3(
          this.camera!.position.x - Math.sin(0) * Math.cos(currentPitch),
          this.camera!.position.y + Math.sin(currentPitch),
          this.camera!.position.z - Math.cos(0) * Math.cos(currentPitch)
        );
        this.camera!.lookAt(lookTarget);
        // Remove roll
        this.camera!.rotation.z = 0.15 * (1 - ease);

        if (t < 1 && !this.introSkipRequested) {
          requestAnimationFrame(animate);
        } else {
          // Snap to standing height at the validated spawn - never inside the
          // cot, a wall or the floor.
          if (this.player && this.mapInfo && this.camera) {
            const spawn = this.mapInfo.playerSpawn;
            this.player.reset(this.mapInfo.grid, spawn);
            this.camera.position.set(spawn.x, EYE_HEIGHT, spawn.z);
            this.camera.rotation.set(0, 0, 0);
          }
          resolve();
        }
      };
      requestAnimationFrame(animate);
    });

    this.introAlive();
    if (this.introFinished) return;

    // Heartbeat + the wall's last message
    this.playHeartbeatPulse();
    this.showMessage(t('intro.wall'), 3500);
    await this.introDelay(2000);
    this.introAlive();
    if (this.introFinished) return;

    // Player whisper subtitle
    if (!this.introSkipRequested) {
      this.showMessage(t('intro.whisper'), 4500);
      await this.introDelay(2500);
      this.introAlive();
    }

    // Cleanup - the one path that hands control back with everything restored.
    this.forceEndIntro('finished');
  }

  private async startGame(): Promise<void> {
    this.startScreen?.classList.add('hidden');
    this.pauseMenu?.classList.add('hidden');

    // Mobile Chrome will only start an AudioContext from inside a real user
    // gesture, and this button press is the one it gets. Creating, resuming
    // and confirming all happen in the same task so the drone is live before
    // the cutscene begins.
    await this.audio?.init();
    this.audio?.resume();
    await this.audio?.unlock();

    if (this.isTouchDevice()) {
      document.body.classList.add('touch-device');
      this.player?.setupMobileTouch(document.getElementById('game-canvas') as HTMLCanvasElement);
      await this.lockLandscape();
    }

    // ── Cinematic intro, with a hard guarantee that it always ends ──
    try {
      await this.runIntroCutscene();
    } catch (error) {
      // A thrown cutscene must never leave the player staring at a black
      // screen: log it and drop straight into the game.
      console.error('Intro cutscene failed - starting gameplay directly:', error);
    } finally {
      // Idempotent, so this is a no-op after a normal finish. After a skip, a
      // hang or an exception it is what restores the room, the light and the
      // controls.
      this.forceEndIntro('failsafe');
    }

    // ── Transition to gameplay ──
    this.beginPlay();
  }

  /**
   * Hands control to the player: HUD on, ambience up and the render loop
   * running. Split out of startGame() so the intro failsafe can reach it even
   * if startGame() is still stuck awaiting a hung cutscene.
   */
  private beginPlay(): void {
    if (this.state === 'playing' || this.state === 'gameover' || this.state === 'win') return;

    this.hud?.classList.remove('hidden');
    if (this.isTouchDevice()) this.mobileControls?.classList.remove('hidden');

    // The context can be parked again by the time the cutscene ends, so the
    // ambience is only started once audio is genuinely live.
    void this.audio?.unlock().then((live) => {
      if (live) this.audio?.startAmbience();
    });
    this.elapsed = 0;
    this.state = 'playing';
    // Discard the time the menu/intro spent not rendering, or the first frame
    // of gameplay would jump the camera forward by several seconds.
    this.clock.getDelta();

    if (this.isTouchDevice()) {
      this.showMessage(t('msg.controlsTouch'), 5000);
    } else {
      this.showMessage(t('msg.controlsDesktop'), 6000);
    }
    this.gameLoop();
  }

  private gameLoop = (): void => {
    if (this.state !== 'playing') return;

    this.animationId = requestAnimationFrame(this.gameLoop);
    const dt = Math.min(this.clock.getDelta(), 0.05);

    // Touch devices are landscape-only: freeze the world while the rotate
    // overlay is on screen so the player cannot be caught mid-rotation.
    if (this.isPortraitBlocked()) return;

    this.elapsed += dt;

    // Doors first, so the creature is never held up by one, then the rest of
    // the fixtures, which settle before the player moves - that way the boxes
    // they publish are the ones this frame's movement is tested against.
    this.updateDoors(dt);
    this.updateFixtures(dt);

    this.player?.update(dt);

    // Nobody rides the cage except the player: while the doors are shut the
    // creature is off the board entirely, so it can never catch you mid-ride.
    if (this.monster && this.player && !this.elevator?.isLocked()) {
      // A locker is a guaranteed hiding place; anywhere else it takes a crouch
      // behind cover.
      const isHidden =
        this.hidingInLocker !== null || (this.player.crouching && this.isNearHidingSpot());
      const result = this.monster.update(dt, this.player.position, this.player.sprinting, isHidden);
      if (result.caught) this.hitByMonster();
    }

    const tension = this.keysCollected / TOTAL_KEYS;
    this.effects?.update(dt, tension, this.camera);

    this.updateInteraction(dt);
    this.checkExitDoor();
    this.checkSubstation();
    this.checkMainGate();
    this.checkOutdoors();
    this.updateRoomBanner();
    this.updateElevator(dt);
    this.updateBattery(dt);
    this.updateDanger(dt);
    this.animatePickups(dt);
    this.animateGate(dt);
    this.updateHUD();
    // Corrected right after the HUD: it disables the hand button whenever no
    // pickup is in range, and doors, drawers and lockers are still things the
    // action button has to be able to work.
    this.syncFixtureButton();
    this.updateMinimap();
    this.applyShake(dt);

    this.renderer?.render(this.scene!, this.camera!);
  };

  
  /* ---------------------------------------------------------------------
   * The vintage cage elevator
   * ------------------------------------------------------------------ */

  /**
   * Builds the touch panel out of the deck table, so the buttons can never
   * drift out of sync with the lift, and wires each one to a ride.
   */
  private installLiftUI(): void {
    const rail = document.getElementById('lift-floors');
    if (!rail || !this.liftPanel) return;

    rail.textContent = '';
    this.liftFloorButtons = [];

    // The panel reads top-down, the deck table is stored bottom-up.
    for (let i = ELEVATOR_DECKS.length - 1; i >= 0; i--) {
      const deck = ELEVATOR_DECKS[i];
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'lift-floor-btn';
      button.dataset.deck = String(i);

      const cap = document.createElement('span');
      cap.className = 'lift-floor-cap';
      cap.textContent = L(deck.label);

      const name = document.createElement('span');
      name.className = 'lift-floor-name';
      name.textContent = L(deck.name);

      button.append(cap, name);
      button.addEventListener('click', () => this.rideLift(i));
      rail.appendChild(button);
      this.liftFloorButtons.push(button);
    }

    // The lift bakes its labels into canvases, so it repaints on a language
    // change rather than being rebuilt with the level.
    onLanguageChange(() => {
      if (this.elevator) relocalizeElevator(this.elevator);
      for (const button of this.liftFloorButtons) {
        const deck = ELEVATOR_DECKS[Number(button.dataset.deck)];
        if (!deck) continue;
        const cap = button.querySelector('.lift-floor-cap');
        const name = button.querySelector('.lift-floor-name');
        if (cap) cap.textContent = L(deck.label);
        if (name) name.textContent = L(deck.name);
      }
      this.refreshLiftButtons();
      if (this.liftLocationText) this.liftLocationText.textContent = floorName(this.currentFloor);
    });

    this.refreshLiftButtons();
  }

  /** Lights the button for the deck the cage is parked on. */
  private refreshLiftButtons(): void {
    if (!this.elevator) return;
    const here = this.elevator.deck;
    const locked = this.elevator.isLocked();
    for (const button of this.liftFloorButtons) {
      button.classList.toggle('active', Number(button.dataset.deck) === here);
      button.disabled = locked;
    }
  }

  /**
   * Lets the creature through shut doors.
   *
   * Doors block the player and nothing else. The pathfinder knows nothing
   * about them, so without this the Guilt Entity would walk up to a shut door
   * and appear to give up - which reads as the AI breaking rather than as a
   * door it cannot open. Running ahead of the fixture pass also means the leaf
   * already has a head start by the time the player sees it move.
   */
  private updateDoors(dt: number): void {
    void dt;
    const monster = this.monster?.currentPosition;
    if (!monster) return;

    for (const door of this.doors) {
      if (door.target > 0.5) continue;
      const distance = Math.hypot(door.centre.x - monster.x, door.centre.z - monster.z);
      if (distance > 2.4) continue;

      door.target = 1;
      door.open = Math.min(door.open, 0.55);
      if (!door.swung) {
        door.swung = true;
        this.audio?.playDoorSwing(true);
      }
    }
  }

  /**
   * Runs the cage every frame and raises the button panel whenever the player
   * is standing inside it. The doors, the ride and the re-seating all live in
   * the Elevator module; this only turns button presses into rides and tells
   * the rest of the game where the player ended up.
   */
  private updateElevator(dt: number): void {
    const elevator = this.elevator;
    if (!elevator) return;

    elevator.update(dt, this.liftHooks);
    elevator.setPower(this.powerOn);

    if (!this.player) return;
    this.inLift = elevator.isInside(this.player.position);
    // The panel is only up when the cage is standing still with its gate open.
    this.liftPanel?.classList.toggle('show', this.inLift && !elevator.isLocked());
  }

  /** Sends the cage to a deck. Ignored while it is already moving. */
  private rideLift(deckIndex: number): void {
    const elevator = this.elevator;
    if (!elevator || !this.player) return;

    if (!elevator.isInside(this.player.position)) {
      this.showMessage(t('lift.enter'), 2600);
      return;
    }
    if (deckIndex === elevator.deck) {
      this.showMessage(t('lift.alreadyHere'), 1800);
      return;
    }
    if (!elevator.startTravel(deckIndex, this.liftHooks)) return;

    this.player.inputDisabled = true;
    this.player.setRunning(false);
    this.player.setCrouching(false);
    this.liftPanel?.classList.remove('show');
  }

  /** Called the instant the cage is re-seated, so the player rides along. */
  private onLiftTeleport(deckIndex: number): void {
    this.onLiftFloorChange(deckIndex);

    const elevator = this.elevator;
    if (!elevator || !this.player) return;

    // Step back into the cage on the new landing, slightly toward the gate so
    // the player is clear of the back wall and the cage colliders.
    this.player.teleport(elevator.centre.x, elevator.centre.z + 0.7);
    this.monster?.setVisible(false);
  }

  /** Called once the doors are open again: hand control back. */
  private onLiftArrive(deckIndex: number): void {
    const elevator = this.elevator;
    this.effects?.setAmbientFloor(GAMEPLAY_AMBIENT_FLOOR);
    if (this.player) this.player.inputDisabled = false;
    this.refreshLiftButtons();

    if (this.monster) {
      this.monster.setVisible(true);
      // Dr Aris patrols the floors. If he is standing at the landing when the
      // doors open, the terror lands before the player can even step out.
      if (elevator) {
        const creature = this.monster.currentPosition;
        const distance = Math.hypot(
          creature.x - elevator.centre.x,
          creature.z - elevator.centre.z,
        );
        if (distance < 13) {
          this.audio?.playHeartbeat(1);
          this.addShake(0.55, 0.9);
          this.showMessage(t('lift.ambush'), 3400);
        }
      }
    }

    const deck = ELEVATOR_DECKS[deckIndex];
    if (deck) this.showMessage(t('lift.arrived', { floor: L(deck.name) }), 2600);
  }

  /** Moves the HUD, the panel and the floor card onto the new deck. */
  private onLiftFloorChange(deckIndex: number): void {
    const deck = ELEVATOR_DECKS[deckIndex];
    if (!deck) return;
    this.currentFloor = deckIndex;

    if (this.liftLocationText) this.liftLocationText.textContent = L(deck.name);
    this.refreshLiftButtons();

    // The arrival card flashes up for a beat, the way a floor indicator would.
    if (this.stairTransition && this.stairFloorName) {
      this.stairFloorName.textContent = L(deck.name);
      this.stairTransition.classList.add('show');
      if (this.liftArriveTimeout) window.clearTimeout(this.liftArriveTimeout);
      this.liftArriveTimeout = window.setTimeout(() => {
        this.stairTransition?.classList.remove('show');
      }, 1400);
    }
  }
  /* ---------------------------------------------------------------------
   * Doors, desk drawers and lockers
   * ------------------------------------------------------------------ */

  /**
   * The action prompt for fixtures, plus the keys that work it.
   *
   * A capture-phase listener on the hand button would fight the existing
   * reach-out handler, so fixtures get their own tappable prompt and their own
   * key. Nothing here can ever consume an inventory item by accident.
   */
  private installFixtures(): void {
    this.fixturePrompt?.addEventListener('click', (event) => {
      event.preventDefault();
      this.useFixture();
    });

    window.addEventListener('keydown', (event) => {
      if (event.code !== 'KeyF' || event.repeat) return;
      if (!this.fixtureTarget) return;
      event.preventDefault();
      this.useFixture();
    });

    // The hand button works fixtures as well as pickups. It is registered
    // after the reach-out handler and bails out when a pickup is in range, so
    // the two can never both fire on one press.
    this.handButton?.addEventListener('pointerdown', () => {
      if (this.interaction !== null || !this.fixtureTarget) return;
      this.useFixture();
    });

    // The prompt is inside the HUD, which the intro hides for its duration.
    this.fixturePrompt?.classList.remove('show');
  }

  /**
   * Re-enables the hand button when the only thing in reach is a fixture.
   *
   * The HUD disables it whenever no pickup is in range, and the HUD is not the
   * place to teach it about doors, so it is corrected one line later.
   */
  private syncFixtureButton(): void {
    const button = this.handButton;
    if (!button) return;
    if (this.interaction !== null) return;

    const ready = this.fixtureTarget !== null;
    button.disabled = !ready;
    button.classList.toggle('active', ready);
  }

  /**
   * Arms a one-shot audio unlock on the next chunk of user input.
   *
   * Mobile Chrome parks an AudioContext whenever the page is backgrounded or
   * the tab is re-focused, and the game keeps running through the intro for
   * thirty seconds after the one click it gets. This is what makes the drone
   * and the door creaks come back when the player touches the screen again.
   */
  private installAudioUnlock(): void {
    const unlock = (): void => {
      void this.audio?.unlock().then((live) => {
        if (!live) return;
        if (this.state === 'playing') this.audio?.startAmbience();
        document.removeEventListener('pointerdown', unlock, true);
        document.removeEventListener('keydown', unlock, true);
        document.removeEventListener('touchstart', unlock, true);
      });
    };
    document.addEventListener('pointerdown', unlock, true);
    document.addEventListener('keydown', unlock, true);
    document.addEventListener('touchstart', unlock, true);
  }

  /**
   * Adopts the live fixtures out of a freshly built level, and hides the ward
   * keys in the desk drawers they belong to.
   */
  private bindFixtures(): void {
    const map = this.mapInfo;
    if (!map) return;

    this.elevator = map.elevator;
    this.doors = map.doors;
    this.desks = map.desks;
    this.lockers = map.lockers;

    this.fixtureTarget = null;
    this.hidingInLocker = null;
    this.lockerView?.classList.remove('show');
    document.body.classList.remove('in-locker');

    this.stashKeysInDesks();
  }

  /**
   * Moves every loose ward key into the drawer of the desk standing on its
   * cell.
   *
   * World lays the keys out on the floor so the level builder can prove they
   * are reachable; this is where they stop being floor pickups. Their item id
   * is cleared in the same pass, which is what stops the player reaching
   * through a shut drawer and taking one anyway.
   */
  private stashKeysInDesks(): void {
    const scene = this.scene;
    if (!scene || this.desks.length === 0) return;

    const loose: THREE.Object3D[] = [];
    scene.traverse((child) => {
      if (child.userData.itemId === 'key') loose.push(child);
    });

    const scratch = new THREE.Vector3();
    for (const key of loose) {
      key.getWorldPosition(scratch);

      let best: DrawerFixture | null = null;
      let bestDistance = 3.2;
      for (const desk of this.desks) {
        const distance = Math.hypot(desk.centre.x - scratch.x, desk.centre.z - scratch.z);
        if (distance >= bestDistance) continue;
        bestDistance = distance;
        best = desk;
      }
      if (!best) continue;

      const index = typeof key.userData.pickupIndex === 'number' ? key.userData.pickupIndex : -1;
      key.parent?.remove(key);
      delete key.userData.itemId;
      delete key.userData.pickupIndex;
      // Decorative from here on: the drawer hands the key over, not the mesh.
      key.userData.isKey = false;
      key.userData.isDrawerLoot = true;
      key.position.set(0, 0.6, 0.05);
      key.rotation.set(0, 0, Math.PI / 2);

      best.drawer.add(key);
      best.loot = key;
      best.lootKind = 'key';
      best.lootIndex = index;
    }
  }

  /**
   * Runs the doors, the drawers and the lockers, publishes the shut ones as
   * blockers, and decides what the action button would work.
   */
  private updateFixtures(dt: number): void {
    if (!this.player) return;
    const position = this.player.position;
    const monster = this.monster?.currentPosition ?? null;

    // --- Doors ----------------------------------------------------------
    // Only the doors around the player are drawn, animated or blocking. There
    // are over a hundred of them and most are nowhere near anyone.
    const blockers: THREE.Box3[] = [];
    for (const door of this.doors) {
      const distance = Math.hypot(door.centre.x - position.x, door.centre.z - position.z);
      if (distance > FIXTURE_RADIUS) {
        door.hinge.visible = false;
        continue;
      }
      door.hinge.visible = true;

      // Something heavy is coming through: the leaf is shoved open ahead of it.
      if (monster && !door.swung) {
        const creatureDistance = Math.hypot(door.centre.x - monster.x, door.centre.z - monster.z);
        if (creatureDistance < 2.4) {
          door.swung = true;
          door.target = 1;
        }
      }

      advanceDoor(door, dt);
      // A leaf that is still opening is left passable, so nobody is ever
      // trapped between the frame and a door swinging shut on them.
      if (door.open < 0.35 && door.target < 0.5) blockers.push(door.box);
    }
    this.player.setBlockers(blockers);

    // --- Drawers and lockers --------------------------------------------
    for (const desk of this.desks) advanceDrawer(desk, dt);
    for (const locker of this.lockers) advanceLocker(locker, dt);

    // --- What the action button would work ------------------------------
    let best: FixtureTarget | null = null;

    if (this.hidingInLocker) {
      best = { kind: 'locker', label: t('act.lockerLeave'), locker: this.hidingInLocker };
    } else {
      let bestDistance = FIXTURE_REACH;

      for (const door of this.doors) {
        const distance = Math.hypot(door.centre.x - position.x, door.centre.z - position.z);
        if (distance >= bestDistance) continue;
        bestDistance = distance;
        best = {
          kind: 'door',
          label: door.target > 0.5 ? t('act.doorClose') : t('act.doorOpen'),
          door,
        };
      }

      for (const desk of this.desks) {
        const distance = Math.hypot(desk.centre.x - position.x, desk.centre.z - position.z);
        if (distance >= bestDistance) continue;
        bestDistance = distance;
        best = { kind: 'drawer', label: this.drawerLabel(desk), desk };
      }

      for (const locker of this.lockers) {
        const distance = Math.hypot(locker.centre.x - position.x, locker.centre.z - position.z);
        if (distance >= bestDistance) continue;
        bestDistance = distance;
        best = { kind: 'locker', label: t('act.lockerEnter'), locker };
      }
    }

    this.fixtureTarget = best;
    this.fixturePrompt?.classList.toggle('show', best !== null);
    if (best && this.fixtureLabel) this.fixtureLabel.textContent = best.label;
  }

  /** What the drawer prompt should say, given what is still inside it. */
  private drawerLabel(desk: DrawerFixture): string {
    if (!desk.opened) {
      return desk.lootKind === 'key' ? t('act.drawerKey') : t('act.drawer');
    }
    if (desk.loot) return desk.lootKind === 'key' ? t('act.takeKey') : t('act.takeLoot');
    return desk.slide > 0.5 ? t('act.drawerShut') : t('act.drawer');
  }

  /** Works whatever fixture the prompt is offering. */
  private useFixture(): void {
    const target = this.fixtureTarget;
    if (!target) return;

    if (target.kind === 'door') {
      const opening = target.door.target < 0.5;
      target.door.target = opening ? 1 : 0;
      target.door.swung = true;
      this.audio?.playDoorSwing(opening);
      return;
    }

    if (target.kind === 'drawer') {
      const desk = target.desk;
      if (!desk.opened) {
        desk.opened = true;
        desk.target = 1;
        this.audio?.playDrawerSlide();
        return;
      }
      if (desk.loot) {
        this.takeDrawerLoot(desk);
        return;
      }
      desk.target = desk.target > 0.5 ? 0 : 1;
      this.audio?.playDrawerSlide();
      return;
    }

    if (this.hidingInLocker) this.leaveLocker();
    else this.enterLocker(target.locker);
  }

  /** Empties a drawer into the player's hands. */
  private takeDrawerLoot(desk: DrawerFixture): void {
    const kind = desk.lootKind;
    const index = desk.lootIndex;
    desk.loot?.parent?.remove(desk.loot);
    desk.loot = null;

    if (kind === 'key') {
      this.inventory?.add('key');
      this.keysCollected = this.inventory?.totalKeys ?? this.keysCollected + 1;
      if (index >= 0) this.keyTaken.add(index);
      this.marksDirty = true;
      document.getElementById(`key-${this.keysCollected}`)?.classList.add('collected');
      this.audio?.playKeyPickup();
      this.showMessage(t('msg.keyFound', { keys: this.keysCollected, total: TOTAL_KEYS }), 2400);
      this.updateObjective();
      if (this.keysCollected >= TOTAL_KEYS) this.unlockExit();
      return;
    }

    const item: ItemId = kind === 'battery' ? 'battery' : 'bottle';
    this.inventory?.add(item);
    this.audio?.playKeyPickup();
    this.showMessage(t('msg.drawerLoot', { item: t(`item.${item}.name`) }), 2400);
  }

  /** Opens the locker, climbs in and shuts the door behind the player. */
  private enterLocker(locker: LockerFixture): void {
    if (!this.player || this.hidingInLocker) return;

    locker.target = 1;
    this.audio?.playLockerDoor(true);
    this.hidingInLocker = locker;

    // Frozen inside: movement and look are both off, which is what makes the
    // vents feel like the only window on the room.
    this.player.inputDisabled = true;
    this.player.place(locker.inside.x, locker.inside.z, locker.yaw);

    this.lockerView?.classList.add('show');
    document.body.classList.add('in-locker');
    this.showMessage(t('msg.lockerIn'), 2600);

    // Shut it behind you once you are in.
    if (this.lockerTimeout) window.clearTimeout(this.lockerTimeout);
    this.lockerTimeout = window.setTimeout(() => {
      locker.target = 0;
      this.audio?.playLockerDoor(false);
    }, 700);
  }

  /** Steps back out into the corridor. */
  private leaveLocker(): void {
    const locker = this.hidingInLocker;
    if (!locker || !this.player) return;

    if (this.lockerTimeout) window.clearTimeout(this.lockerTimeout);
    this.hidingInLocker = null;
    locker.target = 1;
    this.audio?.playLockerDoor(true);

    this.player.inputDisabled = false;
    this.player.teleport(locker.outside.x, locker.outside.z);
    this.lockerView?.classList.remove('show');
    document.body.classList.remove('in-locker');
    this.showMessage(t('msg.lockerOut'), 1800);
  }

  private pauseGame(): void {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    cancelAnimationFrame(this.animationId);
    this.player?.setRunning(false);
    this.audio?.suspend();
    this.pauseMenu?.classList.remove('hidden');
  }

  private resumeGame(): void {
    if (this.state !== 'paused') return;
    this.pauseMenu?.classList.add('hidden');
    this.audio?.resume();
    this.clock.getDelta();
    this.state = 'playing';
    this.gameLoop();
  }

  private restartGame(): void {
    for (const screen of [this.gameoverScreen, this.winScreen, this.pauseMenu, this.jumpscareOverlay]) {
      screen?.classList.add('hidden');
    }
    this.hud?.classList.add('hidden');
    this.mobileControls?.classList.add('hidden');
    this.roomBanner?.classList.remove('show');
    if (this.dangerVignette) this.dangerVignette.style.opacity = '0';

    this.resetRunState();

    if (this.scene && this.camera) {
      while (this.scene.children.length > 0) {
        this.scene.remove(this.scene.children[0]);
      }
      this.scene.add(this.camera);

      this.mapInfo = buildWorld(this.scene);
      this.bindFixtures();
      this.currentFloor = floorAt(this.mapInfo.playerSpawn.z / CELL);
      if (this.liftLocationText) this.liftLocationText.textContent = floorName(this.currentFloor);
      if (this.player) this.player.inputDisabled = false;
      this.refreshLiftButtons();
      this.minimap?.attach(this.mapInfo);
      this.player?.reset(this.mapInfo.grid, this.mapInfo.playerSpawn);
      this.player?.setColliders(this.mapInfo.colliders);

      // Reset effects first: this drops stale flicker lights and re-attaches
      // the ambient light that the scene clear removed.
      this.effects?.reset();
      this.effects?.setFluorescentMaterials(this.mapInfo.fluorescentMaterials);

      this.monster?.setColliders(this.mapInfo.colliders);

      if (this.effects) this.flashlight = this.effects.createFlashlight(this.camera);

      this.collectPickups();
      this.monster?.reset(this.mapInfo.monsterSpawn);
      this.addMapLights();
      this.applyQuality();
    }

    void this.startGame();
  }

  private resetRunState(): void {
    this.keysCollected = 0;
    this.notesCollected = 0;
    this.cardCollected = false;
    this.inventory?.clear();
    this.pickups.length = 0;
    this.boardedDoors = [];
    this.interaction = null;
    this.marksDirty = true;
    this.substationOn = false;
    this.exitOpened = false;
    this.gateOpened = false;
    this.gateSwing = 0;
    this.gateNoticeCooldown = 0;
    this.wasOutdoors = false;
    this.outdoorLights = [];
    this.flashlightBattery = 100;
    this.flashlightOn = true;
    this.health = MAX_HEALTH;
    this.invulnerable = 0;
    this.danger = 0;
    this.heartbeatTimer = 0;
    this.shakeTime = 0;
    this.elapsed = 0;
    this.phase = 'power';
    this.powerOn = false;
    this.currentRoomIndex = -1;
    this.visitedRooms.clear();
    this.scriptedScares.clear();
    this.keyTaken.clear();
    this.noteTaken.clear();
    this.cardTaken.clear();

    if (this.flashlight) this.flashlight.intensity = 5.0;

    const lockMaterial = this.mapInfo?.exitLock.material;
    if (lockMaterial instanceof THREE.MeshStandardMaterial) {
      lockMaterial.emissive.set(0xff1a1a);
      lockMaterial.emissiveIntensity = 1.4;
    }

    const lever = this.mapInfo?.breakerMesh.children.find((child) => child.userData.isBreakerLever);
    if (lever) lever.rotation.x = -0.6;

    const lamp = this.mapInfo?.breakerMesh.children.find((child) => child.userData.isBreakerLamp);
    const lampMaterial = lamp instanceof THREE.Mesh ? lamp.material : null;
    if (lampMaterial instanceof THREE.MeshStandardMaterial) lampMaterial.emissive.set(0xff2200);

    for (let i = 1; i <= TOTAL_KEYS; i++) {
      document.getElementById(`key-${i}`)?.classList.remove('collected');
    }
    document.getElementById('card-icon')?.classList.remove('collected');
    document.getElementById('power-icon')?.classList.remove('collected');
    this.lightningFlash?.classList.remove('show');
    this.effects?.setOutdoors(false);
    this.audio?.setRaining(false);
    const battery = document.getElementById('battery-bar');
    if (battery) {
      battery.style.width = '100%';
      battery.classList.remove('low', 'charging');
    }
    const stamina = document.getElementById('stamina-bar');
    if (stamina) {
      stamina.style.width = '100%';
      stamina.classList.remove('low');
    }

    this.updateObjective();
    this.updateHUD();
  }

  private collectPickups(): void {
    this.keys = [];
    this.notes = [];
    this.cards = [];
    this.pickups.length = 0;
    this.boardedDoors = [];
    this.scene?.traverse((child) => {
      if (child.userData.isKey) this.keys.push(child);
      if (child.userData.isNote) this.notes.push(child);
      if (child.userData.isCard) this.cards.push(child);
      if (child.userData.isBoardedDoor) this.boardedDoors.push(child);

      const item = child.userData.itemId;
      if (typeof item === 'string' && child.parent) {
        this.pickups.push({
          object: child,
          kind: 'item',
          noteIndex: -1,
          item: item as ItemId,
          label: t('act.take', { item: t(`item.${item}.name`) }),
        });
      } else if (child.userData.isNote) {
        const noteIndex = typeof child.userData.noteIndex === 'number' ? child.userData.noteIndex : -1;
        this.pickups.push({
          object: child,
          kind: 'note',
          noteIndex,
          item: 'key',
          label: t('act.readNote'),
        });
      }
    });
    this.marksDirty = true;
  }

  // --- Story: power --------------------------------------------------------

  // The generator is no longer restored by walking into it: the breaker is
  // missing a fuse, and the player has to fit one (see `interact`).

  private restorePower(): void {
    this.powerOn = true;
    this.phase = 'keys';

    this.effects?.setPower(true);
    this.monster?.setAggression(1.28);
    this.audio?.playPowerOn();
    this.addShake(0.55, 1.1);

    // Flip the lever and turn the indicator lamp green
    this.mapInfo?.breakerMesh.traverse((child) => {
      if (child.userData.isBreakerLever) child.rotation.x = 0.6;
      if (child.userData.isBreakerLamp && child instanceof THREE.Mesh) {
        const material = child.material;
        if (material instanceof THREE.MeshStandardMaterial) {
          material.emissive.set(0x22ff66);
          material.emissiveIntensity = 2.4;
        }
      }
    });

    this.showMessage(t('msg.powerOn'), 4200);
    this.updateObjective();
  }

  // --- Story: rooms --------------------------------------------------------

  private updateRoomBanner(): void {
    if (!this.player || !this.mapInfo) return;

    const index = roomIndexAt(this.mapInfo, this.player.position.x, this.player.position.z);
    if (index === this.currentRoomIndex) return;
    this.currentRoomIndex = index;
    if (index < 0) return;

    const room = this.mapInfo.rooms[index];
    if (!room) return;

    this.showRoomBanner(room);

    if (!this.visitedRooms.has(index)) {
      this.visitedRooms.add(index);
      this.triggerRoomScare(room);
    }
  }

  private showRoomBanner(room: RoomInfo): void {
    if (!this.roomBanner) return;
    if (this.roomBannerName) this.roomBannerName.textContent = L(room.name);
    if (this.roomBannerSubtitle) this.roomBannerSubtitle.textContent = L(room.subtitle);

    this.roomBanner.classList.add('show');
    if (this.roomBannerTimeout) window.clearTimeout(this.roomBannerTimeout);
    this.roomBannerTimeout = window.setTimeout(() => {
      this.roomBanner?.classList.remove('show');
    }, 3600);
  }

  private triggerRoomScare(room: RoomInfo): void {
    // The table is keyed by the room's LAYOUT character, the one identifier
    // that survives a language change.
    const scare = SCARE_ROOMS[room.key];
    if (!scare || this.scriptedScares.has(room.key)) return;
    this.scriptedScares.add(room.key);

    if (scare === 'whisper') {
      this.audio?.playWhisper();
      this.addShake(0.12, 0.5);
    } else if (scare === 'scare') {
      this.triggerJumpscare();
    } else {
      this.effects?.blackout(1500);
      this.audio?.playWhisper();
    }
  }

  // --- Collecting ----------------------------------------------------------

  /**
   * Finds whatever the player could reach right now. Walking over a pickup no
   * longer collects it - reaching out for it is what makes the inventory feel
   * like something the player did rather than something that happened.
   */
  private updateInteraction(dt: number): void {
    this.interactionTimer -= dt;
    if (this.interactionTimer > 0) return;
    this.interactionTimer = 0.1;

    this.interaction = null;
    if (!this.player || !this.mapInfo) return;

    const position = this.player.position;
    let best: Interaction | null = null;
    let bestDistance = REACH;

    for (const pickup of this.pickups) {
      pickup.object.getWorldPosition(this.scratch);
      const distance = Math.hypot(this.scratch.x - position.x, this.scratch.z - position.z);
      if (distance >= bestDistance) continue;
      bestDistance = distance;
      best = { kind: 'pickup', label: pickup.label, pickup };
    }

    const boards = this.nearestBoardedDoor();
    if (boards && boards.distance < bestDistance) {
      bestDistance = boards.distance;
      best = {
        kind: 'boards',
        label: this.inventory?.has('crowbar') ? t('act.pry') : t('act.boarded'),
      };
    }

    const breakerDistance = Math.hypot(
      this.mapInfo.breakerPosition.x - position.x,
      this.mapInfo.breakerPosition.z - position.z
    );
    if (!this.powerOn && breakerDistance < bestDistance) {
      best = {
        kind: 'breaker',
        label: this.inventory?.has('fuse') ? t('act.installFuse') : t('act.needFuse'),
      };
    }

    this.interaction = best;
  }

  /** Distance to the closest still-boarded doorway, if one is in reach. */
  private nearestBoardedDoor(): { object: THREE.Object3D; distance: number } | null {
    if (!this.player || this.boardedDoors.length === 0) return null;
    const position = this.player.position;
    let best: { object: THREE.Object3D; distance: number } | null = null;
    for (const door of this.boardedDoors) {
      const distance = Math.hypot(door.position.x - position.x, door.position.z - position.z);
      if (distance > REACH) continue;
      if (!best || distance < best.distance) best = { object: door, distance };
    }
    return best;
  }

  /** Reach out and take, read or use whatever is in front of the player. */
  private interact(): void {
    const target = this.interaction;
    if (!target) return;

    if (target.kind === 'pickup') {
      this.takePickup(target.pickup);
      return;
    }

    if (target.kind === 'boards') {
      if (!this.inventory?.has('crowbar')) {
        this.showMessage(t('msg.boarded'), 2600);
        return;
      }
      this.pryBoardedDoor();
      return;
    }

    if (!this.inventory?.has('fuse')) {
      this.showMessage(t('msg.noFuse'), 3200);
      return;
    }
    this.inventory.take('fuse');
    this.restorePower();
  }

  private takePickup(pickup: PickupRecord): void {
    const index = this.pickups.indexOf(pickup);
    if (index >= 0) this.pickups.splice(index, 1);
    pickup.object.parent?.remove(pickup.object);
    this.interaction = null;

    if (pickup.kind === 'note') {
      if (pickup.noteIndex >= 0) this.noteTaken.add(pickup.noteIndex);
      this.notesCollected++;
      this.audio?.playNote();
      this.showNote(pickup.noteIndex);
      this.marksDirty = true;
      return;
    }

    // Remember which world pickup is gone, so the corner map stops pointing
    // at it.
    const pickupIndex =
      typeof pickup.object.userData.pickupIndex === 'number' ? pickup.object.userData.pickupIndex : -1;
    if (pickupIndex >= 0) {
      if (pickup.item === 'key') this.keyTaken.add(pickupIndex);
      if (pickup.item === 'card') this.cardTaken.add(pickupIndex);
    }

    this.audio?.playKeyPickup();
    this.inventory?.add(pickup.item);
    this.marksDirty = true;

    if (pickup.item === 'key') {
      this.keysCollected = this.inventory?.totalKeys ?? 0;
      if (this.keysCollected > 0) {
        document.getElementById(`key-${this.keysCollected}`)?.classList.add('collected');
      }
      this.showMessage(t('msg.keyFound', { keys: this.keysCollected, total: TOTAL_KEYS }), 2200);
      this.updateObjective();
      if (this.keysCollected >= TOTAL_KEYS) this.unlockExit();
      return;
    }

    if (pickup.item === 'card') {
      this.cardCollected = true;
      document.getElementById('card-icon')?.classList.add('collected');
      this.showMessage(t('msg.cardFound'), 2600);
      this.unlockGate();
      this.updateObjective();
      return;
    }

    this.showMessage(
      t('msg.itemTaken', { item: t(`item.${pickup.item}.name`), hint: t(`item.${pickup.item}.hint`) }),
      3000
    );
    this.updateObjective();
  }

  /** The crowbar comes out, the planks come off, and the grid reopens. */
  private pryBoardedDoor(): void {
    const map = this.mapInfo;
    if (!map || this.boardedDoors.length === 0) return;

    for (const door of this.boardedDoors) {
      // The cell is read back out of the mesh position, so the board-up does
      // not need a parallel list handed through MapInfo.
      const row = Math.round(door.position.z / CELL);
      const col = Math.round(door.position.x / CELL);
      if (map.grid[row]?.[col] === 0) map.grid[row][col] = 1;
      door.parent?.remove(door);
    }
    this.boardedDoors = [];
    this.audio?.playDoorUnlock();
    this.addShake(0.18, 0.5);
    this.showMessage(t('msg.pried'), 3200);
    this.updateObjective();
  }

  /** Tapping a slot in the inventory strip. */
  private useItem(id: ItemId): void {
    if (id === 'battery') {
      if (!this.inventory?.take('battery')) return;
      this.flashlightBattery = Math.min(100, this.flashlightBattery + 45);
      this.audio?.playKeyPickup();
      this.showMessage(t('msg.battery'), 2000);
      return;
    }
    if (id === 'bottle') {
      this.throwBottle();
      return;
    }
    this.showMessage(t('msg.itemUsed', { item: t(`item.${id}.name`), hint: t(`item.${id}.hint`) }), 2600);
  }

  /**
   * Hurl a collected glass vial a few metres ahead. The smash pulls the
   * creature to that spot, buying the player a corridor of distance.
   */
  private throwBottle(): void {
    if (!this.player || !this.monster || !this.scene) return;
    if (!this.inventory?.take('bottle')) return;

    // Launch from the camera, in the direction the player is facing.
    const origin = new THREE.Vector3();
    this.camera?.getWorldPosition(origin);
    const direction = new THREE.Vector3();
    this.camera?.getWorldDirection(direction);

    const vial = new THREE.Mesh(
      new THREE.SphereGeometry(0.07, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0x9fd8c8, roughness: 0.15, transparent: true, opacity: 0.7 })
    );
    vial.position.copy(origin).addScaledVector(direction, 0.5);
    this.scene.add(vial);

    // Simple ballistic arc, resolved with raycast-free grid sampling.
    const velocity = direction.clone().multiplyScalar(11);
    velocity.y = 4.2;
    let landed = false;
    const step = 1 / 60;
    const tick = (): void => {
      if (landed) return;
      velocity.y -= 14 * step;
      vial.position.addScaledVector(velocity, step);
      vial.rotation.x += 9 * step;
      vial.rotation.z += 7 * step;

      const floorY = 0.08;
      const outOfBounds = vial.position.length() > 260;
      if (vial.position.y <= floorY || outOfBounds) {
        landed = true;
        const impact = vial.position.clone();
        this.scene?.remove(vial);
        (vial.material as THREE.Material).dispose();
        vial.geometry.dispose();

        this.audio?.playGlassShatter();
        this.spawnShardBurst(impact);
        // The noise drags the creature off to look, even mid-chase.
        this.monster?.goInvestigateAt(impact);
        this.showMessage(t('msg.glass'), 2200);
      } else {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  }

  /** A brief spray of bright glass shards where the vial hit. */
  private spawnShardBurst(at: THREE.Vector3): void {
    if (!this.scene) return;
    const count = 14;
    const positions = new Float32Array(count * 3);
    const speeds: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = at.x;
      positions[i * 3 + 1] = Math.max(0.05, at.y);
      positions[i * 3 + 2] = at.z;
      speeds.push(
        new THREE.Vector3((Math.random() - 0.5) * 4, 2 + Math.random() * 3, (Math.random() - 0.5) * 4)
      );
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xcfeee4,
      size: 0.07,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
    });
    const shards = new THREE.Points(geometry, material);
    this.scene.add(shards);

    let age = 0;
    const step = 1 / 60;
    const animate = (): void => {
      age += step;
      const attribute = shards.geometry.getAttribute('position') as THREE.BufferAttribute;
      const array = attribute.array as Float32Array;
      for (let i = 0; i < count; i++) {
        speeds[i].y -= 12 * step;
        array[i * 3] += speeds[i].x * step;
        array[i * 3 + 1] = Math.max(0.03, array[i * 3 + 1] + speeds[i].y * step);
        array[i * 3 + 2] += speeds[i].z * step;
      }
      attribute.needsUpdate = true;
      material.opacity = Math.max(0, 0.95 - age * 1.1);
      if (age < 1.1) requestAnimationFrame(animate);
      else {
        this.scene?.remove(shards);
        geometry.dispose();
        material.dispose();
      }
    };
    requestAnimationFrame(animate);
  }

  private unlockExit(): void {
    this.phase = 'escape';

    if (this.mapInfo?.exitLock.material instanceof THREE.MeshStandardMaterial) {
      this.mapInfo.exitLock.material.emissive.set(0x22ff66);
      this.mapInfo.exitLock.material.emissiveIntensity = 2.2;
    }
    this.audio?.playDoorUnlock();
    this.showMessage(t('msg.allKeys'), 4000);
    this.updateObjective();
  }

  private checkExitDoor(): void {
    if (!this.player || !this.mapInfo) return;

    const distance = this.player.position.distanceTo(this.mapInfo.exitPosition);
    if (distance > 2.4) {
      this.lockedNoticeCooldown = 0;
      return;
    }

    if (this.exitOpened) return;

    const blocked = !this.powerOn
      ? t('msg.exitUnpowered')
      : this.keysCollected < TOTAL_KEYS
        ? t('msg.exitLocked', { left: TOTAL_KEYS - this.keysCollected })
        : null;

    if (blocked) {
      // Cooldown so standing at the door does not retrigger the toast every frame
      if (this.lockedNoticeCooldown <= 0) {
        this.lockedNoticeCooldown = 3;
        this.showMessage(blocked, 2400);
      }
      return;
    }

    this.openExitDoor();
  }

  /**
   * The reception door swings open. This is no longer the ending - it is the
   * door into the grounds, where the actual escape has to be earned.
   */
  private openExitDoor(): void {
    this.exitOpened = true;
    this.phase = 'outside';

    const door = this.mapInfo?.exitDoor;
    if (door) door.rotation.y = -1.2;
    if (this.mapInfo?.exitLock.material instanceof THREE.MeshStandardMaterial) {
      this.mapInfo.exitLock.material.emissive.set(0x22ff66);
      this.mapInfo.exitLock.material.emissiveIntensity = 2.2;
    }

    this.audio?.playDoorUnlock();
    this.addShake(0.2, 0.7);
    this.showMessage(t('msg.exitOpen'), 4600);
    this.updateObjective();
  }

  // --- The grounds ---------------------------------------------------------

  /** Swap the soundscape and lighting the moment the player steps outside. */
  private checkOutdoors(): void {
    if (!this.player) return;

    const outdoors = isOutdoor(this.player.position.x, this.player.position.z);
    if (outdoors === this.wasOutdoors) return;
    this.wasOutdoors = outdoors;

    this.effects?.setOutdoors(outdoors);
    this.audio?.setRaining(outdoors);

    if (outdoors) {
      this.showMessage(t('msg.outdoors'), 4200);
    }
  }

  /** Lightning: white out the screen, then roll thunder in behind it. */
  private onLightning(): void {
    this.audio?.playThunder(0.3 + Math.random() * 0.6);

    const flash = this.lightningFlash;
    if (!flash) return;

    flash.classList.add('show');
    if (this.lightningTimeout) window.clearTimeout(this.lightningTimeout);
    this.lightningTimeout = window.setTimeout(() => flash.classList.remove('show'), 150);

    // A dimmer second pulse lands a beat later, the way real strikes do
    window.setTimeout(() => {
      flash.classList.add('show');
      window.setTimeout(() => flash.classList.remove('show'), 80);
    }, 230);
  }

  private checkSubstation(): void {
    if (this.substationOn || !this.player || !this.mapInfo) return;
    if (this.player.position.distanceTo(this.mapInfo.substationPosition) > 2.4) return;
    this.restoreSubstation();
  }

  /** Throw the yard's main breaker: the gate motor and the lamp posts wake up. */
  private restoreSubstation(): void {
    this.substationOn = true;

    this.audio?.playPowerOn();
    this.addShake(0.5, 1.1);

    this.mapInfo?.substationMesh.traverse((child) => {
      if (child.userData.isSubstationLever) child.rotation.x = 0.6;
      if (child.userData.isSubstationLamp && child instanceof THREE.Mesh) {
        const material = child.material;
        if (material instanceof THREE.MeshStandardMaterial) {
          material.emissive.set(0x22ff66);
          material.emissiveIntensity = 2.4;
        }
      }
    });

    this.lightOutdoorLamps();
    for (const material of this.mapInfo?.lampMaterials ?? []) {
      material.emissiveIntensity = 1.5;
    }

    document.getElementById('power-icon')?.classList.add('collected');
    this.showMessage(t('msg.substationOn'), 4400);
    this.unlockGate();
    this.updateObjective();
  }

  /** The gate opens only once it has both power and a valid card. */
  private unlockGate(): void {
    if (!this.substationOn) return;
    if (!this.cardCollected) {
      this.showMessage(t('msg.gateNeedsCard'), 3600);
      return;
    }
    this.openMainGate();
  }

  private openMainGate(): void {
    if (this.gateOpened || !this.mapInfo) return;
    this.gateOpened = true;
    this.phase = 'gate';

    if (this.mapInfo.gateLock.material instanceof THREE.MeshStandardMaterial) {
      this.mapInfo.gateLock.material.emissive.set(0x22ff66);
      this.mapInfo.gateLock.material.emissiveIntensity = 2.2;
    }

    this.audio?.playGateUnlock();
    this.addShake(0.65, 1.5);
    this.showMessage(t('msg.gateOpen'), 5200);
    this.updateObjective();
  }

  /** The leaves swing rather than snap, so the run has a finish-line moment. */
  private animateGate(dt: number): void {
    if (!this.gateOpened || !this.mapInfo) return;
    if (this.gateSwing >= 1) return;

    this.gateSwing = Math.min(1, this.gateSwing + dt * 0.7);
    const angle = this.gateSwing * 1.55;
    for (const leaf of this.mapInfo.gateLeaves) {
      const sign = (leaf.userData.sign as number) ?? 1;
      leaf.rotation.y = -sign * angle;
    }
  }

  private checkMainGate(): void {
    if (!this.player || !this.mapInfo) return;

    // Generous radius: the fence cell in front of the gate sits a full tile
    // away from the wall line, and the finish should not be missable.
    const distance = this.player.position.distanceTo(this.mapInfo.gatePosition);
    if (distance > 3.6) {
      this.gateNoticeCooldown = 0;
      return;
    }

    if (this.gateOpened) {
      this.onWin();
      return;
    }

    const blocked = !this.substationOn
      ? t('msg.gateNoPower')
      : t('msg.gateLocked');

    if (this.gateNoticeCooldown <= 0) {
      this.gateNoticeCooldown = 3;
      this.showMessage(blocked, 2600);
    }
  }

  // --- Combat --------------------------------------------------------------

  private hitByMonster(): void {
    if (this.state !== 'playing' || this.invulnerable > 0) return;

    this.health = Math.max(0, this.health - MONSTER_DAMAGE);
    this.invulnerable = INVULNERABLE_TIME;
    this.audio?.playDamage();
    this.flashDamage();
    this.addShake(0.5, 0.5);
    this.monster?.stun(3.2);

    if (this.health <= 0) this.onPlayerCaught();
    else this.showMessage(t('msg.hurt', { health: this.health }), 1800);
  }

  private addShake(amount: number, duration: number): void {
    this.shakeAmount = amount;
    this.shakeDuration = Math.max(0.1, duration);
    this.shakeTime = this.shakeDuration;
  }

  private applyShake(dt: number): void {
    if (this.shakeTime <= 0 || !this.camera) return;
    this.shakeTime -= dt;
    const decay = Math.max(0, this.shakeTime / this.shakeDuration);
    const strength = this.shakeAmount * decay;

    this.camera.position.x += (Math.random() - 0.5) * strength;
    this.camera.position.y += (Math.random() - 0.5) * strength * 0.7;
    this.camera.rotation.z += (Math.random() - 0.5) * strength * 0.08;
  }

  private flashDamage(): void {
    if (!this.damageFlash) return;
    this.damageFlash.classList.add('show');
    if (this.damageTimeout) window.clearTimeout(this.damageTimeout);
    this.damageTimeout = window.setTimeout(() => {
      this.damageFlash?.classList.remove('show');
    }, 320);
  }

  // --- Per-frame UI --------------------------------------------------------

  private updateBattery(dt: number): void {
    if (this.invulnerable > 0) this.invulnerable -= dt;

    const recovering = !this.flashlightOn && this.flashlightBattery < 100;

    if (this.flashlightOn) {
      this.flashlightBattery = Math.max(0, this.flashlightBattery - BATTERY_DRAIN * dt);
      if (this.flashlightBattery <= 0) {
        this.flashlightOn = false;
        if (this.flashlight) this.flashlight.intensity = 0;
        this.showMessage(t('msg.batteryDead'), 3000);
      }
    } else if (recovering) {
      this.flashlightBattery = Math.min(100, this.flashlightBattery + BATTERY_RECOVER * dt);
    }

    const battery = document.getElementById('battery-bar');
    if (battery) {
      battery.style.width = `${this.flashlightBattery.toFixed(1)}%`;
      battery.classList.toggle('low', this.flashlightBattery < 25 && !recovering);
      battery.classList.toggle('charging', recovering);
    }
  }

  private updateDanger(dt: number): void {
    if (!this.monster || !this.player) return;

    const distance = this.monster.distanceTo(this.player.position);
    const proximity = 1 - Math.min(1, Math.max(0, (distance - 2.5) / 13));
    const chasing = this.monster.isChasing ? 0.35 : 0;
    const target = Math.min(1, proximity * 0.75 + chasing);

    this.danger += (target - this.danger) * Math.min(1, dt * 2.5);
    this.effects?.setDanger(this.danger);

    if (this.dangerVignette) this.dangerVignette.style.opacity = (this.danger * 0.9).toFixed(3);

    if (this.lockedNoticeCooldown > 0) this.lockedNoticeCooldown -= dt;
    if (this.gateNoticeCooldown > 0) this.gateNoticeCooldown -= dt;

    this.heartbeatTimer -= dt;
    if (this.danger > 0.22 && this.heartbeatTimer <= 0) {
      this.heartbeatTimer = 1.15 - this.danger * 0.72;
      this.audio?.playHeartbeat(this.danger);
    }
  }

  /** Bob and spin whatever is still lying around, so it catches the torch. */
  private animatePickups(dt: number): void {
    for (const pickup of this.pickups) {
      if (pickup.kind !== 'item') continue;
      const object = pickup.object;
      object.rotation.y += dt * (pickup.item === 'key' ? 1.5 : 1.1);
      object.position.y = 0.95 + Math.sin(this.elapsed * 1.8 + object.position.x) * 0.1;
    }
  }

  /**
   * Feeds the corner map. The state object is reused and mutated in place so
   * the per-frame cost is a handful of assignments, not three fresh arrays.
   */
  private updateMinimap(): void {
    if (!this.minimap || !this.mapInfo || !this.player) return;
    const state = this.minimapState;

    state.player.x = this.player.position.x;
    state.player.z = this.player.position.z;
    state.player.yaw = this.player.facing;

    if (this.monster) {
      state.monster = state.monster ?? { x: 0, z: 0 };
      state.monster.x = this.monster.currentPosition.x;
      state.monster.z = this.monster.currentPosition.z;
    } else {
      state.monster = null;
    }
    state.chased = this.monster?.isChasing ?? false;

    // The marks list is only rebuilt when something actually changes -
    // pickups taken, doors opened - rather than every frame.
    if (this.marksDirty) this.rebuildMarks();

    this.minimap.update(state);
  }

  /** Everything still worth walking to, for the corner map. */
  private rebuildMarks(): void {
    const map = this.mapInfo;
    if (!map) return;

    const marks: MinimapState['marks'] = [];
    map.keyPositions.forEach((point, i) => {
      if (!this.keyTaken.has(i)) marks.push({ x: point.x, z: point.z, kind: 'key' });
    });
    map.cardPositions.forEach((point, i) => {
      if (!this.cardTaken.has(i)) marks.push({ x: point.x, z: point.z, kind: 'card' });
    });
    map.notePositions.forEach((point, i) => {
      if (!this.noteTaken.has(i)) marks.push({ x: point.x, z: point.z, kind: 'note' });
    });
    if (!this.powerOn) {
      marks.push({ x: map.breakerPosition.x, z: map.breakerPosition.z, kind: 'power' });
    }
    if (!this.substationOn) {
      marks.push({ x: map.substationPosition.x, z: map.substationPosition.z, kind: 'power' });
    }
    if (!this.exitOpened) {
      marks.push({ x: map.exitPosition.x, z: map.exitPosition.z, kind: 'exit' });
    }
    if (!this.gateOpened) {
      marks.push({ x: map.gatePosition.x, z: map.gatePosition.z, kind: 'gate' });
    }

    this.minimapState.marks = marks;
    this.marksDirty = false;
  }

  private updateHUD(): void {
    if (!this.player) return;

    const stamina = document.getElementById('stamina-bar');
    if (stamina) {
      const ratio = this.player.staminaRatio;
      stamina.style.width = `${(ratio * 100).toFixed(1)}%`;
      stamina.classList.toggle('low', ratio < 0.25);
    }

    if (this.noteCount) this.noteCount.textContent = `${this.notesCollected}/${TOTAL_NOTES}`;

    // Crouch visual feedback
    const crouching = this.player.crouching;
    const nearHidingSpot = crouching && this.isNearHidingSpot();
    const crouchVignette = document.getElementById('crouch-vignette');
    const hiddenIndicator = document.getElementById('hidden-indicator');
    const crouchBtn = document.getElementById('crouch-btn');

    if (crouchVignette) crouchVignette.classList.toggle('show', crouching);
    if (hiddenIndicator) hiddenIndicator.classList.toggle('show', nearHidingSpot);
    if (crouchBtn) crouchBtn.classList.toggle('crouch-active', crouching);

    // Reach prompt. Shown on every device - it is also how the player learns
    // that a pickup has to be taken by hand rather than walked over.
    const target = this.interaction;
    const ready = target !== null;
    if (this.interactPrompt) {
      this.interactPrompt.classList.toggle('show', ready);
      if (target && this.interactLabel) this.interactLabel.textContent = target.label;
      this.interactPrompt.classList.toggle(
        'blocked',
        target?.kind === 'breaker' && !(this.inventory?.has('fuse') ?? false)
      );
    }
    if (this.handButton) {
      this.handButton.disabled = !ready;
      this.handButton.classList.toggle('active', ready);
    }
  }

  private updateObjective(): void {
    if (!this.objectiveText) return;

    if (!this.powerOn) {
      this.objectiveText.textContent = t(
        this.inventory?.has('fuse') ? 'obj.power.withFuse' : 'obj.power.noFuse'
      );
      this.phase = 'power';
    } else if (this.keysCollected < TOTAL_KEYS) {
      this.objectiveText.textContent = t('obj.keys', { keys: this.keysCollected, total: TOTAL_KEYS });
      this.phase = 'keys';
    } else if (!this.exitOpened) {
      this.objectiveText.textContent = t('obj.escape');
      this.phase = 'escape';
    } else if (!this.cardCollected || !this.substationOn) {
      const card = this.cardCollected ? '\u2713' : '\u2014';
      const power = this.substationOn ? '\u2713' : '\u2014';
      this.objectiveText.textContent = t('obj.outside', { card, power });
      this.phase = 'outside';
    } else {
      this.objectiveText.textContent = t('obj.gate');
      this.phase = 'gate';
    }
  }

  private showMessage(text: string, duration = 2600): void {
    if (!this.hudMessage) return;
    this.hudMessage.textContent = text;
    this.hudMessage.classList.add('show');
    if (this.hudMessageTimeout) window.clearTimeout(this.hudMessageTimeout);
    this.hudMessageTimeout = window.setTimeout(() => {
      this.hudMessage?.classList.remove('show');
    }, duration);
  }

  private showNote(noteIndex: number): void {
    const index = noteIndex >= 0 && noteIndex < NOTES.length ? noteIndex : this.notesCollected - 1;
    const note = NOTES[index];
    if (!note || !this.noteToast) return;

    if (this.noteToastTitle) {
      this.noteToastTitle.textContent = t('msg.note', {
        notes: this.notesCollected,
        total: TOTAL_NOTES,
        title: L(note.title),
      });
    }
    if (this.noteToastText) this.noteToastText.textContent = L(note.text);

    this.noteToast.classList.add('show');
    if (this.noteToastTimeout) window.clearTimeout(this.noteToastTimeout);
    this.noteToastTimeout = window.setTimeout(() => {
      this.noteToast?.classList.remove('show');
    }, 8000);
  }

  // --- Flashlight ----------------------------------------------------------

  private toggleFlashlight(): void {
    if (!this.flashlightOn && this.flashlightBattery <= 0) {
      this.showMessage(t('msg.noBattery'), 1800);
      return;
    }
    this.flashlightOn = !this.flashlightOn;
    if (this.flashlight) this.flashlight.intensity = this.flashlightOn ? 5.0 : 0;
  }

  // --- End states ----------------------------------------------------------

  /**
   * Paint the creature once and reuse it. Generating the texture during a
   * scare would stutter exactly when the frame matters most.
   */
  private prepareJumpscareFace(): void {
    const face = document.getElementById('jumpscare-face');
    if (!face) return;
    try {
      face.style.backgroundImage = `url(${createJumpscareFaceDataUrl()})`;
    } catch {
      /* canvas unavailable - the overlay still flashes */
    }
  }

  private triggerJumpscare(): void {
    if (this.state !== 'playing') return;

    this.state = 'jumpscare';
    this.jumpscareOverlay?.classList.remove('hidden');
    this.audio?.playJumpscare();
    this.addShake(0.35, 0.9);

    window.setTimeout(() => {
      this.jumpscareOverlay?.classList.add('hidden');
      if (this.state === 'jumpscare') {
        this.state = 'playing';
        this.clock.getDelta();
        this.gameLoop();
      }
    }, 1400);
  }

  private onPlayerCaught(): void {
    if (this.state === 'gameover' || this.state === 'win') return;
    this.state = 'gameover';

    this.audio?.stopAmbience();
    this.audio?.setRaining(false);
    this.audio?.playJumpscare();
    this.jumpscareOverlay?.classList.remove('hidden');
    cancelAnimationFrame(this.animationId);

    window.setTimeout(() => {
      this.jumpscareOverlay?.classList.add('hidden');
      this.hud?.classList.add('hidden');
      this.mobileControls?.classList.add('hidden');
      this.roomBanner?.classList.remove('show');
      if (this.dangerVignette) this.dangerVignette.style.opacity = '0';

      const hint = document.getElementById('gameover-text');
      if (hint) {
        hint.textContent =
          this.phase === 'power'
            ? t('over.power')
            : this.phase === 'keys'
              ? t('over.keys')
              : this.phase === 'escape'
                ? t('over.escape')
                : t('over.outside');
      }

      const stats = document.getElementById('gameover-stats');
      if (stats) {
        stats.textContent = t('over.stats', {
          keys: this.keysCollected,
          total: TOTAL_KEYS,
          card: this.cardCollected ? '\u2713' : '\u2014',
          power: this.substationOn ? '\u2713' : '\u2014',
          notes: this.notesCollected,
          notesTotal: TOTAL_NOTES,
          rooms: this.visitedRooms.size,
          roomsTotal: this.mapInfo?.rooms.length ?? 0,
        });
      }

      this.gameoverScreen?.classList.remove('hidden');
    }, 2000);
  }

  private onWin(): void {
    if (this.state === 'win' || this.state === 'gameover') return;
    this.state = 'win';

    this.audio?.stopAmbience();
    this.audio?.setRaining(false);
    cancelAnimationFrame(this.animationId);
    this.hud?.classList.add('hidden');
    this.mobileControls?.classList.add('hidden');
    this.roomBanner?.classList.remove('show');
    if (this.dangerVignette) this.dangerVignette.style.opacity = '0';

    const seconds = Math.floor(this.elapsed);
    const timeEl = document.getElementById('win-time');
    if (timeEl) timeEl.textContent = t('win.time', { time: this.formatTime(seconds) });

    const stats = document.getElementById('win-stats');
    if (stats) {
      const ending =
        this.notesCollected >= TOTAL_NOTES
          ? t('win.notesAll')
          : t('win.notesMissed', { missed: TOTAL_NOTES - this.notesCollected });
      stats.textContent = t('win.stats', {
        ending,
        notes: this.notesCollected,
        notesTotal: TOTAL_NOTES,
        card: this.cardCollected ? '\u2713' : '\u2014',
        power: this.substationOn ? '\u2713' : '\u2014',
        rooms: this.visitedRooms.size,
        roomsTotal: this.mapInfo?.rooms.length ?? 0,
        best: this.formatTime(this.saveBestTime(seconds)),
      });
    }

    this.winScreen?.classList.remove('hidden');
  }

  private formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  private saveBestTime(seconds: number): number {
    let best = seconds;
    try {
      const stored = Number(localStorage.getItem(BEST_TIME_KEY));
      if (Number.isFinite(stored) && stored > 0) best = Math.min(stored, seconds);
      localStorage.setItem(BEST_TIME_KEY, String(best));
    } catch {
      /* storage unavailable */
    }
    this.updateBestTimeUI();
    return best;
  }

  private updateBestTimeUI(): void {
    const element = document.getElementById('best-time');
    if (!element) return;
    try {
      const stored = Number(localStorage.getItem(BEST_TIME_KEY));
      element.textContent = Number.isFinite(stored) && stored > 0 ? this.formatTime(stored) : '—';
    } catch {
      element.textContent = '—';
    }
  }

  // --- Window / orientation ------------------------------------------------

  private isPortraitBlocked(): boolean {
    if (!document.body.classList.contains('touch-device')) return false;
    return window.innerHeight > window.innerWidth;
  }

  private async lockLandscape(): Promise<void> {
    try {
      const orientationApi = screen.orientation as
        | (ScreenOrientation & { lock?: (mode: string) => Promise<void> })
        | undefined;
      if (orientationApi && typeof orientationApi.lock === 'function') {
        await orientationApi.lock('landscape');
      }
    } catch {
      /* unsupported or not fullscreen - the CSS rotate overlay handles it */
    }
  }

  private onResize(): void {
    if (!this.camera || !this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.minimap?.relayout();
  }

  // --- Helpers -------------------------------------------------------------

  private setLoadingProgress(percent: number, text: string): void {
    if (this.loadingBar) this.loadingBar.style.width = `${percent}%`;
    if (this.loadingText) this.loadingText.textContent = text;
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  /** Returns true when the player is crouched within 2.2 units of a hiding spot. */
  private isNearHidingSpot(): boolean {
    if (!this.player || !this.mapInfo) return false;
    for (const spot of this.mapInfo.hidingSpots) {
      if (this.player.position.distanceTo(spot) < 2.2) return true;
    }
    return false;
  }

  // --- Language & orientation ---------------------------------------------

  /**
   * Applies the stored language, wires every language picker and keeps the live
   * HUD in step when the player switches language mid-run.
   */
  private installLanguageUI(): void {
    applyTranslations();
    this.refreshLanguageButtons();

    const pickers = Array.from(document.querySelectorAll<HTMLButtonElement>('.lang-btn'));
    for (const button of pickers) {
      button.addEventListener('click', () => {
        const code = button.dataset.lang;
        if (code === 'uz' || code === 'en' || code === 'ru') setLanguage(code);
      });
    }

    onLanguageChange(() => this.onLanguageChanged());
  }

  /** Highlights the active language on every picker (menu and pause menu). */
  private refreshLanguageButtons(): void {
    const current = getLanguage();
    for (const button of Array.from(document.querySelectorAll<HTMLButtonElement>('.lang-btn'))) {
      button.classList.toggle('active', button.dataset.lang === current);
    }
  }

  /** Redraws everything that was painted before the language changed. */
  private onLanguageChanged(): void {
    this.refreshLanguageButtons();
    this.updateObjective();

    // Blood scrawls are baked into canvases, so they are repainted in place
    // rather than rebuilt with the level.
    if (this.mapInfo) relocalizeWallTexts(this.mapInfo);

    const room = this.mapInfo?.rooms[this.currentRoomIndex];
    if (room) {
      if (this.roomBannerName) this.roomBannerName.textContent = L(room.name);
      if (this.roomBannerSubtitle) this.roomBannerSubtitle.textContent = L(room.subtitle);
    }
    if (this.stairFloorName) this.stairFloorName.textContent = floorName(this.currentFloor);
  }

  /**
   * Phones held the wrong way get a full-screen card instead of a squashed HUD.
   * Landscape is the only layout the touch controls are designed for.
   */
  private installRotateGuard(): void {
    const overlay = document.getElementById('rotate-overlay');
    if (!overlay) return;

    const sync = () => {
      const portrait = this.isPortraitBlocked();
      overlay.classList.toggle('hidden', !portrait);
      if (portrait) void this.lockLandscape();
    };

    sync();
    window.addEventListener('resize', sync);
    window.addEventListener('orientationchange', sync);
  }

}
