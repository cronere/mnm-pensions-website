import Link from 'next/link'
import { CLARENT_URL, SITE, NAV } from '@/content/site'
import { Mark } from './Header'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          <div>
            <Mark />
            <p>
              Administration and daily recordkeeping for non-ERISA governmental
              money purchase plans at colleges and school districts.
            </p>
          </div>
          <div>
            <h4>Firm</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
              ))}
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Sign in</h4>
            <ul>
              <li><a href={`${CLARENT_URL}/portal`}>Participant sign-in</a></li>
              <li><a href={`${CLARENT_URL}/login`}>Administrator sign-in</a></li>
            </ul>
          </div>
          <div>
            <h4>Related</h4>
            <ul>
              <li>
                {SITE.partner.url ? (
                  <a href={SITE.partner.url} rel="noopener">{SITE.partner.name}</a>
                ) : (
                  <span>{SITE.partner.name}</span>
                )}
              </li>
              <li><Link href="/privacy">Privacy policy</Link></li>
              <li><Link href="/terms">Terms of service</Link></li>
            </ul>
          </div>
        </div>
        <div className="fine">
          <span>
            &copy; {year} {SITE.legalName} &middot; {SITE.mail.street}, {SITE.mail.city}, {SITE.mail.region} {SITE.mail.zip}
            &middot; <a href={SITE.phoneHref}>{SITE.phone}</a>
          </span>
          <span>
            {SITE.legalName} is a third-party administrator and recordkeeper. We do not provide
            investment, legal or tax advice, and we do not select or manage plan investments.
          </span>
        </div>
      </div>
    </footer>
  )
}
