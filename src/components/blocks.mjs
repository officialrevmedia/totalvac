import { phoneLabel, phoneHref } from '../config/siteConfig.mjs';
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

export const PageHero = ({ eyebrow, title, lede, actions = true }) => `
<section class="page-hero">
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

export const ServiceCard = (service, index) => `
<a class="card" href="${service.href || `/services/${service.slug}/`}">
  <span class="card__index">0${index + 1}</span>
  <h3>${service.title}</h3>
  <p>${service.cardSummary}</p>
  <span class="card__cta">${service.cta || 'Explore service'} ${iconArrow(14)}</span>
</a>`;

export const IndustryCard = (industry) => `
<a class="card card--dark" href="/industries/#${industry.id}">
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
  Marquee,
  Testimonials,
  FinalCTA
};
