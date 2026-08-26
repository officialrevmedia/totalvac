# Launch checklist

Nothing on this list is guessed. Every item below is a fact the site needs from the client, or a test that has to pass before the site goes live.

Items marked OPEN are currently blocking a truthful launch. The build prints the open blockers on every run.

---

## 1. Business identity

- [ ] OPEN. Confirm the full legal business name, then set `legalBusinessName` in `src/config/siteConfig.mjs`
- [ ] Confirm the trade name shown publicly is TotalVac Solutions
- [ ] Confirm the descriptor line: Grease Trap, Catch Basin, Liquid Waste Services

## 2. Domain and email

- [ ] The site is currently on a temporary GitHub Pages address. Search indexing is switched off: every page is noindex and robots.txt disallows crawling
- [ ] OPEN. Confirm the permanent domain, then set `domain`, set `temporaryDomain` to false, and set `publicIndexing` to true. Canonical tags, the sitemap host and robots.txt all follow from this
- [ ] If the GitHub repository name changes, update the `BASE_PATH` repository variable to match, or remove it once a custom domain is attached
- [ ] Confirm the registrar holding the domain and who has access
- [ ] OPEN. Confirm the service email address, then set `email`
- [ ] Confirm any additional mailboxes required, for example dispatch or billing

## 3. Contact and availability

- [ ] OPEN. Confirm the primary phone number, then set both `phone` and `phoneHref`
- [ ] Test every phone link on a real mobile device once the number is live
- [ ] OPEN. Confirm hours of operation, then set `hours`
- [ ] OPEN. Confirm after hours and urgent availability. Only set `emergencyAvailable: true` if urgent service can genuinely be delivered. The emergency FAQ answer and the availability line change automatically
- [ ] Decide whether an emergency phone number differs from the main line

## 4. Location and coverage

- [ ] OPEN. Confirm the base city, then set `baseCity`
- [x] Service area confirmed as Kitchener, Waterloo and the Greater Toronto Area. Set in `serviceArea`, `serviceAreaShort` and `serviceAreaList`
- [ ] Confirm whether specific GTA municipalities should be listed individually for local search, for example Mississauga, Brampton or Vaughan, and whether Cambridge and Guelph are served
- [ ] Confirm the specific cities genuinely served, then set `serviceAreaList`. Only list places the business will actually travel to
- [ ] Decide whether a public street address is shown. If the trucks are based at a private location, leave `showPublicAddress: false`
- [ ] If a public address is confirmed, set `address` and `showPublicAddress: true`

## 5. Services offered

- [ ] Confirm each of the five built services is offered: grease trap cleaning, catch basin cleaning, liquid waste removal, tank and sump pump-outs, site dewatering
- [ ] Confirm scheduled maintenance is offered
- [ ] OPEN. Confirm whether hydrovac excavation is offered. The route stays unbuilt until `optionalServices.hydrovacExcavation` is true, and it must not be enabled unless equipment, operators, training and insurance are confirmed
- [ ] OPEN. Confirm whether septic tank pump-outs are offered, including residential
- [ ] Confirm whether any service listed is seasonal or limited by equipment

## 6. Waste handling and disposal

- [ ] OPEN. Confirm the accepted non-hazardous waste types, then set `acceptedWasteTypes`
- [ ] OPEN. Confirm prohibited materials, then set `prohibitedWasteTypes`
- [ ] OPEN. Confirm the disposal process and the approved receiving facilities, then set `disposalStatement`. Until this is set, the FAQ gives a cautious answer instead of a disposal claim
- [ ] Confirm hazardous waste is not accepted, or supply the licensing, transport process and disposal capability that would allow it. `hazardousWasteAccepted` stays false otherwise

## 7. Credentials

- [ ] OPEN. Confirm insurance coverage and the exact wording permitted, then set `insured` and `insuranceStatement`
- [ ] OPEN. Confirm licences and permits held, with numbers where they are published, then populate `licenses`
- [ ] Confirm certifications, then populate `certifications`
- [ ] Do not display any credential until a document has been supplied. No badge, seal or membership logo goes on the site without written permission from the issuing body

## 8. Form and delivery

- [ ] OPEN. Choose the form backend and set `formEndpoint`
- [ ] Send a real test submission and confirm it arrives at the service inbox
- [ ] Confirm the reply-to address on delivered submissions is usable
- [ ] Test a failed submission and confirm the error message appears and no false success is shown
- [ ] Decide whether photo uploads are wanted. Only set `formSupportsFileUpload: true` once the backend accepts files securely
- [ ] Confirm spam volume after one week and adjust protection if needed

## 9. Photography

- [x] All nine slots filled with client supplied imagery, recorded in IMAGE-CREDITS.md
- [ ] OPEN. Confirm the source and licence of the `liquid-waste-removal` image, or replace it. It should not appear on a public, indexed site until this is settled
- [ ] Eight of the nine images are generated rather than photographs of the real trailer. Plan a shoot of the actual equipment, crew and a live job. See PHOTO-SHOT-LIST.md
- [ ] Confirm the client is comfortable that the trailer shown is not the trailer a customer will see on site
- [ ] Run `npm install sharp` then `npm run photos` if AVIF versions are wanted
- [ ] Prioritise original TotalVac photographs of the trailer, equipment and real job sites
- [ ] Confirm the licence for any stock photograph used and record it in IMAGE-CREDITS.md
- [ ] Confirm no competitor branding, unsafe work practice or incorrect equipment appears in any image
- [ ] Confirm every image has factual alt text describing what is shown
- [ ] Export AVIF, WebP and JPEG at the sizes noted in README.md

## 10. Social proof

- [ ] Add testimonials only with written permission from the customer, and only real wording
- [ ] Add client logos only with written permission from the client
- [ ] Do not add review ratings, counters, years in business, job counts or fleet numbers unless each figure is verifiable
- [ ] If a Google Business Profile is created, keep name, phone and service area identical to this site

## 11. Legal and privacy

- [ ] Review the privacy page wording with the client. It is marked as a draft on the page itself
- [ ] Name the form processing provider on the privacy page once the endpoint is connected
- [ ] Confirm the retention period the business actually applies
- [ ] Remove the draft notice from the privacy page only after the client approves the content

## 12. Analytics

- [ ] Decide whether analytics are wanted
- [ ] Agree the consent approach before enabling anything
- [ ] Set `analyticsId` only after that approval
- [ ] Do not add session replay or advertising pixels without a separate decision

## 13. Metadata and search

- [ ] Confirm every page title and meta description reads well in a search result once the service area is set
- [ ] Confirm canonical tags resolve to the live domain
- [ ] Submit the sitemap in Google Search Console
- [ ] Confirm robots.txt points at the live sitemap URL
- [ ] Validate structured data with a testing tool. Confirm no unverified fact appears in it
- [ ] Confirm the optional service routes are absent from the sitemap while their flags are false
- [ ] Confirm the social preview image renders correctly when a link is pasted into a message

## 14. Functional QA

- [ ] Run `node build.mjs` and confirm it exits without failures
- [ ] Run `npm run check` and confirm the content scan passes
- [ ] Visit all fourteen routes and confirm none returns a broken link
- [ ] Test at 360, 430, 768, 1024 and 1440 pixel widths with no horizontal scrolling
- [ ] Confirm the sticky mobile action bar stays visible and does not cover page content
- [ ] Test every call to action, including service links, footer links and card links
- [ ] Confirm the 404 page appears for an unknown URL on the live host

## 15. Accessibility QA

- [ ] Navigate the whole site using only the keyboard, including the mobile menu and the accordions
- [ ] Confirm the skip link works and focus is visible everywhere
- [ ] Confirm form errors are announced and every control has a label
- [ ] Test with reduced motion enabled and confirm the site is fully usable
- [ ] Check colour contrast on the ink surfaces, the steel muted text and the blue actions
- [ ] Test with JavaScript disabled and confirm content is still readable

## 16. Performance

- [ ] Run a Lighthouse audit on the home page and one service page
- [ ] Confirm the hero image is preloaded and below-the-fold images are lazy loaded
- [ ] Confirm no layout shift from images or fonts
- [ ] Confirm no third party script has been added without a reason

## 17. Content rules

- [ ] Search the entire project for the em dash character, U+2014, and remove every instance. The build fails automatically if one reaches the output
- [ ] Confirm no curly brace placeholder token is visible anywhere on the site
- [ ] Confirm no AI feature, AI claim or AI generated photograph appears anywhere
- [ ] Confirm no fabricated statistic, award, badge, testimonial or client logo appears anywhere
- [ ] Read every page once more against the confirmed facts before going live
