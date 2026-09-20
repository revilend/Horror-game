/**
 * Run checkpoints: what it takes to hand a phone player back the run that the
 * operating system killed.
 *
 * A browser tab that is backgrounded on Android can be discarded at any
 * moment - a call, a notification, a memory squeeze - and until now that meant
 * a player twenty minutes into the asylum started again from the intro. So the
 * run is written to localStorage as it is played, and the start menu offers to
 * pick it up.
 *
 * What is deliberately NOT stored is anything that would have to be replayed
 * to stay honest: doors the player already walked through are re-closed, and
 * the van is not running. Everything that is a one-way gate - the melted
 * padlock, the cut chain, the pried boards, the keys in the drawers - is
 * restored, because a lock that stays shut after its key is spent is a
 * dead end, not a checkpoint.
 */
import type { ItemId } from './Inventory';
import type { QuestFlags } from './Quests';

const STORAGE_KEY = 'asylum.run';
const VERSION = 2;

/** Seconds of play between checkpoint writes. */
export const CHECKPOINT_INTERVAL = 5;

/**
 * How many zones a row can belong to: the lift's five landings, plus the
 * courtyard, which is walked to rather than ridden to and so is not a deck.
 */
const ZONE_COUNT = 6;

export interface RunSnapshot {
  v: number;
  savedAt: number;
  /** Deck the player was on, as an index into the floor order. */
  floor: number;
  x: number;
  z: number;
  yaw: number;
  elapsed: number;
  health: number;
  flashlightBattery: number;
  flashlightOn: boolean;
  keysCollected: number;
  cardCollected: boolean;
  notesCollected: number;
  /** Indices of the world pickups already taken, so they cannot respawn. */
  keyTaken: number[];
  cardTaken: number[];
  noteTaken: number[];
  /** Desks whose drawer was already emptied, keyed "row:col". */
  deskLoot: string[];
  /** Locked doors already opened, so a spent tool never strands the player. */
  boardedPried: boolean;
  powerOn: boolean;
  substationOn: boolean;
  fusesSeated: number;
  questFlags: QuestFlags;
  inventory: Array<[ItemId, number]>;
}

export function saveCheckpoint(snapshot: RunSnapshot): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  } catch {
    /* private mode, or the quota is full - the run simply is not saved */
  }
}

export function loadCheckpoint(): RunSnapshot | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as RunSnapshot;
    if (!parsed || parsed.v !== VERSION) return null;
    if (!Array.isArray(parsed.inventory) || !parsed.questFlags) return null;
    if (!Number.isFinite(parsed.x) || !Number.isFinite(parsed.z)) return null;
    // The zone has to be one the plan can actually produce - anything else
    // would read past the end of the deck table when the run is restored.
    if (!Number.isInteger(parsed.floor) || parsed.floor < 0 || parsed.floor > ZONE_COUNT - 1) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function clearCheckpoint(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* nothing to do */
  }
}

/** Seconds since the checkpoint was written, for the menu label. */
export function checkpointAge(snapshot: RunSnapshot): number {
  return Math.max(0, Math.round((Date.now() - snapshot.savedAt) / 1000));
}
