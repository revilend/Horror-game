import * as THREE from 'three';
import { createSoftDotTexture, createStormSkyTexture } from './Textures';

const DUST_COUNT = 680;
const DUST_RADIUS = 26;
const DUST_HEIGHT = 3.4;

/** Fewer, fatter motes that twinkle - the ones that catch the torch beam. */
const MOTE_COUNT = 150;
const MOTE_RADIUS = 15;
const BEAM_LENGTH = 7.5;

const RAIN_COUNT = 2200;
const RAIN_RADIUS = 22;
const RAIN_HEIGHT = 18;

/** Where a room's ceiling light hangs, and how far it is worth carrying. */
interface RoomLightPlacement {
  x: number;
  y: number;
  z: number;
  /** Past this the room is too far away to be given one of the pool lights. */
  cullRadius: number;
}

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
  /** Hard lower bound for ambient light - the room is never allowed to go flat black. */
  private ambientFloor = 0;
  private flickerLights: THREE.PointLight[] = [];
  private fluorescents: THREE.MeshStandardMaterial[] = [];

  /**
   * The room ceiling lights.
   *
   * three compiles a material against the *number* of lights it can see, so
   * adding or removing one at runtime recompiles every material on screen - a
   * visible hitch, and the opposite of what throwing a switch should feel
   * like. So a fixed handful of ceiling lights is built once and left in the
   * scene for the whole run at a constant count. Each frame they are handed to
   * the lit rooms nearest the player; a room nobody is near simply does not get
   * one. However many switches are up, the price of the lighting never moves.
   */
  private roomLights: THREE.PointLight[] = [];
  /** Every room's ceiling rose, whether its switch is up or not. */
  private roomPlacements = new Map<number, RoomLightPlacement>();
  /** The rooms whose switches are currently on. */
  private litRooms = new Map<number, RoomLightPlacement & { flickerEnd: number }>();
  /** Scratch queue of the lit rooms nearest the player, nearest first. */
  private roomLightQueue: Array<{ room: RoomLightPlacement & { flickerEnd: number } }> = [];

  /** The steady intensity a struck tube settles at. */
  private static readonly ROOM_LIGHT_INTENSITY = 1.8;
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

  private motes: THREE.Points | null = null;
  private moteSpeeds: Float32Array | null = null;

  /** Fake volumetric beam: two nested additive cones parented to the camera. */
  private beam: THREE.Group | null = null;
  private beamMaterials: THREE.MeshBasicMaterial[] = [];
  private beamTime = 0;

  /** Fired when a fluorescent tube stutters, so the game can play the buzz. */
  onFluorescentBuzz: (() => void) | null = null;
  private buzzCooldown = 0;

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

    // Cold, near-black air: THREE.FogExp2(0x05070a, 0.08). Dense enough that a
    // corridor dissolves into pitch black a dozen metres ahead, so the torch
    // beam - and the headlamp coming down the hall - are the only things that
    // reach into it.
    scene.fog = new THREE.FogExp2(0x05070a, this.fogDensity);
    scene.background = createStormSkyTexture();

    this.attachToScene();
    this.createDust();
    this.createMotes();
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
    if (this.motes && !this.motes.parent) this.scene.add(this.motes);
    if (this.rain && !this.rain.parent) this.scene.add(this.rain);
    if (!(this.scene.background instanceof THREE.Texture)) {
      this.scene.background = createStormSkyTexture();
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
   * The registered ceiling rose nearest a point, or -1 when none is close.
   *
   * A wall switch hangs on a wall cell, and a wall has no room of its own, so
   * the light a plate is wired to is found by position: the rose nearest the
   * plate is the room it lights.
   */
  private nearestRoomIndex(x: number, z: number, limit: number): number {
    let best = -1;
    let bestDistance = limit * limit;
    for (const [index, room] of this.roomPlacements) {
      const dx = room.x - x;
      const dz = room.z - z;
      const distance = dx * dx + dz * dz;
      if (distance > bestDistance) continue;
      bestDistance = distance;
      best = index;
    }
    return best;
  }

  /**
   * What the switch on the wall actually does.
   *
   * The room it is screwed to comes up first: its ceiling light stutters twice
   * and then holds, which is what shows the player the ward they are standing
   * in. The wall lamps within reach are cut or restored with it, so the
   * corridor outside the door goes dark as well.
   *
   * Every flicker light re-derives its intensity from `userData.baseIntensity`
   * each frame, so zeroing that field is what takes a lamp dark and putting it
   * back is what relights it. The counter is there because two switches can
   * cover the same corridor: the last one to be flipped off is the one that
   * has to be flipped back on before the tube comes up again.
   */
  setLightsAround(x: number, z: number, radius: number, on: boolean): void {
    const roomIndex = this.nearestRoomIndex(x, z, radius + 8);
    if (roomIndex >= 0) this.setRoomLight(roomIndex, on);

    const radiusSq = radius * radius;
    for (const light of this.flickerLights) {
      const dx = light.position.x - x;
      const dz = light.position.z - z;
      if (dx * dx + dz * dz > radiusSq) continue;

      const cuts = (light.userData.switchCuts as number) || 0;
      if (on) {
        if (cuts === 0) continue;
        const left = cuts - 1;
        light.userData.switchCuts = left;
        if (left === 0) {
          light.userData.baseIntensity = (light.userData.savedBase as number) ?? 0.7;
        }
      } else {
        if (cuts === 0) light.userData.savedBase = light.userData.baseIntensity;
        light.userData.switchCuts = cuts + 1;
        light.userData.baseIntensity = 0;
        light.intensity = 0;
      }
    }
  }

  /**
   * Installs the fixed pool of room ceiling lights, all of them dark.
   *
   * Called once per run, after the level is built: the pool is what the wall
   * switches borrow from, and its size never changes, because a changing light
   * count is what costs a recompile.
   */
  setRoomLightPool(lights: THREE.PointLight[]): void {
    for (const light of this.roomLights) light.parent?.remove(light);
    this.roomLights = [];
    this.litRooms.clear();

    for (const light of lights) {
      light.intensity = 0;
      // Eleven metres: the ward and its doorway, and not the corridor beyond it.
      light.distance = 11;
      this.roomLights.push(light);
      this.scene.add(light);
    }
  }

  /** Records where a room's ceiling light hangs, so its switch can find it. */
  registerRoomLight(roomIndex: number, x: number, y: number, z: number, cullRadius: number): void {
    this.roomPlacements.set(roomIndex, { x, y, z, cullRadius });
  }

  /**
   * Throws the switch on one room's ceiling light: the tube stutters, then
   * settles. Returns false when that room has no light of its own, so a switch
   * standing in a corridor can fall back to the wall lamps around it.
   */
  setRoomLight(roomIndex: number, on: boolean): boolean {
    const placement = this.roomPlacements.get(roomIndex);
    if (!placement) return false;

    if (on) {
      // About two fast stutters before the tube catches: nothing fluorescent
      // ever comes up clean.
      this.litRooms.set(roomIndex, { ...placement, flickerEnd: performance.now() + 320 });
    } else {
      this.litRooms.delete(roomIndex);
    }
    return true;
  }

  /**
   * Hands the pool to the lit rooms nearest the player, then runs each light:
   * the stutter of a striking tube, then a steady glow.
   */
  private updateRoomLights(dt: number, camera: THREE.Camera | null): void {
    const pool = this.roomLights;
    if (pool.length === 0) return;

    const camX = camera ? camera.position.x : 0;
    const camZ = camera ? camera.position.z : 0;

    // Nearest lit rooms first, into a queue no longer than the pool itself.
    const queue = this.roomLightQueue;
    queue.length = 0;
    for (const room of this.litRooms.values()) {
      const dx = room.x - camX;
      const dz = room.z - camZ;
      const distance = dx * dx + dz * dz;
      // Outside its own room's reach: this one is not drawn at all.
      if (distance > room.cullRadius * room.cullRadius) continue;

      let at = queue.length;
      while (at > 0) {
        const other = queue[at - 1].room;
        const ox = other.x - camX;
        const oz = other.z - camZ;
        if (ox * ox + oz * oz <= distance) break;
        at--;
      }
      if (at >= pool.length) continue;
      if (queue.length === pool.length) queue.pop();
      queue.splice(at, 0, { room });
    }

    const nowMs = performance.now();
    for (let i = 0; i < pool.length; i++) {
      const light = pool[i];
      const entry = queue[i];
      if (!entry) {
        // Idle member of the pool: parked, and giving nothing away.
        if (light.intensity !== 0) light.intensity = 0;
        continue;
      }

      light.position.set(entry.room.x, entry.room.y, entry.room.z);
      if (nowMs < entry.room.flickerEnd) {
        // Two hard stutters, a tenth of a second each: a ballast striking a
        // cold tube, which is what every room in this building does.
        const phase = Math.floor((entry.room.flickerEnd - nowMs) / 100);
        light.intensity = phase % 2 === 0 ? 0.2 : 2.7;
        continue;
      }
      light.intensity += (HorrorEffects.ROOM_LIGHT_INTENSITY - light.intensity) * Math.min(1, dt * 6);
    }
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

    // A wide penumbra plus a low decay gives the beam a soft, dusty edge that
    // falls away gradually instead of ending in a hard circle.
    const flashlight = new THREE.SpotLight(0xfff4e0, 7.0, 50, Math.PI / 2.8, 0.45, 0.75);
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
    const fill = new THREE.PointLight(0xc8d8ee, 2.2, 18, 1.2);
    camera.add(fill);

    this.flashlight = flashlight;
    this.flashlightTarget = flashlight.target;
    this.fillLight = fill;

    this.createBeam(camera);
    return flashlight;
  }

  /**
   * The volumetric halo: two open cones of additive light parented to the
   * camera, bright at the lens and dissolving into the fog. It costs two draw
   * calls and reads as a real beam in a dusty corridor, which no amount of
   * spotlight tuning alone can fake.
   */
  private createBeam(camera: THREE.PerspectiveCamera): void {
    if (this.beam) camera.remove(this.beam);
    this.beamMaterials = [];

    const beam = new THREE.Group();
    const layers: Array<{ radius: number; length: number; alpha: number }> = [
      { radius: 2.5, length: BEAM_LENGTH, alpha: 0.2 },
      { radius: 4.0, length: BEAM_LENGTH * 0.72, alpha: 0.09 },
    ];

    for (const layer of layers) {
      const geometry = new THREE.ConeGeometry(layer.radius, layer.length, 18, 5, true);
      // Point the cone down -Z with its apex at the lens
      geometry.rotateX(Math.PI / 2);
      geometry.translate(0, 0, -layer.length / 2);

      // Fade the beam out towards the far end, and add a little noise so the
      // cone does not read as a hard-edged solid
      const position = geometry.getAttribute('position');
      const colors = new Float32Array(position.count * 4);
      for (let i = 0; i < position.count; i++) {
        const z = position.getZ(i); // 0 at the lens, -length at the far end
        const t = Math.max(0, Math.min(1, -z / layer.length));
        const swirl = 0.85 + Math.sin(z * 1.7 + position.getX(i) * 2.3) * 0.15;
        colors[i * 4] = 1;
        colors[i * 4 + 1] = 0.96;
        colors[i * 4 + 2] = 0.88;
        colors[i * 4 + 3] = Math.pow(1 - t, 1.6) * t * 4 * swirl;
      }
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));

      const material = new THREE.MeshBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: layer.alpha,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        fog: false,
      });
      this.beamMaterials.push(material);

      const cone = new THREE.Mesh(geometry, material);
      cone.renderOrder = 2;
      beam.add(cone);
    }

    beam.position.set(0.16, -0.12, 0);
    beam.visible = false;
    camera.add(beam);
    this.beam = beam;
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
    if (this.motes) this.motes.visible = enabled;
  }

  /**
   * Guarantee a minimum ambient level so corridors, doors and furniture stay
   * readable. Pushed up after the intro cutscene, where a black overlay has
   * been covering the screen and the very first thing the player must see is
   * the room they are standing in. Scripted blackouts still win - they are a
   * deliberate three-second scare, not a broken state.
   */
  setAmbientFloor(value: number): void {
    this.ambientFloor = Math.max(0, value);
    if (performance.now() >= this.blackoutUntil && this.ambientLight.intensity < this.ambientFloor) {
      this.ambientLight.intensity = this.ambientFloor;
    }
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
    this.buzzCooldown -= dt;
    for (const material of this.fluorescents) {
      if (Math.random() < 0.012) {
        material.emissiveIntensity = tubeBase * 0.08;
        // A tube stuttering dark is what an old ballast sounds like
        if (this.buzzCooldown <= 0) {
          this.buzzCooldown = 2.5 + Math.random() * 5;
          this.onFluorescentBuzz?.();
        }
      } else if (Math.random() < 0.03) {
        material.emissiveIntensity = tubeBase * 1.6;
      } else {
        material.emissiveIntensity += (tubeBase - material.emissiveIntensity) * dt * 6;
      }
    }

    // --- Room ceiling lights ---------------------------------------------
    this.updateRoomLights(dt, camera);

    // --- Fog: darkness, tension and danger all thicken it -----------------
    // Outside, the fog thins out and turns a wet blue-grey so the yard reads.
    const indoorFog = 0.05 - this.powerLevel * 0.012 + tension * 0.008 + this.danger * 0.018;
    const outdoorFog = 0.03 + this.danger * 0.018;
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
      (blackedOut ? 0.04 : Math.max(this.ambientFloor, ambientBase + breathe)) + strike * 2.6;
    // The flash itself is cold
    this.ambientLight.color.setRGB(
      0.06 + this.outdoorLevel * 0.04 + strike * 0.5,
      0.1 + this.outdoorLevel * 0.06 + strike * 0.55,
      0.15 + this.outdoorLevel * 0.12 + strike * 0.7
    );

    // --- Fake volumetric beam --------------------------------------------
    if (this.beam) {
      const lit = this.flashlight ? this.flashlight.intensity : 0;
      this.beam.visible = lit > 0.05;
      if (this.beam.visible) {
        this.beamTime += dt;
        const k = Math.min(1, lit / 5.5) * (this.outdoors ? 0.35 : 1);
        const wobble = 0.92 + Math.sin(this.beamTime * 5.5) * 0.08;
        for (let i = 0; i < this.beamMaterials.length; i++) {
          const base = i === 0 ? 0.2 : 0.09;
          this.beamMaterials[i].opacity = base * k * wobble;
        }
      }
    }

    this.updateDust(dt, camera);
    this.updateMotes(dt, camera);
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
      color: 0xf0e8d4,
      size: 0.11,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.55,
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

  /**
   * The bright layer of dust: fewer, larger motes that twinkle in and out, so a
   * corridor sweep with the torch looks like it is full of floating debris.
   */
  private createMotes(): void {
    const positions = new Float32Array(MOTE_COUNT * 3);
    this.moteSpeeds = new Float32Array(MOTE_COUNT);

    for (let i = 0; i < MOTE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * MOTE_RADIUS * 2;
      positions[i * 3 + 1] = Math.random() * DUST_HEIGHT;
      positions[i * 3 + 2] = (Math.random() - 0.5) * MOTE_RADIUS * 2;
      this.moteSpeeds[i] = 0.05 + Math.random() * 0.16;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      map: createSoftDotTexture(),
      color: 0xfff3d8,
      size: 0.19,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.motes = new THREE.Points(geometry, material);
    this.motes.frustumCulled = false;
    this.motes.visible = this.dustEnabled;
    this.scene.add(this.motes);
  }

  private updateMotes(dt: number, camera: THREE.Camera | null): void {
    if (!this.motes || !this.moteSpeeds || !this.dustEnabled) return;

    const attribute = this.motes.geometry.getAttribute('position') as THREE.BufferAttribute;
    const array = attribute.array as Float32Array;
    const origin = this.motes.position;

    for (let i = 0; i < MOTE_COUNT; i++) {
      const speed = this.moteSpeeds[i];
      array[i * 3 + 1] += speed * dt;
      array[i * 3] += Math.sin((array[i * 3 + 1] + i * 0.7) * 0.35) * dt * 0.2;
      array[i * 3 + 2] += Math.cos((array[i * 3 + 1] + i * 1.3) * 0.3) * dt * 0.15;

      if (array[i * 3 + 1] > DUST_HEIGHT) {
        array[i * 3 + 1] = 0;
        array[i * 3] = (Math.random() - 0.5) * MOTE_RADIUS * 2;
        array[i * 3 + 2] = (Math.random() - 0.5) * MOTE_RADIUS * 2;
      }

      if (array[i * 3] - origin.x > MOTE_RADIUS) array[i * 3] -= MOTE_RADIUS * 2;
      if (array[i * 3] - origin.x < -MOTE_RADIUS) array[i * 3] += MOTE_RADIUS * 2;
      if (array[i * 3 + 2] - origin.z > MOTE_RADIUS) array[i * 3 + 2] -= MOTE_RADIUS * 2;
      if (array[i * 3 + 2] - origin.z < -MOTE_RADIUS) array[i * 3 + 2] += MOTE_RADIUS * 2;
    }
    attribute.needsUpdate = true;

    // Sparkle: the whole layer breathes so individual motes appear to catch and
    // lose the light as the beam sweeps past them.
    const material = this.motes.material as THREE.PointsMaterial;
    const t = performance.now() * 0.001;
    material.opacity = 0.45 + Math.sin(t * 1.7) * 0.18 + Math.sin(t * 4.3) * 0.1;
    material.size = 0.17 + Math.sin(t * 2.9) * 0.035;

    if (camera) this.motes.position.set(camera.position.x, 0, camera.position.z);
  }

  private createRain(): void {
    const positions = new Float32Array(RAIN_COUNT * 6);
    this.rainSpeeds = new Float32Array(RAIN_COUNT);
    this.rainLengths = new Float32Array(RAIN_COUNT);

    for (let i = 0; i < RAIN_COUNT; i++) {
      const x = (Math.random() - 0.5) * RAIN_RADIUS * 2;
      // Centred on the camera's own height, so the band works on the raised
      // terrace as well as it does down in the yard.
      const y = (Math.random() - 0.5) * RAIN_HEIGHT;
      const z = (Math.random() - 0.5) * RAIN_RADIUS * 2;
      const length = 1.0 + Math.random() * 1.5;
      positions[i * 6] = x;
      positions[i * 6 + 1] = y;
      positions[i * 6 + 2] = z;
      positions[i * 6 + 3] = x + 0.05;
      positions[i * 6 + 4] = y - length;
      positions[i * 6 + 5] = z;
      this.rainSpeeds[i] = 8 + Math.random() * 6;
      this.rainLengths[i] = length;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.LineBasicMaterial({
      color: 0xbdd2e8,
      transparent: true,
      opacity: 0.7,
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
    material.opacity = 0.72 * this.rainLevel;

    const attribute = this.rain.geometry.getAttribute('position') as THREE.BufferAttribute;
    const array = attribute.array as Float32Array;
    const wind = 1.1;
    // The drops live in the line's own space and the whole line is moved onto
    // the player, so the rain follows them up the lift to the roof.
    const ground = -RAIN_HEIGHT * 0.5;

    for (let i = 0; i < RAIN_COUNT; i++) {
      const speed = this.rainSpeeds[i];
      const drop = speed * dt;
      array[i * 6 + 1] -= drop;
      array[i * 6 + 4] -= drop;
      array[i * 6] += wind * dt;
      array[i * 6 + 3] += wind * dt;

      if (array[i * 6 + 4] < ground) {
        // Recycled in local space. Respawning at the camera's absolute
        // coordinates threw every drop tens of metres out of the volume, so
        // the rain emptied itself out in seconds and the sky looked clear.
        const x = (Math.random() - 0.5) * RAIN_RADIUS * 2;
        const z = (Math.random() - 0.5) * RAIN_RADIUS * 2;
        const y = RAIN_HEIGHT * (0.35 + Math.random() * 0.15);
        array[i * 6] = x;
        array[i * 6 + 1] = y;
        array[i * 6 + 2] = z;
        array[i * 6 + 3] = x + 0.05;
        array[i * 6 + 4] = y - this.rainLengths[i];
        array[i * 6 + 5] = z;
      }
    }
    attribute.needsUpdate = true;

    this.rain.position.set(camera.position.x, camera.position.y, camera.position.z);
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
      this.scene.fog.color.set(0x05070a);
    }

    // Drop references to flicker lights that belonged to the discarded scene
    for (const light of this.flickerLights) {
      light.parent?.remove(light);
    }
    this.flickerLights = [];
    // The room lights and the rooms they belonged to went with that scene too.
    for (const light of this.roomLights) {
      light.parent?.remove(light);
    }
    this.roomLights = [];
    this.roomPlacements.clear();
    this.litRooms.clear();
    this.fluorescents = [];
    this.ambientLight.intensity = 1.0;
    this.ambientLight.color.set(0x3d4a5c);

    if (this.rain) {
      this.rain.visible = false;
      this.rain.position.set(0, 0, 0);
    }
    if (this.dust) this.dust.position.set(0, 0, 0);
    if (this.motes) this.motes.position.set(0, 0, 0);
    this.buzzCooldown = 0;
    this.beamTime = 0;

    this.attachToScene();
  }
}
