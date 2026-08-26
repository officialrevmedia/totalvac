/**
 * Photo handling.
 *
 * Until genuine TotalVac photography is supplied, every photo slot renders a
 * clearly labelled placeholder that names the exact shot required. Nothing is
 * hotlinked and no image is generated to look like a real photograph.
 *
 * Photographs sourced from a free library are listed in src/content/photos.mjs
 * and downloaded by "npm run photos". A slot switches from placeholder to real
 * photograph automatically once assets/img/<slot>.jpg exists, so no code change
 * is needed when TotalVac supplies its own files. Drop them in with the same
 * name and rebuild.
 *
 * Record source, photographer, licence and download date in IMAGE-CREDITS.md.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { photoMeta } from '../content/photos.mjs';

const imgDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'assets', 'img');

/** True when a real photograph has been downloaded for this slot. */
const available = (id, ext) => {
  try {
    return fs.existsSync(path.join(imgDir, `${id}.${ext}`));
  } catch {
    return false;
  }
};

export const photoRegistry = new Map();

const ratioToSize = (ratio) => {
  const [w, h] = ratio.split('/').map((n) => parseFloat(n.trim()));
  const width = 1200;
  return { width, height: Math.round((width * h) / w) };
};

/**
 * @param {object} photo  { id, shot, alt, ratio, src }
 * @param {object} opts   { className, priority, sizes }
 */
export const Photo = (photo, opts = {}) => {
  const { className = '', priority = false, sizes = '(min-width: 900px) 50vw, 100vw' } = opts;
  const { width, height } = ratioToSize(photo.ratio || '4 / 3');
  const sourced = photoMeta[photo.id] || null;
  const hasJpg = available(photo.id, 'jpg');
  photoRegistry.set(photo.id, { ...photo, sourced, present: hasJpg });

  const loading = priority ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"';

  if (hasJpg) {
    const alt = (sourced && sourced.alt) || photo.alt;
    const sources = [];
    if (available(photo.id, 'avif')) {
      sources.push(`<source type="image/avif" srcset="/assets/img/${photo.id}.avif" sizes="${sizes}">`);
    }
    if (available(photo.id, 'webp')) {
      sources.push(`<source type="image/webp" srcset="/assets/img/${photo.id}.webp" sizes="${sizes}">`);
    }
    return `
<figure class="media ${className}" style="aspect-ratio:${photo.ratio}">
  <picture>
    ${sources.join('\n    ')}
    <img src="/assets/img/${photo.id}.jpg" alt="${alt}" width="${width}" height="${height}" ${loading}>
  </picture>
</figure>`;
  }

  return `
<figure class="media ${className}" style="aspect-ratio:${photo.ratio}" data-photo-placeholder="${photo.id}">
  <img src="/assets/img/placeholder-${photo.id}.svg" alt="Placeholder for site photography. Required shot: ${photo.shot}." width="${width}" height="${height}" ${loading}>
</figure>`;
};

/** Placeholder artwork. Ink surface, steel hairlines, one flow ring, plain label. */
export const placeholderSvg = (photo) => {
  const { width, height } = ratioToSize(photo.ratio || '4 / 3');
  const words = photo.shot.split(' ');
  const lines = [];
  let line = '';
  words.forEach((word) => {
    if ((line + ' ' + word).trim().length > 34) {
      lines.push(line.trim());
      line = word;
    } else {
      line = (line + ' ' + word).trim();
    }
  });
  if (line) lines.push(line);

  const label = lines
    .slice(0, 4)
    .map(
      (text, i) =>
        `<text x="56" y="${196 + i * 32}" fill="#AEB9C2" font-family="Inter, system-ui, sans-serif" font-size="22">${text.replace(
          /&/g,
          '&amp;'
        )}</text>`
    )
    .join('\n    ');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="Photo placeholder">
  <rect width="${width}" height="${height}" fill="#11171C"/>
  <g stroke="#73818C" stroke-opacity="0.16">
    <path d="M0 ${Math.round(height * 0.25)}H${width}M0 ${Math.round(height * 0.5)}H${width}M0 ${Math.round(
    height * 0.75
  )}H${width}"/>
    <path d="M${Math.round(width * 0.25)} 0V${height}M${Math.round(width * 0.5)} 0V${height}M${Math.round(
    width * 0.75
  )} 0V${height}"/>
  </g>
  <g transform="translate(${width - 190} ${height - 190})" stroke="#2D8CFF" fill="none" stroke-opacity="0.5">
    <circle cx="120" cy="120" r="118" stroke-width="1"/>
    <circle cx="120" cy="120" r="86" stroke-width="1.5" stroke-dasharray="10 16"/>
    <circle cx="120" cy="120" r="44" stroke-width="1"/>
  </g>
  <rect x="56" y="52" width="46" height="3" fill="#2D8CFF"/>
  <text x="56" y="94" fill="#F5F4EF" font-family="Inter, system-ui, sans-serif" font-size="20" font-weight="600" letter-spacing="4">PHOTO PLACEHOLDER</text>
  <text x="56" y="158" fill="#73818C" font-family="Inter, system-ui, sans-serif" font-size="15" letter-spacing="3">REQUIRED SHOT</text>
  ${label}
</svg>`;
};

export default { Photo, placeholderSvg, photoRegistry };
