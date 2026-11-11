import PageHero from '@/components/site/PageHero'
import ContactSection from '@/components/site/ContactSection'
import { SITE, PLAN_TYPES, NOT_SERVED } from '@/content/site'

export const metadata = {
  title: 'Plan Types We Serve: Non-ERISA 401(a) Money Purchase Plans',
  description:
    'We specialize in governmental 401(a) money purchase plans for colleges and school districts. See what we serve, and where traditional 401(k) and defined benefit plans go.',
  alternates: { canonical: '/plans' },
}

export default function Plans() {
  return (
    <>
      <PageHero
        title="Governmental plans, and only governmental plans."
        lede="We specialize in non-ERISA retirement plans for public colleges and school districts."
      />

      <section className="sec">
        <div className="wrap">
          <div className="rows">
            {PLAN_TYPES.map((p) => (
              <div className="row" key={p.name}>
                <span className="tag">{p.status}</span>
                <h3>{p.name}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec wash">
        <div className="wrap cols wide-left">
          <div>
            <h2>How a 401(a) money purchase plan works</h2>
            <p style={{ marginTop: '1rem' }}>
              The employer contributes a fixed percentage of pay, set by the plan document,
              for every eligible employee each pay period. The employee&rsquo;s account holds
              those contributions and their investment results.
            </p>
            <p>
              Used as an alternative to Social Security, the plan must allocate at least 7.5
              percent of pay to each employee, and part-time, seasonal and temporary
              employees must be fully vested. Because the employer is a government, the plan
              is exempt from ERISA.
            </p>
            <p className="cite">
              Source:{' '}
              <a href="https://www.law.cornell.edu/cfr/text/26/31.3121(b)(7)-2" rel="noopener">
                26 CFR 31.3121(b)(7)-2
              </a>
              . Confirm how it applies to your plan with your counsel.
            </p>
          </div>
          <div className="aside">
            <h3>Who is usually in the plan</h3>
            <p>
              Adjunct and part-time faculty, seasonal and temporary staff, and student
              employees who are not members of the state retirement system.
            </p>
          </div>
        </div>
      </section>

      <section className="sec" id="not-served" aria-labelledby="ns">
        <div className="wrap cols">
          <div>
            <h2 id="ns">What we do not service</h2>
            <p style={{ marginTop: '1rem' }}>
              Staying narrow is how we stay good at this. These plan types are outside our
              scope:
            </p>
            <ul className="plain" style={{ marginTop: '1.25rem', maxWidth: '26rem' }}>
              {NOT_SERVED.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </div>
          <div className="aside">
            <h3>Our partner for those plans</h3>
            <p>
              {SITE.partner.name} is our exclusive partner for traditional 401(k), defined
              benefit and other ERISA plans. If your institution has both kinds of plans, we
              can introduce you.
            </p>
            <p style={{ marginTop: '1rem' }}>
              {SITE.partner.url ? (
                <a className="btn ghost" href={SITE.partner.url} rel="noopener">Visit {SITE.partner.name}</a>
              ) : (
                <a className="btn ghost" href="/contact">Ask for an introduction</a>
              )}
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
