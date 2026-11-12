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

// CONFIRM: production URL of the ClarentApp deployment
export const CLARENT_URL = process.env.NEXT_PUBLIC_CLARENT_URL || 'https://clarentapp.com'

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
    focus: 'center 50%',
    role: 'Partner (Emeritus)',
    bio: 'Sharon holds a degree in Accounting and has specialized in qualified plans since 1986. Her specialty is working with defined contribution plans.',
  },
  {
    name: 'Karen McLaws',
    photo: '/brand/karen.jpg',
    focus: 'center 30%',
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
    { range: 'Participants 1 to 30', rate: 25 },
    { range: 'Participants 31 to 100', rate: 20 },
    { range: 'Participants 101 to 200', rate: 15 },
    { range: 'Participants 201 to 300', rate: 12 },
    { range: 'Participants 301 to 400', rate: 10 },
    { range: 'Participants 401 and up', rate: 8 },
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

// Annual processing and reporting. Derived from two client invoices: a flat
// base plus a per-participant rate. Clients who also use MNM for daily
// recordkeeping get the asset-based discount (REPORT_DISCOUNT above).
export const ANNUAL_REPORT = { base: 2350, perParticipant: 6 }
const reportFee = (participants, assets, daily) => {
  const gross = ANNUAL_REPORT.base + ANNUAL_REPORT.perParticipant * participants
  const disc = daily
    ? Math.min(1, Math.max(0, (assets - REPORT_DISCOUNT.floor) / (REPORT_DISCOUNT.ceiling - REPORT_DISCOUNT.floor)))
    : 0
  return { gross, pct: Math.round(disc * 100), net: Math.round(gross * (1 - disc)) }
}
export const REPORT_EXAMPLES = [
  { label: 'Administration only', detail: '300 participants', ...reportFee(300, 0, false) },
  { label: 'With daily recordkeeping', detail: '1,000 participants, $20 million in assets', ...reportFee(1000, 20e6, true) },
  { label: 'With daily recordkeeping', detail: '2,000 participants, $40 million in assets', ...reportFee(2000, 40e6, true) },
]
