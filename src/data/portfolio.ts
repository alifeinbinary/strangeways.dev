export type PortfolioItem = {
  id: string
  title: string
  url: string
  screenshot: string
  caseStudy: string
  tools: string[]
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'alifeinbinary',
    title: 'A Life in Binary',
    url: 'https://www.alifeinbinary.com',
    screenshot: '/portfolio/alifeinbinary/alifeinbinary_768.webp',
    caseStudy:
      'Designed and built a performant serverless web application with an integrated music player, custom API, and audio visualiser. Built with React on the AWS platform.',
    tools: ['React', 'AWS', 'Cloudflare', 'Tailwind CSS', 'TypeScript', 'Webiny', 'Git', 'Node.js']
  },
  {
    id: 'stegg',
    title: 'Stegg',
    url: 'https://stegg.alifeinbinary.com',
    screenshot: '/portfolio/stegg/stegg_768.webp',
    caseStudy:
      'Delivered a multilingual, SEO-optimized steganographic web application with a headless CMS, Lighthouse 95+ scores, and responsive design across devices.',
    tools: ['React', 'Github', 'Cloudflare', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Git', 'AWS', 'Webiny']
  },
  {
    id: 'ollami',
    title: 'Ollami',
    url: 'https://github.com/alifeinbinary/ollami',
    screenshot: '/portfolio/ollami/ollami_768.webp',
    caseStudy:
      'Ollami is a cross-platform desktop application that allows users to run AI models locally. Built with SvelteKit and Python.',
    tools: ['SvelteKit', 'Python', 'Tailwind CSS', 'TypeScript', 'Docker', 'Git']
  },
  {
    id: 'strangeways',
    title: 'Strangeways Studios',
    url: 'https://strangeways.co',
    screenshot: '/portfolio/strangeways/strangeways_768.webp',
    caseStudy:
      'Built a serverless web application that sports an integrated music player, custom API, and 360 virtual tour. Built with React on the AWS platform.',
    tools: ['React', 'AWS', 'Cloudflare', 'Webiny', 'Tailwind CSS', 'TypeScript', 'Git', 'Node.js']
  },
  {
    id: 'musichall',
    title: 'Music Hall',
    url: 'https://musichall.band',
    screenshot: '/portfolio/musichall/musichall_768.webp',
    caseStudy:
      'A static website for the band Music Hall. Built with React.',
    tools: ['React', 'Netlify', 'Cloudflare', 'Tailwind CSS', 'TypeScript', 'Git']
  },
  {
    id: 'occupythemovie',
    title: 'Occupy The Movie',
    url: 'https://occupythemovie.com',
    screenshot: '/portfolio/occupythemovie/occupythemovie_768.webp',
    caseStudy:
      'A static website for the award winning documentary film Occupy: The Movie. Built with React.',
    tools: ['React', 'Netlify', 'Cloudflare', 'Tailwind CSS', 'TypeScript', 'Git']
  },
  {
    id: 'attendtherapy',
    title: 'Attend Therapy',
    url: 'https://attendtherapy.com',
    screenshot: '/portfolio/attendtherapy/attendtherapy_768.webp',
    caseStudy:
      'A static website for the mental health platform Attend Therapy. Built with React.',
    tools: ['React', 'Netlify', 'Bootstrap', 'TypeScript', 'Git']
  }
]
