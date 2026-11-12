import PageHero from '@/components/site/PageHero'
import ContactSection from '@/components/site/ContactSection'

export const metadata = {
  title: 'Contact',
  description: 'Talk to MNM Pensions about moving or starting a governmental 401(a) money purchase plan.',
  alternates: { canonical: '/contact' },
}

export default function Contact() {
  return (
    <>
      <PageHero title="Talk to someone who knows these plans." lede="Tell us about your institution and your plan. We will tell you honestly whether we are a fit." />
      <ContactSection id="contact-form" />
    </>
  )
}
