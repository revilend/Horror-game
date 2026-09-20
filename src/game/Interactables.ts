import * as THREE from 'three';
import { createTrashBin } from './PuzzleProps';

/* -------------------------------------------------------------------------
 * Touchable props
 *
 * Everything in here answers the action button. The level builder owns where a
 * prop stands and the game owns what working one does; this module owns only
 * the body and its moving parts, so the same cabinet behaves the same way on
 * every floor.
 *
 * Props are kept out of the level's merged decoration for the same reason the
 * doors are: merging bakes a group into one static mesh, and every prop here
 * has something that moves - a door swings, a wheel spins, a tap runs.
 * ---------------------------------------------------------------------- */

export type InteractableKind =
  | 'switch'
  | 'cabinet'
  | 'bin'
  | 'sink'
  | 'radio'
  | 'valve'
  | 'lightbox'
  | 'cot'
  | 'freezer'
  | 'safe'
  | 'monitor'
  | 'mirror'
  | 'extinguisher'
  | 'cart'
  | 'van';

/** Things a prop can hand over. Every one is a real inventory item. */
export type LootId = 'acid' | 'battery' | 'bottle' | 'boltcutters' | 'ignition';

export interface Interactable {
  kind: InteractableKind;
  group: THREE.Group;
  /** Prompt anchor, filled in when the prop is placed. */
  centre: THREE.Vector3;
  /** Which floor band it stands on, for the HUD line on a switch. */
  floor: number;

  /** The part that swings: cabinet doors, the freezer leaf, the van bonnet. */
  hinge: THREE.Group | null;
  /** The part that turns: a valve handwheel, a radio dial. */
  wheel: THREE.Mesh | null;
  /** Emissive surface that lights up: screens and bulbs. */
  panel: THREE.MeshStandardMaterial | null;
  /** The lamp behind a lightbox or a monitor. */
  lamp: THREE.PointLight | null;
  /** Running water, hidden until the tap is opened. */
  water: THREE.Object3D | null;
  /** A steam leak that stops once its valve is wound shut. */
  leak: THREE.Object3D | null;

  /** 0 = shut, 1 = wide open, eased toward `target`. */
  open: number;
  target: number;
  /** Tap running, screen lit, radio playing. */
  on: boolean;
  /** Quarter turns given to a valve wheel. Four closes the leak. */
  turns: number;
  /** Wheel angle in radians, eased toward `turns * PI / 2`. */
  wheelAngle: number;
  /** How many times it has been worked. */
  uses: number;
  /** Loot still inside. `null` once it has been emptied. */
  loot: LootId | null;
  /** Shut until a flag is set: the pharmacy cabinets need the CCTV room. */
  locked: boolean;
  /** Nothing left to find and nothing left to do. */
  spent: boolean;
}

export interface InteractableMaterials {
  metal: THREE.Material;
  rust: THREE.Material;
  wood: THREE.Material;
  glass: THREE.Material;
  plastic: THREE.Material;
  brass: THREE.Material;
  paint: THREE.Material;
  water: THREE.Material;
}

/** Its own material set, so the props read the same on every floor. */
export function makeInteractableMaterials(): InteractableMaterials {
  return {
    metal: new THREE.MeshStandardMaterial({ color: 0x767d82, roughness: 0.42, metalness: 0.62 }),
    rust: new THREE.MeshStandardMaterial({ color: 0x6d452c, roughness: 0.95, metalness: 0.18 }),
    wood: new THREE.MeshStandardMaterial({ color: 0x4c3a2a, roughness: 0.88, metalness: 0.02 }),
    glass: new THREE.MeshStandardMaterial({
      color: 0xbcd6dd,
      roughness: 0.12,
      metalness: 0.22,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    }),
    plastic: new THREE.MeshStandardMaterial({ color: 0x24282b, roughness: 0.7, metalness: 0.1 }),
    brass: new THREE.MeshStandardMaterial({ color: 0x9a7b3f, roughness: 0.35, metalness: 0.8 }),
    paint: new THREE.MeshStandardMaterial({ color: 0x7d2a24, roughness: 0.85, metalness: 0.05 }),
    water: new THREE.MeshStandardMaterial({
      color: 0x6b2418,
      roughness: 0.25,
      metalness: 0.1,
      transparent: true,
      opacity: 0.55,
    }),
  };
}

/** Emissive material a screen or a bulb is drawn with. */
function emissiveMaterial(color: number, glow: number): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: 0x101416,
    emissive: color,
    emissiveIntensity: 0,
    roughness: 0.35,
    metalness: 0.2,
  });
}

function shadowAll(group: THREE.Object3D): void {
  group.traverse((child) => {
    if (!(child as THREE.Mesh).isMesh) return;
    child.castShadow = true;
    child.receiveShadow = true;
  });
}

function base(kind: InteractableKind, group: THREE.Group): Interactable {
  return {
    kind,
    group,
    centre: new THREE.Vector3(),
    floor: 0,
    hinge: null,
    wheel: null,
    panel: null,
    lamp: null,
    water: null,
    leak: null,
    open: 0,
    target: 0,
    on: false,
    turns: 0,
    wheelAngle: 0,
    uses: 0,
    loot: null,
    locked: false,
    spent: false,
  };
}

/* --------------------------------------------------------------- builders */

/** A wall plate with a toggle on it: the room's lights, in one finger. */
export function createLightSwitch(mats: InteractableMaterials): Interactable {
  const prop = base('switch', new THREE.Group());

  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.28, 0.035), mats.plastic);
  plate.position.y = 1.26;
  prop.group.add(plate);

  const hinge = new THREE.Group();
  hinge.position.set(0, 1.26, 0.025);
  hinge.rotation.x = 0.4;
  const nub = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.11, 0.045), mats.brass);
  nub.position.z = 0.02;
  hinge.add(nub);
  prop.group.add(hinge);
  prop.hinge = hinge;

  return prop;
}

/** A glass medicine cabinet. The doors are hinged, the shelves are stocked. */
export function createMedicineCabinet(mats: InteractableMaterials): Interactable {
  const prop = base('cabinet', new THREE.Group());
  const W = 0.86;
  const H = 1.0;
  const D = 0.3;

  const carcass = new THREE.Mesh(new THREE.BoxGeometry(W, H, D), mats.metal);
  carcass.position.y = 1.62;
  prop.group.add(carcass);

  for (const shelfY of [1.28, 1.62, 1.96]) {
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(W - 0.1, 0.03, D - 0.06), mats.glass);
    shelf.position.y = shelfY;
    prop.group.add(shelf);
  }

  // Stock on the shelves: bottles and a boxed dressing.
  for (let i = 0; i < 5; i++) {
    const bottle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.035, 0.04, 0.14, 7),
      i % 2 === 0 ? mats.brass : mats.glass,
    );
    bottle.position.set(-0.28 + i * 0.14, 1.36 + (i % 2) * 0.34, 0);
    prop.group.add(bottle);
  }

  const cross = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.02), mats.paint);
  cross.position.set(0, 1.62, D / 2 + 0.015);
  prop.group.add(cross);
  const crossBar = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.22, 0.02), mats.paint);
  crossBar.position.set(0, 1.62, D / 2 + 0.015);
  prop.group.add(crossBar);

  const hinge = new THREE.Group();
  hinge.position.set(-W / 2, 1.62, D / 2);
  const pane = new THREE.Mesh(new THREE.BoxGeometry(W, H, 0.02), mats.glass);
  pane.position.set(W / 2, 0, 0.02);
  hinge.add(pane);
  const frame = new THREE.Mesh(new THREE.BoxGeometry(W, 0.05, 0.03), mats.metal);
  frame.position.set(W / 2, H / 2 - 0.02, 0.02);
  hinge.add(frame);
  const frameLow = new THREE.Mesh(new THREE.BoxGeometry(W, 0.05, 0.03), mats.metal);
  frameLow.position.set(W / 2, -H / 2 + 0.02, 0.02);
  hinge.add(frameLow);
  const latch = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.1, 0.04), mats.brass);
  latch.position.set(W - 0.04, 0, 0.04);
  hinge.add(latch);
  prop.group.add(hinge);
  prop.hinge = hinge;

  return prop;
}

/** A litter bin: taps give up scrap wire, batteries, nothing. */
export function createRummageBin(mats: InteractableMaterials): Interactable {
  const prop = base('bin', createTrashBin(mats.metal));
  const liner = new THREE.Mesh(
    new THREE.CylinderGeometry(0.3, 0.28, 0.5, 10, 1, true),
    mats.rust,
  );
  liner.position.y = 0.42;
  prop.group.add(liner);
  return prop;
}

/**
 * A steel crash cart. Mostly it is scenery - but the brake lever on it works,
 * and a braced cart is a barricade: it stops the player and, more to the
 * point, it stops the thing walking the corridors behind them.
 */
export function createCrashCart(mats: InteractableMaterials): Interactable {
  const prop = base('cart', new THREE.Group());

  const W = 0.62;
  const D = 0.44;
  for (const shelfY of [0.34, 0.78]) {
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(W, 0.05, D), mats.metal);
    shelf.position.y = shelfY;
    prop.group.add(shelf);
  }
  for (const [lx, lz] of [
    [-W / 2 + 0.05, -D / 2 + 0.05],
    [W / 2 - 0.05, -D / 2 + 0.05],
    [-W / 2 + 0.05, D / 2 - 0.05],
    [W / 2 - 0.05, D / 2 - 0.05],
  ] as Array<[number, number]>) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.76, 7), mats.metal);
    post.position.set(lx, 0.38, lz);
    prop.group.add(post);
  }
  // A tray of bottles riding the top shelf.
  for (let i = 0; i < 3; i++) {
    const vial = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.036, 0.13, 7), mats.glass);
    vial.position.set(-0.16 + i * 0.16, 0.87, 0.04);
    prop.group.add(vial);
  }

  const handleBar = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, W, 7), mats.brass);
  handleBar.rotation.z = Math.PI / 2;
  handleBar.position.set(0, 1.0, -D / 2 - 0.05);
  prop.group.add(handleBar);
  for (const side of [-1, 1]) {
    const stay = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.24, 6), mats.brass);
    stay.position.set(side * (W / 2 - 0.05), 0.9, -D / 2 - 0.025);
    stay.rotation.x = 0.35;
    prop.group.add(stay);
  }

  for (const [cx, cz] of [
    [-W / 2 + 0.09, -D / 2 + 0.09],
    [W / 2 - 0.09, -D / 2 + 0.09],
    [-W / 2 + 0.09, D / 2 - 0.09],
    [W / 2 - 0.09, D / 2 - 0.09],
  ] as Array<[number, number]>) {
    const castor = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.04, 10), mats.plastic);
    castor.rotation.z = Math.PI / 2;
    castor.position.set(cx, 0.07, cz);
    prop.group.add(castor);
  }

  // The brake lever: down is braked, up is free. This is the whole prop.
  const lever = new THREE.Group();
  lever.position.set(W / 2 - 0.02, 0.5, 0);
  // Starts up, in the released position: the brake is the interaction.
  lever.rotation.z = 0.45;
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.26, 0.04), mats.brass);
  arm.position.y = 0.13;
  lever.add(arm);
  const foot = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.03, 0.14), mats.rust);
  foot.position.y = 0.28;
  lever.add(foot);
  prop.group.add(lever);
  prop.hinge = lever;

  return prop;
}

/** A wall basin with a working tap: rusty water and a drip that will not stop. */
export function createRunningSink(mats: InteractableMaterials): Interactable {
  const prop = base('sink', new THREE.Group());

  const basin = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.16, 0.46), mats.metal);
  basin.position.y = 0.86;
  prop.group.add(basin);
  const bowl = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.1, 0.34), mats.rust);
  bowl.position.y = 0.9;
  prop.group.add(bowl);
  const pedestal = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.82, 0.16), mats.metal);
  pedestal.position.y = 0.41;
  prop.group.add(pedestal);

  const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.24, 7), mats.brass);
  spout.position.set(0, 1.05, -0.16);
  prop.group.add(spout);
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.12, 7), mats.brass);
  nozzle.rotation.x = Math.PI / 2;
  nozzle.position.set(0, 1.15, -0.09);
  prop.group.add(nozzle);

  const handle = new THREE.Group();
  handle.position.set(0.2, 1.0, -0.16);
  const lever = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.03, 0.03), mats.brass);
  lever.position.x = 0.07;
  handle.add(lever);
  prop.group.add(handle);
  prop.hinge = handle;

  const water = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.02, 0.28, 7), mats.water);
  water.position.set(0, 0.98, -0.09);
  water.visible = false;
  prop.group.add(water);
  prop.water = water;

  return prop;
}

/** A vintage valve radio. Its static carries down the corridor. */
export function createValveRadio(mats: InteractableMaterials): Interactable {
  const prop = base('radio', new THREE.Group());

  const case_ = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.3, 0.26), mats.wood);
  case_.position.y = 0.94;
  prop.group.add(case_);

  const grille = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.18, 0.02), mats.rust);
  grille.position.set(-0.1, 0.94, 0.135);
  prop.group.add(grille);
  for (let i = 0; i < 4; i++) {
    const slat = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.012, 0.025), mats.metal);
    slat.position.set(-0.1, 0.87 + i * 0.045, 0.14);
    prop.group.add(slat);
  }

  const dial = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.03, 12), mats.brass);
  dial.rotation.x = Math.PI / 2;
  dial.position.set(0.12, 0.94, 0.14);
  prop.group.add(dial);
  prop.wheel = dial;

  const lamp = emissiveMaterial(0xffa63c, 0);
  const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.02, 0.012), lamp);
  bulb.position.set(0.12, 1.07, 0.135);
  prop.group.add(bulb);
  prop.panel = lamp;

  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.5, 5), mats.metal);
  antenna.position.set(0.14, 1.3, -0.06);
  antenna.rotation.z = -0.22;
  prop.group.add(antenna);

  return prop;
}

/** A steam valve: four quarter turns of the wheel and the leak is shut. */
export function createSteamValve(mats: InteractableMaterials): Interactable {
  const prop = base('valve', new THREE.Group());

  const riser = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.1, 10), mats.rust);
  riser.position.y = 0.55;
  prop.group.add(riser);
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.12, 10), mats.metal);
  collar.position.y = 1.06;
  prop.group.add(collar);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.2, 8), mats.brass);
  stem.rotation.z = Math.PI / 2;
  stem.position.set(0.1, 1.12, 0);
  prop.group.add(stem);

  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.022, 8, 18), mats.brass);
  wheel.rotation.y = Math.PI / 2;
  wheel.position.set(0.22, 1.12, 0);
  prop.group.add(wheel);
  for (let i = 0; i < 3; i++) {
    const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.32, 0.02), mats.brass);
    spoke.rotation.x = (i * Math.PI) / 3;
    spoke.position.copy(wheel.position);
    prop.group.add(spoke);
  }
  prop.wheel = wheel;

  // The leak: a white plume at the joint, gone once the wheel is wound shut.
  const leak = new THREE.Group();
  for (let i = 0; i < 5; i++) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(0.09 + i * 0.035, 7, 6),
      new THREE.MeshStandardMaterial({
        color: 0xdfe6e8,
        transparent: true,
        opacity: 0.22,
        roughness: 1,
      }),
    );
    puff.position.set(0.3 + i * 0.1, 1.2 + i * 0.13, 0);
    leak.add(puff);
  }
  leak.position.set(0, 0, 0);
  prop.group.add(leak);
  prop.leak = leak;

  return prop;
}

/** An X-ray lightbox: tap the switch and the films come up. */
export function createXrayLightbox(mats: InteractableMaterials): Interactable {
  const prop = base('lightbox', new THREE.Group());

  const casing = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.7, 0.1), mats.metal);
  casing.position.y = 1.55;
  prop.group.add(casing);

  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.58, 0.03), mats.rust);
  frame.position.set(0, 1.55, 0.06);
  prop.group.add(frame);

  const film = emissiveMaterial(0xd8ecf5, 0);
  const pane = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.5), film);
  pane.position.set(0, 1.55, 0.085);
  prop.group.add(pane);
  prop.panel = film;

  // Two ribs and a fracture line, so the cipher has something to be read off.
  const rib = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.018, 0.006), mats.wood);
  rib.position.set(0, 1.62, 0.1);
  prop.group.add(rib);
  const rib2 = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.018, 0.006), mats.wood);
  rib2.position.set(0, 1.5, 0.1);
  prop.group.add(rib2);
  const crack = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.22, 0.006), mats.paint);
  crack.rotation.z = 0.9;
  crack.position.set(0.12, 1.56, 0.1);
  prop.group.add(crack);

  const lamp = new THREE.PointLight(0xbfe4ff, 0, 4.5);
  lamp.position.set(0, 1.55, 0.4);
  prop.group.add(lamp);
  prop.lamp = lamp;

  return prop;
}

/** A hospital cot: the pin that opens Room 404 is in the tray beside it. */
export function createSearchCot(mats: InteractableMaterials): Interactable {
  const prop = base('cot', new THREE.Group());

  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.1, 2.05), mats.metal);
  frame.position.y = 0.62;
  prop.group.add(frame);
  const mattress = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.16, 1.95), mats.paint);
  mattress.position.y = 0.73;
  prop.group.add(mattress);
  const pillow = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.12, 0.34), mats.wood);
  pillow.position.set(0, 0.86, -0.76);
  prop.group.add(pillow);

  for (const side of [-1, 1]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 1.6), mats.metal);
    rail.position.set(side * 0.46, 0.86, 0);
    prop.group.add(rail);
  }
  // Torn restraint straps still buckled to the rails.
  for (const [z, side] of [
    [-0.4, -1],
    [0.35, -1],
    [-0.1, 1],
    [0.6, 1],
  ] as Array<[number, number]>) {
    const strap = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.05, 0.09), mats.rust);
    strap.position.set(side * 0.28, 0.86, z);
    strap.rotation.z = side * 0.18;
    prop.group.add(strap);
  }

  for (const [lx, lz] of [
    [-0.4, -0.9],
    [0.4, -0.9],
    [-0.4, 0.9],
    [0.4, 0.9],
  ]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.6, 7), mats.metal);
    leg.position.set(lx, 0.31, lz);
    prop.group.add(leg);
  }

  // The bedside tray the lockpick pin is lying in.
  const tray = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.06, 0.3), mats.metal);
  tray.position.set(0.72, 0.72, -0.7);
  prop.group.add(tray);
  const trayLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.72, 7), mats.metal);
  trayLeg.position.set(0.72, 0.36, -0.7);
  prop.group.add(trayLeg);
  const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.16, 5), mats.brass);
  pin.rotation.z = Math.PI / 2.3;
  pin.position.set(0.72, 0.78, -0.7);
  prop.group.add(pin);

  return prop;
}

/** Freezer #12 in the morgue wall: the bolt cutters are laid inside it. */
export function createMorgueFreezer(mats: InteractableMaterials): Interactable {
  const prop = base('freezer', new THREE.Group());

  const bank = new THREE.Mesh(new THREE.BoxGeometry(0.95, 2.1, 0.8), mats.metal);
  bank.position.y = 1.05;
  prop.group.add(bank);

  for (let i = 0; i < 3; i++) {
    const front = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.62, 0.06), mats.rust);
    front.position.set(0, 0.42 + i * 0.68, 0.42);
    prop.group.add(front);
    const tag = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.08, 0.02), mats.brass);
    tag.position.set(0.28, 0.42 + i * 0.68, 0.46);
    prop.group.add(tag);
  }

  // The number-12 leaf: hinged on its left edge, so it swings clear.
  const hinge = new THREE.Group();
  hinge.position.set(-0.45, 1.1, 0.44);
  const leaf = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.62, 0.05), mats.metal);
  leaf.position.set(0.45, 0, 0.02);
  hinge.add(leaf);
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.24, 0.05), mats.brass);
  handle.position.set(0.84, 0, 0.06);
  hinge.add(handle);
  prop.group.add(hinge);
  prop.hinge = hinge;

  return prop;
}

/** The safe behind the painting in the director's office. */
export function createPaintingSafe(mats: InteractableMaterials): Interactable {
  const prop = base('safe', new THREE.Group());

  const recess = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.9, 0.12), mats.plastic);
  recess.position.y = 1.6;
  prop.group.add(recess);

  const door = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.72, 0.05), mats.metal);
  door.position.set(0.31, 0, 0.03);
  const dial = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.05, 14), mats.brass);
  dial.rotation.x = Math.PI / 2;
  dial.position.set(0.31, 0.18, 0.1);
  const keyMesh = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.22, 0.02), mats.brass);
  keyMesh.position.set(0.42, -0.12, 0.09);

  const hinge = new THREE.Group();
  hinge.position.set(-0.4, 1.6, 0.09);
  hinge.add(door);
  hinge.add(dial);
  hinge.add(keyMesh);
  prop.group.add(hinge);
  prop.hinge = hinge;

  // The canvas itself, hung over the recess on its own hinges.
  const canvas = new THREE.Group();
  const canvasHinge = new THREE.Group();
  canvasHinge.position.set(-0.5, 1.62, 0.16);
  const board = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, 0.06), mats.wood);
  board.position.set(0.5, 0, 0);
  canvasHinge.add(board);
  const art = new THREE.Mesh(new THREE.PlaneGeometry(0.86, 0.86), mats.paint);
  art.position.set(0.5, 0, 0.035);
  canvasHinge.add(art);
  canvas.add(canvasHinge);
  prop.group.add(canvas);
  prop.wheel = null;
  // The painting rides on its own hinge, kept so it can be swung aside first.
  prop.hinge = canvasHinge;

  return prop;
}

/** The CCTV monitor bank. Boot it and the pharmacy cabinets unlock. */
export function createCctvBank(mats: InteractableMaterials): Interactable {
  const prop = base('monitor', new THREE.Group());

  const desk = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.1, 0.7), mats.metal);
  desk.position.y = 0.78;
  prop.group.add(desk);
  for (const lx of [-0.7, 0.7]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.74, 0.6), mats.metal);
    leg.position.set(lx, 0.38, 0);
    prop.group.add(leg);
  }

  const panel = emissiveMaterial(0x54ff9b, 0);
  for (let i = 0; i < 4; i++) {
    const screen = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.46, 0.34), mats.plastic);
    screen.position.set(-0.52 + (i % 2) * 1.04, 1.32 + Math.floor(i / 2) * 0.62, -0.06);
    screen.rotation.y = (i % 2 === 0 ? 1 : -1) * 0.16;
    prop.group.add(screen);

    const face = new THREE.Mesh(new THREE.PlaneGeometry(0.54, 0.38), panel);
    face.position.set(-0.52 + (i % 2) * 1.04, 1.32 + Math.floor(i / 2) * 0.62, 0.11 - Math.floor(i / 2) * 0);
    face.position.z = 0.115;
    face.rotation.y = screen.rotation.y;
    prop.group.add(face);
  }
  prop.panel = panel;

  const glow = new THREE.PointLight(0x62ffae, 0, 6);
  glow.position.set(0, 1.5, 0.5);
  prop.group.add(glow);
  prop.lamp = glow;

  const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.03, 10), mats.brass);
  wheel.rotation.x = Math.PI / 2;
  wheel.position.set(0.62, 0.86, 0.3);
  prop.group.add(wheel);
  prop.wheel = wheel;

  return prop;
}

/**
 * The ward mirror: cracked silver glass on a hinged frame. Tap it and the
 * reflection gives up the thing carved into it.
 */
export function createWardMirror(mats: InteractableMaterials): Interactable {
  const prop = base('mirror', new THREE.Group());

  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.04), mats.rust);
  plate.position.y = 1.5;
  prop.group.add(plate);

  const hinge = new THREE.Group();
  hinge.position.set(-0.3, 1.5, 0.05);
  const pane = new THREE.Mesh(new THREE.PlaneGeometry(0.54, 0.74), mats.metal);
  pane.position.set(0.3, 0, 0.01);
  hinge.add(pane);
  // The break: two shards sitting proud of the glass.
  for (const [rx, ry, rz] of [
    [0.14, 0.2, 0.6],
    [-0.1, -0.16, -0.8],
  ]) {
    const shard = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.4, 0.006), mats.glass);
    shard.position.set(0.3 + rx, ry, 0.02);
    shard.rotation.z = rz;
    hinge.add(shard);
  }
  prop.group.add(hinge);
  prop.hinge = hinge;

  return prop;
}

/**
 * The wall extinguisher in its bracket: a red canister with a hose. Bracing it
 * empties the cylinder into the corridor and staggers whatever is in it.
 */
export function createExtinguisher(mats: InteractableMaterials): Interactable {
  const prop = base('extinguisher', new THREE.Group());

  const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.1, 0.08), mats.metal);
  bracket.position.y = 1.62;
  prop.group.add(bracket);

  const hinge = new THREE.Group();
  hinge.position.set(0, 1.28, 0.02);
  const canister = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.5, 12), mats.paint);
  hinge.add(canister);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), mats.paint);
  dome.position.y = 0.25;
  hinge.add(dome);
  const valve = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.1, 8), mats.brass);
  valve.position.y = 0.36;
  hinge.add(valve);
  const lever = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.03, 0.05), mats.metal);
  lever.position.set(0.08, 0.4, 0);
  hinge.add(lever);
  const hose = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.42, 7), mats.plastic);
  hose.position.set(0.16, 0.06, 0.03);
  hose.rotation.z = -0.5;
  hinge.add(hose);
  prop.group.add(hinge);
  prop.hinge = hinge;

  const signal = emissiveMaterial(0xff3b2e, 0);
  const strip = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.3, 0.02), signal);
  strip.position.set(0, 1.28, 0.12);
  prop.group.add(strip);
  prop.panel = signal;

  return prop;
}

/** The ambulance: bonnet, battery bay, ignition. The last way out. */
export function createAmbulanceVan(mats: InteractableMaterials): Interactable {
  const prop = base('van', new THREE.Group());

  const body = new THREE.Mesh(new THREE.BoxGeometry(2.3, 1.5, 4.6), mats.metal);
  body.position.y = 1.15;
  prop.group.add(body);
  const boxy = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.7, 2.1), mats.wood);
  boxy.position.set(0, 1.35, -1.35);
  prop.group.add(boxy);
  for (const [wx, wz] of [
    [-1.05, 1.5],
    [1.05, 1.5],
    [-1.05, -1.5],
    [1.05, -1.5],
  ]) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.3, 14), mats.plastic);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(wx, 0.42, wz);
    prop.group.add(wheel);
  }
  // Faded livery over the box.
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.24, 0.2, 2.12), mats.paint);
  stripe.position.set(0, 1.5, -1.35);
  prop.group.add(stripe);

  // Bonnet on its hinge, with the battery bay under it.
  const hinge = new THREE.Group();
  hinge.position.set(0, 1.55, 2.3);
  const bonnet = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.08, 1.0), mats.metal);
  bonnet.position.set(0, 0, -0.5);
  hinge.add(bonnet);
  prop.group.add(hinge);
  prop.hinge = hinge;

  const bay = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.34, 0.44), mats.plastic);
  bay.position.set(-0.6, 1.32, 1.9);
  prop.group.add(bay);
  const terminalA = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.08, 8), mats.brass);
  terminalA.position.set(-0.85, 1.52, 1.9);
  prop.group.add(terminalA);
  const terminalB = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.08, 8), mats.metal);
  terminalB.position.set(-0.35, 1.52, 1.9);
  prop.group.add(terminalB);

  const coil = emissiveMaterial(0x54ff9b, 0);
  const ignition = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.1, 0.03), coil);
  ignition.position.set(0.55, 1.6, 1.85);
  prop.group.add(ignition);
  prop.panel = coil;

  return prop;
}

/** Builds one prop of a given kind, already standing at the origin. */
export function createInteractable(
  kind: InteractableKind,
  mats: InteractableMaterials,
): Interactable {
  let prop: Interactable;
  switch (kind) {
    case 'switch':
      prop = createLightSwitch(mats);
      break;
    case 'cabinet':
      prop = createMedicineCabinet(mats);
      break;
    case 'bin':
      prop = createRummageBin(mats);
      break;
    case 'sink':
      prop = createRunningSink(mats);
      break;
    case 'radio':
      prop = createValveRadio(mats);
      break;
    case 'valve':
      prop = createSteamValve(mats);
      break;
    case 'lightbox':
      prop = createXrayLightbox(mats);
      break;
    case 'cot':
      prop = createSearchCot(mats);
      break;
    case 'freezer':
      prop = createMorgueFreezer(mats);
      break;
    case 'safe':
      prop = createPaintingSafe(mats);
      break;
    case 'monitor':
      prop = createCctvBank(mats);
      break;
    case 'mirror':
      prop = createWardMirror(mats);
      break;
    case 'extinguisher':
      prop = createExtinguisher(mats);
      break;
    case 'cart':
      prop = createCrashCart(mats);
      break;
    case 'van':
      prop = createAmbulanceVan(mats);
      break;
  }
  shadowAll(prop.group);
  return prop;
}

/** How far above the floor a prop's prompt anchor sits. */
const PROMPT_HEIGHT: Record<InteractableKind, number> = {
  switch: 1.26,
  cabinet: 1.62,
  bin: 0.5,
  sink: 0.9,
  radio: 0.94,
  valve: 1.12,
  lightbox: 1.55,
  cot: 0.8,
  freezer: 1.1,
  safe: 1.6,
  monitor: 1.3,
  mirror: 1.5,
  extinguisher: 1.28,
  cart: 0.95,
  van: 1.35,
};

/** Stands a built prop on the floor at (x, z), facing `yaw`. */
export function placeInteractable(
  prop: Interactable,
  x: number,
  z: number,
  yaw: number,
  floor: number,
  loot: LootId | null,
  locked: boolean,
): void {
  prop.group.position.set(x, 0, z);
  prop.group.rotation.y = yaw;
  prop.centre.set(x, PROMPT_HEIGHT[prop.kind], z);
  prop.floor = floor;
  prop.loot = loot;
  prop.locked = locked;
}

/** Radius of the collider a prop blocks its cell with. */
export function interactableRadius(prop: Interactable): number {
  switch (prop.kind) {
    case 'van':
      return 1.6;
    case 'cot':
    case 'monitor':
    case 'freezer':
      return 0.75;
    case 'cart':
      return 0.55;
    case 'bin':
    case 'sink':
    case 'cabinet':
    case 'lightbox':
      return 0.4;
    default:
      return 0.28;
  }
}

/* -------------------------------------------------------------- animation */

function easeInOut(t: number): number {
  const clamped = Math.max(0, Math.min(1, t));
  return clamped < 0.5 ? 2 * clamped * clamped : 1 - Math.pow(-2 * clamped + 2, 2) / 2;
}

/** True while the prop still has something moving. */
export function advanceInteractable(prop: Interactable, dt: number, time: number): void {
  // Leaves: a cabinet door, the freezer, the bonnet, the painting.
  if (prop.hinge) {
    if (prop.kind === 'switch') {
      const want = prop.on ? -0.4 : 0.4;
      prop.hinge.rotation.x += (want - prop.hinge.rotation.x) * Math.min(1, dt * 10);
    } else if (prop.kind === 'cart') {
      // The brake lever drops when the cart is braced.
      const want = prop.on ? -0.5 : 0.45;
      prop.hinge.rotation.z += (want - prop.hinge.rotation.z) * Math.min(1, dt * 9);
    } else if (prop.kind === 'sink') {
      prop.hinge.rotation.y += ((prop.on ? 0.9 : 0) - prop.hinge.rotation.y) * Math.min(1, dt * 8);
    } else {
      const speed = prop.kind === 'van' ? 1.1 : 2.4;
      const step = dt * speed;
      prop.open =
        prop.open < prop.target
          ? Math.min(prop.target, prop.open + step)
          : Math.max(prop.target, prop.open - step);
      // The painting swings a full quarter turn; the rest crack open.
      const swing = prop.kind === 'safe' ? Math.PI * 0.52 : Math.PI * 0.62;
      prop.hinge.rotation.y = -swing * easeInOut(prop.open);
    }
  }

  // Valve wheels and radio dials turn: the wheel always ends square to the
  // pipe, which is what makes four taps read as one full revolution.
  if (prop.wheel) {
    const want =
      prop.kind === 'valve'
        ? (prop.turns * Math.PI) / 2
        : prop.kind === 'radio'
          ? (prop.uses % 2 === 0 ? 0.5 : 0) + Math.sin(time * 1.6) * 0.06
          : prop.wheelAngle;
    prop.wheelAngle += (want - prop.wheelAngle) * Math.min(1, dt * 7);
    if (prop.kind === 'valve') prop.wheel.rotation.z = prop.wheelAngle;
    else if (prop.kind === 'radio') prop.wheel.rotation.z = prop.wheelAngle;
  }

  // Screens, bulbs and coils.
  if (prop.panel) {
    const want = prop.on ? 1 : 0;
    prop.panel.emissiveIntensity += (want - prop.panel.emissiveIntensity) * Math.min(1, dt * 4);
    if (prop.kind === 'lightbox' && prop.on) {
      // A failing tube, so the cipher is a wrench to read.
      prop.panel.emissiveIntensity = 0.82 + Math.sin(time * 7.3) * 0.14;
    }
  }
  if (prop.lamp) {
    const want = prop.on ? (prop.kind === 'lightbox' ? 1.15 : 0.85) : 0;
    prop.lamp.intensity += (want - prop.lamp.intensity) * Math.min(1, dt * 4);
  }

  // Running water.
  if (prop.water) {
    prop.water.visible = prop.on;
    if (prop.on) {
      const scale = 0.9 + Math.sin(time * 22) * 0.08;
      prop.water.scale.set(1, scale, 1);
    }
  }

  // A steam leak thins out as the wheel comes round, and is gone at four.
  if (prop.leak) {
    const remaining = 1 - Math.min(1, prop.turns / 4);
    prop.leak.visible = remaining > 0.02;
    prop.leak.scale.setScalar(0.35 + remaining * 0.65);
    prop.leak.position.y = Math.sin(time * 0.8) * 0.05;
  }
}
