export type PortfolioItem = {
    id: string
    title: string
    url: string
    screenshot: string
    shortDescription: string
    caseStudy: string
    outcomes?: { [key: number]: string }
    tools: string[]
}

export const portfolio: PortfolioItem[] = [
    {
        id: 'alifeinbinary',
        title: 'A Life in Binary',
        url: 'https://www.alifeinbinary.com',
        screenshot: '/portfolio/alifeinbinary/alifeinbinary_768.webp',
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
        screenshot: '/portfolio/stegg/stegg_768.webp',
        shortDescription:
            'Delivered a multilingual, SEO-optimized steganographic web application with a headless CMS, Lighthouse 95+ scores, and responsive design across devices.',
        caseStudy:
            'Delivered a multilingual, SEO-optimized steganographic web application with a headless CMS, Lighthouse 95+ scores, and responsive design across devices.',
        outcomes: {
            0: 'Multilingual',
            1: 'SEO-optimized',
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
        screenshot: '/portfolio/ollami/ollami_768.webp',
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
        screenshot: '/portfolio/strangeways/strangeways_768.webp',
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
        screenshot: '/portfolio/musichall/musichall_768.webp',
        shortDescription:
            'A static website for the band Music Hall. Built with React.',
        caseStudy:
            'A static website for the band Music Hall. Built with React.',
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
        screenshot: '/portfolio/occupythemovie/occupythemovie_768.webp',
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
        id: 'attendtherapy',
        title: 'Attend Therapy',
        url: 'https://attendtherapy.com',
        screenshot: '/portfolio/attendtherapy/attendtherapy_768.webp',
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
