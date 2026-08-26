/**
 * Photography manifest.
 *
 * Two kinds of entry:
 *
 *   suppliedPhotos  Files provided by the client. They live in assets/img/ and
 *                   are committed to the repository. Nothing is downloaded.
 *
 *   sourcedPhotos   Images located on a free library. The files are not
 *                   committed: "npm run photos" downloads them, and the deploy
 *                   workflow does the same on every build.
 *
 * A slot renders a real photograph whenever assets/img/<slot>.jpg exists, and a
 * labelled placeholder when it does not. No code change is needed to swap one
 * for the other: drop the file in, keep the name, rebuild.
 */

/* Provided by TotalVac on 26 August 2026.
   These are generated images rather than photographs of the real trailer. They
   are in use at the client's direction. See IMAGE-CREDITS.md and the note in
   LAUNCH-CHECKLIST.md about replacing them with photographs of the actual
   equipment once it can be shot. */
export const suppliedPhotos = {
  'vacuum-trailer-hero': {
    alt: 'TotalVac technician guiding a vacuum hose into a ground access point beside a branded TotalVac trailer at a loading dock',
    origin: 'Supplied by TotalVac',
    kind: 'Generated image'
  },
  'equipment-detail': {
    alt: 'TotalVac vacuum trailer with tank and hose reel parked outside a commercial building',
    origin: 'Supplied by TotalVac',
    kind: 'Generated image'
  },
  'property-context': {
    alt: 'TotalVac vacuum trailer connected to a service access point at a restaurant service entrance in the evening',
    origin: 'Supplied by TotalVac',
    kind: 'Generated image'
  },
  'crew-and-equipment': {
    alt: 'TotalVac vacuum trailer with tank, hose reel and pump shown against a dark backdrop',
    origin: 'Supplied by TotalVac',
    kind: 'Generated image'
  },
  'grease-trap-service': {
    alt: 'Technician lowering a vacuum hose into a service access hatch with safety cones set around the work area',
    origin: 'Supplied by TotalVac',
    kind: 'Generated image'
  },
  'catch-basin-service': {
    alt: 'Technician in high visibility clothing vacuuming a catch basin in a commercial parking lot with cones in place',
    origin: 'Supplied by TotalVac',
    kind: 'Generated image'
  },
  'site-dewatering': {
    alt: 'Technician removing standing water from an excavation on a construction site with a vacuum hose',
    origin: 'Supplied by TotalVac',
    kind: 'Generated image'
  },
  'tank-sump-pump-out': {
    alt: 'Technician coupling a vacuum hose to a stainless steel tank fitting inside a mechanical room',
    origin: 'Supplied by TotalVac',
    kind: 'Generated image'
  },
  'liquid-waste-removal': {
    alt: 'Operator in protective clothing handling a vacuum hose beside a liquid waste tanker',
    origin: 'Supplied by TotalVac',
    kind: 'Photograph, source and licence to be confirmed',
    note: 'Licence not yet verified. Confirm where this image came from, or replace it, before the site is made public. See LAUNCH-CHECKLIST.md'
  }
};

/**
 * Free library images. Pexels License: commercial use permitted, no attribution
 * required, no permission needed. https://www.pexels.com/license/
 * Attribution is recorded anyway so the source can always be traced.
 */
export const sourcedPhotos = {
  /* Every slot is currently filled by client supplied imagery, so nothing needs
     downloading. Kept in place for future use: add an entry here and
     "npm run photos" will pull the file into assets/img/ automatically.

     Example shape:
       'slot-name': {
         alt: 'Accurate description of the image',
         credit: 'Photographer name',
         page: 'https://www.pexels.com/photo/.../',
         download: 'https://images.pexels.com/photos/.../file.jpeg?cs=srgb&fm=jpg',
         source: 'Pexels',
         license: 'Pexels License'
       }                                                                      */
};

/** Everything the Photo component needs, keyed by slot. */
export const photoMeta = { ...sourcedPhotos, ...suppliedPhotos };

export default photoMeta;
