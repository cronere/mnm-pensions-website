import PageHero from '@/components/site/PageHero'
import { SITE } from '@/content/site'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms for using the Merkley, Newman & McLaws, Inc. (MNM Pensions) website, participant portal and administrator platform.',
  alternates: { canonical: '/terms' },
}

export default function Terms() {
  return (
    <>
      <PageHero title="Terms of service" lede={`Last updated ${SITE.updated}.`} />
      <section className="sec">
        <div className="wrap legal">
          <p>
            These terms apply to your use of the {SITE.legalName} website, participant portal
            and administrator platform. By using them you agree to these terms. Services we
            provide to a plan sponsor are governed by the written agreement with that sponsor.
          </p>

          <h2>What we do and do not do</h2>
          <p>
            We administer plans and keep their records. We do not provide investment, legal or
            tax advice, and we do not select, recommend or manage plan investments. Information
            on this website is general and is not a recommendation for your situation.
          </p>

          <h2>Accounts</h2>
          <ul>
            <li>Keep your credentials confidential and tell us promptly if you think they were misused.</li>
            <li>You are responsible for activity under your account.</li>
            <li>Give accurate information when you claim or use an account. We may require additional verification before acting on a request.</li>
          </ul>

          <h2>Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>access an account or plan data that is not yours;</li>
            <li>interfere with the security or operation of our systems;</li>
            <li>scrape, copy or resell our content or data;</li>
            <li>use the services for anything unlawful.</li>
          </ul>

          <h2>Balances and transactions</h2>
          <p>
            Balances shown in the portal reflect our records as of the date and time shown and
            may change as contributions, corrections and market prices are posted. Where the
            plan document and the portal differ, the plan document controls.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The website, software and content are owned by {SITE.legalName} or its licensors.
            You may use them only as these terms allow.
          </p>

          <h2>Disclaimers and limits</h2>
          <p>
            The website and portal are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;
            To the extent the law allows, we are not liable for indirect or consequential
            damages arising from their use, and our total liability for any claim relating to
            the website or portal is limited to the amount you paid us for it, if any. Nothing
            here limits liability that cannot be limited by law, or any term of a written
            agreement with a plan sponsor.
          </p>

          <h2>Governing law</h2>
          <p>These terms are governed by the laws of the State of Arizona, without regard to conflict-of-law rules.</p>

          <h2>Changes</h2>
          <p>We may update these terms and will post the new version with its date. Continued use means you accept the update.</p>

          <h2>Contact</h2>
          <p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, {SITE.legalName}, {SITE.mail.street}, {SITE.mail.city}, {SITE.mail.region} {SITE.mail.zip}.
          </p>
        </div>
      </section>
    </>
  )
}
