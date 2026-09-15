import * as THREE from 'three';
import { isWalkable, CELL } from './World';

const MOVE_SPEED = 4.0;
const RUN_SPEED = 7.0;
const LOOK_SPEED = 0.002;
const PLAYER_RADIUS = 0.4;
const HEAD_BOB_SPEED = 8;
const HEAD_BOB_AMOUNT = 0.08;

export class Player {
  camera: THREE.PerspectiveCamera;
  position: THREE.Vector3;
  velocity: THREE.Vector3 = new THREE.Vector3();
  
  private yaw = 0;
  private pitch = 0;
  private headBobPhase = 0;
  private isMoving = false;
  private isRunning = false;
  private grid: number[][] = [];
  
  // Input state
  private keys: Set<string> = new Set();
  private joystickInput = { x: 0, y: 0 };
  private lookInput = { x: 0, y: 0 };
  
  // Mobile look
  private touchLookActive = false;
  private lastTouchX = 0;
  private lastTouchY = 0;

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

  setupKeyboard(): void {
    document.addEventListener('keydown', (e) => {
      this.keys.add(e.code);
    });
    document.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });
  }

  setupMobileLook(canvas: HTMLCanvasElement): void {
    canvas.addEventListener('touchstart', (e) => {
      // Only right-side touches control camera look
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        if (t.clientX > window.innerWidth * 0.35) {
          this.touchLookActive = true;
          this.lastTouchX = t.clientX;
          this.lastTouchY = t.clientY;
          break;
        }
      }
    }, { passive: true });

    canvas.addEventListener('touchmove', (e) => {
      if (!this.touchLookActive) return;
      for (let i = 0; i < e.touches.length; i++) {
        const t = e.touches[i];
        if (t.clientX > window.innerWidth * 0.35) {
          const dx = t.clientX - this.lastTouchX;
          const dy = t.clientY - this.lastTouchY;
          this.yaw -= dx * LOOK_SPEED * 2;
          this.pitch -= dy * LOOK_SPEED * 2;
          this.pitch = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, this.pitch));
          this.lastTouchX = t.clientX;
          this.lastTouchY = t.clientY;
          break;
        }
      }
    }, { passive: true });

    const endTouch = () => { this.touchLookActive = false; };
    canvas.addEventListener('touchend', endTouch, { passive: true });
    canvas.addEventListener('touchcancel', endTouch, { passive: true });
  }

  setupJoystick(): void {
    const base = document.getElementById('joystick-base');
    const stick = document.getElementById('joystick-stick');
    if (!base || !stick) return;

    let active = false;
    let centerX = 0;
    let centerY = 0;
    const maxDist = 35;

    const handleStart = (e: TouchEvent) => {
      e.preventDefault();
      active = true;
      const rect = base.getBoundingClientRect();
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
    };

    const handleMove = (e: TouchEvent) => {
      if (!active) return;
      e.preventDefault();
      const t = e.touches[0];
      let dx = t.clientX - centerX;
      let dy = t.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > maxDist) {
        dx = (dx / dist) * maxDist;
        dy = (dy / dist) * maxDist;
      }
      stick.style.transform = `translate(${dx}px, ${dy}px)`;
      this.joystickInput.x = dx / maxDist;
      this.joystickInput.y = dy / maxDist;
    };

    const handleEnd = () => {
      active = false;
      stick.style.transform = 'translate(0, 0)';
      this.joystickInput.x = 0;
      this.joystickInput.y = 0;
    };

    base.addEventListener('touchstart', handleStart, { passive: false });
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleEnd, { passive: true });
    document.addEventListener('touchcancel', handleEnd, { passive: true });
  }

  setRunning(running: boolean): void {
    this.isRunning = running;
  }

  update(dt: number): void {
    // Keyboard mouse look
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement) {
        this.yaw -= e.movementX * LOOK_SPEED;
        this.pitch -= e.movementY * LOOK_SPEED;
        this.pitch = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, this.pitch));
      }
    });

    // Calculate movement direction
    const forward = new THREE.Vector3(
      -Math.sin(this.yaw),
      0,
      -Math.cos(this.yaw)
    );
    const right = new THREE.Vector3(
      Math.cos(this.yaw),
      0,
      -Math.sin(this.yaw)
    );

    const moveDir = new THREE.Vector3(0, 0, 0);

    // Keyboard input
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) moveDir.add(forward);
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) moveDir.sub(forward);
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) moveDir.sub(right);
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) moveDir.add(right);

    // Joystick input
    if (Math.abs(this.joystickInput.x) > 0.1 || Math.abs(this.joystickInput.y) > 0.1) {
      moveDir.add(forward.clone().multiplyScalar(-this.joystickInput.y));
      moveDir.add(right.clone().multiplyScalar(this.joystickInput.x));
    }

    this.isMoving = moveDir.lengthSq() > 0.01;
    if (this.isMoving) moveDir.normalize();

    const speed = this.isRunning ? RUN_SPEED : MOVE_SPEED;
    this.velocity.copy(moveDir).multiplyScalar(speed);

    // Apply movement with collision
    const newPos = this.position.clone();
    newPos.x += this.velocity.x * dt;
    newPos.z += this.velocity.z * dt;

    // Wall collision (check corners of player bounding box)
    const offsets = [
      [PLAYER_RADIUS, 0],
      [-PLAYER_RADIUS, 0],
      [0, PLAYER_RADIUS],
      [0, -PLAYER_RADIUS],
    ];

    // X axis
    let canMoveX = true;
    for (const [ox, oz] of offsets) {
      if (!isWalkable(this.grid, newPos.x + ox, this.position.z + oz)) {
        canMoveX = false;
        break;
      }
    }
    if (canMoveX) {
      this.position.x = newPos.x;
    }

    // Z axis
    let canMoveZ = true;
    for (const [ox, oz] of offsets) {
      if (!isWalkable(this.grid, this.position.x + ox, newPos.z + oz)) {
        canMoveZ = false;
        break;
      }
    }
    if (canMoveZ) {
      this.position.z = newPos.z;
    }

    // Head bob
    if (this.isMoving) {
      const bobSpeed = this.isRunning ? HEAD_BOB_SPEED * 1.5 : HEAD_BOB_SPEED;
      this.headBobPhase += dt * bobSpeed;
      this.position.y = this.position.y + 
        (Math.sin(this.headBobPhase) * HEAD_BOB_AMOUNT - (this.position.y - 1.7));
    } else {
      this.headBobPhase = 0;
      this.position.y += (1.7 - this.position.y) * dt * 5;
    }

    // Update camera
    this.camera.position.copy(this.position);
    
    const lookTarget = new THREE.Vector3(
      this.position.x - Math.sin(this.yaw) * Math.cos(this.pitch),
      this.position.y + Math.sin(this.pitch),
      this.position.z - Math.cos(this.yaw) * Math.cos(this.pitch)
    );
    this.camera.lookAt(lookTarget);
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
