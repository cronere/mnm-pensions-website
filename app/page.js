import Link from 'next/link'
import ContactSection from '@/components/site/ContactSection'
import ClientsSection from '@/components/site/ClientsSection'
import Photo from '@/components/site/Photo'
import Icon from '@/components/site/Icon'
import SectionHead from '@/components/site/SectionHead'
import { Chevrons } from '@/components/site/Graphics'
import { SITE, PROCESS, SERVICES, PRICING } from '@/content/site'

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
    logo: 'https://mnmpensions.com/brand/mnm-logo.png',
    email: SITE.email,
    telephone: '+1-480-507-6640',
    faxNumber: '+1-480-813-7791',
    areaServed: 'US',
    description:
      'Third-party administration and daily recordkeeping for non-ERISA governmental 401(a) money purchase plans at colleges and school districts.',
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
        <div className="hero-bg" aria-hidden="true">
          <Chevrons className="wm wm-r" />
          <Chevrons className="wm wm-l" />
        </div>
        <div className="wrap">
          <h1>Retirement plan administration for colleges and school districts, from first contribution to final distribution.</h1>
          <p className="lede">
            MNM administers your plan and keeps its daily records, so one firm answers for both.
            We specialize in governmental money purchase plans that fall outside ERISA.
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn">Talk to us about your plan</Link>
            <Link href="/pricing" className="btn ghost">See our pricing</Link>
          </div>

          <div className="proc-wrap">
            <h2>What we handle for your plan</h2>
            <p>Every item below is done by our team, on one set of records.</p>
            <ul className="proc">
              {PROCESS.map((p) => (
                <li key={p.title}>
                  <span className="bubble"><Icon name={p.icon} size={26} /></span>
                  <span className="t">{p.title}</span>
                  <span className="pill">{p.when}</span>
                </li>
              ))}
            </ul>
            <span className="keep">
              <Icon name="shield" size={20} />
              We do not manage investments. Your advisor and custodian stay exactly where they are.
            </span>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="one-stop">
        <div className="wrap">
          <SectionHead
            id="one-stop"
            title="Administration and recordkeeping, under one roof."
            sub="Most plans split the work: a TPA interprets the plan document and a separate recordkeeper holds the balances. Every handoff is a place for a number to go missing. We do both, so there is one team to call and one ledger to trust."
          />
          <div className="split">
            <div className="pane">
              <span className="bubble"><Icon name="users" /></span>
              <h3>Administrator plus recordkeeper</h3>
              <ul>
                {['Contribution files travel between vendors', 'Two sets of records to reconcile each period', 'A question about a balance can take two phone calls', 'Two contracts, two invoices, two renewals'].map((t) => (
                  <li key={t}><Icon name="x" size={18} />{t}</li>
                ))}
              </ul>
            </div>
            <div className="pane us">
              <span className="bubble"><Icon name="layers" /></span>
              <h3>One firm, one ledger</h3>
              <ul>
                {['You send one contribution file to one team', 'The plan terms and the balances live in the same system', 'One person can answer both the plan question and the balance question', 'One agreement and one fee schedule'].map((t) => (
                  <li key={t}><Icon name="check" size={18} strokeWidth={2.4} />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec tint" aria-labelledby="why">
        <div className="wrap">
          <SectionHead id="why" title="Built for the plans colleges and school districts actually run" />
          <div className="cols wide-left">
            <div className="prose">
              <p>
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
              <span className="bubble amber"><Icon name="scale" /></span>
              <h3>What the federal rule asks of the plan</h3>
              <p>
                A defined contribution plan that stands in for Social Security must allocate at
                least 7.5 percent of pay to the employee&rsquo;s account. For part-time, seasonal
                and temporary employees, the benefit must be fully vested.
              </p>
              <p style={{ marginTop: '1rem' }}>
                <Link href="/plans" className="btn ghost sm">See the plans we serve</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="services">
        <div className="wrap">
          <SectionHead id="services" title="What we do" sub="The administration side of your plan, plus the daily records underneath it." />
          <div className="grid-3">
            {SERVICES.map((s) => (
              <div className="card" key={s.title}>
                <span className="bubble"><Icon name={s.icon} size={26} /></span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <p className="center" style={{ marginTop: '2.5rem' }}>
            <Link href="/services" className="btn ghost">All services in detail</Link>
          </p>
        </div>
      </section>

      <ClientsSection tint />

      <section className="sec dark" aria-labelledby="participants">
        <Chevrons className="wm wm-r" />
        <div className="wrap center">
          <SectionHead
            id="participants"
            light
            title="If you are a plan participant"
            sub="Your employer set up this plan and MNM keeps its records. Sign in to see your balance and activity, or find out how to take a distribution after you leave your position."
          />
          <div className="hero-cta" style={{ marginTop: 0 }}>
            <Link href="/sign-in" className="btn amber">Participant sign-in</Link>
            <Link href="/participants" className="btn light-ghost">Participant questions</Link>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="pricing">
        <div className="wrap">
          <SectionHead
            id="pricing"
            title="Pricing you can read in one minute."
            sub="One bundled fee covers administration and recordkeeping. No setup surprises, no separate vendor to pay."
          />
          <div className="stats">
            <div className="stat">
              <span className="bubble amber"><Icon name="chart" /></span>
              <div className="fig">{PRICING.bundledBps}</div>
              <div className="lbl">of plan assets, per year</div>
              <p>Administration and daily recordkeeping together.</p>
            </div>
            <div className="stat">
              <span className="bubble amber"><Icon name="shield" /></span>
              <div className="fig">{PRICING.cap}</div>
              <div className="lbl">maximum per participant, per year</div>
              <p>Larger balances stop growing the fee at this cap.</p>
            </div>
            <div className="stat">
              <span className="bubble amber"><Icon name="upload" /></span>
              <div className="fig">{PRICING.distribution}</div>
              <div className="lbl">per distribution</div>
              <p>Charged when a distribution is processed.</p>
            </div>
          </div>
          <p className="center" style={{ marginTop: '2.5rem' }}>
            <Link href="/pricing" className="btn ghost">Full fee schedule and examples</Link>
          </p>
        </div>
      </section>

      <section className="sec tight tint" aria-labelledby="not-us">
        <div className="wrap">
          <SectionHead
            id="not-us"
            title="What we do not service"
            sub="We stay narrow on purpose. For traditional 401(k) plans, defined benefit plans and other ERISA plans, we work with our partner Merkley Retirement LLC."
          />
          <p className="center">
            <Link href="/plans#not-served" className="btn ghost">Where those plans go</Link>
          </p>
        </div>
      </section>

      <section className="sec" aria-labelledby="about-teaser">
        <div className="wrap">
          <SectionHead id="about-teaser" title="Thirty years of plan administration, now focused on one kind of plan." />
          <div className="cols mid">
            <div>
              <p>
                {SITE.legalName} has administered qualified retirement plans for more than 30
                years. We built our own recordkeeping system for governmental money purchase
                plans, so what we promise on the administration side is what the software
                actually does.
              </p>
              <p style={{ marginTop: '1.5rem' }}>
                <Link href="/about" className="btn ghost">Meet the team</Link>
              </p>
            </div>
            <Photo ratio="4 / 3" src="/brand/classroom.jpg" alt="A college lecture hall" need="Community college campus or classroom, landscape 4:3" />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
