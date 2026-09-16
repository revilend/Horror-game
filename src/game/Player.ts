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

  // Input state
  private keys: Set<string> = new Set();
  private joystickInput = { x: 0, y: 0 };

  // Mobile look
  private touchLookActive = false;
  private lookTouchId: number | null = null;
  private lastTouchX = 0;
  private lastTouchY = 0;

  // Input listeners must only ever be registered once
  private keyboardReady = false;
  private mouseLookReady = false;
  private joystickReady = false;
  private mobileLookReady = false;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
    this.position = new THREE.Vector3();
  }

  init(grid: number[][], spawn: THREE.Vector3): void {
    this.grid = grid;
    this.position.copy(spawn);
    this.camera.position.copy(this.position);
    this.yaw = 0;
    this.pitch = 0;
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
    this.touchLookActive = false;
    this.lookTouchId = null;
  }

  setLookSensitivity(value: number): void {
    this.lookSensitivity = Math.max(0.4, Math.min(2.5, value));
  }

  /** Furniture the player should not be able to walk through. */
  setColliders(colliders: Array<{ x: number; z: number; r: number }>): void {
    this.colliders = colliders;
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
      if (!document.pointerLockElement) return;
      this.yaw -= e.movementX * LOOK_SPEED * this.lookSensitivity;
      this.pitch -= e.movementY * LOOK_SPEED * this.lookSensitivity;
      this.clampPitch();
    });
  }

  setupMobileLook(canvas: HTMLCanvasElement): void {
    if (this.mobileLookReady) return;
    this.mobileLookReady = true;

    canvas.addEventListener(
      'touchstart',
      (e) => {
        // Only right-side touches steer the camera; the left side is the joystick
        for (let i = 0; i < e.changedTouches.length; i++) {
          const touch = e.changedTouches[i];
          if (touch.clientX > window.innerWidth * 0.32) {
            this.touchLookActive = true;
            this.lookTouchId = touch.identifier;
            this.lastTouchX = touch.clientX;
            this.lastTouchY = touch.clientY;
            break;
          }
        }
      },
      { passive: true }
    );

    canvas.addEventListener(
      'touchmove',
      (e) => {
        if (!this.touchLookActive || this.lookTouchId === null) return;
        for (let i = 0; i < e.touches.length; i++) {
          const touch = e.touches[i];
          // Follow the specific finger that started the look, not touches[0]
          if (touch.identifier !== this.lookTouchId) continue;

          const dx = touch.clientX - this.lastTouchX;
          const dy = touch.clientY - this.lastTouchY;
          this.yaw -= dx * LOOK_SPEED * 2 * this.lookSensitivity;
          this.pitch -= dy * LOOK_SPEED * 2 * this.lookSensitivity;
          this.clampPitch();
          this.lastTouchX = touch.clientX;
          this.lastTouchY = touch.clientY;
          break;
        }
      },
      { passive: true }
    );

    const endLook = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === this.lookTouchId) {
          this.touchLookActive = false;
          this.lookTouchId = null;
          break;
        }
      }
    };
    canvas.addEventListener('touchend', endLook, { passive: true });
    canvas.addEventListener('touchcancel', endLook, { passive: true });
  }

  setupJoystick(): void {
    if (this.joystickReady) return;
    this.joystickReady = true;

    const base = document.getElementById('joystick-base');
    const stick = document.getElementById('joystick-stick');
    if (!base || !stick) return;

    let activeTouchId: number | null = null;
    let centerX = 0;
    let centerY = 0;
    const maxDist = 38;

    const reset = () => {
      activeTouchId = null;
      stick.style.transform = 'translate(0, 0)';
      this.joystickInput.x = 0;
      this.joystickInput.y = 0;
    };

    const handleStart = (e: TouchEvent) => {
      if (activeTouchId !== null) return;
      e.preventDefault();
      const touch = e.changedTouches[0];
      activeTouchId = touch.identifier;
      const rect = base.getBoundingClientRect();
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
    };

    const handleMove = (e: TouchEvent) => {
      if (activeTouchId === null) return;
      for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];
        if (touch.identifier !== activeTouchId) continue;
        e.preventDefault();

        let dx = touch.clientX - centerX;
        let dy = touch.clientY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > maxDist) {
          dx = (dx / dist) * maxDist;
          dy = (dy / dist) * maxDist;
        }
        stick.style.transform = `translate(${dx}px, ${dy}px)`;

        // Dead zone so a resting thumb does not creep the player forward
        this.joystickInput.x = Math.abs(dx) < 6 ? 0 : dx / maxDist;
        this.joystickInput.y = Math.abs(dy) < 6 ? 0 : dy / maxDist;
        break;
      }
    };

    const handleEnd = (e: TouchEvent) => {
      if (activeTouchId === null) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === activeTouchId) {
          reset();
          break;
        }
      }
    };

    base.addEventListener('touchstart', handleStart, { passive: false });
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleEnd, { passive: true });
    document.addEventListener('touchcancel', handleEnd, { passive: true });
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

    // --- Furniture collision ---------------------------------------------
    this.resolveColliders();

    // --- Crouch height transition ----------------------------------------
    const targetHeight = this.isCrouched ? CROUCH_HEIGHT : EYE_HEIGHT;
    this.currentHeight += (targetHeight - this.currentHeight) * Math.min(1, dt * CROUCH_LERP);

    // --- Head bob ----------------------------------------------------------
    let roll = 0;
    if (this.isMoving) {
      const bobSpeed = sprinting ? HEAD_BOB_SPEED * 1.45 : HEAD_BOB_SPEED;
      const bobAmount = (sprinting ? HEAD_BOB_AMOUNT * 1.35 : HEAD_BOB_AMOUNT) * (this.isCrouched ? 0.3 : 1);
      this.headBobPhase += dt * bobSpeed;
      this.position.y = this.currentHeight + Math.sin(this.headBobPhase) * bobAmount;
      roll = Math.sin(this.headBobPhase * 0.5) * (sprinting ? 0.035 : 0.02) * (this.isCrouched ? 0.3 : 1);
    } else {
      this.headBobPhase = 0;
      this.position.y += (this.currentHeight - this.position.y) * Math.min(1, dt * 6);
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
    this.camera.position.copy(this.position);
    const lookTarget = new THREE.Vector3(
      this.position.x - Math.sin(this.yaw) * Math.cos(this.pitch),
      this.position.y + Math.sin(this.pitch),
      this.position.z - Math.cos(this.yaw) * Math.cos(this.pitch)
    );
    this.camera.lookAt(lookTarget);
    this.camera.rotation.z += roll;
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

      // Never let the push shove the player into a wall
      if (isWalkable(this.grid, nextX, this.position.z)) this.position.x = nextX;
      if (isWalkable(this.grid, this.position.x, nextZ)) this.position.z = nextZ;
    }
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
