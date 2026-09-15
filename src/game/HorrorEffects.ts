import * as THREE from 'three';

/**
 * Manages horror atmosphere: flickering lights, fog changes, random scary events
 */
export class HorrorEffects {
  private scene: THREE.Scene;
  private ambientLight: THREE.AmbientLight;
  private flickerLights: THREE.PointLight[] = [];
  private flickerMaterials: THREE.MeshStandardMaterial[] = [];
  private fogDensity = 0.08;
  private eventTimer = 0;
  private nextEventTime = 15;
  private onJumpscare: () => void = () => {};
  private onCreepySound: () => void = () => {};
  private ceilingLights: THREE.Object3D[] = [];

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Very dim ambient light
    this.ambientLight = new THREE.AmbientLight(0x111111, 0.3);
    scene.add(this.ambientLight);

    // Fog
    scene.fog = new THREE.FogExp2(0x000000, this.fogDensity);
  }

  setCallbacks(onJumpscare: () => void, onCreepySound: () => void): void {
    this.onJumpscare = onJumpscare;
    this.onCreepySound = onCreepySound;
  }

  /** Add a flickering point light */
  addFlickerLight(light: THREE.PointLight, intensity: number): void {
    light.intensity = intensity;
    this.flickerLights.push(light);
    this.scene.add(light);
  }

  /** Mark a ceiling light material for flickering */
  addCeilingLightMaterial(mat: THREE.MeshStandardMaterial): void {
    this.flickerMaterials.push(mat);
  }

  addCeilingLight(obj: THREE.Object3D): void {
    this.ceilingLights.push(obj);
  }

  /** Update horror effects each frame */
  update(dt: number, playerPos: THREE.Vector3, keysCollected: number): void {
    // Flicker existing lights
    for (const light of this.flickerLights) {
      const base = light.userData.baseIntensity || light.intensity;
      if (!light.userData.baseIntensity) light.userData.baseIntensity = light.intensity;
      
      // Random flicker
      if (Math.random() < 0.02) {
        light.intensity = base * (0.3 + Math.random() * 0.5);
      } else if (Math.random() < 0.05) {
        light.intensity = base * (0.8 + Math.random() * 0.4);
      } else {
        light.intensity += (base - light.intensity) * dt * 10;
      }
    }

    // Flicker ceiling light materials
    for (const mat of this.flickerMaterials) {
      if (Math.random() < 0.01) {
        mat.emissiveIntensity = 0.1;
      } else if (Math.random() < 0.03) {
        mat.emissiveIntensity = 0.6;
      } else {
        mat.emissiveIntensity += (0.3 - mat.emissiveIntensity) * dt * 5;
      }
    }

    // Dynamic fog based on tension
    const tension = keysCollected / 3;
    const targetFog = 0.06 + tension * 0.04;
    this.fogDensity += (targetFog - this.fogDensity) * dt * 0.5;
    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.density = this.fogDensity;
    }

    // Periodic horror events
    this.eventTimer += dt;
    if (this.eventTimer >= this.nextEventTime) {
      this.eventTimer = 0;
      this.nextEventTime = 10 + Math.random() * 20;
      this.triggerRandomEvent();
    }
  }

  private triggerRandomEvent(): void {
    const event = Math.random();
    
    if (event < 0.4) {
      // Brief total darkness
      this.onCreepySound();
      const origAmbient = this.ambientLight.intensity;
      this.ambientLight.intensity = 0;
      setTimeout(() => {
        this.ambientLight.intensity = origAmbient * 0.5;
        setTimeout(() => {
          this.ambientLight.intensity = origAmbient;
        }, 500);
      }, 300);
    } else if (event < 0.7) {
      // Creepy sound
      this.onCreepySound();
    } else {
      // Flicker all lights violently
      for (const light of this.flickerLights) {
        const orig = light.userData.baseIntensity || 1;
        light.intensity = orig * 3;
        setTimeout(() => {
          light.intensity = 0;
          setTimeout(() => {
            light.intensity = orig;
          }, 200);
        }, 100);
      }
      this.onCreepySound();
    }
  }

  /** Create a wall-mounted flicker light */
  createWallLight(x: number, y: number, z: number, color: number = 0xffaa66): THREE.PointLight {
    const light = new THREE.PointLight(color, 0.8, 8);
    light.position.set(x, y, z);
    light.castShadow = true;
    light.shadow.mapSize.width = 256;
    light.shadow.mapSize.height = 256;
    light.shadow.bias = -0.01;
    return light;
  }

  /** Player flashlight effect (done via player camera) */
  createFlashlight(camera: THREE.PerspectiveCamera): THREE.SpotLight {
    const flashlight = new THREE.SpotLight(0xffffee, 1.5, 15, Math.PI / 6, 0.5, 1);
    flashlight.castShadow = true;
    flashlight.shadow.mapSize.width = 512;
    flashlight.shadow.mapSize.height = 512;
    camera.add(flashlight);
    flashlight.position.set(0, 0, 0);
    flashlight.target.position.set(0, 0, -1);
    camera.add(flashlight.target);
    return flashlight;
  }

  reset(): void {
    this.eventTimer = 0;
    this.nextEventTime = 15;
    this.fogDensity = 0.08;
    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.density = this.fogDensity;
    }
    this.ambientLight.intensity = 0.3;
  }
}
