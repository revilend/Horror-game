import * as THREE from 'three';
import { createUvLampMesh } from './PuzzleProps';
import { LETTER_INDEX_OFFSET, LETTERS } from './notes';
import { CELL, roomIndexAt, type MapInfo, type RoomInfo } from './World';

/* -------------------------------------------------------------------------
 * THE ARCHIVE LETTERS
 *
 * The twenty scattered notes are Dr Ren's account of the outbreak; the five
 * letters are what the people still alive on the wards wrote down in their
 * last days. They are the one part of the story that is *placed* rather than
 * dealt, so each one is read in the room its author was sitting in:
 *
 *   1  the ward the player wakes in (the bed beside their own)
 *   2  the nurses' station desk
 *   3  the operating theatre, at the blood table
 *   4  the generator room wall, under the breaker
 *   5  the third-floor roof-access door, beside the corpse
 *
 * They live here rather than in World.ts because they are not level geometry:
 * the level is rebuilt with a fresh scatter every run, while these five have to
 * land in the same rooms every time. The cells are resolved from the room
 * rectangles the plan already published, so a room that moves in LAYOUT takes
 * its letter with it instead of stranding it inside a wall.
 * ---------------------------------------------------------------------- */

/** A room to search, and which corner of it the letter belongs in. */
interface LetterTarget {
  /** LAYOUT character, or null for "wherever the player wakes up". */
  room: string | null;
  /** Corner to look in first, as fractions of the room rectangle. */
  bias: [number, number];
}

const LETTER_TARGETS: LetterTarget[] = [
  { room: null, bias: [0.5, 0.5] }, // the ward the player wakes in
  { room: 'c', bias: [1, 0] }, //  nurses' station: the desk
  { room: 'h', bias: [0.5, 0.5] }, // operating theatre: the table
  { room: 'm', bias: [1, 1] }, //  generator room: the wall by the breaker
  { room: 'X', bias: [1, 1] }, //  3F roof-access door, by the corpse
];

/** The UV lamp leans on the generator room wall, beside the mechanic's note. */
const UV_LAMP_TARGET: LetterTarget = { room: 'm', bias: [0.5, 0] };

interface FloorCell {
  row: number;
  col: number;
}

/**
 * The floor cell of a room closest to one of its corners.
 *
 * Nothing is trusted to be walkable: the cell is taken from the collision grid
 * the plan produced, and the room rectangle is scanned outward from the
 * preferred corner until real floor turns up. That is what keeps a letter off a
 * wall if the plan is ever redrawn.
 */
function findFloorCell(map: MapInfo, room: RoomInfo, bias: [number, number]): FloorCell | null {
  const wantRow = room.row1 + (room.row2 - room.row1) * bias[0];
  const wantCol = room.col1 + (room.col2 - room.col1) * bias[1];

  let best: FloorCell | null = null;
  let bestDistance = Number.POSITIVE_INFINITY;
  for (let row = room.row1; row <= room.row2; row++) {
    const line = map.grid[row];
    if (!line) continue;
    for (let col = room.col1; col <= room.col2; col++) {
      if (line[col] === 0) continue;
      const distance = Math.hypot(row - wantRow, col - wantCol);
      if (distance >= bestDistance) continue;
      bestDistance = distance;
      best = { row, col };
    }
  }
  return best;
}

/** The room the player wakes up in: no hard-coded cell, so it always matches. */
function wakingRoom(map: MapInfo): RoomInfo | null {
  const index = roomIndexAt(map, map.playerSpawn.x, map.playerSpawn.z);
  return index >= 0 ? (map.rooms[index] ?? null) : null;
}

/**
 * The nearest open cell to a point that is not the point itself.
 *
 * The fallback for the first letter: the player wakes in a ward as often as in
 * the corridor outside one, and the letter that was written on the bed beside
 * theirs has to be findable either way.
 */
function nearestOpenCell(map: MapInfo, point: THREE.Vector3): FloorCell | null {
  const row0 = Math.round(point.z / CELL);
  const col0 = Math.round(point.x / CELL);

  let best: FloorCell | null = null;
  let bestDistance = Number.POSITIVE_INFINITY;
  for (let dr = -3; dr <= 3; dr++) {
    for (let dc = -3; dc <= 3; dc++) {
      if (dr === 0 && dc === 0) continue; // never under the player's own feet
      const row = row0 + dr;
      const col = col0 + dc;
      const line = map.grid[row];
      if (!line || line[col] === 0) continue;
      const distance = Math.hypot(dr, dc);
      if (distance >= bestDistance) continue;
      bestDistance = distance;
      best = { row, col };
    }
  }
  return best;
}

function resolveCell(map: MapInfo, target: LetterTarget): FloorCell | null {
  if (!target.room) {
    const room = wakingRoom(map);
    return (room && findFloorCell(map, room, target.bias)) || nearestOpenCell(map, map.playerSpawn);
  }
  const room = map.rooms.find((entry) => entry.key === target.room) ?? null;
  return room ? findFloorCell(map, room, target.bias) : null;
}

/**
 * The index a letter's pickup reports to the reader.
 *
 * Letters sit at the end of READABLES, after the twenty notes, so a page taken
 * off the floor and a page of Ren's journal never collide in the save file's
 * list of read papers.
 */
const LETTER_NOTE_INDEX = LETTER_INDEX_OFFSET;

/** A sheet of 1987 asylum paper, lying where it was dropped. */
function makePaper(material: THREE.Material, cell: FloorCell, index: number): THREE.Mesh {
  const sheet = new THREE.Mesh(new THREE.PlaneGeometry(0.46, 0.62), material);
  sheet.rotation.x = -Math.PI / 2.3;
  sheet.position.set(cell.col * CELL + 0.28, 0.95, cell.row * CELL - 0.28);
  // `isNote` routes it through the note pickup path in the game (flat on the
  // floor, taken with the action button, remembered in the save); `isLetter`
  // and `letterIndex` are what tell the reader which page to open - and that it
  // is a letter at all rather than one of Ren's scattered notes.
  sheet.userData.isNote = true;
  sheet.userData.isLetter = true;
  sheet.userData.letterIndex = index;
  sheet.userData.noteIndex = LETTER_NOTE_INDEX + index;
  sheet.userData.pickupIndex = index;
  return sheet;
}

export interface ArchivePlacement {
  /** The sheets that were laid out, with the letter each one carries. */
  sheets: Array<{ index: number; mesh: THREE.Mesh }>;
  /** The UV lamp, or null if the generator room could not be resolved. */
  lamp: THREE.Object3D | null;
  /** The paper material, so the UV lamp can make the sheets blaze. */
  paper: THREE.MeshStandardMaterial;
}

/**
 * Lays the five letters and the UV lamp into a freshly built level.
 *
 * `skip` is how a run that has already been read is put back: the game passes
 * the letters its save file says are finished, and those sheets are simply not
 * laid out again.
 */
export function placeArchiveLetters(
  scene: THREE.Scene,
  map: MapInfo,
  skip: (index: number) => boolean = () => false,
): ArchivePlacement {
  // One material for all five: the paper should read identically wherever a
  // letter is found, and it is the glow that makes a sheet worth crossing a
  // dark room for.
  const paper = new THREE.MeshStandardMaterial({
    color: 0xe7dcbb,
    emissive: 0xffb347,
    emissiveIntensity: 0.75,
    roughness: 0.88,
    metalness: 0,
    side: THREE.DoubleSide,
  });

  const sheets: Array<{ index: number; mesh: THREE.Mesh }> = [];
  LETTER_TARGETS.forEach((target, index) => {
    if (index >= LETTERS.length || skip(index)) return;
    const cell = resolveCell(map, target);
    if (!cell) {
      console.warn(`[letters] no floor cell for letter ${index + 1} (${LETTERS[index].id})`);
      return;
    }
    const mesh = makePaper(paper, cell, index);
    scene.add(mesh);
    sheets.push({ index, mesh });
  });

  // The UV lamp: the run's only reveal item, left on the generator room shelf.
  // An ordinary pickup, so the hand button takes it like anything else.
  let lamp: THREE.Object3D | null = null;
  const lampCell = resolveCell(map, UV_LAMP_TARGET);
  if (lampCell) {
    const body = new THREE.MeshStandardMaterial({
      color: 0x2b2f36,
      roughness: 0.45,
      metalness: 0.6,
    });
    const lens = new THREE.MeshStandardMaterial({
      color: 0x3a1d5c,
      emissive: 0x9b5cff,
      emissiveIntensity: 1.1,
      roughness: 0.2,
      metalness: 0.1,
    });
    lamp = createUvLampMesh(body, body, lens);
    lamp.position.set(lampCell.col * CELL, 0.95, lampCell.row * CELL);
    lamp.userData.itemId = 'uv';
    scene.add(lamp);
  }

  return { sheets, lamp, paper };
}
