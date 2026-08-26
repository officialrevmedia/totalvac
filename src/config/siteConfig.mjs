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
  legalBusinessName: null, // TO CONFIRM: full legal entity name
  descriptor: 'Grease Trap • Catch Basin • Liquid Waste Services',
  brandPromise: 'Clean execution. Clear communication. Total response.',

  /* Contact */
  phone: null, // TO CONFIRM: primary phone, digits and formatting, example: '905 555 0134'
  phoneHref: null, // TO CONFIRM: tel link value, example: '+19055550134'
  email: null, // TO CONFIRM: service email, example: 'info@domain.ca'
  // Temporary GitHub Pages address while the permanent domain is chosen.
  // Replace with the real domain at launch, then set publicIndexing to true.
  domain: 'https://officialrevmedia.github.io/totalvac',
  temporaryDomain: true,

  /* Search engine indexing. Kept off while the site sits on a temporary address
     so the GitHub URL is never indexed and does not compete with the real
     domain later. Set to true on the day the permanent domain goes live. */
  publicIndexing: false,

  /* Location and coverage */
  baseCity: null, // TO CONFIRM: where the trailer is based
  serviceArea: 'Kitchener, Waterloo and the Greater Toronto Area',
  // Confirmed coverage. Add a city only when TotalVac genuinely services it.
  serviceAreaList: ['Kitchener', 'Waterloo', 'Greater Toronto Area'],
  // Compact form used inside page titles, where character count matters.
  serviceAreaShort: 'Kitchener Waterloo and the GTA',
  address: null, // TO CONFIRM: street address, or leave null for a service area business
  showPublicAddress: false, // keep false until the client confirms a public address
  hours: null, // TO CONFIRM: operating hours

  /* Availability */
  emergencyAvailable: false,
  emergencyLabel: 'Urgent service availability varies. Call to confirm.',

  /* Credentials: never display anything here until it is verified in writing */
  insured: false,
  insuranceStatement: null,
  licenses: [],
  certifications: [],

  /* Waste handling */
  acceptedWasteTypes: [], // TO CONFIRM: confirmed accepted materials
  prohibitedWasteTypes: [], // TO CONFIRM
  hazardousWasteAccepted: false,
  disposalStatement: null, // TO CONFIRM: verified disposal process and approved facilities

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
