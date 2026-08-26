/* Lightweight inline SVG. Decorative marks are hidden from assistive technology. */

export const iconArrow = (size = 16) => `
<svg class="btn__arrow" width="${size}" height="${size}" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
  <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const iconPhone = (size = 15) => `
<svg width="${size}" height="${size}" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
  <path d="M5.2 2.5 6.6 5 5.4 6.5c.7 1.4 1.7 2.4 3.1 3.1L10 8.4l2.5 1.4v2.3c0 .6-.5 1.1-1.1 1C6.1 12.7 3.3 9.9 2.3 4.6c-.1-.6.4-1.1 1-1.1h1.9Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
</svg>`;

export const iconClose = (size = 18) => `
<svg width="${size}" height="${size}" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
  <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
</svg>`;

/**
 * Flow ring: the signature motif. Concentric arcs drawn from the circular
 * vacuum inlet reference in the TotalVac mark. One slow rotation only, and the
 * animation is switched off entirely under prefers-reduced-motion.
 */
export const flowRing = (className = '') => `
<svg class="flow-ring ${className}" viewBox="0 0 240 240" fill="none" aria-hidden="true" focusable="false">
  <circle cx="120" cy="120" r="118" stroke="currentColor" stroke-width="1" opacity="0.35"/>
  <circle cx="120" cy="120" r="92" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <g class="flow-ring__spin">
    <circle cx="120" cy="120" r="66" stroke="currentColor" stroke-width="1.5" stroke-dasharray="10 16" opacity="0.9"/>
  </g>
  <circle cx="120" cy="120" r="38" stroke="currentColor" stroke-width="1" opacity="0.45"/>
  <path d="M120 82v76M82 120h76" stroke="currentColor" stroke-width="1" opacity="0.2"/>
</svg>`;

export default { iconArrow, iconPhone, iconClose, flowRing };
