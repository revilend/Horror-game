import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/* -------------------------------------------------------------------------
 * Fixtures the player can actually work: swinging doors, desks with a drawer
 * that slides out, and wardrobes to hide inside.
 *
 * None of these live in World's merged prop mesh. Merging bakes a group into
 * one static draw call, and every fixture here moves - a door swings, a drawer
 * slides, a locker opens. Each fixture also carries its own collision box, so
 * the game never has to re-derive physics state from the scene graph.
 * ---------------------------------------------------------------------- */

export interface DoorFixture {
  /** Grid cell of the doorway. */
  row: number;
  col: number;
  /** The passage runs north-south, so the leaf spans the x axis. */
  vertical: boolean;
  /** Pivot at the hinge; rotating it swings the leaf. */
  hinge: THREE.Group;
  leaf: THREE.Mesh;
  /** Hinge yaw with the door shut. The swing is applied on top of it. */
  baseYaw: number;
  /** 0 = shut, 1 = wide open. */
  open: number;
  target: number;
  /**
   * Set the first time the leaf is moved by anyone. Doors block the player but
   * not the creature, so this is what keeps the Guilt Entity from announcing
   * the same doorway on every patrol lap.
   */
  swung: boolean;
  /** Live only while the door is shut. */
  box: THREE.Box3;
  centre: THREE.Vector3;
}

/**
 * A loose key waiting to be put away, and a desk that could take it.
 *
 * Kept as plain data so the decision can be tested without a scene graph: the
 * level scatters its three ward keys fresh every run, and a key that no drawer
 * can hold has to stay on the floor rather than be swallowed by one.
 */
export interface KeyPlacement {
  x: number;
  z: number;
}

/**
 * Matches each loose key to the drawer that will hold it, first come first
 * served, or to null when no desk is within `reach` - or when the nearest one
 * already has a key. Two keys in one drawer would hand the player a single
 * pickup for two of the three they need to leave, so the second key stays
 * where it fell instead.
 */
export function matchKeysToDesks(
  keys: KeyPlacement[],
  desks: KeyPlacement[],
  reach = 3.2,
): Array<{ key: number; desk: number | null }> {
  const settled = new Set<number>();
  return keys.map((key, index) => {
    let best: number | null = null;
    let bestDistance = reach;
    for (let desk = 0; desk < desks.length; desk++) {
      if (settled.has(desk)) continue;
      const distance = Math.hypot(desks[desk].x - key.x, desks[desk].z - key.z);
      if (distance >= bestDistance) continue;
      bestDistance = distance;
      best = desk;
    }
    if (best !== null) settled.add(best);
    return { key: index, desk: best };
  });
}

export interface DrawerFixture {
  row: number;
  col: number;
  /** Whole desk, for the action prompt position. */
  group: THREE.Group;
  drawer: THREE.Group;
  /** 0 = shut, 1 = fully slid out. */
  slide: number;
  target: number;
  opened: boolean;
  /** World direction the drawer travels, already normalised. */
  travel: THREE.Vector3;
  centre: THREE.Vector3;
  /** Loot still sitting in the drawer, if any. */
  loot: THREE.Object3D | null;
  lootKind: DrawerLoot | null;
  /**
   * Index into the level's key list, for the three desks that hold a ward key.
   * The corner map marks keys by that index, so taking one has to retire it.
   */
  lootIndex: number;
}

export type DrawerLoot = 'key' | 'battery' | 'bottle';

export interface LockerFixture {
  row: number;
  col: number;
  group: THREE.Group;
  door: THREE.Group;
  /** 0 = shut, 1 = wide open. */
  open: number;
  target: number;
  opened: boolean;
  /** Where the camera sits while the player is inside. */
  inside: THREE.Vector3;
  /** Yaw to face out of the door. */
  yaw: number;
  /** Spot to put the player back on when they step out. */
  outside: THREE.Vector3;
  centre: THREE.Vector3;
}

/**
 * A door that has been locked from the outside.
 *
 * The leaf is an ordinary ward door - what makes it special is the lock across
 * it, which is why the chain is a separate mesh rather than another kind of
 * door. Cut the lock and the leaf behaves exactly like every other one.
 */
export interface DoorChain {
  row: number;
  col: number;
  /** The leaf the chain is holding shut. */
  door: DoorFixture;
  /** `padlock` gives way to acid, `chain` to the bolt cutters. */
  lock: 'padlock' | 'chain';
  /** The lock itself, hidden the moment it is beaten. */
  mesh: THREE.Object3D;
  centre: THREE.Vector3;
  /** True once the acid or the cutters have dealt with it. */
  beaten: boolean;
}

/** Total travel of a drawer, in metres. */
export const DRAWER_TRAVEL = 0.4;

/* ---------------------------------------------------------------- chains */

/**
 * A chain run, a hasp and a lock, laid across the doorway of a shut leaf.
 *
 * Drawn in the door's own opening plane so it reads as holding the leaf shut:
 * the plate is bolted to the frame and the padlock hangs off it.
 */
export function createDoorChain(
  metal: THREE.Material,
  rust: THREE.Material,
  vertical: boolean,
  lock: 'padlock' | 'chain',
): THREE.Object3D {
  const group = new THREE.Group();
  const width = 1.5;

  // The hasp plate, bolted across the opening above the handle.
  const plate = new THREE.Mesh(new THREE.BoxGeometry(width, 0.16, 0.06), rust);
  plate.position.set(0, 1.24, 0.06);
  group.add(plate);

  for (const sign of [-1, 1]) {
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.05, 7), metal);
    bolt.rotation.x = Math.PI / 2;
    bolt.position.set(sign * (width / 2 - 0.12), 1.24, 0.1);
    group.add(bolt);
  }

  if (lock === 'chain') {
    // A heavy chain: links running across the whole opening.
    const linkGeo = new THREE.TorusGeometry(0.055, 0.016, 6, 10);
    for (let i = 0; i < 14; i++) {
      const link = new THREE.Mesh(linkGeo, rust);
      link.position.set(-width / 2 + 0.08 + i * 0.105, 1.24 + Math.sin(i * 0.9) * 0.03, 0.1);
      link.rotation.y = i % 2 === 0 ? 0 : Math.PI / 2;
      link.rotation.x = Math.PI / 2;
      group.add(link);
    }
    const lockBody = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.22, 0.08), metal);
    lockBody.position.set(0.1, 1.44, 0.14);
    group.add(lockBody);
    const shackle = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.018, 6, 10, Math.PI), metal);
    shackle.position.set(0.1, 1.56, 0.14);
    group.add(shackle);
  } else {
    // A padlock on a short run of chain and a rusty hasp ring.
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.02, 6, 12), rust);
    ring.position.set(0.32, 1.14, 0.07);
    group.add(ring);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.24, 0.09), rust);
    body.position.set(0.32, 1.0, 0.1);
    group.add(body);
    const shackle = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.02, 6, 10, Math.PI), rust);
    shackle.position.set(0.32, 1.12, 0.1);
    group.add(shackle);
    const keyway = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.03, 8), metal);
    keyway.rotation.x = Math.PI / 2;
    keyway.position.set(0.32, 1.0, 0.15);
    group.add(keyway);
  }

  // An east-west passage holds the chain up the other way.
  if (!vertical) group.rotation.y = Math.PI / 2;
  return group;
}

/* ------------------------------------------------------------------ doors */

/**
 * A panelled asylum door hung on a hinge at one jamb.
 *
 * The whole leaf is merged into a single mesh so 100-odd of them cost one draw
 * call each instead of six, and the game culls the ones out of sight.
 */
export function createSwingDoor(
  cell: number,
  wood: THREE.Material,
  metal: THREE.Material,
  vertical: boolean,
): DoorFixture {
  const width = cell - 0.34;
  const height = 2.35;
  const thickness = 0.09;

  const parts: THREE.BufferGeometry[] = [];

  const slab = new THREE.BoxGeometry(width, height, thickness);
  slab.translate(width / 2, height / 2 + 0.03, 0);
  parts.push(slab);

  // Two recessed panels, sunk into the face like a real ward door.
  for (const py of [height * 0.34, height * 0.73]) {
    const panel = new THREE.BoxGeometry(width - 0.3, height * 0.26, thickness + 0.02);
    panel.translate(width / 2, py, 0);
    parts.push(panel);
  }

  // Lever handle on the free edge.
  const shaft = new THREE.CylinderGeometry(0.026, 0.026, 0.17, 8);
  shaft.rotateZ(Math.PI / 2);
  shaft.translate(width - 0.15, 1.02, thickness / 2 + 0.05);
  parts.push(shaft);

  const plate = new THREE.CylinderGeometry(0.055, 0.055, 0.02, 10);
  plate.rotateX(Math.PI / 2);
  plate.translate(width - 0.15, 1.02, thickness / 2 + 0.005);
  parts.push(plate);

  const merged = mergeGeometries(parts, false);
  const leaf = new THREE.Mesh(merged ?? slab, wood);
  leaf.castShadow = true;
  leaf.receiveShadow = true;
  leaf.userData.isDoorLeaf = true;

  const hinge = new THREE.Group();
  hinge.add(leaf);

  const half = cell / 2;
  const box = new THREE.Box3(
    new THREE.Vector3(-half, 0, -0.34),
    new THREE.Vector3(half, height, 0.34),
  );

  return {
    row: 0,
    col: 0,
    vertical,
    hinge,
    leaf,
    baseYaw: 0,
    open: 0,
    target: 0,
    swung: false,
    box,
    centre: new THREE.Vector3(),
  };
}

/** Bakes shadow flags through a freshly built prop. */
function shadowAll(group: THREE.Object3D): void {
  group.traverse((child) => {
    if (!(child as THREE.Mesh).isMesh) return;
    child.castShadow = true;
    child.receiveShadow = true;
  });
}

/**
 * Hangs a door on its jamb inside the scene. `baseYaw` is 0 for a leaf that
 * spans x and PI/2 for one that spans z, so the swing is always about the
 * hinge's local y.
 */
export function seatDoor(
  fixture: DoorFixture,
  cx: number,
  cz: number,
  cell: number,
  baseYaw: number,
): void {
  const half = cell / 2;
  const inset = 0.17;

  if (fixture.vertical) {
    // Passage runs north-south: hinge on the west jamb, leaf across x.
    fixture.hinge.position.set(cx - half + inset, 0, cz);
  } else {
    // Passage runs east-west: hinge on the north jamb, leaf across z.
    fixture.hinge.position.set(cx, 0, cz - half + inset);
  }
  fixture.baseYaw = baseYaw;
  fixture.hinge.rotation.y = baseYaw;
  fixture.centre.set(cx, 1.2, cz);

  // The blocking box is always axis aligned, so it is rebuilt in world space
  // around the doorway rather than being derived from the swung leaf.
  fixture.box.min.set(
    fixture.vertical ? cx - half : cx - 0.34,
    0,
    fixture.vertical ? cz - 0.34 : cz - half,
  );
  fixture.box.max.set(
    fixture.vertical ? cx + half : cx + 0.34,
    2.35,
    fixture.vertical ? cz + 0.34 : cz + half,
  );
}

/** Drives the swing. Returns true while the leaf is still travelling. */
export function advanceDoor(fixture: DoorFixture, dt: number): boolean {
  if (fixture.open === fixture.target) return false;
  const speed = 2.6;
  const step = dt * speed;
  if (fixture.open < fixture.target) fixture.open = Math.min(fixture.target, fixture.open + step);
  else fixture.open = Math.max(fixture.target, fixture.open - step);

  // A quarter turn is a full swing: -PI/2 carries the leaf clear of the frame.
  fixture.hinge.rotation.y = fixture.baseYaw - (Math.PI / 2) * easeInOut(fixture.open);
  return fixture.open !== fixture.target;
}

/* ------------------------------------------------------------------ desks */

/**
 * A desk with a working drawer. The drawer is a separate group so it can slide,
 * and the loot is parented to it so it rides out with the drawer and is hidden
 * inside the carcass until then.
 */
export function createSearchDesk(
  wood: THREE.Material,
  metal: THREE.Material,
): { group: THREE.Group; drawer: THREE.Group; centre: THREE.Vector3 } {
  const group = new THREE.Group();

  const top = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.07, 0.74), wood);
  top.position.y = 0.78;
  group.add(top);

  // Carcass the drawer slides out of.
  const carcass = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.42, 0.64), wood);
  carcass.position.set(0, 0.53, -0.02);
  group.add(carcass);

  for (const [lx, lz] of [
    [-0.6, -0.3],
    [0.6, -0.3],
    [-0.6, 0.3],
    [0.6, 0.3],
  ]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.32, 0.07), metal);
    leg.position.set(lx, 0.16, lz);
    group.add(leg);
  }

  // The drawer itself: front panel plus a tray that rides behind it.
  const drawer = new THREE.Group();
  const face = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.3, 0.06), wood);
  face.position.set(0, 0.53, 0.32);
  drawer.add(face);

  const tray = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.06, 0.5), wood);
  tray.position.set(0, 0.48, 0.05);
  drawer.add(tray);

  for (const side of [-1, 1]) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.22, 0.5), wood);
    wall.position.set(side * 0.46, 0.57, 0.05);
    drawer.add(wall);
  }

  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.05, 0.05), metal);
  handle.position.set(0, 0.53, 0.36);
  drawer.add(handle);

  group.add(drawer);
  shadowAll(group);

  return { group, drawer, centre: new THREE.Vector3() };
}

/** Slides the drawer out, or back in. Returns true while it is travelling. */
export function advanceDrawer(fixture: DrawerFixture, dt: number): boolean {
  if (fixture.slide === fixture.target) return false;
  const speed = 1 / 0.35;
  const step = dt * speed;
  if (fixture.slide < fixture.target) {
    fixture.slide = Math.min(fixture.target, fixture.slide + step);
  } else {
    fixture.slide = Math.max(fixture.target, fixture.slide - step);
  }
  fixture.drawer.position.copy(fixture.travel).multiplyScalar(DRAWER_TRAVEL * fixture.slide);
  return fixture.slide !== fixture.target;
}

/* ---------------------------------------------------------------- lockers */

/**
 * A steel ward wardrobe. The door is hinged on one stile and swings out; the
 * interior is left hollow so the camera can sit in it.
 */
export function createHideLocker(
  metal: THREE.Material,
  rust: THREE.Material,
): { group: THREE.Group; door: THREE.Group; inside: THREE.Vector3; outside: THREE.Vector3 } {
  const group = new THREE.Group();

  const W = 0.8;
  const H = 2.05;
  const D = 0.6;
  const wall = 0.06;

  const body = new THREE.Group();

  const back = new THREE.Mesh(new THREE.BoxGeometry(W, H, wall), metal);
  back.position.set(0, H / 2, -D / 2);
  body.add(back);

  for (const side of [-1, 1]) {
    const flank = new THREE.Mesh(new THREE.BoxGeometry(wall, H, D), metal);
    flank.position.set(side * (W / 2 - wall / 2), H / 2, 0);
    body.add(flank);
  }

  for (const py of [wall / 2, H - wall / 2]) {
    const cap = new THREE.Mesh(new THREE.BoxGeometry(W, wall, D), metal);
    cap.position.set(0, py, 0);
    body.add(cap);
  }

  // A shelf, so the inside reads as a wardrobe rather than a box.
  const shelf = new THREE.Mesh(new THREE.BoxGeometry(W - wall * 2, 0.04, D - wall), metal);
  shelf.position.set(0, 1.15, 0.02);
  body.add(shelf);

  const feet = new THREE.Mesh(new THREE.BoxGeometry(W - 0.1, 0.08, D - 0.1), rust);
  feet.position.set(0, 0.04, 0);
  body.add(feet);

  group.add(body);

  // Hinged door: built spanning 0..W in local x with the hinge on the stile.
  const door = new THREE.Group();
  const panel = new THREE.Mesh(new THREE.BoxGeometry(W - wall, H - 0.06, 0.05), metal);
  panel.position.set((W - wall) / 2, H / 2, 0.03);
  door.add(panel);

  // Vent slots, so you can see out while hiding.
  for (let i = 0; i < 3; i++) {
    const slot = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.035, 0.06), rust);
    slot.position.set((W - wall) / 2, H - 0.4 - i * 0.09, 0.03);
    door.add(slot);
  }

  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.22, 0.05), rust);
  handle.position.set(W - wall - 0.1, H / 2, 0.08);
  door.add(handle);

  // A lamp strip over the latch. Only the wardrobes that can actually be
  // climbed into carry one, so the amber bar in the torch beam is the answer
  // to "is this a hiding place?" - the supply cabinets around it have none.
  const badge = new THREE.Mesh(
    new THREE.BoxGeometry(0.26, 0.06, 0.02),
    new THREE.MeshStandardMaterial({
      color: 0x2b2415,
      emissive: 0xffb146,
      emissiveIntensity: 0.8,
      roughness: 0.5,
      metalness: 0.2,
    }),
  );
  badge.position.set(W - wall - 0.1, H / 2 + 0.24, 0.06);
  door.add(badge);

  door.position.set(-W / 2 + wall / 2, 0, D / 2 - 0.02);
  group.add(door);
  shadowAll(group);

  return {
    group,
    door,
    inside: new THREE.Vector3(0, 0, -0.02),
    outside: new THREE.Vector3(0, 0, D / 2 + 1.1),
  };
}

/** Swings the locker door. Returns true while it is travelling. */
export function advanceLocker(fixture: LockerFixture, dt: number): boolean {
  if (fixture.open === fixture.target) return false;
  const speed = 3.2;
  const step = dt * speed;
  if (fixture.open < fixture.target) fixture.open = Math.min(fixture.target, fixture.open + step);
  else fixture.open = Math.max(fixture.target, fixture.open - step);

  // Negative yaw so the door swings away from the interior.
  fixture.door.rotation.y = -Math.PI * 0.62 * easeInOut(fixture.open);
  return fixture.open !== fixture.target;
}

/* ------------------------------------------------------------------ misc */

function easeInOut(t: number): number {
  const clamped = Math.max(0, Math.min(1, t));
  return clamped < 0.5
    ? 2 * clamped * clamped
    : 1 - Math.pow(-2 * clamped + 2, 2) / 2;
}
