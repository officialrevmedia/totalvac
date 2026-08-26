import { services, maintenanceCard } from '../content/services.mjs';
import { industries, valuePoints, processSteps, trustCategories, faqs, homeFaqIds } from '../content/site.mjs';
import { approved as testimonialsApproved, testimonials, commitments } from '../content/testimonials.mjs';
import { siteConfig } from '../config/siteConfig.mjs';
import {
  Hero,
  Marquee,
  Testimonials,
  SectionHeading,
  TrustStrip,
  ServiceCard,
  IndustryCard,
  ProcessSteps,
  FAQAccordion,
  PhotoPanel,
  FinalCTA
} from '../components/blocks.mjs';
import { iconArrow } from '../components/icons.mjs';
import { Photo } from '../components/media.mjs';

const heroPhoto = {
  id: 'vacuum-trailer-hero',
  shot: 'Vacuum trailer and hose in operation at a clean commercial site. Correct PPE, wide framing, negative space on one side.',
  alt: 'Vacuum trailer parked at a commercial property with a service hose run to a drainage access point',
  ratio: '16 / 11'
};

const standardPhoto = {
  id: 'equipment-detail',
  shot: 'Detail of a hose coupling, valve or tank fitting on clean, well kept vacuum equipment',
  alt: 'Close view of a vacuum hose coupling connected to a service tank fitting',
  ratio: '4 / 3'
};

const propertyPhoto = {
  id: 'property-context',
  shot: 'Commercial property context: plaza loading area, restaurant service entrance or warehouse yard, clean and orderly',
  alt: 'Loading area behind a commercial plaza with clear access to service points',
  ratio: '4 / 3'
};

const scheduleMotif = `
<svg viewBox="0 0 520 140" class="schedule-motif" role="img" aria-label="Illustration of a recurring service interval">
  <g stroke="#73818C" stroke-opacity="0.45">
    <path d="M20 100h480"/>
  </g>
  ${Array.from({ length: 12 })
    .map((_, i) => {
      const x = 20 + i * 43.6;
      const active = i % 3 === 0;
      return `<rect x="${x.toFixed(1)}" y="${active ? 48 : 72}" width="6" height="${
        active ? 52 : 28
      }" rx="3" fill="${active ? '#2D8CFF' : '#73818C'}" fill-opacity="${active ? '1' : '0.45'}"/>`;
    })
    .join('\n  ')}
  <text x="20" y="132" fill="#73818C" font-family="Inter, system-ui, sans-serif" font-size="13" letter-spacing="3">INTERVAL SET AROUND SITE USAGE</text>
</svg>`;

export const page = () => {
  const homeFaqs = homeFaqIds.map((id) => faqs.find((f) => f.id === id)).filter(Boolean);
  const cards = [...services, maintenanceCard];

  return {
    route: '/',
    output: 'index.html',
    title: 'TotalVac Solutions | Grease Trap, Catch Basin and Liquid Waste Services',
    description:
      'Professional grease trap cleaning, catch basin service, tank and sump pump-outs, and approved liquid waste removal. Request service from TotalVac Solutions.',
    faqs: homeFaqs,
    body: `
${Hero({
  eyebrow: 'GREASE TRAP • CATCH BASIN • LIQUID WASTE',
  title: 'Liquid waste handled. Work stays moving.',
  support:
    'TotalVac Solutions provides professional vacuum services for grease traps, catch basins, tanks, sumps, and non-hazardous liquid waste. Clean execution, clear communication, and service built around your site.',
  photo: heroPhoto,
  reassurance: ['Commercial', 'Industrial', 'Property Management', 'Food Service']
})}

${Marquee({
  items: [
    'Grease Trap',
    'Catch Basin',
    'Liquid Waste Services',
    'Tank and Sump Pump-Outs',
    'Site Dewatering',
    'Scheduled Maintenance'
  ]
})}

${TrustStrip({
  categories: trustCategories,
  note: 'One call for routine pump-outs, scheduled maintenance, and urgent liquid waste needs.'
})}

<section class="section" id="services">
  <div class="shell">
    ${SectionHeading({
      eyebrow: 'CORE SERVICES',
      title: 'The right equipment for the waste you need gone.',
      lede: 'From recurring grease trap service to standing water and catch basin clean-outs, TotalVac provides practical vacuum solutions designed to minimize disruption and keep sites functioning.'
    })}
    <div class="grid grid--3" data-reveal>
      ${cards.map((service, i) => ServiceCard(service, i)).join('\n      ')}
    </div>
  </div>
</section>

<section class="section surface-ink">
  <div class="shell">
    <div class="split split--wide-copy" style="align-items:start">
      <div data-reveal>
        <p class="eyebrow">THE TOTALVAC STANDARD</p>
        <h2>Service that respects the site.</h2>
        <p class="lede">Vacuum work often happens where downtime, access, cleanliness, and communication matter. TotalVac is built to make the process straightforward from the first call to the final check.</p>
      </div>
      <div data-reveal="media">${Photo(standardPhoto, { sizes: '(min-width: 900px) 40vw, 100vw' })}</div>
    </div>

    <ul class="value-list" style="margin-top:clamp(2.5rem,4vw,4rem)">
      ${valuePoints
        .map(
          (point) => `<li data-reveal>
        <h3>${point.title}</h3>
        <p>${point.body}</p>
      </li>`
        )
        .join('\n      ')}
    </ul>
  </div>
</section>

<section class="section">
  <div class="shell">
    ${SectionHeading({
      eyebrow: 'HOW IT WORKS',
      title: 'Simple from request to removal.'
    })}
    ${ProcessSteps(processSteps)}
  </div>
</section>

<section class="section surface-graphite">
  <div class="shell">
    ${SectionHeading({
      eyebrow: 'INDUSTRIES',
      title: 'Built for sites that cannot afford avoidable disruption.',
      wide: true
    })}
    <div class="grid grid--3" data-reveal>
      ${industries.map((industry) => IndustryCard(industry)).join('\n      ')}
    </div>
  </div>
</section>

<section class="section surface-white">
  <div class="shell">
    <div class="split">
      <div data-reveal>
        <p class="eyebrow">SCHEDULED MAINTENANCE</p>
        <h2>Stay ahead of the next pump-out.</h2>
        <p>Recurring maintenance can help reduce last-minute service calls and make scheduling easier. TotalVac can build a service rhythm around the system, site access, and operating schedule.</p>
        <p style="margin-top:1.75rem"><a class="btn" href="/contact/?service=Scheduled%20Maintenance">Discuss Scheduled Service ${iconArrow()}</a></p>
      </div>
      <div class="spec-panel" data-reveal>
        <h3>How an interval gets set</h3>
        <p class="muted">Intervals are proposed after reviewing usage, capacity and what the site actually shows at service time. They are adjusted as conditions change.</p>
        ${scheduleMotif}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    ${PhotoPanel({
      eyebrow: 'ABOUT TOTALVAC',
      title: 'Built to make vacuum service easier.',
      body: [
        'TotalVac Solutions was created around a straightforward standard: arrive prepared, perform the work carefully, communicate clearly, and make it easy for the customer to book the next service.'
      ],
      photo: propertyPhoto,
      cta: { href: '/about/', label: 'About TotalVac' },
      mediaFirst: true
    })}
  </div>
</section>

<section class="section surface-ink">
  <div class="shell">
    ${SectionHeading({
      eyebrow: testimonialsApproved && testimonials.length ? 'WHAT CUSTOMERS SAY' : 'WHAT YOU CAN EXPECT',
      title: testimonialsApproved && testimonials.length
        ? 'In their words.'
        : 'Three things we commit to on every job.',
      lede: testimonialsApproved && testimonials.length
        ? null
        : 'Straight commitments about how the work runs, in place of claims we cannot yet back with a customer name.'
    })}
    ${Testimonials({ approved: testimonialsApproved, testimonials, commitments })}
  </div>
</section>

<section class="section surface-white">
  <div class="shell shell--narrow">
    ${SectionHeading({
      eyebrow: 'COMMON QUESTIONS',
      title: 'Answers before you book.'
    })}
    ${FAQAccordion(homeFaqs, 'home-faq')}
    <p style="margin-top:2rem"><a class="link-arrow" href="/faq/">Read the full FAQ ${iconArrow(14)}</a></p>
  </div>
</section>

${FinalCTA()}
`
  };
};

export default page;
