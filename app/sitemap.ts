import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://aicalledit.com'

  // Static pages
  const routes = [
    '',
    '/pricing',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Sports pages (if they exist)
  const sports = ['nfl', 'nba', 'mlb', 'nhl', 'soccer'].map((sport) => ({
    url: `${baseUrl}/sports/${sport}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))

  return [...routes, ...sports]
}
