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
  createIVStand,
  createIsolationBed,
  createKitchenCounter,
  createLockerProp,
  createMorgueDrawer,
  createMonitor,
  createOperatingTable,
  createShowerStall,
  createSink,
  createTrashBin,
  createWheelchairProp,
  createBookshelf,
  createCouch,
} from './PuzzleProps';
import {
  createAsphaltTexture,
  createBloodTextTexture,
  createBloodTexture,
  createCeilingTexture,
  createDirtTexture,
  createDoorTexture,
  createFloorTexture,
  createOuterWallTexture,
  createWallTexture,
} from './Textures';

const CELL = 4; // cell size in world units
const WALL_H = 3.5;
const WALL_THICK = 0.2;
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
  // Stairwells cut through the old basement floor into the floors below
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

/** Stairwell cells -- the two openings in the stairwell wall (row 35). */
const STAIR_CELLS = [
  { row: 35, col: 5 },
  { row: 35, col: 20 },
];

/**
 * Which floor a row belongs to, used by the minimap and the stair transition.
 * Grounds = -1 (outdoor), then 1-4 for each indoor level.
 */
export function floorAt(row: number): number {
  if (row < OUTDOOR_ROWS) return -1;
  if (row <= 34) return 1;
  if (row <= 36) return 1;
  if (row <= 42) return 2;
  if (row <= 48) return 3;
  if (row <= 54) return 4;
  return 4;
}

/** Floor names for UI display. */
export function floorName(floor: number): string {
  switch (floor) {
    case -1: return "HOVLI";
    case 1: return "1-QAVAT";
    case 2: return "2-QAVAT";
    case 3: return "CHUQUR PODVAL";
    case 4: return "3-QAVAT";
    default: return "";
  }
}


const COLS = 28;
const ROWS = 58;

interface RoomMeta {
  name: string;
  subtitle: string;
}

const ROOM_META: Record<string, RoomMeta> = {
  // Hospital - first floor
  a: { name: 'QABULXONA', subtitle: 'Chiqish eshigi shu yerda' },
  b: { name: 'TELEFON MARKAZI', subtitle: 'Simlar uzilgan — faqat shitirlash eshitiladi' },
  c: { name: 'HAMSHIRA XONASI', subtitle: 'Kimdir hozirgina chiqib ketgan' },
  d: { name: 'XONA 201', subtitle: 'Karavotlar bo\u2018sh emas' },
  e: { name: 'XONA 202', subtitle: 'Devorda tirnoq izlari' },
  f: { name: 'OMBORXONA', subtitle: 'Eshik tashqaridan qulflangan' },
  // Hospital - surgical floor
  g: { name: 'KUTUBXONA', subtitle: 'Har bir bemorning ismi yozilgan' },
  h: { name: 'OPERATSIYA XONASI', subtitle: 'Qon hali qurimagan' },
  i: { name: 'INTENSIV TERAPIYA', subtitle: 'Monitorlar jim' },
  j: { name: 'RENTGEN XONASI', subtitle: 'Suratlar devorga mixlangan' },
  k: { name: 'LABORATORIYA', subtitle: 'Namunalar hali ham sovuq' },
  m: { name: 'GENERATOR XONASI', subtitle: 'Elektr shu yerdan boshqariladi' },
  // Hospital - basement
  n: { name: 'XONA 101', subtitle: 'Kundaliklar yirtilgan' },
  o: { name: 'MORGNIY', subtitle: 'Bu yerda hamma narsa sovuq' },
  p: { name: 'ARXIV', subtitle: 'Hujjatlar yoqib yuborilgan' },
  q: { name: 'DUSH XONASI', subtitle: 'Kranlardan qon oqadi' },
  r: { name: 'OSHXONA', subtitle: 'Idishlar hali yuvilmagan' },
  s: { name: 'XONA 102', subtitle: 'Deraza tashqarisida hech narsa yo\u2018q' },
  // The grounds
  t: { name: 'PODSTANSIYA', subtitle: 'Asosiy darvoza quvvati shu yerdan o\u2018tadi' },
  u: { name: 'DARVOZA MAYDONI', subtitle: 'Qochish yo\u2018li shu yerda tugaydi' },
  v: { name: 'QABRISTON', subtitle: 'Kasalxona o\u2018liklarini shu yerga ko\u2018mishardi' },
  w: { name: 'HOVLI', subtitle: 'Kasalxona ortidagi bo\u2018sh hovli' },
  x: { name: 'AVTOTURARGOH', subtitle: 'Tez yordam mashinasi hali ham shu yerda' },
  y: { name: 'QO\u2018RIQXONA', subtitle: 'Chiroq yonib turgan edi — kim yoqqan?' },
  z: { name: 'KREMATORIY', subtitle: 'Bu yerda hech narsa qolmadi' },
  // Hospital - second floor (IKKINCHI QAVAT)
  A: { name: 'BOSH SHIFOKOR XONASI', subtitle: 'Protokol 7 shu yerda imzolangan' },
  B: { name: 'KIR YUVISH XONASI', subtitle: 'Mashinada hali ham qonli kiyimlar' },
  C: { name: 'OSHXONA', subtitle: 'Ovqat hech qachon tarqatilmagan' },
  D: { name: 'BOLALAR PALATASI', subtitle: 'O\u2018yinchoqlar devor bo\u2018ylab tizilgan' },
  E: { name: 'KUZATUV XONASI', subtitle: 'Bir tomonlama oyna — kim kimni kuzatgan?' },
  F: { name: 'IBODATXONA', subtitle: 'Xoch teskari osilgan' },
  G: { name: 'FIZIOTERAPIYA', subtitle: 'Tayanchlar hali ham shu yerda' },
  H: { name: 'STOMATOLOGIYA XONASI', subtitle: 'Kreslo qonli' },
  I: { name: 'KO\u2018Z KLINIKASI', subtitle: 'Ko\u2018zoynaklar javonda qolgan' },
  J: { name: 'TERAPIYA XONASI', subtitle: 'Kundalik daftarlar yirtilgan' },
  K: { name: 'ANESTEZIYA XONASI', subtitle: 'Gaz ballonlari bo\u2018sh' },
  L: { name: 'OMBORXONA 2', subtitle: 'Yopiq qutilar — hech kim ochmagan' },
  // Hospital - deep basement (CHUQUR PODVAL)
  M: { name: 'QOZONXONA', subtitle: 'Qozonlar hali ham issiq' },
  N: { name: 'NASOS XONASI', subtitle: 'Quvurlar titraydi' },
  O: { name: 'TUNEL', subtitle: 'Bu yo\u2018l qayerga olib boradi?' },
  P: { name: 'LABORATORIYA 7', subtitle: 'Namunalar hali ham tirik' },
  Q: { name: 'INKUBATOR XONASI', subtitle: 'Kichkina qo\u2018llar shisha ortida' },
  R: { name: 'MORGNIY 2', subtitle: 'O\u2018ttiz yetti tortma — biri ochiq' },
  // Hospital - third floor (UCHINCHI QAVAT)
  S: { name: 'IZOLYATOR', subtitle: 'Bu xonada hech kim bir kundan ortiq qolmagan' },
  T: { name: 'ELEKTROTERAPIYA', subtitle: 'Kresloda hali ham qayish bog\u2018langan' },
  U: { name: 'GIDROTERAPIYA', subtitle: 'Hammomdagi suv qizil' },
  V: { name: 'XODIMLAR XONASI', subtitle: 'Choy hali ham iliq' },
  W: { name: 'KONSILIUM XONASI', subtitle: 'Yig\u2018ilish bayonnomasi oxirigacha yozilgan' },
  X: { name: 'TOMGA CHIQISH', subtitle: 'Eshik ochiq — tashqarida faqat yomg\u2018ir' },
};

/** Room letters that sit outside the building's walls. */
const OUTDOOR_ROOM_CHARS = new Set(['t', 'u', 'v', 'w', 'x', 'y', 'z']);

export interface RoomInfo extends RoomMeta {
  index: number;
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
const PLAYER_SPAWN = { row: 28, col: 5 };
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
/** Boiler room, deep basement: pries the boarded door open. */
const CROWBAR_CELL = { row: 47, col: 3 };
/** Spare torch cells, scattered where a torch would have been left. */
const BATTERY_CELLS = [
  { row: 17, col: 13 }, // first corridor
  { row: 23, col: 15 }, // X-ray room
  { row: 37, col: 15 }, // children's ward, second floor
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
const WALL_TEXTS: Array<{ row: number; col: number; face: 'north' | 'south' | 'east' | 'west'; text: string }> = [
  { row: 22, col: 8, face: 'north', text: 'SIZ QILDINGIZ' },
  { row: 22, col: 25, face: 'north', text: 'OZOD BO\u2018LMADIM' },
  { row: 30, col: 8, face: 'north', text: '\u211637' },
  { row: 30, col: 16, face: 'north', text: 'YANA QAYTDINGMI' },
  // Outside, painted on the hospital's own back wall
  { row: 14, col: 6, face: 'south', text: 'CHIQISH YO\u2018Q' },
  { row: 14, col: 20, face: 'south', text: 'U TASHQARIDA HAM BOR' },
  { row: 10, col: 20, face: 'west', text: 'KUYDI' },
  { row: 4, col: 24, face: 'east', text: 'DARVOZA SIZNI KUTADI' },
  // Second floor & deep basement
  { row: 36, col: 1, face: 'north', text: 'PROTOKOL 7' },
  { row: 46, col: 3, face: 'east', text: 'YIGIRMA YETTINCHI' },
  { row: 47, col: 23, face: 'west', text: 'MENI QIDIRMANG' },
  // Third floor
  { row: 52, col: 1, face: 'north', text: 'UCHINCHI QAVAT' },
  { row: 56, col: 21, face: 'south', text: 'TOM YOPILGAN' },
];

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
    rooms.push({ index, ...meta, ...box, outdoor: OUTDOOR_ROOM_CHARS.has(char) });
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

/**
 * The plan is hand-authored, so every interesting cell must be provably
 * reachable from the spawn. A sealed-off room - or an unreachable exit - would
 * otherwise be a silent, unwinnable bug.
 */
function assertReachable(grid: number[][], required: Array<[number, number, string]>): void {
  if (!isOpen(grid, PLAYER_SPAWN.row, PLAYER_SPAWN.col)) {
    throw new Error(`Player spawn (${PLAYER_SPAWN.row},${PLAYER_SPAWN.col}) is inside a wall`);
  }

  const seen = new Uint8Array(ROWS * COLS);
  const queue: number[] = [PLAYER_SPAWN.row * COLS + PLAYER_SPAWN.col];
  seen[queue[0]] = 1;

  let head = 0;
  while (head < queue.length) {
    const current = queue[head++];
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
      if (!isOpen(grid, nr, nc)) continue;
      const next = nr * COLS + nc;
      if (seen[next]) continue;
      seen[next] = 1;
      queue.push(next);
    }
  }

  for (const [row, col, label] of required) {
    if (!seen[row * COLS + col]) {
      throw new Error(`${label} at (${row},${col}) cannot be reached from the spawn point`);
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
 * Every doorway ('+') that touches a given room, i.e. the room's ways in.
 * Derived from the plan so boarding a room up keeps working when the layout
 * changes.
 */
function findRoomDoors(
  layout: string[],
  rooms: RoomInfo[],
  roomChar: string
): Array<{ row: number; col: number }> {
  const room = rooms.find((entry) => entry.name === ROOM_META[roomChar]?.name);
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

export function buildWorld(scene: THREE.Scene): MapInfo {
  const { grid, roomIndexByCell, rooms, indexByChar } = parseLayout();

  // Entity cells override the base terrain values (still walkable)
  const CELL_KEY = 2;
  const CELL_EXIT = 3;
  const CELL_MONSTER = 4;
  const CELL_NOTE = 5;
  const CELL_BREAKER = 6;
  const CELL_CARD = 7;
  const CELL_SUBSTATION = 8;

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
    emissiveIntensity: 0.04,
    roughness: 0.4,
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

  // --- Doorways ----------------------------------------------------------
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (LAYOUT[row][col] !== '+') continue;
      const vertical =
        (isOpen(grid, row - 1, col) || isOpen(grid, row + 1, col)) &&
        !(isOpen(grid, row, col - 1) || isOpen(grid, row, col + 1));
      addDoorFrame(props, col * CELL, row * CELL, vertical, metalMat);
    }
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
  for (const decal of WALL_TEXTS) {
    addWallText(props, decal.row, decal.col, decal.face, createBloodTextTexture(decal.text));
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
  spawnItem('crowbar', CROWBAR_CELL, createCrowbarMesh(crowbarMat), 0.9);
  for (const cell of BATTERY_CELLS) {
    spawnItem('battery', cell, createBatteryMesh(batteryMat, metalMat), 0.9);
  }

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

export { CELL, WALL_H, EYE_HEIGHT, STAIR_CELLS };
