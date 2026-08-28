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
  IndustryCard,
  CheckList,
  Notice,
  FAQAccordion,
  ProcessSteps,
  PhotoPanel,
  CoverageMap,
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
    'Vacuum services for restaurants, property management, retail, industrial facilities, construction sites and multi-site operations across Kitchener, Waterloo and the GTA.',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries/' }
  ],
  body: `
${PageHero({
  trail: [{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries/' }],
  eyebrow: 'INDUSTRIES',
  title: 'Commercial vacuum support across the places that keep communities moving.',
  lede: 'The equipment is the same. The planning is not. A restaurant, a condominium and an active construction site each bring their own access, timing and material considerations, and the service is coordinated around them.'
})}

<section class="section--tight surface-white">
  <div class="shell">
    <div class="grid grid--3" data-reveal>
      ${industries.map((industry) => IndustryCard(industry)).join('\n      ')}
    </div>
  </div>
</section>

${industries
  .map(
    (industry, i) => `
<section class="section${i % 2 === 1 ? ' surface-white' : ''}" id="${industry.id}">
  <div class="shell">
    <div class="split${i % 2 === 1 ? ' split--media-first' : ''}" style="align-items:start">
      <div data-reveal>
        <p class="eyebrow">0${i + 1}</p>
        <h2>${industry.title}</h2>
        <p class="lede">${industry.body}</p>
        ${industry.detail.map((para) => `<p>${para}</p>`).join('\n        ')}

        <h3 style="margin-top:2rem">Typical requests</h3>
        ${CheckList(industry.requests)}

        <p style="margin-top:2rem">
          <a class="link-arrow" href="/contact/">Request service for this site type ${iconArrow(14)}</a>
        </p>
      </div>
      <div data-reveal="media">
        ${Photo(
          {
            id: industry.photo,
            shot: industry.title,
            alt: industry.title,
            ratio: '4 / 3'
          },
          { className: 'media--framed', sizes: '(min-width: 900px) 45vw, 100vw' }
        )}
        <div class="spec-panel" style="margin-top:1.5rem">
          <h3>What we confirm first</h3>
          ${CheckList(industry.planning)}
        </div>
      </div>
    </div>
  </div>
</section>`
  )
  .join('\n')}

<section class="section surface-white">
  <div class="shell">
    ${SectionHeading({
      eyebrow: 'ACROSS EVERY SECTOR',
      title: 'The part that does not change.',
      lede: 'Whatever the site, the same four things decide whether a job can be booked and how smoothly it runs.'
    })}
    ${ProcessSteps([
      {
        title: 'What the material is',
        body: 'Acceptance is judged on the contents, not on the type of building. That review happens before a window is offered.'
      },
      {
        title: 'How the point is reached',
        body: 'Vehicle position, hose distance, lids, gates and traffic all get confirmed in advance rather than discovered on site.'
      },
      {
        title: 'When the work can happen',
        body: 'Trading hours, production windows, quiet hours and active trades set the window as much as the calendar does.'
      },
      {
        title: 'Where it goes afterward',
        body: 'The available disposal or discharge route is part of the scope, not an afterthought once the tank is full.'
      }
    ])}
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


/* -------------------------------------------------------------------- about */

export const aboutPage = () => ({
  route: '/about/',
  output: 'about/index.html',
  title: 'About TotalVac Solutions | Vacuum and Liquid Waste Services',
  description:
    'How TotalVac Solutions works: how a job is scoped, what the equipment suits, how sites are protected, and what is confirmed before a crew arrives.',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' }
  ],
  body: `
${PageHero({
  trail: [{ label: 'Home', href: '/' }, { label: 'About', href: '/about/' }],
  eyebrow: 'ABOUT',
  title: 'A better standard for vacuum service.',
  lede: 'TotalVac Solutions was built around a simple idea: vacuum service should be easy to book, professionally executed, and clearly communicated from the first call to the final check.'
})}

<section class="section">
  <div class="shell">
    <div class="split" style="align-items:start">
      <div data-reveal>
        <p>We support businesses, properties, and worksites with practical liquid waste removal and recurring maintenance built around the needs of the site. Whether the request involves a grease trap, catch basin, sump, holding tank, or another accepted non-hazardous liquid, the goal remains the same: arrive prepared, work carefully, leave the area orderly, and keep the customer informed.</p>
        <p>Most of what goes wrong in this trade goes wrong before anyone opens a lid. The material turns out to be something else. The hose will not reach. The gate code nobody mentioned is the reason the crew is standing in a parking lot at seven in the morning. So the work starts with questions rather than with a truck.</p>
        <p class="lede" style="margin-top:2rem">${siteConfig.brandPromise}</p>
      </div>
      <div data-reveal="media">
        ${Photo(
          {
            id: 'crew-and-equipment',
            shot: 'Vacuum equipment',
            alt: 'TotalVac vacuum equipment',
            ratio: '4 / 3'
          },
          { className: 'media--framed', sizes: '(min-width: 900px) 45vw, 100vw' }
        )}
      </div>
    </div>
  </div>
</section>

<section class="section surface-white">
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
    ${PhotoPanel({
      eyebrow: 'THE EQUIPMENT',
      title: 'A vacuum trailer setup, matched to the job.',
      body: [
        'TotalVac runs a vacuum trailer setup rather than a full size tanker fleet, and that shapes the work it suits. A trailer reaches places a large truck cannot: tight loading areas, low clearance parking structures, condominium service yards, and sites where a tanker would block the only lane in.',
        'It also sets honest limits. Volume, hose reach and access are checked against the request before anything is booked, so a job that genuinely needs larger equipment gets identified early rather than halfway through.',
        'Every request comes down to four practical questions: what the liquid is, how much of it there is, how the point is reached, and where the material can lawfully go.'
      ],
      photo: {
        id: 'equipment-detail',
        shot: 'Vacuum trailer',
        alt: 'TotalVac vacuum trailer',
        ratio: '16 / 11'
      },
      mediaFirst: true
    })}
  </div>
</section>

<section class="section">
  <div class="shell">
    ${SectionHeading({
      eyebrow: 'ON SITE',
      title: 'How the work is kept clean and safe.',
      lede: 'Vacuum work happens on properties that stay open while it is going on. The approach reflects that.'
    })}
    <div class="grid grid--3">
      <div class="card" data-reveal>
        <span class="card__index">01</span>
        <h3>The work zone is defined</h3>
        <p>Cones and equipment placement mark the area so staff, residents and customers can see where the work is and route around it.</p>
      </div>
      <div class="card" data-reveal>
        <span class="card__index">02</span>
        <h3>Service happens from outside</h3>
        <p>Tanks, sumps and pits are serviced from above using vacuum equipment. TotalVac does not perform confined-space entry.</p>
      </div>
      <div class="card" data-reveal>
        <span class="card__index">03</span>
        <h3>Material is reviewed first</h3>
        <p>If the contents are uncertain, the request is reviewed before a window is booked rather than assessed at the lid.</p>
      </div>
      <div class="card" data-reveal>
        <span class="card__index">04</span>
        <h3>Access is protected</h3>
        <p>Hose routing is planned to keep entrances, fire routes and traffic lanes usable for as much of the visit as possible.</p>
      </div>
      <div class="card" data-reveal>
        <span class="card__index">05</span>
        <h3>Lids go back properly</h3>
        <p>Grates, hatches and covers are reseated and checked before the crew leaves the area.</p>
      </div>
      <div class="card" data-reveal>
        <span class="card__index">06</span>
        <h3>Completion is confirmed</h3>
        <p>You are told the work is done and what was observed, rather than finding out at the next invoice.</p>
      </div>
    </div>
  </div>
</section>

<section class="section surface-graphite">
  <div class="shell">
    <div class="split" style="align-items:start">
      <div data-reveal>
        <p class="eyebrow">BEFORE ARRIVAL</p>
        <h2>What we can confirm before arrival</h2>
        <p class="lede">Most service problems come from surprises on site. These are the details we work through with you first, and they are the reason a visit usually takes one trip rather than two.</p>
        <p style="margin-top:1.5rem"><a class="btn" href="/contact/">Start a request ${iconArrow()}</a></p>
      </div>
      <div class="spec-panel" data-reveal style="background:var(--ink);border-color:var(--line-dark);color:var(--warm)">
        <h3 style="color:var(--warm)">Confirmed in advance</h3>
        ${CheckList(aboutConfirmList)}
        ${
          siteConfig.insured || siteConfig.licenses.length
            ? `<div style="margin-top:1.75rem;padding-top:1.5rem;border-top:1px solid var(--line-dark)">
          <h3 style="color:var(--warm)">Credentials</h3>
          ${CheckList(
            [siteConfig.insured && siteConfig.insuranceStatement ? siteConfig.insuranceStatement : null]
              .concat(siteConfig.licenses)
              .filter(Boolean)
          )}
        </div>`
            : ''
        }
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

<section class="section surface-white">
  <div class="shell">
    ${PhotoPanel({
      eyebrow: 'COVERAGE',
      title: `Serving ${serviceAreaLabel()}.`,
      body: [
        'TotalVac works with commercial, industrial, food-service, property and worksite locations across the region. Coverage for any given address depends on more than distance: access, material, volume and the available disposal route all factor in.',
        'Send the site address with a request and you will get a straight answer on whether it can be serviced and when.'
      ],
      photo: {
        id: 'property-context',
        shot: 'Commercial property service',
        alt: 'TotalVac vacuum trailer at a commercial property',
        ratio: '16 / 11'
      },
      cta: { href: '/service-area/', label: 'View service area' }
    })}
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
  trail: [{ label: 'Home', href: '/' }, { label: 'Service Area', href: '/service-area/' }],
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
    ${SectionHeading({
      eyebrow: 'COVERAGE MAP',
      title: 'The corridor TotalVac works.',
      lede: 'From Stratford in the west, through Kitchener, Waterloo, Cambridge and Guelph, south to Brantford, Caledonia and Hamilton, and east along the lake through Burlington, Oakville, Mississauga and Toronto.'
    })}
    ${CoverageMap({ query: 'Kitchener Waterloo Hamilton Toronto Ontario' })}
    <p class="field__hint" style="margin-top:1.25rem;max-width:60ch">Place names on this diagram show the corridor served. They are not a claim of completed work in each municipality, and service for any address depends on access, material, volume and disposal requirements.</p>
  </div>
</section>

<section class="section">
  <div class="shell">
    ${SectionHeading({
      eyebrow: 'MUNICIPALITIES',
      title: 'Where requests are accepted.',
      lede: 'Every location below sits inside the working corridor. Acceptance for a specific address still depends on the material, the access and the disposal route.'
    })}
    <ul class="area-grid" data-reveal>
      ${cities
        .map(
          (city) => `<li>
        <span class="area-grid__name">${city}</span>
        <span class="area-grid__meta">Grease trap, catch basin, tank and sump service</span>
      </li>`
        )
        .join('\n      ')}
    </ul>
  </div>
</section>

<section class="section surface-white">
  <div class="shell">
    ${SectionHeading({ eyebrow: 'SERVICES AVAILABLE', title: 'What can be requested in the coverage area.' })}
    <div class="grid grid--3" data-reveal>
      ${services.map((s, i) => ServiceCard(s, i, { withPhoto: true })).join('\n      ')}
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
  trail: [{ label: 'Home', href: '/' }, { label: 'FAQ', href: '/faq/' }],
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
  trail: [{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact/' }],
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
  trail: [{ label: 'Home', href: '/' }, { label: 'Privacy', href: '/privacy/' }],
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
