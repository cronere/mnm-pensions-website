import PageHero from '@/components/site/PageHero'
import ContactSection from '@/components/site/ContactSection'
import Icon from '@/components/site/Icon'
import SectionHead from '@/components/site/SectionHead'
import StateMap from '@/components/site/StateMap'
import { STATES_HIGH } from '@/content/site'

export const metadata = {
  title: 'States Where Public Employees Use FICA Alternative Plans',
  description:
    'Where governmental 401(a) money purchase plans are most common: states whose public employees are often outside Social Security, and how coverage is decided.',
  alternates: { canonical: '/states' },
}

export default function States() {
  return (
    <>
      <PageHero
        title="Where these plans are most common."
        lede="Not every public employee is covered by Social Security. In some states, many are not."
      />

      <section className="sec" aria-labelledby="seven">
        <div className="wrap">
          <SectionHead
            id="seven"
            title="Seven states hold most of the uncovered public workforce."
            sub="According to the Congressional Research Service, these seven states account for about 81 percent of participants in public pension plans whose earnings are not covered by Social Security."
          />
          <StateMap />
          <p className="legend-list">{STATES_HIGH.join(' · ')}</p>
          <p className="cite center">
            Source: Congressional Research Service, 2021 and 2022 plan data,{' '}
            <a href="https://www.everycrsreport.com/reports/R47499.html" rel="noopener">report R47499</a>.
          </p>
        </div>
      </section>

      <section className="sec tint">
        <div className="wrap">
          <div className="grid-2">
            <div className="card">
              <span className="bubble"><Icon name="map" size={26} /></span>
              <h3>Coverage is decided locally</h3>
              <p>
                Whether a position is covered depends on the state, the employer and the
                employee&rsquo;s role. Many other states have uncovered groups too, such as
                particular employers or job classes. Your plan document and counsel decide who
                belongs in your plan.
              </p>
            </div>
            <div className="card">
              <span className="bubble amber"><Icon name="pin" size={26} /></span>
              <h3>Outside those seven states?</h3>
              <p>
                The plan rules are federal, and your plan is governed by its own document, so
                location does not decide whether we can administer it. Tell us where you are and
                what your plan looks like.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
