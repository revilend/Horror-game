import * as THREE from 'three';
import { createSkyTexture, createSoftDotTexture } from './Textures';

const DUST_COUNT = 420;
const DUST_RADIUS = 26;
const DUST_HEIGHT = 3.4;

const RAIN_COUNT = 1400;
const RAIN_RADIUS = 24;
const RAIN_HEIGHT = 16;

/**
 * Atmosphere layer: flickering lights, drifting dust, fog that thickens as the
 * player collects keys or gets hunted, and random horror beats.
 *
 * It also owns the weather. The grounds outside the hospital are open to the
 * night sky, so stepping through the reception door swaps the sealed, silent
 * dark for moonlight, rain and lightning.
 */
export class HorrorEffects {
  private scene: THREE.Scene;
  private ambientLight: THREE.AmbientLight;
  private flickerLights: THREE.PointLight[] = [];
  private fluorescents: THREE.MeshStandardMaterial[] = [];
  private fogDensity = 0.08;
  private danger = 0;
  /** 0 = hospital is dead, 1 = emergency power restored */
  private powerOn = false;
  private powerLevel = 0;
  private blackoutUntil = 0;
  private eventTimer = 0;
  private nextEventTime = 18;
  private onJumpscare: () => void = () => {};
  private onCreepySound: () => void = () => {};

  private flashlight: THREE.SpotLight | null = null;
  private flashlightTarget: THREE.Object3D | null = null;
  /** Dim omni attached to the player so the world is never flat black. */
  private fillLight: THREE.PointLight | null = null;

  private dust: THREE.Points | null = null;
  private dustSpeeds: Float32Array | null = null;
  private dustEnabled = true;

  // --- Weather -----------------------------------------------------------
  private outdoors = false;
  private outdoorLevel = 0;
  private rain: THREE.LineSegments | null = null;
  private rainSpeeds: Float32Array | null = null;
  private rainLengths: Float32Array | null = null;
  private rainEnabled = true;
  private rainLevel = 0;
  private lightning = 0;
  private lightningTimer = 6;
  /** Fired on every flash so the game can play thunder and flash the screen. */
  onLightning: (() => void) | null = null;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Institutional green-blue base: dim enough to stay eerie, but the colour
    // carries so corridors read as a place, not a black box.
    this.ambientLight = new THREE.AmbientLight(0x3d4a5c, 0.95);

    scene.fog = new THREE.FogExp2(0x0a0f16, this.fogDensity);
    scene.background = createSkyTexture();

    this.attachToScene();
    this.createDust();
    this.createRain();
  }

  setCallbacks(onJumpscare: () => void, onCreepySound: () => void): void {
    this.onJumpscare = onJumpscare;
    this.onCreepySound = onCreepySound;
  }

  /** True while the player is out in the grounds. */
  setOutdoors(outdoors: boolean): void {
    this.outdoors = outdoors;
  }

  setRainEnabled(enabled: boolean): void {
    this.rainEnabled = enabled;
    if (this.rain && !enabled) this.rain.visible = false;
  }

  /** (Re-)attach anything owned by the scene, e.g. after a scene clear. */
  attachToScene(): void {
    if (!this.ambientLight.parent) this.scene.add(this.ambientLight);
    if (this.dust && !this.dust.parent) this.scene.add(this.dust);
    if (this.rain && !this.rain.parent) this.scene.add(this.rain);
    if (!(this.scene.background instanceof THREE.Texture)) {
      this.scene.background = createSkyTexture();
    }
  }

  /** Add a flickering point light. */
  addFlickerLight(light: THREE.PointLight, intensity: number): void {
    light.intensity = intensity;
    light.userData.baseIntensity = intensity;
    this.flickerLights.push(light);
    this.scene.add(light);
  }

  /**
   * Create a decorative light.
   * Shadow casting is opt-in: point-light shadows render a full cubemap per
   * light, so leaving it on for every decorative light destroys mobile frame
   * rate.
   */
  createWallLight(
    x: number,
    y: number,
    z: number,
    color: number = 0xffaa66,
    castShadow: boolean = false
  ): THREE.PointLight {
    const light = new THREE.PointLight(color, 0.8, 8);
    light.position.set(x, y, z);
    light.castShadow = castShadow;
    if (castShadow) {
      light.shadow.mapSize.width = 256;
      light.shadow.mapSize.height = 256;
      light.shadow.bias = -0.01;
    }
    return light;
  }

  /** Register the emissive ceiling tubes so they can flicker. */
  setFluorescentMaterials(materials: THREE.MeshStandardMaterial[]): void {
    this.fluorescents = [...materials];
  }

  /** Player flashlight mounted on the camera. */
  createFlashlight(camera: THREE.PerspectiveCamera): THREE.SpotLight {
    // Detach a previous flashlight (on restart) so spotlights don't stack up
    if (this.flashlight) camera.remove(this.flashlight);
    if (this.flashlightTarget) camera.remove(this.flashlightTarget);
    if (this.fillLight) camera.remove(this.fillLight);

    const flashlight = new THREE.SpotLight(0xfff4e0, 5.5, 44, Math.PI / 3.2, 0.35, 0.85);
    flashlight.castShadow = true;
    flashlight.shadow.mapSize.width = 512;
    flashlight.shadow.mapSize.height = 512;
    flashlight.shadow.bias = -0.0018;
    flashlight.position.set(0.16, -0.12, 0);
    camera.add(flashlight);

    flashlight.target.position.set(0, 0, -1);
    camera.add(flashlight.target);

    // brighter fill: keeps floors and walls readable right around the
    // player even when the flashlight is off or on its last bar of battery.
    const fill = new THREE.PointLight(0xc8d8ee, 1.15, 11, 1.8);
    camera.add(fill);

    this.flashlight = flashlight;
    this.flashlightTarget = flashlight.target;
    this.fillLight = fill;
    return flashlight;
  }

  get flashlightRef(): THREE.SpotLight | null {
    return this.flashlight;
  }

  /** 0 = calm, 1 = the monster is breathing down your neck. */
  setDanger(level: number): void {
    this.danger = Math.max(0, Math.min(1, level));
  }

  /**
   * Throw the hospital's emergency circuit.
   * Everything ramps rather than snapping, so the reveal is a slow, ugly
   * stutter of fluorescent light instead of a light switch.
   */
  setPower(on: boolean): void {
    this.powerOn = on;
  }

  /** Cut the lights for a moment - used by scripted room scares. */
  blackout(durationMs: number): void {
    this.blackoutUntil = performance.now() + durationMs;
  }

  setDustEnabled(enabled: boolean): void {
    this.dustEnabled = enabled;
    if (this.dust) this.dust.visible = enabled;
  }

  update(dt: number, tension: number, camera: THREE.Camera | null): void {
    // --- Emergency power ramp -------------------------------------------
    const blackedOut = performance.now() < this.blackoutUntil;
    const targetPower = this.powerOn && !blackedOut ? 1 : 0;
    this.powerLevel += (targetPower - this.powerLevel) * Math.min(1, dt * (blackedOut ? 3.5 : 0.55));
    // Before power the tubes still throw a dim sickly glow - enough to walk
    // by, never enough to feel safe.
    const lightScale = 0.55 + this.powerLevel * 0.6;

    // --- Indoor vs. the grounds -------------------------------------------
    this.outdoorLevel += ((this.outdoors ? 1 : 0) - this.outdoorLevel) * Math.min(1, dt * 1.6);
    this.rainLevel += ((this.outdoors && this.rainEnabled ? 1 : 0) - this.rainLevel) * Math.min(1, dt * 1.2);

    // --- Flicker decorative lights ---------------------------------------
    for (const light of this.flickerLights) {
      const base = ((light.userData.baseIntensity as number) || 0.5) * lightScale;
      if (Math.random() < 0.02) {
        light.intensity = base * (0.25 + Math.random() * 0.5);
      } else if (Math.random() < 0.05) {
        light.intensity = base * (0.85 + Math.random() * 0.4);
      } else {
        light.intensity += (base - light.intensity) * dt * 8;
      }
    }

    // --- Flicker fluorescent tubes ---------------------------------------
    // Dark tubes still glow very faintly, which reads as moonlight through grime
    const tubeBase = 0.22 + this.powerLevel * 1.3;
    for (const material of this.fluorescents) {
      if (Math.random() < 0.012) {
        material.emissiveIntensity = tubeBase * 0.08;
      } else if (Math.random() < 0.03) {
        material.emissiveIntensity = tubeBase * 1.6;
      } else {
        material.emissiveIntensity += (tubeBase - material.emissiveIntensity) * dt * 6;
      }
    }

    // --- Fog: darkness, tension and danger all thicken it -----------------
    // Outside, the fog thins out and turns a wet blue-grey so the yard reads.
    const indoorFog = 0.024 - this.powerLevel * 0.01 + tension * 0.008 + this.danger * 0.018;
    const outdoorFog = 0.018 + this.danger * 0.015;
    const targetFog = indoorFog + (outdoorFog - indoorFog) * this.outdoorLevel;
    this.fogDensity += (targetFog - this.fogDensity) * dt * 0.7;
    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.density = this.fogDensity;
      // Fog leans red as the monster closes in, blue-grey under the sky
      const fogColor = this.scene.fog.color;
      const r = 0.04 + this.danger * 0.08;
      const g = 0.045;
      const b = 0.06 + this.danger * 0.03;
      const outR = 0.07 + this.danger * 0.06;
      const outG = 0.085;
      const outB = 0.11 + this.danger * 0.02;
      fogColor.setRGB(
        r + (outR - r) * this.outdoorLevel,
        g + (outG - g) * this.outdoorLevel,
        b + (outB - b) * this.outdoorLevel
      );
    }

    // --- Lightning ---------------------------------------------------------
    if (this.rainLevel > 0.4) {
      this.lightningTimer -= dt;
      if (this.lightningTimer <= 0) {
        this.lightningTimer = 6 + Math.random() * 13;
        this.lightning = 1;
        this.onLightning?.();
      }
    }
    if (this.lightning > 0) this.lightning = Math.max(0, this.lightning - dt * 3.2);
    // A short double-strike reads more like real thunder than a single pop
    const strike = this.lightning > 0.55 ? this.lightning : this.lightning * 0.55;

    // Breathe a little light around the player so the dark is not flat black
    const indoorAmbient = 0.95 + this.powerLevel * 0.35;
    const outdoorAmbient = 1.1 + this.powerLevel * 0.15;
    const ambientBase = indoorAmbient + (outdoorAmbient - indoorAmbient) * this.outdoorLevel;
    const breathe = Math.sin(performance.now() * 0.0007) * 0.03 + this.danger * 0.07;
    this.ambientLight.intensity =
      (blackedOut ? 0.04 : ambientBase + breathe) + strike * 2.6;
    // The flash itself is cold
    this.ambientLight.color.setRGB(
      0.06 + this.outdoorLevel * 0.04 + strike * 0.5,
      0.1 + this.outdoorLevel * 0.06 + strike * 0.55,
      0.15 + this.outdoorLevel * 0.12 + strike * 0.7
    );

    this.updateDust(dt, camera);
    this.updateRain(dt, camera);

    // --- Random horror beats --------------------------------------------
    this.eventTimer += dt;
    if (this.eventTimer >= this.nextEventTime) {
      this.eventTimer = 0;
      this.nextEventTime = 14 + Math.random() * 22;
      // Never interrupt an active chase with a scripted scare
      if (this.danger < 0.4) this.triggerRandomEvent();
    }
  }

  private createDust(): void {
    const positions = new Float32Array(DUST_COUNT * 3);
    this.dustSpeeds = new Float32Array(DUST_COUNT);

    for (let i = 0; i < DUST_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * DUST_RADIUS * 2;
      positions[i * 3 + 1] = Math.random() * DUST_HEIGHT;
      positions[i * 3 + 2] = (Math.random() - 0.5) * DUST_RADIUS * 2;
      this.dustSpeeds[i] = 0.02 + Math.random() * 0.09;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      map: createSoftDotTexture(),
      color: 0xd8d2c0,
      size: 0.07,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.dust = new THREE.Points(geometry, material);
    this.dust.frustumCulled = false;
    this.dust.visible = this.dustEnabled;
    this.scene.add(this.dust);
  }

  /**
   * Dust lives in a box that follows the player, so a 112 x 136 world stays
   * cheap and the motes never all end up in one corner of the map.
   */
  private updateDust(dt: number, camera: THREE.Camera | null): void {
    if (!this.dust || !this.dustSpeeds || !this.dustEnabled) return;

    const attribute = this.dust.geometry.getAttribute('position') as THREE.BufferAttribute;
    const array = attribute.array as Float32Array;
    const origin = this.dust.position;

    for (let i = 0; i < DUST_COUNT; i++) {
      const speed = this.dustSpeeds[i];
      array[i * 3 + 1] += speed * dt;
      array[i * 3] += Math.sin((array[i * 3 + 1] + i) * 0.5) * dt * 0.12;

      if (array[i * 3 + 1] > DUST_HEIGHT) {
        array[i * 3 + 1] = 0;
        array[i * 3] = (Math.random() - 0.5) * DUST_RADIUS * 2;
        array[i * 3 + 2] = (Math.random() - 0.5) * DUST_RADIUS * 2;
      }

      // Wrap stragglers back around the player
      if (array[i * 3] - origin.x > DUST_RADIUS) array[i * 3] -= DUST_RADIUS * 2;
      if (array[i * 3] - origin.x < -DUST_RADIUS) array[i * 3] += DUST_RADIUS * 2;
      if (array[i * 3 + 2] - origin.z > DUST_RADIUS) array[i * 3 + 2] -= DUST_RADIUS * 2;
      if (array[i * 3 + 2] - origin.z < -DUST_RADIUS) array[i * 3 + 2] += DUST_RADIUS * 2;
    }
    attribute.needsUpdate = true;

    if (camera) this.dust.position.set(camera.position.x, 0, camera.position.z);
  }

  private createRain(): void {
    const positions = new Float32Array(RAIN_COUNT * 6);
    this.rainSpeeds = new Float32Array(RAIN_COUNT);
    this.rainLengths = new Float32Array(RAIN_COUNT);

    for (let i = 0; i < RAIN_COUNT; i++) {
      const x = (Math.random() - 0.5) * RAIN_RADIUS * 2;
      const y = Math.random() * RAIN_HEIGHT;
      const z = (Math.random() - 0.5) * RAIN_RADIUS * 2;
      const length = 0.5 + Math.random() * 0.9;
      positions[i * 6] = x;
      positions[i * 6 + 1] = y;
      positions[i * 6 + 2] = z;
      positions[i * 6 + 3] = x + 0.05;
      positions[i * 6 + 4] = y - length;
      positions[i * 6 + 5] = z;
      this.rainSpeeds[i] = 15 + Math.random() * 12;
      this.rainLengths[i] = length;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.LineBasicMaterial({
      color: 0xa8bcd4,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
      fog: false,
    });

    this.rain = new THREE.LineSegments(geometry, material);
    this.rain.frustumCulled = false;
    this.rain.visible = false;
    this.scene.add(this.rain);
  }

  private updateRain(dt: number, camera: THREE.Camera | null): void {
    if (!this.rain || !this.rainSpeeds || !this.rainLengths) return;

    if (this.rainLevel < 0.02 || !camera) {
      this.rain.visible = false;
      return;
    }

    this.rain.visible = true;
    const material = this.rain.material as THREE.LineBasicMaterial;
    material.opacity = 0.3 * this.rainLevel;

    const attribute = this.rain.geometry.getAttribute('position') as THREE.BufferAttribute;
    const array = attribute.array as Float32Array;
    const wind = 1.6;
    const origin = this.rain.position;

    for (let i = 0; i < RAIN_COUNT; i++) {
      const speed = this.rainSpeeds[i];
      const drop = speed * dt;
      array[i * 6 + 1] -= drop;
      array[i * 6 + 4] -= drop;
      array[i * 6] += wind * dt;
      array[i * 6 + 3] += wind * dt;

      if (array[i * 6 + 4] < 0) {
        const x = origin.x + (Math.random() - 0.5) * RAIN_RADIUS * 2;
        const z = origin.z + (Math.random() - 0.5) * RAIN_RADIUS * 2;
        const y = RAIN_HEIGHT * (0.6 + Math.random() * 0.4);
        array[i * 6] = x;
        array[i * 6 + 1] = y;
        array[i * 6 + 2] = z;
        array[i * 6 + 3] = x + 0.05;
        array[i * 6 + 4] = y - this.rainLengths[i];
        array[i * 6 + 5] = z;
      }
    }
    attribute.needsUpdate = true;

    this.rain.position.set(camera.position.x, 0, camera.position.z);
  }

  private triggerRandomEvent(): void {
    const roll = Math.random();

    if (roll < 0.35) {
      // The lights die for a heartbeat
      this.onCreepySound();
      const original = this.ambientLight.intensity;
      this.ambientLight.intensity = 0;
      window.setTimeout(() => {
        this.ambientLight.intensity = original * 0.4;
        window.setTimeout(() => {
          this.ambientLight.intensity = original;
        }, 450);
      }, 280);
    } else if (roll < 0.65) {
      this.onCreepySound();
    } else if (roll < 0.85) {
      // Violent flicker across every decorative light
      for (const light of this.flickerLights) {
        const original = (light.userData.baseIntensity as number) || 1;
        light.intensity = original * 3;
        window.setTimeout(() => {
          light.intensity = 0;
          window.setTimeout(() => {
            light.intensity = original;
          }, 180);
        }, 90);
      }
      this.onCreepySound();
    } else {
      this.onJumpscare();
    }
  }

  reset(): void {
    this.eventTimer = 0;
    this.nextEventTime = 18;
    this.fogDensity = 0.08;
    this.danger = 0;
    this.powerOn = false;
    this.powerLevel = 0;
    this.blackoutUntil = 0;
    this.outdoors = false;
    this.outdoorLevel = 0;
    this.rainLevel = 0;
    this.lightning = 0;
    this.lightningTimer = 6;

    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.density = this.fogDensity;
      this.scene.fog.color.set(0x0a0f16);
    }

    // Drop references to flicker lights that belonged to the discarded scene
    for (const light of this.flickerLights) {
      light.parent?.remove(light);
    }
    this.flickerLights = [];
    this.fluorescents = [];
    this.ambientLight.intensity = 0.6;
    this.ambientLight.color.set(0x2a3a50);

    if (this.rain) {
      this.rain.visible = false;
      this.rain.position.set(0, 0, 0);
    }
    if (this.dust) this.dust.position.set(0, 0, 0);

    this.attachToScene();
  }
}
