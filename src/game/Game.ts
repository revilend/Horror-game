import * as THREE from 'three';
import { buildWorld, CELL, isOutdoor, MapInfo, OUTDOOR_ROWS, RoomInfo, roomIndexAt, STAIR_CELLS, floorAt, floorName } from './World';
import { Player } from './Player';
import { Monster } from './Monster';
import { HorrorEffects } from './HorrorEffects';
import { HorrorAudio } from './Audio';
import { createJumpscareFaceDataUrl } from './Textures';
import { Inventory, ITEM_DEFS, ItemId } from './Inventory';
import { Minimap, MinimapState } from './Minimap';

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

/** The story, told through eight notes scattered across the hospital. */
const NOTES: Array<{ title: string; text: string }> = [
  {
    title: 'Kirish jurnali — Ren',
    text: 'Mening ismim Doktor Elias Ren. Yigirma yil shu devorlar ichida jarrohlik qildim. Ular menga aytishdi: bu bemorlar boshqacha. Men ishonmadim. 1987-yil 4-noyabrda men Protokol 7 ni imzoladim va o\'sha imzo hali ham qonayapti.',
  },
  {
    title: 'Ro\'yxat',
    text: 'Biz ularning ismlarini yozmadik. Faqat raqamlar: №29, №31, №37. Eng oxirgisi eng kattasi edi. Va eng jim. U meni tanigan birinchi kishi edi — va oxirgisi bo\'lib qoldi.',
  },
  {
    title: 'Qorong\'ulik',
    text: '№31 bir kechada sochlari oqarib ketdi. U qichqirmadi. Faqat "u eshikdan chiqadi" deb takrorladi. Biz uni zanjirlab qo\'ydik. Men zanjirni men tanladim — bu men tanlagan oxirgi narsa edi.',
  },
  {
    title: 'Kuzatuv',
    text: '№37 ni ushlab turish uchun to\'rt kishi kerak bo\'ldi. U bizga qaramadi. U doim devorga qaradi — go\'yo u orqasidan kelayotgan narsani ko\'rgan edi. Bitta kechqurun u menga qaradi va "Ren, sen ham birimiz" dedi.',
  },
  {
    title: 'Rentgen',
    text: 'Suratda uning suyaklari boshqacha edi. Men o\'sha plyonkani ko\'rganimdan keyin ikki kun uxlamadim. Uch kundan keyin kasalxonani yopishdi. Lekin yopish hech narsani tashqarida qoldirmadi.',
  },
  {
    title: 'Yoqish',
    text: 'Bosh shifokor hujjatlarni yoqib yubordi. Men ham imzo chekdim. Hammasiga men imzo chekdim. Eshiklarni men qulfladim. Va kalitni o\'zim cho\'ntamga qo\'ydim — go\'yo bu xavfsizlik edi.',
  },
  {
    title: '4-noyabr, soat 23:47',
    text: 'O\'sha kecha hech kim chiqmadi. Faqat u chiqdi. Va u chiqqanida kasalxona jim bo\'lib qoldi. Men eshitdim — koridorda yurgan ovoz meni tanigan ovoz edi. U mening ismimni bilardi.',
  },
  {
    title: 'Uyg\'onish',
    text: 'Ertalab men o\'z xonamda uyg\'ondim. Deraza mixlangan. Telefon o\'lik. Ko\'zguda o\'zimni ko\'rdim — va bir soniya ko\'zguda meni ko\'rgan narsa men emas edim. Shu kundan boshlab bu yerdaman.',
  },
  {
    title: 'Qabriston',
    text: 'Kasalxona o\'liklarini shu yerga ko\'mishardi. Toshda ism yo\'q — faqat raqam. Eng katta qabrda raqam ham yo\'q, chunki u hech qachon ko\'milgan emas. Uning qabri bo\'sh. U hali yuryapti.',
  },
  {
    title: 'Krematoriy hisoboti',
    text: 'Kul orasida suyak qolmaydi. Faqat tishlar qoladi. Va ularning hammasi — bir xil o\'lchamda. Hammasi bir odamniki. Men o\'sha tishlarni sanadim. Yetmish ikkita. Bitta ko\'p.',
  },
  {
    title: 'Tez yordam daftari',
    text: 'Men kasalxonaga qaytib kelmadim. Lekin mashina o\'zi qaytdi. Eshiklari ochiq, ichida hech kim yo\'q. Va u yomg\'ir ichida qaytdi. Haydovchi o\'rindig\'ida iliq edi.',
  },
  {
    title: 'Bosh shifokor xonasi',
    text: 'Men Protokol 7 ni imzoladim. Eshikni qulfladim. Lekin men qulflagan eshik emas — men o\'zim qulflangan edim. Kalit hali ham cho\'ntamda. Uni olib tashlashga kuchim yetmadi.',
  },
  {
    title: 'Kir yuvish xonasi',
    text: 'Kiyimlar hali ham qurimagan. Ular bugun yuvilgan. Men kasalxonada yolg\'iz emasman — kimdir bu yerda hali ham ishlaydi. Va u mening xalatimni kiygan.',
  },
  {
    title: 'Bolalar palatasi',
    text: 'Yigirma to\'qqiz, o\'ttiz bir, o\'ttiz yetti. Ular raqam emas edi. Ular mening xatolarim edi, va ularning hammasi bir xil ovozda chaqirardi. Ovoz menga qaragan edi — va ismimni aytdi.',
  },
  {
    title: 'Laboratoriya 7',
    text: 'Namunalar shisha ichida qimirlaydi. Ular hali ham tirik. Ular meni taniydi — va ular meni kutishadi. Men o\'sha shishalarni o\'zim to\'ldirgandim. Men o\'sha ignalarni o\'zim kiritgandim.',
  },
  {
    title: 'Qozonxona',
    text: 'Qozonlar hali ham issiq. Kimdir o\'t yoqib turadi. Pastdan ovoz keladi — go\'yo kimdir zinapoyani ko\'tarib kelayotgandek. Va u qadam ovozi mening qadamlarim bilan bir xil.',
  },
  {
    title: 'O\'ttiz yettinchi tortma',
    text: 'Morgniyning pastki qavatida o\'ttiz yetti tortma bor. O\'ttiz oltitasi band. Oxirgisi ochiq — va u mening o\'lchamimda. Men hech qachon bu yerdan chiqmaganman. Men u yerdan hech qachon chiqmaganman.',
  },
  {
    title: 'Izolyator',
    text: 'Uchinchi qavatdagi izolyatorda faqat bitta karavot bor va u devorga mahkamlangan. Ichkaridan tirnalgan izlar eshikning yarim bo\'yidan baland emas. Demak u bola edi. Yoki u emaklagan. Yoki ikkalasi ham.',
  },
  {
    title: 'Elektroterapiya jurnali',
    text: '№37 ga kuniga uch marta muolaja berildi. Muolaja ishlamadi — u faqat kuchaydi. Oxirgi sessiyada u kresloni uzib tashladi va qayishni o\'zi bilan olib ketdi. Muolajani men bergandim. Men o\'z qo\'lim bilan.',
  },
  {
    title: 'Tomdagi yozuv',
    text: 'Tomga chiqish eshigi hech qachon qulflanmagan — bu yerdan chiqish mumkin edi. Faqat men qulfni ichkaridan sindirdim, chunki u tomdan ham pastga tushardi. Endi u men bilan birga shu binoda. Va u chiqishni yopishni biladi.',
  },
];

/** Rooms that have a scripted scare the first time you step inside. */
const SCARE_ROOMS: Record<string, 'whisper' | 'scare' | 'blackout'> = {
  MORGNIY: 'scare',
  'OPERATSIYA XONASI': 'whisper',
  'DUSH XONASI': 'scare',
  'RENTGEN XONASI': 'whisper',
  'GENERATOR XONASI': 'blackout',
  'XONA 202': 'whisper',
  'ARXIV': 'blackout',
  // The grounds
  'QABRISTON': 'whisper',
  'KREMATORIY': 'blackout',
  'QO\u2018RIQXONA': 'scare',
  'PODSTANSIYA': 'blackout',
  'DARVOZA MAYDONI': 'whisper',
  'AVTOTURARGOH': 'whisper',
  // Second floor & deep basement
  'BOSH SHIFOKOR XONASI': 'whisper',
  'BOLALAR PALATASI': 'scare',
  'IBODATXONA': 'blackout',
  'KUZATUV XONASI': 'whisper',
  'LABORATORIYA 7': 'scare',
  'QOZONXONA': 'blackout',
  'INKUBATOR XONASI': 'scare',
  // Third floor
  'IZOLYATOR': 'scare',
  'ELEKTROTERAPIYA': 'whisper',
  'GIDROTERAPIYA': 'scare',
  'TOMGA CHIQISH': 'blackout',
  'MORGNIY 2': 'scare',
  'TUNEL': 'whisper',
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
  private stairTransition: HTMLElement | null = null;
  private stairFloorName: HTMLElement | null = null;
  private stairCooldown = 0;
  private currentFloor = 1;

  async init(): Promise<void> {
    this.cacheDom();
    this.prepareJumpscareFace();
    this.settings = this.loadSettings();
    this.syncSettingsUI();

    this.setLoadingProgress(8, 'Kasalxona eshigi ochilmoqda...');
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
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.setLoadingProgress(20, 'Xonalar qurilmoqda...');
    await this.yieldToBrowser();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.08, 90);
    this.scene.add(this.camera);

    // 18 rooms, doorways, gore - the heavy synchronous step
    this.mapInfo = buildWorld(this.scene);

    this.setLoadingProgress(55, 'Ovoz tizimi yuklanmoqda...');
    await this.yieldToBrowser();

    this.audio = new HorrorAudio();
    this.audio.setMuted(this.settings.muted);

    this.setLoadingProgress(65, 'Effektlar tayyorlanmoqda...');
    await this.yieldToBrowser();

    this.effects = new HorrorEffects(this.scene);
    this.effects.setFluorescentMaterials(this.mapInfo.fluorescentMaterials);
    this.flashlight = this.effects.createFlashlight(this.camera);
    this.effects.setCallbacks(
      () => this.triggerJumpscare(),
      () => this.audio?.playCreepySound()
    );
    this.effects.onLightning = () => this.onLightning();

    this.addMapLights();

    this.player = new Player(this.camera);
    this.player.init(this.mapInfo.grid, this.mapInfo.playerSpawn);
    this.player.setColliders(this.mapInfo.colliders);
    this.player.setupKeyboard();
    this.player.setupMouseLook();
    this.player.setupJoystick();
    this.player.setLookSensitivity(this.settings.sensitivity);
    this.player.onFootstep = (running) => this.audio?.playFootstep(running ? 0.34 : 0.2);

    this.collectPickups();

    this.setLoadingProgress(85, 'Biror narsa uyg\'onmoqda...');
    await this.yieldToBrowser();

    this.monster = new Monster(this.mapInfo.grid, this.mapInfo.monsterSpawn);
    this.monster.addToScene(this.scene);
    this.monster.setColliders(this.mapInfo.colliders);
    this.monster.onGrowl = () => this.audio?.playGrowl();

    if (this.minimapPanel && !this.minimap) this.minimap = new Minimap(this.minimapPanel);
    this.minimap?.attach(this.mapInfo);

    this.applyQuality();

    this.setLoadingProgress(100, 'Tayyor!');
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

  private async startGame(): Promise<void> {
    this.startScreen?.classList.add('hidden');
    this.pauseMenu?.classList.add('hidden');
    this.hud?.classList.remove('hidden');

    if (this.isTouchDevice()) {
      document.body.classList.add('touch-device');
      this.mobileControls?.classList.remove('hidden');
      this.player?.setupMobileLook(document.getElementById('game-canvas') as HTMLCanvasElement);
      await this.lockLandscape();
    }

    await this.audio?.init();
    this.audio?.resume();
    this.audio?.startAmbience();

    this.elapsed = 0;
    this.state = 'playing';
    this.clock.getDelta();
    this.showMessage("Narsalarni qo'l bilan oling (E). Shchotga esa saqlagich kerak.", 6000);
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

    this.player?.update(dt);

    if (this.monster && this.player) {
      // Determine if the player is hidden from the monster
      const isHidden = this.player.crouching && this.isNearHidingSpot();
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
    this.checkStairTransition(dt);
    this.updateBattery(dt);
    this.updateDanger(dt);
    this.animatePickups(dt);
    this.animateGate(dt);
    this.updateHUD();
    this.updateMinimap();
    this.applyShake(dt);

    this.renderer?.render(this.scene!, this.camera!);
  };

  
  /** Detect when the player steps on a stair cell and trigger a floor transition. */
  private checkStairTransition(dt: number): void {
    if (this.stairCooldown > 0) { this.stairCooldown -= dt; return; }
    if (!this.player || !this.mapInfo) return;

    const px = Math.round(this.player.position.x / CELL);
    const pz = Math.round(this.player.position.z / CELL);

    const onStair = STAIR_CELLS.some((s) => s.row === pz && s.col === px);
    if (!onStair) return;

    const newFloor = floorAt(pz);
    if (newFloor === this.currentFloor) return;

    this.stairCooldown = 3.0;
    this.currentFloor = newFloor;
    this.triggerFloorTransition(newFloor);
  }

  /** Fade to black, show floor name, then fade back in. Monster hidden during. */
  private triggerFloorTransition(floor: number): void {
    if (!this.stairTransition || !this.stairFloorName) return;
    const name = floorName(floor);
    if (!name) return;

    this.stairFloorName.textContent = name;
    this.stairTransition.classList.add('show');

    // Hide the monster during transition
    this.monster?.setVisible(false);

    window.setTimeout(() => {
      this.stairTransition?.classList.remove('show');
      window.setTimeout(() => {
        this.monster?.setVisible(true);
      }, 500);
    }, 1800);
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
          label: `${ITEM_DEFS[item as ItemId].name} olish`,
        });
      } else if (child.userData.isNote) {
        const noteIndex = typeof child.userData.noteIndex === 'number' ? child.userData.noteIndex : -1;
        this.pickups.push({
          object: child,
          kind: 'note',
          noteIndex,
          item: 'key',
          label: 'Qaydni oqish',
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

    this.showMessage('Elektr yoqildi. Kasalxona ham uyg\'ondi.', 4200);
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
      this.triggerRoomScare(room.name);
    }
  }

  private showRoomBanner(room: RoomInfo): void {
    if (!this.roomBanner) return;
    if (this.roomBannerName) this.roomBannerName.textContent = room.name;
    if (this.roomBannerSubtitle) this.roomBannerSubtitle.textContent = room.subtitle;

    this.roomBanner.classList.add('show');
    if (this.roomBannerTimeout) window.clearTimeout(this.roomBannerTimeout);
    this.roomBannerTimeout = window.setTimeout(() => {
      this.roomBanner?.classList.remove('show');
    }, 3600);
  }

  private triggerRoomScare(roomName: string): void {
    const scare = SCARE_ROOMS[roomName];
    if (!scare || this.scriptedScares.has(roomName)) return;
    this.scriptedScares.add(roomName);

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
        label: this.inventory?.has('crowbar') ? "Lom bilan ochish" : "Eshik mixlangan",
      };
    }

    const breakerDistance = Math.hypot(
      this.mapInfo.breakerPosition.x - position.x,
      this.mapInfo.breakerPosition.z - position.z
    );
    if (!this.powerOn && breakerDistance < bestDistance) {
      best = {
        kind: 'breaker',
        label: this.inventory?.has('fuse') ? "Saqlagichni o'rnatish" : "Saqlagich kerak",
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
        this.showMessage("Eshik mixlangan. Lom kerak.", 2600);
        return;
      }
      this.pryBoardedDoor();
      return;
    }

    if (!this.inventory?.has('fuse')) {
      this.showMessage("Shchotda saqlagich yo'q. Ombxonadan toping.", 3200);
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
      this.showMessage(`Kalit ${this.keysCollected}/${TOTAL_KEYS} topildi`, 2200);
      this.updateObjective();
      if (this.keysCollected >= TOTAL_KEYS) this.unlockExit();
      return;
    }

    if (pickup.item === 'card') {
      this.cardCollected = true;
      document.getElementById('card-icon')?.classList.add('collected');
      this.showMessage("Darvoza kartasi topildi", 2600);
      this.unlockGate();
      this.updateObjective();
      return;
    }

    const def = ITEM_DEFS[pickup.item];
    this.showMessage(`${def.name} olindi \u2014 ${def.hint}`, 3000);
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
    this.showMessage("Mixlar chiqdi \u2014 dush xonasi ochildi", 3200);
    this.updateObjective();
  }

  /** Tapping a slot in the inventory strip. */
  private useItem(id: ItemId): void {
    if (id === 'battery') {
      if (!this.inventory?.take('battery')) return;
      this.flashlightBattery = Math.min(100, this.flashlightBattery + 45);
      this.audio?.playKeyPickup();
      this.showMessage("Batareya almashtirildi", 2000);
      return;
    }
    if (id === 'bottle') {
      this.throwBottle();
      return;
    }
    const def = ITEM_DEFS[id];
    this.showMessage(`${def.name}: ${def.hint}`, 2600);
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
        this.showMessage("Shisha sinadi \u2014 u ovozga qaradi", 2200);
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
    this.showMessage('Barcha kalitlar topildi — qabulxonaga yuguring!', 4000);
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
      ? 'Eshik elektrsiz ochilmaydi — generatorni toping'
      : this.keysCollected < TOTAL_KEYS
        ? `Eshik qulflangan — ${TOTAL_KEYS - this.keysCollected} ta kalit kerak`
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
    this.showMessage('Eshik ochildi. Hovliga chiqing — asosiy darvoza shimolda.', 4600);
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
      this.showMessage('Tashqarida. Yomg\u2018ir yog\u2018adi va osmon ochiq.', 4200);
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
    this.showMessage('Podstansiya ishga tushdi — darvoza motori quvvat oldi.', 4400);
    this.unlockGate();
    this.updateObjective();
  }

  /** The gate opens only once it has both power and a valid card. */
  private unlockGate(): void {
    if (!this.substationOn) return;
    if (!this.cardCollected) {
      this.showMessage('Darvoza motori ishlaydi — endi karta kerak.', 3600);
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
    this.showMessage('ASOSIY DARVOZA OCHILDI — yuguring!', 5200);
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
      ? 'Darvoza motori quvvatsiz — podstansiyani yoqing'
      : 'Darvoza qulflangan — qo\u2018riqxonadan kartani toping';

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
    else this.showMessage(`Yaralandingiz — ${this.health}%`, 1800);
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
        this.showMessage('Batareya tugadi — qorong\'uda quvvatlanadi', 3000);
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
      const fuse = this.inventory?.has('fuse') ? 'saqlagich bor' : 'saqlagich omborxonada';
      this.objectiveText.textContent = `Shchotga quvvat bering \u2014 ${fuse}`;
      this.phase = 'power';
    } else if (this.keysCollected < TOTAL_KEYS) {
      this.objectiveText.textContent = `Kalitlar ${this.keysCollected}/${TOTAL_KEYS} — kasalxonani qidiring`;
      this.phase = 'keys';
    } else if (!this.exitOpened) {
      this.objectiveText.textContent = 'Chiqish eshigi ochilmoqda — qabulxonaga boring';
      this.phase = 'escape';
    } else if (!this.cardCollected || !this.substationOn) {
      const card = this.cardCollected ? '\u2713' : '\u2014';
      const power = this.substationOn ? '\u2713' : '\u2014';
      this.objectiveText.textContent = `Tashqarida: karta ${card} · podstansiya ${power}`;
      this.phase = 'outside';
    } else {
      this.objectiveText.textContent = 'Asosiy darvoza ochildi — shimolga yuguring!';
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
      this.noteToastTitle.textContent = `Qayd ${this.notesCollected}/${TOTAL_NOTES} — ${note.title}`;
    }
    if (this.noteToastText) this.noteToastText.textContent = note.text;

    this.noteToast.classList.add('show');
    if (this.noteToastTimeout) window.clearTimeout(this.noteToastTimeout);
    this.noteToastTimeout = window.setTimeout(() => {
      this.noteToast?.classList.remove('show');
    }, 8000);
  }

  // --- Flashlight ----------------------------------------------------------

  private toggleFlashlight(): void {
    if (!this.flashlightOn && this.flashlightBattery <= 0) {
      this.showMessage('Batareya yo\'q — biroz kutib turing', 1800);
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
            ? 'Qorong\'u sizni yutdi. Saqlagichni o\'rnatganingizda yorug\'lik sizni qutqarardi. U bir vaqtlar sizning bemoringiz edi — endi u shifokor.'
            : this.phase === 'keys'
              ? 'U sizni tanidi, Ren. U doim sizni tanigan edi. Kasalxona endi ko\'rinadi — va u ham sizni ko\'rdi.'
              : this.phase === 'escape'
                ? 'Kalitlar cho\'ntangizda qoldi. U eshikni yopishni biladi — u ko\'p yillardan beri shu erda eshiklarni yopadi.'
                : 'Siz tashqariga chiqdingiz — lekin darvoza hali ham qulflangan edi. Podstansiyani yondirish kerak edi. U sizni yomg\'ir ostida kutdi.';
      }

      const stats = document.getElementById('gameover-stats');
      if (stats) {
        stats.textContent =
          `Kalitlar: ${this.keysCollected}/${TOTAL_KEYS} · Karta: ${this.cardCollected ? '\u2713' : '\u2014'}` +
          ` · Podstansiya: ${this.substationOn ? '\u2713' : '\u2014'}` +
          ` · Qaydlar: ${this.notesCollected}/${TOTAL_NOTES}` +
          ` · Xonalar: ${this.visitedRooms.size}/${this.mapInfo?.rooms.length ?? 0}`;
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
    if (timeEl) timeEl.textContent = `Vaqt: ${this.formatTime(seconds)}`;

    const stats = document.getElementById('win-stats');
    if (stats) {
      const ending =
        this.notesCollected >= TOTAL_NOTES
          ? 'Endi hammasi ma\'lum: Protokol 7 ni imzolagan odam o\'zi imzo edi. Siz uni yaratdingiz, va u sizni eslab qoldi. Darvoza ochiq, yomg\'ir tugadi — lekin u hali ham devorlar ichida turibdi.'
          : `Siz ${TOTAL_NOTES - this.notesCollected} ta qaydni o'qimadingiz. Haqiqat shu devorlarda qoldi.`;
      stats.textContent =
        `${ending} · Qaydlar: ${this.notesCollected}/${TOTAL_NOTES}` +
        ` · Kartalar: ${this.cardCollected ? '\u2713' : '\u2014'}/1 · Podstansiya: ${this.substationOn ? '\u2713' : '\u2014'}` +
        ` · Xonalar: ${this.visitedRooms.size}/${this.mapInfo?.rooms.length ?? 0}` +
        ` · Eng yaxshi vaqt: ${this.formatTime(this.saveBestTime(seconds))}`;
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
}
