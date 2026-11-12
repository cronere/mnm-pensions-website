import SectionHead from './SectionHead'
import ClientLogo from './ClientLogo'
import { CLIENTS } from '@/content/site'

export default function ClientsSection({ tint = false, id = 'clients' }) {
  return (
    <section className={`sec${tint ? ' tint' : ''}`} aria-labelledby={`${id}-h`}>
      <div className="wrap">
        <SectionHead
          id={`${id}-h`}
          title="Plans we administer"
          sub="Are you a participant? If your college is listed here, MNM Pensions keeps the records for your plan."
        />
        <ul className="clients">
          {CLIENTS.map((c) => (
            <li className="client" key={c.name}>
              <div className="lg-box"><ClientLogo src={c.logo} name={c.name} /></div>
              <span className="nm">{c.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
