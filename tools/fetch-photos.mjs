/**
 * Downloads the sourced photography listed in src/content/photos.mjs into
 * assets/img/, at the largest size the library serves.
 *
 * Run: npm run photos
 *
 * The build picks the files up automatically. No configuration change is needed:
 * if assets/img/<id>.jpg exists, that photo replaces the placeholder, and if
 * <id>.avif or <id>.webp also exist they are offered first.
 *
 * Optional conversion to AVIF and WebP:
 *   npm install sharp
 *   npm run photos
 * Without sharp the JPEG files are still downloaded and used. The site works
 * either way, the modern formats are simply a size saving.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sourcedPhotos } from '../src/content/photos.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'assets', 'img');
const TARGET_WIDTH = 3840; // 4K wide. Nothing is upscaled beyond the original.

fs.mkdirSync(outDir, { recursive: true });

/** Reads intrinsic dimensions from a JPEG buffer without any dependency. */
const jpegSize = (buffer) => {
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
    }
    offset += 2 + length;
  }
  return null;
};

const download = async (url) => {
  const response = await fetch(url, { headers: { 'User-Agent': 'TotalVac site build' } });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return Buffer.from(await response.arrayBuffer());
};

let sharp = null;
try {
  ({ default: sharp } = await import('sharp'));
} catch {
  /* sharp is optional */
}

const entries = Object.entries(sourcedPhotos);
console.log(`Fetching ${entries.length} photographs into assets/img/\n`);

const report = [];

const force = process.env.FORCE === '1' || process.argv.includes('--force');

for (const [slot, photo] of entries) {
  const target = path.join(outDir, `${slot}.jpg`);

  if (fs.existsSync(target) && !force) {
    console.log(`  ${slot}.jpg already present, skipped. Use --force to replace it.`);
    continue;
  }

  try {
    const url = `${photo.download}&w=${TARGET_WIDTH}`;
    let buffer = await download(url);
    let size = jpegSize(buffer);

    /* If the resized delivery came back small, fall back to the original file. */
    if (!size || size.width < 2000) {
      const original = await download(photo.download);
      const originalSize = jpegSize(original);
      if (originalSize && (!size || originalSize.width > size.width)) {
        buffer = original;
        size = originalSize;
      }
    }

    fs.writeFileSync(target, buffer);
    const kb = Math.round(buffer.length / 1024);
    const dims = size ? `${size.width} by ${size.height}` : 'unknown size';
    const flag = size && size.width < 3840 ? '  (below 4K width)' : '';
    console.log(`  ${slot}.jpg  ${dims}  ${kb}KB${flag}`);
    report.push({ slot, ...photo, width: size?.width, height: size?.height });

    if (sharp) {
      const web = sharp(buffer).resize({ width: 2000, withoutEnlargement: true });
      await web.clone().webp({ quality: 76 }).toFile(path.join(outDir, `${slot}.webp`));
      await web.clone().avif({ quality: 55 }).toFile(path.join(outDir, `${slot}.avif`));
      await web.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(outDir, `${slot}-web.jpg`));
      fs.renameSync(path.join(outDir, `${slot}-web.jpg`), target);
      console.log(`           converted to AVIF and WebP, JPEG resized for the web`);
    }
  } catch (error) {
    console.error(`  ${slot} failed: ${error.message}`);
  }
}

if (!sharp) {
  console.log(
    '\nsharp is not installed, so the full size JPEG files are in place without AVIF or WebP versions.'
  );
  console.log('For smaller files run: npm install sharp && npm run photos');
}

fs.writeFileSync(
  path.join(root, 'assets', 'img', 'sourced-photos.json'),
  JSON.stringify(report, null, 2)
);

console.log('\nDone. Run "npm run build" to publish the site with these photographs.');
