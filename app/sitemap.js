const BASE = 'https://mnmpensions.com'
const PATHS = ['', '/services', '/plans', '/states', '/pricing', '/participants', '/about', '/contact', '/privacy', '/terms']

export default function sitemap() {
  const now = new Date()
  return PATHS.map((p) => ({
    url: BASE + p,
    lastModified: now,
    changeFrequency: p === '' ? 'monthly' : 'yearly',
    priority: p === '' ? 1 : 0.7,
  }))
}
