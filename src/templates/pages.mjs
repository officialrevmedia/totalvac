import {
  siteConfig,
  hasEmail,
  hasPhone,
  hasServiceArea,
  serviceAreaLabel,
  serviceAreaTitle,
  availabilityLabel,
  phoneLabel,
  phoneHref
} from '../config/siteConfig.mjs';
import { services, acceptanceNote } from '../content/services.mjs';
import { industries, faqs, aboutValues, aboutConfirmList, founderStory, processSteps } from '../content/site.mjs';
import {
  PageHero,
  SectionHeading,
  ServiceCard,
  CheckList,
  Notice,
  FAQAccordion,
  ProcessSteps,
  FinalCTA
} from '../components/blocks.mjs';
import { QuoteForm } from '../components/form.mjs';
import { Photo } from '../components/media.mjs';
import { iconArrow } from '../components/icons.mjs';

/* --------------------------------------------------------------- industries */

export const industriesPage = () => ({
  route: '/industries/',
  output: 'industries/index.html',
  title: 'Industries We Serve | TotalVac Solutions',
  description:
    'Vacuum services for restaurants, property management, retail, industrial facilities, construction sites and multi-site operations. Request service from TotalVac Solutions.',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries/' }
  ],
  body: `
${PageHero({
  eyebrow: 'INDUSTRIES',
  title: 'Commercial vacuum support across the places that keep communities moving.',
  lede: 'The equipment is the same. The planning is not. Each type of site brings its own access, timing and material considerations, and the service is coordinated around them.'
})}

${industries
  .map(
    (industry, i) => `
<section class="section${i % 2 === 1 ? ' surface-white' : ''}" id="${industry.id}">
  <div class="shell">
    <div class="split" style="align-items:start">
      <div data-reveal>
        <p class="eyebrow">0${i + 1}</p>
        <h2>${industry.title}</h2>
        <p class="lede">${industry.body}</p>
      </div>
      <div class="spec-panel" data-reveal>
        <h3>Typical requests</h3>
        ${CheckList(industryRequests[industry.id])}
        <p style="margin-top:1.5rem;margin-bottom:0">
          <a class="link-arrow" href="/contact/">Request service for this site type ${iconArrow(14)}</a>
        </p>
      </div>
    </div>
  </div>
</section>`
  )
  .join('\n')}

<section class="section--tight surface-white">
  <div class="shell shell--narrow">
    ${Notice(acceptanceNote)}
  </div>
</section>

${FinalCTA()}
`
});

const industryRequests = {
  'restaurants-and-food-service': [
    'Grease trap pump-outs on a set interval',
    'One-time service before an inspection or a busy period',
    'Coordination around delivery windows and service hours',
    'Multi-location scheduling under one point of contact'
  ],
  'property-management-and-condominiums': [
    'Catch basin cleaning across a property',
    'Sump and pit pump-outs in mechanical areas',
    'Recurring service for known problem points',
    'Documentation of what was serviced and when'
  ],
  'retail-and-hospitality': [
    'Drainage service planned outside customer hours',
    'Loading area and back of house pump-outs',
    'Coordination with building and property management',
    'Work windows that protect guest access'
  ],
  'industrial-and-manufacturing': [
    'Wash bay and process pit pump-outs',
    'Tank and interceptor content removal, where accepted',
    'Material review before the work is scheduled',
    'Coordination with site safety and check-in procedures'
  ],
  'construction-and-civil-sites': [
    'Standing water removed from excavations and low points',
    'Catch basin service during and after site work',
    'Pit and sump clearing where access is safe',
    'Scheduling around active trades on site'
  ],
  'institutional-and-multi-site-operations': [
    'A single request channel across several locations',
    'Recurring intervals set per site',
    'Kitchen, mechanical and exterior drainage service',
    'Clear confirmation when each visit is complete'
  ]
};

/* -------------------------------------------------------------------- about */

export const aboutPage = () => ({
  route: '/about/',
  output: 'about/index.html',
  title: 'About TotalVac Solutions | Vacuum and Liquid Waste Services',
  description:
    'TotalVac Solutions provides vacuum services and liquid waste removal built on preparation, professionalism and clear communication. Learn how the service works.',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' }
  ],
  body: `
${PageHero({
  eyebrow: 'ABOUT',
  title: 'A better standard for vacuum service.',
  lede: 'TotalVac Solutions was built around a simple idea: vacuum service should be easy to book, professionally executed, and clearly communicated from the first call to the final check.'
})}

<section class="section">
  <div class="shell">
    <div class="split" style="align-items:start">
      <div data-reveal>
        <p>We support businesses, properties, and worksites with practical liquid waste removal and recurring maintenance built around the needs of the site. Whether the request involves a grease trap, catch basin, sump, holding tank, or another accepted non-hazardous liquid, the goal remains the same: arrive prepared, work carefully, leave the area orderly, and keep the customer informed.</p>
        <p>${siteConfig.brandPromise}</p>
      </div>
      <div data-reveal="media">
        ${Photo(
          {
            id: 'crew-and-equipment',
            shot: 'Service technician in reflective PPE working with clean, organised vacuum equipment at a commercial property',
            alt: 'Service technician in reflective protective clothing handling vacuum equipment at a commercial property',
            ratio: '4 / 3'
          },
          { className: 'media--framed', sizes: '(min-width: 900px) 45vw, 100vw' }
        )}
      </div>
    </div>
  </div>
</section>

<section class="section surface-ink">
  <div class="shell">
    ${SectionHeading({ eyebrow: 'VALUES', title: 'Five things that shape every visit.' })}
    <ul class="value-list">
      ${aboutValues
        .map(
          (value) => `<li data-reveal>
        <h3>${value.title}</h3>
        <p>${value.body}</p>
      </li>`
        )
        .join('\n      ')}
    </ul>
  </div>
</section>

<section class="section surface-white">
  <div class="shell">
    <div class="split" style="align-items:start">
      <div data-reveal>
        <p class="eyebrow">BEFORE ARRIVAL</p>
        <h2>What we can confirm before arrival</h2>
        <p class="lede">Most service problems come from surprises on site. These are the details we work through with you first.</p>
      </div>
      <div class="spec-panel" data-reveal>
        ${CheckList(aboutConfirmList)}
      </div>
    </div>
  </div>
</section>

${
  founderStory.enabled
    ? `<section class="section">
  <div class="shell shell--narrow" data-reveal>
    <h2>${founderStory.heading}</h2>
    <p>${founderStory.body}</p>
  </div>
</section>`
    : '<!-- Founder story module is disabled until real information is supplied. See LAUNCH-CHECKLIST.md -->'
}

<section class="section">
  <div class="shell">
    ${SectionHeading({ eyebrow: 'HOW IT WORKS', title: 'Simple from request to removal.' })}
    ${ProcessSteps(processSteps)}
  </div>
</section>

${FinalCTA()}
`
});

/* ------------------------------------------------------------- service area */

export const serviceAreaPage = () => {
  const area = serviceAreaLabel();
  const cities = siteConfig.serviceAreaList || [];

  return {
    route: '/service-area/',
    output: 'service-area/index.html',
    title: serviceAreaTitle()
      ? `Vacuum and Liquid Waste Services in ${serviceAreaTitle()} | TotalVac Solutions`
      : 'Service Area | TotalVac Solutions',
    description:
      'Where TotalVac Solutions provides grease trap, catch basin, tank, sump and liquid waste vacuum services. Service availability is confirmed per request.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Service Area', href: '/service-area/' }
    ],
    body: `
${PageHero({
  eyebrow: 'SERVICE AREA',
  title: hasServiceArea() ? `Vacuum services across ${area}.` : 'Where TotalVac provides service.',
  lede: `TotalVac serves approved commercial, industrial, food-service, property, and worksite locations across ${area}. Service availability depends on location, material type, access, volume, scheduling, and disposal requirements.`
})}

<section class="section">
  <div class="shell">
    <div class="split" style="align-items:start">
      <div data-reveal>
        <h2>Coverage is confirmed with the request</h2>
        <p>Distance is only one part of a service decision. Access, material type, volume, equipment fit and the available disposal route all affect whether a job can be scheduled and when. Send the location with the request and you will get a straight answer.</p>
        ${
          cities.length
            ? `<h3 style="margin-top:2rem">Areas served</h3>${CheckList(cities)}`
            : `<div class="notice" style="margin-top:1.5rem"><p>The published city list is being confirmed. Send your site address with a service request and TotalVac will confirm coverage for that location.</p></div>`
        }
      </div>
      <div class="spec-panel" data-reveal>
        <h3>Send this with a location request</h3>
        ${CheckList([
          'Full site address, including unit or building reference',
          'Service type and the system involved',
          'Approximate volume and material description',
          'Access notes, including parking and hose distance',
          'Preferred service window and urgency'
        ])}
        <p style="margin-top:1.5rem;margin-bottom:0">
          <a class="link-arrow" href="/contact/">Check coverage for a site ${iconArrow(14)}</a>
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section surface-white">
  <div class="shell">
    ${SectionHeading({ eyebrow: 'SERVICES AVAILABLE', title: 'What can be requested in the coverage area.' })}
    <div class="grid grid--3" data-reveal>
      ${services.map((s, i) => ServiceCard(s, i)).join('\n      ')}
    </div>
  </div>
</section>

${FinalCTA()}
`
  };
};

/* ---------------------------------------------------------------------- FAQ */

export const faqPage = (resolvedFaqs) => ({
  route: '/faq/',
  output: 'faq/index.html',
  title: 'Frequently Asked Questions | TotalVac Solutions',
  description:
    'Answers about accepted liquid waste, recurring service, quoting information, site preparation and how TotalVac Solutions schedules vacuum work.',
  faqs: resolvedFaqs,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq/' }
  ],
  body: `
${PageHero({
  eyebrow: 'FAQ',
  title: 'Questions people ask before booking.',
  lede: 'Short, accurate answers about services, materials, scheduling and site preparation. If your question is not here, send it with your service request.'
})}

<section class="section">
  <div class="shell shell--narrow">
    ${FAQAccordion(resolvedFaqs, 'faq')}
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

/* ------------------------------------------------------------------ contact */

export const contactPage = () => ({
  route: '/contact/',
  output: 'contact/index.html',
  title: 'Request Service | TotalVac Solutions',
  description:
    'Tell TotalVac Solutions what needs to be removed. Send the service type, location, access details, approximate volume and urgency to request vacuum service.',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact/' }
  ],
  body: `
${PageHero({
  eyebrow: 'REQUEST SERVICE',
  title: 'Tell us what needs to be removed.',
  lede: 'Share the service type, location, access details, approximate volume, and urgency. Photos are helpful when available.',
  actions: false
})}

<section class="section">
  <div class="shell contact-layout">
    <div data-reveal>
      ${QuoteForm()}
    </div>

    <aside data-reveal>
      <div class="info-panel">
        <h3>Direct contact</h3>
        <dl>
          <div>
            <dt>Phone</dt>
            <dd><a href="${phoneHref()}">${hasPhone() ? siteConfig.phone : 'Call for service'}</a></dd>
          </div>
          ${
            hasEmail()
              ? `<div>
            <dt>Email</dt>
            <dd><a href="mailto:${siteConfig.email}">${siteConfig.email}</a></dd>
          </div>`
              : ''
          }
          <div>
            <dt>Availability</dt>
            <dd>${availabilityLabel()}</dd>
          </div>
          <div>
            <dt>Coverage</dt>
            <dd>${hasServiceArea() ? serviceAreaLabel() : 'Serving our local region. Send a site address to confirm.'}</dd>
          </div>
          ${
            siteConfig.showPublicAddress && siteConfig.address
              ? `<div><dt>Address</dt><dd>${siteConfig.address}</dd></div>`
              : ''
          }
        </dl>
      </div>

      <div class="spec-panel" style="margin-top:1.5rem">
        <h3>What speeds up a quote</h3>
        ${CheckList([
          'Site address and the exact service point',
          'What the liquid is and where it comes from',
          'Approximate volume',
          'Access notes and hose distance',
          'Preferred timing and how urgent it is',
          'Clear photos of the access point'
        ])}
      </div>

      <div style="margin-top:1.5rem">
        ${Notice(
          'If you suspect chemicals, fuels, solvents or contamination, say so in the request. Material acceptance is confirmed before any work is scheduled.'
        )}
      </div>
    </aside>
  </div>
</section>
`
});

/* ------------------------------------------------------------------ privacy */

export const privacyPage = () => ({
  route: '/privacy/',
  output: 'privacy/index.html',
  title: 'Privacy | TotalVac Solutions',
  description:
    'How TotalVac Solutions handles the information submitted through the service request form and this website.',
  noindex: false,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Privacy', href: '/privacy/' }
  ],
  body: `
${PageHero({
  eyebrow: 'PRIVACY',
  title: 'Privacy',
  lede: 'Plain language about what this website collects and how service request details are used.',
  actions: false
})}

<section class="section">
  <div class="shell shell--narrow prose" data-reveal>
    <div class="notice" style="margin-bottom:2.5rem">
      <p>This page is a working draft prepared for client review. It has not been reviewed by a lawyer and should be confirmed before launch.</p>
    </div>

    <h2>Information collected through this site</h2>
    <p>The service request form collects the details you enter: name, company or property name, phone, email, service address, service type, material description, approximate volume, access details, preferred date, urgency, and any message you add. This information is used to review, quote and schedule the service you requested, and to follow up about it.</p>

    <h2>Information not requested</h2>
    <p>Do not send payment card details, banking information, government identification numbers, or other sensitive personal information through this website. If a request appears to contain that information, it should be resubmitted without it.</p>

    <h2>How requests are handled</h2>
    <p>Service requests are sent to the business contact address configured for this website and are handled by the people responsible for scheduling work. Submitted details are not published on this website and are not sold.</p>

    <h2>Analytics</h2>
    <p>${
      siteConfig.analyticsId
        ? 'This website uses a privacy conscious analytics tool to understand which pages are viewed. It is used for website improvement only.'
        : 'Website analytics are not enabled at this time. If analytics are added later, this page will describe what is measured and why.'
    }</p>

    <h2>Cookies</h2>
    <p>This website does not set advertising cookies and does not use session replay. Any cookie added in future will be described here before it is enabled.</p>

    <h2>Third party services</h2>
    <p>Form delivery relies on a form processing service. That provider receives the contents of your request in order to deliver it. The provider name should be listed here once the form endpoint is connected.</p>

    <h2>Retention</h2>
    <p>Service request records are kept for as long as they are needed to quote, schedule, perform and support the work, and to meet business record keeping needs.</p>

    <h2>Questions and requests</h2>
    <p>To ask what information is held about you, or to request correction or deletion, contact the business using the details on the ${
      hasEmail() ? `<a href="mailto:${siteConfig.email}">contact address</a>` : '<a href="/contact/">contact page</a>'
    }.</p>

    <h2>Changes</h2>
    <p>This page will be updated when the practices described here change.</p>
  </div>
</section>
`
});

/* -------------------------------------------------------------------- 404 */

export const notFoundPage = () => ({
  route: '/404.html',
  output: '404.html',
  title: 'Page not found | TotalVac Solutions',
  description: 'The page you requested could not be found. Browse services or send a service request.',
  noindex: true,
  body: `
<section class="shell error-page">
  <p class="error-page__code">ERROR 404</p>
  <h1>That page is not here.</h1>
  <p class="lede">The link may be out of date, or the page may have moved. These are the most useful places to go next.</p>
  <div class="btn-row" style="margin-top:2rem">
    <a class="btn" href="/services/">View services ${iconArrow()}</a>
    <a class="btn btn--ghost" href="/contact/">Request service ${iconArrow()}</a>
    <a class="link-arrow" href="/">Back to home ${iconArrow(14)}</a>
  </div>
</section>

<section class="section--tight surface-white">
  <div class="shell">
    ${SectionHeading({ eyebrow: 'CORE SERVICES', title: 'Looking for one of these?' })}
    <div class="grid grid--3" data-reveal>
      ${services.map((s, i) => ServiceCard(s, i)).join('\n      ')}
    </div>
  </div>
</section>
`
});

export default {
  industriesPage,
  aboutPage,
  serviceAreaPage,
  faqPage,
  contactPage,
  privacyPage,
  notFoundPage
};
