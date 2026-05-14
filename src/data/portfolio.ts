export interface PortfolioItem {
  id: string
  title: string
  url: string
  screenshot: string
  shortDescription: string
  caseStudy: string
  outcomes?: Record<number, string>
  tools: string[]
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'alifeinbinary',
    title: 'A Life in Binary',
    url: 'https://www.alifeinbinary.com',
    screenshot: '/media/portfolio/alifeinbinary/alifeinbinary_768.webp',
    shortDescription:
      'Designed and delivered a serverless React app with a custom music API, streaming player, and real-time audio visualiser—fully owned by the client to avoid SaaS lock-in.',
    caseStudy:
      'A film composer needed a modern, fully owned platform to host and manage a growing catalogue—without paying for another SaaS or accepting vendor lock-in. We built a serverless React application with a custom music API and Webiny CMS, deployed on AWS (Lambda, DynamoDB, S3, CloudFront, SES) using Pulumi IaC for repeatable, auditable releases. The experience features a bespoke streaming player and a responsive Three.js background that reacts to the music in real time via FFT analysis, creating an immersive listening environment that performs well on both desktop and mobile. To keep ownership end-to-end, we implemented self-hosted tooling for the mailing list, social scheduling, and analytics so the client controls data and channels outright.',
    outcomes: {
      0: 'Owned platform with no third-party lock-in; the client controls catalogue, content, and data.',
      1: 'Replaced Mailchimp, SoundCloud, and social scheduling SaaS with self-hosted tools; ~${1500}/year savings in aggregate.',
      2: 'FFT-driven Three.js visualiser decreased bounce rate and increased average visit duration by ~200%.',
      3: 'Average Lighthouse score ~90+ across key pages.',
      4: 'Custom API avoided a $15/month third-party subscription (included in the savings above).',
      5: 'Serverless architecture reduced ops overhead while supporting smooth streaming and scale.',
      6: 'Webiny headless CMS enabled simple, secure publishing without sacrificing performance.',
      7: 'Pulumi IaC ensured reproducible deployments and clean handoff of infra as code.',
    },
    tools: [
      'React',
      'AWS',
      'Cloudflare',
      'Tailwind CSS',
      'TypeScript',
      'Webiny',
      'Git',
      'Node.js',
    ],
  },
  {
    id: 'stegg',
    title: 'Stegg',
    url: 'https://stegg.alifeinbinary.com',
    screenshot: '/media/portfolio/stegg/stegg_768.webp',
    shortDescription:
      'Delivered a multilingual, SEO-optimised steganographic web application with a headless CMS, Lighthouse 95+ scores, and responsive design across devices.',
    caseStudy:
      'Delivered a multilingual, SEO-optimised steganographic web application with a headless CMS, Lighthouse 95+ scores, and responsive design across devices.',
    outcomes: {
      0: 'Multilingual',
      1: 'SEO-optimised',
      2: 'Steganographic web application',
      3: 'Headless CMS',
      4: 'Lighthouse 95+ scores',
      5: 'Responsive design across devices',
    },
    tools: [
      'React',
      'Github',
      'Cloudflare',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'Git',
      'AWS',
      'Webiny',
    ],
  },
  {
    id: 'ollami',
    title: 'Ollami',
    url: 'https://github.com/alifeinbinary/ollami',
    screenshot: '/media/portfolio/ollami/ollami_768.webp',
    shortDescription:
      'Ollami is a cross-platform desktop application that allows users to run AI models locally. Built with SvelteKit and Python.',
    caseStudy:
      'Ollami is a cross-platform desktop application that allows users to run AI models locally. Built with SvelteKit and Python.',
    outcomes: {
      0: 'Cross-platform desktop application',
      1: 'Run AI models locally',
      2: 'Built with SvelteKit and Python',
    },
    tools: [
      'SvelteKit',
      'Python',
      'Tailwind CSS',
      'TypeScript',
      'Docker',
      'Git',
    ],
  },
  {
    id: 'strangeways',
    title: 'Strangeways Studios',
    url: 'https://strangeways.co',
    screenshot: '/media/portfolio/strangeways/strangeways_768.webp',
    shortDescription:
      'Built a serverless web application that sports an integrated music player, custom API, and 360 virtual tour. Built with React on the AWS platform.',
    caseStudy:
      'Built a serverless web application that sports an integrated music player, custom API, and 360 virtual tour. Built with React on the AWS platform.',
    outcomes: {
      0: 'Serverless web application',
      1: 'Integrated music player',
      2: 'Custom API',
      3: '360 virtual tour',
      4: 'Built with React on the AWS platform',
    },
    tools: [
      'React',
      'AWS',
      'Cloudflare',
      'Webiny',
      'Tailwind CSS',
      'TypeScript',
      'Git',
      'Node.js',
    ],
  },
  {
    id: 'musichall',
    title: 'Music Hall',
    url: 'https://musichall.band',
    screenshot: '/media/portfolio/musichall/musichall_768.webp',
    shortDescription:
      'A static website for the band Music Hall. Built with React.',
    caseStudy: 'A static website for the band Music Hall. Built with React.',
    outcomes: {
      0: 'Static website',
      1: 'Built with React',
    },
    tools: [
      'React',
      'Netlify',
      'Cloudflare',
      'Tailwind CSS',
      'TypeScript',
      'Git',
    ],
  },
  {
    id: 'occupythemovie',
    title: 'Occupy The Movie',
    url: 'https://occupythemovie.com',
    screenshot: '/media/portfolio/occupythemovie/occupythemovie_768.webp',
    shortDescription:
      'A static website for the award winning documentary film Occupy: The Movie. Built with React.',
    caseStudy:
      'A static website for the award winning documentary film Occupy: The Movie. Built with React.',
    outcomes: {
      0: 'Static website',
      1: 'Built with React',
    },
    tools: [
      'React',
      'Netlify',
      'Cloudflare',
      'Tailwind CSS',
      'TypeScript',
      'Git',
    ],
  },
  {
    id: 'vancouversublets',
    title: 'Vancouver Sublets',
    url: 'https://www.vancouversublets.ca',
    screenshot: '/media/portfolio/vancouversublets/vancouversublets_768.webp',
    shortDescription:
      'Transformed an unfinished rental platform into a high-performance, AI-discoverable listing site—then launched a data-driven paid campaign that generated over a million impressions and tens of thousands of clicks in its first week.',
    caseStudy:
      'With FIFA 2026 bringing tens of thousands of international visitors to Vancouver, a local sublet platform had a narrow window to capture a surge in demand for short-term rentals. The site was live but incomplete: ~36-second homepage load time, unoptimised images, minimal SEO, no analytics, and no acquisition strategy. We completed and optimised the platform for broader reach.\n\nPerformance came first. We replaced placeholder imagery with real listings, optimised images in modern formats, and enabled CDN delivery. We then instrumented the full stack: Google Analytics, Google Tag Manager, and Meta Pixel. We also authored a structured llms.txt and generated Markdown versions of every listing, making the catalogue directly ingestible by AI search engines like ChatGPT, Perplexity, and Claude.\n\nWith tracking live, we ran rapid A/B testing across key source markets to identify converting audiences and creatives. That intelligence shaped the full campaign rollout: targeted paid ads across Meta, Reddit, and Google, aimed at high-budget international travellers in cities with strong World Cup followings—London, Madrid, Paris, Rome, and Dubai. Real-time performance data enabled rapid pivots on creative and targeting, sustaining low CPC as we scaled.\n\nCompleted in 5 business days. Daily visitors grew from 125 to 2,000 (16x), and daily events from 150 to 7,000 (47x). The first week of the campaign delivered over one million impressions and tens of thousands of clicks.',
    outcomes: {
      0: 'Daily visitors increased from 125 to 2,000 (16x growth).',
      1: 'Daily events increased from 150 to 7,000 (47x growth).',
      2: 'Page load time reduced from ~36 seconds to sub-3 seconds.',
      3: 'Over 1,000,000 ad impressions in the first week of the campaign.',
      4: 'Tens of thousands of clicks delivered at a sustainable cost-per-click.',
      5: 'llms.txt and per-listing Markdown files published for AI search discoverability.',
      6: 'Multi-channel paid campaign across Meta, Reddit, and Google targeting international travellers.',
      7: 'Project completed in 5 business days.',
    },
    tools: [
      'Next.js',
      'React',
      'TypeScript',
      'Vercel',
      'Google Analytics',
      'Meta Ads',
      'Reddit Ads',
    ],
  },
  {
    id: 'attendtherapy',
    title: 'Attend Therapy',
    url: 'https://attendtherapy.com',
    screenshot: '/media/portfolio/attendtherapy/attendtherapy_768.webp',
    shortDescription:
      'A static website for the mental health platform Attend Therapy. Built with React.',
    caseStudy:
      'A static website for the mental health platform Attend Therapy. Built with React.',
    outcomes: {
      0: 'Static website',
      1: 'Built with React',
    },
    tools: ['React', 'Netlify', 'Bootstrap', 'TypeScript', 'Git'],
  },
]
