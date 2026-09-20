import * as THREE from 'three';
import { isWalkable, CELL, EYE_HEIGHT } from './World';

const MOVE_SPEED = 3.2;
const RUN_SPEED = 5.7;
const CROUCH_SPEED = 2.0;
const LOOK_SPEED = 0.0022;
const PLAYER_RADIUS = 0.42;
const HEAD_BOB_SPEED = 9;
const HEAD_BOB_AMOUNT = 0.075;
const CROUCH_HEIGHT = 0.7;
const CROUCH_LERP = 8;

const STAMINA_MAX = 100;
const STAMINA_DRAIN = 25; // per second while sprinting
const STAMINA_REGEN = 17; // per second while recovering
const STAMINA_REGEN_DELAY = 0.9; // seconds after sprinting ends
const STAMINA_RUN_FLOOR = 4; // below this you cannot start another sprint

const STEP_DISTANCE_WALK = 2.1;
const STEP_DISTANCE_RUN = 2.7;

/**
 * First person controller.
 *
 * Speeds are tuned so that walking (3.2) is slower than the monster's chase
 * speed (4.2) while sprinting (5.7) outruns it - sprinting is what saves you,
 * and stamina is what stops you sprinting forever.
 */
export class Player {
  camera: THREE.PerspectiveCamera;
  position: THREE.Vector3;
  velocity: THREE.Vector3 = new THREE.Vector3();

  /** Called whenever a footstep should be heard. */
  onFootstep: ((running: boolean) => void) | null = null;


  private yaw = 0;
  private pitch = 0;
  private headBobPhase = 0;
  private isMoving = false;
  private isRunning = false;
  private isCrouched = false;
  private currentHeight = EYE_HEIGHT;
  private stamina = STAMINA_MAX;
  private staminaIdle = 0;
  private stepAccumulator = 0;
  private lookSensitivity = 1;
  private grid: number[][] = [];
  /** Circular obstacles (furniture) the player is pushed out of. */
  private colliders: Array<{ x: number; z: number; r: number }> = [];
  /**
   * Axis-aligned boxes nothing may pass. Shut doors live here, in the shape the
   * game actually reasons about them, rather than being approximated by a
   * circle the way furniture is.
   */
  private blockers: THREE.Box3[] = [];

  // Input state
  private keys: Set<string> = new Set();
  private joystickInput = { x: 0, y: 0 };

  // Mobile dual-touch system
  private mobileTouchReady = false;
  private joystickTouchId: number | null = null;
  private joystickCenterX = 0;
  private joystickCenterY = 0;
  private joystickKnob: HTMLElement | null = null;
  private joystickKnobBase: HTMLElement | null = null;
  /** The floating wrapper: it is what moves under the thumb. */
  private joystickWrap: HTMLElement | null = null;
  private lookTouchId: number | null = null;
  private lastLookX = 0;
  private lastLookY = 0;

  // Input listeners must only ever be registered once
  private keyboardReady = false;
  private mouseLookReady = false;
  /** When true, the player ignores all movement and look input. */
  inputDisabled = false;

  /** The last spot the player was known to be standing legally, per axis. */
  private safeX = 0;
  private safeZ = 0;

  /**
   * Height of the floor under the player's feet.
   *
   * There is no vertical physics - the eye is the only thing that moves in y -
   * so this is what lifts the player onto the raised roof terrace and brings
   * them back down, and what makes them rise with the cage mid-ride.
   */
  private groundHeight = 0;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
    this.position = new THREE.Vector3();
  }

  /** Sets the height of the floor the player is standing on. */
  setGroundHeight(height: number): void {
    this.groundHeight = height;
  }

  init(grid: number[][], spawn: THREE.Vector3): void {
    this.grid = grid;
    this.groundHeight = 0;
    this.position.copy(spawn);
    this.camera.position.copy(this.position);
    this.yaw = 0;
    this.pitch = 0;
    this.safeX = spawn.x;
    this.safeZ = spawn.z;
  }

  /** Reset per-run state without re-registering any listeners. */
  reset(grid: number[][], spawn: THREE.Vector3): void {
    this.init(grid, spawn);
    this.keys.clear();
    this.joystickInput.x = 0;
    this.joystickInput.y = 0;
    this.stamina = STAMINA_MAX;
    this.staminaIdle = STAMINA_REGEN_DELAY;
    this.stepAccumulator = 0;
    this.headBobPhase = 0;
    this.isRunning = false;
    this.isCrouched = false;
    this.currentHeight = EYE_HEIGHT;
    this.isMoving = false;
    this.joystickTouchId = null;
    this.joystickInput.x = 0;
    this.joystickInput.y = 0;
    this.lookTouchId = null;
  }

  setLookSensitivity(value: number): void {
    this.lookSensitivity = Math.max(0.4, Math.min(2.5, value));
  }

  /** Furniture the player should not be able to walk through. */
  setColliders(colliders: Array<{ x: number; z: number; r: number }>): void {
    this.colliders = colliders;
  }

  /** Boxes that block movement outright - shut doors, and nothing else so far. */
  setBlockers(blockers: THREE.Box3[]): void {
    this.blockers = blockers;
  }

  /**
   * Drops the player somewhere with no transition. Used by the cage elevator,
   * which re-seats the cage under the player's feet mid-ride; the camera is
   * synced here too so the move never shows up as a lag frame.
   */
  teleport(x: number, z: number): void {
    this.position.x = x;
    this.position.z = z;
    this.velocity.set(0, 0, 0);
    this.keys.clear();
    this.applyCamera();
  }

  /**
   * Parks the player somewhere and faces them a given way, camera included.
   * Used when the player climbs into a locker: the view has to be pointing out
   * of the vents on the very first frame, before update() ever runs again.
   */
  place(x: number, z: number, yaw: number): void {
    this.teleport(x, z);
    this.yaw = yaw;
    this.pitch = 0;
    this.applyCamera();
  }

  /** Points the camera along yaw/pitch. Safe to call while input is disabled. */
  private applyCamera(): void {
    this.camera.position.copy(this.position);
    const lookTarget = new THREE.Vector3(
      this.position.x - Math.sin(this.yaw) * Math.cos(this.pitch),
      this.position.y + Math.sin(this.pitch),
      this.position.z - Math.cos(this.yaw) * Math.cos(this.pitch)
    );
    this.camera.lookAt(lookTarget);
  }

  setupKeyboard(): void {
    if (this.keyboardReady) return;
    this.keyboardReady = true;

    document.addEventListener('keydown', (e) => {
      this.keys.add(e.code);
      if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
        this.isCrouched = true;
      }
    });
    document.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
      if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
        this.isCrouched = false;
      }
    });
    // Losing focus mid-run would otherwise leave keys "stuck" down
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.isRunning = false;
    });
  }

  /** Desktop mouse look. Registered once, applied only while the pointer is locked. */
  setupMouseLook(): void {
    if (this.mouseLookReady) return;
    this.mouseLookReady = true;

    document.addEventListener('mousemove', (e) => {
      if (!document.pointerLockElement || this.inputDisabled) return;
      this.yaw -= e.movementX * LOOK_SPEED * this.lookSensitivity;
      this.pitch -= e.movementY * LOOK_SPEED * this.lookSensitivity;
      this.clampPitch();
    });
  }

  /**
   * Unified dual-touch system: left 50% = dynamic floating joystick,
   * right 50% = camera look. Each touch is tracked by its identifier
   * so the two hands NEVER interfere with each other.
   */
  setupMobileTouch(canvas: HTMLCanvasElement): void {
    if (this.mobileTouchReady) return;
    this.mobileTouchReady = true;

    // ── Create the dynamic joystick DOM (injected once) ──
    const knobWrap = document.createElement('div');
    knobWrap.id = 'dynamic-joystick';
    knobWrap.innerHTML = '<div id="dj-base"></div><div id="dj-stick"></div>';
    document.body.appendChild(knobWrap);
    this.joystickWrap = knobWrap;
    this.joystickKnobBase = knobWrap.querySelector('#dj-base');
    this.joystickKnob = knobWrap.querySelector('#dj-stick');

    const JOY_MAX = 50; // max knob displacement in px
    const DEAD_ZONE = 8;
    const HALF = 0.5; // screen split

    // ── Stop the browser gesturing on the play area, and only there ──
    // This must not be bound to `document`: a document-wide preventDefault
    // cancels the compatibility click events, which is exactly what left the
    // on-screen buttons dead. Scrolling and pinch-zoom are blocked in CSS
    // (touch-action: none) instead, so the UI stays interactive.
    const preventAll = (e: TouchEvent) => { e.preventDefault(); };
    canvas.addEventListener('touchstart', preventAll, { passive: false });
    canvas.addEventListener('touchmove', preventAll, { passive: false });
    canvas.addEventListener('touchend', preventAll, { passive: false });
    canvas.addEventListener('touchcancel', preventAll, { passive: false });

    // ── Touch start ──
    canvas.addEventListener('touchstart', (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        const halfW = window.innerWidth * HALF;

        if (this.inputDisabled) continue;

        if (t.clientX < halfW && this.joystickTouchId === null) {
          // LEFT HALF → the joystick appears wherever the thumb lands. The
          // wrapper moves, not the base: positioning the base inside a fixed
          // wrapper is what left a stray ring parked over the top-left HUD.
          this.joystickTouchId = t.identifier;
          this.joystickCenterX = t.clientX;
          this.joystickCenterY = t.clientY;
          if (this.joystickWrap) {
            this.joystickWrap.style.left = `${t.clientX - 55}px`;
            this.joystickWrap.style.top = `${t.clientY - 55}px`;
            this.joystickWrap.style.opacity = '1'; this.joystickWrap.classList.add('active');
          }
          if (this.joystickKnob) this.joystickKnob.style.transform = 'translate(0,0)';
        } else if (t.clientX >= halfW && this.lookTouchId === null) {
          // RIGHT HALF → camera look
          this.lookTouchId = t.identifier;
          this.lastLookX = t.clientX;
          this.lastLookY = t.clientY;
        }
      }
    }, { passive: false });

    // ── Touch move ──
    canvas.addEventListener('touchmove', (e: TouchEvent) => {
      if (this.inputDisabled) return;

      for (let i = 0; i < e.touches.length; i++) {
        const t = e.touches[i];

        // Joystick movement (independent of camera)
        if (t.identifier === this.joystickTouchId) {
          let dx = t.clientX - this.joystickCenterX;
          let dy = t.clientY - this.joystickCenterY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > JOY_MAX) {
            dx = (dx / dist) * JOY_MAX;
            dy = (dy / dist) * JOY_MAX;
          }
          if (this.joystickKnob) {
            this.joystickKnob.style.transform = `translate(${dx}px, ${dy}px)`;
          }
          this.joystickInput.x = Math.abs(dx) < DEAD_ZONE ? 0 : dx / JOY_MAX;
          this.joystickInput.y = Math.abs(dy) < DEAD_ZONE ? 0 : dy / JOY_MAX;
        }

        // Camera look (independent of joystick)
        if (t.identifier === this.lookTouchId) {
          const dx = t.clientX - this.lastLookX;
          const dy = t.clientY - this.lastLookY;
          this.yaw -= dx * LOOK_SPEED * 2 * this.lookSensitivity;
          this.pitch -= dy * LOOK_SPEED * 2 * this.lookSensitivity;
          this.clampPitch();
          this.lastLookX = t.clientX;
          this.lastLookY = t.clientY;
        }
      }
    }, { passive: false });

    // ── Touch end / cancel ──
    const handleEnd = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const ct = e.changedTouches[i];
        if (ct.identifier === this.joystickTouchId) {
          this.joystickTouchId = null;
          this.joystickInput.x = 0;
          this.joystickInput.y = 0;
          if (this.joystickKnob) this.joystickKnob.style.transform = 'translate(0,0)';
          // Floating joystick: it leaves with the thumb, so it never covers
          // the corridor while the player is looking around.
          if (this.joystickWrap) { this.joystickWrap.style.opacity = '0.18'; this.joystickWrap.classList.remove('active'); }
        }
        if (ct.identifier === this.lookTouchId) {
          this.lookTouchId = null;
        }
      }
    };
    canvas.addEventListener('touchend', handleEnd, { passive: false });
    canvas.addEventListener('touchcancel', handleEnd, { passive: false });
  }

  setRunning(running: boolean): void {
    this.isRunning = running;
  }

  setCrouching(crouching: boolean): void {
    this.isCrouched = crouching;
  }

  /** Present look direction in radians (0 = north), used by the minimap. */
  get facing(): number {
    return this.yaw;
  }

  get crouching(): boolean {
    return this.isCrouched;
  }

  get staminaRatio(): number {
    return this.stamina / STAMINA_MAX;
  }

  get sprinting(): boolean {
    return this.isRunning && this.isMoving && this.stamina > 0;
  }

  private clampPitch(): void {
    this.pitch = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, this.pitch));
  }

  update(dt: number): void {
    if (this.inputDisabled) return;
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    const moveDir = new THREE.Vector3();
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) moveDir.add(forward);
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) moveDir.sub(forward);
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) moveDir.sub(right);
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) moveDir.add(right);

    if (Math.abs(this.joystickInput.x) > 0.08 || Math.abs(this.joystickInput.y) > 0.08) {
      moveDir.add(forward.clone().multiplyScalar(-this.joystickInput.y));
      moveDir.add(right.clone().multiplyScalar(this.joystickInput.x));
    }

    this.isMoving = moveDir.lengthSq() > 0.01;
    if (this.isMoving) moveDir.normalize();

    // --- Stamina -----------------------------------------------------------
    const wantsToSprint = this.isRunning && this.isMoving && this.stamina > STAMINA_RUN_FLOOR;
    if (wantsToSprint && this.stamina > 0) {
      this.stamina = Math.max(0, this.stamina - STAMINA_DRAIN * dt);
      this.staminaIdle = 0;
    } else {
      this.staminaIdle += dt;
      if (this.staminaIdle > STAMINA_REGEN_DELAY) {
        this.stamina = Math.min(STAMINA_MAX, this.stamina + STAMINA_REGEN * dt);
      }
    }

    const sprinting = wantsToSprint && this.stamina > 0;
    const speed = this.isCrouched ? CROUCH_SPEED : sprinting ? RUN_SPEED : MOVE_SPEED;
    this.velocity.copy(moveDir).multiplyScalar(speed);

    // --- Movement + wall collision ----------------------------------------
    const newPos = this.position.clone();
    newPos.x += this.velocity.x * dt;
    newPos.z += this.velocity.z * dt;

    const offsets: Array<[number, number]> = [
      [PLAYER_RADIUS, 0],
      [-PLAYER_RADIUS, 0],
      [0, PLAYER_RADIUS],
      [0, -PLAYER_RADIUS],
    ];

    let canMoveX = true;
    for (const [ox, oz] of offsets) {
      if (!isWalkable(this.grid, newPos.x + ox, this.position.z + oz)) {
        canMoveX = false;
        break;
      }
    }
    if (canMoveX) this.position.x = newPos.x;

    let canMoveZ = true;
    for (const [ox, oz] of offsets) {
      if (!isWalkable(this.grid, this.position.x + ox, newPos.z + oz)) {
        canMoveZ = false;
        break;
      }
    }
    if (canMoveZ) this.position.z = newPos.z;

    // Remember where the player legally stood, so the push-out passes below
    // always have somewhere safe to fall back to.
    if (this.isLegalSpot()) {
      this.safeX = this.position.x;
      this.safeZ = this.position.z;
    }

    // --- Furniture collision ---------------------------------------------
    this.resolveColliders();

    // --- Solid boxes: shut doors ------------------------------------------
    this.resolveBlockers();

    // --- Hard guarantee: never end a frame inside geometry ----------------
    // Pushing out of one prop can shove the player into a wall behind it, so
    // if the frame ends anywhere illegal the whole step is undone. That is
    // what keeps the player from ever standing inside a locker or a door.
    if (!this.isLegalSpot()) {
      this.position.x = this.safeX;
      this.position.z = this.safeZ;
    }

    // --- Crouch height transition ----------------------------------------
    const targetHeight = this.isCrouched ? CROUCH_HEIGHT : EYE_HEIGHT;
    this.currentHeight += (targetHeight - this.currentHeight) * Math.min(1, dt * CROUCH_LERP);

    // --- Head bob ----------------------------------------------------------
    let roll = 0;
    if (this.isMoving) {
      const bobSpeed = sprinting ? HEAD_BOB_SPEED * 1.45 : HEAD_BOB_SPEED;
      const bobAmount = (sprinting ? HEAD_BOB_AMOUNT * 1.35 : HEAD_BOB_AMOUNT) * (this.isCrouched ? 0.3 : 1);
      this.headBobPhase += dt * bobSpeed;
      this.position.y =
        this.groundHeight + this.currentHeight + Math.sin(this.headBobPhase) * bobAmount;
      roll = Math.sin(this.headBobPhase * 0.5) * (sprinting ? 0.035 : 0.02) * (this.isCrouched ? 0.3 : 1);
    } else {
      this.headBobPhase = 0;
      const restingHeight = this.groundHeight + this.currentHeight;
      this.position.y += (restingHeight - this.position.y) * Math.min(1, dt * 6);
    }

    // --- Footsteps --------------------------------------------------------
    const travelled = Math.hypot(this.velocity.x, this.velocity.z) * dt;
    this.stepAccumulator += travelled;
    const stepDistance = sprinting ? STEP_DISTANCE_RUN : STEP_DISTANCE_WALK;
    if (this.stepAccumulator >= stepDistance) {
      this.stepAccumulator = 0;
      this.onFootstep?.(sprinting);
    }

    // --- Camera -----------------------------------------------------------
    this.applyCamera();
    this.camera.rotation.z += roll;
  }

  /**
   * Push the player out of any blocker box they have ended up inside.
   *
   * Only the x/z footprint matters - the player has no vertical physics - so
   * each box is treated as a rectangle and the player is ejected along its
   * shallowest axis. That is what stops a shut door from being walked through
   * while still letting the player slide along the wall beside it.
   */
  private resolveBlockers(): void {
    for (const box of this.blockers) {
      const minX = box.min.x - PLAYER_RADIUS;
      const maxX = box.max.x + PLAYER_RADIUS;
      const minZ = box.min.z - PLAYER_RADIUS;
      const maxZ = box.max.z + PLAYER_RADIUS;

      const { x, z } = this.position;
      if (x <= minX || x >= maxX || z <= minZ || z >= maxZ) continue;

      // Distance to each face; the nearest one is the cheapest way out.
      const toWest = x - minX;
      const toEast = maxX - x;
      const toNorth = z - minZ;
      const toSouth = maxZ - z;
      const least = Math.min(toWest, toEast, toNorth, toSouth);

      let nextX = x;
      let nextZ = z;
      if (least === toWest) nextX = minX;
      else if (least === toEast) nextX = maxX;
      else if (least === toNorth) nextZ = minZ;
      else nextZ = maxZ;

      // Never accept a push that would put the player inside real geometry.
      if (this.canStandAt(nextX, z)) this.position.x = nextX;
      else if (this.canStandAt(x, nextZ)) this.position.z = nextZ;
      else if (this.canStandAt(nextX, nextZ)) {
        this.position.x = nextX;
        this.position.z = nextZ;
      }
    }
  }

  /**
   * Push the player out of any obstacle they have ended up inside.
   * Simple circle-vs-circle resolution is plenty here: it keeps the player
   * from walking through gurneys and lockers without needing a physics body.
   */
  private resolveColliders(): void {
    for (const c of this.colliders) {
      const dx = this.position.x - c.x;
      const dz = this.position.z - c.z;
      const min = c.r + PLAYER_RADIUS;
      const distSq = dx * dx + dz * dz;
      if (distSq >= min * min) continue;

      const dist = Math.sqrt(distSq);
      if (dist < 0.0001) {
        // Dead centre: shove the player somewhere deterministic
        this.position.x += min;
        continue;
      }
      const push = (min - dist) / dist;
      const nextX = this.position.x + dx * push;
      const nextZ = this.position.z + dz * push;

      // Never let the push shove the player into a wall. Anything that slips
      // through here is caught by the end-of-frame backstop in update().
      if (this.canStandAt(nextX, this.position.z)) this.position.x = nextX;
      if (this.canStandAt(this.position.x, nextZ)) this.position.z = nextZ;
    }
  }

  /**
   * True when the player's whole body fits at (x, z): the centre cell plus the
   * four cells its radius reaches into are all walkable.
   *
   * Movement already tested this footprint, but the push-out passes only ever
   * tested the centre - which is how a shove from a gurney used to leave the
   * player half-buried in the wall behind it.
   */
  private canStandAt(x: number, z: number): boolean {
    return (
      isWalkable(this.grid, x, z) &&
      isWalkable(this.grid, x + PLAYER_RADIUS, z) &&
      isWalkable(this.grid, x - PLAYER_RADIUS, z) &&
      isWalkable(this.grid, x, z + PLAYER_RADIUS) &&
      isWalkable(this.grid, x, z - PLAYER_RADIUS)
    );
  }

  /**
   * True when the player's whole body fits at (x, z) with nothing overlapping
   * it: every cell the radius reaches into is walkable, and no prop or shut
   * door covers the spot.
   */
  private legalAt(x: number, z: number): boolean {
    const skin = 0.001;
    if (!this.canStandAt(x, z)) return false;
    for (const c of this.colliders) {
      const dx = x - c.x;
      const dz = z - c.z;
      const min = c.r + PLAYER_RADIUS;
      if (dx * dx + dz * dz < min * min - skin) return false;
    }
    for (const box of this.blockers) {
      if (
        x > box.min.x - PLAYER_RADIUS + skin &&
        x < box.max.x + PLAYER_RADIUS - skin &&
        z > box.min.z - PLAYER_RADIUS + skin &&
        z < box.max.z + PLAYER_RADIUS - skin
      ) {
        return false;
      }
    }
    return true;
  }

  /** True when the player is standing somewhere a player is allowed to stand. */
  private isLegalSpot(): boolean {
    return this.legalAt(this.position.x, this.position.z);
  }

  /**
   * Moves the player the shortest distance that puts them somewhere their whole
   * body fits, and adopts that spot as the fallback the frame-end guarantee
   * reverts to.
   *
   * Used when a run is restored. A checkpoint saved a hair too close to a desk
   * would fail the guarantee on the very first frame and be flung back to the
   * level spawn, which reads as the floor teleporting the player across the
   * building. Deliberately NOT folded into place(): that parks the player
   * inside a locker on purpose, where overlapping a prop is the whole point.
   */
  settle(): void {
    if (!this.isLegalSpot()) {
      const fromX = this.position.x;
      const fromZ = this.position.z;
      search: for (let radius = 0.25; radius <= 3.5; radius += 0.25) {
        const steps = Math.max(8, Math.round(radius * 8));
        for (let i = 0; i < steps; i++) {
          const angle = (i / steps) * Math.PI * 2;
          const x = fromX + Math.cos(angle) * radius;
          const z = fromZ + Math.sin(angle) * radius;
          if (!this.legalAt(x, z)) continue;
          this.position.x = x;
          this.position.z = z;
          break search;
        }
      }
    }

    // Only adopt the spot as the fallback once the body really fits there. If
    // nothing nearby is free, the old fallback is left alone so the guarantee
    // still has somewhere legal to send the player.
    if (this.isLegalSpot()) {
      this.safeX = this.position.x;
      this.safeZ = this.position.z;
    }
    this.velocity.set(0, 0, 0);
    this.applyCamera();
  }

  /** Get the direction the player is facing (horizontal) */
  getForwardXZ(): THREE.Vector2 {
    return new THREE.Vector2(-Math.sin(this.yaw), -Math.cos(this.yaw));
  }

  getGridPos(): { row: number; col: number } {
    return {
      row: Math.round(this.position.z / CELL),
      col: Math.round(this.position.x / CELL),
    };
  }
}
