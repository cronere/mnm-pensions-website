import Link from 'next/link'
import ContactSection from '@/components/site/ContactSection'
import Photo from '@/components/site/Photo'
import { CLARENT_URL, SITE, LEDGER, SERVICES, PRICING } from '@/content/site'

export const metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    areaServed: 'US',
    description:
      'Third-party administration and daily recordkeeping for non-ERISA governmental 401(a) money purchase plans at colleges and school districts.',
    email: SITE.email,
    telephone: '+1-480-507-6640',
    faxNumber: '+1-480-813-7791',
    address: {
      '@type': 'PostalAddress',
      postOfficeBoxNumber: 'PO Box 872',
      addressLocality: 'Queen Creek',
      addressRegion: 'AZ',
      postalCode: '85142',
      addressCountry: 'US',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>Your 401(a) plan, run by one firm from first contribution to final distribution.</h1>
            <p className="lede">
              MNM administers and keeps the daily records for non-ERISA governmental
              money purchase plans at colleges and school districts.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn">Talk to us about your plan</Link>
              <Link href="/pricing" className="btn ghost">See our pricing</Link>
            </div>
            <p className="hero-note">
              We do not manage investments. Your advisor and custodian stay exactly where they are.
            </p>
          </div>

          <aside className="ledger" aria-label="What MNM handles">
            <h2>What we handle for your plan</h2>
            <p className="sub">Every item below is done by our team, on one set of records.</p>
            <ul>
              {LEDGER.map(([k, v]) => (
                <li key={k}>
                  <span className="k">{k}</span>
                  <span className="lead" aria-hidden="true" />
                  <span className="v">{v}</span>
                </li>
              ))}
            </ul>
            <div className="foot">
              <span>Investments and custody</span>
              <b>Stay with you</b>
            </div>
          </aside>
        </div>
      </section>

      <section className="sec" aria-labelledby="one-stop">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="one-stop">Administration and recordkeeping, under one roof.</h2>
            <p>
              Most plans split the work: a TPA interprets the plan document and a separate
              recordkeeper holds the balances. Every handoff is a place for a number to go
              missing. We do both, so there is one team to call and one ledger to trust.
            </p>
          </div>
          <div className="split">
            <div className="pane">
              <p className="tag">Two firms</p>
              <h3>Administrator plus recordkeeper</h3>
              <ul>
                <li>Contribution files travel between vendors</li>
                <li>Two sets of records to reconcile each period</li>
                <li>A question about a balance can take two phone calls</li>
                <li>Two contracts, two invoices, two renewals</li>
              </ul>
            </div>
            <div className="pane us">
              <p className="tag">MNM</p>
              <h3>One firm, one ledger</h3>
              <ul>
                <li>You send one contribution file to one team</li>
                <li>The plan terms and the balances live in the same system</li>
                <li>One person can answer both the plan question and the balance question</li>
                <li>One agreement and one fee schedule</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec wash" aria-labelledby="why">
        <div className="wrap cols wide-left">
          <div>
            <h2 id="why">Built for the plans colleges actually run.</h2>
            <p style={{ marginTop: '1rem' }}>
              Public employers whose employees are not covered by Social Security must give
              them a qualifying retirement plan instead. Many colleges and school districts
              meet that rule for part-time, seasonal and temporary staff with a 401(a) money
              purchase plan. These plans are governmental, so they fall outside ERISA, and
              they need an administrator who works with them every day.
            </p>
            <p>
              That is the only kind of plan we do. We are not a general-purpose retirement
              shop with a public-sector line on the side.
            </p>
            <p className="cite">
              Federal rule:{' '}
              <a href="https://www.law.cornell.edu/cfr/text/26/31.3121(b)(7)-2" rel="noopener">
                26 CFR 31.3121(b)(7)-2
              </a>
              . Your plan document and counsel control how it applies to your employees.
            </p>
          </div>
          <div className="aside">
            <h3>What the federal rule asks of the plan</h3>
            <p>
              A defined contribution plan that stands in for Social Security must allocate at
              least 7.5 percent of pay to the employee&rsquo;s account. For part-time, seasonal
              and temporary employees, the benefit must be fully vested.
            </p>
            <p style={{ marginTop: '1rem' }}>
              <Link href="/plans" style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}>
                See the plans we serve
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="services">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="services">What we do</h2>
            <p>
              The administration side of your plan, plus the daily records underneath it.
            </p>
          </div>
          <div className="rows">
            {SERVICES.map((s) => (
              <div className="row" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem' }}>
            <Link href="/services" className="btn ghost">All services in detail</Link>
          </p>
        </div>
      </section>

      <section className="sec dark" aria-labelledby="participants">
        <div className="wrap cols">
          <div>
            <h2 id="participants">If you are a plan participant</h2>
            <p style={{ marginTop: '1rem' }}>
              Your employer set up this plan and MNM keeps its records. Sign in to see your
              balance and activity, or find out how to take a distribution after you leave
              your position.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignContent: 'flex-start' }}>
            <a href={`${CLARENT_URL}/portal`} className="btn" style={{ background: '#fff', color: '#0f2744', borderColor: '#fff' }}>
              Participant sign-in
            </a>
            <Link href="/participants" className="btn ghost" style={{ color: '#fff', borderColor: '#fff' }}>
              Participant questions
            </Link>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="pricing">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="pricing">Pricing you can read in one minute.</h2>
            <p>
              One bundled fee covers administration and recordkeeping. No setup surprises,
              no separate vendor to pay.
            </p>
          </div>
          <div className="price-big">
            <div>
              <div className="fig">{PRICING.bundledBps}</div>
              <div className="lbl">of plan assets, per year</div>
              <p>Administration and daily recordkeeping together.</p>
            </div>
            <div>
              <div className="fig">{PRICING.cap}</div>
              <div className="lbl">maximum per participant, per year</div>
              <p>Larger balances stop growing the fee at this cap.</p>
            </div>
            <div>
              <div className="fig">{PRICING.distribution}</div>
              <div className="lbl">per distribution</div>
              <p>Charged when a distribution is processed.</p>
            </div>
          </div>
          <Link href="/pricing" className="btn ghost">Full fee schedule and examples</Link>
        </div>
      </section>

      <section className="sec tight wash" aria-labelledby="not-us">
        <div className="wrap cols">
          <div>
            <h2 id="not-us">What we do not service</h2>
            <p style={{ marginTop: '1rem' }}>
              We stay narrow on purpose. For traditional 401(k) plans, defined benefit plans
              and other ERISA plans, we work with our partner{' '}
              <Link href="/plans#not-served" style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Merkley Retirement LLC
              </Link>
              .
            </p>
          </div>
          <div>
            <Link href="/plans#not-served" className="btn ghost">Where those plans go</Link>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="about-teaser">
        <div className="wrap cols">
          <div>
            <h2 id="about-teaser">Twenty years of plan administration, now focused on one kind of plan.</h2>
            <p style={{ marginTop: '1rem' }}>
              {SITE.legalName} has administered qualified plans for more than 20 years from
              {' '}{SITE.location}. We built our own recordkeeping system for governmental
              money purchase plans, so what we promise on the administration side is what the
              software actually does.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              <Link href="/about" className="btn ghost">Meet the team</Link>
            </p>
          </div>
          <Photo ratio="4 / 3" alt="" need="Community college campus or classroom, landscape 4:3" />
        </div>
      </section>

      <ContactSection />
    </>
  )
}
