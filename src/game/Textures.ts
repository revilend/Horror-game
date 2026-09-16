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
  ctx.fillStyle = '#3b3b3e';
  ctx.fillRect(0, 0, SIZE, SIZE);

  blotches(ctx, 80, 'rgba(255,255,255,ALPHA)', 0.02, 0.07, 8, 52);
  blotches(ctx, 60, 'rgba(0,0,0,ALPHA)', 0.05, 0.16, 10, 60);

  // Damp streaks running down from the ceiling
  for (let i = 0; i < 24; i++) {
    const width = rnd(2, 11);
    const height = rnd(60, 220);
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, `rgba(12,10,8,${rnd(0.18, 0.4).toFixed(3)})`);
    gradient.addColorStop(1, 'rgba(12,10,8,0)');
    ctx.fillStyle = gradient;
    ctx.save();
    ctx.translate(rnd(0, SIZE), rnd(-20, SIZE * 0.4));
    ctx.fillRect(-width / 2, 0, width, height);
    ctx.restore();
  }

  // Hairline cracks
  ctx.strokeStyle = 'rgba(0,0,0,0.4)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 14; i++) {
    ctx.beginPath();
    let x = rnd(0, SIZE);
    let y = rnd(0, SIZE);
    ctx.moveTo(x, y);
    for (let step = 0; step < 6; step++) {
      x += rnd(-26, 26);
      y += rnd(-26, 26);
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  addGrain(ctx, 30);
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
 * Blood scrawled across a wall.
 *
 * Deliberately uses a web-safe serif instead of the Google font: canvas text
 * has to be drawn immediately, and webfonts may not have loaded yet.
 */
export function createBloodTextTexture(text: string): THREE.CanvasTexture {
  const size = 512;
  const ctx = context2d(size);
  ctx.clearRect(0, 0, size, size);
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
    const height = rnd(10, 70);
    ctx.globalAlpha = rnd(0.12, 0.4);
    ctx.fillRect(x, y + rnd(16, 30), rnd(1.5, 5), height);
  }
  ctx.globalAlpha = 1;

  // Rough edges: chew random holes out of the paint
  ctx.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 130; i++) {
    ctx.beginPath();
    ctx.arc(rnd(0, size), rnd(0, size), rnd(1, 6), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalCompositeOperation = 'source-over';

  const texture = new THREE.CanvasTexture(ctx.canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
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
