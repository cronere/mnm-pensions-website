import Link from 'next/link'
import PageHero from '@/components/site/PageHero'
import ContactSection from '@/components/site/ContactSection'
import { CLARENT_URL } from '@/content/site'

export const metadata = {
  title: 'Participants: Your 401(a) Plan Account',
  description:
    'How to see your balance, what happens when you leave your position, and how to request a distribution from your college 401(a) money purchase plan.',
  alternates: { canonical: '/participants' },
}

const FAQ = [
  ['Who is MNM?', 'MNM keeps the records for your employer’s retirement plan and handles its administration. We do not choose the plan’s investments, and we do not work for you or your employer as an investment advisor.'],
  ['How do I see my balance?', 'Sign in to the participant portal. If this is your first time, choose the option to claim your account and have your account number, date of birth and the last four digits of your Social Security number ready.'],
  ['Who contributes to my account?', 'Your employer makes contributions on your behalf at the rate set in the plan document. Check your plan document or ask your benefits office for the rate that applies to you.'],
  ['What happens when I leave my position?', 'Your account stays in the plan. Whether and when you can take a distribution depends on your plan document, and a termination of employment is the usual trigger. Contact your benefits office to report the separation if they have not already.'],
  ['How do I request a distribution?', 'Contact us or your benefits office to start a request. We confirm the request against the plan terms, then process it with the required tax withholding and forms.'],
  ['Are distributions taxable?', 'Generally, yes. Distributions are taxable income and may carry withholding or early-distribution tax. We cannot give tax advice, so talk to a tax professional before you decide.'],
  ['Who do I ask about investment options?', 'Your employer or the plan’s investment advisor. MNM does not select or advise on investments.'],
]

export default function Participants() {
  return (
    <>
      <PageHero
        title="Your plan account, in plain terms."
        lede="Your employer set up this plan. We keep the records and process the paperwork."
      />

      <section className="sec tight">
        <div className="wrap" style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
          <a href={`${CLARENT_URL}/portal`} className="btn">Sign in to your account</a>
          <Link href="/contact" className="btn ghost">Ask a question</Link>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: '50rem' }}>
          <div className="faq">
            {FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
