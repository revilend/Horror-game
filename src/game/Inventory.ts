import { t } from './i18n';
/**
 * What you are carrying, and the strip of slots that shows it.
 *
 * Picking things up used to happen by walking over them. Now every pickup has
 * to be taken deliberately, so the inventory is also the record of what the
 * player has actually noticed - which matters when half the run's progress is
 * gated on having the right object in hand.
 */

export type ItemId =
  | 'key'
  | 'card'
  | 'fuse'
  | 'crowbar'
  | 'battery'
  | 'bottle'
  | 'vial'
  | 'acid'
  | 'ignition'
  | 'boltcutters'
  | 'uv';

export interface ItemDef {
  name: string;
  icon: string;
  hint: string;
  /** Usable items can be triggered from their slot. */
  usable: boolean;
  /** How many fit in one slot before a second slot is drawn. */
  perSlot: number;
}

export const ITEM_DEFS: Record<ItemId, ItemDef> = {
  key: {
    // Read through i18n so the strip and its tooltips follow the
    // selected language, even when it is switched mid-run.
    get name() { return t('item.key.name'); },
    icon: '\u{1F511}',
    get hint() { return t('item.key.hint'); },
    usable: false, perSlot: 1,
  },
  card: {
    // Read through i18n so the strip and its tooltips follow the
    // selected language, even when it is switched mid-run.
    get name() { return t('item.card.name'); },
    icon: '\u{1F4B3}',
    get hint() { return t('item.card.hint'); },
    usable: false, perSlot: 1,
  },
  fuse: {
    // Read through i18n so the strip and its tooltips follow the
    // selected language, even when it is switched mid-run.
    get name() { return t('item.fuse.name'); },
    icon: '\u{1F50C}',
    get hint() { return t('item.fuse.hint'); },
    usable: false, perSlot: 1,
  },
  crowbar: {
    // Read through i18n so the strip and its tooltips follow the
    // selected language, even when it is switched mid-run.
    get name() { return t('item.crowbar.name'); },
    icon: '\u{1F528}',
    get hint() { return t('item.crowbar.hint'); },
    usable: false, perSlot: 1,
  },
  battery: {
    // Read through i18n so the strip and its tooltips follow the
    // selected language, even when it is switched mid-run.
    get name() { return t('item.battery.name'); },
    icon: '\u{1F50B}',
    get hint() { return t('item.battery.hint'); },
    usable: true, perSlot: 3,
  },
  bottle: {
    // Read through i18n so the strip and its tooltips follow the
    // selected language, even when it is switched mid-run.
    get name() { return t('item.bottle.name'); },
    icon: '\u{1F37A}',
    get hint() { return t('item.bottle.hint'); },
    usable: true, perSlot: 5,
  },
  vial: {
    // Lighter and thinner than a bottle: it flies further and cracks sharper,
    // so both are worth carrying.
    get name() { return t('item.vial.name'); },
    icon: '\u{1F9EA}',
    get hint() { return t('item.vial.hint'); },
    usable: true, perSlot: 4,
  },
  acid: {
    // Read through i18n so the strip and its tooltips follow the
    // selected language, even when it is switched mid-run.
    get name() { return t('item.acid.name'); },
    icon: '\u{2620}\u{FE0F}',
    get hint() { return t('item.acid.hint'); },
    usable: false, perSlot: 1,
  },
  ignition: {
    // Read through i18n so the strip and its tooltips follow the
    // selected language, even when it is switched mid-run.
    get name() { return t('item.ignition.name'); },
    icon: '\u{1F511}',
    get hint() { return t('item.ignition.hint'); },
    usable: false, perSlot: 1,
  },
  boltcutters: {
    // Read through i18n so the strip and its tooltips follow the
    // selected language, even when it is switched mid-run.
    get name() { return t('item.boltcutters.name'); },
    icon: '\u{2702}\u{FE0F}',
    get hint() { return t('item.boltcutters.hint'); },
    usable: false, perSlot: 1,
  },
  uv: {
    // Read through i18n so the strip and its tooltips follow the
    // selected language, even when it is switched mid-run.
    get name() { return t('item.uv.name'); },
    icon: '\u{1FA79}',
    get hint() { return t('item.uv.hint'); },
    usable: false, perSlot: 1,
  },
};

/**
 * Maps a key code to a hotbar slot, or null when it is not a slot key.
 * Both rows are accepted, since a phone keyboard or a numpad should work.
 */
export function slotIndexFromCode(code: string): number | null {
  const match = /^(?:Digit|Numpad)([1-9])$/.exec(code);
  if (!match) return null;
  return Number(match[1]) - 1;
}

export class Inventory {
  private readonly counts = new Map<ItemId, number>();
  private readonly root: HTMLElement | null;
  private readonly readout: HTMLElement | null;
  private readonly slots: HTMLButtonElement[] = [];

  /** The slot the player last pointed at, and the one the readout describes. */
  private selected = 0;

  /** Raised when the player taps a slot holding a usable item. */
  onUse: ((id: ItemId) => void) | null = null;

  constructor(root: HTMLElement | null, slotCount = 8, readout: HTMLElement | null = null) {
    this.root = root;
    this.readout = readout;
    if (!this.root) return;

    for (let i = 0; i < slotCount; i++) {
      const slot = document.createElement('button');
      slot.type = 'button';
      slot.className = 'inv-slot empty';
      slot.addEventListener('click', () => this.press(i));
      slot.addEventListener('pointerenter', () => this.point(i));
      this.slots.push(slot);
      this.root.appendChild(slot);
    }
  }

  /**
   * One press of a hotbar key, or a tap on a slot.
   *
   * The first press selects and describes the item; pressing the same slot
   * again uses it. That order matters on a phone, where the readout is the
   * only place the player can find out what they are actually carrying.
   */
  press(index: number): void {
    const entry = this.slotContents()[index];
    const repeat = this.selected === index;
    this.selected = index;
    if (!entry) {
      this.render();
      return;
    }
    if (repeat && ITEM_DEFS[entry.id].usable) {
      this.onUse?.(entry.id);
      return;
    }
    this.render();
  }

  /** Describes a slot without using it - the mouse-hover half of press(). */
  private point(index: number): void {
    this.selected = index;
    this.render();
  }

  /** Re-renders the strip, e.g. after the language changed. */
  refresh(): void {
    this.render();
  }

  add(id: ItemId, count = 1): void {
    this.counts.set(id, (this.counts.get(id) ?? 0) + count);
    this.render();
  }

  count(id: ItemId): number {
    return this.counts.get(id) ?? 0;
  }

  has(id: ItemId, count = 1): boolean {
    return this.count(id) >= count;
  }

  /** Removes `count` of an item, returning false (and changing nothing) if the
   *  player does not have that many. */
  take(id: ItemId, count = 1): boolean {
    const held = this.count(id);
    if (held < count) return false;
    const left = held - count;
    if (left === 0) this.counts.delete(id);
    else this.counts.set(id, left);
    this.render();
    return true;
  }

  clear(): void {
    this.counts.clear();
    this.render();
  }

  /** Every held item, as plain data that JSON can carry (see Checkpoint.ts). */
  snapshot(): Array<[ItemId, number]> {
    return [...this.counts.entries()].filter(([, held]) => held > 0);
  }

  /** Puts a saved run's items back, ignoring anything unrecognised. */
  restore(entries: Array<[ItemId, number]>): void {
    this.counts.clear();
    for (const [id, held] of entries ?? []) {
      if (!ITEM_DEFS[id] || !Number.isFinite(held) || held <= 0) continue;
      this.counts.set(id, Math.floor(held));
    }
    this.selected = 0;
    this.render();
  }

  /** Keys are counted as one stack, since three of them open one door. */
  get totalKeys(): number {
    return this.count('key');
  }

  /**
   * Flattens the held items into display slots: one entry per slot, so three
   * batteries read as three separate cells rather than a "x3" badge.
   */
  private slotContents(): Array<{ id: ItemId; index: number }> {
    const out: Array<{ id: ItemId; index: number }> = [];
    for (const [id, held] of this.counts) {
      const perSlot = ITEM_DEFS[id].perSlot;
      const stacks = Math.ceil(held / perSlot);
      for (let s = 0; s < stacks; s++) {
        if (out.length >= this.slots.length) return out;
        out.push({ id, index: s });
      }
    }
    return out;
  }

  private render(): void {
    if (!this.root) return;

    const contents = this.slotContents();
    const slotOf = new Map<ItemId, number>();
    contents.forEach((entry, position) => {
      if (!slotOf.has(entry.id)) slotOf.set(entry.id, position);
    });

    this.slots.forEach((slot, i) => {
      const entry = contents[i];
      slot.className = 'inv-slot';
      slot.classList.toggle('selected', i === this.selected);
      slot.replaceChildren();

      if (!entry) {
        slot.classList.add('empty');
        slot.disabled = true;
        slot.removeAttribute('title');
        slot.setAttribute('aria-label', t('inv.empty'));
        return;
      }

      const def = ITEM_DEFS[entry.id];
      const held = this.count(entry.id);
      const perSlot = def.perSlot;
      const shown = Math.min(perSlot, held - entry.index * perSlot);

      slot.disabled = false;
      slot.classList.toggle('usable', def.usable);
      slot.classList.add(`inv-${entry.id}`);
      slot.title = `${def.name} — ${def.hint}`;
      slot.setAttribute('aria-label', `${def.name}: ${def.hint}`);

      const icon = document.createElement('span');
      icon.className = 'inv-icon';
      icon.textContent = def.icon;
      slot.appendChild(icon);

      if (perSlot > 1 && shown > 1) {
        const badge = document.createElement('span');
        badge.className = 'inv-count';
        badge.textContent = String(shown);
        slot.appendChild(badge);
      }
    });

    this.root.classList.toggle('has-items', contents.length > 0);
    this.renderReadout(contents);
  }

  /**
   * The line above the strip: which slot is live and what it will do.
   *
   * Without it a slot is just an emoji - the player cannot tell a key they
   * need from a bottle they can throw, and the hint is where the difference is
   * actually explained.
   */
  private renderReadout(contents: Array<{ id: ItemId; index: number }>): void {
    if (!this.readout) return;

    const entry = contents[this.selected];
    if (!entry || contents.length === 0) {
      this.readout.textContent = '';
      this.readout.classList.remove('show');
      return;
    }

    const def = ITEM_DEFS[entry.id];
    const held = this.count(entry.id);
    const parts = [
      `${this.selected + 1}`,
      def.icon,
      def.name,
      held > 1 ? `\u00d7${held}` : '',
      '\u2014',
      def.hint,
      def.usable ? `\u00b7 ${t('inv.useHint')}` : '',
    ];
    this.readout.textContent = parts.filter(Boolean).join(' ');
    this.readout.classList.add('show');
  }
}
