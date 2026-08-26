/**
 * Shared content: industries, FAQ, value points, process steps and page copy.
 * Every line here is framed as service fit, not as a claimed track record.
 */

export const industries = [
  {
    id: 'restaurants-and-food-service',
    title: 'Restaurants and Food Service',
    short: 'Grease trap service planned around prep, service hours and deliveries.',
    photo: 'grease-trap-service',
    body: 'Grease traps and commercial kitchen systems need service that works around operating hours, deliveries, staff, and guests. TotalVac coordinates access and scheduling with the realities of a busy food-service site.',
    detail: [
      'A kitchen cannot stop for a pump-out. Most food-service work happens in a narrow window: after close, before prep, or in the gap between lunch and dinner service. TotalVac plans around that window rather than asking the kitchen to plan around the truck.',
      'The trap is rarely the only consideration. Loading zones fill up, back doors get blocked, property management controls the gate, and the interceptor may sit under a mat or a parked vehicle. Those details get confirmed before the visit so the crew is not solving them on arrival.'
    ],
    requests: [
      'Grease trap pump-outs on a set interval',
      'One-time service before an inspection or a busy period',
      'Coordination around delivery windows and service hours',
      'Multi-location scheduling under one point of contact'
    ],
    planning: [
      'Preferred window, including after hours where access allows',
      'Trap location, approximate capacity and access route',
      'Property rules, gate codes and loading restrictions',
      'A record of the service date for your own maintenance file'
    ]
  },
  {
    id: 'property-management-and-condominiums',
    title: 'Property Management and Condominiums',
    short: 'One request line for basins, sumps, pits and tanks across a property.',
    photo: 'catch-basin-service',
    body: 'One property can contain catch basins, sumps, pits, tanks, and drainage points with different service needs. TotalVac helps property teams organize individual pump-outs and recurring maintenance requests.',
    detail: [
      'Property teams are usually managing several systems that fail at different rates. The parking lot basins fill with sediment over a season, the mechanical room sump fills on a schedule of its own, and the loading area drain only becomes urgent after a storm.',
      'Rather than treating each of those as a separate emergency, TotalVac can map what is on the property, propose an interval for each system, and keep the requests running through one point of contact so residents and tenants see as little of the work as possible.'
    ],
    requests: [
      'Catch basin cleaning across a property',
      'Sump and pit pump-outs in mechanical areas',
      'Recurring service for known problem points',
      'A clear record of what was serviced and when'
    ],
    planning: [
      'Which systems are on the property and where they sit',
      'Access for the vehicle and hose reach to each point',
      'Resident and tenant notice requirements',
      'Quiet hours and parking restrictions'
    ]
  },
  {
    id: 'retail-and-hospitality',
    title: 'Retail and Hospitality',
    short: 'Work windows chosen to protect customer access and the front of house.',
    photo: 'property-context',
    body: 'Service should protect customer access and minimize disruption. TotalVac plans around loading areas, parking conditions, building access, and preferred work windows.',
    detail: [
      'In retail and hospitality the work is judged partly on how invisible it is. A hose across a main entrance during trading hours is a problem even when the pump-out itself takes twenty minutes.',
      'TotalVac positions equipment away from customer routes where the site allows it, uses cones to keep the work zone defined, and agrees the window in advance so front of house staff are not surprised.'
    ],
    requests: [
      'Drainage service planned outside customer hours',
      'Loading area and back of house pump-outs',
      'Coordination with building and property management',
      'Work windows that protect guest access'
    ],
    planning: [
      'Trading hours and the preferred service window',
      'Where equipment can stand without blocking customers',
      'Back of house access and who holds the keys',
      'Any events or bookings to work around'
    ]
  },
  {
    id: 'industrial-and-manufacturing',
    title: 'Industrial and Manufacturing',
    short: 'Material information reviewed before any pump-out is accepted.',
    photo: 'tank-sump-pump-out',
    body: 'Approved non-hazardous liquids may collect in tanks, sumps, wash areas, and process locations. TotalVac reviews material information and access requirements before accepting the work.',
    detail: [
      'Industrial requests get the most scrutiny before they are booked, and that is deliberate. What is in the tank determines whether the job can be accepted at all, how it can be transported, and where it can lawfully go.',
      'Send whatever material information you hold, including safety data sheets, and TotalVac will tell you plainly whether the request can be accepted. If it cannot, you find out in time to arrange the right service instead of losing a shutdown window.'
    ],
    requests: [
      'Wash bay and process pit pump-outs',
      'Tank and interceptor content removal, where accepted',
      'Material review before the work is scheduled',
      'Coordination with site safety and check-in procedures'
    ],
    planning: [
      'Material information or safety data sheets',
      'System type, approximate capacity and current level',
      'Site induction, permits and check-in requirements',
      'Production windows the work has to fit around'
    ]
  },
  {
    id: 'construction-and-civil-sites',
    title: 'Construction and Civil Sites',
    short: 'Standing water and pits cleared where access and handling are approved.',
    photo: 'site-dewatering',
    body: 'Standing water, pits, and catch basins can interrupt work. TotalVac can assess approved pump-out and dewatering requests where safe access and lawful handling are available.',
    detail: [
      'On an active site the cost of standing water is measured in trades waiting. An excavation that cannot be inspected, a pour that cannot go ahead, a pit that has to be clear before the next crew arrives.',
      'TotalVac reviews water quality, sediment, access and the available discharge or disposal route before accepting the work, then coordinates arrival around the trades already on site.'
    ],
    requests: [
      'Standing water removed from excavations and low points',
      'Catch basin service during and after site work',
      'Pit and sump clearing where access is safe',
      'Scheduling around active trades on site'
    ],
    planning: [
      'How the water collected and roughly how much there is',
      'Any visible sheen, sediment or suspected contamination',
      'Safe standing position for the equipment',
      'Site orientation and the supervisor to report to'
    ]
  },
  {
    id: 'institutional-and-multi-site-operations',
    title: 'Institutional and Multi-Site Operations',
    short: 'Organized scheduling and clear communication across multiple locations.',
    photo: 'liquid-waste-removal',
    body: 'Schools, care facilities, commercial portfolios, and multi-location operators benefit from clear communication and organized service scheduling.',
    detail: [
      'Multi-site operators lose more time to coordination than to the work itself. Different contacts, different access rules, different intervals, and no single view of what was serviced where.',
      'TotalVac can run several locations through one request channel, set an interval per site rather than one blanket schedule, and confirm each visit as it completes so the record stays current.'
    ],
    requests: [
      'A single request channel across several locations',
      'Recurring intervals set per site',
      'Kitchen, mechanical and exterior drainage service',
      'Clear confirmation when each visit is complete'
    ],
    planning: [
      'Site list with a contact for each location',
      'Access requirements that differ between sites',
      'Occupied hours, term dates or care schedules',
      'How you want completion confirmed and recorded'
    ]
  }
];

export const valuePoints = [
  {
    title: 'Prepared for the job',
    body: 'We confirm the material, access, hose reach, site conditions, and scheduling needs before service whenever possible.'
  },
  {
    title: 'Clear communication',
    body: 'Customers know what is being scheduled, what information is needed, and when the work is complete.'
  },
  {
    title: 'Clean work practices',
    body: 'The service approach is planned to protect surrounding areas and leave the work zone orderly.'
  },
  {
    title: 'Flexible service',
    body: 'Book a one-time pump-out or discuss a recurring maintenance schedule based on the needs of the property.'
  }
];

export const processSteps = [
  {
    title: 'Tell us what needs service',
    body: 'Share the location, material type, access details, approximate volume, urgency, and any photos that help us assess the job.'
  },
  {
    title: 'Confirm the scope',
    body: 'We review the service requirements, confirm whether the material is accepted, and coordinate a suitable service window.'
  },
  {
    title: 'Complete the pump-out',
    body: 'The crew arrives prepared, performs the approved work, checks the service area, and confirms completion.'
  },
  {
    title: 'Plan the next service',
    body: 'For recurring needs, we can discuss a maintenance interval based on usage and site conditions.'
  }
];

export const trustCategories = [
  'Commercial Kitchens',
  'Property Managers',
  'Industrial Facilities',
  'Construction Sites'
];

/** Full FAQ set. Answers marked dynamic are resolved at build time from siteConfig. */
export const faqs = [
  {
    id: 'services-provided',
    q: 'What services does TotalVac Solutions provide?',
    a: 'TotalVac provides grease trap cleaning, catch basin cleaning, approved non-hazardous liquid waste removal, tank and sump pump-outs, selected site dewatering, and recurring maintenance. Availability depends on the material, volume, location, access, and equipment fit.'
  },
  {
    id: 'accepted-waste',
    q: 'What types of liquid waste do you accept?',
    a: 'Acceptance is confirmed case by case. Provide the known contents, approximate volume, source of the liquid, and any available safety or material information. TotalVac does not assume a liquid is non-hazardous based on appearance alone.'
  },
  {
    id: 'hazardous-waste',
    q: 'Do you handle hazardous waste?',
    a: 'Hazardous waste service is not offered unless TotalVac confirms the material can be lawfully transported and handled through the appropriate process. Tell us about any suspected chemicals, oils, fuels, solvents, or contamination before booking.'
  },
  {
    id: 'emergency-service',
    q: 'Do you offer 24/7 emergency service?',
    dynamic: 'emergency'
  },
  {
    id: 'recurring-service',
    q: 'Can I schedule recurring service?',
    a: 'Yes. Recurring service can be discussed for grease traps, catch basins, sumps, tanks, and other repeat needs. The schedule should be based on usage, capacity, site conditions, and any applicable requirements.'
  },
  {
    id: 'quote-information',
    q: 'What do you need to provide a quote?',
    a: 'Provide the site address, service type, material, approximate volume, access point, hose distance if known, preferred timing, and clear photos. More detail helps TotalVac assess the request efficiently.'
  },
  {
    id: 'site-preparation',
    q: 'How should the site be prepared?',
    a: 'Keep the service point accessible, move vehicles or stored items where possible, identify access restrictions, and notify relevant staff or property representatives. Tell TotalVac about unusual materials or safety concerns before arrival.'
  },
  {
    id: 'septic-tanks',
    q: 'Do you clean residential septic tanks?',
    a: 'Septic service is available only if specifically confirmed in the service list. Contact TotalVac with the tank type, location, capacity, and access details.'
  },
  {
    id: 'hydrovac',
    q: 'Do you provide hydrovac excavation?',
    a: 'Hydrovac excavation is available only if specifically confirmed. Vacuum trailer service and liquid waste removal should not be assumed to include hydro-excavation.'
  },
  {
    id: 'grease-trap-frequency',
    q: 'How often should a grease trap be serviced?',
    a: 'Frequency depends on trap size, kitchen volume, operating conditions, observed accumulation, and local requirements. TotalVac can discuss a practical recurring schedule after reviewing the site and service history.'
  },
  {
    id: 'catch-basin-frequency',
    q: 'How often should catch basins be cleaned?',
    a: 'Frequency depends on sediment, debris, traffic, surrounding landscaping, drainage performance, and property maintenance requirements. Periodic inspection can help determine when service is needed.'
  },
  {
    id: 'collected-material',
    q: 'What happens to the collected material?',
    dynamic: 'disposal'
  }
];

/** Questions surfaced on the home page preview, in order. */
export const homeFaqIds = [
  'accepted-waste',
  'recurring-service',
  'quote-information',
  'site-preparation',
  'emergency-service'
];

export const aboutValues = [
  { title: 'Preparation', body: 'The details are confirmed before the truck moves, not after it arrives.' },
  { title: 'Professionalism', body: 'Crews work to a standard that suits occupied, operating properties.' },
  { title: 'Communication', body: 'You know what is scheduled, what is needed from you, and when it is done.' },
  { title: 'Site respect', body: 'The work zone is protected during service and left orderly afterward.' },
  { title: 'Practical problem-solving', body: 'Access, volume and material questions get straight answers.' }
];

export const aboutConfirmList = [
  'Service scope',
  'Material information required',
  'Site and access details',
  'Preferred service window',
  'Hose reach and equipment considerations',
  'Special property requirements'
];

/** Optional module. Stays hidden until real information is supplied by the client. */
export const founderStory = {
  enabled: false,
  heading: null,
  body: null
};

export default { industries, valuePoints, processSteps, faqs, trustCategories };
