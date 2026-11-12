import PageHero from '@/components/site/PageHero'
import ContactSection from '@/components/site/ContactSection'
import Icon from '@/components/site/Icon'
import SectionHead from '@/components/site/SectionHead'
import Tabs from '@/components/site/Tabs'
import { PRICING, TPA_ONLY, TPA_EXAMPLES, REPORT_DISCOUNT_EXAMPLES } from '@/content/site'

export const metadata = {
  title: 'Pricing: Transparent 401(a) Administration and Recordkeeping Fees',
  description:
    'Two clear options. Administration plus daily recordkeeping: 0.50% of plan assets, capped at $500 per participant per year, plus $50 per distribution. Administration only: $300 plus a per-participant schedule.',
  alternates: { canonical: '/pricing' },
}

const usd = (n) => '$' + n.toLocaleString('en-US')

const TABS = [
  { id: 'daily-recordkeeping', label: 'Administration + daily recordkeeping', sub: 'Participant portal and daily valuation' },
  { id: 'admin-only', label: 'Administration only', sub: 'Annual valuation, no daily recordkeeping' },
]

export default function Pricing() {
  return (
    <>
      <PageHero
        title="Two options. Prices published."
        lede="Choose whether MNM Pensions also keeps your daily records, and see exactly what each option costs."
      />

      <section className="sec" aria-label="Pricing options">
        <div className="wrap">
          <Tabs tabs={TABS} label="Pricing options">
            {/* ---------- Administration + daily recordkeeping ---------- */}
            <div>
              <p className="panel-intro">
                For plans that want MNM Pensions to administer the plan, keep the daily records
                and run the participant portal. One bundled fee covers it.
              </p>
              <div className="stats">
                <div className="stat">
                  <span className="bubble amber"><Icon name="chart" /></span>
                  <div className="fig">{PRICING.bundledBps}</div>
                  <div className="lbl">of plan assets, per year</div>
                  <p>Covers administration and daily recordkeeping.</p>
                </div>
                <div className="stat">
                  <span className="bubble amber"><Icon name="shield" /></span>
                  <div className="fig">{PRICING.cap}</div>
                  <div className="lbl">cap per participant, per year</div>
                  <p>No participant pays more than this in a year.</p>
                </div>
                <div className="stat">
                  <span className="bubble amber"><Icon name="upload" /></span>
                  <div className="fig">{PRICING.distribution}</div>
                  <div className="lbl">per distribution</div>
                  <p>Charged when a distribution is processed.</p>
                </div>
              </div>

              <h3 className="subhead">How the cap works</h3>
              <p className="subnote">The fee is 0.50 percent of each account balance, up to $500 a year. Illustrations, not quotes.</p>
              <div className="table-wrap">
                <table className="fees">
                  <thead>
                    <tr><th>Example participant</th><th className="n">Balance</th><th className="n">Annual fee</th></tr>
                  </thead>
                  <tbody>
                    {PRICING.examples.map((e) => (
                      <tr key={e.who}>
                        <th scope="row">{e.who}</th>
                        <td className="n">{usd(e.balance)}</td>
                        <td className="n">{usd(e.fee)}{e.capped ? ' (capped)' : ''}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="subhead">Annual report fee, discounted as your plan grows</h3>
              <p className="subnote">
                Plans that use MNM Pensions for daily recordkeeping receive an asset-based discount on the
                annual report fee: none at $5 million, rising in a straight line to no annual report
                fee at $50 million and above. Amounts between these steps follow the same line.
              </p>
              <div className="table-wrap">
                <table className="fees">
                  <thead>
                    <tr><th>Plan assets</th><th className="n">Annual report fee discount</th></tr>
                  </thead>
                  <tbody>
                    {REPORT_DISCOUNT_EXAMPLES.map((r) => (
                      <tr key={r.assets}>
                        <th scope="row">{r.assets === 50 ? '$50 million and above' : `$${r.assets} million`}</th>
                        <td className="n">{r.pct}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="note">The annual report fee itself follows the administration-only schedule, in the next tab.</p>
            </div>

            {/* ---------- Administration only ---------- */}
            <div>
              <p className="panel-intro">
                For plans that keep their own daily records and use MNM Pensions for administration,
                annual valuation and reporting.
              </p>

              <div className="panel-split">
                <div>
                  <div className="table-wrap">
                    <table className="fees">
                      <thead>
                        <tr><th>Annual fee</th><th className="n">Amount</th></tr>
                      </thead>
                      <tbody>
                        <tr className="base-row"><th scope="row">Base fee</th><td className="n">{usd(TPA_ONLY.base)}</td></tr>
                        {TPA_ONLY.tiers.map((t) => (
                          <tr key={t.range}>
                            <th scope="row">{t.range}</th>
                            <td className="n">{usd(t.rate)} each</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="note" style={{ textAlign: 'left' }}>
                    Each rate applies only to the participants inside its band.
                  </p>
                </div>

                <div className="card">
                  <span className="bubble amber"><Icon name="scale" /></span>
                  <h3>What plans like yours pay</h3>
                  <ul className="plain" style={{ marginTop: '0.5rem' }}>
                    {TPA_EXAMPLES.map((e) => (
                      <li key={e.participants}>
                        <Icon name="check" size={18} strokeWidth={2.4} />
                        <span><b>{e.participants} participants:</b> {usd(e.fee)} a year</span>
                      </li>
                    ))}
                  </ul>
                  <p className="cite">Illustrations, not quotes. Distributions are $50 each, on top of the annual fee.</p>
                </div>
              </div>

              <h3 className="subhead">Worked example</h3>
              <p className="subnote">
                A plan with {TPA_ONLY.example.participants} participants pays {usd(TPA_ONLY.base)} + 30 &times; $25 + 70 &times; $20 + 20 &times; $15 = {usd(TPA_ONLY.example.total)} a year.
              </p>
            </div>
          </Tabs>
        </div>
      </section>

      <section className="sec tint" aria-labelledby="incl">
        <div className="wrap">
          <SectionHead id="incl" title="What is included" />
          <div className="grid-2" style={{ maxWidth: '58rem', margin: '0 auto' }}>
            <div className="card">
              <span className="bubble"><Icon name="check" size={26} strokeWidth={2.4} /></span>
              <h3>Included</h3>
              <ul className="plain">
                {['Contribution processing and reconciliation', 'Terminations, eligibility and vesting', 'Distribution review and processing ($50 per distribution)', 'Annual reporting', 'Participant support', 'Daily recordkeeping and participant portal (daily recordkeeping option)'].map((t) => (
                  <li key={t}><Icon name="check" size={18} strokeWidth={2.4} />{t}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <span className="bubble amber"><Icon name="x" size={26} /></span>
              <h3>Not included</h3>
              <ul className="plain">
                {['Investment advice or fund management, which stay with your advisor and custodian', 'Legal and tax advice', 'Plan document restatement fees charged by document providers', 'Postage for mailed participant statements, billed at cost'].map((t) => (
                  <li key={t}><Icon name="x" size={18} />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
