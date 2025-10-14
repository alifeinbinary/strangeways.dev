export type PortfolioItem = {
  id: string
  title: string
  url: string
  screenshot: string
  caseStudy: string
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'alifeinbinary',
    title: 'A Life in Binary',
    url: 'https://www.alifeinbinary.com',
    screenshot:
      '/alifeinbinary.webp',
    caseStudy:
      'Designed and built a performant serverless web application with an integrated music player, custom API, and audio visualiser. Built with React on the AWS platform.',
  },
  {
    id: 'stegg',
    title: 'Stegg',
    url: 'https://stegg.alifeinbinary.com',
    screenshot:
      '/stegg.webp',
    caseStudy:
      'Delivered a multilingual, SEO-optimized steganographic web application with a headless CMS, Lighthouse 95+ scores, and responsive design across devices.',
  },
  {
    id: 'strangeways',
    title: 'Strangeways Studios',
    url: 'https://strangeways.co',
    screenshot:
      '/strangeways.webp',
    caseStudy:
      'Built a serverless web application that sports an integrated music player, custom API, and 360 virtual tour. Built with React on the AWS platform.',
  },
  {
    id: 'musichall',
    title: 'Music Hall',
    url: 'https://musichall.band',
    screenshot:
      '/musichall.webp',
    caseStudy:
      'A static website for the band Music Hall. Built with React.',
  },
  {
    id: 'occupythemovie',
    title: 'Occupy The Movie',
    url: 'https://occupythemovie.com',
    screenshot:
      '/occupythemovie.webp',
    caseStudy:
      'A static website for the award winning documentary film Occupy: The Movie. Built with React.',
  },
  {
    id: 'attendtherapy',
    title: 'Attend Therapy',
    url: 'https://attendtherapy.com',
    screenshot:
      '/attendtherapy.webp',
    caseStudy:
      'A static website for the mental health platform Attend Therapy. Built with React.',
  }
]
