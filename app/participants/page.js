import Link from 'next/link'
import PageHero from '@/components/site/PageHero'
import ContactSection from '@/components/site/ContactSection'
import ClientsSection from '@/components/site/ClientsSection'

export const metadata = {
  title: 'Participants: Your 401(a) Plan Account',
  description:
    'How to see your balance, what happens when you leave your position, and how to request a distribution from your college 401(a) money purchase plan.',
  alternates: { canonical: '/participants' },
}

// Each answer: intro text, optional numbered list (items), optional closing note.
const FAQ = [
  {
    q: 'Who is Merkley, Newman & McLaws?',
    intro: 'Merkley, Newman & McLaws, or MNM Pensions for short, keeps the records for your employer’s retirement plan and handles its administration. We do not choose the plan’s investments, and we do not work for you or your employer as an investment advisor.',
  },
  {
    q: 'What is a Money Purchase Plan?',
    intro: 'A Money Purchase Plan is a defined contribution plan with a required contribution. The amount of required contribution is usually defined in the Plan Document as a percentage of each employee’s compensation, similar to how employees and employers pay into Social Security based on a specific percentage.',
  },
  {
    q: 'How do I see my balance?',
    intro: 'Sign in to the participant portal. If this is your first time, choose the option to claim your account and have your account number, date of birth and the last four digits of your Social Security number ready.',
  },
  {
    q: 'Who contributes to my account?',
    intro: 'You contribute to your plan just like you would to Social Security. In some instances, your employer may contribute as well. You can check your contribution rates in your account.',
  },
  {
    q: 'What happens when I leave my position?',
    intro: 'It depends on your situation:',
    items: [
      'If you have moved full-time with the same employer (and are no longer eligible to participate in this plan), you can request a distribution and close the account, or leave your account here.',
      'If you have terminated employment, you can request a distribution and close the account, or leave your account for up to 2 years. At that time, we will proceed with an “involuntary distribution,” where we close your account and open an IRA in your name with a new institution.',
    ],
  },
  {
    q: 'How do I request a distribution?',
    intro: 'Log into your account and start the process online. Alternatively, reach out to our team to get started. Distributions occur monthly or quarterly, depending on how your employer runs their distribution reporting process.',
  },
  {
    q: 'Are distributions taxable?',
    intro: 'Depending on the type of distribution, they can be. Here are your main distribution options:',
    items: [
      'Lump sum distribution. This is a cash distribution and a taxable event. We are required to withhold 20% and send it to the IRS on your behalf. You will receive a 1099 and can true-up with the IRS based on your own individual tax rate. A lump sum taken before age 59½ can also result in a 10% early-withdrawal penalty from the IRS.',
      'Rollover to an employer plan. If you have a new employer plan, or a previous employer plan that accepts rollovers, this is typically a tax-deferred event, meaning the rollover keeps its pre-tax status.',
      'Rollover to an individual retirement account (IRA). A rollover to a regular (traditional) IRA keeps the pre-tax status with no tax consequence. A rollover to a Roth IRA is a taxable event. We are not required to withhold 20%, but you will still receive a 1099 to help you true-up with the IRS.',
    ],
    outro: 'We cannot give tax advice, so talk to a tax professional before you decide.',
  },
  {
    q: 'Who do I ask about investment options?',
    intro: 'Sign in to your account to see the contact information for the investment and financial advising team that works with your employer. MNM Pensions does not select or advise on investments.',
  },
]

export default function Participants() {
  return (
    <>
      <PageHero
        title="Your plan account, in plain terms."
        lede="Your employer set up this plan. We keep the records and process the paperwork."
      />

      <section className="sec tight">
        <div className="wrap">
          <div className="hero-cta" style={{ marginTop: 0 }}>
            <Link href="/sign-in" className="btn">Sign in to your account</Link>
            <Link href="/contact" className="btn ghost">Ask a question</Link>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="faq">
            {FAQ.map(({ q, intro, items, outro }) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{intro}</p>
                {items && (
                  <ol>
                    {items.map((t) => <li key={t}>{t}</li>)}
                  </ol>
                )}
                {outro && <p>{outro}</p>}
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection tint />
      <ContactSection />
    </>
  )
}
