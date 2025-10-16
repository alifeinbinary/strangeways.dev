
export type Tool = {
    name: string
    icon: string
}

export type Tools = {
    label: string
    tools: Tool[]
}

export const tools: Tools[] = [
    {
        label: "Languages",
        tools: [
            {
                name: "TypeScript",
                icon: ""
            },
            {
                name: "JavaScript",
                icon: ""
            },
            {
                name: "PHP",
                icon: ""
            },
            {
                name: "Python",
                icon: ""
            },
            {
                name: "Bash",
                icon: ""
            }
        ]
    },
    {
        label: "Frontend",
        tools: [
            {
                name: "Next.js",
                icon: ""
            },
            {
                name: "React",
                icon: ""
            },
            {
                name: "SvelteKit",
                icon: ""
            },
            {
                name: "Tailwind CSS",
                icon: ""
            },
            {
                name: "Bootstrap",
                icon: ""
            }
        ]
    },
    {
        label: "Backend",
        tools: [
            {
                name: "Node.js",
                icon: ""
            },
            {
                name: "PHP",
                icon: ""
            },
            {
                name: "Python",
                icon: ""
            },
            {
                name: "Django",
                icon: ""
            },
            {
                name: "Laravel",
                icon: ""
            }
        ]
    },
    {
        label: "DevOps",
        tools: [
            {
                name: "Docker",
                icon: ""
            },
            {
                name: "Git",
                icon: ""
            },
            {
                name: "GitHub",
                icon: ""
            },
            {
                name: "Netlify",
                icon: ""
            },
            {
                name: "AWS",
                icon: ""
            },
            {
                name: "Cloudflare",
                icon: ""
            },
            {
                name: "DigitalOcean",
                icon: ""
            },
            {
                name: "Ubuntu Server",
                icon: ""
            }
        ]
    }
]
