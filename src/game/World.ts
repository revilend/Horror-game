import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {
  createBatteryMesh,
  createBoardedDoor,
  createCrowbarMesh,
  createDesk,
  createDentalChair,
  createElectroChair,
  createFuseMesh,
  createHospitalBed,
  createInstrumentTray,
  createIVStand,
  createPillBottles,
  createIsolationBed,
  createKitchenCounter,
  createLockerProp,
  createMorgueDrawer,
  createMonitor,
  createOperatingTable,
  createShowerStall,
  createSink,
  createVialMesh,
  createTrashBin,
  createWheelchairProp,
  createBookshelf,
  createCouch,
} from './PuzzleProps';
import {
  addBloodPuddle,
  addCeilingDuct,
  addPatientChart,
  addPillBottleCluster,
  addSeveredCable,
  addSteamPipeRun,
  addTippedInstrumentTray,
} from './SetDressing';
import { L, t, type Localized } from './i18n';
import { WALL_TEXTS } from './notes';
import { ROOM_META, type RoomMeta } from './rooms';
import {
  ELEVATOR_COL,
  ELEVATOR_DECKS,
  createElevator,
  type ElevatorHandle,
} from './Elevator';
import {
  createDoorChain,
  createHideLocker,
  createSearchDesk,
  createSwingDoor,
  seatDoor,
  type DoorChain,
  type DoorFixture,
  type DrawerFixture,
  type DrawerLoot,
  type LockerFixture,
} from './Fixtures';
import {
  createInteractable,
  interactableRadius,
  makeInteractableMaterials,
  placeInteractable,
  type Interactable,
  type InteractableKind,
  type LootId,
} from './Interactables';
import {
  createAsphaltTexture,
  createBloodTextTexture,
  createBloodTexture,
  createCeilingTexture,
  createChartTexture,
  createDirtTexture,
  createDoorTexture,
  createDuctTexture,
  createFloorTexture,
  createOuterWallTexture,
  createWallTexture,
  paintBloodText,
} from './Textures';

const CELL = 4; // cell size in world units
const WALL_H = 3.5;
const WALL_THICK = 0.2; // wall slab thickness
const EYE_HEIGHT = 1.7;

/* =========================================================================
 * THE COMPOUND
 *
 * 28 columns x 58 rows. The top 15 rows are the grounds the hospital sits in
 * - a fenced yard with a courtyard, a car park, a guard post, the electrical
 * substation, a graveyard and a crematorium - and the bottom 43 rows are the
 * building itself: six levels (ground ward, surgical floor, basement, second
 * floor, deep basement and the third floor) joined by three vertical
 * corridors and four horizontal halls. Lowercase letters are the original
 * hospital; everything above the ground floor uses uppercase letters.
 *
 *   '#' solid wall / fence   '.' open ground or corridor
 *   letter  room floor       '+' doorway or gate opening
 *
 * The grounds are the only way out: the reception door that used to end the
 * run now drops you into the courtyard, and the run only finishes at the
 * main gate in the north fence.
 *
 * Column roles (shared by both halves):
 *   0 border | 1 corridor | 2-7 room | 8 wall | 9 corridor | 10-16 room
 *   17 wall | 18 corridor | 19-24 room | 25 wall | 26 corridor | 27 border
 * ========================================================================= */

const LAYOUT = [
  // ---- The grounds -----------------------------------------------------
  '#############+##############',
  '#..........................#',
  '#.#######.###+####.#######.#',
  '#.#ttttt#.#uuuuuu#.#vvvvv#.#',
  '#.#ttttt#.#uuuuuu#.#vvvvv#.#',
  '#.#ttttt#.#uuuuuu#.#vvvvv#.#',
  '#.###+###.###+####.###+###.#',
  '#..........................#',
  '#.###+###.###+####.###+###.#',
  '#.#yyyyy#.#xxxxxx#.#zzzzz#.#',
  '#.#yyyyy#.#xxxxxx#.#zzzzz#.#',
  '#.#yyyyy#.#xxxxxx#.#zzzzz#.#',
  '#.###+###.###+####.###+###.#',
  '#wwwwwwwwwwwwwwwwwwwwwwwwww#',
  '#wwwwwwwwwwwwwwwwwwwwwwwwww#',
  // ---- The hospital ----------------------------------------------------
  '##+#########################',
  '#aaa#.#bb#cc#.#dd#ee#.#ffff#',
  '#aaa+.+bb#cc+.+dd#ee+.+ffff#',
  '#aaa#.#bb#cc#.#dd#ee#.#ffff#',
  '##+##.#+##+##.#+##+##.##+###',
  '#..........................#',
  '##+##.#+##+##.#+##+##.##+###',
  '#ggg#.#hh#ii#.#jj#kk#.#mmmm#',
  '#ggg+.+hh#ii+.+jj#kk+.+mmmm#',
  '#ggg#.#hh#ii#.#jj#kk#.#mmmm#',
  '#ggg+.+hh#ii+.+jj#kk+.+mmmm#',
  '#ggg#.#hh#ii#.#jj#kk#.#mmmm#',
  '##+##.#+##+##.#+##+##.##+###',
  '#..........................#',
  '##+##.#+##+##.#+##+##.##+###',
  '#nnn#.#oo#pp#.#qq#rr#.#ssss#',
  '#nnn+.+oo#pp+.+qq#rr+.+ssss#',
  '#nnn#.#oo#pp#.#qq#rr#.#ssss#',
  // The wall row between the lobby and the surgery floor. The sealing pass
  // below walls every opening in it, so the only cell left is the 2F lift
  // recess - which is the one way up.
  '#####+###############+######',
  // ---- Second floor ----------------------------------------------------
  '#..........................#',
  '##+##.#+##+##.#+##+##.##+###',
  '#AAA#.#BB#CC#.#DD#EE#.#FFFF#',
  '#AAA#.#BB#CC#.#DD#EE#.#FFFF#',
  '#AAA#.#BB#CC#.#DD#EE#.#FFFF#',
  '##+##.#+##+##.#+##+##.##+###',
  '#GGG#.#HH#II#.#JJ#KK#.#LLLL#',
  '#GGG#.#HH#II#.#JJ#KK#.#LLLL#',
  '#GGG#.#HH#II#.#JJ#KK#.#LLLL#',
  '##+##.#+##+##.#+##+##.##+###',
  // ---- Deep basement ---------------------------------------------------
  '#..........................#',
  '##+##.#+##+##.#+##+##.##+###',
  '#MMM#.#NN#OO#.#PP#QQ#.#RRRR#',
  '#MMM#.#NN#OO#.#PP#QQ#.#RRRR#',
  '#MMM#.#NN#OO#.#PP#QQ#.#RRRR#',
  '##+##.#+##+##.#+##+##.##+###',
  '#..........................#',
  // ---- Third floor -----------------------------------------------------
  '##+##.#+##+##.#+##+##.##+###',
  '#SSS#.#TT#UU#.#VV#WW#.#XXXX#',
  '#SSS#.#TT#UU#.#VV#WW#.#XXXX#',
  '#SSS#.#TT#UU#.#VV#WW#.#XXXX#',
  '##+##.#+##+##.#+##+##.##+###',
  '#..........................#',
  '############################',
];

/** Rows 0..14 are the grounds; 15..51 are the hospital. */
export const OUTDOOR_ROWS = 15;
const OUTDOOR_END = OUTDOOR_ROWS - 1;

/**
 * Which elevator deck a row belongs to: an index into ELEVATOR_DECKS.
 *
 * The asylum is laid out as bands of rows, one band per floor, so the row a
 * player is standing on is the whole answer. Returns -1 when off the map.
 */
export function floorAt(row: number): number {
  if (row < 0 || row >= ROWS) return -1;
  if (row < OUTDOOR_ROWS) return 4; // rooftop: the grounds and the escape gate
  // The wall row between two floors belongs to the floor whose lift cage is
  // recessed into it - 33, 43 and 49 are those three cage rows - because that
  // recess is the only cell in the row anyone can stand in, and standing in
  // the mouth of the cage should name the floor you are stepping onto.
  if (row <= 32) return 1; // 1F clinic lobby
  if (row <= 42) return 2; // 2F patient wards (row 33 is the 2F cage recess)
  if (row <= 48) return 0; // basement (row 43 is the B1 cage recess)
  return 3; // director wing (row 49 is the 3F cage recess)
}

/** Localized name of the deck with that index, for the HUD. */
export function floorName(floor: number): string {
  const deck = ELEVATOR_DECKS[floor];
  return deck ? L(deck.name) : '';
}


const COLS = 28;
const ROWS = 58;

/**
 * The moving parts: the lift, the doors, the desk drawers and the lockers.
 * They are built inside the level builder but handed back through the wrapper
 * below, which keeps the builder's return literal free of live objects.
 */
interface WorldFixtures {
  elevator: ElevatorHandle;
  elevatorCol: number;
  doors: DoorFixture[];
  desks: DrawerFixture[];
  lockers: LockerFixture[];
  /** Everything the action button can work that is not a door or a drawer. */
  interactables: Interactable[];
  /** Doors held shut by a lock the player has to beat. */
  chainedDoors: DoorChain[];
}

/**
 * Everything the level builder lays out on its own. The elevator's fixtures
 * and the per-floor patrol spawns are left out: both are worked out by
 * `buildWorld` from the finished grid instead.
 */
type BaseMapInfo = Omit<MapInfo, keyof WorldFixtures | 'deckPatrolSpawns'>;

/** Handed from buildWorldBase up to buildWorld while a world is being built. */
let pendingFixtures: WorldFixtures | null = null;

/* -------------------------------------------------------------------------
 * SEALED FLOORS
 *
 * The asylum is one flat grid, so "a floor" is a band of rows and the only
 * thing holding the bands apart is wall. The plan was drawn with the bands
 * joined anyway - open corridor columns running straight through them, and the
 * back doorways of the upper rooms opening into the floor below - which is why
 * the whole building read as one endless hallway: you could walk from the
 * lobby to the director's office without ever touching the lift.
 *
 * So the bands are sealed here, once, at module load, rather than by editing
 * the plan above by hand: every row that ends a floor becomes solid wall, and
 * the elevator's recess is cut back open afterwards, in the grid. That cut is
 * the only way off a floor.
 *
 * The grounds are deliberately NOT sealed. The reception door drops the player
 * into the courtyard and the run finishes at the main gate, and that one walk
 * over the yard is the whole ending of the game.
 * ---------------------------------------------------------------------- */

/** True for a row inside the building rather than out in the grounds. */
function isBuildingRow(row: number): boolean {
  return row >= OUTDOOR_ROWS && row < ROWS && floorAt(row) !== 4;
}

/**
 * The row that ends each floor: the wall row between it and the floor beyond.
 * Found from the same row-to-deck mapping the HUD uses, so adding a floor to
 * the plan seals it without anyone having to remember this list.
 */
const FLOOR_BOUNDARY_ROWS: number[] = [];
for (let row = OUTDOOR_ROWS; row < ROWS - 1; row++) {
  if (!isBuildingRow(row) || !isBuildingRow(row + 1)) continue;
  if (floorAt(row) === floorAt(row + 1)) continue;
  FLOOR_BOUNDARY_ROWS.push(row);
}

for (const row of FLOOR_BOUNDARY_ROWS) {
  LAYOUT[row] = LAYOUT[row].replace(/[^#]/g, '#');
}

/** First and last row of a deck, so "this floor only" can be reasoned about. */
function deckRows(deckIndex: number): { first: number; last: number } {
  let first = -1;
  let last = -1;
  for (let row = 0; row < ROWS; row++) {
    if (floorAt(row) !== deckIndex) continue;
    if (first === -1) first = row;
    last = row;
  }
  return { first, last };
}

/** Room letters that sit outside the building's walls. */
const OUTDOOR_ROOM_CHARS = new Set(['t', 'u', 'v', 'w', 'x', 'y', 'z']);

export interface RoomInfo extends RoomMeta {
  index: number;
  /**
   * The LAYOUT character for this room. Stable across languages, which is what
   * makes it the right key for lookups like the scripted-scares table.
   */
  key: string;
  row1: number;
  row2: number;
  col1: number;
  col2: number;
  outdoor: boolean;
}

/* -------------------------------------------------------------------------
 * Entity placements, hand-checked against LAYOUT above. Everything below is
 * in absolute grid rows (0 = the north fence).
 * ---------------------------------------------------------------------- */

/** Reception, behind the door that used to be the finish line. */
const PLAYER_SPAWN = { row: 28, col: 10 };
const MONSTER_SPAWN = { row: 17, col: 25 };
/** The hospital's reception door - now a checkpoint, not the ending. */
const EXIT_CELL = { row: 16, col: 2 };
const BREAKER_CELL = { row: 24, col: 25 };

/** The main gate in the north fence - the real ending. */
const GATE_CELL = { row: 0, col: 13 };
/** Substation: powers the gate motor. */
const SUBSTATION_CELL = { row: 4, col: 5 };
/** Guard post: holds the gate keycard. */
const CARD_CELL = { row: 10, col: 5 };

const KEY_CELLS = [
  { row: 24, col: 7 }, // OPERATSIYA XONASI
  { row: 31, col: 8 }, // MORGNIY
  { row: 31, col: 16 }, // DUSH XONASI - behind the boarded door
];

/**
 * Desks the player can search.
 *
 * The first three sit exactly on KEY_CELLS: the ward keys are no longer lying
 * on the floor, they are shut in a drawer, so they have to be found by working
 * the desk. The rest hold supplies. `yaw` picks which way the drawer faces.
 */
const SEARCH_DESK_CELLS: Array<{ row: number; col: number; yaw: number; loot: DrawerLoot }> = [
  { row: 24, col: 7, yaw: 0, loot: 'key' },
  { row: 31, col: 8, yaw: Math.PI / 2, loot: 'key' },
  { row: 31, col: 16, yaw: 0, loot: 'key' },
  { row: 23, col: 8, yaw: -Math.PI / 2, loot: 'battery' },
  // Store room 2 and Room 102: inside the room, never in the doorway, so a
  // desk can never narrow an entrance the player has to squeeze through.
  { row: 41, col: 24, yaw: 0, loot: 'bottle' },
  { row: 52, col: 8, yaw: Math.PI, loot: 'battery' },
  { row: 31, col: 24, yaw: 0, loot: 'bottle' },
];

/**
 * Steel wardrobes to hide in. Each sits against a corridor wall, `dz`/`dx`
 * being the offset from the cell centre that tucks it against that wall.
 */
const LOCKER_CELLS: Array<{ row: number; col: number; dz: number; dx: number; yaw: number }> = [
  { row: 20, col: 4, dz: -1.35, dx: 0, yaw: 0 },
  { row: 20, col: 12, dz: -1.35, dx: 0, yaw: 0 },
  { row: 28, col: 22, dz: -1.35, dx: 0, yaw: 0 },
  { row: 34, col: 6, dz: -1.35, dx: 0, yaw: 0 },
  { row: 44, col: 12, dz: -1.35, dx: 0, yaw: 0 },
  { row: 50, col: 8, dz: -1.35, dx: 0, yaw: 0 },
  { row: 7, col: 11, dz: -1.35, dx: 0, yaw: 0 },
  { row: 1, col: 8, dz: -1.35, dx: 0, yaw: 0 },
];

/* -------------------------------------------------------------------------
 * INTERACTIVE PROPS
 *
 * Every anchor below is one of the cells the builder already validates - a
 * desk, a locker, a key, the breaker - so the density of the world follows the
 * density of the rooms that were hand-checked. The exact cell is worked out at
 * build time: the placer walks outward from the anchor to the first cell a
 * prop can legally stand in and refuses to reuse a cell, which is what keeps a
 * prop out of a wall and out of a doorway.
 *
 * Kinds marked `wall` are mounted flat against the nearest wall; the rest
 * stand on the floor.
 * ---------------------------------------------------------------------- */

interface PropPlan {
  kind: InteractableKind;
  anchor: { row: number; col: number };
  /** Yaw in radians, for the few props that care which way they face. */
  yaw?: number;
  /** What is inside, if anything. */
  loot?: LootId;
  /** Shut until the CCTV room is up: the pharmacy cabinets. */
  locked?: boolean;
}

/** Kinds that belong on a wall rather than in the middle of a room. */
const WALL_KINDS = new Set<InteractableKind>([
  'switch',
  'mirror',
  'lightbox',
  'extinguisher',
  'phone',
]);

const PROP_PLAN: PropPlan[] = [
  /* ---- 1F: clinic lobby, reception, pharmacy, store room ---------------- */
  { kind: 'switch', anchor: { row: 28, col: 10 } },
  { kind: 'switch', anchor: { row: 24, col: 25 } },
  { kind: 'switch', anchor: { row: 20, col: 12 } },
  { kind: 'cabinet', anchor: { row: 23, col: 8 } },
  { kind: 'cabinet', anchor: { row: 31, col: 24 }, loot: 'bottle' },
  { kind: 'cabinet', anchor: { row: 18, col: 23 }, loot: 'acid', locked: true },
  { kind: 'cabinet', anchor: { row: 31, col: 16 }, loot: 'battery' },
  { kind: 'bin', anchor: { row: 20, col: 4 } },
  { kind: 'bin', anchor: { row: 31, col: 8 } },
  { kind: 'bin', anchor: { row: 26, col: 14 } },
  { kind: 'sink', anchor: { row: 28, col: 22 } },
  { kind: 'sink', anchor: { row: 22, col: 18 } },
  { kind: 'radio', anchor: { row: 24, col: 7 } },
  { kind: 'monitor', anchor: { row: 25, col: 25 }, yaw: Math.PI },
  { kind: 'cot', anchor: { row: 30, col: 12 } },
  { kind: 'lightbox', anchor: { row: 29, col: 26 } },
  { kind: 'extinguisher', anchor: { row: 21, col: 10 } },
  // Crash carts live in corridors, where a braced one can actually be rolled
  // into a doorway and made to mean something.
  { kind: 'cart', anchor: { row: 20, col: 6 } },
  { kind: 'cart', anchor: { row: 28, col: 20 } },
  // Wall telephones: one per floor, on the wall beside a doorway.
  { kind: 'phone', anchor: { row: 20, col: 18 } },
  // Ampoules, racked on a trolley top in the treatment rooms.
  { kind: 'vialrack', anchor: { row: 22, col: 12 } },
  { kind: 'vialrack', anchor: { row: 30, col: 22 } },

  /* ---- 2F: surgical ward, Room 404, operating theatre ------------------- */
  { kind: 'switch', anchor: { row: 34, col: 6 } },
  { kind: 'switch', anchor: { row: 41, col: 24 } },
  { kind: 'cot', anchor: { row: 36, col: 6 } },
  { kind: 'mirror', anchor: { row: 37, col: 8 } },
  { kind: 'cabinet', anchor: { row: 38, col: 20 }, loot: 'battery' },
  { kind: 'cabinet', anchor: { row: 41, col: 10 }, loot: 'bottle' },
  { kind: 'bin', anchor: { row: 35, col: 12 } },
  { kind: 'bin', anchor: { row: 39, col: 26 } },
  { kind: 'sink', anchor: { row: 40, col: 14 } },
  { kind: 'radio', anchor: { row: 41, col: 22 } },
  { kind: 'lightbox', anchor: { row: 37, col: 20 } },
  { kind: 'extinguisher', anchor: { row: 35, col: 18 } },
  { kind: 'cart', anchor: { row: 34, col: 12 } },
  { kind: 'cart', anchor: { row: 40, col: 22 } },
  { kind: 'phone', anchor: { row: 40, col: 8 } },
  { kind: 'vialrack', anchor: { row: 37, col: 14 } },
  { kind: 'vialrack', anchor: { row: 42, col: 6 } },

  /* ---- B1: boiler room, steam, morgue ---------------------------------- */
  { kind: 'valve', anchor: { row: 45, col: 6 } },
  { kind: 'valve', anchor: { row: 46, col: 18 } },
  { kind: 'valve', anchor: { row: 47, col: 24 } },
  { kind: 'lightbox', anchor: { row: 46, col: 12 } },
  { kind: 'freezer', anchor: { row: 45, col: 20 }, loot: 'boltcutters', yaw: Math.PI },
  { kind: 'bin', anchor: { row: 47, col: 10 } },
  { kind: 'switch', anchor: { row: 44, col: 12 } },
  { kind: 'sink', anchor: { row: 46, col: 4 } },
  { kind: 'cot', anchor: { row: 48, col: 16 } },
  { kind: 'cabinet', anchor: { row: 44, col: 20 }, loot: 'bottle' },
  { kind: 'radio', anchor: { row: 48, col: 22 } },
  { kind: 'cart', anchor: { row: 44, col: 8 } },
  { kind: 'phone', anchor: { row: 46, col: 22 } },
  { kind: 'vialrack', anchor: { row: 45, col: 12 } },

  /* ---- 3F: director's wing -------------------------------------------- */
  { kind: 'switch', anchor: { row: 52, col: 6 } },
  { kind: 'switch', anchor: { row: 55, col: 20 } },
  { kind: 'safe', anchor: { row: 53, col: 12 }, loot: 'ignition' },
  { kind: 'cabinet', anchor: { row: 54, col: 18 }, loot: 'battery' },
  { kind: 'bin', anchor: { row: 52, col: 20 } },
  { kind: 'sink', anchor: { row: 53, col: 26 } },
  { kind: 'radio', anchor: { row: 54, col: 8 } },
  { kind: 'extinguisher', anchor: { row: 56, col: 10 } },
  { kind: 'monitor', anchor: { row: 50, col: 8 }, yaw: Math.PI },
  { kind: 'cart', anchor: { row: 50, col: 18 } },
  { kind: 'phone', anchor: { row: 50, col: 6 } },
  { kind: 'vialrack', anchor: { row: 53, col: 18 } },

  /* ---- The grounds: the courtyard, the driveway and the van ----------- */
  { kind: 'van', anchor: { row: 13, col: 20 }, yaw: Math.PI },
  { kind: 'bin', anchor: { row: 8, col: 4 } },
  { kind: 'radio', anchor: { row: 3, col: 10 } },
  { kind: 'extinguisher', anchor: { row: 6, col: 22 } },
];

/* -------------------------------------------------------------------------
 * PUZZLE ITEMS
 *
 * Two of the run's goals are gated on something you have to find and carry:
 *   - the generator breaker is missing its fuse, which is in the store room;
 *   - the shower room's door is nailed shut and the key is behind it, so the
 *     crowbar from the boiler room has to come first.
 * Both items are placed in rooms that are reachable before anything is
 * unlocked, and buildWorld asserts that after the door is boarded up.
 * ---------------------------------------------------------------------- */

/** Store room, ground floor: the breaker's missing fuse. */
const FUSE_CELL = { row: 18, col: 23 };
/** Boiler room: the second cell for the generator panel. */
const SPARE_FUSE_CELL = { row: 46, col: 8 };
/** Boiler room, deep basement: pries the boarded door open. */
const CROWBAR_CELL = { row: 47, col: 3 };
/** Spare torch cells, scattered where a torch would have been left. */
const BATTERY_CELLS = [
  { row: 17, col: 13 }, // first corridor
  { row: 23, col: 15 }, // X-ray room
  { row: 37, col: 15 }, // children's ward, second floor
];
/** Empty glass vials lying around - throw them to lure the creature away. */
const VIAL_CELLS = [
  { row: 18, col: 21 }, // near the store room
  { row: 20, col: 8 },  // second corridor
  { row: 24, col: 11 }, // intensive therapy
  { row: 17, col: 19 }, // X-ray anteroom
  { row: 31, col: 9 },  // archive
  { row: 7, col: 14 },  // courtyard, by the parking lot
];
/**
 * The shower room's doorways are boarded shut until the crowbar turns up.
 * The room holds one of the three keys, so it is a real gate rather than
 * decoration.
 */
const JAMMED_ROOM = 'q'; // DUSH XONASI

const NOTE_CELLS = [
  // Inside
  { row: 31, col: 7 }, // MORGNIY            1
  { row: 16, col: 24 }, // OMBORXONA          2
  { row: 17, col: 18 }, // XONA 202           3
  { row: 24, col: 10 }, // INTENSIV TERAPIYA  4
  { row: 23, col: 15 }, // RENTGEN XONASI     5
  { row: 17, col: 7 }, // TELEFON MARKAZI    6
  { row: 31, col: 10 }, // ARXIV             7
  { row: 24, col: 1 }, // KUTUBXONA          8
  // Outside
  { row: 4, col: 20 }, // QABRISTON          9
  { row: 10, col: 22 }, // KREMATORIY        10
  { row: 10, col: 13 }, // AVTOTURARGOH      11
  // Second floor & deep basement - the story keeps going down
  { row: 37, col: 2 }, // BOSH SHIFOKOR XONASI  12
  { row: 37, col: 7 }, // KIR YUVISH XONASI     13
  { row: 37, col: 15 }, // BOLALAR PALATASI     14
  { row: 47, col: 15 }, // LABORATORIYA 7       15
  { row: 47, col: 2 }, // QOZONXONA            16
  { row: 47, col: 24 }, // MORGNIY 2            17
  // Third floor - the last of the story is up here
  { row: 53, col: 2 }, // IZOLYATOR            18
  { row: 53, col: 7 }, // ELEKTROTERAPIYA      19
  { row: 53, col: 15 }, // GIDROTERAPIYA       20
];

/** Blood scrawls. `face` is the side of the cell the wall is on. */
/** Lamp posts along the fence line; the substation turns them on. */
const LAMP_CELLS = [
  { row: 1, col: 1 },
  { row: 1, col: 26 },
  { row: 7, col: 9 },
  { row: 7, col: 18 },
  { row: 13, col: 1 },
  { row: 13, col: 26 },
];

/**
 * Fixed hiding spots — gurneys and wheelchairs placed at strategic positions.
 * The player can crouch behind these to become invisible to the monster.
 * Each cell gets a visible prop and a world-space position stored in MapInfo.
 */
const HIDING_CELLS = [
  // Hospital corridors
  { row: 17, col: 5 },  // first corridor, near reception
  { row: 17, col: 21 }, // first corridor, east side
  { row: 20, col: 9 },  // second corridor, central
  { row: 20, col: 18 }, // second corridor, mid-east
  { row: 28, col: 5 },  // third corridor, near basement
  { row: 28, col: 21 }, // third corridor, east side
  // Hospital rooms
  { row: 17, col: 13 }, // first corridor, door to XONA 202
  { row: 24, col: 13 }, // surgical floor, near operatsiya
  // Outdoor grounds
  { row: 1, col: 5 },   // near perimeter fence, west
  { row: 1, col: 22 },  // near graveyard
  { row: 7, col: 9 },   // near guard post corridor
  { row: 13, col: 15 }, // courtyard center
  // Second floor & deep basement
  { row: 34, col: 13 }, // second floor, main hall
  { row: 44, col: 5 },  // deep basement, west hall
  { row: 44, col: 21 }, // deep basement, east hall
  { row: 50, col: 13 }, // deep basement, south hall
  { row: 56, col: 5 },  // third floor, west hall
  { row: 56, col: 21 }, // third floor, east hall
];

/** Corpses, by room letter and how many. */
const CORPSE_ROOMS: Array<{ room: string; count: number }> = [
  { room: 'o', count: 3 },
  { room: 'h', count: 2 },
  { room: 'i', count: 2 },
  { room: 'q', count: 2 },
  { room: 'p', count: 1 },
  { room: 'e', count: 1 },
  { room: 'x', count: 2 },
  { room: 'v', count: 1 },
  { room: 'u', count: 1 },
  // Second floor & deep basement
  { room: 'P', count: 3 },
  { room: 'D', count: 2 },
  { room: 'R', count: 2 },
  { room: 'H', count: 1 },
  { room: 'F', count: 1 },
  { room: 'M', count: 1 },
  { room: 'S', count: 2 },
  { room: 'U', count: 1 },
];

export interface MapInfo {
  grid: number[][];
  /** Touchable props: taps, switches, cabinets, valves, freezers, the van. */
  interactables: Interactable[];
  /** Doors chained shut: a padlock for the acid, a chain for the cutters. */
  chainedDoors: DoorChain[];
  /**
   * The raw ASCII plan, unmodified. The collision grid only distinguishes
   * "wall" from "walkable", so the minimap reads this to tell a corridor from
   * a ward and an outdoor letter from an indoor one.
   */
  plan: string[];
  walls: THREE.Mesh[];
  floor: THREE.Mesh;
  ceiling: THREE.Mesh;
  keyPositions: THREE.Vector3[];
  notePositions: THREE.Vector3[];
  exitPosition: THREE.Vector3;
  monsterSpawn: THREE.Vector3;
  playerSpawn: THREE.Vector3;
  exitDoor: THREE.Mesh;
  exitLock: THREE.Mesh;
  breakerPosition: THREE.Vector3;
  breakerMesh: THREE.Group;
  props: THREE.Group;
  fluorescentMaterials: THREE.MeshStandardMaterial[];
  rooms: RoomInfo[];
  roomIndexByCell: Int16Array;
  cols: number;
  rows: number;
  /** The main gate in the north fence - the finish line. */
  gatePosition: THREE.Vector3;
  gateLeaves: THREE.Object3D[];
  gateLock: THREE.Mesh;
  /** Substation lever that powers the gate motor. */
  substationPosition: THREE.Vector3;
  substationMesh: THREE.Group;
  /** Gate keycard pickup, one entry per card. */
  cardPositions: THREE.Vector3[];
  /** Where the outdoor lamp posts stand (the game hangs lights on them). */
  outdoorLampPositions: THREE.Vector3[];
  /** Lamp-head material, switched on with the substation. */
  lampMaterials: THREE.MeshStandardMaterial[];
  /** Positions where the player can hide from the monster while crouching. */
  hidingSpots: THREE.Vector3[];
  /**
   * Upright obstacles the player must walk around.
   * The decorative meshes are merged into one draw call, so they cannot be
   * raycast against - these circles stand in for the furniture instead.
   */
  colliders: Array<{ x: number; z: number; r: number }>;
  /**
   * The blood scrawls, with their texture and their untranslated text. Blood
   * writing is baked into a canvas, so switching language repaints these
   * canvases in place rather than rebuilding the level.
   */
  wallTexts: WallTextTexture[];

  /** Vintage 5-stop iron-cage elevator. */
  elevator: ElevatorHandle;
  /** Column the shaft is cut into; every landing shares it. */
  elevatorCol: number;
  /** One swinging leaf per doorway, with the box that blocks it while shut. */
  doors: DoorFixture[];
  /** Desks whose drawers slide open, three of them holding a ward key. */
  desks: DrawerFixture[];
  /** Steel wardrobes the player can climb into and hide. */
  lockers: LockerFixture[];
  /**
   * Where Dr Aris is put down when the player steps out onto each deck, one
   * entry per deck. Sealed floors mean the creature cannot follow on foot, so
   * the game brings it through after the player instead.
   */
  deckPatrolSpawns: THREE.Vector3[];
}

/** One wall scrawl: the texture to repaint and the text it should carry. */
export interface WallTextTexture {
  texture: THREE.CanvasTexture;
  text: Localized;
}

/**
 * Repaints every wall scrawl in the current language.
 * Called by the game when the player changes language mid-session.
 */
export function relocalizeWallTexts(map: MapInfo): void {
  for (const entry of map.wallTexts) {
    const canvas = entry.texture.image as HTMLCanvasElement | undefined;
    const ctx = canvas?.getContext?.('2d');
    if (!canvas || !ctx) continue;
    // Same canvas, same texture object: the merged prop meshes keep pointing at
    // it, so nothing in the scene graph has to be touched.
    paintBloodText(ctx, canvas.width, canvas.height, L(entry.text));
    entry.texture.needsUpdate = true;
  }
}

const ROOM_CHAR = /^[a-zA-Z]$/;

interface ParsedPlan {
  grid: number[][];
  roomIndexByCell: Int16Array;
  rooms: RoomInfo[];
  indexByChar: Map<string, number>;
}

/**
 * Turns the ASCII plan into a collision grid plus a room lookup.
 * Throws loudly if the plan is malformed - a broken map that silently loads
 * is far worse to debug than a hard failure here.
 */
function parseLayout(): ParsedPlan {
  if (LAYOUT.length !== ROWS) {
    throw new Error(`Layout has ${LAYOUT.length} rows, expected ${ROWS}`);
  }
  LAYOUT.forEach((line, index) => {
    if (line.length !== COLS) {
      throw new Error(`Layout row ${index} is ${line.length} chars, expected ${COLS}`);
    }
  });

  const grid: number[][] = LAYOUT.map((line) =>
    Array.from(line, (char) => (char === '#' ? 0 : 1))
  );
  const roomIndexByCell = new Int16Array(ROWS * COLS).fill(-1);

  const bounds = new Map<string, { row1: number; row2: number; col1: number; col2: number }>();
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const char = LAYOUT[row][col];
      if (!ROOM_CHAR.test(char)) continue;

      const existing = bounds.get(char);
      if (!existing) {
        bounds.set(char, { row1: row, row2: row, col1: col, col2: col });
      } else {
        existing.row1 = Math.min(existing.row1, row);
        existing.row2 = Math.max(existing.row2, row);
        existing.col1 = Math.min(existing.col1, col);
        existing.col2 = Math.max(existing.col2, col);
      }
    }
  }

  const order = Array.from(bounds.keys()).sort();
  const rooms: RoomInfo[] = [];
  const indexByChar = new Map<string, number>();

  order.forEach((char, index) => {
    const meta = ROOM_META[char];
    if (!meta) throw new Error(`Room '${char}' has no ROOM_META entry`);
    const box = bounds.get(char)!;
    indexByChar.set(char, index);
    rooms.push({ index, key: char, ...meta, ...box, outdoor: OUTDOOR_ROOM_CHARS.has(char) });
  });

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const char = LAYOUT[row][col];
      const index = indexByChar.get(char);
      roomIndexByCell[row * COLS + col] = index === undefined ? -1 : index;
    }
  }

  return { grid, roomIndexByCell, rooms, indexByChar };
}

/** Every cell a walker can reach from one doorway, as a flat bitmask. */
function floodFrom(grid: number[][], row: number, col: number): Uint8Array {
  const seen = new Uint8Array(ROWS * COLS);
  if (!isOpen(grid, row, col)) return seen;

  const queue: number[] = [row * COLS + col];
  seen[queue[0]] = 1;

  let head = 0;
  while (head < queue.length) {
    const current = queue[head++];
    const atRow = Math.floor(current / COLS);
    const atCol = current % COLS;
    for (const [dr, dc] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const nr = atRow + dr;
      const nc = atCol + dc;
      if (!isOpen(grid, nr, nc)) continue;
      const next = nr * COLS + nc;
      if (seen[next]) continue;
      seen[next] = 1;
      queue.push(next);
    }
  }

  return seen;
}

/**
 * The plan is hand-authored, so every interesting cell must be provably
 * reachable with the doors that are actually in place. A sealed-off room - or
 * an unreachable exit - would otherwise be a silent, unwinnable bug.
 *
 * Reachability used to mean "from the spawn", which stopped being the same
 * thing the moment the floors were sealed: the crowbar is in the basement and
 * the keys are in the lobby, and the only thing joining them is the cage. So
 * every landing is walked in turn, and the union of what they reach is what
 * the placements are checked against.
 */
function assertReachable(grid: number[][], required: Array<[number, number, string]>): void {
  if (!isOpen(grid, PLAYER_SPAWN.row, PLAYER_SPAWN.col)) {
    throw new Error(`Player spawn (${PLAYER_SPAWN.row},${PLAYER_SPAWN.col}) is inside a wall`);
  }

  const reachable = new Uint8Array(ROWS * COLS);
  for (const deck of ELEVATOR_DECKS) {
    if (!isOpen(grid, deck.cageRow, ELEVATOR_COL)) {
      throw new Error(`Lift landing ${deck.id} is walled in at (${deck.cageRow},${ELEVATOR_COL})`);
    }
    const seen = floodFrom(grid, deck.cageRow, ELEVATOR_COL);
    for (let i = 0; i < seen.length; i++) if (seen[i]) reachable[i] = 1;
  }

  for (const [row, col, label] of required) {
    if (!reachable[row * COLS + col]) {
      throw new Error(`${label} at (${row},${col}) cannot be reached from any lift landing`);
    }
  }
}

/** The plan is hand-authored, so every entity cell is checked before use. */
function placeCell(grid: number[][], row: number, col: number, value: number, label: string): void {
  if (row < 0 || row >= ROWS || col < 0 || col >= COLS) {
    throw new Error(`${label} at (${row},${col}) is outside the plan`);
  }
  if (grid[row][col] === 0) throw new Error(`${label} at (${row},${col}) is inside a wall`);
  grid[row][col] = value;
}

function isOpen(grid: number[][], row: number, col: number): boolean {
  if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return false;
  return grid[row][col] !== 0;
}

/**
 * The invariant everything else rests on: nobody walks from one floor to
 * another. Checked by flooding each landing and watching which bands the water
 * spills into, because one stray doorway is exactly how the building turned
 * back into a single long hallway before.
 *
 * The grounds are exempt, and only they: the reception door lets out into the
 * courtyard, and the run ends at the gate up the yard.
 */
function assertFloorsSealed(grid: number[][]): void {
  for (let index = 0; index < ELEVATOR_DECKS.length; index++) {
    const deck = ELEVATOR_DECKS[index];
    if (deck.id === 'roof') continue;

    const seen = floodFrom(grid, deck.cageRow, ELEVATOR_COL);
    for (let row = 0; row < ROWS; row++) {
      const other = floorAt(row);
      if (other === index || other === 4) continue;
      for (let col = 0; col < COLS; col++) {
        if (!seen[row * COLS + col]) continue;
        const name = ELEVATOR_DECKS[other]?.id ?? String(other);
        throw new Error(`Floor ${deck.id} is still joined to ${name} at (${row},${col})`);
      }
    }
  }
}

/**
 * Where the creature waits on each floor: the last cell its own floor's flood
 * reaches from the lift, i.e. the furthest walk from the doors.
 *
 * Far on purpose. Sealed floors mean Dr Aris cannot follow the player on foot
 * any more, so the game brings him over after the lift ride - and stepping out
 * of the cage should never open straight onto a face.
 */
function deckPatrolSpawn(grid: number[][], deckIndex: number): THREE.Vector3 {
  const deck = ELEVATOR_DECKS[deckIndex];
  const { first, last } = deckRows(deckIndex);
  const startRow = Math.min(Math.max(deck.cageRow, first), last);
  const start = startRow * COLS + ELEVATOR_COL;

  const seen = new Uint8Array(ROWS * COLS);
  seen[start] = 1;
  const queue: number[] = [start];
  let furthest = start;

  for (let head = 0; head < queue.length; head++) {
    const current = queue[head];
    furthest = current;
    const row = Math.floor(current / COLS);
    const col = current % COLS;
    for (const [dr, dc] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const nr = row + dr;
      const nc = col + dc;
      // Confined to the deck's own rows: the yard, the courtyard and the
      // floors below are all reachable from some landings and not from others.
      if (nr < first || nr > last) continue;
      if (!isOpen(grid, nr, nc)) continue;
      const next = nr * COLS + nc;
      if (seen[next]) continue;
      seen[next] = 1;
      queue.push(next);
    }
  }

  return cellToWorld(Math.floor(furthest / COLS), furthest % COLS);
}

/**
 * Every doorway ('+') that touches a given room, i.e. the room's ways in.
 * Derived from the plan so boarding a room up keeps working when the layout
 * changes.
 */
function findRoomDoors(
  layout: string[],
  rooms: RoomInfo[],
  roomChar: string
): Array<{ row: number; col: number }> {
  const room = rooms.find((entry) => entry.key === roomChar);
  if (!room) throw new Error(`Cannot find room '${roomChar}' to board up`);

  const out: Array<{ row: number; col: number }> = [];
  for (let row = room.row1 - 1; row <= room.row2 + 1; row++) {
    if (row < 0 || row >= layout.length) continue;
    for (let col = room.col1 - 1; col <= room.col2 + 1; col++) {
      if (col < 0 || col >= COLS) continue;
      if (layout[row][col] !== '+') continue;
      const touches = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ].some(([dr, dc]) => {
        const r = row + dr;
        const c = col + dc;
        return r >= room.row1 && r <= room.row2 && c >= room.col1 && c <= room.col2;
      });
      if (touches) out.push({ row, col });
    }
  }
  return out;
}

/** Check if a world position is walkable (not inside a wall). */
export function isWalkable(grid: number[][], wx: number, wz: number): boolean {
  const col = Math.round(wx / CELL);
  const row = Math.round(wz / CELL);
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return false;
  return grid[row][col] !== 0;
}

/** Get grid coordinates from world position */
export function worldToGrid(wx: number, wz: number): { row: number; col: number } {
  return { row: Math.round(wz / CELL), col: Math.round(wx / CELL) };
}

/** True when a world position sits in the grounds north of the building. */
export function isOutdoor(wx: number, wz: number): boolean {
  return Math.round(wz / CELL) <= OUTDOOR_END;
}

export function cellToWorld(row: number, col: number, y = EYE_HEIGHT): THREE.Vector3 {
  return new THREE.Vector3(col * CELL, y, row * CELL);
}

/**
 * Lays out St Jude's Asylum and wires up its vintage cage elevator.
 */
export function buildWorld(scene: THREE.Scene): MapInfo {
  pendingFixtures = null;
  const base = buildWorldBase(scene);
  const fixtures = pendingFixtures;
  pendingFixtures = null;
  if (!fixtures) throw new Error('buildWorld: the fixtures were never constructed');
  // Assigned rather than spread: the builder's return literal is large, and a
  // plain union of the two keeps the shape obvious at the call site.
  const map = base as MapInfo;
  Object.assign(map, fixtures);

  // One landing place per floor for the creature, worked out from the grid
  // once: the furthest cell of its own floor from the lift doors. Far on
  // purpose - stepping out of the cage should never open onto a face.
  map.deckPatrolSpawns = ELEVATOR_DECKS.map((_, index) => deckPatrolSpawn(map.grid, index));

  return map;
}

/** Builds the level itself; `buildWorld` attaches the lift to the result. */
function buildWorldBase(scene: THREE.Scene): BaseMapInfo {
  const { grid, roomIndexByCell, rooms, indexByChar } = parseLayout();

  // Entity cells override the base terrain values (still walkable)
  const CELL_KEY = 2;
  const CELL_EXIT = 3;
  const CELL_MONSTER = 4;
  const CELL_NOTE = 5;
  const CELL_BREAKER = 6;
  const CELL_CARD = 7;
  const CELL_SUBSTATION = 8;
  const CELL_ELEVATOR = 9;

  // --- Cut the elevator shaft openings ------------------------------------
  // Every deck recesses the cage into one wall cell directly above its
  // corridor, so the doorway into the lift lands in the same place on every
  // floor. Opening the cell here, before the walls are built, leaves a niche
  // with three walls and an open front where the gate is.
  // NOTE: cage rows are walls (#) in the plan, so we write directly into the
  // grid rather than going through placeCell, which rejects wall cells.
  for (const deck of ELEVATOR_DECKS) {
    const r = deck.cageRow;
    const c = ELEVATOR_COL;
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) {
      throw new Error(`Elevator shaft ${deck.id} at (${r},${c}) is outside the plan`);
    }
    grid[r][c] = CELL_ELEVATOR;
  }
  assertReachable(
    grid,
    ELEVATOR_DECKS.map((deck): [number, number, string] => [
      deck.cageRow,
      ELEVATOR_COL,
      `Elevator shaft ${deck.id}`,
    ]),
  );

  assertReachable(grid, [
    [MONSTER_SPAWN.row, MONSTER_SPAWN.col, 'Monster spawn'],
    [EXIT_CELL.row, EXIT_CELL.col, 'Exit'],
    [BREAKER_CELL.row, BREAKER_CELL.col, 'Breaker'],
    [GATE_CELL.row, GATE_CELL.col, 'Main gate'],
    [SUBSTATION_CELL.row, SUBSTATION_CELL.col, 'Substation'],
    [CARD_CELL.row, CARD_CELL.col, 'Gate keycard'],
    [FUSE_CELL.row, FUSE_CELL.col, 'Breaker fuse'],
    [CROWBAR_CELL.row, CROWBAR_CELL.col, 'Crowbar'],
    ...BATTERY_CELLS.map((cell): [number, number, string] => [cell.row, cell.col, 'Spare battery']),
    ...LAMP_CELLS.map((cell): [number, number, string] => [cell.row, cell.col, 'Lamp post']),
    ...KEY_CELLS.map((cell, i): [number, number, string] => [cell.row, cell.col, `Key ${i + 1}`]),
    ...NOTE_CELLS.map((cell, i): [number, number, string] => [cell.row, cell.col, `Note ${i + 1}`]),
    ...WALL_TEXTS.map((d): [number, number, string] => [d.row, d.col, 'Wall scrawl']),
    ...CORPSE_ROOMS.map((entry): [number, number, string] => {
      const index = indexByChar.get(entry.room);
      const room = index === undefined ? undefined : rooms[index];
      if (!room) throw new Error(`Corpse room '${entry.room}' does not exist in the plan`);
      return [room.row1, room.col1, `Corpse room ${entry.room}`];
    }),
  ]);

  placeCell(grid, MONSTER_SPAWN.row, MONSTER_SPAWN.col, CELL_MONSTER, 'Monster spawn');
  placeCell(grid, EXIT_CELL.row, EXIT_CELL.col, CELL_EXIT, 'Exit');
  placeCell(grid, BREAKER_CELL.row, BREAKER_CELL.col, CELL_BREAKER, 'Breaker');
  placeCell(grid, SUBSTATION_CELL.row, SUBSTATION_CELL.col, CELL_SUBSTATION, 'Substation');
  placeCell(grid, CARD_CELL.row, CARD_CELL.col, CELL_CARD, 'Gate keycard');
  KEY_CELLS.forEach((cell, i) => placeCell(grid, cell.row, cell.col, CELL_KEY, `Key ${i + 1}`));
  NOTE_CELLS.forEach((cell, i) => placeCell(grid, cell.row, cell.col, CELL_NOTE, `Note ${i + 1}`));

  // --- Board up the shower room -------------------------------------------
  // Doors are found from the plan rather than hard-coded, so the puzzle keeps
  // working if the layout is edited.
  const boardedCells = findRoomDoors(LAYOUT, rooms, JAMMED_ROOM);
  if (boardedCells.length === 0) {
    throw new Error(`Room '${JAMMED_ROOM}' has no doorways to board up`);
  }
  for (const cell of boardedCells) grid[cell.row][cell.col] = 0;
  // The crowbar has to be reachable *with the door shut*, or the run is
  // unwinnable. Failing loudly here beats shipping a dead end.
  assertReachable(grid, [[CROWBAR_CELL.row, CROWBAR_CELL.col, 'Crowbar (door boarded up)']]);

  // The niches are cut, so this is the first moment the sealing can be asked
  // whether it actually sealed anything.
  assertFloorsSealed(grid);

  // --- Materials ---------------------------------------------------------
  const wallTexture = createWallTexture();
  const wallMat = new THREE.MeshStandardMaterial({
    map: wallTexture,
    bumpMap: wallTexture,
    bumpScale: 0.06,
    roughness: 0.95,
    metalness: 0.04,
  });

  const outerTexture = createOuterWallTexture();
  outerTexture.repeat.set(2, 2);
  const outerWallMat = new THREE.MeshStandardMaterial({
    map: outerTexture,
    bumpMap: outerTexture,
    bumpScale: 0.1,
    roughness: 1,
    metalness: 0.02,
  });

  const hospitalFloorTex = createFloorTexture();
  hospitalFloorTex.repeat.set(COLS, ROWS - OUTDOOR_ROWS);
  const floorMat = new THREE.MeshStandardMaterial({ map: hospitalFloorTex, roughness: 1, metalness: 0 });

  const ceilingTex = createCeilingTexture();
  ceilingTex.repeat.set(COLS / 2, (ROWS - OUTDOOR_ROWS) / 2);
  const ceilingMat = new THREE.MeshStandardMaterial({ map: ceilingTex, roughness: 1, metalness: 0 });

  const asphaltTex = createAsphaltTexture();
  asphaltTex.repeat.set(COLS / 2, OUTDOOR_ROWS / 2);
  const asphaltMat = new THREE.MeshStandardMaterial({ map: asphaltTex, roughness: 1, metalness: 0.02 });

  const dirtTex = createDirtTexture();
  dirtTex.repeat.set(3, 1);
  const dirtMat = new THREE.MeshStandardMaterial({ map: dirtTex, roughness: 1, metalness: 0 });

  const doorMat = new THREE.MeshStandardMaterial({ map: createDoorTexture(), roughness: 0.55, metalness: 0.5 });

  const lockMat = new THREE.MeshStandardMaterial({
    color: 0x2a2a2a,
    emissive: 0xff1a1a,
    emissiveIntensity: 1.4,
    metalness: 0.9,
    roughness: 0.25,
  });

  const boneMat = new THREE.MeshStandardMaterial({ color: 0xb9b3a3, roughness: 0.85, metalness: 0.05 });
  const metalMat = new THREE.MeshStandardMaterial({ color: 0x2f3134, roughness: 0.45, metalness: 0.75 });
  const rustMat = new THREE.MeshStandardMaterial({ color: 0x4b3220, roughness: 0.92, metalness: 0.35 });
  const fabricMat = new THREE.MeshStandardMaterial({ color: 0x25303a, roughness: 1, metalness: 0 });
  const fleshMat = new THREE.MeshStandardMaterial({ color: 0x5c4a44, roughness: 0.9, metalness: 0 });
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x4a3826, roughness: 1, metalness: 0 });
  const stoneMat = new THREE.MeshStandardMaterial({ color: 0x53534e, roughness: 0.95, metalness: 0.03 });
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x0d1116,
    roughness: 0.22,
    metalness: 0.6,
    transparent: true,
    opacity: 0.65,
  });
  const paintMat = new THREE.MeshStandardMaterial({ color: 0x8d1f1f, roughness: 0.7, metalness: 0.2 });
  const lampMat = new THREE.MeshStandardMaterial({
    color: 0x14161a,
    emissive: 0xffd9a0,
    emissiveIntensity: 0.05,
    roughness: 0.5,
    metalness: 0.4,
  });

  // --- Elevator materials ------------------------------------------------
  const darkMetalMat = new THREE.MeshStandardMaterial({
    color: 0x151618,
    roughness: 0.55,
    metalness: 0.85,
  });
  const railMat = new THREE.MeshStandardMaterial({
    color: 0x2a2c30,
    roughness: 0.5,
    metalness: 0.9,
  });
  const brassMat = new THREE.MeshStandardMaterial({
    color: 0x9a7b33,
    roughness: 0.35,
    metalness: 0.82,
  });
  const amberMat = new THREE.MeshStandardMaterial({
    color: 0xffb347,
    emissive: 0xff8a1a,
    emissiveIntensity: 0,
    roughness: 0.45,
    metalness: 0.25,
  });
  const redMat = new THREE.MeshStandardMaterial({
    color: 0x8a1a1a,
    emissive: 0xff2a14,
    emissiveIntensity: 0.4,
    roughness: 0.5,
    metalness: 0.4,
  });
  const greenMat = new THREE.MeshStandardMaterial({
    color: 0x1a4a2a,
    emissive: 0x33ff66,
    emissiveIntensity: 0.25,
    roughness: 0.5,
    metalness: 0.3,
  });
  const lightMat = new THREE.MeshStandardMaterial({
    color: 0xfff3d0,
    emissive: 0xffd37a,
    emissiveIntensity: 0,
    roughness: 0.5,
    metalness: 0,
    transparent: true,
    opacity: 0.8,
  });

  // --- Item materials -----------------------------------------------------
  // Pickups have to read instantly through the fog, so each one carries a
  // little emissive so it glints when the torch sweeps past.
  const fuseMat = new THREE.MeshStandardMaterial({
    color: 0x1a1c1f,
    emissive: 0xd88a1a,
    emissiveIntensity: 0.9,
    roughness: 0.5,
    metalness: 0.4,
  });
  const fuseGlassMat = new THREE.MeshStandardMaterial({
    color: 0x9fd4e8,
    emissive: 0x2ec8ff,
    emissiveIntensity: 1.4,
    roughness: 0.18,
    metalness: 0.1,
    transparent: true,
    opacity: 0.72,
  });
  const crowbarMat = new THREE.MeshStandardMaterial({
    color: 0x8a2f1c,
    emissive: 0x481208,
    emissiveIntensity: 0.55,
    roughness: 0.55,
    metalness: 0.55,
  });
  const batteryMat = new THREE.MeshStandardMaterial({
    color: 0x1d2126,
    emissive: 0x0f3a1e,
    emissiveIntensity: 0.7,
    roughness: 0.5,
    metalness: 0.5,
  });

  const bloodMat = new THREE.MeshStandardMaterial({
    map: createBloodTexture(),
    transparent: true,
    opacity: 0.9,
    roughness: 1,
    metalness: 0,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
  });

  const noteMat = new THREE.MeshStandardMaterial({
    color: 0xd8d2bd,
    emissive: 0x8a7a4a,
    emissiveIntensity: 0.45,
    roughness: 0.9,
    metalness: 0,
    side: THREE.DoubleSide,
  });

  const keyMat = new THREE.MeshStandardMaterial({
    color: 0xffc23a,
    emissive: 0xffa000,
    emissiveIntensity: 1.2,
    roughness: 0.25,
    metalness: 0.9,
  });

  const cardMat = new THREE.MeshStandardMaterial({
    color: 0x2fd0ff,
    emissive: 0x00a2ff,
    emissiveIntensity: 1.6,
    roughness: 0.3,
    metalness: 0.5,
  });

  const tubeMat = new THREE.MeshStandardMaterial({
    color: 0x101010,
    emissive: 0xfff2d2,
    emissiveIntensity: 0.12,
    roughness: 0.4,
  });

  // --- Set-dressing materials (industrial & medical detail pass) ----------
  // Ribbed galvanised ducting: brushed metal, so it catches the torch beam.
  const ductMat = new THREE.MeshStandardMaterial({
    map: createDuctTexture(),
    color: 0x9aa0a6,
    roughness: 0.42,
    metalness: 0.78,
  });
  // Loose patient charts scattered across the floors.
  const chartMat = new THREE.MeshStandardMaterial({
    map: createChartTexture(),
    roughness: 0.95,
    metalness: 0,
    side: THREE.DoubleSide,
  });
  // Wet blood pools the flashlight reflects off — glossy, unlike the decals.
  const bloodPuddleMat = new THREE.MeshStandardMaterial({
    color: 0x3a0407,
    roughness: 0.07,
    metalness: 0.45,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -3,
  });
  // Dark brown glass for the medicine bottles.
  const bottleMat = new THREE.MeshStandardMaterial({
    color: 0x4a2a18,
    roughness: 0.25,
    metalness: 0.1,
    transparent: true,
    opacity: 0.8,
  });

  const breakerMat = new THREE.MeshStandardMaterial({
    color: 0x3a3f45,
    roughness: 0.5,
    metalness: 0.7,
  });

  const leverMat = new THREE.MeshStandardMaterial({
    color: 0x8a2020,
    emissive: 0x550000,
    emissiveIntensity: 0.6,
    roughness: 0.6,
    metalness: 0.3,
  });

  const props = new THREE.Group();
  const colliders: Array<{ x: number; z: number; r: number }> = [];
  let tubeCount = 0;

  // --- Ground ------------------------------------------------------------
  const groundGeo = new THREE.PlaneGeometry(COLS * CELL, OUTDOOR_ROWS * CELL);
  const outdoorFloor = new THREE.Mesh(groundGeo, asphaltMat);
  outdoorFloor.rotation.x = -Math.PI / 2;
  outdoorFloor.position.set((COLS * CELL) / 2 - CELL / 2, 0, (OUTDOOR_ROWS * CELL) / 2 - CELL / 2);
  outdoorFloor.receiveShadow = true;
  scene.add(outdoorFloor);

  // The courtyard itself is packed dirt, not tarmac
  const courtyard = new THREE.Mesh(new THREE.PlaneGeometry(26 * CELL, 2 * CELL), dirtMat);
  courtyard.rotation.x = -Math.PI / 2;
  courtyard.position.set(13.5 * CELL, 0.01, 13.5 * CELL);
  courtyard.receiveShadow = true;
  scene.add(courtyard);

  const floorGeo = new THREE.PlaneGeometry(COLS * CELL, (ROWS - OUTDOOR_ROWS) * CELL);
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set((COLS * CELL) / 2 - CELL / 2, 0, ((OUTDOOR_ROWS + ROWS - 1) / 2) * CELL);
  floor.receiveShadow = true;
  scene.add(floor);

  // --- Ceiling (the building only - the grounds are open sky) ------------
  const ceiling = new THREE.Mesh(floorGeo, ceilingMat);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.set(floor.position.x, WALL_H, floor.position.z);
  scene.add(ceiling);

  // --- Walls & perimeter fence -------------------------------------------
  const wallGeo = new THREE.BoxGeometry(CELL, WALL_H, WALL_THICK);
  const wallGeoSide = new THREE.BoxGeometry(WALL_THICK, WALL_H, CELL);
  const indoorWallGeometries: THREE.BufferGeometry[] = [];
  const outdoorWallGeometries: THREE.BufferGeometry[] = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (!isOpen(grid, row, col)) continue;

      const cx = col * CELL;
      const cz = row * CELL;
      // A wall is textured after the space it faces: open ground gets the
      // weathered concrete perimeter, indoor cells get the peeling plaster.
      const bucket = row <= OUTDOOR_END ? outdoorWallGeometries : indoorWallGeometries;

      const sides = [
        { dr: -1, dc: 0, geo: wallGeo, pos: [cx, WALL_H / 2, cz - CELL / 2 + WALL_THICK / 2] as const },
        { dr: 1, dc: 0, geo: wallGeo, pos: [cx, WALL_H / 2, cz + CELL / 2 - WALL_THICK / 2] as const },
        { dr: 0, dc: -1, geo: wallGeoSide, pos: [cx - CELL / 2 + WALL_THICK / 2, WALL_H / 2, cz] as const },
        { dr: 0, dc: 1, geo: wallGeoSide, pos: [cx + CELL / 2 - WALL_THICK / 2, WALL_H / 2, cz] as const },
      ];

      for (const side of sides) {
        if (isOpen(grid, row + side.dr, col + side.dc)) continue;
        const geometry = side.geo.clone();
        geometry.translate(side.pos[0], side.pos[1], side.pos[2]);
        bucket.push(geometry);
      }
    }
  }

  const walls: THREE.Mesh[] = [];
  const addWallMesh = (geometries: THREE.BufferGeometry[], material: THREE.Material): void => {
    const merged = mergeGeometries(geometries, false);
    if (merged) {
      const mesh = new THREE.Mesh(merged, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      walls.push(mesh);
      return;
    }
    for (const geometry of geometries) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      walls.push(mesh);
    }
  };
  addWallMesh(indoorWallGeometries, wallMat);
  addWallMesh(outdoorWallGeometries, outerWallMat);

  // --- Fixtures: doors, desk drawers and lockers --------------------------
  // Declared up here because the lift registration below hands all of them to
  // the game in one object. They are filled in further down, once the doorway
  // pass has worked out which cells are doorways.
  const UP = new THREE.Vector3(0, 1, 0);
  const doors: DoorFixture[] = [];
  const desks: DrawerFixture[] = [];
  const lockers: LockerFixture[] = [];
  const interactables: Interactable[] = [];
  const chainedDoors: DoorChain[] = [];

  // Doors get their own material rather than sharing the merged prop bucket:
  // they move, so they can never be baked into the static draw call.
  const doorLeafMat = new THREE.MeshStandardMaterial({
    map: createDoorTexture(),
    roughness: 0.72,
    metalness: 0.28,
  });

  // The reception door and the main gate are driven by the game itself, and
  // the shower room's ways in are already boarded shut.
  const managedDoorways = new Set<string>([
    `${GATE_CELL.row}:${GATE_CELL.col}`,
    `${EXIT_CELL.row}:${EXIT_CELL.col}`,
  ]);
  for (const cell of boardedCells) managedDoorways.add(`${cell.row}:${cell.col}`);

  // --- The vintage iron-cage elevator -------------------------------------
  // One cage, five landings. The cage sits in the niche cut above each deck's
  // corridor and is re-seated at the destination part-way through the ride,
  // so a single mesh serves the whole building.
  const elevator = createElevator(
    scene,
    { iron: metalMat, darkIron: darkMetalMat, brass: brassMat, rust: rustMat },
    CELL,
  );
  pendingFixtures = {
    elevator,
    elevatorCol: ELEVATOR_COL,
    doors,
    desks,
    lockers,
    interactables,
    chainedDoors,
  };

  // The cage is solid: the player walks in through the gate and nowhere else.
  // Three circles stand in for its back and corners, since the decorative
  // meshes are merged and cannot be raycast against.
  for (const deck of ELEVATOR_DECKS) {
    const ecx = ELEVATOR_COL * CELL;
    const ecz = deck.cageRow * CELL;
    colliders.push({ x: ecx - 1.7, z: ecz, r: 0.5 });
    colliders.push({ x: ecx + 1.7, z: ecz, r: 0.5 });
    colliders.push({ x: ecx, z: ecz - 1.85, r: 1.05 });
  }

  // --- Hang every doorway ------------------------------------------------
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (LAYOUT[row][col] !== '+') continue;
      const vertical =
        (isOpen(grid, row - 1, col) || isOpen(grid, row + 1, col)) &&
        !(isOpen(grid, row, col - 1) || isOpen(grid, row, col + 1));
      addDoorFrame(props, col * CELL, row * CELL, vertical, metalMat);

      if (managedDoorways.has(`${row}:${col}`)) continue;

      const door = createSwingDoor(CELL, doorLeafMat, metalMat, vertical);
      door.row = row;
      door.col = col;
      // A leaf is built spanning local +x from its hinge, so the base yaw is
      // whatever turns that axis across the opening: 0 for a north-south
      // passage, -90 degrees for an east-west one.
      seatDoor(door, col * CELL, row * CELL, CELL, vertical ? 0 : -Math.PI / 2);
      scene.add(door.hinge);
      doors.push(door);
    }
  }

  // Desks. The drawer slides along the desk's own +z, so the yaw alone decides
  // which way it opens.
  const deskCellIndex = new Map<string, number>();
  for (const spec of SEARCH_DESK_CELLS) {
    const built = createSearchDesk(woodMat, metalMat);
    built.group.position.set(spec.col * CELL, 0, spec.row * CELL);
    built.group.rotation.y = spec.yaw;
    scene.add(built.group);

    deskCellIndex.set(`${spec.row}:${spec.col}`, desks.length);
    desks.push({
      row: spec.row,
      col: spec.col,
      group: built.group,
      drawer: built.drawer,
      slide: 0,
      target: 0,
      opened: false,
      travel: new THREE.Vector3(0, 0, 1),
      centre: new THREE.Vector3(spec.col * CELL, 1.0, spec.row * CELL),
      loot: null,
      lootKind: spec.loot,
      lootIndex: -1,
    });
    colliders.push({ x: spec.col * CELL, z: spec.row * CELL, r: 0.8 });
  }

  // Supplies in the ordinary drawers. The ward keys are not built here: World
  // still lays them out as floor pickups (KEY_CELLS is validated for
  // reachability), and the game moves them into the matching drawer and
  // re-scans the level at start-up. Doing it in one place keeps the two from
  // ever disagreeing about where a key is.
  for (const desk of desks) {
    if (desk.lootKind === 'key') continue;
    const loot =
      desk.lootKind === 'battery'
        ? createBatteryMesh(batteryMat, metalMat)
        : createVialMesh(glassMat, metalMat);
    loot.position.set(0, 0.58, 0.05);
    loot.userData.isDrawerLoot = true;
    desk.drawer.add(loot);
    desk.loot = loot;
  }

  // Lockers, tucked against the wall so the corridor stays walkable.
  for (const spec of LOCKER_CELLS) {
    const built = createHideLocker(metalMat, rustMat);
    const x = spec.col * CELL + spec.dx;
    const z = spec.row * CELL + spec.dz;
    built.group.position.set(x, 0, z);
    built.group.rotation.y = spec.yaw;
    scene.add(built.group);

    const inside = built.inside.clone().applyAxisAngle(UP, spec.yaw).add(built.group.position);
    const outside = built.outside.clone().applyAxisAngle(UP, spec.yaw).add(built.group.position);

    lockers.push({
      row: spec.row,
      col: spec.col,
      group: built.group,
      door: built.door,
      open: 0,
      target: 0,
      opened: false,
      inside,
      // Facing out of the vents: the player's forward is -z at yaw 0.
      yaw: spec.yaw + Math.PI,
      outside,
      centre: new THREE.Vector3(x, 1.1, z),
    });
    colliders.push({ x, z, r: 0.6 });
  }

  // --- Interactive props -------------------------------------------------
  // Built here, after the grid is final and after every doorway has been
  // hung, because a prop needs both: the grid to find a cell it can stand in,
  // and the door list to know which cells are passages.
  const propMats = makeInteractableMaterials();
  const propCells = new Set<string>();
  for (const spec of PROP_PLAN) {
    const cell = nearestPropCell(grid, spec.anchor, propCells, WALL_KINDS.has(spec.kind));
    if (!cell) continue;
    propCells.add(`${cell.row}:${cell.col}`);

    const prop = createInteractable(spec.kind, propMats);
    const x = cell.col * CELL;
    const z = cell.row * CELL;
    placeInteractable(prop, x, z, spec.yaw ?? 0, floorAt(cell.row), spec.loot ?? null, spec.locked ?? false);
    if (WALL_KINDS.has(spec.kind)) mountOnWall(prop, cell, grid, CELL);
    scene.add(prop.group);
    interactables.push(prop);
    colliders.push({ x, z, r: interactableRadius(prop) });
  }

  // A twelve-volt battery out in the courtyard: the ambulance's missing cell.
  const shedCell = nearestPropCell(grid, { row: 9, col: 20 }, propCells);
  if (shedCell) {
    propCells.add(`${shedCell.row}:${shedCell.col}`);
    const cellBattery = createBatteryMesh(batteryMat, metalMat);
    cellBattery.userData.itemId = 'battery';
    cellBattery.userData.pickupTag = 'shedBattery';
    cellBattery.position.set(shedCell.col * CELL, 0.35, shedCell.row * CELL);
    scene.add(cellBattery);
  }

  // --- Chained doorways ---------------------------------------------------
  // A padlock on a basement door for the acid, a heavy chain into the
  // director's wing for the cutters. Both are picked from doorways that were
  // hung seconds ago, and only from one that can be sealed without cutting
  // anything else off - the check in `pickChainableDoorway` is the whole
  // reason this is derived rather than typed in.
  for (const spec of [
    { lock: 'padlock' as const, band: 0 },
    { lock: 'chain' as const, band: 3 },
  ]) {
    const door = pickChainableDoorway(grid, doors, spec.band, chainedDoors);
    if (!door) continue;
    const mesh = createDoorChain(metalMat, rustMat, door.vertical, spec.lock);
    mesh.position.set(door.col * CELL, 0, door.row * CELL);
    scene.add(mesh);
    chainedDoors.push({
      row: door.row,
      col: door.col,
      door,
      lock: spec.lock,
      mesh,
      centre: new THREE.Vector3(door.col * CELL, 1.2, door.row * CELL),
      beaten: false,
    });
  }

  // --- Indoor clutter, gore and fluorescent tubes ------------------------
  for (let row = OUTDOOR_ROWS; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const char = LAYOUT[row][col];
      const isRoomFloor = ROOM_CHAR.test(char);
      const isCorridor = char === '.';

      const cx = col * CELL;
      const cz = row * CELL;

      if (isRoomFloor || isCorridor) {
        if (isRoomFloor && Math.random() < 0.55) {
          addRoomFurniture(props, cx, cz, char, {
            boneMat, metalMat, rustMat, fabricMat, woodMat, glassMat,
          }, colliders);
        } else if (isCorridor && Math.random() < 0.45) {
          addProps(props, cx, cz, openSidesAt(grid, row, col), {
            boneMat, metalMat, rustMat, fabricMat, woodMat, glassMat,
          }, colliders);
        }
        if (Math.random() < (isRoomFloor ? 0.22 : 0.42)) {
          addBloodDecal(props, bloodMat, cx, cz);
        }
        if (isCorridor && Math.random() < 0.42) {
          addCorridorDebris(props, cx, cz, rustMat, woodMat, fabricMat);
        }
        if (isCorridor && Math.random() < 0.28) {
          addWaterPuddle(props, cx, cz);
        }
        if (isCorridor && Math.random() < 0.12) {
          addCorridorStretcher(props, metalMat, fabricMat, cx, cz);
        }
        if (isCorridor && Math.random() < 0.15) {
          addDanglingWire(props, metalMat, cx, cz);
        }
        if (Math.random() < (isCorridor ? 0.55 : 0.18)) {
          addCeilingTube(props, metalMat, tubeMat, cx, cz);
          tubeCount++;
        }

        // --- Industrial overheads & medical set dressing ---------------
        if (isCorridor) {
          const sides = openSidesAt(grid, row, col);
          if (Math.random() < 0.22) {
            addCeilingDuct(props, ductMat, rustMat, cx, cz, sides);
          }
          if (Math.random() < 0.18) {
            addSteamPipeRun(props, metalMat, rustMat, cx, cz, sides);
          }
          if (Math.random() < 0.14) {
            addSeveredCable(props, metalMat, cx, cz);
          }
          if (Math.random() < 0.14) {
            addPatientChart(props, chartMat, cx, cz);
          }
          if (Math.random() < 0.09) {
            addTippedInstrumentTray(props, metalMat, glassMat, cx, cz);
          }
          if (Math.random() < 0.1) {
            addPillBottleCluster(props, bottleMat, metalMat, cx, cz);
          }
          if (Math.random() < 0.2) {
            addBloodPuddle(props, bloodPuddleMat, cx, cz);
          }
        } else if (Math.random() < 0.14) {
          addBloodPuddle(props, bloodPuddleMat, cx, cz);
        }
      }
    }
  }

  // --- The grounds -------------------------------------------------------
  const outdoorMats = { metalMat, rustMat, woodMat, boneMat, stoneMat, glassMat, paintMat, fabricMat, lampMat };
  for (let row = 0; row <= OUTDOOR_END; row++) {
    for (let col = 0; col < COLS; col++) {
      const char = LAYOUT[row][col];
      if (char === '#' || char === '+') continue;
      if (!ROOM_CHAR.test(char) && char !== '.') continue;

      const cx = col * CELL;
      const cz = row * CELL;
      const sides = openSidesAt(grid, row, col);

      if (char === 'v') {
        // Graveyard: headstones in rough rows, leaning with age
        const gx = cx + rnd(-1.1, 1.1);
        const gz = cz + rnd(-1.1, 1.1);
        addGravestone(props, stoneMat, gx, gz);
        colliders.push({ x: gx, z: gz, r: 0.45 });
        if (Math.random() < 0.22) {
          const tx = cx + rnd(-1.4, 1.4);
          const tz = cz + rnd(-1.4, 1.4);
          addDeadTree(props, woodMat, tx, tz);
          colliders.push({ x: tx, z: tz, r: 0.55 });
        }
      } else if (char === 'x') {
        if (Math.random() < 0.34) {
          const carX = cx + rnd(-0.9, 0.9);
          const carZ = cz + rnd(-0.9, 0.9);
          addCar(props, outdoorMats, carX, carZ, Math.random() < 0.5);
          colliders.push({ x: carX, z: carZ, r: 1.5 });
        }
      } else if (char === 'w' || char === '.') {
        if (Math.random() < 0.18) addDebris(props, outdoorMats, cx, cz, sides);
        if (Math.random() < 0.12) {
          const tx = cx + rnd(-1.2, 1.2);
          const tz = cz + rnd(-1.2, 1.2);
          addDeadTree(props, woodMat, tx, tz);
          colliders.push({ x: tx, z: tz, r: 0.55 });
        }
        if (Math.random() < 0.08) addBloodDecal(props, bloodMat, cx + rnd(-0.8, 0.8), cz + rnd(-0.8, 0.8));
      } else if (char === 'u') {
        if (Math.random() < 0.22) {
          addBarrier(props, outdoorMats, cx, cz);
          colliders.push({ x: cx, z: cz, r: 1.1 });
        }
      } else if (char === 't' || char === 'z') {
        if (Math.random() < 0.2) {
          addBarrelProp(props, outdoorMats, cx, cz);
          colliders.push({ x: cx, z: cz, r: 0.5 });
        }
      } else if (char === 'y') {
        if (Math.random() < 0.3) addDebris(props, outdoorMats, cx, cz, sides);
      }

      if (Math.random() < 0.1) addBloodDecal(props, bloodMat, cx, cz);
    }
  }

  // Lamp posts along the fence, fused off until the substation comes up
  for (const cell of LAMP_CELLS) {
    addLampPost(props, metalMat, lampMat, cell.col * CELL, cell.row * CELL);
  }

  // --- Hiding spots (gurneys and wheelchairs at fixed strategic positions) ---
  const hidingSpots: THREE.Vector3[] = [];
  for (let i = 0; i < HIDING_CELLS.length; i++) {
    const cell = HIDING_CELLS[i];
    if (!isOpen(grid, cell.row, cell.col)) continue;
    const x = cell.col * CELL;
    const z = cell.row * CELL;
    // Alternate between gurney and wheelchair for visual variety
    const hideProp = i % 2 === 0
      ? createGurney(metalMat, fabricMat)
      : createWheelchair(metalMat, rustMat);
    hideProp.position.set(x, 0, z);
    hideProp.rotation.y = Math.random() * Math.PI * 2;
    hideProp.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    props.add(hideProp);
    hidingSpots.push(new THREE.Vector3(x, EYE_HEIGHT, z));
    colliders.push({ x, z, r: i % 2 === 0 ? 1.05 : 0.6 });
  }

  // --- Corpses -----------------------------------------------------------
  for (const entry of CORPSE_ROOMS) {
    const index = indexByChar.get(entry.room);
    if (index === undefined) throw new Error(`Corpse room '${entry.room}' does not exist in the plan`);
    const room = rooms[index];
    for (let i = 0; i < entry.count; i++) {
      const row = room.row1 + Math.floor(Math.random() * (room.row2 - room.row1 + 1));
      const col = room.col1 + Math.floor(Math.random() * (room.col2 - room.col1 + 1));
      if (!isOpen(grid, row, col)) continue;
      const corpse = createCorpse(fabricMat, boneMat, fleshMat);
      corpse.position.set(col * CELL + (Math.random() - 0.5) * 1.4, 0, row * CELL + (Math.random() - 0.5) * 1.4);
      corpse.rotation.y = Math.random() * Math.PI * 2;
      props.add(corpse);
      addBloodDecal(props, bloodMat, col * CELL, row * CELL);
    }
  }

  // --- Blood scrawls on walls -------------------------------------------
  // The text is baked into a canvas, so the texture is kept around: a language
  // change repaints the same canvas instead of rebuilding the level.
  const wallTextTextures: WallTextTexture[] = [];
  for (const decal of WALL_TEXTS) {
    const wallTexture = createBloodTextTexture(L(decal.text));
    wallTextTextures.push({ texture: wallTexture, text: decal.text });
    addWallText(props, decal.row, decal.col, decal.face, wallTexture);
  }

  // Blood pooled around the monster's lair
  for (let i = 0; i < 6; i++) {
    addBloodDecal(
      props,
      bloodMat,
      MONSTER_SPAWN.col * CELL + (Math.random() - 0.5) * 7,
      MONSTER_SPAWN.row * CELL + (Math.random() - 0.5) * 3
    );
  }

  // --- Hospital exit door -------------------------------------------------
  const exitCx = EXIT_CELL.col * CELL;
  const exitCz = EXIT_CELL.row * CELL;
  const exitPosition = new THREE.Vector3(exitCx, EYE_HEIGHT, exitCz);

  const frame = new THREE.Mesh(
    new THREE.BoxGeometry(CELL * 0.95, WALL_H, 0.34),
    new THREE.MeshStandardMaterial({ color: 0x1b1b1e, roughness: 0.8, metalness: 0.6 })
  );
  frame.position.set(exitCx, WALL_H / 2, exitCz - CELL / 2);
  scene.add(frame);

  // Hinged on its left edge so the door can swing rather than slide
  const exitDoorGeo = new THREE.BoxGeometry(CELL * 0.74, WALL_H * 0.86, 0.22);
  exitDoorGeo.translate(CELL * 0.37, 0, 0);
  const exitDoor = new THREE.Mesh(exitDoorGeo, doorMat);
  exitDoor.position.set(exitCx - CELL * 0.37, WALL_H * 0.47, exitCz - CELL / 2 + 0.16);
  exitDoor.castShadow = true;
  scene.add(exitDoor);

  const exitLock = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.24, 0.14), lockMat);
  exitLock.position.set(exitCx + CELL * 0.24, WALL_H * 0.47, exitCz - CELL / 2 + 0.3);
  scene.add(exitLock);

  const exitBar = new THREE.Mesh(new THREE.BoxGeometry(CELL * 0.6, 0.09, 0.09), metalMat);
  exitBar.position.set(exitCx, WALL_H * 0.52, exitCz - CELL / 2 + 0.34);
  scene.add(exitBar);

  // --- Main gate ----------------------------------------------------------
  const gateCx = GATE_CELL.col * CELL;
  const gateCz = GATE_CELL.row * CELL;
  const gatePosition = new THREE.Vector3(gateCx, EYE_HEIGHT, gateCz);

  const gateGroup = new THREE.Group();
  gateGroup.position.set(gateCx, 0, gateCz);

  const gatePostGeo = new THREE.BoxGeometry(0.34, WALL_H + 0.5, 0.34);
  for (const sign of [-1, 1]) {
    const post = new THREE.Mesh(gatePostGeo, metalMat);
    post.position.set(sign * (CELL / 2 - 0.12), (WALL_H + 0.5) / 2, 0);
    gateGroup.add(post);
  }

  const leafGeo = new THREE.BoxGeometry(CELL / 2 - 0.12, WALL_H * 0.9, 0.14);
  const gateLeaves: THREE.Object3D[] = [];
  for (const sign of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(sign * 0.05, 0, 0);
    const leaf = new THREE.Mesh(leafGeo, doorMat);
    leaf.position.set((sign * (CELL / 2 - 0.12)) / 2, WALL_H * 0.45, 0);
    leaf.castShadow = true;
    pivot.add(leaf);
    pivot.userData.sign = sign;
    gateGroup.add(pivot);
    gateLeaves.push(pivot);
  }

  // Barbed crossbar along the top of both leaves
  const crossbar = new THREE.Mesh(new THREE.BoxGeometry(CELL - 0.2, 0.1, 0.1), metalMat);
  crossbar.position.set(0, WALL_H * 0.92, 0);
  gateGroup.add(crossbar);

  const gateLock = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.28, 0.16), lockMat);
  gateLock.position.set(0, WALL_H * 0.55, -0.24);
  gateGroup.add(gateLock);

  scene.add(gateGroup);

  // --- Generator breaker --------------------------------------------------
  const breakerMesh = createBreaker(breakerMat, leverMat);
  breakerMesh.position.set(BREAKER_CELL.col * CELL, 0, BREAKER_CELL.row * CELL);
  scene.add(breakerMesh);

  // --- Substation ---------------------------------------------------------
  const substationMesh = createSubstation(breakerMat, leverMat, metalMat, rustMat);
  substationMesh.position.set(SUBSTATION_CELL.col * CELL, 0, SUBSTATION_CELL.row * CELL);
  scene.add(substationMesh);

  // --- Keys, card & notes -------------------------------------------------
  const keyPositions: THREE.Vector3[] = [];
  KEY_CELLS.forEach((cell, index) => {
    const key = createKeyMesh(keyMat);
    key.position.set(cell.col * CELL, 1.1, cell.row * CELL);
    // The index lets the game (and the minimap) know exactly which pickup
    // was taken, since the meshes themselves are removed from the scene.
    key.userData.pickupIndex = index;
    key.userData.itemId = 'key';
    scene.add(key);
    keyPositions.push(key.position.clone());
  });

  const cardPositions: THREE.Vector3[] = [];
  const card = createKeycard(cardMat, metalMat);
  card.position.set(CARD_CELL.col * CELL, 1.15, CARD_CELL.row * CELL);
  card.userData.pickupIndex = 0;
  card.userData.itemId = 'card';
  scene.add(card);
  cardPositions.push(card.position.clone());

  const notePositions: THREE.Vector3[] = [];
  NOTE_CELLS.forEach((cell, index) => {
    const sheet = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.56), noteMat);
    sheet.rotation.x = -Math.PI / 2.35;
    sheet.position.set(cell.col * CELL + 0.3, 0.85, cell.row * CELL - 0.3);
    sheet.userData.isNote = true;
    // Each sheet carries its own story index so the text always matches the
    // physical note, whichever order the player finds them in.
    sheet.userData.noteIndex = index;
    sheet.userData.pickupIndex = index;
    scene.add(sheet);
    notePositions.push(new THREE.Vector3(cell.col * CELL, 1, cell.row * CELL));
  });

  // --- Puzzle items -------------------------------------------------------
  const spawnItem = (id: string, cell: { row: number; col: number }, mesh: THREE.Object3D, y = 0.95): void => {
    mesh.position.set(cell.col * CELL, y, cell.row * CELL);
    mesh.userData.itemId = id;
    scene.add(mesh);
  };

  spawnItem('fuse', FUSE_CELL, createFuseMesh(fuseMat, glassMat, metalMat));
  spawnItem('fuse', SPARE_FUSE_CELL, createFuseMesh(fuseMat, glassMat, metalMat));
  spawnItem('crowbar', CROWBAR_CELL, createCrowbarMesh(crowbarMat), 0.9);
  for (const cell of BATTERY_CELLS) {
    spawnItem('battery', cell, createBatteryMesh(batteryMat, metalMat), 0.9);
  }
  // Empty medicine vials: throw one to shatter it somewhere far away and the
  // creature goes to investigate the noise instead of you.
  VIAL_CELLS.forEach((cell, index) => {
    const vial = createVialMesh(glassMat, metalMat);
    vial.rotation.y = index * 1.3;
    spawnItem('bottle', cell, vial, 0.9);
  });

  // --- Boarded-up doorways ------------------------------------------------
  // Nailed planks across every way into the shower room. The meshes are kept
  // so the game can drop them the moment the crowbar is used.
  for (const cell of boardedCells) {
    const boards = createBoardedDoor(woodMat, rustMat, CELL);
    boards.position.set(cell.col * CELL, 0, cell.row * CELL);
    boards.rotation.y = cell.col % 2 === 0 ? 0 : Math.PI / 2;
    // The game finds these by flag rather than through MapInfo, and reads the
    // cell back out of the mesh position when the crowbar opens it up.
    boards.userData.isBoardedDoor = true;
    scene.add(boards);
  }

  // --- Merge everything decorative into a handful of draw calls ----------
  const mergedProps = mergeProps(props);
  scene.add(mergedProps);

  return {
    wallTexts: wallTextTextures,
    grid,
    walls,
    floor,
    ceiling,
    keyPositions,
    notePositions,
    exitPosition,
    monsterSpawn: cellToWorld(MONSTER_SPAWN.row, MONSTER_SPAWN.col, 1.5),
    playerSpawn: cellToWorld(PLAYER_SPAWN.row, PLAYER_SPAWN.col),
    exitDoor,
    exitLock,
    breakerPosition: cellToWorld(BREAKER_CELL.row, BREAKER_CELL.col, 1.2),
    breakerMesh,
    props: mergedProps,
    fluorescentMaterials: tubeCount > 0 ? [tubeMat] : [],
    rooms,
    roomIndexByCell,
    plan: LAYOUT,
    cols: COLS,
    rows: ROWS,
    gatePosition,
    gateLeaves,
    gateLock,
    substationPosition: cellToWorld(SUBSTATION_CELL.row, SUBSTATION_CELL.col, 1.2),
    substationMesh,
    cardPositions,
    outdoorLampPositions: LAMP_CELLS.map((cell) => cellToWorld(cell.row, cell.col, 4.35)),
    lampMaterials: [lampMat],
    hidingSpots,
    colliders,
  };
}

export function roomIndexAt(map: MapInfo, x: number, z: number): number {
  const col = Math.round(x / CELL);
  const row = Math.round(z / CELL);
  if (row < 0 || row >= map.rows || col < 0 || col >= map.cols) return -1;
  return map.roomIndexByCell[row * map.cols + col];
}

/* ========================= small builders ========================= */

function rnd(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function openSidesAt(grid: number[][], row: number, col: number): Array<[number, number]> {
  const out: Array<[number, number]> = [];
  if (isOpen(grid, row - 1, col)) out.push([-1, 0]);
  if (isOpen(grid, row + 1, col)) out.push([1, 0]);
  if (isOpen(grid, row, col - 1)) out.push([0, -1]);
  if (isOpen(grid, row, col + 1)) out.push([0, 1]);
  return out;
}

function addDoorFrame(
  group: THREE.Group,
  cx: number,
  cz: number,
  verticalPassage: boolean,
  material: THREE.Material
): void {
  const post = new THREE.BoxGeometry(0.18, WALL_H, 0.18);
  const lintel = new THREE.BoxGeometry(CELL - 0.2, 0.28, 0.22);

  if (verticalPassage) {
    for (const sign of [-1, 1]) {
      const mesh = new THREE.Mesh(post, material);
      mesh.position.set(cx + sign * (CELL / 2 - 0.09), WALL_H / 2, cz);
      group.add(mesh);
    }
    const top = new THREE.Mesh(lintel, material);
    top.position.set(cx, WALL_H - 0.14, cz);
    group.add(top);
  } else {
    for (const sign of [-1, 1]) {
      const mesh = new THREE.Mesh(post, material);
      mesh.position.set(cx, WALL_H / 2, cz + sign * (CELL / 2 - 0.09));
      group.add(mesh);
    }
    const top = new THREE.Mesh(lintel, material);
    top.position.set(cx, WALL_H - 0.14, cz);
    top.rotation.y = Math.PI / 2;
    group.add(top);
  }
}

/** Bake every prop into one mesh per material. */
function mergeProps(group: THREE.Group): THREE.Group {
  const buckets = new Map<THREE.Material, THREE.BufferGeometry[]>();
  group.updateMatrixWorld(true);

  group.traverse((child) => {
    if (!(child as THREE.Mesh).isMesh) return;
    const mesh = child as THREE.Mesh;
    const material = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;

    const geometry = mesh.geometry.clone();
    geometry.applyMatrix4(mesh.matrixWorld);
    for (const attribute of Object.keys(geometry.attributes)) {
      if (attribute !== 'position' && attribute !== 'normal' && attribute !== 'uv') {
        geometry.deleteAttribute(attribute);
      }
    }

    const bucket = buckets.get(material);
    if (bucket) bucket.push(geometry);
    else buckets.set(material, [geometry]);
  });

  const merged = new THREE.Group();
  for (const [material, geometries] of buckets) {
    const geometry = mergeGeometries(geometries, false);
    if (!geometry) return group; // anything unexpected: keep the originals
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    merged.add(mesh);
  }

  return merged.children.length > 0 ? merged : group;
}

interface PropMaterials {
  boneMat: THREE.Material;
  metalMat: THREE.Material;
  rustMat: THREE.Material;
  fabricMat: THREE.Material;
  woodMat: THREE.Material;
  glassMat: THREE.Material;
}

interface OutdoorMaterials extends PropMaterials {
  stoneMat: THREE.Material;
  glassMat: THREE.Material;
  paintMat: THREE.Material;
  lampMat: THREE.Material;
}


/** Room-specific furniture: each room type gets props that match its purpose. */
function addRoomFurniture(
  group: THREE.Group,
  cx: number,
  cz: number,
  roomChar: string,
  mats: PropMaterials,
  colliders: Array<{ x: number; z: number; r: number }>
): void {
  const roll = Math.random();
  let prop: THREE.Object3D;
  let r = 0; // collider radius

  // Patient rooms and dormitories
  if ("dDnsS".includes(roomChar)) {
    if (roll < 0.4) { prop = createHospitalBed(mats.metalMat, mats.fabricMat); r = 1.0; }
    else if (roll < 0.6) { prop = createLockerProp(mats.metalMat, mats.rustMat); r = 0.5; }
    else if (roll < 0.8) { prop = createTrashBin(mats.metalMat); }
    else { prop = createIVStand(mats.metalMat); }
  }
  // Operating / procedure rooms
  else if ("hiI".includes(roomChar)) {
    if (roll < 0.35) { prop = createOperatingTable(mats.metalMat, mats.fabricMat); r = 1.0; }
    else if (roll < 0.55) { prop = createMonitor(mats.metalMat, mats.glassMat); r = 0.4; }
    else if (roll < 0.75) { prop = createIVStand(mats.metalMat); }
    else { prop = createTrashBin(mats.metalMat); }
  }
  // Morgue
  else if ("ooO".includes(roomChar)) {
    if (roll < 0.5) { prop = createMorgueDrawer(mats.metalMat, mats.rustMat); r = 0.8; }
    else if (roll < 0.75) { prop = createGurney(mats.metalMat, mats.fabricMat); r = 1.0; }
    else { prop = createTrashBin(mats.metalMat); }
  }
  // Kitchen / canteen
  else if ("rC".includes(roomChar)) {
    if (roll < 0.4) { prop = createKitchenCounter(mats.metalMat, mats.rustMat); r = 0.8; }
    else if (roll < 0.6) { prop = createBarrel(mats.rustMat, mats.metalMat); r = 0.45; }
    else if (roll < 0.8) { prop = createCrate(mats.woodMat); r = 0.5; }
    else { prop = createTrashBin(mats.metalMat); }
  }
  // Library
  else if (roomChar === "g") {
    if (roll < 0.5) { prop = createBookshelf(mats.woodMat); r = 0.7; }
    else if (roll < 0.75) { prop = createDesk(mats.woodMat, mats.metalMat); r = 0.6; }
    else { prop = createCouch(mats.fabricMat, mats.woodMat); r = 0.8; }
  }
  // Dentist / eye clinic
  else if ("HI".includes(roomChar)) {
    if (roll < 0.5) { prop = createDentalChair(mats.metalMat, mats.fabricMat); r = 0.7; }
    else if (roll < 0.75) { prop = createMonitor(mats.metalMat, mats.glassMat); r = 0.4; }
    else { prop = createSink(mats.metalMat); }
  }
  // Isolation room
  else if (roomChar === "S") {
    if (roll < 0.5) { prop = createIsolationBed(mats.metalMat, mats.fabricMat); r = 1.0; }
    else if (roll < 0.75) { prop = createLockerProp(mats.metalMat, mats.rustMat); r = 0.5; }
    else { prop = createDesk(mats.woodMat, mats.metalMat); r = 0.6; }
  }
  // Electrotherapy
  else if (roomChar === "T") {
    if (roll < 0.5) { prop = createElectroChair(mats.metalMat, mats.fabricMat); r = 0.7; }
    else if (roll < 0.75) { prop = createMonitor(mats.metalMat, mats.glassMat); r = 0.4; }
    else { prop = createTrashBin(mats.metalMat); }
  }
  // Shower room
  else if (roomChar === "q") {
    if (roll < 0.5) { prop = createShowerStall(mats.metalMat, mats.fabricMat); r = 0.6; }
    else if (roll < 0.75) { prop = createSink(mats.metalMat); }
    else { prop = createTrashBin(mats.metalMat); }
  }
  // Hydrotherapy
  else if (roomChar === "U") {
    if (roll < 0.5) { prop = createShowerStall(mats.metalMat, mats.fabricMat); r = 0.6; }
    else if (roll < 0.75) { prop = createSink(mats.metalMat); }
    else { prop = createBarrel(mats.rustMat, mats.metalMat); r = 0.45; }
  }
  // Generator / boiler / pump rooms
  else if ("mMPN".includes(roomChar)) {
    if (roll < 0.3) { prop = createBarrel(mats.rustMat, mats.metalMat); r = 0.45; }
    else if (roll < 0.5) { prop = createPipes(mats.metalMat, mats.rustMat); }
    else if (roll < 0.7) { prop = createCrate(mats.woodMat); r = 0.5; }
    else { prop = createWheelchairProp(mats.metalMat, mats.rustMat); r = 0.6; }
  }
  // Archive / storage
  else if ("fpL".includes(roomChar)) {
    if (roll < 0.35) { prop = createCrate(mats.woodMat); r = 0.5; }
    else if (roll < 0.55) { prop = createLockerProp(mats.metalMat, mats.rustMat); r = 0.5; }
    else if (roll < 0.75) { prop = createBookshelf(mats.woodMat); r = 0.7; }
    else { prop = createBarrel(mats.rustMat, mats.metalMat); r = 0.45; }
  }
  // Office / admin rooms
  else if ("AEVW".includes(roomChar)) {
    if (roll < 0.4) { prop = createDesk(mats.woodMat, mats.metalMat); r = 0.6; }
    else if (roll < 0.6) { prop = createCouch(mats.fabricMat, mats.woodMat); r = 0.8; }
    else if (roll < 0.8) { prop = createLockerProp(mats.metalMat, mats.rustMat); r = 0.5; }
    else { prop = createTrashBin(mats.metalMat); }
  }
  // Children ward
  else if (roomChar === "D") {
    if (roll < 0.3) { prop = createHospitalBed(mats.metalMat, mats.fabricMat); r = 1.0; }
    else if (roll < 0.5) { prop = createCrate(mats.woodMat); r = 0.5; }
    else if (roll < 0.7) { prop = createWheelchairProp(mats.metalMat, mats.rustMat); r = 0.6; }
    else { prop = createTrashBin(mats.metalMat); }
  }
  // Lab / incubator
  else if ("kPQ".includes(roomChar)) {
    if (roll < 0.3) { prop = createDesk(mats.woodMat, mats.metalMat); r = 0.6; }
    else if (roll < 0.5) { prop = createMonitor(mats.metalMat, mats.glassMat); r = 0.4; }
    else if (roll < 0.7) { prop = createSink(mats.metalMat); }
    else { prop = createTrashBin(mats.metalMat); }
  }
  // Grounds buildings (generator, guard post, etc.)
  else if ("tuyz".includes(roomChar)) {
    if (roll < 0.3) { prop = createBarrel(mats.rustMat, mats.metalMat); r = 0.45; }
    else if (roll < 0.5) { prop = createCrate(mats.woodMat); r = 0.5; }
    else if (roll < 0.7) { prop = createPipes(mats.metalMat, mats.rustMat); }
    else { prop = createWheelchairProp(mats.metalMat, mats.rustMat); r = 0.6; }
  }
  // Default: generic corridor props
  else {
    if (roll < 0.2) { prop = createGurney(mats.metalMat, mats.fabricMat); r = 1.0; }
    else if (roll < 0.34) { prop = createWheelchairProp(mats.metalMat, mats.rustMat); r = 0.6; }
    else if (roll < 0.5) { prop = createBarrel(mats.rustMat, mats.metalMat); r = 0.45; }
    else if (roll < 0.64) { prop = createCrate(mats.woodMat); r = 0.5; }
    else if (roll < 0.78) { prop = createBonePile(mats.boneMat); }
    else if (roll < 0.9) { prop = createPipes(mats.metalMat, mats.rustMat); }
    else { prop = createLockerProp(mats.metalMat, mats.rustMat); r = 0.6; }
  }

  // Position with some randomness within the cell
  const ox = cx + (Math.random() - 0.5) * 2.0;
  const oz = cz + (Math.random() - 0.5) * 2.0;

  prop.position.x = ox;
  prop.position.z = oz;
  prop.rotation.y = Math.random() * Math.PI * 2;
  prop.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  if (r > 0) colliders.push({ x: ox, z: oz, r });
  group.add(prop);
}

function addProps(
  group: THREE.Group,
  cx: number,
  cz: number,
  openSides: Array<[number, number]>,
  mats: PropMaterials,
  colliders: Array<{ x: number; z: number; r: number }>
): void {
  const solidSides: Array<[number, number]> = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ].filter((side) => !openSides.some(([dr, dc]) => dr === side[0] && dc === side[1])) as Array<[number, number]>;

  const offset = 1.3;
  const side = solidSides.length > 0 ? solidSides[Math.floor(Math.random() * solidSides.length)] : [0, 0];
  const ox = cx + side[1] * offset + (side[1] === 0 ? (Math.random() - 0.5) * 2 : 0);
  const oz = cz + side[0] * offset + (side[0] === 0 ? (Math.random() - 0.5) * 2 : 0);

  const roll = Math.random();
  let prop: THREE.Object3D;
  // Only furniture you can actually bump into blocks the player; small debris
  // and ceiling pipes stay walk-through so corridors never get pinched shut.
  let colliderRadius = 0;

  if (roll < 0.2) {
    prop = createGurney(mats.metalMat, mats.fabricMat);
    colliderRadius = 1.0;
  } else if (roll < 0.34) {
    prop = createWheelchair(mats.metalMat, mats.rustMat);
    colliderRadius = 0.6;
  } else if (roll < 0.5) {
    prop = createBarrel(mats.rustMat, mats.metalMat);
    colliderRadius = 0.45;
  } else if (roll < 0.64) {
    prop = createCrate(mats.woodMat);
    colliderRadius = 0.5;
  } else if (roll < 0.78) {
    prop = createBonePile(mats.boneMat);
  } else if (roll < 0.9) {
    prop = createPipes(mats.metalMat, mats.rustMat);
  } else {
    prop = createLocker(mats.metalMat, mats.rustMat);
    colliderRadius = 0.6;
  }

  prop.position.x += ox;
  prop.position.z += oz;
  prop.rotation.y = Math.random() * Math.PI * 2;

  prop.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  if (colliderRadius > 0) colliders.push({ x: ox, z: oz, r: colliderRadius });
  group.add(prop);
}

function addDebris(
  group: THREE.Group,
  mats: OutdoorMaterials,
  cx: number,
  cz: number,
  openSides: Array<[number, number]>
): void {
  const solidSides = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ].filter((side) => !openSides.some(([dr, dc]) => dr === side[0] && dc === side[1])) as Array<[number, number]>;

  const side = solidSides.length > 0 ? solidSides[Math.floor(Math.random() * solidSides.length)] : [0, 0];
  const ox = cx + side[1] * 1.3 + (side[1] === 0 ? rnd(-1.4, 1.4) : 0);
  const oz = cz + side[0] * 1.3 + (side[0] === 0 ? rnd(-1.4, 1.4) : 0);

  const roll = Math.random();
  let prop: THREE.Object3D;
  if (roll < 0.3) prop = createCrate(mats.woodMat);
  else if (roll < 0.55) prop = createBarrel(mats.rustMat, mats.metalMat);
  else if (roll < 0.75) prop = createBonePile(mats.boneMat);
  else prop = createWheelchair(mats.metalMat, mats.rustMat);

  prop.position.set(ox, 0, oz);
  prop.rotation.y = Math.random() * Math.PI * 2;
  prop.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  group.add(prop);
}

function addGravestone(group: THREE.Group, material: THREE.Material, x: number, z: number): void {
  const slab = new THREE.Mesh(new THREE.BoxGeometry(rnd(0.5, 0.75), rnd(0.7, 1.1), 0.16), material);
  slab.position.set(x, slab.geometry.parameters.height / 2, z);
  slab.rotation.set(rnd(-0.09, 0.09), rnd(-0.5, 0.5), rnd(-0.12, 0.12));
  slab.castShadow = true;
  slab.receiveShadow = true;
  group.add(slab);

  const mound = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.16, 2.0), material);
  mound.position.set(x, 0.06, z + 1.05);
  mound.rotation.y = rnd(-0.3, 0.3);
  group.add(mound);
}

function addDeadTree(group: THREE.Group, material: THREE.Material, x: number, z: number): void {
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.2, rnd(2.6, 3.8), 6), material);
  trunk.position.set(x, trunk.geometry.parameters.height / 2, z);
  trunk.rotation.z = rnd(-0.08, 0.08);
  trunk.castShadow = true;
  group.add(trunk);

  const branches = 2 + Math.floor(Math.random() * 3);
  for (let i = 0; i < branches; i++) {
    const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.07, rnd(0.9, 1.7), 5), material);
    const angle = (i / branches) * Math.PI * 2 + rnd(-0.4, 0.4);
    branch.position.set(
      x + Math.cos(angle) * 0.4,
      rnd(1.8, 3.0),
      z + Math.sin(angle) * 0.4
    );
    branch.rotation.set(rnd(-0.6, 0.6), angle, rnd(0.7, 1.1));
    group.add(branch);
  }
}

function addBarrier(group: THREE.Group, mats: OutdoorMaterials, x: number, z: number): void {
  const body = new THREE.Mesh(new THREE.BoxGeometry(rnd(1.4, 2.4), 0.9, 0.55), mats.stoneMat);
  body.position.set(x + rnd(-0.8, 0.8), 0.45, z + rnd(-0.8, 0.8));
  body.rotation.y = Math.random() < 0.5 ? 0 : Math.PI / 2;
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  const stripe = new THREE.Mesh(new THREE.BoxGeometry(body.geometry.parameters.width * 0.9, 0.2, 0.58), mats.paintMat);
  stripe.position.copy(body.position);
  stripe.position.y = 0.72;
  stripe.rotation.y = body.rotation.y;
  group.add(stripe);
}

function addBarrelProp(group: THREE.Group, mats: OutdoorMaterials, x: number, z: number): void {
  const barrel = createBarrel(mats.rustMat, mats.metalMat);
  barrel.position.set(x + rnd(-1.1, 1.1), 0, z + rnd(-1.1, 1.1));
  barrel.rotation.y = Math.random() * Math.PI * 2;
  barrel.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) child.castShadow = true;
  });
  group.add(barrel);
}

function addCar(group: THREE.Group, mats: OutdoorMaterials, x: number, z: number, flipped: boolean): void {
  const car = new THREE.Group();

  const body = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.72, 4.2), mats.rustMat);
  body.position.y = 0.62;
  car.add(body);

  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.66, 2.1), mats.metalMat);
  cabin.position.set(0, 1.24, -0.2);
  car.add(cabin);

  const windscreen = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.5, 0.08), mats.glassMat);
  windscreen.position.set(0, 1.26, -1.22);
  car.add(windscreen);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.66, 0.08, 2.0), mats.glassMat);
  roof.position.set(0, 1.58, -0.2);
  car.add(roof);

  const wheelGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.22, 10);
  wheelGeo.rotateZ(Math.PI / 2);
  for (const wx of [-1.0, 1.0]) {
    for (const wz of [-1.4, 1.4]) {
      const wheel = new THREE.Mesh(wheelGeo, mats.metalMat);
      wheel.position.set(wx, 0.34, wz);
      car.add(wheel);
    }
  }

  car.position.set(x, 0, z);
  car.rotation.y = rnd(-Math.PI, Math.PI);
  if (flipped) {
    car.rotation.z = Math.PI;
    car.position.y = 1.0;
    car.scale.setScalar(0.9);
  }

  car.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  group.add(car);
}

function addLampPost(
  group: THREE.Group,
  metal: THREE.Material,
  lamp: THREE.Material,
  x: number,
  z: number
): void {
  const group2 = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.13, 4.6, 8), metal);
  pole.position.y = 2.3;
  group2.add(pole);

  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.09, 0.09), metal);
  arm.position.set(0.42, 4.52, 0);
  group2.add(arm);

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.16, 0.32), lamp);
  head.position.set(0.78, 4.42, 0);
  group2.add(head);

  group2.position.set(x, 0, z);
  group2.rotation.y = rnd(-0.4, 0.4);
  group2.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) child.castShadow = true;
  });
  group.add(group2);
}

function createKeyMesh(material: THREE.Material): THREE.Group {
  const key = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.045, 8, 18), material);
  const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.44, 0.06), material);
  shaft.position.y = -0.3;
  const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.07, 0.06), material);
  tooth.position.set(0.08, -0.48, 0);
  key.add(ring, shaft, tooth);
  key.userData.isKey = true;
  return key;
}

function createKeycard(card: THREE.Material, metal: THREE.Material): THREE.Group {
  const group = new THREE.Group();

  const body = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.02, 0.52), card);
  body.position.y = 0.02;
  group.add(body);

  const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.026, 0.09), metal);
  stripe.position.set(0, 0.045, -0.14);
  group.add(stripe);

  const lanyard = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 6, 12), metal);
  lanyard.position.set(0, 0.05, 0.3);
  group.add(lanyard);

  group.userData.isCard = true;
  return group;
}

function createBreaker(bodyMat: THREE.Material, leverMaterial: THREE.Material): THREE.Group {
  const group = new THREE.Group();

  const cabinet = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.7, 0.5), bodyMat);
  cabinet.position.y = 1.7;
  cabinet.castShadow = true;
  group.add(cabinet);

  const panel = new THREE.Mesh(
    new THREE.BoxGeometry(0.86, 1.36, 0.06),
    new THREE.MeshStandardMaterial({
      color: 0x14161a,
      roughness: 0.7,
      metalness: 0.4,
    })
  );
  panel.position.set(0, 1.74, 0.28);
  group.add(panel);

  const lever = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.5, 0.16), leverMaterial);
  lever.position.set(0, 1.6, 0.36);
  lever.rotation.x = -0.6;
  lever.userData.isBreakerLever = true;
  group.add(lever);

  const lamp = new THREE.Mesh(
    new THREE.SphereGeometry(0.07, 10, 10),
    new THREE.MeshStandardMaterial({ color: 0x330000, emissive: 0xff2200, emissiveIntensity: 2 })
  );
  lamp.position.set(0, 2.28, 0.33);
  lamp.userData.isBreakerLamp = true;
  group.add(lamp);

  return group;
}

/** Outdoor transformer bank + lever that feeds the gate motor. */
function createSubstation(
  bodyMat: THREE.Material,
  leverMat: THREE.Material,
  metal: THREE.Material,
  rust: THREE.Material
): THREE.Group {
  const group = new THREE.Group();

  const pad = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.22, 2.2), new THREE.MeshStandardMaterial({
    color: 0x3a3a38,
    roughness: 1,
    metalness: 0,
  }));
  pad.position.y = 0.11;
  pad.receiveShadow = true;
  group.add(pad);

  // Transformer cans
  for (const x of [-0.66, 0.66]) {
    const can = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 1.5, 12), metal);
    can.position.set(x, 0.97, 0);
    can.castShadow = true;
    group.add(can);

    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.14, 12), rust);
    cap.position.set(x, 1.78, 0);
    group.add(cap);

    for (let i = 0; i < 3; i++) {
      const insulator = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 0.34, 6), rust);
      insulator.position.set(x + (i - 1) * 0.22, 2.0, 0);
      group.add(insulator);
    }
  }

  // Control cabinet with the throw lever
  const cabinet = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.5, 0.42), bodyMat);
  cabinet.position.set(0, 0.97, 1.3);
  cabinet.castShadow = true;
  group.add(cabinet);

  const lever = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.46, 0.14), leverMat);
  lever.position.set(0, 0.9, 1.54);
  lever.rotation.x = -0.6;
  lever.userData.isSubstationLever = true;
  group.add(lever);

  const lamp = new THREE.Mesh(
    new THREE.SphereGeometry(0.065, 10, 10),
    new THREE.MeshStandardMaterial({ color: 0x330000, emissive: 0xff2200, emissiveIntensity: 2 })
  );
  lamp.position.set(0, 1.55, 1.54);
  lamp.userData.isSubstationLamp = true;
  group.add(lamp);

  // Warning sign
  const sign = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.5, 0.05),
    new THREE.MeshStandardMaterial({ color: 0xc9a227, emissive: 0x3a2c00, emissiveIntensity: 0.4, roughness: 0.8 })
  );
  sign.position.set(0, 1.95, 1.32);
  group.add(sign);

  group.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) child.castShadow = true;
  });

  return group;
}

function createCorpse(fabric: THREE.Material, bone: THREE.Material, flesh: THREE.Material): THREE.Group {
  const group = new THREE.Group();

  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.26, 0.78), fabric);
  torso.position.y = 0.13;
  group.add(torso);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), flesh);
  head.position.set(0, 0.15, -0.5);
  group.add(head);

  for (const sign of [-1, 1]) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.6), flesh);
    arm.position.set(sign * 0.36, 0.08, -0.06);
    arm.rotation.y = sign * 0.6;
    group.add(arm);

    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.17, 0.68), fabric);
    leg.position.set(sign * 0.14, 0.09, 0.7);
    leg.rotation.y = sign * 0.12;
    group.add(leg);
  }

  const rib = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.12), bone);
  rib.position.set(0.08, 0.28, 0.06);
  rib.rotation.y = 0.4;
  group.add(rib);

  return group;
}

function createGurney(metal: THREE.Material, fabric: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  const mattress = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.12, 1.9), fabric);
  mattress.position.y = 0.72;
  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.84, 0.06, 1.94), metal);
  frame.position.y = 0.64;
  group.add(mattress, frame);

  const legPositions: Array<[number, number]> = [
    [-0.34, -0.82],
    [0.34, -0.82],
    [-0.34, 0.82],
    [0.34, 0.82],
  ];
  for (const [x, z] of legPositions) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.64, 0.06), metal);
    leg.position.set(x, 0.32, z);
    group.add(leg);
  }

  const wheelGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.05, 8);
  wheelGeo.rotateZ(Math.PI / 2);
  for (const [x, z] of legPositions) {
    const wheel = new THREE.Mesh(wheelGeo, metal);
    wheel.position.set(x, 0.06, z);
    group.add(wheel);
  }

  group.rotation.y += (Math.random() - 0.5) * 0.6;
  return group;
}

function createWheelchair(metal: THREE.Material, rust: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.08, 0.56), rust);
  seat.position.y = 0.52;
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.6, 0.08), rust);
  back.position.set(0, 0.82, -0.26);
  group.add(seat, back);

  const wheelGeo = new THREE.TorusGeometry(0.32, 0.045, 6, 20);
  for (const x of [-0.34, 0.34]) {
    const wheel = new THREE.Mesh(wheelGeo, metal);
    wheel.position.set(x, 0.34, 0);
    wheel.rotation.y = Math.PI / 2;
    group.add(wheel);
  }

  const casterGeo = new THREE.TorusGeometry(0.09, 0.03, 6, 12);
  for (const x of [-0.24, 0.24]) {
    const caster = new THREE.Mesh(casterGeo, metal);
    caster.position.set(x, 0.09, 0.28);
    caster.rotation.y = Math.PI / 2;
    group.add(caster);
  }
  return group;
}

function createBarrel(rust: THREE.Material, metal: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.9, 12), rust);
  body.position.y = 0.45;
  group.add(body);

  for (const y of [0.24, 0.66]) {
    const hoop = new THREE.Mesh(new THREE.TorusGeometry(0.33, 0.025, 5, 14), metal);
    hoop.position.y = y;
    hoop.rotation.x = Math.PI / 2;
    group.add(hoop);
  }
  return group;
}

function createCrate(wood: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  const size = 0.5 + Math.random() * 0.3;
  const box = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), wood);
  box.position.y = size / 2;
  box.rotation.y = Math.random() * 0.5;
  group.add(box);

  if (Math.random() < 0.4) {
    const stacked = box.clone();
    stacked.position.y = size * 1.5;
    stacked.rotation.y = Math.random() * Math.PI;
    group.add(stacked);
  }
  return group;
}

function createBonePile(material: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  for (let i = 0; i < 7; i++) {
    const bone = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.28 + Math.random() * 0.2, 3, 6), material);
    bone.position.set((Math.random() - 0.5) * 0.7, 0.05 + Math.random() * 0.06, (Math.random() - 0.5) * 0.7);
    bone.rotation.set(Math.PI / 2, 0, Math.random() * Math.PI);
    group.add(bone);
  }
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 8), material);
  skull.position.set((Math.random() - 0.5) * 0.4, 0.13, (Math.random() - 0.5) * 0.4);
  group.add(skull);
  return group;
}

function createPipes(metal: THREE.Material, rust: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  const pipeGeo = new THREE.CylinderGeometry(0.055, 0.055, 3.6, 8);
  pipeGeo.rotateZ(Math.PI / 2);

  for (let i = 0; i < 2; i++) {
    const pipe = new THREE.Mesh(pipeGeo, i === 0 ? metal : rust);
    pipe.position.set(0, WALL_H - 0.3 - i * 0.22, 0);
    pipe.rotation.y = Math.random() < 0.5 ? 0 : Math.PI / 2;
    group.add(pipe);
  }
  return group;
}

function createLocker(metal: THREE.Material, rust: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.9, 2.0, 0.5), metal);
  body.position.y = 1.0;
  group.add(body);

  const door = new THREE.Mesh(new THREE.BoxGeometry(0.38, 1.8, 0.06), rust);
  door.position.set(-0.22, 1.0, 0.28);
  door.rotation.y = -0.35;
  group.add(door);

  return group;
}

function addBloodDecal(group: THREE.Group, material: THREE.Material, x: number, z: number): void {
  const decal = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.8), material);
  decal.rotation.x = -Math.PI / 2;
  decal.rotation.z = Math.random() * Math.PI * 2;
  decal.position.set(x + (Math.random() - 0.5) * 1.8, 0.015, z + (Math.random() - 0.5) * 1.8);
  group.add(decal);
}

function addWallText(
  group: THREE.Group,
  row: number,
  col: number,
  face: 'north' | 'south' | 'east' | 'west',
  texture: THREE.CanvasTexture
): void {
  const material = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    roughness: 1,
    metalness: 0,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -3,
  });

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2.9, 2.9), material);
  const cx = col * CELL;
  const cz = row * CELL;

  if (face === 'north') {
    mesh.position.set(cx, 1.9, cz - CELL / 2 + 0.12);
  } else if (face === 'south') {
    mesh.position.set(cx, 1.9, cz + CELL / 2 - 0.12);
    mesh.rotation.y = Math.PI;
  } else if (face === 'west') {
    mesh.position.set(cx - CELL / 2 + 0.12, 1.9, cz);
    mesh.rotation.y = Math.PI / 2;
  } else {
    mesh.position.set(cx + CELL / 2 - 0.12, 1.9, cz);
    mesh.rotation.y = -Math.PI / 2;
  }

  group.add(mesh);
}

function addCeilingTube(
  group: THREE.Group,
  metal: THREE.Material,
  tubeMaterial: THREE.Material,
  x: number,
  z: number
): void {
  const housing = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.12, 0.34), metal);
  housing.position.set(x, WALL_H - 0.12, z);
  group.add(housing);

  const tube = new THREE.Mesh(new THREE.BoxGeometry(1.34, 0.06, 0.2), tubeMaterial);
  tube.position.set(x, WALL_H - 0.2, z);
  group.add(tube);
}


/* === corridor atmosphere functions ====================================== */

/**
 * Fallen ceiling tiles, scattered papers, rusted metal brackets -- corridor
 * clutter that makes the hospital feel abandoned rather than empty.
 */
function addCorridorDebris(
  group: THREE.Group,
  x: number,
  z: number,
  rust: THREE.Material,
  wood: THREE.Material,
  fabric: THREE.Material
): void {
  const count = 1 + Math.floor(Math.random() * 3);
  for (let i = 0; i < count; i++) {
    const roll = Math.random();
    let mesh: THREE.Mesh;
    if (roll < 0.35) {
      mesh = new THREE.Mesh(
        new THREE.BoxGeometry(rnd(0.5, 1.2), 0.04, rnd(0.5, 0.9)),
        new THREE.MeshStandardMaterial({ color: 0x8a8780, roughness: 1 })
      );
    } else if (roll < 0.65) {
      mesh = new THREE.Mesh(
        new THREE.BoxGeometry(rnd(0.15, 0.5), 0.06, rnd(0.06, 0.12)),
        rust
      );
    } else {
      mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(rnd(0.18, 0.38), rnd(0.24, 0.42)),
        fabric
      );
      mesh.rotation.x = -Math.PI / 2;
    }
    mesh.position.set(
      x + rnd(-1.2, 1.2),
      0.02 + i * 0.005,
      z + rnd(-1.2, 1.2)
    );
    mesh.rotation.y = rnd(0, Math.PI * 2);
    mesh.receiveShadow = true;
    group.add(mesh);
  }
}

/** Dark damp patch on the floor -- water leak stain. */
function addWaterPuddle(group: THREE.Group, x: number, z: number): void {
  const radius = rnd(0.6, 1.8);
  const geo = new THREE.CircleGeometry(radius, 16);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x0a0e14,
    roughness: 0.08,
    metalness: 0.55,
    transparent: true,
    opacity: rnd(0.35, 0.55),
  });
  const puddle = new THREE.Mesh(geo, mat);
  puddle.rotation.x = -Math.PI / 2;
  puddle.position.set(x + rnd(-0.8, 0.8), 0.008, z + rnd(-0.8, 0.8));
  puddle.receiveShadow = true;
  group.add(puddle);
}


/** A fallen stretcher / gurney in the corridor — reads as "someone was moved in a hurry". */
function addCorridorStretcher(
  group: THREE.Group,
  metal: THREE.Material,
  fabric: THREE.Material,
  x: number,
  z: number
): void {
  const stretcher = new THREE.Group();

  // Frame — two long rails
  for (const offset of [-0.32, 0.32]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 1.8), metal);
    rail.position.set(offset, 0.22, 0);
    stretcher.add(rail);
  }

  // Cross bars
  for (const zOff of [-0.6, 0, 0.6]) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.05, 0.06), metal);
    bar.position.set(0, 0.22, zOff);
    stretcher.add(bar);
  }

  // Legs — some bent/broken
  for (const [lx, lz] of [[-0.28, -0.7], [0.28, -0.7], [-0.28, 0.7], [0.28, 0.7]]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.22, 6), metal);
    leg.position.set(lx, 0.11, lz);
    leg.rotation.z = rnd(-0.25, 0.25);
    stretcher.add(leg);
  }

  // Mattress pad (slightly askew)
  const pad = new THREE.Mesh(
    new THREE.BoxGeometry(0.58, 0.06, 1.6),
    fabric
  );
  pad.position.set(rnd(-0.08, 0.08), 0.28, rnd(-0.08, 0.08));
  pad.rotation.y = rnd(-0.15, 0.15);
  stretcher.add(pad);

  stretcher.position.set(x, 0, z);
  stretcher.rotation.y = rnd(0, Math.PI * 2);
  stretcher.traverse((c) => { (c as THREE.Mesh).castShadow = true; });
  group.add(stretcher);
}

/** Dangling wire / cable from the ceiling — implies decay. */
function addDanglingWire(
  group: THREE.Group,
  metal: THREE.Material,
  x: number,
  z: number
): void {
  const wire = new THREE.Mesh(
    new THREE.CylinderGeometry(0.01, 0.01, rnd(0.5, 1.4), 4),
    metal
  );
  wire.position.set(x + rnd(-0.5, 0.5), WALL_H - rnd(0.3, 0.7), z + rnd(-0.5, 0.5));
  wire.rotation.z = rnd(-0.15, 0.15);
  wire.rotation.x = rnd(-0.15, 0.15);
  group.add(wire);
}

/** Wall-mounted fire extinguisher bracket (empty — the extinguisher is gone). */
function addWallBracket(
  group: THREE.Group,
  metal: THREE.Material,
  x: number,
  z: number,
  wallDir: number
): void {
  // Small bracket on the wall
  const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.15, 0.04), metal);
  bracket.position.set(x, 1.2, z);
  bracket.rotation.y = wallDir;
  group.add(bracket);
}

export { CELL, WALL_H, EYE_HEIGHT };

/* -------------------------------------------------------------------------
 * Interactive prop placement
 * ---------------------------------------------------------------------- */

/**
 * The nearest cell a prop can legally stand in, searching outward from an
 * anchor.
 *
 * Placements are written as "the cell near this desk", on purpose: only the
 * level's landmarks are hand-checked, and a prop that landed in a wall would
 * either hang in mid air or plug a corridor. Doorways, the elevator mouths and
 * any cell another prop already claimed are refused, so the plan above can be
 * edited without anyone having to re-check it by hand.
 */
function nearestPropCell(
  grid: number[][],
  anchor: { row: number; col: number },
  taken: Set<string>,
  needsWall = false,
): { row: number; col: number } | null {
  for (let radius = 0; radius <= 6; radius++) {
    for (let dr = -radius; dr <= radius; dr++) {
      for (let dc = -radius; dc <= radius; dc++) {
        if (Math.max(Math.abs(dr), Math.abs(dc)) !== radius) continue;
        const row = anchor.row + dr;
        const col = anchor.col + dc;
        if (row < 0 || row >= ROWS || col < 0 || col >= COLS) continue;
        if (!isOpen(grid, row, col)) continue;
        if (LAYOUT[row][col] === '+') continue;
        if (taken.has(`${row}:${col}`)) continue;
        // A wall-mounted prop has to be able to reach a wall: a switch or a
        // telephone dropped in the open middle of a corridor would hang in mid
        // air with nothing to be screwed to.
        if (needsWall && !hasWallNeighbour(grid, row, col)) continue;
        // Never in the mouth of a lift cage, which is the one cell per floor
        // the player has to walk through.
        let inCage = false;
        for (const deck of ELEVATOR_DECKS) {
          if (Math.abs(row - deck.cageRow) <= 1 && Math.abs(col - ELEVATOR_COL) <= 1) inCage = true;
        }
        if (inCage) continue;
        return { row, col };
      }
    }
  }
  return null;
}

/** True when any orthogonal neighbour of a cell is solid wall. */
function hasWallNeighbour(grid: number[][], row: number, col: number): boolean {
  for (const [dr, dc] of [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ] as Array<[number, number]>) {
    if (!isOpen(grid, row + dr, col + dc)) return true;
  }
  return false;
}

/**
 * Turns a wall-mounted prop to face out of the nearest wall and slides it
 * against that wall, so a light switch sits on plaster rather than hovering in
 * the middle of a corridor.
 */
function mountOnWall(
  prop: Interactable,
  cell: { row: number; col: number },
  grid: number[][],
  cellSize: number,
): void {
  const sides: Array<[number, number]> = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (const [dr, dc] of sides) {
    if (isOpen(grid, cell.row + dr, cell.col + dc)) continue;
    // A wall on this side: stand in front of it, facing away from it.
    const x = cell.col * cellSize + dc * -(cellSize / 2 - 0.16);
    const z = cell.row * cellSize + dr * -(cellSize / 2 - 0.16);
    prop.group.position.set(x, 0, z);
    // Local +z is the face, so the yaw is whatever turns it off the wall.
    prop.group.rotation.y = Math.atan2(-dc, -dr);
    prop.centre.set(x, prop.centre.y, z);
    return;
  }
}

/**
 * Picks a doorway in a floor band that can be chained without sealing
 * anything else off.
 *
 * A chained door is shut until the player beats the lock, so chaining the
 * wrong one would strand a key, the fuse or the crowbar behind it and make the
 * run unwinnable. Each candidate is trialled as if it were a wall, and only
 * one that still leaves every critical pickup walkable from the spawn is
 * accepted.
 */
function pickChainableDoorway(
  grid: number[][],
  doors: DoorFixture[],
  band: number,
  taken: DoorChain[],
): DoorFixture | null {
  const anchors: Array<{ row: number; col: number }> = [
    CROWBAR_CELL,
    FUSE_CELL,
    SPARE_FUSE_CELL,
    BREAKER_CELL,
    CARD_CELL,
    SUBSTATION_CELL,
    PLAYER_SPAWN,
    MONSTER_SPAWN,
    ...KEY_CELLS,
  ];
  for (const deck of ELEVATOR_DECKS) anchors.push({ row: deck.cageRow, col: ELEVATOR_COL });

  for (const door of doors) {
    if (floorAt(door.row) !== band) continue;
    if (taken.some((chain) => chain.row === door.row && chain.col === door.col)) continue;
    if (doors.some((other) => other !== door && other.row === door.row && other.col === door.col)) {
      continue;
    }
    const blocked = `${door.row}:${door.col}`;
    const seen = floodCells(grid, PLAYER_SPAWN.row, PLAYER_SPAWN.col, blocked);
    const reachable = anchors.every((cell) => seen.has(cell.row * COLS + cell.col));
    if (reachable) return door;
  }
  return null;
}

/** Every cell walkable from a start, with one cell taken out of the map. */
function floodCells(
  grid: number[][],
  startRow: number,
  startCol: number,
  blockedKey: string,
): Set<number> {
  const seen = new Set<number>();
  const queue: Array<[number, number]> = [[startRow, startCol]];
  seen.add(startRow * COLS + startCol);
  while (queue.length > 0) {
    const [row, col] = queue.pop() as [number, number];
    for (const [dr, dc] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ] as Array<[number, number]>) {
      const r = row + dr;
      const c = col + dc;
      if (r < 0 || r >= ROWS || c < 0 || c >= COLS) continue;
      if (`${r}:${c}` === blockedKey) continue;
      if (!isOpen(grid, r, c)) continue;
      const key = r * COLS + c;
      if (seen.has(key)) continue;
      seen.add(key);
      queue.push([r, c]);
    }
  }
  return seen;
}
