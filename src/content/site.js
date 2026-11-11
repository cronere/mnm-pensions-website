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

export const LEDGER = [
  ['Contributions', 'Every payroll'],
  ['Daily recordkeeping', 'Every business day'],
  ['Terminations and eligibility', 'As they occur'],
  ['Distributions and tax forms', 'On request'],
  ['Annual reporting', 'Each plan year'],
]

export const SERVICES = [
  {
    title: 'Contribution processing',
    body: 'We take your payroll contribution file, check it against the plan document and census, and post it to each participant. Exceptions come back to you with a reason, not a vague error.',
  },
  {
    title: 'Daily recordkeeping',
    body: 'Every account is valued each business day on a share-accounting basis. Participants see a current balance, and you see a ledger that ties to the custodian.',
  },
  {
    title: 'Terminations and eligibility',
    body: 'Report a separation and we update the participant, confirm vesting under the plan document, and tell the participant what options they have.',
  },
  {
    title: 'Distributions',
    body: 'We process distribution requests, withholding and the forms that go with them. Each payment is reviewed against the plan terms before it is released.',
  },
  {
    title: 'Annual reporting',
    body: 'Year-end balances, activity summaries and the records your auditors and plan officials ask for, produced from the same ledger we keep all year.',
  },
  {
    title: 'Participant support',
    body: 'Participants have their own sign-in to see balances and activity, and a real person to ask when a question is about the plan rather than the website.',
  },
]

export const PLAN_TYPES = [
  {
    name: '401(a) money purchase plan',
    status: 'Our core service',
    body: 'A governmental defined contribution plan with a fixed contribution rate set by the plan document. Colleges and school districts commonly use it as the retirement plan for part-time, seasonal and adjunct employees who are not in the state retirement system.',
  },
  {
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
    role: 'Partner',
    bio: 'Jacob holds a degree in Accounting and an MBA. He began working in plan administration in 2017 and, since 2025, has specialized in 401(a) money purchase plans for colleges and school districts.',
  },
  {
    name: 'Robert Merkley',
    role: 'Partner (Emeritus)',
    bio: 'Robert holds a degree in Finance and is an IRS-enrolled retirement plan agent (ERPA). He has specialized in qualified plans since 1984, with experience in computer programming, accounting, investment analysis and general business consulting.',
  },
  {
    name: 'Sharon Newman',
    role: 'Partner (Emeritus)',
    bio: 'Sharon holds a degree in Accounting and has specialized in qualified plans since 1986. Her specialty is working with defined contribution plans.',
  },
  {
    name: 'Karen McLaws',
    role: 'Partner (Emeritus)',
    bio: 'Karen has specialized in qualified plans since the late 1980s, with extensive experience in plan design and the creation of legal documents. Before entering the field, she served a national company as a human resources regional manager.',
  },
]
