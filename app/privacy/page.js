import PageHero from '@/components/site/PageHero'
import { SITE } from '@/content/site'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Merkley, Newman & McLaws, Inc. (MNM) collects, uses and protects information on this website and in the participant portal.',
  alternates: { canonical: '/privacy' },
}

export default function Privacy() {
  return (
    <>
      <PageHero title="Privacy policy" lede={`Last updated ${SITE.updated}.`} />
      <section className="sec">
        <div className="wrap legal">
          <p>
            This policy explains how {SITE.legalName} (&ldquo;MNM,&rdquo; &ldquo;we&rdquo;) handles
            information on this website, in our participant portal and in our administrator
            platform.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li><b>Website inquiries.</b> Name, organization, email, phone and the message you send us.</li>
            <li><b>Account information.</b> Email address and sign-in credentials for portal and platform users.</li>
            <li><b>Plan records.</b> To administer a plan we hold participant information supplied by the plan sponsor, such as name, date of birth, contact details, Social Security number, compensation, contributions, balances and distribution history.</li>
            <li><b>Technical data.</b> Basic logs such as IP address, browser type and pages requested, used to keep the service secure and working.</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To administer plans and keep their records, including processing contributions, terminations, distributions and reports.</li>
            <li>To verify identity and secure accounts.</li>
            <li>To respond to inquiries and provide support.</li>
            <li>To meet legal, tax and audit obligations.</li>
          </ul>

          <h2>Plan data belongs to the plan</h2>
          <p>
            Participant and plan records are held on behalf of the plan sponsor. We use them
            only to provide our services to that sponsor and its participants.
          </p>

          <h2>Sharing</h2>
          <p>
            We do not sell personal information and we do not use it for advertising. We share
            it only with the plan sponsor, with the participant&rsquo;s own custodian or
            payer as needed to complete a transaction, with service providers who host or
            secure our systems under confidentiality obligations, and when the law requires.
          </p>

          <h2>Security</h2>
          <p>
            We use access controls, encryption in transit and at rest, and role-based
            permissions. No system is perfectly secure, so we limit the data we collect and
            who can see it.
          </p>

          <h2>Cookies</h2>
          <p>
            The public pages of this site do not use advertising or tracking cookies. Signed-in
            areas use cookies needed to keep you signed in.
          </p>

          <h2>Retention</h2>
          <p>
            We keep plan records for as long as the plan sponsor&rsquo;s agreement and
            applicable record-retention rules require. Website inquiries are kept as long as
            needed to respond and for reasonable business records.
          </p>

          <h2>Your choices</h2>
          <p>
            Participants can ask to see or correct their information through their plan
            sponsor or by contacting us. Some records we are required to keep, so we may not
            be able to delete them.
          </p>

          <h2>Changes</h2>
          <p>We will post changes here and update the date above.</p>

          <h2>Contact</h2>
          <p>
            {SITE.legalName}, {SITE.mail.street}, {SITE.mail.city}, {SITE.mail.region} {SITE.mail.zip}. Email{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}
