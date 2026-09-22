import { CELL, MapInfo } from './World';
import { L, type Localized } from './i18n';

/**
 * A small corner map that shows only the player's immediate surroundings.
 *
 * It deliberately does *not* draw the whole floor. A map that hands over the
 * entire layout turns a horror game into a checklist - you stop being lost,
 * and being lost is the point. This window is seventeen cells across, which is
 * roughly what the flashlight reaches, so the map tells you where you are
 * without telling you where everything else is.
 *
 * Unexplored cells stay black, and objectives only appear once you are close
 * enough to see them for yourself.
 */

/** Visible window, in grid cells. Odd numbers keep the player centred. */
export const WINDOW_COLS = 17;
export const WINDOW_ROWS = 11;

interface LevelBand {
  name: Localized;
  sub: Localized;
  row1: number;
  row2: number;
}

/**
 * One band per elevator deck, so the map's floor label and the HUD's location
 * line always agree - and both follow the language the player picked.
 */
const LEVELS: LevelBand[] = [
  {
    name: { uz: 'TOM', en: 'ROOFTOP', ru: 'КРЫША' },
    sub: { uz: 'hovli va darvoza', en: 'yard and gate', ru: 'двор и ворота' },
    row1: 0,
    row2: 14,
  },
  {
    name: { uz: '1-QAVAT', en: 'FLOOR 1', ru: '1 ЭТАЖ' },
    sub: { uz: 'qabulxona', en: 'reception', ru: 'приёмная' },
    row1: 15,
    row2: 33,
  },
  {
    name: { uz: '2-QAVAT', en: 'FLOOR 2', ru: '2 ЭТАЖ' },
    sub: { uz: 'operatsiya va 404', en: 'theatre and room 404', ru: 'операционная и 404' },
    row1: 34,
    row2: 43,
  },
  {
    name: { uz: 'B1 PODVAL', en: 'B1 BASEMENT', ru: 'Б1 ПОДВАЛ' },
    sub: { uz: 'qozonxona va morg', en: 'boiler room and morgue', ru: 'котельная и морг' },
    row1: 44,
    row2: 49,
  },
  {
    name: { uz: '3-QAVAT', en: 'FLOOR 3', ru: '3 ЭТАЖ' },
    sub: { uz: 'izolyator', en: 'isolation ward', ru: 'изолятор' },
    row1: 50,
    row2: 57,
  },
];

export interface MinimapState {
  player: { x: number; z: number; yaw: number };
  monster: { x: number; z: number } | null;
  chased: boolean;
  /** Pickup markers still lying in the world. */
  marks: Array<{ x: number; z: number; kind: 'key' | 'card' | 'note' | 'power' | 'exit' | 'gate' }>;
}

const RES = 10; // pixels per cell in the cached full-map layer
const REVEAL_RADIUS = 4.2; // cells the flashlight "maps" around the player
const REFRESH_MS = 70; // redrawn ~14x a second, not every frame
const OUTDOOR_LAST_ROW = 14;

const C = {
  wall: '#0d1015',
  fence: '#1d222a',
  ground: '#2a3123',
  corridor: '#3b424e',
  indoorRoom: '#4f4438',
  outdoorRoom: '#343c2b',
  doorway: '#91783a',
  key: '#ffb32e',
  note: '#7fd0ff',
  card: '#b47cff',
  exit: '#39d07a',
  gate: '#ff5252',
  power: '#ffd645',
  player: '#f2ecda',
  monster: '#ff2b2b',
  unknown: 'rgba(3,4,6,0.9)',
} as const;

const MARK_COLOR: Record<string, string> = {
  key: C.key,
  card: C.card,
  note: C.note,
  power: C.power,
  exit: C.exit,
  gate: C.gate,
};

export class Minimap {
  private readonly panel: HTMLElement;
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly levelLabel: HTMLElement;
  private readonly subLabel: HTMLElement;
  private readonly staticLayer: HTMLCanvasElement;
  private readonly staticCtx: CanvasRenderingContext2D;

  private map: MapInfo | null = null;
  private explored: Uint8Array = new Uint8Array(0);
  private lastDraw = -Infinity;
  private collapsed = false;
  private cellPx = 8;
  private staticReady = false;

  constructor(panel: HTMLElement) {
    this.panel = panel;

    this.canvas = document.createElement('canvas');
    this.canvas.className = 'minimap-canvas';
    this.ctx = this.canvas.getContext('2d')!;

    this.levelLabel = document.createElement('span');
    this.levelLabel.className = 'minimap-level';
    this.subLabel = document.createElement('span');
    this.subLabel.className = 'minimap-sub';

    const titles = document.createElement('div');
    titles.className = 'minimap-titles';
    titles.append(this.levelLabel, this.subLabel);

    const toggle = document.createElement('button');
    toggle.className = 'minimap-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Xaritani yigishtirish');
    toggle.textContent = '\u2013';
    toggle.addEventListener('click', () => this.toggle());

    const head = document.createElement('div');
    head.className = 'minimap-head';
    head.append(titles, toggle);

    panel.append(head, this.canvas);

    this.staticLayer = document.createElement('canvas');
    this.staticCtx = this.staticLayer.getContext('2d')!;
  }

  /** Rebinds the map - called on start and again after every restart. */
  attach(map: MapInfo): void {
    this.map = map;
    this.explored = new Uint8Array(map.rows * map.cols);
    this.staticReady = false;
    this.lastDraw = -Infinity;
    this.layoutCanvas();
  }

  setCollapsed(collapsed: boolean): void {
    this.collapsed = collapsed;
    this.panel.classList.toggle('collapsed', collapsed);
    const button = this.panel.querySelector('.minimap-toggle');
    if (button) button.textContent = collapsed ? '+' : '\u2013';
  }

  toggle(): void {
    this.setCollapsed(!this.collapsed);
  }

  /** Recompute the canvas size after a resize or orientation change. */
  relayout(): void {
    this.layoutCanvas();
    this.lastDraw = -Infinity;
  }

  /** The whole compound, painted once into an offscreen layer. */
  private buildStaticLayer(): void {
    const map = this.map!;
    this.staticLayer.width = map.cols * RES;
    this.staticLayer.height = map.rows * RES;

    const ctx = this.staticCtx;
    ctx.clearRect(0, 0, this.staticLayer.width, this.staticLayer.height);

    for (let row = 0; row < map.rows; row++) {
      const line = map.plan[row] ?? '';
      for (let col = 0; col < map.cols; col++) {
        const char = line[col] ?? '#';
        const onBorder = row === 0 || row === map.rows - 1 || col === 0 || col === map.cols - 1;

        let color: string;
        if (char === '#') {
          color = onBorder ? C.fence : C.wall;
        } else if (char === '+') {
          color = C.doorway;
        } else if (char === '.') {
          color = row <= OUTDOOR_LAST_ROW ? C.ground : C.corridor;
        } else {
          color = row <= OUTDOOR_LAST_ROW ? C.outdoorRoom : C.indoorRoom;
        }

        ctx.fillStyle = color;
        ctx.fillRect(col * RES, row * RES, RES, RES);

        // A hairline along the bottom of every open cell keeps the rooms from
        // reading as one flat slab of colour.
        if (char !== '#' && char !== '+') {
          ctx.fillStyle = 'rgba(0,0,0,0.16)';
          ctx.fillRect(col * RES, row * RES + RES - 2, RES, 2);
        }
      }
    }

    this.staticReady = true;
  }

  private layoutCanvas(): void {
    const panelWidth = this.panel.getBoundingClientRect().width || 190;
    const availableWidth = Math.max(120, panelWidth - 20);
    const maxHeight = Math.max(70, window.innerHeight * 0.3);

    const aspect = WINDOW_COLS / WINDOW_ROWS;
    let width = availableWidth;
    let height = width / aspect;
    if (height > maxHeight) {
      height = maxHeight;
      width = height * aspect;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(width * dpr);
    this.canvas.height = Math.round(height * dpr);
    this.canvas.style.width = `${Math.round(width)}px`;
    this.canvas.style.height = `${Math.round(height)}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.ctx.imageSmoothingEnabled = false;

    this.cellPx = width / WINDOW_COLS;
  }

  private markExplored(x: number, z: number): void {
    const map = this.map!;
    const pr = z / CELL;
    const pc = x / CELL;
    const r0 = Math.floor(pr - REVEAL_RADIUS);
    const r1 = Math.ceil(pr + REVEAL_RADIUS);
    const c0 = Math.floor(pc - REVEAL_RADIUS);
    const c1 = Math.ceil(pc + REVEAL_RADIUS);
    for (let r = r0; r <= r1; r++) {
      if (r < 0 || r >= map.rows) continue;
      for (let c = c0; c <= c1; c++) {
        if (c < 0 || c >= map.cols) continue;
        if (Math.hypot(r - pr, c - pc) > REVEAL_RADIUS) continue;
        this.explored[r * map.cols + c] = 1;
      }
    }
  }

  /** `force` skips the refresh throttle - used right after a level change. */
  update(state: MinimapState, force = false): void {
    const map = this.map;
    if (!map || this.collapsed) return;

    const now = performance.now();
    if (!force && now - this.lastDraw < REFRESH_MS) return;
    this.lastDraw = now;

    if (!this.staticReady) this.buildStaticLayer();
    this.markExplored(state.player.x, state.player.z);

    const row = state.player.z / CELL;
    const col = state.player.x / CELL;
    const px = this.cellPx;
    const width = WINDOW_COLS * px;
    const height = WINDOW_ROWS * px;
    const ctx = this.ctx;

    // Top-left corner of the window, in cells. Clamped to the map, and kept in
    // whole cells so the grid never shimmers as the player walks.
    const originRow = Math.round(Math.min(Math.max(row - WINDOW_ROWS / 2, 0), map.rows - WINDOW_ROWS));
    const originCol = Math.round(Math.min(Math.max(col - WINDOW_COLS / 2, 0), map.cols - WINDOW_COLS));

    const toX = (wx: number): number => (wx / CELL - originCol) * px;
    const toY = (wz: number): number => (wz / CELL - originRow) * px;
    const inWindow = (wx: number, wz: number, pad = 1): boolean => {
      const c = wx / CELL - originCol;
      const r = wz / CELL - originRow;
      return c >= -pad && c <= WINDOW_COLS + pad && r >= -pad && r <= WINDOW_ROWS + pad;
    };

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(
      this.staticLayer,
      originCol * RES,
      originRow * RES,
      WINDOW_COLS * RES,
      WINDOW_ROWS * RES,
      0,
      0,
      width,
      height
    );

    // --- Fog of war --------------------------------------------------------
    ctx.fillStyle = C.unknown;
    for (let r = 0; r < WINDOW_ROWS; r++) {
      const mapRow = originRow + r;
      if (mapRow < 0 || mapRow >= map.rows) {
        ctx.fillRect(0, r * px, width, px + 0.8);
        continue;
      }
      for (let c = 0; c < WINDOW_COLS; c++) {
        const mapCol = originCol + c;
        if (mapCol < 0 || mapCol >= map.cols) {
          ctx.fillRect(c * px, r * px, px + 0.8, px + 0.8);
          continue;
        }
        if (this.explored[mapRow * map.cols + mapCol]) continue;
        ctx.fillRect(c * px, r * px, px + 0.8, px + 0.8);
      }
    }

    // --- Objectives: only the ones you are standing next to ----------------
    const dot = (wx: number, wz: number, color: string, radius: number): void => {
      if (!inWindow(wx, wz)) return;
      ctx.beginPath();
      ctx.arc(toX(wx), toY(wz), radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    };

    for (const mark of state.marks) {
      dot(mark.x, mark.z, MARK_COLOR[mark.kind] ?? C.key, mark.kind === 'note' ? 2 : 2.7);
    }

    // --- The creature: only when it is close enough to hear -----------------
    if (state.monster && inWindow(state.monster.x, state.monster.z)) {
      const mx = toX(state.monster.x);
      const my = toY(state.monster.z);
      const pulse = 3.4 + Math.sin(now / 130) * 1.3;
      ctx.beginPath();
      ctx.arc(mx, my, pulse + 3.6, 0, Math.PI * 2);
      ctx.fillStyle = state.chased ? 'rgba(255,40,40,0.34)' : 'rgba(255,40,40,0.16)';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(mx, my, pulse, 0, Math.PI * 2);
      ctx.fillStyle = C.monster;
      ctx.fill();
    }

    // --- The player --------------------------------------------------------
    const plx = toX(state.player.x);
    const ply = toY(state.player.z);
    const spread = 0.42;
    const reach = px * 2.6;
    // Yaw 0 looks down -Z, which is "north" - i.e. up on the map.
    const centre = -Math.PI / 2 - state.player.yaw;
    ctx.beginPath();
    ctx.moveTo(plx, ply);
    ctx.arc(plx, ply, reach, centre - spread, centre + spread, false);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,244,214,0.24)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(plx, ply, 3, 0, Math.PI * 2);
    ctx.fillStyle = C.player;
    ctx.fill();
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = '#0a0c11';
    ctx.stroke();

    // --- Which floor am I on? ----------------------------------------------
    const playerRow = Math.round(row);
    const band = LEVELS.find((level) => playerRow >= level.row1 && playerRow <= level.row2) ?? LEVELS[0];
    const name = L(band.name);
    if (this.levelLabel.textContent !== name) {
      this.levelLabel.textContent = name;
      this.subLabel.textContent = L(band.sub);
    }
  }
}
