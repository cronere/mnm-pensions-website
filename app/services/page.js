import Link from 'next/link'
import PageHero from '@/components/site/PageHero'
import ContactSection from '@/components/site/ContactSection'
import Icon from '@/components/site/Icon'
import SectionHead from '@/components/site/SectionHead'
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
          <div className="grid-3">
            {SERVICES.map((s) => (
              <div className="card" key={s.title}>
                <span className="bubble"><Icon name={s.icon} size={26} /></span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec tint">
        <div className="wrap">
          <SectionHead title="Administration and recordkeeping are one service here." />
          <div className="cols wide-left">
            <div className="prose">
              <p>
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
              <span className="bubble amber"><Icon name="scale" /></span>
              <h3>What we leave to others</h3>
              <p>
                Investment selection, legal opinions, and tax advice. We work alongside your
                advisor, counsel and auditors, and give them the records they ask for.
              </p>
            </div>
          </div>
          <p className="center" style={{ marginTop: '2.5rem' }}>
            <Link href="/pricing" className="btn ghost">See the fee schedule</Link>
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
