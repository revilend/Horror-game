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

/**
 * How tall Dr Aris stands, measured off the rig below. The whole model is
 * built so the soles of his shoes sit on y = 0, which is what lets `position`
 * be a plain floor position - the thing the pathfinder, the collider pass and
 * the catch test all reason about.
 */
const DOCTOR_HEIGHT = 2.12;

/** Waist height: the torso group pivots here, so the hunch reads as a hunch. */
const WAIST_Y = 0.95;
/** Hip height: the leg pivots hang off this. */
const LEG_LEN = 0.9;
/** Shoulder joints. */
const SHOULDER_Y = 1.72;
const ARM_LEN = 1.0;
/**
 * How far the right arm reaches forward to carry the saw. A hanging arm would
 * put the 0.9 m blade through the floor; a raised grip lets it hang straight
 * down from the hand with clearance, which is also the pose that reads as a
 * weapon rather than luggage.
 */
const ARM_FORWARD = 1.15;
/** Neck joint. */
const HEAD_Y = 1.88;

function lerpAngle(a: number, b: number, t: number): number {
  const twoPi = Math.PI * 2;
  let diff = (b - a) % twoPi;
  if (diff > Math.PI) diff -= twoPi;
  if (diff < -Math.PI) diff += twoPi;
  return a + diff * t;
}

/**
 * Dr Aris - the deranged surgeon.
 *
 * A tall, gaunt humanoid rig: a hunched torso, a blood-soaked surgeon's coat,
 * gloved arms and one serrated bone saw. Everything hangs off named groups
 * (`torso`, `legsGroup`, `armsGroup`, `headGroup`, `weaponGroup`) so a limb
 * swings from its joint instead of spinning about its own centre.
 *
 * The head mirrors a sharp lamp forwards down the corridor, which is both the
 * character's signature and the reason you can see him coming through a
 * doorway before he sees you.
 *
 * Paths are computed with BFS so it walks around corners instead of grinding
 * into walls, and it can hear a sprinting player through them.
 */
export class Monster {
  /** The root of the rig - the doctor as a whole. */
  mesh: THREE.Group;
  /** Fired when the doctor spots the player - the game plays a growl. */
  onGrowl: (() => void) | null = null;
  /** Fired on each footfall, so the game can click a heel on the tiles. */
  onFootstep: (() => void) | null = null;

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
  /** Which half of the stride the feet are in, for the footfall click. */
  private strideSign = 0;
  private patrolPoints: THREE.Vector3[] = [];
  private patrolIndex = 0;
  /**
   * Furniture the doctor has to walk around. Without these he slides
   * straight through gurneys and lockers while the player is blocked by them,
   * which immediately reads as a bug.
   */
  private colliders: Array<{ x: number; z: number; r: number }> = [];

  // Every limb hangs off a pivot placed at its joint. Rotating a limb mesh
  // directly spins it around its own centre, which reads as a twirling stick
  // rather than an arm; pivots are what make the walk cycle look alive.
  private torso: THREE.Group;
  private legsGroup: THREE.Group;
  private armsGroup: THREE.Group;
  private headGroup: THREE.Group;
  private weaponGroup: THREE.Group;
  private leftArmPivot: THREE.Group;
  private rightArmPivot: THREE.Group;
  private leftLegPivot: THREE.Group;
  private rightLegPivot: THREE.Group;
  private eyeLight: THREE.PointLight;
  /** The head-mirror reflector: a real spotlight thrown down the corridor. */
  private mirrorLight: THREE.SpotLight;

  constructor(grid: number[][], spawn: THREE.Vector3) {
    this.grid = grid;
    this.position = spawn.clone();
    // The rig is built with the soles at y = 0, so the doctor stands on the
    // same floor plane the player walks on. Spawn points carry an eye height
    // for other actors, hence the explicit reset.
    this.position.y = 0;
    this.mesh = new THREE.Group();
    this.mesh.name = 'doctorGroup';

    /* ------------------------------------------------------------ material */
    // Inner dark green surgical scrubs, seen through the open coat.
    const scrubMat = new THREE.MeshStandardMaterial({
      color: 0x143d32,
      roughness: 0.92,
      metalness: 0.02,
      emissive: 0x061410,
      emissiveIntensity: 0.5,
    });
    // Off-white canvas that has been through a great deal.
    const coatMat = new THREE.MeshStandardMaterial({
      color: 0xd7cfbe,
      roughness: 0.94,
      metalness: 0,
      side: THREE.DoubleSide,
      emissive: 0x191209,
      emissiveIntensity: 0.42,
    });
    // Fresh blood and the dark dried stuff it dries into.
    const bloodMat = new THREE.MeshStandardMaterial({
      color: 0x991b1b,
      roughness: 0.5,
      metalness: 0.05,
      emissive: 0x2b0705,
      emissiveIntensity: 0.5,
    });
    const dryBloodMat = new THREE.MeshStandardMaterial({
      color: 0x3b0d0b,
      roughness: 0.96,
      metalness: 0,
      emissive: 0x150303,
      emissiveIntensity: 0.4,
    });
    // Pallid, waxy flesh. Emissive enough to hold an outline in a dark ward.
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xc9bdac,
      roughness: 0.74,
      metalness: 0.02,
      emissive: 0x33231a,
      emissiveIntensity: 1.3,
    });
    const trouserMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.95 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4, metalness: 0.22 });
    const gloveMat = new THREE.MeshStandardMaterial({ color: 0x14181c, roughness: 0.45, metalness: 0.08 });
    const maskMat = new THREE.MeshStandardMaterial({
      color: 0x86efac,
      roughness: 0.88,
      emissive: 0x14301c,
      emissiveIntensity: 0.55,
    });
    const capMat = new THREE.MeshStandardMaterial({
      color: 0x14532d,
      roughness: 0.9,
      emissive: 0x061a0f,
      emissiveIntensity: 0.6,
    });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x9ca3af, roughness: 1 });
    const socketMat = new THREE.MeshStandardMaterial({ color: 0x120a09, roughness: 1 });
    // Crazed pupils: unlit, so they burn at any distance.
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x9aa2a8, roughness: 0.3, metalness: 0.85 });
    const rustSteelMat = new THREE.MeshStandardMaterial({
      color: 0x6d6f70,
      roughness: 0.74,
      metalness: 0.58,
    });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.12, metalness: 0.9 });

    /* ---------------------------------------------------------------- legs */
    this.legsGroup = new THREE.Group();
    this.legsGroup.name = 'legsGroup';
    this.mesh.add(this.legsGroup);

    const buildLeg = (side: -1 | 1): THREE.Group => {
      const pivot = new THREE.Group();
      pivot.position.set(side * 0.2, LEG_LEN, 0);

      // Dark trouser leg, tapering to the ankle.
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.115, 0.1, LEG_LEN, 8), trouserMat);
      leg.position.y = -LEG_LEN / 2;
      leg.castShadow = true;
      pivot.add(leg);

      // Heavy black leather dress shoe.
      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.11, 0.36), shoeMat);
      shoe.position.set(0, -LEG_LEN + 0.05, -0.07);
      shoe.castShadow = true;
      pivot.add(shoe);
      const toecap = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.07, 0.09), shoeMat);
      toecap.position.set(0, -LEG_LEN + 0.035, -0.24);
      pivot.add(toecap);

      this.legsGroup.add(pivot);
      return pivot;
    };

    this.leftLegPivot = buildLeg(-1);
    this.rightLegPivot = buildLeg(1);

    /* --------------------------------------------------------------- torso */
    this.torso = new THREE.Group();
    this.torso.name = 'torso';
    this.torso.position.y = WAIST_Y;
    // Hunched forward, with the shoulders tilted off square by the animation.
    this.torso.rotation.x = 0.18;
    this.mesh.add(this.torso);

    // The scrub shirt: the body under the coat, and what shows at the opening.
    const scrubs = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 1.0, 10), scrubMat);
    scrubs.position.y = 0.44;
    scrubs.castShadow = true;
    this.torso.add(scrubs);

    // The coat. A full cylinder wound all the way round, with a wedge left
    // open down the front (theta is measured from +z, so the gap is centred
    // on PI - the model's front). Cuff-to-hem it reads as a real coat, which
    // a flat panel never does.
    const GAP = Math.PI * 0.3;
    const coat = new THREE.Mesh(
      new THREE.CylinderGeometry(0.42, 0.65, 1.4, 12, 1, true, Math.PI + GAP / 2, Math.PI * 2 - GAP),
      coatMat,
    );
    coat.position.y = 0.25;
    coat.castShadow = true;
    this.torso.add(coat);

    const shoulders = new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 10), coatMat);
    shoulders.position.y = 0.83;
    shoulders.scale.set(1.34, 0.62, 0.72);
    shoulders.castShadow = true;
    this.torso.add(shoulders);

    // Old blood across the coat, front and back. Fixed spots, so the doctor
    // looks the same on every run.
    const spatter: Array<[number, number, number, number]> = [
      [-0.24, 0.34, 0.36, 0.075],
      [0.19, 0.1, 0.38, 0.055],
      [-0.05, -0.12, 0.4, 0.09],
      [0.3, -0.2, 0.3, 0.05],
      [-0.33, -0.28, 0.24, 0.065],
      [0.22, 0.48, 0.32, 0.045],
      [-0.2, 0.52, -0.3, 0.06],
      [0.16, -0.05, -0.38, 0.08],
    ];
    spatter.forEach(([sx, sy, sz, r], i) => {
      const mark = new THREE.Mesh(new THREE.SphereGeometry(r, 7, 6), i % 3 === 0 ? dryBloodMat : bloodMat);
      mark.position.set(sx, sy, sz);
      mark.scale.z = 0.3;
      this.torso.add(mark);
    });

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.11, 0.18, 8), skinMat);
    neck.position.y = 0.94;
    this.torso.add(neck);

    /* ---------------------------------------------------------------- arms */
    this.armsGroup = new THREE.Group();
    this.armsGroup.name = 'armsGroup';
    this.mesh.add(this.armsGroup);

    const buildArm = (side: -1 | 1): THREE.Group => {
      const pivot = new THREE.Group();
      pivot.position.set(side * 0.46, SHOULDER_Y, 0);
      pivot.rotation.z = side * 0.08;

      const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, ARM_LEN, 8), coatMat);
      upper.position.y = -ARM_LEN / 2;
      upper.castShadow = true;
      pivot.add(upper);

      const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.085, 8, 7), coatMat);
      elbow.position.y = -ARM_LEN * 0.55;
      pivot.add(elbow);

      // Black rubber surgical glove over the forearm and hand.
      const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.065, ARM_LEN * 0.55, 8), gloveMat);
      forearm.position.y = -ARM_LEN * 0.8;
      pivot.add(forearm);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 7), gloveMat);
      hand.position.y = -ARM_LEN * 1.06;
      hand.scale.set(1, 1.15, 0.8);
      pivot.add(hand);

      this.armsGroup.add(pivot);
      return pivot;
    };

    this.leftArmPivot = buildArm(-1);
    this.rightArmPivot = buildArm(1);
    // The saw arm is brought up into the strike, and comes down at the joints.
    this.rightArmPivot.rotation.x = ARM_FORWARD;

    /* ------------------------------------------------------- weapon: saw */
    // The serrated bone saw, held in an aggressive downward grip. It hangs off
    // the right arm's pivot so it swings with the walk, and off its own group
    // (`weaponGroup`) so its drag can be animated apart from the arm.
    this.weaponGroup = new THREE.Group();
    this.weaponGroup.name = 'weaponGroup';
    // In the hand at the end of that forward reach...
    this.weaponGroup.position.set(0.02, -ARM_LEN * 1.02, 0.02);
    // ...counter-rotated, so the blade hangs dead vertical from the grip.
    this.weaponGroup.rotation.x = -ARM_FORWARD;

    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.22, 0.06), rustSteelMat);
    this.weaponGroup.add(grip);
    const ferrule = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.06, 8), steelMat);
    ferrule.position.y = -0.13;
    this.weaponGroup.add(ferrule);

    // Blade: 0.9 m of rusted steel, pointing straight down.
    const BLADE = 0.9;
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.085, BLADE, 0.018), rustSteelMat);
    blade.position.y = -BLADE / 2 - 0.11;
    blade.castShadow = true;
    this.weaponGroup.add(blade);
    const spine = new THREE.Mesh(new THREE.BoxGeometry(0.03, BLADE * 0.94, 0.03), steelMat);
    spine.position.set(0.05, -BLADE / 2 - 0.11, 0);
    this.weaponGroup.add(spine);

    // Serrated cutting edge: a row of jagged teeth down the left side.
    const toothGeo = new THREE.ConeGeometry(0.016, 0.05, 4);
    for (let i = 0; i < 16; i++) {
      const tooth = new THREE.Mesh(toothGeo, steelMat);
      tooth.position.set(-0.055, -0.17 - i * 0.052, 0);
      tooth.rotation.z = Math.PI / 2;
      this.weaponGroup.add(tooth);
    }

    // Fresh blood pooling at the tip and running off it.
    const bladeTip = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 7), bloodMat);
    bladeTip.position.y = -BLADE - 0.13;
    bladeTip.scale.set(1, 1.7, 1);
    this.weaponGroup.add(bladeTip);
    for (let i = 0; i < 2; i++) {
      const drip = new THREE.Mesh(new THREE.SphereGeometry(0.013, 6, 6), bloodMat);
      drip.position.set(0.02, -BLADE - 0.19 - i * 0.05, 0.012);
      this.weaponGroup.add(drip);
    }

    this.rightArmPivot.add(this.weaponGroup);

    /* ---------------------------------------------------------------- head */
    this.headGroup = new THREE.Group();
    this.headGroup.name = 'headGroup';
    this.headGroup.position.set(0, HEAD_Y, -0.05);
    this.mesh.add(this.headGroup);

    // Gaunt, slightly oval skull.
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 12), skinMat);
    head.position.y = 0.2;
    head.scale.set(0.92, 1.18, 1.0);
    head.castShadow = true;
    this.headGroup.add(head);

    // Sunken sockets with crazed, glowing pupils deep inside them.
    for (const sx of [-0.09, 0.09]) {
      const socket = new THREE.Mesh(new THREE.SphereGeometry(0.078, 8, 8), socketMat);
      socket.position.set(sx, 0.25, -0.15);
      socket.scale.set(1, 1, 0.7);
      this.headGroup.add(socket);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), pupilMat);
      pupil.position.set(sx, 0.25, -0.185);
      this.headGroup.add(pupil);
    }

    // Brow, so the face is not a plain egg.
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.05, 0.09), skinMat);
    brow.position.set(0, 0.35, -0.17);
    brow.rotation.x = -0.2;
    this.headGroup.add(brow);

    // Decayed surgical mask over the nose and mouth, soaked through.
    const mask = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.2, 0.15), maskMat);
    mask.position.set(0, 0.1, -0.14);
    mask.rotation.x = 0.14;
    this.headGroup.add(mask);
    const maskStains: Array<[number, number, number, number]> = [
      [-0.07, 0.08, 0.02, 0.075],
      [0.06, 0.15, 0.015, 0.06],
      [0.01, 0.05, 0.075, 0.05],
      [0.09, 0.09, 0.03, 0.035],
    ];
    for (const [mx, my, mr, mh] of maskStains) {
      const stain = new THREE.Mesh(new THREE.SphereGeometry(mr, 6, 6), bloodMat);
      stain.position.set(mx, my, -0.215);
      stain.scale.set(1, mh / mr, 0.3);
      this.headGroup.add(stain);
    }
    // The mask straps, knotted at the back of the skull.
    const strap = new THREE.Mesh(new THREE.TorusGeometry(0.205, 0.013, 5, 16), maskMat);
    strap.position.set(0, 0.13, 0);
    strap.rotation.y = Math.PI / 2;
    strap.rotation.z = 0.24;
    this.headGroup.add(strap);

    // Deep green scrub cap, low over the brow.
    const cap = new THREE.Mesh(
      new THREE.SphereGeometry(0.232, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.58),
      capMat,
    );
    cap.position.y = 0.24;
    cap.castShadow = true;
    this.headGroup.add(cap);
    // Messy grey hair escaping under the cap.
    for (let i = 0; i < 8; i++) {
      const a = -1.15 + i * 0.33;
      const strand = new THREE.Mesh(
        new THREE.BoxGeometry(0.018, 0.1 + (i % 3) * 0.035, 0.018),
        hairMat,
      );
      strand.position.set(Math.sin(a) * 0.2, 0.13, Math.cos(a) * 0.19 + 0.03);
      strand.rotation.z = a * 0.45;
      strand.rotation.x = Math.cos(a) * 0.4;
      this.headGroup.add(strand);
    }

    // Optical head mirror: a chrome reflector on a band, worn on the forehead.
    const mirrorBand = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.018, 6, 16), coatMat);
    mirrorBand.position.y = 0.29;
    mirrorBand.rotation.x = Math.PI / 2;
    this.headGroup.add(mirrorBand);
    const mirror = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.028, 14), chromeMat);
    mirror.position.set(0, 0.3, -0.19);
    mirror.rotation.x = Math.PI / 2;
    this.headGroup.add(mirror);
    const mirrorGlow = new THREE.Mesh(
      new THREE.CircleGeometry(0.05, 12),
      new THREE.MeshBasicMaterial({ color: 0xfff3c4 }),
    );
    mirrorGlow.position.set(0, 0.3, -0.205);
    mirrorGlow.rotation.y = Math.PI;
    this.headGroup.add(mirrorGlow);

    // The reflector lamp itself: a sharp forward beam. Its target is parked
    // inside the head group, so the beam turns exactly with the doctor's head.
    const headLamp = new THREE.SpotLight(0xfef08a, 4.0, 18, Math.PI / 4, 0.4);
    headLamp.position.set(0, 0.3, -0.2);
    headLamp.castShadow = false;
    const lampTarget = new THREE.Object3D();
    lampTarget.position.set(0, -0.05, -6);
    this.headGroup.add(lampTarget);
    headLamp.target = lampTarget;
    this.headGroup.add(headLamp);
    this.mirrorLight = headLamp;

    // A dull red ember behind the eyes, so the sockets read at a distance.
    this.eyeLight = new THREE.PointLight(0xff2a1a, 2.0, 14);
    this.eyeLight.position.set(0, 0.25, -0.2);
    this.headGroup.add(this.eyeLight);

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
          // y = 0: the doctor's feet are the floor, and the patrol-reached
          // test below measures a walking distance, not an eye-height one.
          candidates.push(new THREE.Vector3(col * CELL, 0, row * CELL));
        }
      }
    }

    if (candidates.length === 0) {
      candidates.push(new THREE.Vector3(8 * CELL, 0, 8 * CELL));
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

  /** Show or hide the doctor (used during cutscene transitions). */
  setVisible(visible: boolean): void {
    this.mesh.visible = visible;
  }

  setColliders(colliders: Array<{ x: number; z: number; r: number }>): void {
    this.colliders = colliders;
  }

  /** Push the doctor out of any furniture he has ended up inside. */
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

  /** Read-only view of where the doctor currently is (used by the minimap). */
  get currentPosition(): THREE.Vector3 {
    return this.position;
  }

  get isChasing(): boolean {
    return this.state === 'chase' && this.stunTimer <= 0;
  }

  get stateName(): MonsterState {
    return this.state;
  }

  /** Height of the rig, for anything that needs to frame him. */
  get height(): number {
    return DOCTOR_HEIGHT;
  }

  /**
   * The hospital waking up wakes him up too.
   * 1 = baseline; higher means faster and more perceptive.
   */
  setAggression(level: number): void {
    this.aggression = Math.max(0.7, Math.min(1.6, level));
  }

  /** Briefly freeze the doctor - used after he lands a hit. */
  stun(seconds: number): void {
    this.stunTimer = Math.max(this.stunTimer, seconds);
    this.state = 'investigate';
    this.memoryTimer = INVESTIGATE_TIME;
    this.lastKnown.copy(this.position);
    this.path = [];
    this.pathIndex = 0;
  }

  /** Make the doctor investigate a specific location (bottle throw distraction). */
  goInvestigateAt(pos: THREE.Vector3): void {
    this.state = 'investigate';
    this.memoryTimer = INVESTIGATE_TIME * 1.5;
    this.lastKnown.copy(pos);
    this.lastKnown.y = 0;
    this.path = [];
    this.pathIndex = 0;
    this.stunTimer = 0;
  }

  /**
   * @param isHidden When true the player is crouched near a hiding spot. The
   *   doctor's line of sight is blocked and hearing is reduced drastically so
   *   the player can breathe while he stalks past.
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
    // When the player is hidden behind a hiding spot, the doctor cannot see
    // them and his hearing is reduced to a tiny radius.
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
      this.lastKnown.y = 0;
      this.memoryTimer = MEMORY_TIME;
    } else if (this.state === 'chase') {
      this.memoryTimer -= dt;
      if (this.memoryTimer <= 0) {
        this.state = 'investigate';
        this.memoryTimer = INVESTIGATE_TIME;
      }
    } else if (canHear) {
      this.lastKnown.copy(playerPos);
      this.lastKnown.y = 0;
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
    this.animPhase += dt * (5 + intensity * 5);
    const bob = Math.sin(this.animPhase) * (0.04 + intensity * 0.1);
    const swing = Math.sin(this.animPhase) * (0.32 + intensity * 0.32);

    this.torso.position.y = WAIST_Y + bob;
    // Counter-sway in the hips keeps the walk from looking metronomic, and the
    // forward lean deepens the closer he gets.
    this.torso.rotation.z = Math.sin(this.animPhase * 0.5) * (0.03 + intensity * 0.05);
    this.torso.rotation.x = 0.18 + intensity * 0.12;

    // Head: nods on the footfall and lolls to one side as he closes in.
    this.headGroup.position.y = HEAD_Y + bob;
    this.headGroup.rotation.z = Math.sin(this.animPhase * 0.35) * (0.05 + intensity * 0.07);
    this.headGroup.rotation.x = Math.abs(Math.sin(this.animPhase * 0.5)) * 0.07 * intensity;

    // Limbs swing from their joints; the legs counter-swing from the hip.
    this.leftArmPivot.rotation.x = swing;
    // The saw arm keeps its raised grip and only works through a short arc,
    // so a 0.9 m blade never scythes down through the tiles.
    this.rightArmPivot.rotation.x = ARM_FORWARD - swing * 0.2;
    this.leftLegPivot.rotation.x = -swing * 0.8;
    this.rightLegPivot.rotation.x = swing * 0.8;

    // The bone saw sways menacingly from the hand.
    this.weaponGroup.rotation.z = Math.sin(this.animPhase * 0.5) * 0.1;

    // A heel click on every half stride, in time with the legs.
    const stride = Math.sign(Math.sin(this.animPhase));
    if (stride !== this.strideSign) {
      this.strideSign = stride;
      this.onFootstep?.();
    }

    // The reflector flickers like a failing bulb - never steady, never off.
    const flicker = Math.random() < 0.06 ? 1.0 : 3.4 + Math.sin(this.animPhase * 2.3) * 0.6;
    this.mirrorLight.intensity = flicker + intensity * 1.2;

    this.eyeLight.intensity = 0.6 + intensity * 1.6 + Math.sin(this.animPhase * 3) * 0.25 * intensity;
  }

  reset(spawn: THREE.Vector3): void {
    this.position.copy(spawn);
    this.position.y = 0;
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
    this.strideSign = 0;
    this.mesh.rotation.set(0, 0, 0);
    this.torso.rotation.set(0.18, 0, 0);
    this.headGroup.rotation.set(0, 0, 0);
    this.leftArmPivot.rotation.set(0, 0, -0.08);
    this.rightArmPivot.rotation.set(ARM_FORWARD, 0, 0.08);
    this.leftLegPivot.rotation.set(0, 0, 0);
    this.rightLegPivot.rotation.set(0, 0, 0);
    this.weaponGroup.rotation.set(-ARM_FORWARD, 0, 0);
    if (this.patrolPoints.length === 0) this.buildPatrolPoints();
  }
}
