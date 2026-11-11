import { CLARENT_URL } from '@/content/site'
import PageHero from '@/components/site/PageHero'

export const metadata = {
  title: 'Sign in',
  description: 'Sign in to the MNM participant portal or the administrator platform.',
  robots: { index: false },
}

export default function SignIn() {
  return (
    <>
      <PageHero title="Sign in" lede="Choose the account that matches your role." />
      <section className="sec">
        <div className="wrap choose">
          <div className="door">
            <h2 style={{ fontSize: '1.6rem' }}>Participants</h2>
            <p>See your balance and activity. First time here? You can claim your account on the next page.</p>
            <a href={`${CLARENT_URL}/portal`} className="btn">Participant sign-in</a>
          </div>
          <div className="door">
            <h2 style={{ fontSize: '1.6rem' }}>Administrators</h2>
            <p>For MNM staff and college plan administrators. Send contribution files securely and find plan reports.</p>
            <a href={`${CLARENT_URL}/login`} className="btn">Administrator sign-in</a>
          </div>
        </div>
      </section>
    </>
  )
}
