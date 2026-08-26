# TotalVac Solutions website

Marketing website for TotalVac Solutions. Grease trap, catch basin and liquid waste vacuum services.

Built by revmedia. Static HTML output, no runtime framework, no database, no CMS.

---

## Quick start

```bash
npm run photos      # download the sourced photography into assets/img/
npm run build       # build the site into dist/
npm run dev         # build, then preview at http://localhost:8080
npm run preview     # build a copy with relative links that opens from the file system
npm run check       # scan the whole project for banned characters and tokens
```

Node 18 or newer. There are no dependencies to install. `npm install` is not required.

---

## Why static HTML

Every route is written to its own HTML file with a unique title, meta description, canonical tag and structured data. Search engines and social crawlers receive the full page on first request, and the output deploys to GitHub Pages, Netlify, Vercel or any static host without a server, a build service or a routing workaround.

If the project later needs a component framework, the content in `src/content/` and the configuration in `src/config/` port directly, because neither holds any markup that depends on the build script.

---

## Project structure

```
build.mjs                    Build script. Renders routes, copies assets, runs QA guards.
package.json                 Scripts only. No dependencies.
tools/serve.mjs              Local preview server for dist/.
tools/check-content.mjs      Project wide content rules check.

src/config/siteConfig.mjs    THE ONLY FILE THAT HOLDS BUSINESS FACTS.
src/content/services.mjs     Service copy: cards, detail pages, checklists, service FAQs.
src/content/site.mjs         Industries, values, process, full FAQ, about copy.

src/components/layout.mjs    SiteHeader, UtilityBar, MobileMenu, SiteFooter,
                             StickyMobileActions, Breadcrumbs, SkipLink.
src/components/blocks.mjs    Hero, PageHero, SectionHeading, ServiceCard, IndustryCard,
                             ProcessSteps, TrustStrip, PhotoPanel, FAQAccordion,
                             CheckList, TagList, Notice, FinalCTA.
src/components/form.mjs      QuoteForm.
src/components/media.mjs     Photo component, photo registry, placeholder artwork.
src/components/icons.mjs     Inline SVG icons and the flow ring motif.

src/templates/home.mjs       Home page.
src/templates/services.mjs   Services overview and the service detail template.
src/templates/pages.mjs      Industries, about, service area, FAQ, contact, privacy, 404.

assets/css/site.css          Design system and all component styles.
assets/js/site.js            Progressive enhancement: menu, accordion, reveals, form.
assets/fonts/                Self hosted Sora and Inter variable subsets.
assets/brand/                Web sized logo, favicons, social preview image.
brand-masters/               Full resolution logo artwork for print. Not copied into dist/.
assets/img/                  Real photography goes here. Placeholders are generated at build.

dist/                        Build output. Safe to delete and regenerate at any time.
```

---

## Editing content

### Business facts

Open `src/config/siteConfig.mjs`. Every value that has not been confirmed by the client is `null`, `false` or an empty array, and the site renders a neutral fallback rather than an invented fact. Filling a value in turns the real detail on across the whole site: header, utility bar, footer, contact page, structured data, sitemap and metadata.

Examples of what happens automatically when a value is supplied:

| Value | Effect when filled |
| --- | --- |
| `phone` and `phoneHref` | Call actions print the real number and become `tel:` links, instead of reading "Call for service" and linking to the contact page |
| `email` | Email appears in the footer, the contact panel and the form help text |
| `domain` | Canonical tags, Open Graph URLs and the sitemap switch to the real host |
| `serviceArea` | Coverage wording and page titles use the real area |
| `serviceAreaList` | The service area page prints a real city list and adds `areaServed` to structured data |
| `hours` | The utility bar and footer show hours instead of the availability note |
| `emergencyAvailable: true` | The emergency FAQ answer switches to the confirmed wording |
| `disposalStatement` | The disposal FAQ answer prints the verified process |
| `formEndpoint` | The form posts for real and can report a genuine success |
| `showPublicAddress: true` | The street address appears in the footer, contact page and schema |

Nothing else in the codebase should ever hold a business fact. If a fact needs to appear somewhere new, read it from this file.

### Page copy

Service copy lives in `src/content/services.mjs`, one object per service. Everything else lives in `src/content/site.mjs`. Editing those files updates every place the copy appears, including cards, detail pages and structured data.

### Adding an optional service later

Hydrovac excavation, septic pump-outs and emergency response are switched off in `siteConfig.optionalServices`. They are not built, not linked, not in the sitemap and not in navigation.

To enable one after the capability is confirmed in writing:

1. Set the flag to `true` in `src/config/siteConfig.mjs`.
2. Add a matching service object to `services` in `src/content/services.mjs`.
3. Run `node build.mjs`. The route, card, footer link and sitemap entry appear automatically.

Do not enable a flag before the client confirms equipment, operators, licensing, insurance and disposal for that service.

---

## Photography

Six of the nine photo slots are filled from Pexels. `npm run photos` downloads them into `assets/img/` at up to 4K wide, and the deploy workflow does the same on every build. The three remaining slots render a labelled placeholder naming the shot required.

The build detects files by name. If `assets/img/<slot>.jpg` exists, that photograph is used; otherwise the placeholder appears. Nothing in the code needs editing.

To place a real TotalVac photo:

1. Save it as `assets/img/<slot>.jpg`, using the slot name from `PHOTO-SHOT-LIST.md`.
2. If that slot currently uses a library stand-in, delete its entry from `src/content/photos.mjs` so the download does not overwrite the file.
3. Record photographer, shoot date and publishing rights in `IMAGE-CREDITS.md`.
4. Rebuild.

Run `npm install sharp` once and the photo tool also writes AVIF and WebP versions, which the component offers ahead of the JPEG. Suggested export widths: 2400px for the hero, 1600px for section images.

---

## Form delivery

The form posts to `siteConfig.formEndpoint`. Any endpoint that accepts a multipart POST and returns a 2xx status works, for example Formspree, Basin, Netlify Forms or a small serverless function.

Until an endpoint is set, the form validates normally and then reports plainly that the request was not sent. It never shows a success message for a submission that did not succeed.

File uploads stay hidden until `formSupportsFileUpload` is set to `true`, so photos are only requested once the backend can accept them securely.

---

## Analytics

`siteConfig.analyticsId` is the single integration point. Analytics are not loaded while it is `null`. Before enabling it, confirm the consent approach with the client and update the privacy page. Session replay and advertising pixels are not included and should not be added without a decision on record.

---

## Accessibility and motion

The site targets WCAG 2.2 AA. Semantic landmarks, one H1 per page, skip link, visible focus, labelled form controls with live error messaging, keyboard operable menu and accordions, and decorative SVGs hidden from assistive technology.

Filled buttons use Deep Blue rather than Electric Blue so white label text clears AA contrast at normal size, measured at 4.98 to 1. Electric Blue remains the accent for links, focus rings, active navigation states and detail on dark surfaces, where it measures 5.74 to 1 against Ink Black. Every colour pairing in the palette was measured, and the lowest passing value on the site is 4.51 to 1.

### Testimonials

`src/content/testimonials.mjs` holds the section. It renders only when `approved` is true and at least one entry exists. Until then the same slot shows three service commitments, which are promises about how the work runs rather than claims about past jobs. Add real quotes with permission, flip the flag, rebuild.

### Interaction and motion

| Feature | How it works | Without support |
| --- | --- | --- |
| Page transitions | Cross document view transitions, so navigating between pages cross fades instead of flashing white | Normal navigation |
| Scroll progress | A two pixel line under the header, driven by a CSS scroll timeline. No JavaScript | Line does not appear |
| Hero drift | The hero photograph moves a fraction as it scrolls, using a CSS view timeline | Static image |
| Section reveals | Intersection Observer adds a class, cards stagger by position, large images wipe rather than fade | Everything visible immediately |
| Card pointer light | A soft blue radial highlight follows the pointer across a card | No highlight |
| Image hover | Photographs scale by three percent over 700ms inside cards and split panels | Static image |
| Intro screen | Logo on black with a loading bar, once per browser session, cleared on load with a hard stop at 2.2 seconds | CSS clears it at 1.15 seconds with no JavaScript |
| Service marquee | A slow band of service names under the hero, paused on hover or focus | Static list |
| Statement band | Full width photograph with a slow parallax and the brand promise over it | Static image |
| Coverage map | Service area drawn as SVG, route and pins animate in, interactive map loads only on request | Static map, no third party request |

Nothing above blocks reading, shifts text or delays interaction. All of it is switched off under `prefers-reduced-motion`, and the site is fully usable with JavaScript disabled.

All motion respects `prefers-reduced-motion`. With motion reduced, transitions are disabled, the flow ring stops rotating and reveal animations resolve to their final state. With JavaScript disabled, accordion panels stay open and readable, all navigation works, and content is fully accessible.

---

## Search and performance

| Area | What is in place |
| --- | --- |
| Metadata | Unique title and meta description on all fourteen pages, canonical tags, Open Graph and Twitter cards, per service social images |
| Structured data | ProfessionalService with `areaServed` for twelve municipalities and an `OfferCatalog` of the five services, BreadcrumbList on interior pages, FAQPage where the questions are visible, Service schema on each detail page |
| Navigation | Visible breadcrumbs on every interior page, cross links between services, industries, FAQ and contact, service links in the footer |
| Local pages | One service area page with a drawn coverage map and a municipality grid, rather than a set of thin city pages that read as spam |
| Images | Four responsive widths per photograph in JPEG and WebP, explicit width and height, lazy loading below the fold, descriptive alt text |
| Crawling | sitemap.xml with lastmod and weighted priorities, robots.txt, .nojekyll, custom 404 marked noindex |

Indexing stays switched off while the site is on the temporary address. See the note at the end of START-HERE.md.

## Build guards

`node build.mjs` fails the build if either of these appears anywhere in the output:

- the em dash character, U+2014
- an unresolved configuration token, meaning a name wrapped in double curly braces

Every run also prints the launch blockers still open, which mirror `LAUNCH-CHECKLIST.md`.

`npm run check` runs the same scan across the source files, not just the output.

---

## Deployment

See `GITHUB-SETUP.md` for the full walkthrough. In short:

- Push this folder to GitHub and set Pages to build from GitHub Actions. `.github/workflows/deploy.yml` checks the content rules, builds and publishes on every push to `main`.
- Or run `npm run build:docs` and commit `docs/` if you prefer no automation.
- Or run `npm run build` and upload `dist/` to any static host.

`.nojekyll` is generated automatically so GitHub serves paths exactly as built.

Build options, all optional:

| Variable | Effect |
| --- | --- |
| `OUTDIR=docs` | Write the build somewhere other than `dist/` |
| `BASE_PATH=/repo-name` | Serve from a subfolder, for example a GitHub project page |
| `RELATIVE=1` | Rewrite links so the build opens directly from the file system |

---

## Before launch

Work through `LAUNCH-CHECKLIST.md` in full. It covers every unconfirmed fact, the form connection, photography, metadata and the final QA passes.
