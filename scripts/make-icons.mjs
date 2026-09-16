// One-off icon painter. Generates the PNGs in public/icons without any image
// dependency: raw RGBA pixels go straight through zlib into a real PNG.
//
// Run with `node scripts/make-icons.mjs`, then delete this file.
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function encodePng(width, height, rgba) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/* ---------------------------------------------------------------- shape --- */

/** Signed distance to a rounded rectangle centred on the canvas. */
function sdRoundedRect(x, y, half, radius) {
  const qx = Math.abs(x) - (half - radius);
  const qy = Math.abs(y) - (half - radius);
  return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - radius;
}

/** The mark: a keyhole - the game is about locked doors and the keys to them. */
function sdKeyhole(x, y) {
  const cx = 0.5;
  const cy = 0.395;
  const r = 0.135;
  const circle = Math.hypot(x - cx, y - cy) - r;

  // Tapered slot below the circle, narrowing downwards.
  const top = cy + r * 0.45;
  const bottom = 0.715;
  let slot = 1;
  if (y >= top && y <= bottom) {
    const t = (y - top) / (bottom - top);
    const halfWidth = 0.088 - 0.05 * t;
    slot = Math.abs(x - cx) - halfWidth;
  } else if (y > bottom) {
    // Fade the slot out rather than stopping it dead, so the tip stays sharp
    // once the icon is downscaled to a launcher size.
    slot = Math.abs(x - cx) - 0.038 + Math.max(0, y - bottom) * 3;
  }
  return Math.min(circle, slot);
}

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const mix = (a, b, t) => a + (b - a) * t;

function render(size, { maskable = false, bleed = 0 } = {}) {
  const SS = 3; // supersample factor: cheap antialiasing
  const px = Buffer.alloc(size * size * 4);
  const half = 0.5;
  // A maskable icon is cropped by the launcher, so keep the mark inside a
  // smaller safe zone and let the background run all the way to the edge.
  const markScale = maskable ? 0.62 : 0.8;

  for (let py = 0; py < size; py++) {
    for (let pxi = 0; pxi < size; pxi++) {
      let r = 0, g = 0, b = 0, a = 0;

      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const x = (pxi + (sx + 0.5) / SS) / size;
          const y = (py + (sy + 0.5) / SS) / size;

          // --- Background: a slate plate with a blood glow rising from below --
          // It has to stay clearly lighter than pure black, or the icon
          // disappears against a dark phone wallpaper.
          const glow = clamp01(1 - Math.hypot(x - 0.5, y - 0.95) * 1.35);
          let br = mix(34, 150, glow * glow);
          let bg = mix(37, 20, glow * glow);
          let bb = mix(48, 22, glow * glow);

          // Vertical falloff so the top of the plate stays grim but visible.
          const falloff = mix(1, 0.62, clamp01(y));
          br *= falloff; bg *= falloff; bb *= falloff;

          // --- Plate shape -------------------------------------------------
          const plate = maskable
            ? -1 // full bleed
            : sdRoundedRect(x - 0.5, y - 0.5, half - bleed, 0.2);
          const plateCoverage = clamp01(0.5 - plate * size);

          if (plateCoverage <= 0) continue;

          // --- The keyhole -------------------------------------------------
          const kx = 0.5 + (x - 0.5) / markScale;
          const ky = 0.5 + (y - 0.5) / markScale;
          const key = sdKeyhole(kx, ky) * markScale;

          const inner = clamp01(0.5 - key * size);
          const halo = clamp01(1 - key * size * 0.16) * (1 - inner);

          // Hot core fading to blood red down the slot.
          const t = clamp01((ky - 0.26) / 0.46);
          const cr = mix(255, 176, t);
          const cg = mix(226, 18, t);
          const cb = mix(170, 16, t);

          // Halo: additive red bloom around the mark.
          br += halo * 150;
          bg += halo * 16;
          bb += halo * 10;

          // The mark itself sits on top, and burns out to white at the top.
          const core = mix(1, 0.2, t);
          br = mix(br, cr, inner);
          bg = mix(bg, cg, inner);
          bb = mix(bb, cb, inner);
          if (inner > 0) {
            br = mix(br, 255, core * 0.35);
            bg = mix(bg, 236, core * 0.35);
            bb = mix(bb, 214, core * 0.35);
          }

          r += clamp01(br / 255) * 255 * plateCoverage;
          g += clamp01(bg / 255) * 255 * plateCoverage;
          b += clamp01(bb / 255) * 255 * plateCoverage;
          a += 255 * plateCoverage;
        }
      }

      const samples = SS * SS;
      const idx = (py * size + pxi) * 4;
      px[idx] = Math.round(r / samples);
      px[idx + 1] = Math.round(g / samples);
      px[idx + 2] = Math.round(b / samples);
      px[idx + 3] = Math.round(a / samples);
    }
  }

  return encodePng(size, size, px);
}

mkdirSync('public/icons', { recursive: true });

const targets = [
  ['public/icons/icon-192.png', 192, {}],
  ['public/icons/icon-512.png', 512, {}],
  ['public/icons/maskable-512.png', 512, { maskable: true }],
  ['public/icons/apple-touch-icon.png', 180, {}],
  ['public/favicon.png', 64, { bleed: 0.06 }],
];

for (const [path, size, options] of targets) {
  const png = render(size, options);
  writeFileSync(path, png);
  console.log(`${path}  ${size}x${size}  ${(png.length / 1024).toFixed(1)} kB`);
}
