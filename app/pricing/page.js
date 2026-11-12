import PageHero from '@/components/site/PageHero'
import ContactSection from '@/components/site/ContactSection'
import Icon from '@/components/site/Icon'
import SectionHead from '@/components/site/SectionHead'
import {
  PRICING,
  TPA_ONLY,
  ANNUAL_REPORT,
  REPORT_EXAMPLES,
  REPORT_DISCOUNT_EXAMPLES,
} from '@/content/site'

export const metadata = {
  title: 'Pricing: Transparent 401(a) Administration and Recordkeeping Fees',
  description:
    'One bundled fee of 0.50% of plan assets, capped at $500 per participant per year, plus $50 per distribution and a published annual report fee. See worked examples.',
  alternates: { canonical: '/pricing' },
}

const usd = (n) => '$' + n.toLocaleString('en-US')

export default function Pricing() {
  return (
    <>
      <PageHero
        title="One bundled fee, published."
        lede="Administration and daily recordkeeping are priced together, so there is one number to budget."
      />

      <section className="sec">
        <div className="wrap">
          <div className="stats">
            <div className="stat">
              <span className="bubble amber"><Icon name="chart" /></span>
              <div className="fig">{PRICING.bundledBps}</div>
              <div className="lbl">of plan assets, per year</div>
              <p>Covers administration and recordkeeping.</p>
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

          <div style={{ marginTop: 'clamp(3rem, 6vw, 4.5rem)' }}>
            <SectionHead
              title="How the cap works"
              sub="The fee is 0.50 percent of each account balance, up to $500 a year. These are illustrations, not quotes."
            />
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
          </div>
        </div>
      </section>

      <section className="sec tint" aria-labelledby="options">
        <div className="wrap">
          <SectionHead id="options" title="Two ways to work with us" />
          <div className="split">
            <div className="pane us">
              <span className="bubble"><Icon name="layers" /></span>
              <h3>Administration plus daily recordkeeping</h3>
              <ul>
                <li><Icon name="check" size={18} strokeWidth={2.4} />{PRICING.bundledBps} of plan assets, capped at {PRICING.cap} per participant per year</li>
                <li><Icon name="check" size={18} strokeWidth={2.4} />{PRICING.distribution} per distribution</li>
                <li><Icon name="check" size={18} strokeWidth={2.4} />Annual report fee, discounted as plan assets grow</li>
                <li><Icon name="check" size={18} strokeWidth={2.4} />Participant portal and daily valuation</li>
              </ul>
            </div>
            <div className="pane">
              <span className="bubble"><Icon name="file" /></span>
              <h3>Administration without daily recordkeeping</h3>
              <ul>
                <li><Icon name="check" size={18} strokeWidth={2.4} />{usd(TPA_ONLY.base)} base fee, plus a per-participant fee (schedule below)</li>
                <li><Icon name="check" size={18} strokeWidth={2.4} />{PRICING.distribution} per distribution</li>
                <li><Icon name="check" size={18} strokeWidth={2.4} />Annual report fee at the standard rate</li>
                <li><Icon name="check" size={18} strokeWidth={2.4} />Annual valuation instead of daily</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="tpa-only">
        <div className="wrap">
          <SectionHead
            id="tpa-only"
            title="Administration-only fee schedule"
            sub={`A ${usd(TPA_ONLY.base)} base fee, plus a per-participant fee that falls as the plan grows. Each rate applies only to the participants within its band.`}
          />
          <div className="table-wrap">
            <table className="fees">
              <thead>
                <tr><th>Participants</th><th className="n">Fee per participant</th></tr>
              </thead>
              <tbody>
                {TPA_ONLY.tiers.map((t) => (
                  <tr key={t.range}><th scope="row">{t.range}</th><td className="n">{usd(t.rate)}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note">
            Example: a plan with {TPA_ONLY.example.participants} participants pays {usd(TPA_ONLY.base)} + 30 &times; $25 + 70 &times; $20 + 20 &times; $15 = {usd(TPA_ONLY.example.total)}.
          </p>
        </div>
      </section>

      <section className="sec tint" aria-labelledby="report">
        <div className="wrap">
          <SectionHead
            id="report"
            title="Annual processing and reporting"
            sub={`${usd(ANNUAL_REPORT.base)} base fee plus ${usd(ANNUAL_REPORT.perParticipant)} per participant. Postage for mailed participant statements is billed at cost.`}
          />
          <div className="table-wrap">
            <table className="fees">
              <thead>
                <tr><th>Example plan</th><th className="n">Fee before discount</th><th className="n">Discount</th><th className="n">Annual fee</th></tr>
              </thead>
              <tbody>
                {REPORT_EXAMPLES.map((r) => (
                  <tr key={r.detail}>
                    <th scope="row">{r.label}<br /><span style={{ fontWeight: 400, color: 'var(--ink-3)', fontSize: '0.9rem' }}>{r.detail}</span></th>
                    <td className="n">{usd(r.gross)}</td>
                    <td className="n">{r.pct}%</td>
                    <td className="n">{usd(r.net)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note">Illustrations, not quotes. The discount applies to plans that also use MNM Pensions for daily recordkeeping.</p>

          <div style={{ marginTop: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            <SectionHead
              title="Annual report discount"
              sub="For plans with daily recordkeeping, the annual fee is discounted as plan assets grow: none at $5 million, rising in a straight line to no annual report fee at $50 million and above."
            />
            <div className="table-wrap">
              <table className="fees">
                <thead>
                  <tr><th>Plan assets</th><th className="n">Discount</th></tr>
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
            <p className="note">Amounts between these steps follow the same straight line.</p>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="incl">
        <div className="wrap">
          <SectionHead id="incl" title="What is included" />
          <div className="grid-2" style={{ maxWidth: '58rem', margin: '0 auto' }}>
            <div className="card">
              <span className="bubble"><Icon name="check" size={26} strokeWidth={2.4} /></span>
              <h3>Included</h3>
              <ul className="plain">
                {['Contribution processing and reconciliation', 'Daily recordkeeping and participant access (daily recordkeeping plans)', 'Terminations, eligibility and vesting', 'Distribution review and processing (per-distribution fee applies)', 'Participant support'].map((t) => (
                  <li key={t}><Icon name="check" size={18} strokeWidth={2.4} />{t}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <span className="bubble amber"><Icon name="x" size={26} /></span>
              <h3>Not included</h3>
              <ul className="plain">
                {['Investment advice or fund management, which stay with your advisor and custodian', 'Legal and tax advice', 'Plan document restatement fees charged by document providers'].map((t) => (
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
