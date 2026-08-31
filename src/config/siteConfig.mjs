/**
 * TotalVac Solutions: central site configuration.
 *
 * This is the ONLY file that should hold business facts.
 * Nothing in this file is invented. Values that have not been confirmed by the
 * client are set to null or false, and the site renders a neutral, honest
 * fallback instead of a made up number, city, claim or credential.
 *
 * Every null value below has a matching line in LAUNCH-CHECKLIST.md.
 */

export const siteConfig = {
  /* Identity */
  businessName: 'TotalVac Solutions',
  legalBusinessName: null, // TO CONFIRM: full legal entity name as registered
  descriptor: 'Grease Trap • Catch Basin • Liquid Waste Services',
  brandPromise: 'Clean execution. Clear communication. Total response.',

  /* Contact */
  phone: '(437) 908-2330',
  phoneHref: '+14379082330',
  email: 'totalvacsolutions@gmail.com',
  // The live domain. Canonical tags, the sitemap, social metadata and the
  // CNAME file written into the build all follow from this one value.
  domain: 'https://totalvacsolutions.com',
  temporaryDomain: false,

  /* Search engine indexing. Now live: every page is indexable and robots.txt
     allows crawling. Set back to false only if the site needs to be pulled
     from search results temporarily. */
  publicIndexing: true,

  /* Location and coverage */
  baseCity: 'Kitchener',
  serviceArea: 'Kitchener, Waterloo and the Greater Toronto Area',
  // Confirmed coverage. Add a city only when TotalVac genuinely services it.
  serviceAreaList: [
    'Kitchener',
    'Waterloo',
    'Cambridge',
    'Guelph',
    'Stratford',
    'Brantford',
    'Caledonia',
    'Hamilton',
    'Burlington',
    'Oakville',
    'Mississauga',
    'Toronto'
  ],
  // Compact form used inside page titles, where character count matters.
  serviceAreaShort: 'Kitchener Waterloo and the GTA',
  // Held for Google verification only. The client has asked that it stays
  // hidden from the public, so showPublicAddress must remain false.
  address: '15 David Bergey Drive, Kitchener, Ontario',
  showPublicAddress: false,
  hours: '7:00am to 9:00pm, seven days a week',

  /* Availability */
  emergencyAvailable: false,
  emergencyLabel: 'Open 7:00am to 9:00pm, seven days a week. Call to confirm urgent service.',

  /* Credentials: never display anything here until it is verified in writing */
  insured: true,
  insuranceStatement: 'Environmental insurance in place',
  // Confirmed by the client. Ask for the certificate and the permit document so
  // the permit number and full name can be shown, which reads far stronger.
  licenses: ['Valid ESAR permit'],
  certifications: [],

  /* Waste handling */
  acceptedWasteTypes: ['Fats, oils and grease (FOG)'], // TO CONFIRM: the rest of the accepted list
  prohibitedWasteTypes: [], // TO CONFIRM
  hazardousWasteAccepted: false,
  disposalStatement:
    'Collected fats, oils and grease are taken to the municipal wastewater treatment plant, where the material is processed and converted into energy for the region. Handling for any other accepted material is confirmed with the request.',

  /* Integrations */
  formEndpoint: null, // TO CONFIRM: form backend URL, example: Formspree, Basin, Netlify
  formSupportsFileUpload: false, // keep false until the backend securely supports uploads
  analyticsId: null, // TO CONFIRM: analytics id, only enable after consent approach is approved
  socialLinks: {}, // example: { facebook: 'https://...', instagram: 'https://...' }

  /* Optional services. These routes are not built, not linked and not indexed
     until the matching flag is set to true and the capability is confirmed. */
  optionalServices: {
    hydrovacExcavation: false,
    septicPumpOuts: false,
    emergencyResponse: false
  }
};

/* Display helpers. These keep unconfirmed facts off the page. */

export const hasPhone = () => Boolean(siteConfig.phone && siteConfig.phoneHref);
export const hasEmail = () => Boolean(siteConfig.email);
export const hasServiceArea = () => Boolean(siteConfig.serviceArea);

/** Text shown on a call action. Never prints a fake number. */
export const phoneLabel = () => (hasPhone() ? `Call ${siteConfig.phone}` : 'Call for service');

/** Destination for a call action. Falls back to the contact page. */
export const phoneHref = () => (hasPhone() ? `tel:${siteConfig.phoneHref}` : '/contact/');

/** Coverage wording used in body copy and headings. */
export const serviceAreaLabel = () => siteConfig.serviceArea || 'our local region';

/** Coverage wording used inside page titles. Returns null when unconfirmed. */
export const serviceAreaTitle = () => siteConfig.serviceAreaShort || siteConfig.serviceArea || null;

/** Availability line for the utility bar and footer. */
export const availabilityLabel = () =>
  siteConfig.hours || (siteConfig.emergencyAvailable ? 'Emergency service available' : siteConfig.emergencyLabel);

/** Absolute URL base. Used for canonical tags, sitemap and social metadata. */
export const siteUrl = () =>
  (siteConfig.domain || process.env.SITE_URL || 'https://REPLACE-WITH-CONFIRMED-DOMAIN.example').replace(/\/$/, '');

export const domainConfirmed = () => Boolean(siteConfig.domain || process.env.SITE_URL);

export default siteConfig;
