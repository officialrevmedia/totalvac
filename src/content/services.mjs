/**
 * Service content. One entry drives the service card, the services overview
 * section and the full service detail page.
 *
 * Copy rule for this file: describe the service and the process. Never state a
 * track record, a certification, a disposal claim or a response time.
 */

export const services = [
  {
    slug: 'grease-trap-cleaning',
    nav: 'Grease Trap Cleaning',
    title: 'Grease Trap Cleaning',
    eyebrow: 'GREASE TRAP SERVICE',
    h1: 'Grease trap service that keeps kitchens moving.',
    cardSummary:
      'Scheduled and one-time grease trap pump-outs for restaurants, commercial kitchens, food facilities, and multi-location operators.',
    metaTitle: 'Grease Trap Cleaning',
    metaDescription:
      'Scheduled and one-time grease trap cleaning and pump-outs for restaurants, commercial kitchens and food facilities. Request service from TotalVac Solutions.',
    intro:
      'Grease traps collect fats, oils, grease, water, and food solids before they reach the drainage system. Routine pump-outs help reduce odours, slow drainage, backups, and avoidable disruption in busy food-service environments.',
    photo: {
      id: 'grease-trap-service',
      shot: 'Commercial grease interceptor being serviced by a technician in PPE',
      alt: 'Technician in protective gloves servicing a commercial grease interceptor at a kitchen loading area',
      ratio: '4 / 3'
    },
    whoFor:
      'Food-service operators who need a predictable trap service without disrupting prep, service hours or deliveries.',
    signs: [
      'Slow drainage at kitchen sinks or floor drains',
      'Odours near the trap, drain lines or loading area',
      'Visible grease accumulation at the trap lid or inspection point',
      'The last recorded pump-out was longer ago than the site interval',
      'A property or municipal requirement calls for documented service'
    ],
    benefits: [
      'Remove accumulated FOG and solids',
      'Reduce odours and overflow risk',
      'Support a cleaner service environment',
      'Make maintenance easier to plan',
      'Identify visible access or condition concerns during service'
    ],
    applications: [
      'Restaurants',
      'Cafes and bakeries',
      'Food courts',
      'Hotels and banquet facilities',
      'Commercial commissaries',
      'Institutional kitchens'
    ],
    provide: [
      'Trap location and access point',
      'Approximate trap size or capacity, if known',
      'Preferred service window',
      'Date of the last pump-out, if known',
      'Anything unusual in the trap contents'
    ],
    expect:
      'A confirmed service window, a pump-out of the accepted trap contents, a visual check of the access point, and confirmation once the work is complete.',
    process: [
      {
        title: 'Share the trap details',
        body: 'Send the site address, trap location, approximate size, access route, and preferred timing.'
      },
      {
        title: 'Confirm the scope',
        body: 'TotalVac reviews the contents, access and equipment fit, then confirms whether the material is accepted and coordinates a service window.'
      },
      {
        title: 'Complete the pump-out',
        body: 'The crew arrives prepared, performs the approved pump-out, and checks the surrounding work area before leaving.'
      },
      {
        title: 'Set the next interval',
        body: 'For recurring needs, we can discuss a practical service rhythm based on kitchen volume and observed accumulation.'
      }
    ],
    prep: [
      'Confirm the trap location and access point',
      'Provide approximate size or capacity if known',
      'Clear the immediate work area',
      'Share preferred service timing',
      'Identify any access codes, loading restrictions, or property rules',
      'Tell TotalVac about unusual contents, chemicals, or contamination before booking'
    ],
    faqs: [
      {
        q: 'How often should a grease trap be serviced?',
        a: 'Frequency depends on trap size, kitchen volume, operating conditions, observed accumulation, and local requirements. TotalVac can discuss a practical recurring schedule after reviewing the site and service history.'
      },
      {
        q: 'Can service happen outside of kitchen hours?',
        a: 'Timing is coordinated case by case. Share your preferred window and any building or property restrictions with the request, and TotalVac will confirm what is available.'
      },
      {
        q: 'What do you need before the first visit?',
        a: 'The trap location, approximate capacity if known, the access route for the hose, the preferred service window, and any information about unusual contents.'
      }
    ],
    related: ['liquid-waste-removal', 'tank-and-sump-pump-outs', 'catch-basin-cleaning']
  },

  {
    slug: 'catch-basin-cleaning',
    nav: 'Catch Basin Cleaning',
    title: 'Catch Basin Cleaning',
    eyebrow: 'CATCH BASIN SERVICE',
    h1: 'Clear catch basins. Better site drainage.',
    cardSummary:
      'Removal of accumulated water, sediment, and debris from catch basins and stormwater collection points, subject to site and waste assessment.',
    metaTitle: 'Catch Basin Cleaning',
    metaDescription:
      'Catch basin cleaning and pump-outs for plazas, parking lots, condominiums and industrial yards. Request service from TotalVac Solutions.',
    intro:
      'Catch basins collect water, sediment, leaves, and debris from paved areas and stormwater systems. Periodic cleaning helps preserve capacity and reduces the chance that accumulated material contributes to slow drainage, odours, or pooling.',
    photo: {
      id: 'catch-basin-service',
      shot: 'Vacuum hose lowered into a parking lot catch basin, technician in reflective PPE',
      alt: 'Vacuum hose lowered into a catch basin in a commercial parking lot while a technician in reflective clothing directs the work',
      ratio: '4 / 3'
    },
    whoFor:
      'Property managers, plaza owners and site supervisors responsible for drainage performance across paved areas.',
    signs: [
      'Water pooling around the basin grate after rainfall',
      'Sediment, gravel or leaves visible at the grate',
      'Odours near drainage points',
      'Drainage that clears noticeably slower than it used to',
      'A seasonal or property maintenance interval is due'
    ],
    benefits: [
      'Remove standing water, sediment and debris from the basin',
      'Help preserve the designed capacity of the basin',
      'Reduce material that can contribute to pooling and odours',
      'Create a record of when each basin was last serviced',
      'Flag visible condition concerns observed during service'
    ],
    applications: [
      'Commercial plazas',
      'Parking lots',
      'Condominiums',
      'Warehouses',
      'Industrial yards',
      'Construction sites',
      'Institutional properties'
    ],
    provide: [
      'Number of basins requiring service',
      'Site address and where each basin sits on the property',
      'Known access restrictions or traffic considerations',
      'Any recent spills or unusual material',
      'Approximate basin depth, if known'
    ],
    expect:
      'A reviewed scope, a coordinated service window, removal of accepted material from each identified basin, and confirmation when the work is complete.',
    process: [
      {
        title: 'Identify the basins',
        body: 'Send the site address, the number of basins, their locations, and photos where that is easier than describing them.'
      },
      {
        title: 'Confirm access and material',
        body: 'TotalVac reviews vehicle access, hose reach, traffic conditions and the expected material before scheduling.'
      },
      {
        title: 'Service the basins',
        body: 'Accepted water, sediment and debris are removed, grates are replaced, and the work area is left orderly.'
      },
      {
        title: 'Plan the interval',
        body: 'Seasonal or recurring basin service can be discussed based on sediment load, traffic and drainage performance.'
      }
    ],
    prep: [
      'Mark the catch basins requiring service',
      'Keep vehicles and stored materials clear',
      'Share known access restrictions',
      'Identify recent spills or unusual material',
      'Provide approximate basin depth if known'
    ],
    faqs: [
      {
        q: 'How often should catch basins be cleaned?',
        a: 'Frequency depends on sediment, debris, traffic, surrounding landscaping, drainage performance, and property maintenance requirements. Periodic inspection can help determine when service is needed.'
      },
      {
        q: 'Can several basins be serviced in one visit?',
        a: 'Yes. Share the number of basins and their locations with the request so the visit can be scoped and scheduled accurately.'
      },
      {
        q: 'Do you repair the basin or the connected lines?',
        a: 'No. This service covers vacuum removal of accepted material. If a condition concern is visible during service, TotalVac will tell you what was observed so you can arrange the right trade.'
      }
    ],
    related: ['site-dewatering', 'liquid-waste-removal', 'grease-trap-cleaning']
  },

  {
    slug: 'liquid-waste-removal',
    nav: 'Liquid Waste Removal',
    title: 'Liquid Waste Removal',
    eyebrow: 'LIQUID WASTE',
    h1: 'Professional removal for approved liquid waste.',
    cardSummary:
      'Professional removal of approved non-hazardous liquid waste from commercial, industrial, and property environments.',
    metaTitle: 'Liquid Waste Removal',
    metaDescription:
      'Vacuum removal of approved non-hazardous liquid waste for commercial, industrial and property sites. Request service from TotalVac Solutions.',
    intro:
      'TotalVac provides vacuum removal for accepted non-hazardous liquid waste from accessible commercial, industrial, property, and worksite locations. Every request is reviewed for material type, volume, access, equipment fit, and disposal requirements before scheduling.',
    photo: {
      id: 'liquid-waste-removal',
      shot: 'Controlled pump-out in progress: vacuum hose, coupling and tank at a clean industrial site',
      alt: 'Vacuum hose and coupling connected to a tank during a controlled liquid waste pump-out at an industrial site',
      ratio: '4 / 3'
    },
    whoFor:
      'Facility, property and site teams that have accumulated liquid to remove and need the material reviewed before anything is scheduled.',
    signs: [
      'A tank, pit or containment area is at or near capacity',
      'Wash water or process water has collected and cannot drain',
      'A liquid needs to leave the site before the next operating day',
      'A cleanout is planned and the contents need to be removed first',
      'You are not certain what the liquid is and need it reviewed'
    ],
    benefits: [
      'A material review before the job is booked, not after arrival',
      'Vacuum removal sized to the access and the volume',
      'Clear notice when a material cannot be accepted',
      'Controlled handling that protects the surrounding area',
      'One point of contact from request to completion'
    ],
    applications: [
      'Process water',
      'Wash water',
      'Standing water',
      'Tank contents',
      'Sump contents',
      'Non-hazardous wastewater',
      'Interceptor contents'
    ],
    applicationsNote: 'Applications listed above apply only when the material is accepted for service.',
    notice:
      'Not sure what the liquid contains? Do not guess. Share the available material information or safety documentation before booking.',
    provide: [
      'Source of the liquid and known contents',
      'Approximate volume',
      'Access point and hose distance, if known',
      'Any safety data sheets or material documentation available',
      'Preferred timing and urgency'
    ],
    expect:
      'A review of the material and access details, written confirmation of whether the request is accepted, a coordinated service window, and confirmation once removal is complete.',
    process: [
      {
        title: 'Describe the material',
        body: 'Share the source of the liquid, known contents, approximate volume, and any available safety documentation.'
      },
      {
        title: 'Acceptance review',
        body: 'TotalVac reviews the material, access, equipment fit and handling requirements, and confirms whether the request can be accepted.'
      },
      {
        title: 'Controlled removal',
        body: 'The crew sets up at the approved access point, removes the accepted material, and checks the area before leaving.'
      },
      {
        title: 'Close out the request',
        body: 'Completion is confirmed with you, and recurring removal can be discussed where the need repeats.'
      }
    ],
    prep: [
      'Confirm the access point and the route for the hose',
      'Keep vehicles and stored items clear of the work area',
      'Have material information or safety documentation ready',
      'Identify any site rules, permits or check-in requirements',
      'Notify the staff or property representative responsible for the area'
    ],
    faqs: [
      {
        q: 'What types of liquid waste do you accept?',
        a: 'Acceptance is confirmed case by case. Provide the known contents, approximate volume, source of the liquid, and any available safety or material information. TotalVac does not assume a liquid is non-hazardous based on appearance alone.'
      },
      {
        q: 'Do you handle hazardous waste?',
        a: 'Hazardous waste service is not offered unless TotalVac confirms the material can be lawfully transported and handled through the appropriate process. Tell us about any suspected chemicals, oils, fuels, solvents, or contamination before booking.'
      },
      {
        q: 'What if the material cannot be accepted?',
        a: 'You will be told before anything is scheduled, so you can arrange the correct service without losing a service window.'
      }
    ],
    related: ['tank-and-sump-pump-outs', 'site-dewatering', 'grease-trap-cleaning']
  },

  {
    slug: 'tank-and-sump-pump-outs',
    nav: 'Tank and Sump Pump-Outs',
    title: 'Tank and Sump Pump-Outs',
    eyebrow: 'TANKS, SUMPS AND PITS',
    h1: 'Pump-outs for tanks, sumps, pits, and interceptors.',
    cardSummary:
      'Vacuum pump-outs for holding tanks, sumps, pits, interceptors, and similar accessible systems where the contents are accepted for service.',
    metaTitle: 'Tank and Sump Pump-Outs',
    metaDescription:
      'Vacuum pump-outs for holding tanks, sumps, pits and interceptors where contents are accepted and access is safe. Request service from TotalVac Solutions.',
    intro:
      'When liquid and sediment accumulate in an accessible tank, sump, pit, or interceptor, TotalVac can review the contents, access conditions, and service requirements for a controlled vacuum pump-out.',
    photo: {
      id: 'tank-sump-pump-out',
      shot: 'Vacuum hose entering a utility sump or holding tank access point, equipment clean and organized',
      alt: 'Vacuum hose positioned at the access point of a utility sump during a scheduled pump-out',
      ratio: '4 / 3'
    },
    whoFor:
      'Facility and maintenance teams with accessible systems that fill over time and need controlled removal rather than improvised pumping.',
    signs: [
      'A high level alarm or float has activated',
      'Sediment has reduced the working volume of the sump or tank',
      'A planned cleanout or inspection requires the contents removed first',
      'Odours or overflow at the access point',
      'A recurring interval has passed since the last pump-out'
    ],
    benefits: [
      'Controlled removal of accepted contents from accessible systems',
      'Access, hose reach and equipment fit reviewed before arrival',
      'Work planned to protect the surrounding area',
      'Clear communication about what can and cannot be serviced',
      'Recurring intervals available where the need repeats'
    ],
    applications: [
      'Holding tanks',
      'Utility sumps',
      'Elevator pits, only if approved and safely accessible',
      'Wash bays',
      'Oil-water separators, only if contents are accepted',
      'Process pits',
      'Trench drains'
    ],
    notice:
      'Service is performed from outside the system. TotalVac does not perform confined-space entry.',
    provide: [
      'System type and approximate capacity',
      'Contents and how the system is used',
      'Access point location and hose distance, if known',
      'Lid, grate or hatch type and whether it is already open',
      'Preferred service window'
    ],
    expect:
      'A review of contents and access, a confirmed service window, vacuum removal of the accepted contents from outside the system, and confirmation when the work is complete.',
    process: [
      {
        title: 'Describe the system',
        body: 'Share the type of tank, sump, pit or interceptor, its approximate capacity, contents, and where it is located.'
      },
      {
        title: 'Review access',
        body: 'TotalVac checks hose distance, vehicle positioning, lid or hatch access and whether the contents are accepted.'
      },
      {
        title: 'Perform the pump-out',
        body: 'The accepted contents are removed from outside the system and the access point is left secure and orderly.'
      },
      {
        title: 'Schedule the next one',
        body: 'Where accumulation is predictable, a recurring interval can be planned around site usage.'
      }
    ],
    prep: [
      'Confirm the system type, capacity and location',
      'Clear parking and hose routing to the access point',
      'Identify lid, grate or hatch conditions in advance',
      'Share known contents and any contamination history',
      'Arrange site check-in, keys or access codes if required'
    ],
    faqs: [
      {
        q: 'Do you enter the tank, pit or sump?',
        a: 'No. Service is performed from outside the system using vacuum equipment. Work that requires entry is outside the scope of this service.'
      },
      {
        q: 'Can you service an oil-water separator?',
        a: 'Only when the contents are reviewed and accepted. Share what the separator collects and any material documentation you have before booking.'
      },
      {
        q: 'What if the system is fuller than expected?',
        a: 'Tell us the approximate volume when you request service. If the volume on site differs, the crew will confirm the practical scope with you before continuing.'
      }
    ],
    related: ['liquid-waste-removal', 'site-dewatering', 'catch-basin-cleaning']
  },

  {
    slug: 'site-dewatering',
    nav: 'Site Dewatering',
    title: 'Site Dewatering',
    eyebrow: 'SITE DEWATERING',
    h1: 'Standing water removed so work can continue.',
    cardSummary:
      'Removal of standing water from accessible work areas, pits, and low points where safe access and approved discharge or disposal are available.',
    metaTitle: 'Site Dewatering',
    metaDescription:
      'Vacuum removal of standing water from accessible work areas, pits and low points where access is safe and handling is approved. Request service from TotalVac Solutions.',
    intro:
      'TotalVac supports approved dewatering needs where standing water can be safely reached by vacuum hose and handled through an accepted discharge or disposal route. Each request is reviewed for water quality, volume, access and handling requirements before it is scheduled.',
    photo: {
      id: 'site-dewatering',
      shot: 'Standing water being vacuumed from an excavation or low point on an active worksite',
      alt: 'Vacuum hose removing standing water from an excavation on an active construction site',
      ratio: '4 / 3'
    },
    whoFor:
      'Site supervisors, trades and facility teams who need water cleared from a work area before the next stage of work.',
    signs: [
      'Water is sitting in an excavation, pit or low point',
      'A work area cannot be accessed safely until the water is removed',
      'Water has collected in a mechanical room or service area',
      'Rainfall or a leak has left more water than a small pump can clear',
      'An inspection or pour is scheduled and the area must be dry'
    ],
    benefits: [
      'Standing water removed from accessible areas so work can restart',
      'Water quality, sediment and access reviewed before scheduling',
      'Volume and hose reach matched to the equipment',
      'Clear notice when a discharge or disposal route is not available',
      'Coordination around active site conditions'
    ],
    applications: [
      'Excavation water',
      'Utility pits',
      'Construction low points',
      'Flooded service areas',
      'Mechanical rooms',
      'Exterior sumps'
    ],
    notice:
      'Dewatering availability depends on water quality, sediment, contamination risk, access, volume, and local discharge or disposal requirements.',
    provide: [
      'Where the water is and how it collected',
      'Approximate volume and depth',
      'Visible sediment, sheen, odour or suspected contamination',
      'Access route for the hose and vehicle positioning',
      'How soon the area needs to be clear'
    ],
    expect:
      'A review of the water and the site, confirmation of whether the request can be accepted, a coordinated arrival, and removal of the approved water from the accessible area.',
    process: [
      {
        title: 'Describe the water and the site',
        body: 'Share the location, approximate volume, how the water collected, and anything visible such as sediment, sheen or odour.'
      },
      {
        title: 'Confirm handling',
        body: 'TotalVac reviews water quality, access, volume and the available discharge or disposal route before accepting the work.'
      },
      {
        title: 'Remove the water',
        body: 'The crew sets up at the approved access point and removes the approved water from the accessible area.'
      },
      {
        title: 'Confirm the area',
        body: 'The work zone is checked and completion is confirmed so the next stage of work can proceed.'
      }
    ],
    prep: [
      'Keep the access route clear for the hose and vehicle',
      'Identify the safest position for the equipment',
      'Share known contamination, sheen or unusual odour before arrival',
      'Confirm site check-in, orientation or permit requirements',
      'Tell TotalVac about any live work happening nearby'
    ],
    faqs: [
      {
        q: 'Can you dewater any standing water?',
        a: 'No. Availability depends on water quality, sediment, contamination risk, access, volume, and local discharge or disposal requirements. Each request is reviewed before it is scheduled.'
      },
      {
        q: 'What if the water looks contaminated?',
        a: 'Tell us what you see, including sheen, colour, odour or nearby chemical storage. Do not assume the water is clean. TotalVac will review the information before accepting the request.'
      },
      {
        q: 'Do you provide continuous pumping over several days?',
        a: 'This service covers vacuum removal visits. Ongoing pumping arrangements would need to be discussed and confirmed separately.'
      }
    ],
    related: ['catch-basin-cleaning', 'tank-and-sump-pump-outs', 'liquid-waste-removal']
  }
];

/** Card shown alongside the five detail services. It links to the maintenance
 *  section on the services overview page rather than a thin standalone page. */
export const maintenanceCard = {
  slug: null,
  href: '/services/#scheduled-maintenance',
  title: 'Scheduled Maintenance',
  cardSummary:
    'Recurring service plans designed around site usage, access requirements, and operational priorities.',
  cta: 'View maintenance'
};

export const serviceBySlug = (slug) => services.find((s) => s.slug === slug);

/** Options used by the request form dropdown. */
export const serviceOptions = [
  'Grease Trap Cleaning',
  'Catch Basin Cleaning',
  'Liquid Waste Removal',
  'Tank or Sump Pump-Out',
  'Site Dewatering',
  'Scheduled Maintenance',
  'Other'
];

export const acceptanceNote =
  'Service availability depends on material type, volume, access, site conditions, equipment fit, and approved disposal options. TotalVac confirms acceptance before work is scheduled.';

export default services;
