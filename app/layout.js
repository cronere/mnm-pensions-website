import '@fontsource-variable/newsreader'
import '@fontsource-variable/public-sans'
import './site.css'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'

export const metadata = {
  metadataBase: new URL('https://mnmpensions.com'),
  title: {
    default: '401(a) Money Purchase Plan Administration for Colleges | MNM Pensions',
    template: '%s | MNM Pensions',
  },
  description:
    'MNM administers and keeps the daily records for non-ERISA governmental 401(a) money purchase plans at colleges and school districts. One firm, start to finish.',
  openGraph: {
    type: 'website',
    siteName: 'MNM Pensions',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <a className="skip" href="#main">Skip to content</a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
