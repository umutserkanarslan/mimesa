// Mi Mesa — favicon generator.
//
// Reads public/logo.png (the brand emblem) and produces a full favicon set:
//   public/favicon.ico        multi-res ICO (16/32/48, PNG-compressed)
//   public/favicon-16.png     16x16
//   public/favicon-32.png     32x32
//   public/apple-touch-icon.png  180x180 (opaque)
//   public/logo.png           rewritten as a clean 512x512 square master
//
// The source emblem is not square and may carry an alpha channel, so we
// detect the background colour from a corner pixel, pad to a square canvas
// with it, and flatten — the tab icon ends up an opaque cream square that
// matches the artwork exactly.
//
// Usage:  node scripts/gen-favicon.mjs

import sharp from 'sharp';
import { Buffer } from 'node:buffer';
import { writeFileSync } from 'node:fs';

const SRC = 'public/logo.png';

// --- minimal ICO encoder that embeds PNG frames (Vista+/all modern browsers)
function pngToIco(frames) {
	const header = Buffer.alloc(6);
	header.writeUInt16LE(0, 0); // reserved
	header.writeUInt16LE(1, 2); // type: 1 = icon
	header.writeUInt16LE(frames.length, 4);

	let offset = 6 + frames.length * 16;
	const entries = [];
	for (const { size, buffer } of frames) {
		const e = Buffer.alloc(16);
		e.writeUInt8(size >= 256 ? 0 : size, 0); // width  (0 = 256)
		e.writeUInt8(size >= 256 ? 0 : size, 1); // height
		e.writeUInt8(0, 2); // palette count
		e.writeUInt8(0, 3); // reserved
		e.writeUInt16LE(1, 4); // colour planes
		e.writeUInt16LE(32, 6); // bits per pixel
		e.writeUInt32LE(buffer.length, 8);
		e.writeUInt32LE(offset, 12);
		entries.push(e);
		offset += buffer.length;
	}
	return Buffer.concat([header, ...entries, ...frames.map((f) => f.buffer)]);
}

const meta = await sharp(SRC).metadata();

// background colour = top-left corner pixel; fall back to brand cream
const { data } = await sharp(SRC)
	.extract({ left: 0, top: 0, width: 1, height: 1 })
	.raw()
	.toBuffer({ resolveWithObject: true });
const cornerOpaque = data[3] === undefined || data[3] > 250;
const bg = cornerOpaque
	? { r: data[0], g: data[1], b: data[2] }
	: { r: 0xf1, g: 0xe5, b: 0xcb };
console.log(`source: ${meta.width}x${meta.height}  bg: rgb(${bg.r},${bg.g},${bg.b})`);

// square, opaque master
const side = Math.max(meta.width, meta.height);
const master = await sharp(SRC)
	.resize(side, side, { fit: 'contain', background: bg })
	.flatten({ background: bg })
	.png()
	.toBuffer();

const pngAt = (size) => sharp(master).resize(size, size).png().toBuffer();

writeFileSync('public/favicon-16.png', await pngAt(16));
writeFileSync('public/favicon-32.png', await pngAt(32));
writeFileSync('public/apple-touch-icon.png', await pngAt(180));

writeFileSync(
	'public/favicon.ico',
	pngToIco([
		{ size: 16, buffer: await pngAt(16) },
		{ size: 32, buffer: await pngAt(32) },
		{ size: 48, buffer: await pngAt(48) }
	])
);

// rewrite the master itself as a clean 512x512 square
writeFileSync('public/logo.png', await pngAt(512));

console.log('✓ favicon set written to public/');
