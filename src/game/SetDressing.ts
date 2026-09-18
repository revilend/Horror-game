import * as THREE from 'three';
import { createInstrumentTray, createPillBottles } from './PuzzleProps';

/**
 * Industrial set dressing for the halls of St. Jude.
 *
 * The walls, floors and room furniture live in World.ts. Everything that hangs
 * off a corridor ceiling or lies spilled across a corridor floor lives here,
 * which keeps World.ts from growing past the size a single file can sanely be.
 *
 * Everything in this module is deliberately walk-through: ducts and pipes hang
 * at 3m, and the floor clutter is only a few centimetres high, so a corridor can
 * never be pinched shut by scenery on either side of it.
 */

/** Must match World.WALL_H - the ceiling these props hang from. */
const CEILING = 3.5;
/** Must match World.CELL - the length of a corridor segment. */
const CELL = 4;

function rnd(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function shadowAll(group: THREE.Group): void {
  group.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) (child as THREE.Mesh).castShadow = true;
  });
}

/** True when the corridor runs east-west, i.e. it has openings left and right. */
function runsEastWest(sides: Array<[number, number]>): boolean {
  return sides.some(([dr]) => dr === 0);
}

/**
 * Decorative drop of a corridor light/duct run: -1 or 1, so consecutive cells
 * keep the run on the same side of the corridor instead of zig-zagging.
 */
function sideFor(x: number, z: number): 1 | -1 {
  const hash = Math.abs(Math.floor(x) * 73856093) ^ Math.abs(Math.floor(z) * 19349663);
  return hash % 2 === 0 ? 1 : -1;
}

/**
 * A ribbed galvanised ventilation duct bolted along one ceiling edge of a
 * corridor. Segments are CELL long so neighbouring cells read as one long run.
 */
export function addCeilingDuct(
  group: THREE.Group,
  ductMat: THREE.Material,
  rustMat: THREE.Material,
  x: number,
  z: number,
  sides: Array<[number, number]>
): void {
  const eastWest = runsEastWest(sides);
  const off = sideFor(x, z) * 1.55;
  const y = CEILING - 0.28;

  // Main run
  const body = new THREE.Mesh(new THREE.BoxGeometry(CELL, 0.46, 0.5), ductMat);
  if (!eastWest) body.rotation.y = Math.PI / 2;
  body.position.set(eastWest ? x : x + off, y, eastWest ? z + off : z);
  group.add(body);

  // Two ribbed collars per segment
  for (const shift of [-1.1, 1.1]) {
    const collar = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.54, 0.58), rustMat);
    collar.position.copy(body.position);
    collar.rotation.y = body.rotation.y;
    if (eastWest) collar.position.x += shift;
    else collar.position.z += shift;
    group.add(collar);
  }

  // Grubby inspection hatch facing down into the corridor
  const hatch = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.03, 0.34), rustMat);
  hatch.position.set(body.position.x, y - 0.24, body.position.z);
  hatch.rotation.y = body.rotation.y;
  group.add(hatch);
}

/**
 * A pair of steam pipes running along the other ceiling edge, clamped by
 * brackets with the occasional valve wheel sticking out of the run.
 */
export function addSteamPipeRun(
  group: THREE.Group,
  metalMat: THREE.Material,
  rustMat: THREE.Material,
  x: number,
  z: number,
  sides: Array<[number, number]>
): void {
  const eastWest = runsEastWest(sides);
  const off = -sideFor(x, z) * 1.6;
  const baseY = CEILING - 0.22;
  const cx = eastWest ? x : x + off;
  const cz = eastWest ? z + off : z;

  for (let i = 0; i < 2; i++) {
    const pipe = new THREE.Mesh(
      new THREE.CylinderGeometry(i === 0 ? 0.075 : 0.05, i === 0 ? 0.075 : 0.05, CELL, 8),
      i === 0 ? rustMat : metalMat
    );
    if (eastWest) pipe.rotation.z = Math.PI / 2;
    else pipe.rotation.x = Math.PI / 2;
    pipe.position.set(cx, baseY - i * 0.15, cz);
    group.add(pipe);
  }

  // Hanger bracket holding both pipes to the slab
  const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.4, 0.34), metalMat);
  if (!eastWest) bracket.rotation.y = Math.PI / 2;
  bracket.position.set(cx, baseY - 0.07, cz);
  group.add(bracket);

  // Every few segments, a valve wheel
  if (Math.random() < 0.4) {
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.02, 6, 10), rustMat);
    wheel.rotation.y = eastWest ? Math.PI / 2 : 0;
    wheel.position.set(cx + (eastWest ? 0 : 0.16), baseY - 0.05, cz + (eastWest ? 0.16 : 0));
    group.add(wheel);
  }
}

/**
 * A severed electrical cable dangling out of the ceiling, its end frayed into
 * bare copper strands. Reads immediately as "the maintenance never happened".
 */
export function addSeveredCable(group: THREE.Group, metalMat: THREE.Material, x: number, z: number): void {
  const cableX = x + rnd(-1.3, 1.3);
  const cableZ = z + rnd(-1.3, 1.3);
  // Kept short enough that the frayed end stays above eye level, so the cable
  // is scenery you walk under rather than something you clip through.
  const drop = rnd(0.5, 1.1);
  const endY = CEILING - 0.1 - drop;

  const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, drop + 0.3, 5), metalMat);
  cable.position.set(cableX, CEILING - 0.1 - drop / 2, cableZ);
  cable.rotation.z = rnd(-0.22, 0.22);
  cable.rotation.x = rnd(-0.18, 0.18);
  group.add(cable);

  // Frayed copper strands splaying out of the cut end
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2 + rnd(-0.4, 0.4);
    const strand = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.004, rnd(0.1, 0.22), 4), metalMat);
    strand.position.set(
      cableX + Math.cos(angle) * 0.03,
      endY - rnd(0.05, 0.1),
      cableZ + Math.sin(angle) * 0.03
    );
    strand.rotation.z = Math.cos(angle) * rnd(0.5, 1.1);
    strand.rotation.x = Math.sin(angle) * rnd(0.5, 1.1);
    group.add(strand);
  }
}

/**
 * Patient charts and loose paperwork spilled across the corridor floor, with a
 * clipboard that someone dropped on the way out.
 */
export function addPatientChart(group: THREE.Group, chartMat: THREE.Material, x: number, z: number): void {
  const pages = 2 + Math.floor(Math.random() * 2);
  for (let i = 0; i < pages; i++) {
    const page = new THREE.Mesh(new THREE.PlaneGeometry(rnd(0.24, 0.36), rnd(0.32, 0.45)), chartMat);
    page.rotation.x = -Math.PI / 2;
    page.rotation.z = rnd(0, Math.PI * 2);
    page.position.set(x + rnd(-1.5, 1.5), 0.012 + i * 0.004, z + rnd(-1.5, 1.5));
    group.add(page);
  }

  // Clipboard, face down
  const board = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.02, 0.4), chartMat);
  board.rotation.y = rnd(0, Math.PI * 2);
  board.position.set(x + rnd(-1.4, 1.4), 0.02, z + rnd(-1.4, 1.4));
  group.add(board);
}

/**
 * A wet pool of blood: a glossy disc the flashlight reflects off, ringed by
 * smaller splashes and a couple of run-off streaks.
 */
export function addBloodPuddle(group: THREE.Group, puddleMat: THREE.Material, x: number, z: number): void {
  const radius = rnd(0.35, 1.0);
  const px = x + rnd(-1.1, 1.1);
  const pz = z + rnd(-1.1, 1.1);

  const pool = new THREE.Mesh(new THREE.CircleGeometry(radius, 18), puddleMat);
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(px, 0.012, pz);
  group.add(pool);

  // Splashes thrown out around the main pool
  for (let i = 0; i < 4; i++) {
    const angle = rnd(0, Math.PI * 2);
    const dist = radius + rnd(0.1, 0.7);
    const splash = new THREE.Mesh(new THREE.CircleGeometry(rnd(0.05, 0.16), 10), puddleMat);
    splash.rotation.x = -Math.PI / 2;
    splash.position.set(px + Math.cos(angle) * dist, 0.013, pz + Math.sin(angle) * dist);
    group.add(splash);
  }
}

/** A stainless instrument tray on its side with the tools spilled out of it. */
export function addTippedInstrumentTray(
  group: THREE.Group,
  metalMat: THREE.Material,
  glassMat: THREE.Material,
  x: number,
  z: number
): void {
  const tray = createInstrumentTray(metalMat, glassMat);
  tray.position.set(x + rnd(-1.3, 1.3), 0, z + rnd(-1.3, 1.3));
  tray.rotation.y = rnd(0, Math.PI * 2);
  group.add(tray);
  shadowAll(tray);
}

/** Medicine bottles scattered out of a dropped trolley. */
export function addPillBottleCluster(
  group: THREE.Group,
  bottleMat: THREE.Material,
  metalMat: THREE.Material,
  x: number,
  z: number
): void {
  const bottles = createPillBottles(bottleMat, metalMat);
  bottles.position.set(x + rnd(-1.3, 1.3), 0, z + rnd(-1.3, 1.3));
  bottles.rotation.y = rnd(0, Math.PI * 2);
  group.add(bottles);
  shadowAll(bottles);
}
