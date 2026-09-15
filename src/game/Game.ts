import * as THREE from 'three';
import { buildWorld, CELL, WALL_H, MapInfo } from './World';
import { Player } from './Player';
import { Monster } from './Monster';
import { HorrorEffects } from './HorrorEffects';
import { HorrorAudio } from './Audio';

export type GameState = 'loading' | 'menu' | 'playing' | 'jumpscare' | 'gameover' | 'win';

export class Game {
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private player: Player | null = null;
  private monster: Monster | null = null;
  private effects: HorrorEffects | null = null;
  private audio: HorrorAudio | null = null;
  private mapInfo: MapInfo | null = null;
  private keys: THREE.Mesh[] = [];
  private keysCollected = 0;
  private totalKeys = 3;
  private flashlight: THREE.SpotLight | null = null;
  private flashlightOn = true;
  private flashlightBattery = 100;
  private state: GameState = 'loading';
  private startTime = 0;
  private clock = new THREE.Clock();
  private animationId = 0;
  private keyCollectPositions: THREE.Vector3[] = [];

  // DOM elements
  private loadingBar: HTMLElement | null = null;
  private loadingText: HTMLElement | null = null;
  private loadingScreen: HTMLElement | null = null;
  private startScreen: HTMLElement | null = null;
  private hud: HTMLElement | null = null;
  private mobileControls: HTMLElement | null = null;
  private jumpscareOverlay: HTMLElement | null = null;
  private gameoverScreen: HTMLElement | null = null;
  private winScreen: HTMLElement | null = null;
  private hudMessage: HTMLElement | null = null;
  private hudMessageTimeout: number | null = null;

  async init(): Promise<void> {
    // Get DOM elements
    this.loadingBar = document.getElementById('loading-bar');
    this.loadingText = document.getElementById('loading-text');
    this.loadingScreen = document.getElementById('loading-screen');
    this.startScreen = document.getElementById('start-screen');
    this.hud = document.getElementById('game-hud');
    this.mobileControls = document.getElementById('mobile-controls');
    this.jumpscareOverlay = document.getElementById('jumpscare-overlay');
    this.gameoverScreen = document.getElementById('gameover-screen');
    this.winScreen = document.getElementById('win-screen');
    this.hudMessage = document.getElementById('hud-message');

    this.setLoadingProgress(10, 'Renderer yaratilmoqda...');

    // Create renderer
    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.BasicShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.4;

    this.setLoadingProgress(20, 'Sahna yaratilmoqda...');

    // Create scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.scene.add(this.camera);

    this.setLoadingProgress(40, 'Xarita qurilmoqda...');

    // Build world
    this.mapInfo = buildWorld(this.scene);

    this.setLoadingProgress(60, 'Ovoz tizimi yuklanmoqda...');

    // Audio
    this.audio = new HorrorAudio();

    this.setLoadingProgress(70, 'Horror effektlari tayyorlanmoqda...');

    // Player
    this.player = new Player(this.camera);
    this.player.init(this.mapInfo.grid, this.mapInfo.playerSpawn);
    this.player.setupKeyboard();
    this.player.setupJoystick();

    // Horror effects
    this.effects = new HorrorEffects(this.scene);
    this.flashlight = this.effects.createFlashlight(this.camera);
    this.effects.setCallbacks(
      () => this.triggerJumpscare(),
      () => this.audio?.playCreepySound()
    );

    // Add lights near keys and along corridors
    this.addMapLights();

    // Collect key meshes
    this.keys = [];
    this.scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.userData.isKey) {
        this.keys.push(child);
      }
    });

    this.setLoadingProgress(85, 'Monster tayyorlanmoqda...');

    // Monster
    this.monster = new Monster(this.mapInfo.grid, this.mapInfo.monsterSpawn);
    this.monster.addToScene(this.scene);

    this.setLoadingProgress(100, 'Tayyor!');

    // Setup event listeners
    this.setupEvents();

    // Detect mobile
    this.detectMobile();

    // Hide loading, show start screen
    await this.delay(500);
    this.loadingScreen?.classList.add('hidden');
    this.startScreen?.classList.remove('hidden');
    this.state = 'menu';
  }

  private addMapLights(): void {
    if (!this.mapInfo || !this.effects) return;

    // Add flickering lights near key positions
    for (const keyPos of this.mapInfo.keyPositions) {
      const light = this.effects.createWallLight(
        keyPos.x, 2.5, keyPos.z,
        0xffaa00
      );
      light.intensity = 0.6;
      light.distance = 5;
      this.effects.addFlickerLight(light, 0.6);
    }

    // Random corridor lights
    for (let r = 0; r < this.mapInfo.grid.length; r++) {
      for (let c = 0; c < this.mapInfo.grid[0].length; c++) {
        if (this.mapInfo.grid[r][c] === 1 && Math.random() < 0.12) {
          const light = this.effects.createWallLight(
            c * CELL + (Math.random() - 0.5),
            3.2,
            r * CELL + (Math.random() - 0.5),
            0xffaa66
          );
          light.intensity = 0.4;
          light.distance = 6;
          this.effects.addFlickerLight(light, 0.4);
        }
      }
    }
  }

  private setupEvents(): void {
    // Start button
    document.getElementById('start-btn')?.addEventListener('click', () => {
      this.startGame();
    });

    // Retry button
    document.getElementById('retry-btn')?.addEventListener('click', () => {
      this.restartGame();
    });

    // Replay button
    document.getElementById('replay-btn')?.addEventListener('click', () => {
      this.restartGame();
    });

    // Flashlight toggle
    document.getElementById('flashlight-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleFlashlight();
    });

    // Run button
    document.getElementById('run-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.player?.setRunning(true);
    });
    document.getElementById('run-btn')?.addEventListener('touchend', () => {
      this.player?.setRunning(false);
    });

    // Keyboard flashlight toggle
    document.addEventListener('keydown', (e) => {
      if (e.code === 'KeyF' && this.state === 'playing') {
        this.toggleFlashlight();
      }
      if (e.code === 'ShiftLeft' && this.state === 'playing') {
        this.player?.setRunning(true);
      }
    });
    document.addEventListener('keyup', (e) => {
      if (e.code === 'ShiftLeft') {
        this.player?.setRunning(false);
      }
    });

    // Pointer lock for desktop
    const canvas = document.getElementById('game-canvas')!;
    canvas.addEventListener('click', () => {
      if (this.state === 'playing' && !('ontouchstart' in window)) {
        canvas.requestPointerLock();
      }
    });

    // Window resize
    window.addEventListener('resize', () => this.onResize());
  }

  private detectMobile(): void {
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isMobile && this.mobileControls) {
      // Show mobile controls when game starts
    }
  }

  private async startGame(): Promise<void> {
    this.startScreen?.classList.add('hidden');
    this.hud?.classList.remove('hidden');
    
    // Show mobile controls on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      this.mobileControls?.classList.remove('hidden');
      this.player?.setupMobileLook(document.getElementById('game-canvas') as HTMLCanvasElement);
    }

    // Init audio (needs user gesture)
    await this.audio?.init();
    this.audio?.resume();
    this.audio?.startAmbience();

    this.startTime = Date.now();
    this.state = 'playing';
    this.clock.start();
    this.gameLoop();
  }

  private gameLoop = (): void => {
    if (this.state !== 'playing') return;

    this.animationId = requestAnimationFrame(this.gameLoop);
    const dt = Math.min(this.clock.getDelta(), 0.05);

    // Update player
    this.player?.update(dt);

    // Update monster
    if (this.monster && this.player) {
      const result = this.monster.update(dt, this.player.position);
      if (result.reachedPlayer) {
        this.onPlayerCaught();
      }
    }

    // Update horror effects
    this.effects?.update(dt, this.player?.position ?? new THREE.Vector3(), this.keysCollected);

    // Check key collection
    this.checkKeyCollection();

    // Check exit door
    this.checkExitDoor();

    // Update flashlight battery
    if (this.flashlightOn) {
      this.flashlightBattery -= dt * 2;
      if (this.flashlightBattery <= 0) {
        this.flashlightBattery = 0;
        this.flashlightOn = false;
        if (this.flashlight) this.flashlight.intensity = 0;
      }
      this.updateBatteryUI();
    }

    // Render
    this.renderer?.render(this.scene!, this.camera!);
  };

  private checkKeyCollection(): void {
    if (!this.player || !this.mapInfo) return;

    for (let i = this.keys.length - 1; i >= 0; i--) {
      const key = this.keys[i];
      const dist = this.player.position.distanceTo(key.position);
      
      if (dist < 1.5) {
        // Collect key
        this.scene?.remove(key);
        this.keys.splice(i, 1);
        this.keysCollected++;
        
        // Update HUD
        const keyEl = document.getElementById(`key-${this.keysCollected}`);
        keyEl?.classList.add('collected');
        
        this.audio?.playKeyPickup();
        this.showMessage(`Kalit ${this.keysCollected}/${this.totalKeys} topildi!`);

        if (this.keysCollected >= this.totalKeys) {
          this.showMessage('Barcha kalitlar topildi! Eshikka boring!');
          this.audio?.playDoorUnlock();
        }
      }
    }
  }

  private checkExitDoor(): void {
    if (!this.player || !this.mapInfo || this.keysCollected < this.totalKeys) return;

    const dist = this.player.position.distanceTo(this.mapInfo.exitPosition);
    if (dist < 2) {
      this.onWin();
    }
  }

  private toggleFlashlight(): void {
    this.flashlightOn = !this.flashlightOn;
    if (this.flashlight) {
      this.flashlight.intensity = this.flashlightOn ? 1.5 : 0;
    }
  }

  private updateBatteryUI(): void {
    const bar = document.getElementById('battery-bar');
    if (bar) {
      bar.style.width = `${this.flashlightBattery}%`;
      if (this.flashlightBattery < 25) {
        bar.classList.add('low');
      }
    }
  }

  private showMessage(text: string): void {
    if (!this.hudMessage) return;
    this.hudMessage.textContent = text;
    this.hudMessage.classList.add('show');
    if (this.hudMessageTimeout) clearTimeout(this.hudMessageTimeout);
    this.hudMessageTimeout = window.setTimeout(() => {
      this.hudMessage?.classList.remove('show');
    }, 3000);
  }

  private triggerJumpscare(): void {
    if (this.state !== 'playing') return;

    this.state = 'jumpscare';
    this.jumpscareOverlay?.classList.remove('hidden');
    this.audio?.playJumpscare();

    // Shake camera
    const origPos = this.camera?.position.clone();
    let shakeTimer = 0;
    const shakeInterval = setInterval(() => {
      shakeTimer += 50;
      if (this.camera && origPos) {
        this.camera.position.x = origPos.x + (Math.random() - 0.5) * 0.3;
        this.camera.position.y = origPos.y + (Math.random() - 0.5) * 0.2;
      }
      if (shakeTimer >= 1000) {
        clearInterval(shakeInterval);
        if (this.camera && origPos) {
          this.camera.position.copy(origPos);
        }
      }
    }, 50);

    setTimeout(() => {
      this.jumpscareOverlay?.classList.add('hidden');
      this.state = 'playing';
    }, 1500);
  }

  private onPlayerCaught(): void {
    if (this.state !== 'playing') return;
    this.state = 'gameover';
    
    this.audio?.stopAmbience();
    this.audio?.playJumpscare();

    // Show jumpscare briefly then game over
    this.jumpscareOverlay?.classList.remove('hidden');
    
    setTimeout(() => {
      this.jumpscareOverlay?.classList.add('hidden');
      cancelAnimationFrame(this.animationId);
      this.hud?.classList.add('hidden');
      this.mobileControls?.classList.add('hidden');
      
      const title = document.getElementById('gameover-title');
      const text = document.getElementById('gameover-text');
      if (title) title.textContent = 'O\'LDINGIZ';
      if (text) text.textContent = 'Qorong\'u sizni egallab oldi...';
      this.gameoverScreen?.classList.remove('hidden');
    }, 2000);
  }

  private onWin(): void {
    if (this.state !== 'playing') return;
    this.state = 'win';
    
    this.audio?.stopAmbience();
    cancelAnimationFrame(this.animationId);
    this.hud?.classList.add('hidden');
    this.mobileControls?.classList.add('hidden');

    const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    
    const timeEl = document.getElementById('win-time');
    if (timeEl) {
      timeEl.textContent = `Vaqt: ${mins}:${secs.toString().padStart(2, '0')}`;
    }
    this.winScreen?.classList.remove('hidden');
  }

  private restartGame(): void {
    // Hide all screens
    this.gameoverScreen?.classList.add('hidden');
    this.winScreen?.classList.add('hidden');
    this.hud?.classList.add('hidden');
    this.mobileControls?.classList.add('hidden');
    this.jumpscareOverlay?.classList.add('hidden');

    // Reset state
    this.keysCollected = 0;
    this.flashlightBattery = 100;
    this.flashlightOn = true;

    // Reset key UI
    for (let i = 1; i <= this.totalKeys; i++) {
      document.getElementById(`key-${i}`)?.classList.remove('collected');
    }

    // Reset battery UI
    const bar = document.getElementById('battery-bar');
    if (bar) {
      bar.style.width = '100%';
      bar.classList.remove('low');
    }

    // Rebuild scene
    if (this.scene) {
      // Clear old scene objects (keep camera)
      while (this.scene.children.length > 0) {
        this.scene.remove(this.scene.children[0]);
      }
      this.scene.add(this.camera!);
    }

    // Rebuild world
    if (this.scene) {
      this.mapInfo = buildWorld(this.scene);
      this.player?.init(this.mapInfo.grid, this.mapInfo.playerSpawn);
      
      // Recreate flashlight
      if (this.effects) {
        this.flashlight = this.effects.createFlashlight(this.camera!);
      }
      
      // Recollect keys from scene
      this.keys = [];
      this.scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.userData.isKey) {
          this.keys.push(child);
        }
      });

      // Reset monster
      this.monster?.reset(this.mapInfo.monsterSpawn);

      // Reset effects
      this.effects?.reset();
      this.addMapLights();
    }

    // Start
    this.startGame();
  }

  private onResize(): void {
    if (!this.camera || !this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private setLoadingProgress(percent: number, text: string): void {
    if (this.loadingBar) this.loadingBar.style.width = `${percent}%`;
    if (this.loadingText) this.loadingText.textContent = text;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
