import PageHero from '@/components/site/PageHero'
import ContactSection from '@/components/site/ContactSection'
import { PRICING, TPA_ONLY, REPORT_DISCOUNT_EXAMPLES } from '@/content/site'

export const metadata = {
  title: 'Pricing: Transparent 401(a) Administration and Recordkeeping Fees',
  description:
    'One bundled fee of 0.50% of plan assets, capped at $500 per participant per year, plus $50 per distribution. See worked examples.',
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
          <div className="price-big">
            <div>
              <div className="fig">{PRICING.bundledBps}</div>
              <div className="lbl">of plan assets, per year</div>
              <p>Covers administration and recordkeeping.</p>
            </div>
            <div>
              <div className="fig">{PRICING.cap}</div>
              <div className="lbl">cap per participant, per year</div>
              <p>No participant pays more than this in a year.</p>
            </div>
            <div>
              <div className="fig">{PRICING.distribution}</div>
              <div className="lbl">per distribution</div>
              <p>Charged when a distribution is processed.</p>
            </div>
          </div>

          <h2 style={{ fontSize: '1.6rem' }}>How the cap works</h2>
          <p style={{ marginTop: '0.75rem' }}>
            The fee is 0.50 percent of each account balance, up to {PRICING.cap} a year. These
            are illustrations, not quotes.
          </p>
          <div className="table-wrap" style={{ marginTop: '1.25rem' }}>
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
      </section>

      <section className="sec" aria-labelledby="options">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="options">Two ways to work with us</h2>
          </div>
          <div className="split">
            <div className="pane us">
              <p className="tag">Most plans</p>
              <h3>Administration plus daily recordkeeping</h3>
              <ul>
                <li>{PRICING.bundledBps} of plan assets, capped at {PRICING.cap} per participant per year</li>
                <li>{PRICING.distribution} per distribution</li>
                <li>Annual report fee, discounted as plan assets grow</li>
                <li>Participant portal and daily valuation</li>
              </ul>
            </div>
            <div className="pane">
              <p className="tag">Administration only</p>
              <h3>Administration without daily recordkeeping</h3>
              <ul>
                <li>{usd(TPA_ONLY.base)} base fee, plus a per-participant fee (schedule below)</li>
                <li>{PRICING.distribution} per distribution</li>
                <li>Annual report fee</li>
                <li>Annual valuation instead of daily</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec wash" aria-labelledby="tpa-only">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="tpa-only">Administration-only fee schedule</h2>
            <p>
              A {usd(TPA_ONLY.base)} base fee, plus a per-participant fee that falls as the plan grows. Each
              rate applies only to the participants within its band.
            </p>
          </div>
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
          <p className="cite">
            Example: a plan with {TPA_ONLY.example.participants} participants pays {usd(TPA_ONLY.base)} + 30 &times; $25 + 70 &times; $20 + 20 &times; $15 = {usd(TPA_ONLY.example.total)}.
          </p>
        </div>
      </section>

      <section className="sec" aria-labelledby="report">
        <div className="wrap cols wide-left">
          <div>
            <h2 id="report">Annual report fee discount</h2>
            <p style={{ marginTop: '1rem' }}>
              The annual report fee is discounted as plan assets grow: no discount at $5 million, rising
              in a straight line to no annual report fee at $50 million and above.
            </p>
            <div className="table-wrap" style={{ marginTop: '1.5rem' }}>
              <table className="fees">
                <thead>
                  <tr><th>Plan assets</th><th className="n">Discount</th></tr>
                </thead>
                <tbody>
                  {REPORT_DISCOUNT_EXAMPLES.map((r) => (
                    <tr key={r.assets}><th scope="row">{r.assets === 50 ? '$50 million and above' : `$${r.assets} million`}</th><td className="n">{r.pct}%</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="aside">
            <h3>Between the steps</h3>
            <p>Discounts between these amounts are calculated on the same straight line.</p>
          </div>
        </div>
      </section>

      <section className="sec wash">
        <div className="wrap cols">
          <div>
            <h2>What is included</h2>
            <ul className="plain" style={{ marginTop: '1.25rem' }}>
              <li>Contribution processing and reconciliation</li>
              <li>Daily recordkeeping and participant access</li>
              <li>Terminations, eligibility and vesting</li>
              <li>Distribution review and processing (per-distribution fee applies)</li>
              <li>Participant support</li>
            </ul>
          </div>
          <div>
            <h2>Not included</h2>
            <ul className="plain" style={{ marginTop: '1.25rem' }}>
              <li>Investment advice or fund management, which stay with your advisor and custodian</li>
              <li>Legal and tax advice</li>
              <li>Plan document restatement fees charged by document providers</li>
            </ul>
            <p className="cite">
              {/* CONFIRM: publish the base annual report fee */}
              Annual report fee: quoted for your plan, then discounted as shown above.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
