import PageHero from '@/components/site/PageHero'
import ContactSection from '@/components/site/ContactSection'
import Photo from '@/components/site/Photo'
import Icon from '@/components/site/Icon'
import SectionHead from '@/components/site/SectionHead'
import { SITE, TEAM } from '@/content/site'

export const metadata = {
  title: 'About MNM: 30+ Years Administering Qualified Plans',
  description:
    'Merkley, Newman & McLaws, Inc. (MNM) has administered qualified retirement plans for more than 30 years and now focuses on non-ERISA governmental 401(a) money purchase plans.',
  alternates: { canonical: '/about' },
}

export default function About() {
  const [lead, ...rest] = TEAM
  return (
    <>
      <PageHero
        title="More than 30 years administering qualified plans."
        lede="Merkley, Newman & McLaws, Inc. (MNM) is a third-party administrator based in Queen Creek, Arizona. Today we focus on governmental 401(a) money purchase plans for colleges and school districts."
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead title="Experience in the plan, and in the software" />
          <div className="cols mid">
            <div className="prose">
              <p>
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
            <Photo ratio="4 / 3" src="/brand/office.jpg" alt="The MNM office" need="MNM office or team at work, landscape 4:3" />
          </div>
        </div>
      </section>

      <section className="sec tint" aria-labelledby="team">
        <div className="wrap">
          <SectionHead id="team" title="The team" sub="Four partners with decades of qualified plan experience between them." />
          <article className="team-lead">
            <Photo shape="circle" src={lead.photo} focus={lead.focus} alt={lead.name} need={`Headshot of ${lead.name}`} />
            <div>
              <h3>{lead.name}</h3>
              <span className="role">{lead.role}</span>
              <p>{lead.bio}</p>
            </div>
          </article>
          <div className="team">
            {rest.map((m) => (
              <article className="member" key={m.name}>
                <Photo shape="circle" src={m.photo} focus={m.focus} alt={m.name} need={`Headshot of ${m.name}`} />
                <h3>{m.name}</h3>
                <span className="role">{m.role}</span>
                <p>{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap center">
          <span className="bubble" style={{ margin: '0 auto 1rem' }}><Icon name="pin" /></span>
          <h2>Where to find us</h2>
          <address className="addr" style={{ marginTop: '1rem' }}>
            {SITE.legalName}<br />
            {SITE.mail.street}<br />
            {SITE.mail.city}, {SITE.mail.region} {SITE.mail.zip}
          </address>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
