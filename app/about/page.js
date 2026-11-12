import PageHero from '@/components/site/PageHero'
import ContactSection from '@/components/site/ContactSection'
import Photo from '@/components/site/Photo'
import { SITE, TEAM } from '@/content/site'

export const metadata = {
  title: 'About MNM: 20+ Years Administering Qualified Plans',
  description:
    'Merkley, Newman & McLaws, Inc. (MNM) has administered qualified retirement plans for more than 20 years and now focuses on non-ERISA governmental 401(a) money purchase plans.',
  alternates: { canonical: '/about' },
}

export default function About() {
  return (
    <>
      <PageHero
        title="More than 20 years administering qualified plans."
        lede="Merkley, Newman & McLaws, Inc. (MNM) is a third-party administrator based in Queen Creek, Arizona. Today we focus on governmental 401(a) money purchase plans for colleges and school districts."
      />

      <section className="sec">
        <div className="wrap cols wide-left">
          <div>
            <h2>Experience in the plan, and in the software</h2>
            <p style={{ marginTop: '1rem' }}>
              Our partners have worked in qualified plans since the 1980s. That background
              covers plan design, plan documents, defined contribution plan administration
              and the day-to-day work of getting participant records right.
            </p>
            <p>
              We now concentrate that experience on one kind of plan: non-ERISA governmental
              money purchase plans used by colleges and school districts. It is a narrow
              field with its own rules and its own calendar, and focus is how we serve it
              well.
            </p>
            <p>
              We also run our own recordkeeping platform, built for these plans. It is why
              one firm can own the administration and the daily records together.
            </p>
          </div>
          <Photo
            ratio="4 / 3"
            alt="MNM office"
            src="/office.jpg"
            need="MNM office or team at work, landscape 4:3"
          />
        </div>
      </section>

      <section className="sec wash" aria-labelledby="team">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="team">The team</h2>
            <p>
              Four partners with decades of qualified plan experience between them.
            </p>
          </div>
          <article className="team-lead">
            <Photo shape="circle" src={TEAM[0].photo} alt={TEAM[0].name} need={`Headshot of ${TEAM[0].name}`} />
            <div>
              <h3>{TEAM[0].name}</h3>
              <span className="tag" style={{ display: 'block', fontWeight: 600, color: 'var(--blue)', margin: '0.15rem 0 0.75rem' }}>{TEAM[0].role}</span>
              <p>{TEAM[0].bio}</p>
            </div>
          </article>
          <div className="team">
            {TEAM.slice(1).map((m) => (
              <article className="member" key={m.name}>
                <Photo shape="circle" src={m.photo} alt={m.name} need={`Headshot of ${m.name}`} />
                <h3>{m.name}</h3>
                <span className="tag">{m.role}</span>
                <p>{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap cols">
          <div>
            <h2>Where to find us</h2>
            <address className="addr" style={{ marginTop: '1rem' }}>
              {SITE.legalName}<br />
              {SITE.mail.street}<br />
              {SITE.mail.city}, {SITE.mail.region} {SITE.mail.zip}
            </address>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
