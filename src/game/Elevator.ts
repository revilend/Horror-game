import * as THREE from 'three';
import { L, type Localized } from './i18n';

/* -------------------------------------------------------------------------
 * The vintage iron-cage elevator.
 *
 * The asylum is one flat grid, so "floors" are bands of rows. The lift is a
 * single cage recessed into the wall of one corridor cell, re-seated at the
 * destination landing part-way through the ride. The player never sees the
 * swap: the Edison bulbs brown out and strobe for exactly that half second.
 *
 * Every deck shares the same column, so the shaft has one opening per floor
 * stacked in the same place on the wall.
 * ---------------------------------------------------------------------- */

/** Column the shaft is cut into, in every band. */
export const ELEVATOR_COL = 14;

/**
 * How high the top landing sits above the compound.
 *
 * The roof is the one deck that is genuinely above the others: rows 0..7 of
 * the plan are the terrace, lifted onto a podium, and only the cage goes up
 * there. Every other deck is at ground level, so this is the lift's own
 * notion of height rather than something the plan carries.
 */
export const ROOF_Y = 10.5;

export interface ElevatorDeck {
  /** Stable id used by the HUD and the touch panel. */
  id: string;
  /** Corridor row the player steps out onto. */
  landingRow: number;
  /** Row of the wall cell the cage is recessed into (landingRow - 1). */
  cageRow: number;
  /** Short plate text: ROOF / 3F / 2F / 1F / B1. */
  label: Localized;
  /** HUD location line. */
  name: Localized;
  /** One-line description under the plate. */
  sub: Localized;
  /** How far the deck's floor sits above the compound floor. */
  height: number;
}

/** Storage order is bottom-up; the panel is wired top-down. */
export const ELEVATOR_DECKS: ElevatorDeck[] = [
  {
    id: 'b1',
    landingRow: 44,
    cageRow: 43,
    label: { uz: 'B1', en: 'B1', ru: 'Б1' },
    name: { uz: 'B1 PODVAL', en: 'B1 BASEMENT', ru: 'Б1 ПОДВАЛ' },
    sub: { uz: 'qozonxona va morg', en: 'boiler room and morgue', ru: 'котельная и морг' },
    height: 0,
  },
  {
    id: 'f1',
    landingRow: 28,
    cageRow: 27,
    label: { uz: '1Q', en: '1F', ru: '1Э' },
    name: { uz: '1-QAVAT KLINIKA', en: '1F CLINIC', ru: '1 ЭТАЖ КЛИНИКА' },
    sub: { uz: 'qabulxona va dorixona', en: 'reception and pharmacy', ru: 'приёмная и аптека' },
    height: 0,
  },
  {
    id: 'f2',
    landingRow: 34,
    cageRow: 33,
    label: { uz: '2Q', en: '2F', ru: '2Э' },
    name: { uz: '2-QAVAT JARROHLIK', en: '2F SURGERY', ru: '2 ЭТАЖ ХИРУРГИЯ' },
    sub: { uz: 'operatsiya va 404-palata', en: 'theatre and room 404', ru: 'операционная и палата 404' },
    height: 0,
  },
  {
    id: 'f3',
    landingRow: 50,
    cageRow: 49,
    label: { uz: '3Q', en: '3F', ru: '3Э' },
    name: {
      uz: '3-QAVAT DIREKTOR ARIS',
      en: '3F DIRECTOR ARIS',
      ru: '3 ЭТАЖ ДИРЕКТОР АРИС',
    },
    sub: {
      uz: 'izolyator va elektroterapiya',
      en: 'isolation and electrotherapy',
      ru: 'изолятор и электротерапия',
    },
    height: 0,
  },
  {
    id: 'roof',
    landingRow: 7,
    cageRow: 6,
    label: { uz: 'TOM', en: 'ROOF', ru: 'КРШ' },
    name: { uz: 'TOM — QOCHISH DARVOZASI', en: 'ROOF — ESCAPE GATE', ru: 'КРЫША — ВОРОТА ПОБЕГА' },
    sub: { uz: "yomg'ir va qochish yo'li", en: 'rain and the way out', ru: 'дождь и путь наружу' },
    height: ROOF_Y,
  },
];

/** Deck the player is stranded on when the run starts. */
export const ELEVATOR_START_DECK = 1; // 1F lobby

export interface ElevatorMaterials {
  iron: THREE.Material;
  darkIron: THREE.Material;
  brass: THREE.Material;
  rust: THREE.Material;
}

export interface ElevatorButton {
  deckIndex: number;
  node: THREE.Group;
  cap: THREE.Mesh;
  lampMat: THREE.MeshStandardMaterial;
}

export interface ElevatorPlate {
  texture: THREE.CanvasTexture;
  text: Localized;
  /** Redraws the canvas from `text` in the active language. */
  repaint: () => void;
}

export interface ElevatorHooks {
  onGateClank?: () => void;
  onMotorStart?: () => void;
  onDing?: () => void;
  /** Fired the instant the cage is re-seated; move the player here. */
  onTeleport?: (deckIndex: number) => void;
  /** Fired when the doors are fully open again. */
  onArrive?: (deckIndex: number) => void;
  shake?: (amount: number, decay: number) => void;
  flicker?: (intensity: number) => void;
}

export interface ElevatorHandle {
  cage: THREE.Group;
  gate: THREE.Group;
  panel: THREE.Group;
  buttons: ElevatorButton[];
  plates: ElevatorPlate[];
  landingLamps: THREE.MeshStandardMaterial[];
  /** World-space centre of the cage right now. */
  centre: THREE.Vector3;
  deck: number;
  moving: boolean;
  powered: boolean;
  setDeck: (index: number, hooks?: ElevatorHooks) => void;
  startTravel: (index: number, hooks: ElevatorHooks) => boolean;
  isLocked: () => boolean;
  isInside: (pos: THREE.Vector3) => boolean;
  update: (dt: number, hooks: ElevatorHooks) => void;
  setPower: (on: boolean) => void;
  relocalize: () => void;
  currentDeck: () => number;
}

type Phase = 'idle' | 'closing' | 'moving' | 'opening';

const CLOSE_TIME = 0.6;
const TRAVEL_TIME = 2.5;
const OPEN_TIME = 0.7;
/** Moment inside the travel window when the cage is silently re-seated. */
const SWAP_AT = 1.25;

const CAGE_W = 3.5;
const CAGE_H = 3.0;
const CAGE_D = 3.7;

/* -------------------------------------------------------------------------
 * Build
 * ---------------------------------------------------------------------- */

export function createElevator(
  scene: THREE.Scene,
  mats: ElevatorMaterials,
  cell = 4,
): ElevatorHandle {
  const decks = ELEVATOR_DECKS;
  const cx = ELEVATOR_COL * cell;
  const gateZ = CAGE_D / 2 - 0.06;

  const plates: ElevatorPlate[] = [];
  const landingLamps: THREE.MeshStandardMaterial[] = [];

  /* ---- Cage ------------------------------------------------------------ */
  const cage = new THREE.Group();
  cage.position.set(cx, 0, decks[ELEVATOR_START_DECK].cageRow * cell);
  scene.add(cage);

  const shell = new THREE.MeshStandardMaterial({ color: 0x23242a, roughness: 0.82, metalness: 0.7 });
  const deckPlate = new THREE.Mesh(new THREE.BoxGeometry(CAGE_W, 0.14, CAGE_D), shell);
  deckPlate.position.y = 0.07;
  deckPlate.receiveShadow = true;
  cage.add(deckPlate);

  const checker = new THREE.Mesh(
    new THREE.BoxGeometry(CAGE_W - 0.3, 0.02, CAGE_D - 0.3),
    new THREE.MeshStandardMaterial({ color: 0x3a3c42, roughness: 0.5, metalness: 0.9 }),
  );
  checker.position.y = 0.15;
  checker.receiveShadow = true;
  cage.add(checker);

  const cageCeil = new THREE.Mesh(
    new THREE.BoxGeometry(CAGE_W, 0.12, CAGE_D),
    new THREE.MeshStandardMaterial({ color: 0x1b1c20, roughness: 0.9, metalness: 0.6 }),
  );
  cageCeil.position.y = CAGE_H;
  cageCeil.castShadow = true;
  cage.add(cageCeil);

  for (const sx of [-1, 1]) {
    const lattice = createLatticeWall(mats.iron, CAGE_D, CAGE_H, 0.55);
    lattice.position.set(sx * (CAGE_W / 2), CAGE_H / 2, 0);
    lattice.rotation.y = Math.PI / 2;
    cage.add(lattice);
  }

  const backPlate = new THREE.Mesh(
    new THREE.BoxGeometry(CAGE_W, CAGE_H, 0.12),
    new THREE.MeshStandardMaterial({ color: 0x191a1e, roughness: 0.85, metalness: 0.7 }),
  );
  backPlate.position.set(0, CAGE_H / 2, -CAGE_D / 2 + 0.06);
  backPlate.receiveShadow = true;
  cage.add(backPlate);

  const postGeo = new THREE.CylinderGeometry(0.1, 0.1, CAGE_H, 8);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const post = new THREE.Mesh(postGeo, mats.darkIron);
      post.position.set(sx * (CAGE_W / 2 - 0.06), CAGE_H / 2, sz * (CAGE_D / 2 - 0.06));
      post.castShadow = true;
      cage.add(post);
    }
  }

  const rail = new THREE.Mesh(new THREE.BoxGeometry(CAGE_W + 0.24, 0.16, CAGE_D + 0.24), mats.darkIron);
  rail.position.y = CAGE_H + 0.08;
  rail.castShadow = true;
  cage.add(rail);

  /* ---- Accordion gate -------------------------------------------------- */
  // Each leaf is hinged on the outer frame and built spanning 0..span in
  // local x, so scaling x folds it exactly like a real accordion gate.
  const gate = new THREE.Group();
  gate.position.set(0, 0, gateZ);
  cage.add(gate);

  const leafSpan = CAGE_W / 2 + 0.05;
  const leafHeight = CAGE_H - 0.5;

  const leftLeaf = createGateLeaf(mats.iron, mats.darkIron, leafSpan, leafHeight, 0.42, false);
  leftLeaf.position.set(-CAGE_W / 2, 0.2, 0);
  gate.add(leftLeaf);

  const rightLeaf = createGateLeaf(mats.iron, mats.darkIron, leafSpan, leafHeight, 0.42, true);
  rightLeaf.position.set(CAGE_W / 2, 0.2, 0);
  gate.add(rightLeaf);

  const track = new THREE.Mesh(new THREE.BoxGeometry(CAGE_W + 0.14, 0.09, 0.13), mats.brass);
  track.position.set(0, CAGE_H - 0.28, gateZ);
  cage.add(track);

  /* ---- Edison bulbs ---------------------------------------------------- */
  const bulbs: THREE.Mesh[] = [];
  const bulbLights: THREE.PointLight[] = [];

  for (let i = 0; i < 2; i++) {
    const px = i === 0 ? -0.85 : 0.85;

    const flex = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.42, 4), mats.darkIron);
    flex.position.set(px, CAGE_H - 0.3, 0);
    cage.add(flex);

    const shade = new THREE.Mesh(
      new THREE.ConeGeometry(0.2, 0.16, 10, 1, true),
      new THREE.MeshStandardMaterial({
        color: 0x2c2d33,
        roughness: 0.7,
        metalness: 0.75,
        side: THREE.DoubleSide,
      }),
    );
    shade.position.set(px, CAGE_H - 0.52, 0);
    cage.add(shade);

    const bulb = new THREE.Mesh(
      new THREE.SphereGeometry(0.075, 10, 8),
      new THREE.MeshStandardMaterial({
        color: 0xffe6ad,
        emissive: 0xffc24a,
        emissiveIntensity: 1.1,
        roughness: 0.4,
      }),
    );
    bulb.position.set(px, CAGE_H - 0.6, 0);
    bulb.userData.bulbPhase = i * 1.7;
    cage.add(bulb);
    bulbs.push(bulb);

    const light = new THREE.PointLight(0xffc978, 1.5, 9, 2);
    light.position.set(px, CAGE_H - 0.64, 0);
    cage.add(light);
    bulbLights.push(light);
  }

  /* ---- Bronze control panel -------------------------------------------- */
  const panel = new THREE.Group();
  panel.position.set(CAGE_W / 2 - 0.09, 1.45, 0);
  panel.rotation.y = -Math.PI / 2;
  cage.add(panel);

  const panelPlate = new THREE.Mesh(
    new THREE.BoxGeometry(0.62, 1.4, 0.09),
    new THREE.MeshStandardMaterial({ color: 0x141518, roughness: 0.55, metalness: 0.8 }),
  );
  panelPlate.castShadow = true;
  panel.add(panelPlate);

  const panelRim = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.5, 0.05), mats.brass);
  panelRim.position.z = -0.035;
  panel.add(panelRim);

  for (const ry of [0.64, -0.64]) {
    const rivet = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.06, 6), mats.brass);
    rivet.position.set(0, ry, 0.06);
    rivet.rotation.x = Math.PI / 2;
    panel.add(rivet);
  }

  // Engraved floor list beside the buttons.
  const listPlate = makePlate(0.2, 0.62, (ctx, text) => {
    clear(ctx);
    ctx.fillStyle = '#c9a227';
    ctx.font = 'bold 15px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const lines = text.split('|');
    lines.forEach((line, i) => {
      ctx.fillText(line, ctx.canvas.width / 2, (i + 0.5) * (ctx.canvas.height / lines.length));
    });
  });
  const listMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.16, 0.5),
    new THREE.MeshStandardMaterial({
      map: listPlate.texture,
      transparent: true,
      roughness: 0.5,
      metalness: 0.2,
      depthWrite: false,
    }),
  );
  listMesh.position.set(-0.2, -0.02, 0.055);
  panel.add(listMesh);

  // The engraved list reads top-down, matching the buttons beside it.
  const panelOrder = decks.slice().reverse();
  listPlate.text = {
    uz: panelOrder.map((d) => d.label.uz).join('|'),
    en: panelOrder.map((d) => d.label.en).join('|'),
    ru: panelOrder.map((d) => d.label.ru).join('|'),
  };
  listPlate.repaint();

  // Brass "car position" indicator above the buttons.
  const carPlate = makePlate(0.42, 0.15, (ctx, text) => {
    clear(ctx);
    ctx.fillStyle = 'rgba(12,12,14,0.92)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = '#c9a227';
    ctx.lineWidth = 3;
    ctx.strokeRect(3, 3, ctx.canvas.width - 6, ctx.canvas.height - 6);
    ctx.fillStyle = '#f2d675';
    ctx.font = 'bold 22px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, ctx.canvas.width / 2, ctx.canvas.height / 2 + 1);
  });
  const carPlateMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.4, 0.14),
    new THREE.MeshStandardMaterial({
      map: carPlate.texture,
      transparent: true,
      emissive: 0xffd884,
      emissiveIntensity: 0.3,
      roughness: 0.5,
      depthWrite: false,
    }),
  );
  carPlateMesh.position.set(0.08, 0.52, 0.06);
  panel.add(carPlateMesh);

  /* ---- Five buttons ---------------------------------------------------- */
  const buttons: ElevatorButton[] = [];
  const buttonTop = 0.26;
  const buttonGap = 0.2;

  decks.forEach((deck, index) => {
    // Panel order is ROOF at the top, so flip the storage order.
    const slot = decks.length - 1 - index;
    const y = buttonTop - slot * buttonGap;

    const node = new THREE.Group();
    node.position.set(0.1, y, 0.05);
    panel.add(node);

    const bezel = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.056, 0.03, 12), mats.brass);
    bezel.rotation.x = Math.PI / 2;
    node.add(bezel);

    const capMat = new THREE.MeshStandardMaterial({
      color: 0x2a2b30,
      roughness: 0.45,
      metalness: 0.6,
      emissive: 0x000000,
      emissiveIntensity: 0,
    });
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.05, 12), capMat);
    cap.rotation.x = Math.PI / 2;
    cap.position.z = 0.022;
    cap.userData.isElevatorButton = true;
    cap.userData.deckIndex = index;
    node.add(cap);

    const lampMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1c,
      emissive: 0x000000,
      emissiveIntensity: 0,
      roughness: 0.4,
    });
    const lamp = new THREE.Mesh(new THREE.CircleGeometry(0.013, 10), lampMat);
    lamp.position.set(0.048, y, 0.056);
    panel.add(lamp);

    const tag = makePlate(0.12, 0.05, (ctx, text) => {
      clear(ctx);
      ctx.fillStyle = '#d9cfae';
      ctx.font = 'bold 14px "Courier New", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, ctx.canvas.width / 2, ctx.canvas.height / 2 + 1);
    });
    tag.text = deck.label;
    tag.repaint();
    const tagMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.1, 0.042),
      new THREE.MeshStandardMaterial({
        map: tag.texture,
        transparent: true,
        roughness: 0.6,
        depthWrite: false,
      }),
    );
    tagMesh.position.set(-0.09, y, 0.057);
    panel.add(tagMesh);

    buttons.push({ deckIndex: index, node, cap, lampMat });
  });

  /* ---- Landings -------------------------------------------------------- */
  const archGeoJamb = new THREE.BoxGeometry(0.16, CAGE_H + 0.5, 0.3);
  const lintelGeo = new THREE.BoxGeometry(cell, 0.26, 0.36);
  const housingGeo = new THREE.BoxGeometry(0.2, 0.32, 0.11);
  const shaftPanelGeo = new THREE.BoxGeometry(cell - 0.2, CAGE_H + 0.7, 0.12);
  const lampGeo = new THREE.SphereGeometry(0.037, 8, 8);

  decks.forEach((deck) => {
    const arch = new THREE.Group();
    arch.position.set(cx, deck.height, deck.cageRow * cell + cell / 2 - 0.02);
    scene.add(arch);

    for (const sx of [-1, 1]) {
      const jamb = new THREE.Mesh(archGeoJamb, mats.iron);
      jamb.position.set(sx * (cell / 2 - 0.12), (CAGE_H + 0.5) / 2, 0.1);
      jamb.castShadow = true;
      arch.add(jamb);
    }

    const lintel = new THREE.Mesh(lintelGeo, mats.darkIron);
    lintel.position.set(0, CAGE_H + 0.3, 0.12);
    lintel.castShadow = true;
    arch.add(lintel);

    const plate = makePlate(1.6, 0.32, (ctx, text) => {
      clear(ctx);
      ctx.fillStyle = 'rgba(14,14,16,0.94)';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.strokeStyle = '#b8912e';
      ctx.lineWidth = 4;
      ctx.strokeRect(4, 4, ctx.canvas.width - 8, ctx.canvas.height - 8);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const [head, tail] = text.split('|');
      ctx.fillStyle = '#f4dc9a';
      ctx.font = 'bold 34px "Courier New", monospace';
      ctx.fillText(head ?? '', ctx.canvas.width / 2, ctx.canvas.height * 0.36);
      ctx.fillStyle = '#bfae84';
      ctx.font = '19px "Courier New", monospace';
      ctx.fillText(tail ?? '', ctx.canvas.width / 2, ctx.canvas.height * 0.72);
    });
    plate.text = {
      uz: `${deck.name.uz}|${deck.sub.uz}`,
      en: `${deck.name.en}|${deck.sub.en}`,
      ru: `${deck.name.ru}|${deck.sub.ru}`,
    };
    plate.repaint();

    const plateMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.6, 0.32),
      new THREE.MeshStandardMaterial({
        map: plate.texture,
        transparent: true,
        emissive: 0x3a2f12,
        emissiveIntensity: 0.75,
        roughness: 0.6,
        depthWrite: false,
      }),
    );
    plateMesh.position.set(0, CAGE_H + 0.3, 0.32);
    arch.add(plateMesh);

    for (const sx of [-1, 1]) {
      const housing = new THREE.Mesh(housingGeo, mats.brass);
      housing.position.set(sx * (cell / 2 - 0.02), 1.35, 0.06);
      arch.add(housing);

      const lampMat = new THREE.MeshStandardMaterial({
        color: 0x141414,
        emissive: 0xff3b1e,
        emissiveIntensity: 3,
        roughness: 0.35,
      });
      const lamp = new THREE.Mesh(lampGeo, lampMat);
      lamp.position.set(sx * (cell / 2 - 0.02), 1.35, 0.14);
      arch.add(lamp);
      landingLamps.push(lampMat);
    }

    // Dark plate behind the cage so the shaft reads as a closed box.
    const back = new THREE.Mesh(shaftPanelGeo, mats.rust);
    back.position.set(cx, (CAGE_H + 0.7) / 2 + deck.height, (deck.cageRow - 0.5) * cell + 0.1);
    back.receiveShadow = true;
    scene.add(back);
  });

  /* ---- State ----------------------------------------------------------- */
  let deck = ELEVATOR_START_DECK;
  let phase: Phase = 'idle';
  let gateFold = 0; // 0 = wide open, 1 = shut
  let timer = 0;
  let travelTarget = deck;
  let swapped = false;
  let powered = false;
  let clock = 0;
  /** The deck a ride started from, so the cage can be climbed from it. */
  let originDeck = deck;
  const centre = new THREE.Vector3(cx, 1.55 + decks[deck].height, decks[deck].cageRow * cell);

  // `gateFold` is 0 when the gate is wide open and 1 when it is shut. The
  // leaves are hinged on the outer frame and built spanning one span inward,
  // so their scale *is* the fold: 1 reaches the middle, 0.05 is fully stacked
  // against the jamb.
  const applyGate = (): void => {
    const fold = Math.max(0.05, gateFold);
    leftLeaf.scale.x = fold;
    rightLeaf.scale.x = fold;
  };
  applyGate();

  const litLamp = (index: number): void => {
    for (const b of buttons) {
      const here = b.deckIndex === index;
      b.lampMat.emissive.set(here ? 0xffc24a : 0x000000);
      b.lampMat.emissiveIntensity = here ? 2.6 : 0;
      const mat = b.cap.material as THREE.MeshStandardMaterial;
      mat.emissive.set(here ? 0x6b4a12 : 0x000000);
      mat.emissiveIntensity = here ? 0.9 : 0;
    }
  };

  const flashButton = (index: number, colour: number, intensity: number, ms: number): void => {
    const b = buttons.find((x) => x.deckIndex === index);
    if (!b) return;
    b.lampMat.emissive.set(colour);
    b.lampMat.emissiveIntensity = intensity;
    window.setTimeout(() => litLamp(deck), ms);
  };

  const setDeck = (index: number, hooks?: ElevatorHooks): void => {
    deck = index;
    travelTarget = index;
    cage.position.z = decks[index].cageRow * cell;
    cage.position.y = decks[index].height;
    centre.set(cx, 1.55 + decks[index].height, decks[index].cageRow * cell);
    litLamp(index);
    carPlate.text = decks[index].label;
    carPlate.repaint();
    hooks?.onTeleport?.(index);
  };

  const handle: ElevatorHandle = {
    cage,
    gate,
    panel,
    buttons,
    plates,
    landingLamps,
    centre,
    get deck() {
      return deck;
    },
    get moving() {
      return phase !== 'idle';
    },
    get powered() {
      return powered;
    },
    setDeck,
    currentDeck: () => deck,
    // The cage counts as locked for the whole ride, doors still opening
    // included: that is exactly when the panel should stay down.
    isLocked: () => phase !== 'idle',
    isInside: (pos: THREE.Vector3): boolean =>
      Math.abs(pos.x - centre.x) < 2.0 && Math.abs(pos.z - centre.z) < 2.2,
    startTravel(index: number, hooks: ElevatorHooks): boolean {
      if (phase !== 'idle') return false;
      if (index === deck) {
        flashButton(index, 0xffc24a, 1.6, 280);
        return false;
      }
      travelTarget = index;
      originDeck = deck;
      swapped = false;
      timer = 0;
      phase = 'closing';
      hooks.onGateClank?.();
      flashButton(index, 0xff8a3d, 2.4, 460);
      return true;
    },
    setPower(on: boolean): void {
      if (on === powered) return;
      powered = on;
      for (const mat of landingLamps) mat.emissive.set(on ? 0x46ff7a : 0xff3b1e);
    },
    relocalize(): void {
      for (const p of plates) p.repaint();
    },
    update(dt: number, hooks: ElevatorHooks): void {
      clock += dt;

      if (phase === 'closing') {
        timer += dt;
        gateFold = Math.min(1, timer / CLOSE_TIME);
        applyGate();
        if (timer >= CLOSE_TIME) {
          phase = 'moving';
          timer = 0;
          hooks.onMotorStart?.();
        }
        return;
      }

      if (phase === 'moving') {
        timer += dt;

        if (!swapped && timer >= SWAP_AT) {
          swapped = true;
          setDeck(travelTarget, hooks);
          hooks.flicker?.(0.08);
          hooks.shake?.(0.34, 0.4);
        }

        // The climb happens across the whole ride, so the roof reads as the
        // top of a building rather than a room behind another door.
        const climb = Math.min(1, timer / TRAVEL_TIME);
        cage.position.y = THREE.MathUtils.lerp(
          decks[originDeck].height,
          decks[travelTarget].height,
          climb,
        );
        centre.y = 1.55 + cage.position.y;

        const arc = Math.max(0, 1 - Math.abs(timer / TRAVEL_TIME - 0.5) * 2);
        hooks.shake?.(0.06 + arc * 0.1, dt * 2.2);

        const brownout =
          timer < SWAP_AT
            ? THREE.MathUtils.lerp(1, 0.04, timer / SWAP_AT)
            : THREE.MathUtils.lerp(0.04, 1, Math.min(1, (timer - SWAP_AT) / 0.7));

        for (let i = 0; i < bulbs.length; i++) {
          const mat = bulbs[i].material as THREE.MeshStandardMaterial;
          const strobe =
            timer < SWAP_AT + 0.3
              ? 0.3 + Math.random() * 0.7
              : 0.88 + Math.sin(clock * 7 + i * 1.7) * 0.12;
          const level = brownout * strobe;
          mat.emissiveIntensity = 0.12 + level * 1.35;
          bulbLights[i].intensity = 0.15 + level * 1.55;
        }
        hooks.flicker?.(0.35 + brownout * 0.7);

        const rock = 1 - Math.abs(timer / TRAVEL_TIME - 0.5);
        cage.rotation.z = Math.sin(clock * 2.4) * 0.022 * rock;
        cage.rotation.x = Math.sin(clock * 1.9 + 0.8) * 0.016 * rock;

        if (timer >= TRAVEL_TIME) {
          phase = 'opening';
          timer = 0;
          cage.rotation.set(0, 0, 0);
          hooks.onDing?.();
          hooks.shake?.(0.16, 0.32);
          hooks.flicker?.(1.1);
        }
        return;
      }

      if (phase === 'opening') {
        timer += dt;
        gateFold = 1 - Math.min(1, timer / OPEN_TIME);
        applyGate();
        if (timer >= OPEN_TIME) {
          gateFold = 0;
          applyGate();
          phase = 'idle';
          hooks.onArrive?.(deck);
        }
        return;
      }

      // Idle: the Edison bulbs breathe and every so often spit.
      for (let i = 0; i < bulbs.length; i++) {
        const mat = bulbs[i].material as THREE.MeshStandardMaterial;
        const spit = Math.random() < 0.012 ? 0.3 : 0;
        const level = Math.max(spit, 0.9 + Math.sin(clock * 2.1 + i * 1.7) * 0.08);
        mat.emissiveIntensity = 0.12 + level * 1.3;
        bulbLights[i].intensity = 0.2 + level * 1.4;
      }
      cage.rotation.z *= 0.9;
      cage.rotation.x *= 0.9;
    },
  };

  setDeck(deck);
  return handle;
}

/** Repaints every elevator label in the active language. */
export function relocalizeElevator(handle: ElevatorHandle): void {
  handle.relocalize();
}

/* ------------------------------------------------------------------ bits */

function clear(ctx: CanvasRenderingContext2D): void {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function createLatticeWall(
  iron: THREE.Material,
  span: number,
  height: number,
  pitch: number,
): THREE.Group {
  const group = new THREE.Group();
  const columns = Math.max(3, Math.round(span / pitch));

  for (let i = 0; i <= columns; i++) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.045, height, 0.045), iron);
    bar.position.set((i / columns - 0.5) * span, height / 2, 0);
    bar.castShadow = true;
    group.add(bar);
  }

  const rows = Math.max(2, Math.round(height / 0.55));
  for (let i = 0; i <= rows; i++) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(span, 0.04, 0.04), iron);
    bar.position.set(0, (i / rows) * height, 0);
    group.add(bar);
  }

  for (const dir of [1, -1]) {
    const brace = new THREE.Mesh(
      new THREE.BoxGeometry(Math.hypot(span, height) * 0.98, 0.03, 0.03),
      iron,
    );
    brace.position.set(0, height / 2, 0);
    brace.rotation.z = dir * Math.atan2(height, span);
    group.add(brace);
  }
  return group;
}

/**
 * One accordion leaf, built spanning local x 0..span with its hinge at the
 * frame so `scale.x` folds it. `mirror` builds it the other way round.
 */
function createGateLeaf(
  iron: THREE.Material,
  darkIron: THREE.Material,
  span: number,
  height: number,
  pitch: number,
  mirror: boolean,
): THREE.Group {
  const leaf = new THREE.Group();
  const dir = mirror ? -1 : 1;

  for (const y of [0.06, height]) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(span, 0.06, 0.06), darkIron);
    bar.position.set(dir * span * 0.5, y, 0);
    leaf.add(bar);
  }

  const columns = Math.max(4, Math.round(span / pitch));
  for (let i = 0; i <= columns; i++) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.035, height - 0.08, 0.035), iron);
    bar.position.set(dir * (i / columns) * span, height / 2, 0);
    leaf.add(bar);
  }

  // Zig-zag lattice: the signature of an accordion gate.
  for (let i = 0; i < columns; i++) {
    const x0 = (i / columns) * span;
    const x1 = ((i + 1) / columns) * span;
    const bar = new THREE.Mesh(
      new THREE.BoxGeometry(Math.hypot(x1 - x0, height - 0.2) * 1.02, 0.028, 0.028),
      iron,
    );
    bar.position.set(dir * (x0 + x1) * 0.5, height / 2, 0);
    bar.rotation.z = dir * Math.atan2(height - 0.2, x1 - x0) * (i % 2 === 0 ? 1 : -1);
    leaf.add(bar);
  }
  return leaf;
}

function makePlate(
  width: number,
  height: number,
  draw: (ctx: CanvasRenderingContext2D, text: string) => void,
): ElevatorPlate {
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(64, Math.round(width * 240));
  canvas.height = Math.max(40, Math.round(height * 240));
  const ctx = canvas.getContext('2d');
  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 4;

  const plate: ElevatorPlate = {
    texture,
    text: { uz: '', en: '', ru: '' },
    repaint: () => {
      if (!ctx) return;
      draw(ctx, L(plate.text));
      texture.needsUpdate = true;
    },
  };
  plate.repaint();
  return plate;
}
