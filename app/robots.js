export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/sign-in'] }],
    sitemap: 'https://mnmpensions.com/sitemap.xml',
  }
}
