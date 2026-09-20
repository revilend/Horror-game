import * as THREE from 'three';

/**
 * Procedurally generated textures.
 *
 * The game ships with zero binary assets, so every surface (concrete walls,
 * tiled floor, rusted doors, blood, wall scrawls) is painted onto an offscreen
 * canvas at startup. Cost is a few milliseconds and the atmosphere gain is
 * huge.
 */

const SIZE = 256;

function context2d(size = SIZE): CanvasRenderingContext2D {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('2D canvas context is unavailable');
  return context;
}

function rnd(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function addGrain(ctx: CanvasRenderingContext2D, strength: number): void {
  const image = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = image.data;
  for (let i = 0; i < data.length; i += 4) {
    const n = (Math.random() - 0.5) * strength;
    data[i] += n;
    data[i + 1] += n;
    data[i + 2] += n;
  }
  ctx.putImageData(image, 0, 0);
}

function blotches(
  ctx: CanvasRenderingContext2D,
  count: number,
  color: string,
  alphaMin: number,
  alphaMax: number,
  radiusMin: number,
  radiusMax: number
): void {
  const size = ctx.canvas.width;
  for (let i = 0; i < count; i++) {
    const x = rnd(0, size);
    const y = rnd(0, size);
    const r = rnd(radiusMin, radiusMax);
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
    gradient.addColorStop(0, color.replace('ALPHA', rnd(alphaMin, alphaMax).toFixed(3)));
    gradient.addColorStop(1, color.replace('ALPHA', '0'));
    ctx.fillStyle = gradient;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
}

function toTexture(
  ctx: CanvasRenderingContext2D,
  repeatX = 1,
  repeatY = 1,
  srgb = true
): THREE.CanvasTexture {
  const texture = new THREE.CanvasTexture(ctx.canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.anisotropy = 2;
  if (srgb) texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/** Peeling, water-stained asylum concrete. */
export function createWallTexture(): THREE.CanvasTexture {
  const ctx = context2d();

  // ── DUAL-TONE HOSPITAL WALL ──
  // Bottom 40%: grimy pale-green hospital tiles with dirty grout
  // Top 60%: peeling cracked beige concrete with mold streaks
  const splitY = SIZE * 0.4;

  // ── TOP: Peeling concrete ──
  ctx.fillStyle = '#6b6558';
  ctx.fillRect(0, 0, SIZE, splitY);
  blotches(ctx, 50, 'rgba(255,255,255,ALPHA)', 0.02, 0.06, 8, 44);
  blotches(ctx, 40, 'rgba(0,0,0,ALPHA)', 0.06, 0.18, 10, 50);

  // Mold streaks dripping down from ceiling
  for (let i = 0; i < 18; i++) {
    const w = rnd(2, 8);
    const h = rnd(40, 140);
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, `rgba(18,28,14,${rnd(0.2, 0.5).toFixed(3)})`);
    grad.addColorStop(1, 'rgba(18,28,14,0)');
    ctx.fillStyle = grad;
    ctx.save();
    ctx.translate(rnd(0, SIZE), rnd(-10, SIZE * 0.25));
    ctx.fillRect(-w / 2, 0, w, h);
    ctx.restore();
  }

  // Claw scratch marks (3 parallel lines)
  for (let i = 0; i < 5; i++) {
    const sx = rnd(10, SIZE - 10);
    const sy = rnd(10, splitY - 10);
    const angle = rnd(-0.4, 0.4);
    const len = rnd(20, 60);
    ctx.strokeStyle = `rgba(40,30,22,${rnd(0.3, 0.6).toFixed(2)})`;
    ctx.lineWidth = rnd(1, 2.5);
    for (let s = 0; s < 3; s++) {
      ctx.beginPath();
      const ox = s * 3 - 3;
      ctx.moveTo(sx + ox, sy);
      ctx.lineTo(sx + ox + Math.cos(angle) * len, sy + Math.sin(angle) * len);
      ctx.stroke();
    }
  }

  // Peeling paint patches
  for (let i = 0; i < 8; i++) {
    const px = rnd(0, SIZE);
    const py = rnd(0, splitY);
    const pw = rnd(12, 36);
    const ph = rnd(8, 24);
    ctx.fillStyle = `rgba(${rnd(80, 100).toFixed(0)},${rnd(75, 95).toFixed(0)},${rnd(60, 80).toFixed(0)},${rnd(0.12, 0.3).toFixed(3)})`;
    ctx.fillRect(px, py, pw, ph);
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.lineWidth = 1;
    ctx.strokeRect(px, py, pw, ph);
  }

  // ── BOTTOM: Hospital tiles ──
  const tileH = 12;
  const tileW = 16;
  for (let ty = splitY; ty < SIZE; ty += tileH) {
    for (let tx = 0; tx < SIZE; tx += tileW) {
      const shade = rnd(62, 82);
      ctx.fillStyle = `rgb(${shade.toFixed(0)},${(shade + rnd(2, 8)).toFixed(0)},${(shade - 4).toFixed(0)})`;
      ctx.fillRect(tx + 1, ty + 1, tileW - 2, tileH - 2);
      // Grout lines
      ctx.strokeStyle = `rgba(20,18,14,${rnd(0.5, 0.8).toFixed(2)})`;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(tx + 0.5, ty + 0.5, tileW - 1, tileH - 1);
    }
  }
  // Grime on tiles
  blotches(ctx, 35, 'rgba(30,25,18,ALPHA)', 0.08, 0.25, 4, 16);

  // ── Shared overlays ──
  // Damp streaks running down from the ceiling
  for (let i = 0; i < 20; i++) {
    const width = rnd(2, 10);
    const height = rnd(60, 200);
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, `rgba(12,10,8,${rnd(0.15, 0.35).toFixed(3)})`);
    gradient.addColorStop(1, 'rgba(12,10,8,0)');
    ctx.fillStyle = gradient;
    ctx.save();
    ctx.translate(rnd(0, SIZE), rnd(-20, SIZE * 0.3));
    ctx.fillRect(-width / 2, 0, width, height);
    ctx.restore();
  }

  // Hairline cracks
  ctx.strokeStyle = 'rgba(0,0,0,0.35)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    let x = rnd(0, SIZE);
    let y = rnd(0, SIZE);
    ctx.moveTo(x, y);
    for (let step = 0; step < 5; step++) {
      x += rnd(-22, 22);
      y += rnd(-22, 22);
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  addGrain(ctx, 28);
  return toTexture(ctx, 2, 2);
}

/** Grimy checkerboard floor tiles. */
export function createFloorTexture(): THREE.CanvasTexture {
  const ctx = context2d();
  ctx.fillStyle = '#151517';
  ctx.fillRect(0, 0, SIZE, SIZE);

  const tile = SIZE / 4;
  for (let ty = 0; ty < SIZE; ty += tile) {
    for (let tx = 0; tx < SIZE; tx += tile) {
      const shade = ((tx + ty) / tile) % 2 === 0 ? 30 : 20;
      const v = shade + rnd(-4, 6);
      ctx.fillStyle = `rgb(${v.toFixed(0)},${v.toFixed(0)},${(v + 2).toFixed(0)})`;
      ctx.fillRect(tx + 1, ty + 1, tile - 2, tile - 2);

      ctx.strokeStyle = 'rgba(0,0,0,0.75)';
      ctx.lineWidth = 2;
      ctx.strokeRect(tx + 0.5, ty + 0.5, tile - 1, tile - 1);
    }
  }

  blotches(ctx, 90, 'rgba(0,0,0,ALPHA)', 0.08, 0.28, 6, 40);
  blotches(ctx, 30, 'rgba(60,45,25,ALPHA)', 0.04, 0.12, 8, 34);
  addGrain(ctx, 26);
  // One tile per world cell: the floor is assembled from per-cell quads
  return toTexture(ctx, 1, 1);
}

/** Stained, sagging ceiling panels. */
export function createCeilingTexture(): THREE.CanvasTexture {
  const ctx = context2d();
  ctx.fillStyle = '#141416';
  ctx.fillRect(0, 0, SIZE, SIZE);

  const panel = SIZE / 2;
  for (let ty = 0; ty < SIZE; ty += panel) {
    for (let tx = 0; tx < SIZE; tx += panel) {
      ctx.strokeStyle = 'rgba(0,0,0,0.8)';
      ctx.lineWidth = 3;
      ctx.strokeRect(tx + 1.5, ty + 1.5, panel - 3, panel - 3);
    }
  }

  blotches(ctx, 70, 'rgba(40,30,18,ALPHA)', 0.05, 0.2, 12, 50);
  blotches(ctx, 40, 'rgba(0,0,0,ALPHA)', 0.1, 0.3, 10, 44);
  addGrain(ctx, 22);
  return toTexture(ctx, 1, 1);
}

/** Scratched, rusted steel for the exit door. */
export function createDoorTexture(): THREE.CanvasTexture {
  const ctx = context2d();
  ctx.fillStyle = '#3b2f26';
  ctx.fillRect(0, 0, SIZE, SIZE);

  blotches(ctx, 60, 'rgba(120,60,20,ALPHA)', 0.06, 0.24, 8, 44);
  blotches(ctx, 50, 'rgba(0,0,0,ALPHA)', 0.08, 0.26, 6, 30);

  ctx.strokeStyle = 'rgba(190,180,165,0.22)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 40; i++) {
    const x = rnd(0, SIZE);
    const y = rnd(0, SIZE);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + rnd(-40, 40), y + rnd(-6, 6));
    ctx.stroke();
  }

  for (let y = 18; y < SIZE; y += 52) {
    for (let x = 14; x < SIZE; x += 46) {
      ctx.fillStyle = 'rgba(150,140,125,0.5)';
      ctx.beginPath();
      ctx.arc(x, y, 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.beginPath();
      ctx.arc(x + 1, y + 1, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  addGrain(ctx, 22);
  return toTexture(ctx, 1, 1);
}

/** Transparent blood splatter stamped on the floor. */
export function createBloodTexture(): THREE.CanvasTexture {
  const ctx = context2d(128);
  ctx.clearRect(0, 0, 128, 128);

  const splat = (x: number, y: number, r: number, alpha: number): void => {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
    gradient.addColorStop(0, `rgba(96,4,6,${alpha})`);
    gradient.addColorStop(0.6, `rgba(66,2,4,${alpha * 0.75})`);
    gradient.addColorStop(1, 'rgba(40,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  };

  splat(64, 64, 42, 0.95);
  for (let i = 0; i < 22; i++) {
    const angle = rnd(0, Math.PI * 2);
    const dist = rnd(20, 58);
    splat(64 + Math.cos(angle) * dist, 64 + Math.sin(angle) * dist, rnd(3, 12), rnd(0.4, 0.85));
  }

  for (let i = 0; i < 6; i++) {
    ctx.strokeStyle = `rgba(70,3,5,${rnd(0.25, 0.55).toFixed(2)})`;
    ctx.lineWidth = rnd(2, 7);
    ctx.beginPath();
    ctx.moveTo(64, 64);
    ctx.lineTo(rnd(0, 128), rnd(0, 128));
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(ctx.canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Paints a blood scrawl onto a canvas.
 *
 * Split out of createBloodTextTexture so the same canvas can be repainted when
 * the player switches language: the texture object stays identical, so every
 * mesh pointing at it updates for free.
 *
 * Deliberately uses a web-safe serif instead of the Google font: canvas text
 * has to be drawn immediately, and webfonts may not have loaded yet.
 */
export function paintBloodText(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  text: string
): void {
  const size = Math.min(width, height);
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 1;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 84px Georgia, "Times New Roman", serif';

  // Wrap to fit the canvas
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (ctx.measureText(candidate).width > size - 60 && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);

  const lineHeight = 96;
  const startY = size / 2 - ((lines.length - 1) * lineHeight) / 2;

  // Painted on in slightly offset passes so it looks smeared, not typeset
  for (let pass = 0; pass < 3; pass++) {
    ctx.fillStyle = `rgba(${94 - pass * 8},4,6,${0.5 - pass * 0.12})`;
    lines.forEach((line, index) => {
      ctx.fillText(line, size / 2 + (pass - 1) * 2, startY + index * lineHeight + (pass - 1) * 2);
    });
  }

  // Drips running down from the letters
  ctx.fillStyle = 'rgba(80,3,5,0.6)';
  for (let i = 0; i < 40; i++) {
    const line = lines[Math.floor(Math.random() * lines.length)];
    const lineIndex = lines.indexOf(line);
    const y = startY + lineIndex * lineHeight;
    const x = rnd(size * 0.18, size * 0.82);
    const drip = rnd(10, 70);
    ctx.globalAlpha = rnd(0.12, 0.4);
    ctx.fillRect(x, y + rnd(16, 30), rnd(1.5, 5), drip);
  }
  ctx.globalAlpha = 1;

  // Rough edges: chew random holes out of the paint
  ctx.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 130; i++) {
    ctx.beginPath();
    ctx.arc(rnd(0, size), rnd(0, size), rnd(1, 6), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

/** Blood scrawled across a wall. */
export function createBloodTextTexture(text: string): THREE.CanvasTexture {
  const size = 512;
  const ctx = context2d(size);
  paintBloodText(ctx, size, size, text);

  const texture = new THREE.CanvasTexture(ctx.canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Blood-stained, wrinkled mattress ticking for the hospital cots.
 * Wrinkle creases run one way and the old stains sink into the creases, which
 * is what sells "this bed has not been changed since 1987".
 */
export function createMattressTexture(): THREE.CanvasTexture {
  const ctx = context2d();
  ctx.fillStyle = '#726d5d';
  ctx.fillRect(0, 0, SIZE, SIZE);

  // Water-ring stains and grime
  blotches(ctx, 55, 'rgba(70,58,36,ALPHA)', 0.05, 0.2, 5, 30);
  blotches(ctx, 30, 'rgba(20,18,14,ALPHA)', 0.06, 0.22, 6, 34);

  // Wrinkle creases — slightly wavy horizontal folds
  for (let i = 0; i < 46; i++) {
    const y = rnd(0, SIZE);
    ctx.strokeStyle = `rgba(0,0,0,${rnd(0.07, 0.26).toFixed(3)})`;
    ctx.lineWidth = rnd(1, 3.4);
    ctx.beginPath();
    ctx.moveTo(-4, y);
    for (let x = 0; x <= SIZE + 4; x += 16) ctx.lineTo(x, y + rnd(-7, 7));
    ctx.stroke();
    // Highlight on the crest of the fold so the crease reads under the torch
    ctx.strokeStyle = `rgba(215,208,186,${rnd(0.04, 0.14).toFixed(3)})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-4, y - 1.6);
    for (let x = 0; x <= SIZE + 4; x += 16) ctx.lineTo(x, y - 1.6 + rnd(-7, 7));
    ctx.stroke();
  }

  // Dried blood — soaked in around the middle of the mattress
  for (let i = 0; i < 12; i++) {
    const x = rnd(SIZE * 0.1, SIZE * 0.9);
    const y = rnd(SIZE * 0.1, SIZE * 0.9);
    const radius = rnd(7, 30);
    const gradient = ctx.createRadialGradient(x, y, 1, x, y, radius);
    gradient.addColorStop(0, `rgba(74,6,9,${rnd(0.5, 0.88).toFixed(2)})`);
    gradient.addColorStop(0.6, `rgba(58,4,8,${rnd(0.2, 0.4).toFixed(2)})`);
    gradient.addColorStop(1, 'rgba(44,3,6,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    // A few run-off drips
    ctx.fillStyle = `rgba(60,4,8,${rnd(0.25, 0.5).toFixed(2)})`;
    ctx.fillRect(x + rnd(-3, 3), y, rnd(1.5, 3), rnd(6, 22));
  }

  addGrain(ctx, 26);
  return toTexture(ctx, 1, 1);
}

/**
 * Ribbed galvanised ventilation duct, gone dull with age and rust at the seams.
 */
export function createDuctTexture(): THREE.CanvasTexture {
  const ctx = context2d();
  ctx.fillStyle = '#6a6e72';
  ctx.fillRect(0, 0, SIZE, SIZE);

  // Brushed metal streaks along the duct
  for (let i = 0; i < 260; i++) {
    ctx.strokeStyle = `rgba(${rnd(200, 255).toFixed(0)},${rnd(205, 255).toFixed(0)},255,${rnd(0.02, 0.07).toFixed(3)})`;
    ctx.lineWidth = 1;
    const y = rnd(0, SIZE);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(SIZE, y + rnd(-1.5, 1.5));
    ctx.stroke();
  }

  // Spiral ribbing: bright ridge above a dark valley
  const rib = 26;
  for (let y = 0; y < SIZE; y += rib) {
    ctx.fillStyle = 'rgba(20,22,24,0.42)';
    ctx.fillRect(0, y, SIZE, 5);
    ctx.fillStyle = 'rgba(232,238,244,0.16)';
    ctx.fillRect(0, y + 5, SIZE, 3);
  }

  // Rust blooming out of the seams and rivets
  blotches(ctx, 40, 'rgba(96,54,24,ALPHA)', 0.08, 0.32, 5, 32);
  for (let i = 0; i < 34; i++) {
    ctx.fillStyle = `rgba(40,42,44,${rnd(0.3, 0.6).toFixed(2)})`;
    ctx.beginPath();
    ctx.arc(rnd(6, SIZE - 6), rnd(6, SIZE - 6), rnd(1.2, 2.4), 0, Math.PI * 2);
    ctx.fill();
  }

  addGrain(ctx, 22);
  return toTexture(ctx, 2, 1);
}

/**
 * Loose patient chart page: ruled paper, a faded letterhead and a typed block
 * of observations. Flat clutter that sells the hospital being abandoned mid-round.
 */
export function createChartTexture(): THREE.CanvasTexture {
  const ctx = context2d();

  // Aged paper
  ctx.fillStyle = '#b9b09a';
  ctx.fillRect(0, 0, SIZE, SIZE);
  blotches(ctx, 40, 'rgba(96,80,50,ALPHA)', 0.05, 0.22, 5, 30);

  // Letterhead bar
  ctx.fillStyle = 'rgba(52,64,74,0.75)';
  ctx.fillRect(18, 16, SIZE - 36, 16);
  ctx.fillStyle = 'rgba(236,232,220,0.9)';
  ctx.fillRect(24, 22, 96, 4);

  // Typed observation rows
  for (let row = 0; row < 14; row++) {
    const y = 52 + row * 13;
    ctx.fillStyle = `rgba(34,30,24,${rnd(0.35, 0.72).toFixed(2)})`;
    let x = 20;
    const width = SIZE - 40;
    while (x < width) {
      const w = rnd(8, 34);
      if (x + w > width) break;
      ctx.fillRect(x, y, w, 4);
      x += w + rnd(5, 11);
    }
  }

  // Red stamp and a coffee ring
  ctx.strokeStyle = 'rgba(120,20,20,0.55)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(SIZE * 0.72, SIZE * 0.78, 34, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = 'rgba(78,58,34,0.3)';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(SIZE * 0.24, SIZE * 0.3, 26, 0, Math.PI * 2);
  ctx.stroke();

  addGrain(ctx, 20);
  return toTexture(ctx, 1, 1);
}

/** Cracked, oil-stained asphalt for the grounds outside the hospital. */
export function createAsphaltTexture(): THREE.CanvasTexture {
  const ctx = context2d();
  ctx.fillStyle = '#1b1c1e';
  ctx.fillRect(0, 0, SIZE, SIZE);

  blotches(ctx, 70, 'rgba(0,0,0,ALPHA)', 0.1, 0.35, 10, 60);
  blotches(ctx, 40, 'rgba(70,66,58,ALPHA)', 0.05, 0.16, 8, 40);
  blotches(ctx, 18, 'rgba(30,26,20,ALPHA)', 0.08, 0.24, 14, 48);

  // Cracks radiating through the surface
  ctx.strokeStyle = 'rgba(0,0,0,0.55)';
  for (let i = 0; i < 18; i++) {
    ctx.lineWidth = rnd(1, 2.6);
    ctx.beginPath();
    let x = rnd(0, SIZE);
    let y = rnd(0, SIZE);
    ctx.moveTo(x, y);
    for (let step = 0; step < 5; step++) {
      x += rnd(-34, 34);
      y += rnd(-34, 34);
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Loose gravel
  for (let i = 0; i < 260; i++) {
    ctx.fillStyle = `rgba(${rnd(60, 120).toFixed(0)},${rnd(58, 112).toFixed(0)},${rnd(50, 100).toFixed(0)},0.35)`;
    ctx.fillRect(rnd(0, SIZE), rnd(0, SIZE), rnd(1, 2.6), rnd(1, 2.6));
  }

  addGrain(ctx, 34);
  return toTexture(ctx, 1, 1);
}

/** Rough poured concrete for the hospital's outer walls and fences. */
export function createOuterWallTexture(): THREE.CanvasTexture {
  const ctx = context2d();
  ctx.fillStyle = '#2c2b28';
  ctx.fillRect(0, 0, SIZE, SIZE);

  blotches(ctx, 70, 'rgba(0,0,0,ALPHA)', 0.08, 0.26, 10, 58);
  blotches(ctx, 50, 'rgba(150,146,132,ALPHA)', 0.02, 0.08, 8, 44);

  // Form-work seams between concrete pours
  ctx.strokeStyle = 'rgba(0,0,0,0.5)';
  ctx.lineWidth = 3;
  for (const y of [SIZE / 2]) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(SIZE, y);
    ctx.stroke();
  }

  // Weather streaks and moss creeping up from the ground
  for (let i = 0; i < 20; i++) {
    ctx.fillStyle = `rgba(18,22,16,${rnd(0.06, 0.2).toFixed(3)})`;
    ctx.fillRect(rnd(0, SIZE), SIZE - rnd(20, 90), rnd(4, 16), rnd(20, 90));
  }
  for (let i = 0; i < 16; i++) {
    ctx.fillStyle = `rgba(20,16,10,${rnd(0.08, 0.24).toFixed(3)})`;
    ctx.fillRect(rnd(0, SIZE), 0, rnd(2, 9), rnd(30, 150));
  }

  addGrain(ctx, 26);
  return toTexture(ctx, 1, 1);
}

/**
 * Night sky for the equirectangular scene background: gradient, stars and a
 * cold moon sitting behind the hospital.
 */
export function createSkyTexture(): THREE.CanvasTexture {
  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('2D canvas context is unavailable');

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#05070f');
  gradient.addColorStop(0.45, '#0a0f1c');
  gradient.addColorStop(0.72, '#161a24');
  gradient.addColorStop(0.88, '#2a2119');
  gradient.addColorStop(1, '#0b0a09');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Stars, thinning out towards the horizon
  for (let i = 0; i < 420; i++) {
    const y = rnd(0, height * 0.62);
    const fade = 1 - y / (height * 0.7);
    ctx.fillStyle = `rgba(220,226,255,${(rnd(0.15, 0.75) * fade).toFixed(3)})`;
    const size = rnd(0.7, 1.9);
    ctx.fillRect(rnd(0, width), y, size, size);
  }

  // Moon with a soft halo
  const moonX = width * 0.24;
  const moonY = height * 0.24;
  const halo = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, 96);
  halo.addColorStop(0, 'rgba(226,232,255,0.5)');
  halo.addColorStop(0.35, 'rgba(180,196,235,0.15)');
  halo.addColorStop(1, 'rgba(120,140,200,0)');
  ctx.fillStyle = halo;
  ctx.fillRect(moonX - 96, moonY - 96, 192, 192);

  ctx.fillStyle = '#e8ecff';
  ctx.beginPath();
  ctx.arc(moonX, moonY, 26, 0, Math.PI * 2);
  ctx.fill();

  // A few darker maria so the moon is not a flat disc
  ctx.fillStyle = 'rgba(150,160,190,0.4)';
  for (let i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.arc(moonX + rnd(-14, 14), moonY + rnd(-14, 14), rnd(2, 7), 0, Math.PI * 2);
    ctx.fill();
  }

  // Ragged cloud band across the lower sky
  for (let i = 0; i < 90; i++) {
    const x = rnd(0, width);
    const y = rnd(height * 0.5, height * 0.78);
    const w = rnd(60, 240);
    ctx.fillStyle = `rgba(24,26,32,${rnd(0.05, 0.2).toFixed(3)})`;
    ctx.beginPath();
    ctx.ellipse(x, y, w, rnd(8, 26), 0, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.mapping = THREE.EquirectangularReflectionMapping;
  return texture;
}

/** Wet, trodden dirt for the courtyard between the hospital and the gate. */
export function createDirtTexture(): THREE.CanvasTexture {
  const ctx = context2d();
  ctx.fillStyle = '#241f19';
  ctx.fillRect(0, 0, SIZE, SIZE);

  blotches(ctx, 80, 'rgba(12,9,6,ALPHA)', 0.1, 0.34, 10, 60);
  blotches(ctx, 60, 'rgba(74,62,44,ALPHA)', 0.04, 0.16, 8, 46);

  // Standing water and tyre ruts
  for (let i = 0; i < 14; i++) {
    const y = rnd(0, SIZE);
    ctx.fillStyle = `rgba(14,16,18,${rnd(0.1, 0.26).toFixed(3)})`;
    ctx.fillRect(0, y, SIZE, rnd(2, 7));
  }

  for (let i = 0; i < 200; i++) {
    ctx.fillStyle = `rgba(${rnd(40, 80).toFixed(0)},${rnd(36, 70).toFixed(0)},${rnd(28, 56).toFixed(0)},0.4)`;
    ctx.fillRect(rnd(0, SIZE), rnd(0, SIZE), rnd(1, 3), rnd(1, 3));
  }

  addGrain(ctx, 30);
  return toTexture(ctx, 1, 1);
}

/**
 * Bitumen roof membrane: rolled seams, gravel ballast, rust streaks, moss and
 * standing water around the drains. Deliberately nothing like the interior
 * floors, so the rooftop reads as an outdoor surface at a glance.
 */
export function createRoofTexture(): THREE.CanvasTexture {
  const ctx = context2d();
  ctx.fillStyle = '#33322f';
  ctx.fillRect(0, 0, SIZE, SIZE);

  // Weathered patches in the felt
  blotches(ctx, 90, 'rgba(12,11,10,ALPHA)', 0.08, 0.3, 12, 64);
  blotches(ctx, 55, 'rgba(96,88,74,ALPHA)', 0.03, 0.13, 10, 46);

  // Rolled seams: the horizontal laps where the membrane sheets overlap
  ctx.strokeStyle = 'rgba(0,0,0,0.42)';
  ctx.lineWidth = 4;
  for (let y = 32; y < SIZE; y += 128) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(SIZE, y);
    ctx.stroke();
  }
  ctx.strokeStyle = 'rgba(130,124,108,0.14)';
  ctx.lineWidth = 2;
  for (let y = 36; y < SIZE; y += 128) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(SIZE, y);
    ctx.stroke();
  }

  // Loose gravel ballast swept into the corners
  for (let i = 0; i < 420; i++) {
    const a = rnd(0.18, 0.5).toFixed(3);
    ctx.fillStyle = `rgba(${rnd(78, 132).toFixed(0)},${rnd(74, 124).toFixed(0)},${rnd(66, 108).toFixed(0)},${a})`;
    ctx.fillRect(rnd(0, SIZE), rnd(0, SIZE), rnd(1, 3.4), rnd(1, 3.4));
  }

  // Rust weeping out of the fixings
  for (let i = 0; i < 22; i++) {
    const x = rnd(0, SIZE);
    const y = rnd(0, SIZE);
    ctx.fillStyle = `rgba(96,52,24,${rnd(0.08, 0.24).toFixed(3)})`;
    ctx.fillRect(x, y, rnd(3, 9), rnd(10, 46));
  }

  // Moss creeping in from the edges
  for (let i = 0; i < 26; i++) {
    ctx.fillStyle = `rgba(26,36,22,${rnd(0.07, 0.22).toFixed(3)})`;
    ctx.fillRect(rnd(0, SIZE), rnd(0, SIZE), rnd(16, 70), rnd(10, 46));
  }

  // Standing rain water pooling around the outlets
  for (let i = 0; i < 16; i++) {
    const x = rnd(0, SIZE);
    const y = rnd(0, SIZE);
    const r = rnd(14, 46);
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, 'rgba(10,14,18,0.55)');
    grad.addColorStop(0.6, 'rgba(12,16,20,0.26)');
    grad.addColorStop(1, 'rgba(12,16,20,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  addGrain(ctx, 38);
  return toTexture(ctx, 1, 1);
}

/** Soft round dot used for floating dust motes. */
export function createSoftDotTexture(): THREE.CanvasTexture {
  const ctx = context2d(64);
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255,255,255,0.9)');
  gradient.addColorStop(0.35, 'rgba(255,255,255,0.28)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(ctx.canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * A full-screen horror face for the jump scare.
 *
 * The old version was a single emoji glyph, which reads as a cartoon rather
 * than a threat. This paints a proper creature: torn flesh, sunken sockets
 * with hot eyes, and a mouth full of uneven teeth. Returned as a data URL so
 * it can be dropped straight into CSS as a background image.
 */
export function createJumpscareFaceDataUrl(): string {
  const size = 640;
  const ctx = context2d(size);
  const cx = size / 2;
  const cy = size * 0.47;

  // Deep red-black vignette
  const backdrop = ctx.createRadialGradient(cx, cy, 10, cx, cy, size * 0.72);
  backdrop.addColorStop(0, '#3a0507');
  backdrop.addColorStop(0.5, '#160203');
  backdrop.addColorStop(1, '#000000');
  ctx.fillStyle = backdrop;
  ctx.fillRect(0, 0, size, size);

  // --- Skull / face mass --------------------------------------------------
  const faceH = size * 0.62;
  const faceW = size * 0.46;
  const faceGrad = ctx.createRadialGradient(cx, cy - faceH * 0.15, 12, cx, cy, faceH * 0.72);
  faceGrad.addColorStop(0, '#cdc3ae');
  faceGrad.addColorStop(0.55, '#8d8272');
  faceGrad.addColorStop(1, '#2a241f');

  ctx.save();
  ctx.beginPath();
  ctx.ellipse(cx, cy, faceW / 2, faceH / 2, 0, 0, Math.PI * 2);
  ctx.fillStyle = faceGrad;
  ctx.fill();
  ctx.clip();

  // Mottled decay across the flesh
  for (let i = 0; i < 220; i++) {
    const x = rnd(0, size);
    const y = rnd(0, size);
    const r = rnd(4, 34);
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const dark = Math.random() < 0.6;
    g.addColorStop(0, dark ? `rgba(20,12,10,${rnd(0.1, 0.4).toFixed(2)})` : `rgba(180,150,120,${rnd(0.05, 0.2).toFixed(2)})`);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }

  // Blood running down the face
  for (let i = 0; i < 26; i++) {
    const x = rnd(cx - faceW * 0.45, cx + faceW * 0.45);
    const y = rnd(cy - faceH * 0.4, cy + faceH * 0.1);
    const h = rnd(30, 200);
    const w = rnd(3, 12);
    const g = ctx.createLinearGradient(0, y, 0, y + h);
    g.addColorStop(0, `rgba(120,4,8,${rnd(0.5, 0.9).toFixed(2)})`);
    g.addColorStop(1, 'rgba(70,0,4,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x, y, w, h);
  }

  // --- Eye sockets --------------------------------------------------------
  for (const side of [-1, 1]) {
    const ex = cx + side * faceW * 0.24;
    const ey = cy - faceH * 0.16;
    const rx = faceW * 0.17;
    const ry = faceH * 0.14;

    ctx.beginPath();
    ctx.ellipse(ex, ey, rx, ry, side * 0.18, 0, Math.PI * 2);
    ctx.fillStyle = '#080404';
    ctx.fill();

    // Raw, red-rimmed socket
    ctx.strokeStyle = 'rgba(130,10,10,0.85)';
    ctx.lineWidth = 7;
    ctx.stroke();

    // Hot eye
    const glow = ctx.createRadialGradient(ex, ey, 1, ex, ey, rx * 0.95);
    glow.addColorStop(0, '#fff2e8');
    glow.addColorStop(0.25, '#ff3b23');
    glow.addColorStop(0.6, 'rgba(140,0,0,0.85)');
    glow.addColorStop(1, 'rgba(60,0,0,0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(ex, ey, rx * 0.92, 0, Math.PI * 2);
    ctx.fill();

    // Shrunk pupil
    ctx.beginPath();
    ctx.arc(ex, ey, rx * 0.18, 0, Math.PI * 2);
    ctx.fillStyle = '#120000';
    ctx.fill();

    // Cracks radiating out of the socket
    ctx.strokeStyle = 'rgba(30,4,4,0.8)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 7; i++) {
      const a = rnd(0, Math.PI * 2);
      ctx.beginPath();
      ctx.moveTo(ex + Math.cos(a) * rx, ey + Math.sin(a) * ry);
      ctx.lineTo(ex + Math.cos(a) * rx * rnd(1.3, 2.1), ey + Math.sin(a) * ry * rnd(1.3, 2.1));
      ctx.stroke();
    }
  }

  // --- Mouth --------------------------------------------------------------
  const mouthY = cy + faceH * 0.2;
  const mouthW = faceW * 0.66;
  ctx.beginPath();
  ctx.ellipse(cx, mouthY, mouthW / 2, faceH * 0.17, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#0a0103';
  ctx.fill();
  ctx.strokeStyle = 'rgba(120,12,14,0.9)';
  ctx.lineWidth = 6;
  ctx.stroke();

  // Uneven teeth, top and bottom rows
  const teeth = 11;
  for (let i = 0; i < teeth; i++) {
    const t = i / (teeth - 1);
    const x = cx - mouthW / 2 + t * mouthW;
    const jitter = Math.sin(i * 2.7) * 0.28 + 1;
    const th = (faceH * 0.075) * jitter;

    ctx.beginPath();
    ctx.moveTo(x - mouthW / (teeth * 1.5), mouthY - faceH * 0.16);
    ctx.lineTo(x + mouthW / (teeth * 1.5), mouthY - faceH * 0.16);
    ctx.lineTo(x, mouthY - faceH * 0.16 + th);
    ctx.closePath();
    ctx.fillStyle = i % 3 === 0 ? '#8e8265' : '#d6ccac';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x - mouthW / (teeth * 1.5), mouthY + faceH * 0.16);
    ctx.lineTo(x + mouthW / (teeth * 1.5), mouthY + faceH * 0.16);
    ctx.lineTo(x, mouthY + faceH * 0.16 - th * 1.05);
    ctx.closePath();
    ctx.fillStyle = i % 4 === 0 ? '#7d7052' : '#c9bfa0';
    ctx.fill();
  }

  ctx.restore();

  // --- Scratched, dirtied lens -------------------------------------------
  ctx.strokeStyle = 'rgba(255,240,230,0.05)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 40; i++) {
    ctx.beginPath();
    const x = rnd(0, size);
    const y = rnd(0, size);
    ctx.moveTo(x, y);
    ctx.lineTo(x + rnd(-90, 90), y + rnd(-90, 90));
    ctx.stroke();
  }

  addGrain(ctx, 30);

  return ctx.canvas.toDataURL('image/png');
}

/**
 * The storm lid St Jude sits under.
 *
 * The night sky above was drawn with its cloud band below the halfway line of
 * the equirect map - which is under the horizon, i.e. underground. Looking up
 * out of the courtyard you got stars and a moon on a clear night, in a game
 * with rain, thunder and lightning.
 *
 * Here the deck is drawn where it belongs: a bruised ceiling from the zenith
 * down to the horizon, heaviest and best-lit just above the treeline, with the
 * moon tearing a hole through it and one storm cell already lit from inside.
 */
export function createStormSkyTexture(): THREE.CanvasTexture {
  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('2D canvas context is unavailable');

  // The equator of an equirectangular map is the horizon.
  const horizon = height / 2;

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#0a0f18');
  gradient.addColorStop(0.2, '#131c2a');
  gradient.addColorStop(0.38, '#222d3c');
  gradient.addColorStop(0.485, '#3a4453');
  gradient.addColorStop(0.55, '#272b33');
  gradient.addColorStop(0.75, '#131519');
  gradient.addColorStop(1, '#07080a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Stars only survive in the thinnest part of the deck, straight overhead.
  for (let i = 0; i < 120; i++) {
    const y = rnd(0, horizon * 0.3);
    const fade = 1 - y / (horizon * 0.34);
    ctx.fillStyle = `rgba(214,222,255,${(rnd(0.1, 0.5) * fade).toFixed(3)})`;
    const size = rnd(0.7, 1.7);
    ctx.fillRect(rnd(0, width), y, size, size);
  }

  // Moon burning through a gap in the overcast, low over the north fence.
  const moonX = width * 0.26;
  const moonY = horizon * 0.6;
  const halo = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, 150);
  halo.addColorStop(0, 'rgba(232,238,255,0.5)');
  halo.addColorStop(0.2, 'rgba(186,204,242,0.2)');
  halo.addColorStop(0.55, 'rgba(130,152,206,0.07)');
  halo.addColorStop(1, 'rgba(110,132,190,0)');
  ctx.fillStyle = halo;
  ctx.fillRect(moonX - 150, moonY - 150, 300, 300);

  ctx.fillStyle = '#e9edff';
  ctx.beginPath();
  ctx.arc(moonX, moonY, 23, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = 'rgba(148,158,190,0.4)';
  for (let i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.arc(moonX + rnd(-13, 13), moonY + rnd(-13, 13), rnd(2, 7), 0, Math.PI * 2);
    ctx.fill();
  }

  // Soft plump cloud body, lit along the top and pooling dark underneath.
  const puff = (
    x: number,
    y: number,
    rx: number,
    ry: number,
    rgb: string,
    alpha: number,
  ): void => {
    const grad = ctx.createRadialGradient(x, y - ry * 0.35, 0, x, y, rx);
    grad.addColorStop(0, `rgba(${rgb},${alpha})`);
    grad.addColorStop(0.55, `rgba(${rgb},${(alpha * 0.5).toFixed(3)})`);
    grad.addColorStop(1, `rgba(${rgb},0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
  };

  for (let i = 0; i < 300; i++) {
    // Biased towards the horizon, where a storm ceiling is thickest.
    const t = Math.pow(Math.random(), 0.65);
    const y = horizon * (0.93 - t * 0.95);
    const scale = 0.55 + t * 0.95;
    const rx = rnd(55, 185) * scale;
    const ry = rnd(13, 40) * scale;
    const x = rnd(-140, width + 140);
    puff(x, y + ry * 0.4, rx, ry, '12,15,20', rnd(0.22, 0.46));
    puff(x, y, rx * 0.88, ry * 0.82, '84,94,112', rnd(0.05, 0.18));
  }

  // A storm cell already flashing somewhere out past the graveyard.
  const cellX = width * 0.76;
  const cellY = horizon * 0.9;
  const storm = ctx.createRadialGradient(cellX, cellY, 0, cellX, cellY, 200);
  storm.addColorStop(0, 'rgba(198,216,255,0.32)');
  storm.addColorStop(0.35, 'rgba(128,152,208,0.13)');
  storm.addColorStop(1, 'rgba(90,110,160,0)');
  ctx.fillStyle = storm;
  ctx.fillRect(cellX - 200, 0, 400, horizon + 80);

  // Haze where the deck comes down to meet the ground, so the horizon is soft.
  const haze = ctx.createLinearGradient(0, horizon - 46, 0, horizon + 34);
  haze.addColorStop(0, 'rgba(58,66,80,0)');
  haze.addColorStop(0.55, 'rgba(70,78,92,0.5)');
  haze.addColorStop(1, 'rgba(18,20,24,0.92)');
  ctx.fillStyle = haze;
  ctx.fillRect(0, horizon - 46, width, 80);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.mapping = THREE.EquirectangularReflectionMapping;
  return texture;
}
