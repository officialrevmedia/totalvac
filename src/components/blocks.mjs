import { phoneLabel, phoneHref } from '../config/siteConfig.mjs';
import { Breadcrumbs } from './layout.mjs';
import {
  MAP_SIZE,
  LAKE_ONTARIO,
  LAKE_ERIE,
  GRAND_RIVER,
  HIGHWAYS,
  CITIES,
  CITY_LABELS
} from '../content/coverage-map.mjs';
import { iconArrow, iconPhone, flowRing } from './icons.mjs';
import { Photo } from './media.mjs';

export const SectionHeading = ({ eyebrow, title, lede, wide = false, level = 2 }) => `
<div class="section-head${wide ? ' section-head--wide' : ''}" data-reveal>
  ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
  <h${level}>${title}</h${level}>
  ${lede ? `<p class="lede">${lede}</p>` : ''}
</div>`;

export const Hero = ({ eyebrow, title, support, photo, reassurance = [] }) => `
<section class="hero">
  <div class="shell hero__inner">
    <div class="hero__copy" data-reveal>
      <p class="eyebrow">${eyebrow}</p>
      <h1>${title}</h1>
      <p class="hero__support">${support}</p>
      <div class="hero__actions">
        <a class="btn" href="/contact/">Request Service ${iconArrow()}</a>
        <a class="btn btn--ghost-light" href="${phoneHref()}">${iconPhone()}<span>${phoneLabel()}</span></a>
      </div>
      ${
        reassurance.length
          ? `<ul class="hero__reassurance">${reassurance
              .map((item) => `<li>${item}</li>`)
              .join('')}</ul>`
          : ''
      }
    </div>
    <div class="hero__media" data-reveal="media">
      ${Photo(photo, { priority: true, sizes: '(min-width: 900px) 52vw, 100vw' })}
      ${flowRing()}
    </div>
  </div>
</section>`;

export const PageHero = ({ eyebrow, title, lede, actions = true, trail = null }) => `
<section class="page-hero">
  ${trail ? Breadcrumbs(trail) : ''}
  <div class="shell page-hero__inner" data-reveal>
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
    <h1>${title}</h1>
    ${lede ? `<p class="lede">${lede}</p>` : ''}
    ${
      actions
        ? `<div class="page-hero__actions">
      <a class="btn" href="/contact/">Request Service ${iconArrow()}</a>
      <a class="btn btn--ghost-light" href="${phoneHref()}">${iconPhone()}<span>${phoneLabel()}</span></a>
    </div>`
        : ''
    }
  </div>
  ${flowRing()}
</section>`;

export const TrustStrip = ({ categories, note }) => `
<section class="trust">
  <div class="shell trust__inner">
    <ul class="trust__list" data-reveal>
      ${categories.map((c) => `<li>${c}</li>`).join('\n      ')}
    </ul>
    <p class="trust__note" data-reveal>${note}</p>
  </div>
</section>`;

export const ServiceCard = (service, index, options = {}) => {
  const { withPhoto = false } = options;
  const photoId = service.photo ? service.photo.id : service.photoId;
  return `
<a class="card${withPhoto && photoId ? ' card--photo' : ''}" href="${service.href || `/services/${service.slug}/`}">
  ${
    withPhoto && photoId
      ? `<div class="card__media">${Photo(
          { id: photoId, shot: service.title, alt: service.title, ratio: '3 / 2' },
          { sizes: '(min-width: 1100px) 30vw, (min-width: 640px) 45vw, 92vw' }
        )}</div>`
      : ''
  }
  <span class="card__index">0${index + 1}</span>
  <h3>${service.title}</h3>
  <p>${service.cardSummary}</p>
  <span class="card__cta">${service.cta || 'Explore service'} ${iconArrow(14)}</span>
</a>`;
};

/** Full width statement band with a slow parallax on the photograph. */
export const StatementBand = ({ eyebrow, statement, attribution, photoId }) => `
<section class="statement">
  <div class="statement__media">
    ${Photo(
      { id: photoId, shot: 'Service in progress', alt: 'TotalVac service in progress', ratio: '2 / 1' },
      { sizes: '100vw' }
    )}
  </div>
  <div class="shell statement__inner">
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
    <p class="statement__text" data-reveal>${statement}</p>
    ${attribution ? `<p class="statement__attribution">${attribution}</p>` : ''}
  </div>
</section>`;

export const IndustryCard = (industry) => `
<a class="card" href="/industries/#${industry.id}">
  <h3>${industry.title}</h3>
  <p>${industry.short}</p>
  <span class="card__cta">Read more ${iconArrow(14)}</span>
</a>`;

export const ProcessSteps = (steps) => `
<ol class="process">
  ${steps
    .map(
      (step) => `<li class="process__step" data-reveal>
    <h3>${step.title}</h3>
    <p>${step.body}</p>
  </li>`
    )
    .join('\n  ')}
</ol>`;

export const CheckList = (items) => `
<ul class="check-list">
  ${items.map((item) => `<li>${item}</li>`).join('\n  ')}
</ul>`;

export const TagList = (items) => `
<ul class="tag-list">
  ${items.map((item) => `<li>${item}</li>`).join('\n  ')}
</ul>`;

export const Notice = (text) => `
<div class="notice" data-reveal><p>${text}</p></div>`;

export const FAQAccordion = (items, idPrefix = 'faq') => `
<div class="accordion" data-accordion>
  ${items
    .map(
      (item, i) => `<div class="accordion__item">
    <h3 style="margin:0">
      <button class="accordion__trigger" type="button" data-accordion-trigger
        id="${idPrefix}-t-${i}" aria-expanded="false" aria-controls="${idPrefix}-p-${i}">
        <span>${item.q}</span>
        <span class="accordion__icon" aria-hidden="true"></span>
      </button>
    </h3>
    <div class="accordion__panel" id="${idPrefix}-p-${i}" role="region" aria-labelledby="${idPrefix}-t-${i}">
      <div class="accordion__panel-inner"><p>${item.a}</p></div>
    </div>
  </div>`
    )
    .join('\n  ')}
</div>`;

export const PhotoPanel = ({ eyebrow, title, body, photo, list = [], cta, mediaFirst = false }) => `
<div class="split${mediaFirst ? ' split--media-first' : ''}">
  <div class="split__copy" data-reveal>
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
    <h2>${title}</h2>
    ${body.map((p) => `<p>${p}</p>`).join('\n    ')}
    ${list.length ? CheckList(list) : ''}
    ${
      cta
        ? `<p style="margin-top:1.75rem"><a class="btn" href="${cta.href}">${cta.label} ${iconArrow()}</a></p>`
        : ''
    }
  </div>
  <div class="split__media" data-reveal="media">${Photo(photo, { className: 'media--framed' })}</div>
</div>`;

export const FinalCTA = ({
  title = 'Need it pumped out? Start here.',
  body = 'Send the location, service type, access details, and urgency. TotalVac will review the request and follow up with the next step.'
} = {}) => `
<section class="final-cta">
  <div class="shell final-cta__inner">
    <div data-reveal>
      <h2>${title}</h2>
      <p class="lede">${body}</p>
    </div>
    <div class="final-cta__actions" data-reveal>
      <a class="btn" href="/contact/">Request Service ${iconArrow()}</a>
      <a class="btn btn--ghost-light" href="${phoneHref()}">${iconPhone()}<span>${phoneLabel()}</span></a>
    </div>
  </div>
  ${flowRing()}
</section>`;

/** Scrolling descriptor band. Slow, pausable, and static under reduced motion. */
export const Marquee = ({ items, variant = '' }) => {
  const run = items
    .map((item) => `<span class="marquee__item">${item}<span class="marquee__dot" aria-hidden="true"></span></span>`)
    .join('');
  return `
<div class="marquee ${variant}" role="region" aria-label="Services offered">
  <div class="marquee__track" aria-hidden="true">
    <div class="marquee__run">${run}</div>
    <div class="marquee__run">${run}</div>
  </div>
  <p class="visually-hidden">${items.join('. ')}.</p>
</div>`;
};

/**
 * Coverage map.
 *
 * A drawn corridor map renders immediately with no third party request. The
 * interactive Google map loads only when the visitor asks for it, so no request
 * leaves the browser for a third party until they click. There is no API key
 * and no tracking script.
 */
export const CoverageMap = ({ query }) => `
<div class="coverage">
  <div class="coverage__figure" data-map-facade>
    <svg class="coverage__svg" viewBox="0 0 ${MAP_SIZE.w} ${MAP_SIZE.h}" role="img"
      aria-label="Map of southern Ontario showing the TotalVac service area from Stratford east to Toronto, including Kitchener, Waterloo, Cambridge, Guelph, Brantford, Caledonia, Hamilton, Burlington, Oakville and Mississauga">
      <defs>
        <linearGradient id="coverageLand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#141b22"/>
          <stop offset="100%" stop-color="#0e141a"/>
        </linearGradient>
        <radialGradient id="coverageGlow" cx="42%" cy="46%" r="52%">
          <stop offset="0%" stop-color="#2D8CFF" stop-opacity="0.18"/>
          <stop offset="100%" stop-color="#2D8CFF" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="${MAP_SIZE.w}" height="${MAP_SIZE.h}" fill="url(#coverageLand)"/>
      <ellipse cx="${MAP_SIZE.w * 0.44}" cy="${MAP_SIZE.h * 0.46}" rx="${MAP_SIZE.w * 0.42}"
        ry="${MAP_SIZE.h * 0.42}" fill="url(#coverageGlow)"/>

      <path d="${LAKE_ONTARIO}" fill="#0a1c2e" stroke="#2D8CFF" stroke-opacity="0.35" stroke-width="1.2"/>
      <path d="${LAKE_ERIE}" fill="#0a1c2e" stroke="#2D8CFF" stroke-opacity="0.35" stroke-width="1.2"/>
      <path d="${GRAND_RIVER}" fill="none" stroke="#3f7fb8" stroke-opacity="0.55" stroke-width="1.6"/>

      <g class="coverage__roads">
        ${HIGHWAYS.map(
          (road) =>
            `<path d="${road.d}" fill="none" stroke="#AEB9C2" stroke-opacity="${
              road.major ? '0.5' : '0.28'
            }" stroke-width="${road.major ? 2 : 1.3}" stroke-linecap="round"/>`
        ).join('\n        ')}
      </g>

      <g class="coverage__shields">
        ${HIGHWAYS.filter((road) => road.major)
          .map(
            (road) => `<g>
          <rect x="${road.x - 15}" y="${road.y - 10}" width="30" height="19" rx="4"
            fill="#0B1015" stroke="#73818C" stroke-opacity="0.7"/>
          <text x="${road.x}" y="${road.y + 4}" text-anchor="middle" fill="#AEB9C2"
            font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="600">${road.label}</text>
        </g>`
          )
          .join('\n        ')}
      </g>

      <text x="${MAP_SIZE.w - 96}" y="${MAP_SIZE.h - 176}" fill="#5f7d99"
        font-family="Inter, system-ui, sans-serif" font-size="12" letter-spacing="2.5"
        text-anchor="middle">LAKE ONTARIO</text>
      <text x="${MAP_SIZE.w - 150}" y="${MAP_SIZE.h - 22}" fill="#5f7d99"
        font-family="Inter, system-ui, sans-serif" font-size="12" letter-spacing="2.5"
        text-anchor="middle">LAKE ERIE</text>

      ${CITIES.map((city, i) => {
        const label = CITY_LABELS[city.label] || {};
        const dy = label.dy || 0;
        const flip = Boolean(label.flip);
        return `<g class="coverage__point" style="--i:${i}">
        <circle cx="${city.x}" cy="${city.y}" r="${city.primary ? 6.5 : 4}"
          fill="${city.primary ? '#2D8CFF' : '#F5F4EF'}" stroke="#0B1015" stroke-width="1.5"/>
        <text x="${city.x + (flip ? -10 : 10)}" y="${city.y + dy + 4}"
          text-anchor="${flip ? 'end' : 'start'}"
          fill="${city.primary ? '#F5F4EF' : '#C4CDD5'}"
          font-family="Inter, system-ui, sans-serif"
          font-size="${city.primary ? 14 : 12.5}"
          font-weight="${city.primary ? 600 : 400}"
          paint-order="stroke" stroke="#0B1015" stroke-width="3" stroke-linejoin="round">${city.label}</text>
      </g>`;
      }).join('\n      ')}
    </svg>

    <div class="coverage__load">
      <p>Interactive map loads only when you ask, so nothing is requested from Google until you click.</p>
      <button class="btn btn--ghost-light" type="button" data-map-load
        data-map-src="https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=9&output=embed">
        Load interactive map
      </button>
    </div>
  </div>
</div>`;

/** Testimonials, or the commitments block while none are approved. */
export const Testimonials = ({ approved, testimonials, commitments }) => {
  if (approved && testimonials.length) {
    return `
<div class="grid grid--3">
  ${testimonials
    .map(
      (item) => `<figure class="quote-card" data-reveal>
    <blockquote><p>${item.quote}</p></blockquote>
    <figcaption>
      <span class="quote-card__name">${item.name}</span>
      ${item.role || item.company ? `<span class="quote-card__role">${[item.role, item.company].filter(Boolean).join(', ')}</span>` : ''}
      ${item.service ? `<span class="quote-card__service">${item.service}</span>` : ''}
    </figcaption>
  </figure>`
    )
    .join('\n  ')}
</div>`;
  }

  return `
<div class="grid grid--3">
  ${commitments
    .map(
      (item, i) => `<div class="card card--dark" data-reveal>
    <span class="card__index">0${i + 1}</span>
    <h3>${item.title}</h3>
    <p>${item.body}</p>
  </div>`
    )
    .join('\n  ')}
</div>`;
};

export default {
  SectionHeading,
  Hero,
  PageHero,
  TrustStrip,
  ServiceCard,
  IndustryCard,
  ProcessSteps,
  CheckList,
  TagList,
  Notice,
  FAQAccordion,
  PhotoPanel,
  StatementBand,
  CoverageMap,
  Marquee,
  Testimonials,
  FinalCTA
};
