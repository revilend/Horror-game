import * as THREE from 'three';
import { CELL } from './World';
import { findPath, GridPoint, isWalkableCell } from './Pathfinding';

type MonsterState = 'patrol' | 'investigate' | 'chase';

const SPEED_PATROL = 1.5;
const SPEED_INVESTIGATE = 2.2;
const SPEED_CHASE = 3.5;

const DETECT_RANGE = 12;
const HEAR_RUN_RANGE = 9;
const HEAR_WALK_RANGE = 4.5;
const MEMORY_TIME = 5;
const INVESTIGATE_TIME = 7;
const CATCH_RANGE = 1.35;
const BODY_RADIUS = 0.5;
const REPATH_INTERVAL = 0.35;
const WAYPOINT_RADIUS = 0.45;

function lerpAngle(a: number, b: number, t: number): number {
  const twoPi = Math.PI * 2;
  let diff = (b - a) % twoPi;
  if (diff > Math.PI) diff -= twoPi;
  if (diff < -Math.PI) diff += twoPi;
  return a + diff * t;
}

/**
 * Patrols the asylum, investigates noises and chases on sight.
 *
 * Paths are computed with BFS so it walks around corners instead of grinding
 * into walls, and it can hear a sprinting player through them.
 */
export class Monster {
  mesh: THREE.Group;
  /** Fired when the monster spots the player - the game plays a growl. */
  onGrowl: (() => void) | null = null;

  private grid: number[][];
  private position: THREE.Vector3;
  private path: GridPoint[] = [];
  private pathIndex = 0;
  private repathTimer = 0;
  private state: MonsterState = 'patrol';
  private target = new THREE.Vector3();
  private lastKnown = new THREE.Vector3();
  private memoryTimer = 0;
  private stunTimer = 0;
  private growlCooldown = 0;
  private aggression = 1;
  private animPhase = 0;
  private patrolPoints: THREE.Vector3[] = [];
  private patrolIndex = 0;
  /**
   * Furniture the creature has to walk around. Without these it slides
   * straight through gurneys and lockers while the player is blocked by them,
   * which immediately reads as a bug.
   */
  private colliders: Array<{ x: number; z: number; r: number }> = [];

  // Every limb hangs off a pivot placed at its joint. Rotating a limb mesh
  // directly spins it around its own centre, which reads as a twirling stick
  // rather than an arm; pivots are what make the walk cycle look alive.
  private torso: THREE.Mesh;
  private headPivot: THREE.Group;
  private jaw: THREE.Mesh;
  private leftArmPivot: THREE.Group;
  private rightArmPivot: THREE.Group;
  private leftLegPivot: THREE.Group;
  private rightLegPivot: THREE.Group;
  private eyeLight: THREE.PointLight;
  /** The head-mirror lamp - flickers like a dying tube. */
  private mirrorLight: THREE.PointLight | null = null;
  /** The bone saw hanging off the right arm; swings with the walk cycle. */
  private boneSaw: THREE.Group | null = null;

  constructor(grid: number[][], spawn: THREE.Vector3) {
    this.grid = grid;
    this.position = spawn.clone();
    this.mesh = new THREE.Group();

    // Pallid, waxy flesh. It has to read against near-black corridors, or the
    // creature just looks like a flat hole in the wall.
    // A strong self-lighting term keeps the creature readable in pitch-dark
    // corridors — enough glow to see its outline even with the flashlight off.
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xb8b0a0,
      roughness: 0.78,
      metalness: 0.03,
      emissive: 0x442218,
      emissiveIntensity: 2.2,
    });
    const bruiseMat = new THREE.MeshStandardMaterial({
      color: 0x4a3a3a,
      roughness: 1.0,
      metalness: 0,
    });
    const mouthMat = new THREE.MeshStandardMaterial({ color: 0x26060a, roughness: 1.0 });
    const toothMat = new THREE.MeshStandardMaterial({ color: 0xd8cfae, roughness: 0.7 });
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0xffdcdc,
      emissive: 0xff2222,
      emissiveIntensity: 6.0,
    });
    // The Deranged Doctor: a torn surgical coat, stained deep brown with old
    // blood. It hangs open so the exposed rib cage and pinned organs read
    // instantly - this is the thing in the reference art.
    const coatMat = new THREE.MeshStandardMaterial({
      color: 0xc9c2ae,
      roughness: 0.92,
      metalness: 0,
      emissive: 0x1a0d08,
      emissiveIntensity: 0.55,
    });
    const bloodMat = new THREE.MeshStandardMaterial({
      color: 0x5c1210,
      roughness: 0.55,
      metalness: 0.05,
      emissive: 0x1c0402,
      emissiveIntensity: 0.4,
    });
    const boneMat = new THREE.MeshStandardMaterial({
      color: 0xe8e0c8,
      roughness: 0.6,
      metalness: 0.02,
      emissive: 0x2a2418,
      emissiveIntensity: 0.8,
    });
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x9aa2a8,
      roughness: 0.3,
      metalness: 0.85,
      emissive: 0x14171a,
      emissiveIntensity: 0.5,
    });

    // Hunched torso, leaning forward. Tapered so the shoulders read wider
    // than the waist, like something that used to be a person.
    this.torso = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.44, 1.35, 10), skinMat);
    this.torso.position.y = 1.28;
    this.torso.rotation.x = 0.2;
    this.torso.castShadow = true;
    this.mesh.add(this.torso);

    // Shoulder mass
    const shoulders = new THREE.Mesh(new THREE.SphereGeometry(0.46, 12, 10), skinMat);
    shoulders.position.set(0, 1.88, -0.02);
    shoulders.scale.set(1.35, 0.55, 0.62);
    shoulders.castShadow = true;
    this.mesh.add(shoulders);

    // Exposed ribs across the chest
    for (let i = 0; i < 4; i++) {
      const rib = new THREE.Mesh(new THREE.TorusGeometry(0.34 - i * 0.035, 0.026, 6, 16), bruiseMat);
      rib.position.set(0, 1.72 - i * 0.2, -0.02);
      rib.rotation.x = Math.PI / 2 + 0.2;
      rib.scale.set(1, 1, 0.6);
      this.mesh.add(rib);
    }

    // --- The Deranged Doctor dressing -------------------------------------
    // Torn surgical coat hanging open: two front flaps plus a cape across the
    // shoulders, stained with old blood. Readable from any angle.
    const coatFlap = (side: -1 | 1): void => {
      const flap = new THREE.Mesh(new THREE.BoxGeometry(0.26, 1.32, 0.05), coatMat);
      flap.position.set(side * 0.19, 1.24, 0.26);
      flap.rotation.z = side * 0.06;
      flap.castShadow = true;
      this.mesh.add(flap);

      const stain = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.5, 0.052), bloodMat);
      stain.position.set(side * 0.17, 0.92, 0.265);
      stain.rotation.z = side * 0.08;
      this.mesh.add(stain);
    };
    coatFlap(-1);
    coatFlap(1);

    const coatBack = new THREE.Mesh(new THREE.BoxGeometry(0.74, 1.34, 0.06), coatMat);
    coatBack.position.set(0, 1.26, -0.3);
    coatBack.castShadow = true;
    this.mesh.add(coatBack);

    const shoulderCape = new THREE.Mesh(
      new THREE.CylinderGeometry(0.52, 0.6, 0.4, 12, 1, true),
      coatMat
    );
    shoulderCape.position.y = 1.78;
    shoulderCape.castShadow = true;
    this.mesh.add(shoulderCape);

    // Organ cluster in the open chest: dark visceral mass under the ribs
    const organs = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 8), bloodMat);
    organs.position.set(0, 1.42, -0.04);
    organs.scale.set(1.1, 0.8, 0.7);
    this.mesh.add(organs);

    // Syringes and scalpels pinning the torso shut - the silhouette killer
    // detail from the reference art. Needles glint, bodies catch the light.
    const syringe = (angle: number, height: number): void => {
      const pin = new THREE.Group();
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.17, 7), bloodMat);
      pin.add(barrel);
      const needle = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.12, 5), steelMat);
      needle.position.y = 0.14;
      pin.add(needle);
      pin.position.set(0, height, 0.06);
      pin.rotation.z = angle;
      pin.rotation.x = 0.3;
      this.mesh.add(pin);
    };
    syringe(-0.5, 1.62);
    syringe(0.4, 1.52);
    syringe(-0.2, 1.4);
    syringe(0.62, 1.34);
    syringe(-0.75, 1.28);

    // Neck pivot - the skull and jaw rock and tilt off this point.
    this.headPivot = new THREE.Group();
    this.headPivot.position.set(0, 2.0, 0);
    this.mesh.add(this.headPivot);

    // Elongated skull, tipped forward and slightly to one side
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 10), skinMat);
    head.position.set(0, 0.28, -0.08);
    head.scale.set(0.86, 1.35, 1.0);
    head.castShadow = true;
    this.headPivot.add(head);

    // Brow ridge: a hard line above the sockets, so the face is not a plain egg
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.07, 0.1), bruiseMat);
    brow.position.set(0, 0.4, -0.26);
    brow.rotation.x = -0.25;
    this.headPivot.add(brow);

    // Sunken jaw hanging open, hinged at the back
    this.jaw = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.26, 0.3), mouthMat);
    this.jaw.position.set(0, -0.06, -0.22);
    this.jaw.castShadow = true;
    this.headPivot.add(this.jaw);

    // Teeth: jagged rows top and bottom
    const toothGeo = new THREE.ConeGeometry(0.022, 0.075, 4);
    for (let i = 0; i < 7; i++) {
      const x = -0.115 + i * 0.038;
      const upper = new THREE.Mesh(toothGeo, toothMat);
      upper.position.set(x, 0.12, -0.31);
      upper.rotation.x = Math.PI;
      this.headPivot.add(upper);

      const lower = new THREE.Mesh(toothGeo, toothMat);
      lower.position.set(x, -0.02, -0.33);
      this.headPivot.add(lower);
    }

    // Bright, wet eyes set deep in the sockets
    const eyeGeo = new THREE.SphereGeometry(0.075, 10, 10);
    for (const x of [-0.13, 0.13]) {
      const socket = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), bruiseMat);
      socket.position.set(x, 0.33, -0.28);
      socket.scale.set(1, 1, 0.5);
      this.headPivot.add(socket);

      const eye = new THREE.Mesh(eyeGeo, eyeMat);
      eye.position.set(x, 0.33, -0.33);
      eye.scale.set(0.85, 1.15, 0.85);
      this.headPivot.add(eye);
    }

    this.eyeLight = new THREE.PointLight(0xff2a1a, 2.0, 14);
    this.eyeLight.position.set(0, 0.35, -0.34);
    this.headPivot.add(this.eyeLight);

    // --- Arms: shoulder joints, long enough to drag on the floor -----------
    const clawGeo = new THREE.ConeGeometry(0.032, 0.22, 5);
    const shoulderY = 1.76;
    const armLength = 1.7;

    const buildArm = (side: -1 | 1): THREE.Group => {
      const pivot = new THREE.Group();
      pivot.position.set(side * 0.5, shoulderY, 0.04);
      pivot.rotation.z = side * 0.1;

      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.085, 0.115, armLength, 8),
        skinMat
      );
      arm.position.y = -armLength / 2;
      arm.castShadow = true;
      pivot.add(arm);

      // Elbow mass, so the arm is not one straight taper
      const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 7), bruiseMat);
      elbow.position.y = -armLength * 0.52;
      pivot.add(elbow);

      for (const offset of [-0.055, 0, 0.055]) {
        const claw = new THREE.Mesh(clawGeo, toothMat);
        claw.position.set(offset, -armLength - 0.08, 0.02);
        claw.rotation.x = Math.PI;
        pivot.add(claw);
      }

      this.mesh.add(pivot);
      return pivot;
    };

    this.leftArmPivot = buildArm(-1);
    this.rightArmPivot = buildArm(1);

    // The bone saw: dragged in its right hand, forever scraping the floor.
    // Added after the arm pivots exist because it hangs off the right one.
    const sawPivot = new THREE.Group();
    sawPivot.position.set(0.02, -0.72, 0.08);
    const sawBlade = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.028, 18), steelMat);
    sawBlade.rotation.z = Math.PI / 2;
    sawBlade.position.set(0.05, -0.12, 0);
    sawPivot.add(sawBlade);
    const sawHandle = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.07), bloodMat);
    sawHandle.position.set(-0.16, -0.1, 0);
    sawPivot.add(sawHandle);
    this.boneSaw = sawPivot;
    this.rightArmPivot.add(sawPivot);

    // Head dressing: mask straps and the flickering head-mirror. Added after
    // the head pivot exists for the same reason.
    const strap = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.018, 5, 14), coatMat);
    strap.position.set(0, 0.3, 0.12);
    strap.rotation.y = Math.PI / 2;
    strap.rotation.z = 0.25;
    this.headPivot.add(strap);

    const mirror = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.03, 12), steelMat);
    mirror.rotation.x = Math.PI / 2;
    mirror.position.set(0, 0.5, -0.24);
    this.headPivot.add(mirror);
    const mirrorBand = new THREE.Mesh(new THREE.TorusGeometry(0.29, 0.02, 5, 14), coatMat);
    mirrorBand.rotation.y = Math.PI / 2;
    mirrorBand.position.y = 0.48;
    this.headPivot.add(mirrorBand);
    const mirrorLight = new THREE.PointLight(0xcfe6ff, 0.7, 5);
    mirrorLight.position.set(0, 0.5, -0.3);
    this.headPivot.add(mirrorLight);
    this.mirrorLight = mirrorLight;

    // --- Legs: hip joints -------------------------------------------------
    const legLength = 0.92;
    const buildLeg = (side: -1 | 1): THREE.Group => {
      const pivot = new THREE.Group();
      pivot.position.set(side * 0.19, legLength, 0);

      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.11, 0.13, legLength, 8),
        skinMat
      );
      leg.position.y = -legLength / 2;
      leg.castShadow = true;
      pivot.add(leg);

      // A foot, so the legs are not two floating cylinders
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.11, 0.34), bruiseMat);
      foot.position.set(0, -legLength + 0.03, -0.06);
      pivot.add(foot);

      this.mesh.add(pivot);
      return pivot;
    };

    this.leftLegPivot = buildLeg(-1);
    this.rightLegPivot = buildLeg(1);

    this.mesh.position.copy(this.position);
    this.buildPatrolPoints();
  }

  private buildPatrolPoints(): void {
    const candidates: THREE.Vector3[] = [];
    for (let row = 1; row < this.grid.length - 1; row++) {
      for (let col = 1; col < this.grid[0].length - 1; col++) {
        // Corner-ish cells make better patrol stops than long straight runs
        if (this.grid[row][col] !== 1) continue;
        const openNeighbours =
          (isWalkableCell(this.grid, row - 1, col) ? 1 : 0) +
          (isWalkableCell(this.grid, row + 1, col) ? 1 : 0) +
          (isWalkableCell(this.grid, row, col - 1) ? 1 : 0) +
          (isWalkableCell(this.grid, row, col + 1) ? 1 : 0);
        if (openNeighbours <= 2) {
          candidates.push(new THREE.Vector3(col * CELL, 1.5, row * CELL));
        }
      }
    }

    if (candidates.length === 0) {
      candidates.push(new THREE.Vector3(8 * CELL, 1.5, 8 * CELL));
    }

    // Shuffle and keep a handful so patrols wander across the whole map
    for (let i = candidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }
    this.patrolPoints = candidates.slice(0, Math.min(candidates.length, 8));
    this.patrolIndex = 0;
  }

  addToScene(scene: THREE.Scene): void {
    scene.add(this.mesh);
  }

  /** Show or hide the monster mesh (used during stair transitions). */
  setVisible(visible: boolean): void {
    this.mesh.visible = visible;
  }

  setColliders(colliders: Array<{ x: number; z: number; r: number }>): void {
    this.colliders = colliders;
  }

  /** Push the creature out of any furniture it has ended up inside. */
  private resolveColliders(): void {
    for (const collider of this.colliders) {
      const dx = this.position.x - collider.x;
      const dz = this.position.z - collider.z;
      const min = collider.r + BODY_RADIUS;
      const distSq = dx * dx + dz * dz;
      if (distSq >= min * min) continue;

      const dist = Math.sqrt(distSq);
      if (dist < 0.0001) {
        this.position.x += min;
        continue;
      }
      const push = (min - dist) / dist;
      const nextX = this.position.x + dx * push;
      const nextZ = this.position.z + dz * push;
      if (isWalkableCell(this.grid, Math.round(this.position.z / CELL), Math.round(nextX / CELL))) {
        this.position.x = nextX;
      }
      if (isWalkableCell(this.grid, Math.round(nextZ / CELL), Math.round(this.position.x / CELL))) {
        this.position.z = nextZ;
      }
    }
  }

  /** Straight-line visibility check across the grid. */
  private hasLineOfSight(playerPos: THREE.Vector3): boolean {
    const dx = playerPos.x - this.position.x;
    const dz = playerPos.z - this.position.z;
    const distance = Math.hypot(dx, dz);
    if (distance > DETECT_RANGE * this.aggression) return false;

    const steps = Math.ceil(distance / (CELL * 0.4));
    const stepX = dx / steps;
    const stepZ = dz / steps;

    for (let i = 1; i < steps; i++) {
      const col = Math.round((this.position.x + stepX * i) / CELL);
      const row = Math.round((this.position.z + stepZ * i) / CELL);
      if (row < 0 || row >= this.grid.length || col < 0 || col >= this.grid[0].length) return false;
      if (this.grid[row][col] === 0) return false;
    }
    return true;
  }

  private gridOf(vector: THREE.Vector3): GridPoint {
    return { row: Math.round(vector.z / CELL), col: Math.round(vector.x / CELL) };
  }

  private repath(goal: THREE.Vector3): void {
    const start = this.gridOf(this.position);
    const end = this.gridOf(goal);
    const path = findPath(this.grid, start, end);
    if (path.length > 0) {
      this.path = path;
      this.pathIndex = 0;
    }
  }

  distanceTo(pos: THREE.Vector3): number {
    return this.position.distanceTo(pos);
  }

  /** Read-only view of where the creature currently is (used by the minimap). */
  get currentPosition(): THREE.Vector3 {
    return this.position;
  }

  get isChasing(): boolean {
    return this.state === 'chase' && this.stunTimer <= 0;
  }

  get stateName(): MonsterState {
    return this.state;
  }

  /**
   * The hospital waking up wakes it up too.
   * 1 = baseline; higher means faster and more perceptive.
   */
  setAggression(level: number): void {
    this.aggression = Math.max(0.7, Math.min(1.6, level));
  }

  /** Briefly freeze the monster - used after it lands a hit. */
  stun(seconds: number): void {
    this.stunTimer = Math.max(this.stunTimer, seconds);
    this.state = 'investigate';
    this.memoryTimer = INVESTIGATE_TIME;
    this.lastKnown.copy(this.position);
    this.path = [];
    this.pathIndex = 0;
  }

  /** Make the monster investigate a specific location (bottle throw distraction). */
  goInvestigateAt(pos: THREE.Vector3): void {
    this.state = 'investigate';
    this.memoryTimer = INVESTIGATE_TIME * 1.5;
    this.lastKnown.copy(pos);
    this.path = [];
    this.pathIndex = 0;
    this.stunTimer = 0;
  }

  /**
   * @param isHidden When true the player is crouched near a hiding spot. The
   *   monster's line of sight is blocked and hearing is reduced drastically so
   *   the player can breathe while the creature stalks past.
   */
  update(dt: number, playerPos: THREE.Vector3, playerNoisy: boolean, isHidden: boolean = false): { caught: boolean } {
    this.growlCooldown = Math.max(0, this.growlCooldown - dt);

    const distance = Math.hypot(playerPos.x - this.position.x, playerPos.z - this.position.z);

    if (this.stunTimer > 0) {
      this.stunTimer -= dt;
      this.animate(dt, 0.4);
      this.mesh.position.copy(this.position);
      return { caught: false };
    }

    // --- State machine -----------------------------------------------------
    // When the player is hidden behind a hiding spot, the creature cannot see
    // them and its hearing is reduced to a tiny radius.
    const canSee = isHidden ? false : this.hasLineOfSight(playerPos);
    const hearRange = isHidden ? 2.2 : playerNoisy ? HEAR_RUN_RANGE : HEAR_WALK_RANGE;
    const canHear = distance < hearRange;

    if (canSee) {
      if (this.state !== 'chase' && this.growlCooldown <= 0) {
        this.growlCooldown = 7;
        this.onGrowl?.();
      }
      this.state = 'chase';
      this.lastKnown.copy(playerPos);
      this.memoryTimer = MEMORY_TIME;
    } else if (this.state === 'chase') {
      this.memoryTimer -= dt;
      if (this.memoryTimer <= 0) {
        this.state = 'investigate';
        this.memoryTimer = INVESTIGATE_TIME;
      }
    } else if (canHear) {
      this.lastKnown.copy(playerPos);
      this.state = 'investigate';
      this.memoryTimer = INVESTIGATE_TIME;
    } else if (this.state === 'investigate') {
      this.memoryTimer -= dt;
      const arrived = Math.hypot(this.position.x - this.lastKnown.x, this.position.z - this.lastKnown.z) < 1.1;
      if (this.memoryTimer <= 0 || arrived) {
        this.state = 'patrol';
        this.path = [];
      }
    }

    // --- Pick a destination -----------------------------------------------
    if (this.state === 'chase') {
      this.target.copy(playerPos);
    } else if (this.state === 'investigate') {
      this.target.copy(this.lastKnown);
    } else {
      const patrolTarget = this.patrolPoints[this.patrolIndex] ?? this.position;
      this.target.copy(patrolTarget);
      if (this.position.distanceTo(patrolTarget) < 1.2) {
        this.patrolIndex = (this.patrolIndex + 1) % this.patrolPoints.length;
        this.path = [];
      }
    }
    this.target.y = this.position.y;

    const baseSpeed =
      (this.state === 'chase' ? SPEED_CHASE : this.state === 'investigate' ? SPEED_INVESTIGATE : SPEED_PATROL) *
      this.aggression;
    // Gentle organic speed variation instead of per-frame random jitter
    const speed = baseSpeed * (1 + Math.sin(this.animPhase * 0.3) * 0.06);

    // --- Follow the path ---------------------------------------------------
    this.repathTimer -= dt;
    if (this.repathTimer <= 0) {
      this.repathTimer = REPATH_INTERVAL;
      const goalCell = this.gridOf(this.target);
      const positionCell = this.gridOf(this.position);
      const pathCoversGoal = this.path.some((p) => p.row === goalCell.row && p.col === goalCell.col);
      const alreadyThere = goalCell.row === positionCell.row && goalCell.col === positionCell.col;
      if (!pathCoversGoal && !alreadyThere) this.repath(this.target);
    }

    let dirX = this.target.x - this.position.x;
    let dirZ = this.target.z - this.position.z;
    const waypoint = this.path[this.pathIndex];
    if (waypoint) {
      const wx = waypoint.col * CELL;
      const wz = waypoint.row * CELL;
      dirX = wx - this.position.x;
      dirZ = wz - this.position.z;
      if (Math.hypot(dirX, dirZ) < WAYPOINT_RADIUS) {
        this.pathIndex++;
      }
    }

    const dirLength = Math.hypot(dirX, dirZ);
    if (dirLength > 0.01) {
      const nx = dirX / dirLength;
      const nz = dirZ / dirLength;
      const nextX = this.position.x + nx * speed * dt;
      const nextZ = this.position.z + nz * speed * dt;

      if (isWalkableCell(this.grid, Math.round(nextZ / CELL), Math.round(nextX / CELL))) {
        this.position.x = nextX;
        this.position.z = nextZ;
        this.resolveColliders();
      } else {
        // Blocked: force a fresh path next frame
        this.path = [];
        this.pathIndex = 0;
      }

      const desired = Math.atan2(nx, nz);
      this.mesh.rotation.y = lerpAngle(this.mesh.rotation.y, desired, Math.min(1, dt * 7));
    }

    this.animate(dt, this.state === 'chase' ? 1 : 0.45);
    this.mesh.position.copy(this.position);

    return { caught: distance < CATCH_RANGE };
  }

  private animate(dt: number, intensity: number): void {
    this.animPhase += dt * (6 + intensity * 6);
    const bob = Math.sin(this.animPhase) * (0.04 + intensity * 0.1);
    const swing = Math.sin(this.animPhase) * (0.25 + intensity * 0.45);

    this.torso.position.y = 1.22 + bob;
    // Counter-sway in the hips keeps the walk from looking metronomic.
    this.torso.rotation.z = Math.sin(this.animPhase * 0.5) * (0.02 + intensity * 0.05);
    this.torso.rotation.x = 0.2 + intensity * 0.13;

    // Neck: nod on each footfall, and loll to one side as the thing closes in.
    this.headPivot.position.y = 2.0 + bob;
    this.headPivot.rotation.z = Math.sin(this.animPhase * 0.35) * (0.04 + intensity * 0.07);
    this.headPivot.rotation.x = Math.abs(Math.sin(this.animPhase * 0.5)) * 0.06 * intensity;

    // The jaw hangs open, and pulls wider the closer it gets to a chase.
    this.jaw.rotation.x = 0.1 + intensity * 0.18 + Math.abs(Math.sin(this.animPhase * 0.85)) * 0.09;

    // Arms swing from the shoulder; the legs counter-swing from the hip.
    this.leftArmPivot.rotation.x = swing;
    this.rightArmPivot.rotation.x = -swing;
    this.leftLegPivot.rotation.x = -swing * 0.8;
    this.rightLegPivot.rotation.x = swing * 0.8;

    // The bone saw hangs from the right hand and scrapes the ground on each
    // forward swing - the tell-tale dragging sound made visible.
    if (this.boneSaw) {
      this.boneSaw.rotation.x = -swing * 0.7;
      this.boneSaw.rotation.z = Math.sin(this.animPhase * 0.5) * 0.1;
    }

    // Head-mirror flickers like a failing fluorescent - never steady, never
    // off. It gives the creature a visible signature deep in dark corridors.
    if (this.mirrorLight) {
      const flicker = Math.random() < 0.06 ? 0.15 : 0.55 + Math.sin(this.animPhase * 2.3) * 0.2;
      this.mirrorLight.intensity = flicker + intensity * 0.5;
    }

    this.eyeLight.intensity = 0.6 + intensity * 1.6 + Math.sin(this.animPhase * 3) * 0.25 * intensity;
  }

  reset(spawn: THREE.Vector3): void {
    this.position.copy(spawn);
    this.mesh.position.copy(this.position);
    this.state = 'patrol';
    this.path = [];
    this.pathIndex = 0;
    this.repathTimer = 0;
    this.memoryTimer = 0;
    this.stunTimer = 0;
    this.growlCooldown = 0;
    this.patrolIndex = 0;
    this.aggression = 1;
    this.animPhase = 0;
    this.mesh.rotation.set(0, 0, 0);
    this.torso.rotation.set(0.2, 0, 0);
    this.headPivot.rotation.set(0, 0, 0);
    this.leftArmPivot.rotation.set(0, 0, -0.1);
    this.rightArmPivot.rotation.set(0, 0, 0.1);
    this.leftLegPivot.rotation.set(0, 0, 0);
    this.rightLegPivot.rotation.set(0, 0, 0);
    if (this.patrolPoints.length === 0) this.buildPatrolPoints();
  }
}
