import * as THREE from 'three';

/**
 * Meshes for the items you have to find and carry.
 *
 * They live in their own module to keep World.ts (already the biggest file in
 * the project) from growing any further, and because they share nothing with
 * the level building beyond a cell size.
 */

function rnd(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function shadowAll(group: THREE.Group): void {
  group.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) child.castShadow = true;
  });
}

/* ===================== Room-specific furniture =========================== */

/** Hospital bed with mattress — used in patient rooms (D, XONA 201/202, etc.). */
export function createHospitalBed(
  metal: THREE.Material,
  fabric: THREE.Material
): THREE.Group {
  const group = new THREE.Group();
  // Frame
  const frame = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.5, 2.1), metal);
  frame.position.y = 0.25;
  group.add(frame);
  // Mattress
  const mattress = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.12, 2.0), fabric);
  mattress.position.y = 0.56;
  group.add(mattress);
  // Headboard
  const head = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.6, 0.08), metal);
  head.position.set(0, 0.8, -1.05);
  group.add(head);
  // Legs
  for (const [lx, lz] of [[-0.45, -0.95], [0.45, -0.95], [-0.45, 0.95], [0.45, 0.95]]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.5, 6), metal);
    leg.position.set(lx, 0.0, lz);
    group.add(leg);
  }
  shadowAll(group);
  return group;
}

/** Operating table with overhead light. */
export function createOperatingTable(
  metal: THREE.Material,
  fabric: THREE.Material
): THREE.Group {
  const group = new THREE.Group();
  // Table surface (tilted slightly)
  const table = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.1, 2.2), metal);
  table.position.y = 0.9;
  table.rotation.x = rnd(-0.05, 0.05);
  group.add(table);
  // Central pillar
  const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.9, 8), metal);
  pillar.position.y = 0.45;
  group.add(pillar);
  // Overhead light arm
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.8, 6), metal);
  arm.position.set(0.6, 2.8, 0);
  arm.rotation.z = -0.3;
  group.add(arm);
  // Light head
  const light = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.08, 0.3), fabric);
  light.position.set(0.2, 2.6, 0);
  group.add(light);
  shadowAll(group);
  return group;
}

/** Morgue drawer cabinet — tall metal unit with numbered drawers. */
export function createMorgueDrawer(
  metal: THREE.Material,
  rust: THREE.Material
): THREE.Group {
  const group = new THREE.Group();
  const cabinet = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2.0, 2.2), metal);
  cabinet.position.y = 1.0;
  group.add(cabinet);
  // Drawer handles
  for (let i = 0; i < 3; i++) {
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.03), rust);
    handle.position.set(0, 0.4 + i * 0.65, 1.12);
    group.add(handle);
  }
  shadowAll(group);
  return group;
}

/** Kitchen counter with stove. */
export function createKitchenCounter(
  metal: THREE.Material,
  rust: THREE.Material
): THREE.Group {
  const group = new THREE.Group();
  const counter = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.9, 0.7), metal);
  counter.position.y = 0.45;
  group.add(counter);
  // Stove top
  const stove = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.04, 0.5), rust);
  stove.position.set(0.4, 0.92, 0);
  group.add(stove);
  // Burners
  for (const [bx, bz] of [[0.25, -0.1], [0.55, -0.1], [0.25, 0.1], [0.55, 0.1]]) {
    const burner = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.02, 12), rust);
    burner.position.set(bx, 0.94, bz);
    group.add(burner);
  }
  shadowAll(group);
  return group;
}

/** Bookshelf — tall wooden unit for the library. */
export function createBookshelf(wood: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  const shelf = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.2, 0.4), wood);
  shelf.position.y = 1.1;
  group.add(shelf);
  // Shelf dividers (visible lines)
  for (let i = 0; i < 4; i++) {
    const divider = new THREE.Mesh(new THREE.BoxGeometry(1.36, 0.03, 0.38), wood);
    divider.position.set(0, 0.3 + i * 0.5, 0);
    group.add(divider);
  }
  shadowAll(group);
  return group;
}

/** Dental chair — reclined position with armrest. */
export function createDentalChair(
  metal: THREE.Material,
  fabric: THREE.Material
): THREE.Group {
  const group = new THREE.Group();
  // Base
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 0.5, 8), metal);
  base.position.y = 0.25;
  group.add(base);
  // Seat (tilted back)
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.1, 1.6), fabric);
  seat.position.set(0, 0.65, 0.1);
  seat.rotation.x = -0.2;
  group.add(seat);
  // Armrest
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.5), metal);
  arm.position.set(0.35, 0.75, 0.1);
  group.add(arm);
  shadowAll(group);
  return group;
}

/** Isolation bed — strapped to the wall, lower to ground. */
export function createIsolationBed(
  metal: THREE.Material,
  fabric: THREE.Material
): THREE.Group {
  const group = new THREE.Group();
  const frame = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.3, 2.1), metal);
  frame.position.y = 0.15;
  group.add(frame);
  const mattress = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.08, 1.9), fabric);
  mattress.position.y = 0.34;
  group.add(mattress);
  // Restraint straps (visual only)
  for (const z of [-0.5, 0.5]) {
    const strap = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.02, 0.06), metal);
    strap.position.set(0, 0.4, z);
    group.add(strap);
  }
  shadowAll(group);
  return group;
}

/** Electrical therapy chair — reclined with visible electrodes. */
export function createElectroChair(
  metal: THREE.Material,
  fabric: THREE.Material
): THREE.Group {
  const group = new THREE.Group();
  // Seat
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.1, 0.8), fabric);
  seat.position.set(0, 0.7, 0);
  group.add(seat);
  // Back (tilted)
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.0, 0.1), fabric);
  back.position.set(0, 1.2, -0.4);
  back.rotation.x = 0.15;
  group.add(back);
  // Base
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.7, 8), metal);
  base.position.y = 0.35;
  group.add(base);
  // Head electrode
  const electrode = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.15, 8), metal);
  electrode.position.set(0, 1.75, -0.45);
  group.add(electrode);
  shadowAll(group);
  return group;
}

/** Shower stall — simple metal frame with curtain rod. */
export function createShowerStall(
  metal: THREE.Material,
  fabric: THREE.Material
): THREE.Group {
  const group = new THREE.Group();
  // Base tray
  const tray = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.08, 1.0), metal);
  tray.position.y = 0.04;
  group.add(tray);
  // Curtain rod
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.0, 6), metal);
  rod.rotation.z = Math.PI / 2;
  rod.position.set(0, 2.0, -0.5);
  group.add(rod);
  // Torn curtain
  const curtain = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.6), fabric);
  curtain.position.set(0, 1.2, -0.48);
  group.add(curtain);
  shadowAll(group);
  return group;
}

/** Wheelchair (existing but exported). */
export function createWheelchairProp(
  metal: THREE.Material,
  rust: THREE.Material
): THREE.Group {
  const group = new THREE.Group();
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.5), metal);
  seat.position.y = 0.55;
  group.add(seat);
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.7, 0.06), metal);
  back.position.set(0, 0.9, -0.22);
  group.add(back);
  const wheelGeo = new THREE.TorusGeometry(0.28, 0.03, 8, 16);
  for (const wx of [-0.28, 0.28]) {
    const wheel = new THREE.Mesh(wheelGeo, rust);
    wheel.position.set(wx, 0.28, -0.1);
    wheel.rotation.y = Math.PI / 2;
    group.add(wheel);
  }
  shadowAll(group);
  return group;
}

/** IV stand — tall thin pole with hooks. */
export function createIVStand(metal: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 2.0, 6), metal);
  pole.position.y = 1.0;
  group.add(pole);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.04, 8), metal);
  base.position.y = 0.02;
  group.add(base);
  // Hook at top
  const hook = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.015, 6, 8, Math.PI), metal);
  hook.position.set(0, 2.0, 0);
  group.add(hook);
  shadowAll(group);
  return group;
}

/** Monitor (off) — for ICU/operating rooms. */
export function createMonitor(metal: THREE.Material, glass: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  const screen = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 0.06), metal);
  screen.position.y = 1.5;
  group.add(screen);
  const glassPane = new THREE.Mesh(new THREE.PlaneGeometry(0.44, 0.34), glass);
  glassPane.position.set(0, 1.5, 0.035);
  group.add(glassPane);
  const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.5, 6), metal);
  stand.position.y = 0.75;
  group.add(stand);
  shadowAll(group);
  return group;
}

/** Desk with papers — for offices and administrative rooms. */
export function createDesk(wood: THREE.Material, metal: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  const top = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.06, 0.7), wood);
  top.position.y = 0.76;
  group.add(top);
  // Legs
  for (const [lx, lz] of [[-0.55, -0.3], [0.55, -0.3], [-0.55, 0.3], [0.55, 0.3]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.76, 0.06), metal);
    leg.position.set(lx, 0.38, lz);
    group.add(leg);
  }
  // Scattered papers on top
  for (let i = 0; i < 3; i++) {
    const paper = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.28), wood);
    paper.position.set(rnd(-0.3, 0.3), 0.8, rnd(-0.2, 0.2));
    paper.rotation.x = -Math.PI / 2;
    paper.rotation.z = rnd(-0.5, 0.5);
    group.add(paper);
  }
  shadowAll(group);
  return group;
}

/** Sink/counter — for bathrooms and lab rooms. */
export function createSink(metal: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  const basin = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.12, 0.45), metal);
  basin.position.y = 0.85;
  group.add(basin);
  const pedestal = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.85, 0.15), metal);
  pedestal.position.y = 0.425;
  group.add(pedestal);
  // Faucet
  const faucet = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.2, 6), metal);
  faucet.position.set(0, 1.0, -0.15);
  group.add(faucet);
  shadowAll(group);
  return group;
}

/** Litter/bin — small trash container. */
export function createTrashBin(metal: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  const bin = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.45, 10), metal);
  bin.position.y = 0.225;
  group.add(bin);
  shadowAll(group);
  return group;
}

/** Locker — tall metal storage unit (corridor/hiding spot). */
export function createLockerProp(
  metal: THREE.Material,
  rust: THREE.Material
): THREE.Group {
  const group = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.55, 2.0, 0.5), metal);
  body.position.y = 1.0;
  group.add(body);
  // Handle
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.15, 0.03), rust);
  handle.position.set(0.22, 1.2, 0.26);
  group.add(handle);
  shadowAll(group);
  return group;
}

/** Couch/sofa — for staff rooms and waiting areas. */
export function createCouch(fabric: THREE.Material, wood: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  const seat = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.35, 0.7), fabric);
  seat.position.y = 0.35;
  group.add(seat);
  const back = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.5, 0.15), fabric);
  back.position.set(0, 0.75, -0.28);
  group.add(back);
  // Arm rests
  for (const ax of [-0.75, 0.75]) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.4, 0.7), fabric);
    arm.position.set(ax, 0.55, 0);
    group.add(arm);
  }
  shadowAll(group);
  return group;
}

/** Ceramic cartridge fuse - the generator breaker is missing one. */
export function createFuseMesh(
  body: THREE.Material,
  glass: THREE.Material,
  metal: THREE.Material
): THREE.Group {
  const group = new THREE.Group();

  const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.2, 10), glass);
  tube.rotation.z = Math.PI / 2;
  group.add(tube);

  for (const side of [-1, 1]) {
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.07, 10), metal);
    cap.rotation.z = Math.PI / 2;
    cap.position.x = side * 0.11;
    group.add(cap);
  }

  const ceramic = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.1, 0.1), body);
  ceramic.position.y = 0.008;
  group.add(ceramic);

  shadowAll(group);
  return group;
}

/** Bent steel bar, good for prying nailed planks off a doorway. */
export function createCrowbarMesh(material: THREE.Material): THREE.Group {
  const group = new THREE.Group();

  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.78, 8), material);
  shaft.rotation.z = Math.PI / 2;
  group.add(shaft);

  const hook = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.032, 6, 12, Math.PI * 1.2), material);
  hook.position.set(-0.39, 0.02, 0);
  hook.rotation.z = -0.6;
  group.add(hook);

  const chisel = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.035, 0.09), material);
  chisel.position.set(0.44, 0, 0);
  chisel.rotation.z = 0.22;
  group.add(chisel);

  shadowAll(group);
  return group;
}

/** Spare cell for the torch. */
export function createBatteryMesh(body: THREE.Material, metal: THREE.Material): THREE.Group {
  const group = new THREE.Group();

  const can = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.24, 12), body);
  can.rotation.z = Math.PI / 2;
  group.add(can);

  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.079, 0.079, 0.05, 12), metal);
  band.rotation.z = Math.PI / 2;
  group.add(band);

  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.03, 8), metal);
  cap.rotation.z = Math.PI / 2;
  cap.position.x = 0.13;
  group.add(cap);

  shadowAll(group);
  return group;
}

/**
 * Nailed planks across a doorway: what the shower room looks like until the
 * crowbar turns up. Crossed boards and a rusted brace, so it reads as
 * "someone boarded this shut" rather than "a door".
 */
export function createBoardedDoor(
  wood: THREE.Material,
  rust: THREE.Material,
  cellSize: number
): THREE.Group {
  const group = new THREE.Group();

  const boardGeo = new THREE.BoxGeometry(cellSize * 0.94, 0.16, 0.08);
  for (let i = 0; i < 5; i++) {
    const board = new THREE.Mesh(boardGeo, wood);
    board.position.set(0, 0.45 + i * 0.42, rnd(-0.03, 0.03));
    board.rotation.z = rnd(-0.05, 0.05);
    group.add(board);
  }

  // Two diagonal braces, like someone was in a hurry
  for (const angle of [0.7, -0.7]) {
    const brace = new THREE.Mesh(new THREE.BoxGeometry(cellSize * 1.02, 0.11, 0.06), rust);
    brace.position.set(0, 1.35, 0.06);
    brace.rotation.z = angle;
    group.add(brace);
  }

  shadowAll(group);
  return group;
}
