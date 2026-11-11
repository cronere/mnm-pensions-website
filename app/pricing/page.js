import PageHero from '@/components/site/PageHero'
import ContactSection from '@/components/site/ContactSection'
import { PRICING } from '@/content/site'

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
                {/* CONFIRM: publish the TPA-only per-participant schedule */}
                <li>Per-participant fee schedule, quoted for your plan</li>
                <li>{PRICING.distribution} per distribution</li>
                <li>Annual report fee</li>
                <li>Annual valuation instead of daily</li>
              </ul>
            </div>
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
              {/* CONFIRM: annual reporting fee schedule */}
              Annual reporting is priced by plan size. Ask us for the schedule that fits yours.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
