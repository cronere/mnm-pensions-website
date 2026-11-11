import Link from 'next/link'
import PageHero from '@/components/site/PageHero'
import ContactSection from '@/components/site/ContactSection'
import { SERVICES } from '@/content/site'

export const metadata = {
  title: '401(a) Plan Administration and Recordkeeping Services',
  description:
    'Contribution processing, daily recordkeeping, terminations, distributions and annual reporting for non-ERISA governmental 401(a) money purchase plans.',
  alternates: { canonical: '/services' },
}

export default function Services() {
  return (
    <>
      <PageHero
        title="Everything between the payroll file and the year-end report."
        lede="Administration and daily recordkeeping for your 401(a) money purchase plan, handled by one team."
      />
      <section className="sec">
        <div className="wrap">
          <div className="rows">
            {SERVICES.map((s) => (
              <div className="row" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec wash">
        <div className="wrap cols wide-left">
          <div>
            <h2>Administration and recordkeeping are one service here.</h2>
            <p style={{ marginTop: '1rem' }}>
              The person who reads your plan document and the system that holds your
              participants&rsquo; balances are in the same firm. When a termination changes a
              participant&rsquo;s vesting, the balance and the paperwork change together.
            </p>
            <p>
              Your investment advisor and custodian continue to select and hold the
              investments. We keep the records of who owns what, every business day.
            </p>
          </div>
          <div className="aside">
            <h3>What we leave to others</h3>
            <p>
              Investment selection, legal opinions, and tax advice. We work alongside your
              advisor, counsel and auditors, and give them the records they ask for.
            </p>
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <Link href="/pricing" className="btn ghost">See the fee schedule</Link>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
