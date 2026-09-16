/**
 * What you are carrying, and the strip of slots that shows it.
 *
 * Picking things up used to happen by walking over them. Now every pickup has
 * to be taken deliberately, so the inventory is also the record of what the
 * player has actually noticed - which matters when half the run's progress is
 * gated on having the right object in hand.
 */

export type ItemId = 'key' | 'card' | 'fuse' | 'crowbar' | 'battery';

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
  key: { name: 'Kalit', icon: '\u{1F511}', hint: 'Qabulxonadagi eshik uchun', usable: false, perSlot: 1 },
  card: { name: 'Darvoza kartasi', icon: '\u{1F4B3}', hint: 'Asosiy darvoza uchun', usable: false, perSlot: 1 },
  fuse: { name: 'Saqlagich', icon: '\u{1F50C}', hint: 'Generator shchoti uchun', usable: false, perSlot: 1 },
  crowbar: { name: 'Lom', icon: '\u{1F528}', hint: 'Tiqilib qolgan eshik uchun', usable: false, perSlot: 1 },
  battery: { name: 'Batareya', icon: '\u{1F50B}', hint: 'Fonarchani quvvatlaydi', usable: true, perSlot: 3 },
};

export class Inventory {
  private readonly counts = new Map<ItemId, number>();
  private readonly root: HTMLElement | null;
  private readonly slots: HTMLButtonElement[] = [];

  /** Raised when the player taps a slot holding a usable item. */
  onUse: ((id: ItemId) => void) | null = null;

  constructor(root: HTMLElement | null, slotCount = 6) {
    this.root = root;
    if (!this.root) return;

    for (let i = 0; i < slotCount; i++) {
      const slot = document.createElement('button');
      slot.type = 'button';
      slot.className = 'inv-slot empty';
      slot.addEventListener('click', () => this.handleSlotClick(i));
      this.slots.push(slot);
      this.root.appendChild(slot);
    }
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
      slot.replaceChildren();

      if (!entry) {
        slot.classList.add('empty');
        slot.disabled = true;
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
  }

  private handleSlotClick(index: number): void {
    const entry = this.slotContents()[index];
    if (!entry) return;
    if (!ITEM_DEFS[entry.id].usable) return;
    this.onUse?.(entry.id);
  }
}
