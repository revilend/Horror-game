import * as THREE from 'three';

/**
 * Rooftop plant.
 *
 * The raised band at the top of the plan is drawn from the same trident the
 * compound uses, so it came out dressed as the yard: headstones, dead trees,
 * parked cars and a tarmac floor. Standing on it, nothing told you that you
 * were a storey up rather than out by the fence.
 *
 * Everything here answers that in one glance - plant housings and ductwork at
 * waist height, a parapet you can see over, and skylights with the wards'
 * light still leaking out of them. Nothing in this file is walkable and none
 * of it is a collider, so the terrace's plan is untouched and the pickups, the
 * lift landing and the escape gate all still sit where the level builder put
 * them.
 */

/* ---- shared materials, so the whole roof merges into a few draw calls ---- */

let steelMat: THREE.MeshStandardMaterial | null = null;
let darkMetalMat: THREE.MeshStandardMaterial | null = null;
let rustMat: THREE.MeshStandardMaterial | null = null;
let paneMat: THREE.MeshStandardMaterial | null = null;
let waterMat: THREE.MeshStandardMaterial | null = null;

function steel(): THREE.MeshStandardMaterial {
  if (!steelMat) {
    steelMat = new THREE.MeshStandardMaterial({ color: 0x6a7176, roughness: 0.46, metalness: 0.7 });
  }
  return steelMat;
}

function darkMetal(): THREE.MeshStandardMaterial {
  if (!darkMetalMat) {
    darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x2a2e33, roughness: 0.52, metalness: 0.72 });
  }
  return darkMetalMat;
}

function rust(): THREE.MeshStandardMaterial {
  if (!rustMat) {
    rustMat = new THREE.MeshStandardMaterial({ color: 0x54381f, roughness: 0.94, metalness: 0.28 });
  }
  return rustMat;
}

function pane(): THREE.MeshStandardMaterial {
  if (!paneMat) {
    // Grimy wired glass with the floor below still faintly burning behind it.
    paneMat = new THREE.MeshStandardMaterial({
      color: 0x2b3a34,
      emissive: 0x35594a,
      emissiveIntensity: 0.55,
      roughness: 0.35,
      metalness: 0.2,
      transparent: true,
      opacity: 0.86,
    });
  }
  return paneMat;
}

function water(): THREE.MeshStandardMaterial {
  if (!waterMat) {
    waterMat = new THREE.MeshStandardMaterial({
      color: 0x0b1016,
      roughness: 0.06,
      metalness: 0.62,
      transparent: true,
      opacity: 0.6,
    });
  }
  return waterMat;
}

/* ---- tiny placement helpers -------------------------------------------- */

function box(
  group: THREE.Group,
  material: THREE.Material,
  w: number,
  h: number,
  d: number,
  x: number,
  y: number,
  z: number,
  ry = 0,
): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  if (ry) mesh.rotation.y = ry;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
  return mesh;
}

function tube(
  group: THREE.Group,
  material: THREE.Material,
  radius: number,
  height: number,
  x: number,
  y: number,
  z: number,
  segments = 10,
): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, segments), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
  return mesh;
}

function rnd(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

/* ---- the pieces --------------------------------------------------------- */

/** Galvanised plant housing with louvred faces and a drip cowl. */
function ventHousing(group: THREE.Group, x: number, z: number, ry: number): void {
  const w = rnd(1.6, 2.4);
  const d = rnd(1.3, 2.1);
  const h = rnd(1.1, 1.7);
  box(group, steel(), w + 0.2, 0.12, d + 0.2, x, 0.06, z, ry);
  box(group, steel(), w, h, d, x, h / 2 + 0.12, z, ry);

  // Louvres: a stack of thin slats around the sides
  const slats = Math.max(3, Math.floor(h / 0.26));
  for (let i = 0; i < slats; i++) {
    const y = 0.22 + (i * h) / slats;
    box(group, darkMetal(), w * 0.82, 0.07, d + 0.04, x, y, z, ry);
  }

  // Cowl on top, offset so it sheds water to one side
  box(group, darkMetal(), w + 0.34, 0.14, d + 0.34, x, h + 0.24, z, ry);
  box(group, steel(), w * 0.6, 0.3, d * 0.6, x, h + 0.42, z, ry);
}

/** Rectangular duct run laid along whichever way the cell opens. */
function ductRun(group: THREE.Group, x: number, z: number, ry: number): void {
  const length = rnd(3.6, 5.2);
  const w = rnd(0.75, 1.05);
  const base = 0.42;

  // Stub legs
  for (const offset of [-length * 0.34, length * 0.34]) {
    const lx = x + Math.cos(ry) * offset;
    const lz = z - Math.sin(ry) * offset;
    box(group, darkMetal(), 0.14, base, 0.14, lx, base / 2, lz);
  }

  box(group, steel(), length, w, w * 0.86, x, base + w * 0.43, z, ry);
  // A slip joint band and a branch stub, so it reads as a run, not a beam
  const joint = rnd(-length * 0.2, length * 0.2);
  box(group, darkMetal(), 0.16, w * 1.08, w * 0.94, x + Math.cos(ry) * joint, base + w * 0.43, z - Math.sin(ry) * joint, ry);
  box(group, steel(), 0.34, w * 0.7, w * 0.5, x + Math.cos(ry) * (length * 0.5 - 0.3), base + w * 0.9, z - Math.sin(ry) * (length * 0.5 - 0.3), ry);
}

/** Brick-and-steel flue with a rusted extractor hood. */
function chimneyStack(group: THREE.Group, x: number, z: number): void {
  const h = rnd(2.4, 3.6);
  const w = rnd(0.9, 1.25);
  box(group, darkMetal(), w + 0.5, 0.34, w + 0.5, x, 0.17, z);
  box(group, steel(), w, h, w, x, h / 2 + 0.3, z);
  // Weather banding
  for (let i = 1; i < 3; i++) {
    const y = 0.3 + (h * i) / 3;
    box(group, rust(), w + 0.06, 0.06, w + 0.06, x, y, z);
  }
  box(group, rust(), w + 0.34, 0.2, w + 0.34, x, h + 0.42, z);
  box(group, darkMetal(), 0.5, 0.5, 0.5, x, h + 0.76, z);
}

/** Extraction fan: a squat housing with visible blades behind a grille. */
function exhaustFan(group: THREE.Group, x: number, z: number): void {
  const r = rnd(0.55, 0.8);
  box(group, darkMetal(), r * 2.5, 0.3, r * 2.5, x, 0.15, z);
  tube(group, steel(), r, 0.8, x, 0.7, z, 14);
  tube(group, darkMetal(), r * 0.22, 0.9, x, 0.7, z, 8);
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2;
    const blade = box(group, steel(), r * 0.8, 0.06, 0.28, x, 0.85, z);
    blade.rotation.y = angle;
    blade.position.set(x + Math.cos(angle) * r * 0.38, 0.85, z + Math.sin(angle) * r * 0.38);
  }
  tube(group, darkMetal(), r * 1.06, 0.12, x, 1.16, z, 14);
}

/** Wired-glass skylight over a ward: the only warm light on the roof. */
function skylight(group: THREE.Group, x: number, z: number, ry: number): void {
  const w = rnd(0.9, 1.25);
  const d = rnd(1.6, 2.4);
  box(group, darkMetal(), w * 2 + 0.3, 0.42, d + 0.3, x, 0.21, z, ry);
  const glass = box(group, pane(), w, 0.1, d, x, 0.5, z, ry);
  glass.rotation.z = 0.03;
  // Glazing bars
  box(group, darkMetal(), 0.09, 0.14, d, x - w * 0.5, 0.54, z, ry);
  box(group, darkMetal(), 0.09, 0.14, d, x + w * 0.5, 0.54, z, ry);
  box(group, darkMetal(), w * 2, 0.1, 0.09, x, 0.55, z, ry);
}

/** Aerial mast with cross arms and a guy wire. */
function aerialMast(group: THREE.Group, x: number, z: number): void {
  const h = rnd(3.4, 5);
  box(group, darkMetal(), 0.5, 0.3, 0.5, x, 0.15, z);
  tube(group, steel(), 0.07, h, x, h / 2 + 0.3, z, 8);
  for (let i = 0; i < 3; i++) {
    const y = h * (0.45 + i * 0.2) + 0.3;
    box(group, steel(), rnd(0.8, 1.4), 0.05, 0.05, x, y, z);
  }
  const guy = tube(group, darkMetal(), 0.02, 3.2, x + 1.5, 1.7, z + 0.8, 5);
  guy.rotation.z = -0.9;
  guy.rotation.x = 0.4;
}

/** Cable tray on stub posts, crossing the deck. */
function cableTray(group: THREE.Group, x: number, z: number, ry: number): void {
  const length = rnd(4, 6.5);
  const y = 0.34;
  for (const offset of [-length * 0.4, 0, length * 0.4]) {
    box(group, darkMetal(), 0.09, y, 0.09, x + Math.cos(ry) * offset, y / 2, z - Math.sin(ry) * offset);
  }
  box(group, rust(), length, 0.06, 0.44, x, y, z, ry);
  for (let i = 0; i < 4; i++) {
    const offset = -length / 2 + (length * (i + 0.5)) / 4;
    box(group, rust(), 0.09, 0.1, 0.5, x + Math.cos(ry) * offset, y + 0.06, z - Math.sin(ry) * offset, ry);
  }
  const cable = tube(group, darkMetal(), 0.05, length, x + Math.cos(ry) * 0.06, y + 0.11, z - Math.sin(ry) * 0.06, 6);
  cable.rotation.z = Math.PI / 2;
  cable.rotation.y = ry;
}

/** Roof outlet with a dome strainer and a puddle around it. */
function drainOutlet(group: THREE.Group, x: number, z: number): void {
  tube(group, steel(), 0.22, 0.26, x, 0.13, z, 10);
  tube(group, rust(), 0.3, 0.12, x, 0.3, z, 10);
  const puddle = new THREE.Mesh(new THREE.CircleGeometry(rnd(0.9, 1.7), 18), water());
  puddle.rotation.x = -Math.PI / 2;
  puddle.position.set(x + rnd(-0.5, 0.5), 0.012, z + rnd(-0.5, 0.5));
  puddle.receiveShadow = true;
  group.add(puddle);
}

/** Just a slick of standing rain, for the cells that get no machine. */
function puddleOnly(group: THREE.Group, x: number, z: number): void {
  const puddle = new THREE.Mesh(new THREE.CircleGeometry(rnd(0.7, 1.5), 16), water());
  puddle.rotation.x = -Math.PI / 2;
  puddle.position.set(x + rnd(-1, 1), 0.011, z + rnd(-1, 1));
  puddle.receiveShadow = true;
  group.add(puddle);
}

/**
 * Plant one piece of rooftop plant on a cell.
 *
 * Weights are tuned so housings, ducts and stacks dominate - the things an
 * asylum roof is actually covered in - with the odd skylight and mast so the
 * skyline stays broken up.
 */
export function addRoofClutter(
  group: THREE.Group,
  cellX: number,
  cellZ: number,
  openSides: Array<[number, number]>,
): void {
  const roll = Math.random();
  const x = cellX + rnd(-0.9, 0.9);
  const z = cellZ + rnd(-0.9, 0.9);

  if (roll < 0.3) {
    ventHousing(group, x, z, rnd(0, Math.PI));
  } else if (roll < 0.52) {
    const side = openSides[0] ?? [0, 1];
    const alongZ = Math.abs(side[0]) === 1;
    ductRun(group, x, z, alongZ ? Math.PI / 2 : 0);
  } else if (roll < 0.68) {
    chimneyStack(group, x, z);
  } else if (roll < 0.78) {
    exhaustFan(group, x, z);
  } else if (roll < 0.86) {
    const side = openSides[0] ?? [0, 1];
    const alongZ = Math.abs(side[0]) === 1;
    cableTray(group, x, z, alongZ ? Math.PI / 2 : 0);
  } else if (roll < 0.93) {
    skylight(group, x, z, rnd(0, Math.PI));
  } else {
    aerialMast(group, x, z);
  }

  if (Math.random() < 0.34) drainOutlet(group, cellX + rnd(-1.4, 1.4), cellZ + rnd(-1.4, 1.4));
  else if (Math.random() < 0.3) puddleOnly(group, x, z);
}

/* ---- the parapet -------------------------------------------------------- */

export interface ParapetConfig {
  cell: number;
  cols: number;
  roofRows: number;
  /** Terrace height: the wall slabs arrive already lifted onto the podium. */
  roofY: number;
  wallHeight: number;
  /** How tall the parapet ends up, in world units. */
  parapetHeight: number;
}

/**
 * Squash the band's outer wall slabs down into a parapet, in place.
 *
 * Only the slabs standing on the terrace's own edges are touched - the
 * partitions between the roof's rooms keep their full height, so those rooms
 * stay enclosed. A coping stone is returned for each lowered slab so the top
 * of the parapet reads as finished masonry rather than a cut-off box.
 */
export function lowerRoofParapet(
  geometries: THREE.BufferGeometry[],
  config: ParapetConfig,
): THREE.BufferGeometry[] {
  const { cell, cols, roofRows, roofY, wallHeight, parapetHeight } = config;
  const half = cell / 2;
  const northEdge = half;
  const southEdge = (roofRows - 1) * cell + half;
  const westEdge = half;
  const eastEdge = (cols - 2) * cell + half;
  const tolerance = 0.3;
  const squash = parapetHeight / wallHeight;
  const coping: THREE.BufferGeometry[] = [];

  for (const geometry of geometries) {
    geometry.computeBoundingBox();
    const bounds = geometry.boundingBox;
    if (!bounds) continue;

    const onEdge =
      bounds.min.z <= northEdge + tolerance ||
      bounds.max.z >= southEdge - tolerance ||
      bounds.min.x <= westEdge + tolerance ||
      bounds.max.x >= eastEdge - tolerance;
    if (!onEdge) continue;

    const position = geometry.getAttribute('position') as THREE.BufferAttribute;
    for (let i = 0; i < position.count; i++) {
      position.setY(i, roofY + (position.getY(i) - roofY) * squash);
    }
    position.needsUpdate = true;

    const width = bounds.max.x - bounds.min.x;
    const depth = bounds.max.z - bounds.min.z;
    const cap = new THREE.BoxGeometry(width + 0.18, 0.16, depth + 0.18);
    cap.translate(
      (bounds.min.x + bounds.max.x) / 2,
      roofY + parapetHeight + 0.06,
      (bounds.min.z + bounds.max.z) / 2,
    );
    coping.push(cap);
  }

  return coping;
}

/**
 * A guard rail along the terrace's edges, skipping any cell where the plan
 * leaves a way through to the outside. Height is kept under eye level so the
 * compound stays visible over the top of it.
 */
export function addParapetRail(
  group: THREE.Group,
  plan: string[],
  config: ParapetConfig,
): void {
  const { cell, cols, roofRows, parapetHeight } = config;
  const half = cell / 2;
  const top = parapetHeight + rnd(0.62, 0.68);
  const mid = parapetHeight + 0.3;
  const iron = rust();

  const openAt = (row: number, col: number): boolean => {
    const line = plan[row];
    if (!line) return false;
    const char = line[col];
    return char !== undefined && char !== '#';
  };

  const post = (x: number, z: number): void => {
    box(group, iron, 0.1, top - parapetHeight, 0.1, x, (parapetHeight + top) / 2, z);
  };
  const railX = (x: number, z: number, width: number): void => {
    box(group, iron, width, 0.07, 0.07, x, top, z);
    box(group, iron, width, 0.05, 0.05, x, mid, z);
  };
  const railZ = (x: number, z: number, depth: number): void => {
    box(group, iron, 0.07, 0.07, depth, x, top, z);
    box(group, iron, 0.05, 0.05, depth, x, mid, z);
  };

  // North and south edges run along X; east and west edges run along Z.
  for (const row of [1, roofRows - 1]) {
    const z = row === 1 ? northEdgeFor(cell) : southEdgeFor(cell, roofRows);
    let runStart = -1;
    for (let col = 1; col <= cols - 2; col++) {
      const open = openAt(row, col);
      if (open && runStart === -1) runStart = col;
      if ((!open || col === cols - 2) && runStart !== -1) {
        const end = open ? col : col - 1;
        const x1 = runStart * cell - half + 0.1;
        const x2 = end * cell + half - 0.1;
        railX((x1 + x2) / 2, z, x2 - x1);
        for (let c = runStart; c <= end; c++) post(c * cell, z);
        runStart = -1;
      }
    }
  }

  for (const col of [1, cols - 2]) {
    const x = col === 1 ? westEdgeFor(cell) : eastEdgeFor(cell, cols);
    let runStart = -1;
    for (let row = 1; row <= roofRows - 2; row++) {
      const open = openAt(row, col);
      if (open && runStart === -1) runStart = row;
      if ((!open || row === roofRows - 2) && runStart !== -1) {
        const end = open ? row : row - 1;
        const z1 = runStart * cell - half + 0.1;
        const z2 = end * cell + half - 0.1;
        railZ(x, (z1 + z2) / 2, z2 - z1);
        for (let r = runStart; r <= end; r++) post(x, r * cell);
        runStart = -1;
      }
    }
  }
}

function northEdgeFor(cell: number): number {
  return cell / 2;
}

function southEdgeFor(cell: number, roofRows: number): number {
  return (roofRows - 1) * cell + cell / 2;
}

function westEdgeFor(cell: number): number {
  return cell / 2;
}

function eastEdgeFor(cell: number, cols: number): number {
  return (cols - 2) * cell + cell / 2;
}
