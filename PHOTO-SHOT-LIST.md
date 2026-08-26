# Photo shot list

All nine photo slots are filled with imagery supplied by TotalVac. Eight are generated images rather than photographs of the real equipment, and one is a stock photograph whose licence still needs confirming. See IMAGE-CREDITS.md.

This list stays useful for one reason: it describes the photographs that should eventually replace them. Every shot below maps to a slot, so a real photo can be dropped in by name with no code change.

| Slot | Currently showing | Replace with |
| --- | --- | --- |
| `vacuum-trailer-hero` | Generated image | The real trailer in service. Highest priority |
| `equipment-detail` | Generated image | The real trailer, clean, at a job site |
| `property-context` | Generated image | A real commercial property TotalVac services |
| `crew-and-equipment` | Generated image | The real trailer or crew, photographed properly |
| `grease-trap-service` | Generated image | A real grease trap pump-out |
| `catch-basin-service` | Generated image | A real catch basin service visit |
| `site-dewatering` | Generated image | A real dewatering job |
| `tank-sump-pump-out` | Generated image | A real tank or sump pump-out |
| `liquid-waste-removal` | Stock photograph, licence unconfirmed | Either confirm the licence or shoot a replacement |

## How to place a real TotalVac photo

1. Export the image at the target width below, landscape orientation.
2. Save it over `assets/img/<slot>.jpg` and delete the matching `.webp` so a stale version is not served.
3. Record photographer, shoot date and publishing rights in IMAGE-CREDITS.md.
4. Run `npm run build` and check the page.

To regenerate WebP and AVIF versions, run `npm install sharp` once and then `npm run photos`.

---

## 1. vacuum-trailer-hero

- **Where** Home page hero, the first thing every visitor sees
- **Defined in** `src/templates/home.mjs`
- **Ratio** 16 by 11. **Target width** 1600px
- **Shot** Vacuum trailer and hose in operation at a clean commercial site. Correct PPE, wide framing, negative space on one side
- **Must show** Clean equipment, orderly site, a technician working safely
- **Must not show** Competitor branding, spills, grime as the first impression, unsafe practice, missing PPE
- **Note** Leave usable negative space on the left or the upper area. The frame is cropped to fill on desktop, so keep the subject away from the edges
- **Search phrases** commercial vacuum trailer service, vacuum truck hose industrial service, service technician vacuum hose PPE

## 2. equipment-detail

- **Where** Home page, The TotalVac Standard section
- **Defined in** `src/templates/home.mjs`
- **Ratio** 4 by 3. **Target width** 1200px
- **Shot** Detail of a hose coupling, valve or tank fitting on clean, well kept vacuum equipment
- **Must show** Real material texture: metal, gloves, couplings, controls
- **Must not show** Rust presented as neglect, dirty close-ups, hands without gloves near the work
- **Search phrases** vacuum hose coupling detail, industrial tank fitting close up, service equipment detail

## 3. property-context

- **Where** Home page, About teaser
- **Defined in** `src/templates/home.mjs`
- **Ratio** 4 by 3. **Target width** 1200px
- **Shot** Commercial property context: plaza loading area, restaurant service entrance or warehouse yard, clean and orderly
- **Must show** The kind of property TotalVac serves, with visible access to service points
- **Must not show** Identifiable business signage without permission, people who have not consented
- **Search phrases** commercial plaza loading area, restaurant service entrance, warehouse yard exterior

## 4. grease-trap-service

- **Where** Services overview and the Grease Trap Cleaning page
- **Defined in** `src/content/services.mjs`
- **Ratio** 4 by 3. **Target width** 1200px
- **Shot** Commercial grease interceptor being serviced by a technician in PPE
- **Must show** A real interceptor or trap access point, gloves, controlled work
- **Must not show** Shock imagery, heavy grease close-ups, an open trap presented for effect
- **Search phrases** grease trap pumping commercial kitchen, grease interceptor service, commercial kitchen drain service

## 5. catch-basin-service

- **Where** Services overview and the Catch Basin Cleaning page
- **Defined in** `src/content/services.mjs`
- **Ratio** 4 by 3. **Target width** 1200px
- **Shot** Vacuum hose lowered into a parking lot catch basin, technician in reflective PPE
- **Must show** Reflective clothing, a marked or controlled work zone, correct hose handling
- **Must not show** Work in live traffic without protection, a technician inside the basin
- **Search phrases** catch basin cleaning vacuum truck, storm drain catch basin maintenance, storm drain vacuum service

## 6. liquid-waste-removal

- **Where** Services overview and the Liquid Waste Removal page
- **Defined in** `src/content/services.mjs`
- **Ratio** 4 by 3. **Target width** 1200px
- **Shot** Controlled pump-out in progress: vacuum hose, coupling and tank at a clean industrial site
- **Must show** A contained, deliberate operation
- **Must not show** Liquid escaping the system, unlabelled drums, anything that reads as a spill
- **Search phrases** liquid waste pumping industrial, wastewater holding tank service, industrial vacuum pump out

## 7. tank-sump-pump-out

- **Where** Services overview and the Tank and Sump Pump-Outs page
- **Defined in** `src/content/services.mjs`
- **Ratio** 4 by 3. **Target width** 1200px
- **Shot** Vacuum hose entering a utility sump or holding tank access point, equipment clean and organised
- **Must show** Work performed from outside the system
- **Must not show** Anyone inside a pit, tank or confined space. TotalVac does not perform confined-space entry and no image may suggest otherwise
- **Search phrases** sump pump out service, utility sump vacuum, holding tank pump out

## 8. site-dewatering

- **Where** Services overview and the Site Dewatering page
- **Defined in** `src/content/services.mjs`
- **Ratio** 4 by 3. **Target width** 1200px
- **Shot** Standing water being vacuumed from an excavation or low point on an active worksite
- **Must show** Water movement, correct PPE, a stable and safe excavation edge
- **Must not show** An unsupported trench, a worker standing in deep water, an unsafe excavation
- **Search phrases** construction site dewatering, excavation water removal, vacuum water removal worksite

## 9. crew-and-equipment

- **Where** About page
- **Defined in** `src/templates/pages.mjs`
- **Ratio** 4 by 3. **Target width** 1200px
- **Shot** Service technician in reflective PPE working with clean, organised vacuum equipment at a commercial property
- **Must show** The standard the About page describes: prepared, tidy, professional
- **Must not show** Staged office imagery, call centre staff, stock photos of people smiling at a camera
- **Note** This is the strongest candidate for an original TotalVac photograph. Replace it before launch if possible
- **Search phrases** service technician vacuum hose PPE, commercial service technician equipment

---

## Shoot notes for original photography

If TotalVac photographs the trailer directly, one session covers most of the list.

- Shoot on an overcast day or in early light. Hard midday sun blows out white equipment
- Wash the trailer and coil the hoses before shooting
- Photograph the same setup wide, medium and close. The wide frame serves the hero, the close frame serves the detail slot
- Capture at least one frame with clear empty space on the left for hero copy
- Keep other companies' branding, licence plates and identifiable people out of frame unless permission is in writing
- Shoot in landscape orientation at the highest resolution the camera allows
- Correct PPE in every frame with a person: gloves, reflective clothing, safe footing
- One clean shot of the truck or trailer with TotalVac branding visible is worth having for the About page and social profiles
