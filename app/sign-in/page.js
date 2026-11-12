import Link from 'next/link'
import PageHero from '@/components/site/PageHero'
import Icon from '@/components/site/Icon'
import { LOGIN, SITE } from '@/content/site'

export const metadata = {
  title: 'Sign in',
  description: 'Sign in to the MNM Pensions participant portal or the administrator site.',
  robots: { index: false },
}

export default function SignIn() {
  return (
    <>
      <PageHero title="Sign in to MNM Pensions" lede="Choose the account that matches your role." />
      <section className="sec">
        <div className="wrap choose">
          <div className="card door">
            <span className="bubble lg"><Icon name="user" size={30} /></span>
            <h2>Participants</h2>
            <p>See your balance and account activity. First time here? You can claim your account on the next page.</p>
            <a href={LOGIN.participant} className="btn">Participant sign-in</a>
          </div>
          <div className="card door">
            <span className="bubble lg amber"><Icon name="lock" size={30} /></span>
            <h2>Administrators</h2>
            <p>For MNM Pensions staff and college plan administrators. Send contribution files securely and find plan reports.</p>
            <a href={LOGIN.admin} className="btn">Administrator sign-in</a>
          </div>
        </div>
        <div className="wrap">
        <p className="center note">
          Trouble signing in? Call {SITE.phone}, {SITE.phoneNote}, or <Link href="/contact" style={{ textDecoration: 'underline' }}>send us a message</Link>.
        </p>
        </div>
      </section>
    </>
  )
}
