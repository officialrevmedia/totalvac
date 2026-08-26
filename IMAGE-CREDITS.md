# Image credits

Every visual asset on this site is recorded here. No photograph is AI generated, and nothing is copied from a competitor website or hotlinked from a third party server.

---

## Photography

All nine photo slots are filled with imagery supplied by the client on 26 August 2026. The files are committed to the repository in `assets/img/` and are served from this site. Nothing is hotlinked.

Eight of the nine are **generated images**, not photographs of TotalVac's actual trailer, crew or job sites. They are in use at the client's direction. This is recorded here so the decision is traceable and so the images can be swapped for real photographs later without guesswork.

| Slot | Page | What it shows | Origin |
| --- | --- | --- | --- |
| `vacuum-trailer-hero` | Home hero | Technician with hose beside a branded trailer at a loading dock | Supplied, generated image |
| `equipment-detail` | Home, The TotalVac Standard | Branded trailer outside a commercial building | Supplied, generated image |
| `property-context` | Home, About teaser | Branded trailer at a restaurant service entrance in the evening | Supplied, generated image |
| `crew-and-equipment` | About | Branded trailer against a dark backdrop | Supplied, generated image |
| `grease-trap-service` | Grease Trap Cleaning | Hose lowered into a service access hatch, cones in place | Supplied, generated image |
| `catch-basin-service` | Catch Basin Cleaning | Catch basin service in a commercial parking lot | Supplied, generated image |
| `site-dewatering` | Site Dewatering | Standing water removed from an excavation | Supplied, generated image |
| `tank-sump-pump-out` | Tank and Sump Pump-Outs | Hose coupled to a stainless tank fitting indoors | Supplied, generated image |
| `liquid-waste-removal` | Liquid Waste Removal | Operator handling a vacuum hose beside a liquid waste tanker | Supplied photograph, **source and licence not yet confirmed** |

### Two items that need closing before the site is made public

1. **`liquid-waste-removal` licence.** This file appears to be a stock photograph. Confirm where it came from and that TotalVac holds a licence for commercial use, or replace it. Until that is settled it should not appear on a public, indexed site.
2. **Generated imagery.** The branded trailer shown is not TotalVac's actual equipment. Anyone who has seen the real trailer will notice the difference. Replacing these with photographs of the real trailer, crew and jobs is the single biggest credibility upgrade available to this site, and the shot list in PHOTO-SHOT-LIST.md is written to make that shoot straightforward.

Each file is committed at up to 2400 pixels wide as JPEG with a WebP alongside it. To replace one, save the new file over `assets/img/<slot>.jpg`, delete the matching `.webp`, and rebuild. Record the photographer, shoot date and publishing rights in the table below.

| File | Slot | Photographer | Shoot date | Rights confirmed | Notes |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

## Brand assets

All brand files were derived from the two logo files supplied by the client. No logo was redrawn or recreated.

| File | Source | How it was produced |
| --- | --- | --- |
| `assets/brand/totalvac-logo-primary.png` | Client supplied logo, TotalVac_Logo (2).png | White background removed, transparent margins trimmed. Colours unchanged. Served at 760 pixels wide |
| `assets/brand/totalvac-logo-white.png` | Same as above | Dark elements set to Warm White for use on ink surfaces. Blue retained. This is the header, mobile menu and footer logo, served at 760 pixels wide |
| `assets/brand/totalvac-mark.png` | Same as above | Square crop of the circular monogram, served at 256 pixels |
| `brand-masters/totalvac-logo-primary.png` | Same as above | Full resolution master, 1921 pixels wide |
| `brand-masters/totalvac-logo-white.png` | Same as above | Full resolution master |
| `brand-masters/totalvac-logo-black.png` | Same as above | Single colour Ink Black version for invoices and print |
| `brand-masters/totalvac-logo-mono-white.png` | Same as above | Single colour pure white version for dark photographic backgrounds |
| `brand-masters/totalvac-logo-descriptor-ink.png` | Client supplied logo, TotalVac_Logo (1).png | Transparent margins trimmed. Includes the service descriptor line |
| `brand-masters/totalvac-logo-descriptor-white.png` | Same as above | Light version of the descriptor lockup for dark surfaces |
| `brand-masters/totalvac-mark.png` | Client supplied logo, TotalVac_Logo (2).png | Full resolution monogram |
| `brand-masters/totalvac-mark-white.png` | Same as above | Light version of the monogram |
| `assets/brand/favicon-32.png` | Monogram | Monogram on an Ink Black rounded tile, 32 pixels |
| `assets/brand/favicon-192.png` | Monogram | Same treatment, 192 pixels |
| `assets/brand/favicon-512.png` | Monogram | Same treatment, 512 pixels |
| `assets/brand/apple-touch-icon.png` | Monogram | Same treatment, 180 pixels |
| `assets/brand/og-image.png` | Descriptor lockup | Social preview, 1200 by 630, Ink Black field with the flow ring motif and the light descriptor lockup |

Files in `brand-masters/` are print and archive resolution. They are not copied into the build output, so they add no weight to the live site. Use them for vehicle decals, invoices, business cards and any future artwork.

The client should confirm they hold the rights to the supplied logo files and that no third party designer retains ownership.

---

## Illustration and interface graphics

All non-photographic graphics are original SVG written for this project and stored in the source files. No third party icon set, illustration pack or texture is used.

| Asset | Where | Notes |
| --- | --- | --- |
| Flow ring motif | `src/components/icons.mjs` | Concentric arcs referencing the circular mark. Used in the hero, page heroes and the final call to action |
| Arrow, phone and close icons | `src/components/icons.mjs` | Original inline SVG |
| Schedule motif | `src/templates/home.mjs` | Abstract interval graphic on the maintenance section. Represents no specific customer data |
| Photo placeholders | Generated by `src/components/media.mjs` | Ink field, steel grid, flow ring and the text of the required shot. Temporary by design |

---

## Typefaces

| Family | Files | Licence | Source |
| --- | --- | --- | --- |
| Sora Variable | `assets/fonts/sora-variable-latin.woff2` | SIL Open Font License 1.1 | Fontsource package `@fontsource-variable/sora`, Latin subset, self hosted |
| Inter Variable | `assets/fonts/inter-variable-latin.woff2` | SIL Open Font License 1.1 | Fontsource package `@fontsource-variable/inter`, Latin subset, self hosted |

Both families are licensed for commercial use, including web embedding. Fonts are served from this site rather than a third party CDN, so no visitor request is sent to an external font host.
