import { services, maintenanceCard, acceptanceNote } from '../content/services.mjs';
import { serviceAreaTitle } from '../config/siteConfig.mjs';
import {
  PageHero,
  SectionHeading,
  ServiceCard,
  ProcessSteps,
  CheckList,
  TagList,
  Notice,
  FAQAccordion,
  FinalCTA
} from '../components/blocks.mjs';
import { Breadcrumbs } from '../components/layout.mjs';
import { Photo } from '../components/media.mjs';
import { iconArrow, iconPhone } from '../components/icons.mjs';
import { phoneLabel, phoneHref } from '../config/siteConfig.mjs';

const withArea = (base) => {
  const area = serviceAreaTitle();
  return area ? `${base} in ${area} | TotalVac Solutions` : `${base} | TotalVac Solutions`;
};

/* ------------------------------------------------------------ overview page */

export const overviewPage = () => ({
  route: '/services/',
  output: 'services/index.html',
  title: withArea('Vacuum Services, Grease Trap, Catch Basin and Liquid Waste'),
  description:
    'Grease trap cleaning, catch basin cleaning, liquid waste removal, tank and sump pump-outs, site dewatering and scheduled maintenance from TotalVac Solutions.',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' }
  ],
  body: `
${PageHero({
  eyebrow: 'SERVICES',
  title: 'Vacuum services built around the site.',
  lede: 'Every pump-out begins with the same questions: what is the material, how much is there, where is it located, how can it be accessed, and where can it be lawfully handled? TotalVac reviews those details first, then coordinates the right service approach for approved non-hazardous liquid waste.'
})}

<section class="section--tight surface-white">
  <div class="shell">
    <div class="grid grid--3" data-reveal>
      ${[...services, maintenanceCard].map((s, i) => ServiceCard(s, i)).join('\n      ')}
    </div>
  </div>
</section>

${services
  .map(
    (service, index) => `
<section class="section${index % 2 === 1 ? ' surface-white' : ''}" id="${service.slug}">
  <div class="shell">
    <div class="split${index % 2 === 1 ? ' split--media-first' : ''}" style="align-items:start">
      <div data-reveal>
        <p class="eyebrow">${service.eyebrow}</p>
        <h2>${service.title}</h2>
        <p class="lede">${service.intro}</p>

        <h3 style="margin-top:2rem">Who it is for</h3>
        <p>${service.whoFor}</p>

        <h3 style="margin-top:2rem">Common signs service is needed</h3>
        ${CheckList(service.signs)}

        <h3 style="margin-top:2rem">What to provide</h3>
        ${CheckList(service.provide)}

        <h3 style="margin-top:2rem">What to expect</h3>
        <p>${service.expect}</p>

        <p style="margin-top:2rem" class="btn-row">
          <a class="btn" href="/contact/?service=${encodeURIComponent(service.title)}">Request ${service.title} ${iconArrow()}</a>
          <a class="link-arrow" href="/services/${service.slug}/">Full service detail ${iconArrow(14)}</a>
        </p>
      </div>
      <div data-reveal="media">
        ${Photo(service.photo, { className: 'media--framed', sizes: '(min-width: 900px) 45vw, 100vw' })}
        ${service.notice ? `<div style="margin-top:1.25rem">${Notice(service.notice)}</div>` : ''}
      </div>
    </div>
  </div>
</section>`
  )
  .join('\n')}

<section class="section surface-ink" id="scheduled-maintenance">
  <div class="shell">
    <div class="split" style="align-items:start">
      <div data-reveal>
        <p class="eyebrow">SCHEDULED MAINTENANCE</p>
        <h2>Recurring service, planned around the site.</h2>
        <p class="lede">Recurring maintenance can reduce last-minute service calls and make scheduling easier for the people who run the property. Intervals are proposed from usage, capacity and what the equipment shows at each visit.</p>
        <p style="margin-top:1.75rem"><a class="btn" href="/contact/?service=Scheduled%20Maintenance">Discuss Scheduled Service ${iconArrow()}</a></p>
      </div>
      <div data-reveal>
        <div class="spec-panel" style="background:var(--graphite);border-color:var(--line-dark);color:var(--warm)">
          <h3 style="color:var(--warm)">What a maintenance plan covers</h3>
          ${CheckList([
            'The systems included and where they are on the property',
            'A proposed service interval for each system',
            'The information needed before each visit',
            'Preferred service windows and access arrangements',
            'A review point to adjust the interval as conditions change'
          ])}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section--tight surface-white">
  <div class="shell shell--narrow">
    ${Notice(acceptanceNote)}
  </div>
</section>

${FinalCTA()}
`
});

/* -------------------------------------------------------------- detail page */

export const detailPage = (service) => {
  const related = (service.related || [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  return {
    route: `/services/${service.slug}/`,
    output: `services/${service.slug}/index.html`,
    title: withArea(service.metaTitle),
    description: service.metaDescription,
    faqs: service.faqs,
    serviceSchema: {
      name: service.title,
      description: service.intro
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services/' },
      { label: service.title, href: `/services/${service.slug}/` }
    ],
    body: `
<section class="page-hero">
  ${Breadcrumbs([
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: service.title, href: `/services/${service.slug}/` }
  ])}
  <div class="shell page-hero__inner" data-reveal>
    <p class="eyebrow">${service.eyebrow}</p>
    <h1>${service.h1}</h1>
    <p class="lede">${service.intro}</p>
    <div class="page-hero__actions">
      <a class="btn" href="/contact/?service=${encodeURIComponent(service.title)}">Request Service ${iconArrow()}</a>
      <a class="btn btn--ghost-light" href="${phoneHref()}">${iconPhone()}<span>${phoneLabel()}</span></a>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="split" style="align-items:start">
      <div data-reveal>
        <p class="eyebrow">WHAT THIS SERVICE DELIVERS</p>
        <h2>Benefits</h2>
        ${CheckList(service.benefits)}

        <h3 style="margin-top:2.5rem">Who it is for</h3>
        <p>${service.whoFor}</p>

        <h3 style="margin-top:2rem">Common signs service is needed</h3>
        ${CheckList(service.signs)}
      </div>
      <div data-reveal="media">
        ${Photo(service.photo, { className: 'media--framed', sizes: '(min-width: 900px) 45vw, 100vw' })}
        <div class="spec-panel" style="margin-top:1.5rem">
          <h3>Applications</h3>
          ${TagList(service.applications)}
          ${service.applicationsNote ? `<p class="field__hint" style="margin-top:1rem">${service.applicationsNote}</p>` : ''}
        </div>
        ${service.notice ? `<div style="margin-top:1.5rem">${Notice(service.notice)}</div>` : ''}
      </div>
    </div>
  </div>
</section>

<section class="section surface-ink">
  <div class="shell">
    ${SectionHeading({ eyebrow: 'SERVICE PROCESS', title: 'Four steps, start to finish.' })}
    ${ProcessSteps(service.process)}
  </div>
</section>

<section class="section surface-white">
  <div class="shell">
    <div class="split" style="align-items:start">
      <div data-reveal>
        <p class="eyebrow">BEFORE THE CREW ARRIVES</p>
        <h2>Site preparation checklist</h2>
        <p class="lede">A few minutes of preparation keeps the visit short and the work clean.</p>
        ${CheckList(service.prep)}
      </div>
      <div class="spec-panel" data-reveal>
        <h3>What to send with the request</h3>
        ${CheckList(service.provide)}
        <p style="margin-top:1.5rem;margin-bottom:0">
          <a class="link-arrow" href="/contact/?service=${encodeURIComponent(service.title)}">Start a request ${iconArrow(14)}</a>
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell shell--narrow">
    ${SectionHeading({ eyebrow: 'SERVICE QUESTIONS', title: `${service.title} questions` })}
    ${FAQAccordion(service.faqs, `svc-${service.slug}`)}
  </div>
</section>

<section class="section--tight surface-white">
  <div class="shell">
    ${SectionHeading({ eyebrow: 'RELATED SERVICES', title: 'Often requested together.' })}
    <div class="grid grid--3" data-reveal>
      ${related.map((s, i) => ServiceCard(s, i)).join('\n      ')}
    </div>
  </div>
</section>

${FinalCTA()}
`
  };
};

export default { overviewPage, detailPage };
