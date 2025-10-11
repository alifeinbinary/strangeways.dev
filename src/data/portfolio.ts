export type PortfolioItem = {
  id: string
  title: string
  url: string
  screenshot: string
  caseStudy: string
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'example-1',
    title: 'Acme SaaS Dashboard',
    url: 'https://example.com/acme',
    screenshot:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    caseStudy:
      'Designed and built a performant analytics dashboard with role-based access, realtime charts, and a blazing-fast Next.js frontend. Implemented CI/CD and observability.',
  },
  {
    id: 'example-2',
    title: 'Globex Marketing Site',
    url: 'https://example.com/globex',
    screenshot:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    caseStudy:
      'Delivered a multilingual, SEO-optimized marketing site with a headless CMS, Lighthouse 95+ scores, and responsive design across devices.',
  },
  {
    id: 'example-3',
    title: 'Initech Mobile Web App',
    url: 'https://example.com/initech',
    screenshot:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    caseStudy:
      'Built a PWA with offline support, background sync, and push notifications. Reduced bundle size by 45% and improved TTI by 30%.',
  },
]
