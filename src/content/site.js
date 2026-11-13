// Single source of truth for marketing-site copy that changes over time.
// Items marked CONFIRM need a real value from MNM before launch.

export const SITE = {
  name: 'MNM Pensions',
  legalName: 'Merkley, Newman & McLaws, Inc.',
  shortName: 'MNM',
  url: 'https://mnmpensions.com',
  location: 'Queen Creek, Arizona',
  email: 'jacob@mnmpensions.com',
  phone: '480-507-6640',
  phoneNote: 'option 0',
  phoneHref: 'tel:+14805076640',
  fax: '480-813-7791',
  mail: { street: 'PO Box 872', city: 'Queen Creek', region: 'AZ', zip: '85142' },
  updated: 'November 10, 2026',
  partner: {
    name: 'Merkley Retirement LLC',
    // Placeholder URL until the final partner link is provided
    url: 'https://merkleyretirementllc.com',
  },
}

// White-labeled sign-in addresses. These are MNM-branded hostnames that the
// platform serves for this firm. CONFIRM the hostnames once DNS is set up.
export const LOGIN = {
  participant: process.env.NEXT_PUBLIC_PARTICIPANT_LOGIN_URL || 'https://portal.mnmpensions.com',
  admin: process.env.NEXT_PUBLIC_ADMIN_LOGIN_URL || 'https://admin.mnmpensions.com',
}

export const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/plans', label: 'Plans we serve' },
  { href: '/states', label: 'States' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/participants', label: 'Participants' },
  { href: '/about', label: 'About' },
]

export const PROCESS = [
  { icon: 'download', title: 'Contributions', when: 'Monthly' },
  { icon: 'calendar', title: 'Daily recordkeeping', when: 'Every business day' },
  { icon: 'exit', title: 'Terminations and eligibility', when: 'As they occur' },
  { icon: 'upload', title: 'Distributions and tax forms', when: 'Monthly/Annual' },
  { icon: 'chart', title: 'Annual reporting', when: 'Annual' },
]

export const SERVICES = [
  {
    icon: 'download',
    title: 'Contribution processing',
    body: 'We take your monthly payroll contribution file, check it against the plan document and census, and post it to each participant account.',
  },
  {
    icon: 'calendar',
    title: 'Daily recordkeeping',
    body: 'Participant accounts are valued on a share-accounting basis, tying back to the custodian\u2019s balance each business day.',
  },
  {
    icon: 'exit',
    title: 'Terminations and eligibility',
    body: 'Report a separation and we update the participant, confirm vesting under the plan document, and tell the participant what options they have.',
  },
  {
    icon: 'upload',
    title: 'Distributions',
    body: 'We process distribution requests, withholding and the forms that go with them. Each payment is reviewed against the plan terms before it is released.',
  },
  {
    icon: 'chart',
    title: 'Annual reporting',
    body: 'Year-end balances, activity summaries and the records your auditors and plan officials ask for, produced from the same ledger we keep all year.',
  },
  {
    icon: 'headset',
    title: 'Participant support',
    body: 'Participants have their own sign-in to see balances and activity, and a real person to get help when needed.',
  },
]

export const PLAN_TYPES = [
  {
    icon: 'cap',
    name: '401(a) money purchase plan',
    status: 'Our core service',
    body: 'A governmental defined contribution plan with a fixed contribution rate set by the plan document. Colleges and school districts commonly use it as the retirement plan for part-time, seasonal and adjunct employees who are not in the state retirement system.',
  },
  {
    icon: 'building',
    name: 'Other governmental plans',
    status: 'Ask us',
    // CONFIRM: which other non-ERISA plan types MNM will take on
    body: 'Governmental 457(b) and non-ERISA 403(b) arrangements can sit alongside a 401(a). If you run one and want one firm to keep the records, ask us whether it is a fit.',
  },
]

export const NOT_SERVED = [
  'Traditional 401(k) plans',
  'Defined benefit (pension) plans',
  'Cash balance plans',
  'Plans covered by ERISA',
]

// Source: CRS report R47499 (seven states, about 81% of participants in
// public plans whose earnings are not covered by Social Security).
export const STATES_HIGH = [
  'California',
  'Colorado',
  'Louisiana',
  'Massachusetts',
  'Nevada',
  'Ohio',
  'Texas',
]

export const PRICING = {
  bundledBps: '0.50%',
  cap: '$500',
  distribution: '$50',
  examples: [
    { who: 'Adjunct instructor', balance: 4200, fee: 21 },
    { who: 'Part-time staff, 8 years', balance: 38000, fee: 190 },
    { who: 'Long-serving participant', balance: 140000, fee: 500, capped: true },
  ],
}

export const TEAM = [
  {
    name: 'Jacob Merkley',
    photo: '/brand/jacob.jpg',
    focus: 'center 22%',
    role: 'Partner',
    bio: 'Jacob holds a degree in Accounting and an MBA. He began working in plan administration in 2017 and, since 2025, has specialized in 401(a) money purchase plans for colleges and school districts.',
  },
  {
    name: 'Robert Merkley',
    photo: '/brand/robert.jpg',
    focus: 'center 25%',
    role: 'Partner (Emeritus)',
    bio: 'Robert holds a degree in Finance and is an IRS-enrolled retirement plan agent (ERPA). He has specialized in qualified plans since 1984, with experience in computer programming, accounting, investment analysis and general business consulting.',
  },
  {
    name: 'Sharon Newman',
    photo: '/brand/sharon.jpg',
    focus: 'center 82%',
    role: 'Partner (Emeritus)',
    bio: 'Sharon holds a degree in Accounting and has specialized in qualified plans since 1986. Her specialty is working with defined contribution plans.',
  },
  {
    name: 'Karen McLaws',
    photo: '/brand/karen.jpg',
    focus: 'center 38%',
    role: 'Partner (Emeritus)',
    bio: 'Karen has specialized in qualified plans since the late 1980s, with extensive experience in plan design and the creation of legal documents. Before entering the field, she served a national company as a human resources regional manager.',
  },
]

// Annual report fee is discounted on a straight line: 0% at $5M in plan
// assets up to 100% (no fee) at $50M and above.
export const REPORT_DISCOUNT = { floor: 5_000_000, ceiling: 50_000_000 }
export const REPORT_DISCOUNT_EXAMPLES = [5, 10, 20, 30, 40, 50].map((m) => ({
  assets: m,
  pct: Math.round(((m * 1_000_000 - REPORT_DISCOUNT.floor) / (REPORT_DISCOUNT.ceiling - REPORT_DISCOUNT.floor)) * 100),
}))

// TPA-only (no daily recordkeeping)
export const TPA_ONLY = {
  base: 300,
  tiers: [
    { range: 'Participants 1 to 30', upTo: 30, rate: 25 },
    { range: 'Participants 31 to 100', upTo: 100, rate: 20 },
    { range: 'Participants 101 to 200', upTo: 200, rate: 15 },
    { range: 'Participants 201 to 300', upTo: 300, rate: 12 },
    { range: 'Participants 301 to 400', upTo: 400, rate: 10 },
    { range: 'Participants 401 and up', upTo: Infinity, rate: 8 },
  ],
  example: { participants: 120, total: 300 + 30 * 25 + 70 * 20 + 20 * 15 },
}

// Plans MNM administers. Drop logo files in /public/clients using these names.
export const CLIENTS = [
  { name: 'Austin Community College', logo: '/clients/austin-community-college.png' },
  { name: 'Alvin College', logo: '/clients/alvin-college.png' },
  { name: 'Lee College', logo: '/clients/lee-college.png' },
  { name: 'McLennan Community College', logo: '/clients/mclennan-community-college.png' },
  { name: 'Western Texas College', logo: '/clients/western-texas-college.png' },
  { name: 'Tyler Junior College', logo: '/clients/tyler-junior-college.png' },
]

// Fee for administration-only plans: base plus graduated per-participant bands.
export const tpaFee = (participants) => {
  let fee = TPA_ONLY.base
  let prev = 0
  for (const t of TPA_ONLY.tiers) {
    const n = Math.max(0, Math.min(participants, t.upTo) - prev)
    fee += n * t.rate
    prev = t.upTo
  }
  return fee
}
export const TPA_EXAMPLES = [120, 250, 450].map((n) => ({ participants: n, fee: tpaFee(n) }))

// Tile-grid map of the United States: [abbreviation, column, row, name]
export const STATE_GRID = [
  ['AK',1,1,'Alaska'],['ME',12,1,'Maine'],
  ['VT',11,2,'Vermont'],['NH',12,2,'New Hampshire'],
  ['WA',2,3,'Washington'],['ID',3,3,'Idaho'],['MT',4,3,'Montana'],['ND',5,3,'North Dakota'],['MN',6,3,'Minnesota'],['IL',7,3,'Illinois'],['WI',8,3,'Wisconsin'],['MI',9,3,'Michigan'],['NY',10,3,'New York'],['RI',11,3,'Rhode Island'],['MA',12,3,'Massachusetts'],
  ['OR',2,4,'Oregon'],['NV',3,4,'Nevada'],['WY',4,4,'Wyoming'],['SD',5,4,'South Dakota'],['IA',6,4,'Iowa'],['IN',7,4,'Indiana'],['OH',8,4,'Ohio'],['PA',9,4,'Pennsylvania'],['NJ',10,4,'New Jersey'],['CT',11,4,'Connecticut'],
  ['CA',2,5,'California'],['UT',3,5,'Utah'],['CO',4,5,'Colorado'],['NE',5,5,'Nebraska'],['MO',6,5,'Missouri'],['KY',7,5,'Kentucky'],['WV',8,5,'West Virginia'],['VA',9,5,'Virginia'],['MD',10,5,'Maryland'],['DE',11,5,'Delaware'],
  ['AZ',3,6,'Arizona'],['NM',4,6,'New Mexico'],['KS',5,6,'Kansas'],['AR',6,6,'Arkansas'],['TN',7,6,'Tennessee'],['NC',8,6,'North Carolina'],['SC',9,6,'South Carolina'],['DC',10,6,'District of Columbia'],
  ['OK',5,7,'Oklahoma'],['LA',6,7,'Louisiana'],['MS',7,7,'Mississippi'],['AL',8,7,'Alabama'],['GA',9,7,'Georgia'],
  ['HI',1,8,'Hawaii'],['TX',5,8,'Texas'],['FL',10,8,'Florida'],
]
