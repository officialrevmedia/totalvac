/**
 * TotalVac Solutions static build.
 *
 * Renders every route to plain HTML, copies assets, generates image
 * placeholders, sitemap, robots and runtime config, then runs QA guards:
 *   - no U+2014 character anywhere in the output
 *   - no curly brace placeholder tokens visible in the output
 *   - optional services stay unbuilt and unlinked until confirmed
 *
 * Run: node build.mjs      Output: dist/
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { siteConfig, siteUrl, domainConfirmed, hasPhone, hasEmail } from './src/config/siteConfig.mjs';
import { services } from './src/content/services.mjs';
import { faqs } from './src/content/site.mjs';
import { SkipLink, SiteHeader, MobileMenu, StickyMobileActions, SiteFooter } from './src/components/layout.mjs';
import { photoRegistry, placeholderSvg } from './src/components/media.mjs';
import { page as homePage } from './src/templates/home.mjs';
import { overviewPage, detailPage } from './src/templates/services.mjs';
import {
  industriesPage,
  aboutPage,
  serviceAreaPage,
  faqPage,
  contactPage,
  privacyPage,
  notFoundPage
} from './src/templates/pages.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));

/* Output options, all optional.
   OUTDIR    write somewhere other than dist, for example docs for GitHub Pages
   BASE_PATH serve from a subfolder, for example /totalvac-solutions on a project page
   RELATIVE  rewrite links so the build opens directly from the file system  */
const outDirName = process.env.OUTDIR || 'dist';
const dist = path.join(root, outDirName);
const basePath = (process.env.BASE_PATH || '').replace(/\/$/, '');
const relativeMode = process.env.RELATIVE === '1';
const EM_DASH = String.fromCharCode(0x2014);

/** Depth of a route below the site root, used for relative link rewriting. */
const routeDepth = (route) => route.split('/').filter(Boolean).filter((s) => !s.includes('.')).length;

/**
 * Rewrites root relative paths for subfolder hosting or file system preview.
 * Absolute URLs, anchors, tel and mailto links are left untouched.
 */
const applyPathMode = (html, route) => {
  if (!basePath && !relativeMode) return html;
  const prefix = relativeMode ? '../'.repeat(routeDepth(route)) || './' : `${basePath}/`;

  const rewritePath = (rest) => {
    const split = rest.search(/[?#]/);
    let target = split === -1 ? rest : rest.slice(0, split);
    const suffix = split === -1 ? '' : rest.slice(split);
    if (relativeMode && (target === '' || target.endsWith('/'))) target += 'index.html';
    return `${prefix}${target}${suffix}`;
  };

  return html.replace(/(href|src|srcset|content)="([^"]*)"/g, (match, attr, value) => {
    if (attr === 'srcset') {
      /* A srcset can carry several candidates with width or density descriptors */
      const rewritten = value
        .split(',')
        .map((candidate) => {
          const parts = candidate.trim().split(/\s+/);
          if (parts[0].startsWith('/')) parts[0] = rewritePath(parts[0].slice(1));
          return parts.join(' ');
        })
        .join(', ');
      return `${attr}="${rewritten}"`;
    }

    if (!value.startsWith('/')) return match;
    if (attr === 'content' && !/^\/assets\//.test(value)) return match;
    return `${attr}="${rewritePath(value.slice(1))}"`;
  });
};

/* ------------------------------------------------------------------ helpers */

const write = (relative, contents) => {
  const target = path.join(dist, relative);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, contents);
};

const copyDir = (from, to) => {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else fs.copyFileSync(src, dest);
  }
};

/* --------------------------------------------------------- dynamic FAQ text */

const emergencyAnswer = siteConfig.emergencyAvailable
  ? 'Yes. Call the emergency service number and provide the location, material type, approximate volume, access conditions, and immediate site concerns.'
  : 'Urgent and after-hours availability varies. Call to confirm the earliest available service window.';

const disposalAnswer =
  siteConfig.disposalStatement ||
  'The disposal process is confirmed with each request. TotalVac will tell you how the collected material is handled for your specific job before the work is scheduled.';

const resolvedFaqs = faqs.map((item) => {
  if (item.dynamic === 'emergency') return { ...item, a: emergencyAnswer };
  if (item.dynamic === 'disposal') return { ...item, a: disposalAnswer };
  return item;
});

/* ---------------------------------------------------------------- structured data */

const organisationSchema = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl()}/#business`,
    name: siteConfig.legalBusinessName || siteConfig.businessName,
    description:
      'Vacuum services and non-hazardous liquid waste removal, including grease trap cleaning, catch basin cleaning, tank and sump pump-outs and site dewatering.',
    url: `${siteUrl()}/`,
    image: `${siteUrl()}/assets/brand/og-image.png`,
    logo: `${siteUrl()}/assets/brand/totalvac-logo-primary.png`
  };
  if (siteConfig.legalBusinessName && siteConfig.legalBusinessName !== siteConfig.businessName) {
    data.alternateName = siteConfig.businessName;
  }
  if (hasPhone()) data.telephone = siteConfig.phone;
  if (hasEmail()) data.email = siteConfig.email;
  if (siteConfig.showPublicAddress && siteConfig.address) {
    data.address = { '@type': 'PostalAddress', streetAddress: siteConfig.address };
  }
  if (siteConfig.serviceAreaList && siteConfig.serviceAreaList.length) {
    data.areaServed = siteConfig.serviceAreaList.map((name) => ({ '@type': 'Place', name }));
  } else if (siteConfig.serviceArea) {
    data.areaServed = { '@type': 'Place', name: siteConfig.serviceArea };
  }
  if (siteConfig.hours) data.openingHours = siteConfig.hours;

  /* What the business actually offers, so search engines can associate the
     services with the area rather than guessing from page copy. */
  data.hasOfferCatalog = {
    '@type': 'OfferCatalog',
    name: 'Vacuum and liquid waste services',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.cardSummary,
        url: `${siteUrl()}/services/${service.slug}/`
      }
    }))
  };
  data.knowsAbout = [
    'Grease trap cleaning',
    'Catch basin cleaning',
    'Liquid waste removal',
    'Tank and sump pump-outs',
    'Site dewatering'
  ];
  const links = Object.values(siteConfig.socialLinks || {});
  if (links.length) data.sameAs = links;
  return data;
};

const breadcrumbSchema = (trail) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.label,
    item: `${siteUrl()}${item.href}`
  }))
});

const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a }
  }))
});

const serviceSchema = (service, route) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  serviceType: service.name,
  url: `${siteUrl()}${route}`,
  provider: { '@id': `${siteUrl()}/#business` }
});

/* ------------------------------------------------------------------- layout */

const layout = (page) => {
  const canonical = domainConfirmed() ? `${siteUrl()}${page.route === '/404.html' ? '/' : page.route}` : null;
  const schemas = [organisationSchema()];
  if (page.breadcrumbs) schemas.push(breadcrumbSchema(page.breadcrumbs));
  if (page.faqs && page.faqs.length) schemas.push(faqSchema(page.faqs));
  if (page.serviceSchema) schemas.push(serviceSchema(page.serviceSchema, page.route));

  return `<!doctype html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
${
  page.noindex || !siteConfig.publicIndexing
    ? '<meta name="robots" content="noindex, follow">'
    : '<meta name="robots" content="index, follow">'
}
${canonical ? `<link rel="canonical" href="${canonical}">` : '<!-- Canonical URL is added once the domain is confirmed. See LAUNCH-CHECKLIST.md -->'}
<meta name="theme-color" content="#0B1015">

<meta property="og:type" content="website">
<meta property="og:site_name" content="${siteConfig.businessName}">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.description}">
${canonical ? `<meta property="og:url" content="${canonical}">` : ''}
<meta property="og:image" content="${siteUrl()}${page.ogImage || '/assets/brand/og-image.png'}">
${page.ogImage ? '' : '<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">'}
<meta property="og:image:alt" content="TotalVac Solutions. Grease trap, catch basin and liquid waste services.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${page.title}">
<meta name="twitter:description" content="${page.description}">
<meta name="twitter:image" content="${siteUrl()}${page.ogImage || '/assets/brand/og-image.png'}">

<link rel="icon" href="/assets/brand/favicon.ico" sizes="any">
<link rel="icon" href="/assets/brand/favicon-32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/assets/brand/favicon-192.png" sizes="192x192">
<link rel="apple-touch-icon" href="/assets/brand/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">

<link rel="preload" href="/assets/fonts/sora-variable-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/inter-variable-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/site.css">
<style>
  /* Inlined so the intro paints on the first frame, before the stylesheet
     arrives. It removes itself even if JavaScript never runs. */
  .preloader{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;
    background:#0B1015;animation:preloader-out .5s ease 1.15s forwards}
  .preloader__inner{display:grid;justify-items:center;gap:22px}
  .preloader__mark{width:84px;height:84px;opacity:0;animation:preloader-mark .7s cubic-bezier(.22,.61,.36,1) .05s forwards}
  .preloader__bar{display:block;width:132px;height:2px;background:rgba(174,185,194,.22);overflow:hidden}
  .preloader__fill{display:block;height:100%;width:100%;background:#2D8CFF;transform:scaleX(0);
    transform-origin:0 50%;animation:preloader-fill 1.1s cubic-bezier(.4,.1,.2,1) .1s forwards}
  @keyframes preloader-mark{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:none}}
  @keyframes preloader-fill{to{transform:scaleX(1)}}
  @keyframes preloader-out{to{opacity:0;visibility:hidden}}
  .preloader.is-done{opacity:0;visibility:hidden;transition:opacity .4s ease,visibility .4s}
  @media (prefers-reduced-motion:reduce){
    .preloader,.preloader__mark,.preloader__fill{animation:none}
    .preloader{display:none}
  }
</style>

<script>document.documentElement.classList.remove('no-js');</script>
${schemas
  .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
  .join('\n')}
</head>
<body>
<div class="preloader" id="preloader" aria-hidden="true">
  <div class="preloader__inner">
    <img class="preloader__mark" src="/assets/brand/totalvac-mark-white.png" alt="" width="256" height="256">
    <span class="preloader__bar"><span class="preloader__fill"></span></span>
  </div>
</div>
${SkipLink()}
${SiteHeader(page.route)}
${MobileMenu(page.route)}

<main id="main">
${page.body}
</main>

${SiteFooter()}
${StickyMobileActions()}

<script src="/assets/js/site-config.js"></script>
<script src="/assets/js/site.js" defer></script>
</body>
</html>
`;
};

/* -------------------------------------------------------------------- build */

console.log(`Building TotalVac Solutions into ${outDirName}/`);

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

const pages = [
  homePage(),
  overviewPage(),
  ...services.map((service) => detailPage(service)),
  industriesPage(),
  aboutPage(),
  serviceAreaPage(),
  faqPage(resolvedFaqs),
  contactPage(),
  privacyPage(),
  notFoundPage()
];

/* Optional services stay out of the build until the capability is confirmed. */
const optional = Object.entries(siteConfig.optionalServices).filter(([, enabled]) => enabled);
if (optional.length) {
  console.log('  Optional services enabled:', optional.map(([key]) => key).join(', '));
  console.log('  Add the matching content entry in src/content/services.mjs before shipping.');
}

pages.forEach((page) => {
  write(page.output, applyPathMode(layout(page), page.route));
  console.log(`  page  ${page.route}`);
});

/* Assets */
copyDir(path.join(root, 'assets'), path.join(dist, 'assets'));

/* Image placeholders for every registered photo slot without a real photo */
let placeholders = 0;
for (const photo of photoRegistry.values()) {
  if (photo.src) continue;
  write(`assets/img/placeholder-${photo.id}.svg`, placeholderSvg(photo));
  placeholders += 1;
}
console.log(`  ${placeholders} image placeholders generated`);

/* Runtime config: only values that are safe to expose publicly */
write(
  'assets/js/site-config.js',
  `window.TOTALVAC_CONFIG = ${JSON.stringify(
    {
      formEndpoint: siteConfig.formEndpoint,
      phone: siteConfig.phone,
      email: siteConfig.email,
      analyticsId: siteConfig.analyticsId
    },
    null,
    2
  )};\n`
);

/* Web manifest */
write(
  'site.webmanifest',
  JSON.stringify(
    {
      name: siteConfig.businessName,
      short_name: 'TotalVac',
      description: 'Grease trap, catch basin and liquid waste vacuum services.',
      start_url: '/',
      display: 'standalone',
      background_color: '#0B1015',
      theme_color: '#0B1015',
      icons: [
        { src: '/assets/brand/favicon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/assets/brand/favicon-512.png', sizes: '512x512', type: 'image/png' }
      ]
    },
    null,
    2
  )
);

/* Sitemap and robots */
const indexable = pages.filter((page) => !page.noindex);
const buildDate = new Date().toISOString().slice(0, 10);

write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable
  .map(
    (page) => `  <url>
    <loc>${siteUrl()}${page.route}</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.route === '/' ? '1.0' : page.route.startsWith('/services/') ? '0.8' : '0.6'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
);

write(
  'robots.txt',
  siteConfig.publicIndexing
    ? `User-agent: *
Allow: /

Sitemap: ${siteUrl()}/sitemap.xml
`
    : `# Indexing is switched off while the site is on a temporary address.
# Set publicIndexing to true in src/config/siteConfig.mjs at launch.
User-agent: *
Disallow: /
`
);

/* GitHub Pages: keep paths as authored, no Jekyll processing */
write('.nojekyll', '');

/* Custom domain. GitHub Pages reads this file on every deploy, so the domain
   never has to be re-entered in the repository settings. */
const host = siteUrl().replace(/^https?:\/\//, '');
if (host && !host.includes('github.io') && !host.includes('REPLACE-WITH')) {
  write('CNAME', `${host}\n`);
  console.log(`  CNAME written for ${host}`);
}

/* ---------------------------------------------------------------- QA guards */

const htmlFiles = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(html|xml|json|webmanifest|svg|css|js|txt)$/.test(entry.name)) htmlFiles.push(full);
  }
};
walk(dist);

let failures = 0;

for (const file of htmlFiles) {
  const text = fs.readFileSync(file, 'utf8');
  if (text.includes(EM_DASH)) {
    console.error(`  FAIL em dash found in ${path.relative(dist, file)}`);
    failures += 1;
  }
  if (/\{\{[A-Z_]+\}\}/.test(text)) {
    console.error(`  FAIL unresolved placeholder token in ${path.relative(dist, file)}`);
    failures += 1;
  }
}

const warnings = [];
if (!domainConfirmed()) warnings.push('domain is not confirmed, canonical tags are omitted and the sitemap uses a placeholder host');
if (siteConfig.temporaryDomain) warnings.push(`site is on a temporary address: ${siteUrl()}`);
if (!siteConfig.publicIndexing) warnings.push('search indexing is switched off, every page is noindex and robots.txt disallows crawling');
if (!hasPhone()) warnings.push('phone is not confirmed, call actions link to the contact page');
if (!hasEmail()) warnings.push('email is not confirmed');
if (!siteConfig.formEndpoint) warnings.push('form endpoint is not connected, the form reports an honest failure instead of a fake success');
if (!siteConfig.serviceArea) warnings.push('service area is not confirmed, neutral coverage wording is used');
if (!siteConfig.disposalStatement) warnings.push('disposal statement is not confirmed, the FAQ uses a cautious answer');

if (warnings.length) {
  console.log('\n  Launch blockers still open:');
  warnings.forEach((w) => console.log(`   - ${w}`));
  console.log('  See LAUNCH-CHECKLIST.md');
}

if (failures) {
  console.error(`\nBuild finished with ${failures} content rule failures.`);
  process.exit(1);
}

if (basePath) console.log(`  Base path applied: ${basePath}`);
if (relativeMode) console.log('  Relative link mode: this build opens directly from the file system');

console.log(`\nBuild complete. ${pages.length} pages written to ${outDirName}/`);
