import { faAws, faBootstrap, faCloudflare, faCss, faDigitalOcean, faDocker, faGit, faGithub, faJs, faLaravel, faNode, faPhp, faPython, faReact, faUbuntu, faWordpressSimple, type IconDefinition } from "@fortawesome/free-brands-svg-icons"
import ts from "../assets/typescript.svg"
import payload from "../assets/payload.svg"
import webiny from "../assets/webiny.svg"
import sst from "../assets/sst.svg"
import tailwind from "../assets/tailwind.svg"
import sveltekit from "../assets/sveltekit.svg"

export type Tool = {
    name: string
    icon: string | IconDefinition
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
                icon: ts
            },
            {
                name: "JavaScript",
                icon: faJs
            },
            {
                name: "PHP",
                icon: faPhp
            },
            {
                name: "Python",
                icon: faPython
            },
            // {
            //     name: "Bash",
            //     icon: ""
            // }
        ]
    },
    {
        label: "Frontend",
        tools: [
            // {
            //     name: "Next.js",
            //     icon: ""
            // },
            {
                name: "React",
                icon: faReact
            },
            {
                name: "Tailwind",
                icon: tailwind
            },
            {
                name: "CSS",
                icon: faCss
            },
            {
                name: "Bootstrap",
                icon: faBootstrap
            },
            {
                name: "SvelteKit",
                icon: sveltekit
            }
        ]
    },
    {
        label: "Backend",
        tools: [
            {
                name: "Node.js",
                icon: faNode
            },
            {
                name: "Payload CMS",
                icon: payload
            },
            {
                name: "Webiny",
                icon: webiny
            },
            {
                name: "SST",
                icon: sst
            },
            // {
            //     name: "Medusa",
            //     icon: ""
            // },
            // {
            //     name: "Django",
            //     icon: ""
            // },
            // {
            //     name: "Flask",
            //     icon: ""
            // },
            {
                name: "Laravel",
                icon: faLaravel
            },
            {
                name: "Wordpress",
                icon: faWordpressSimple
            }
        ]
    },
    {
        label: "DevOps",
        tools: [
            {
                name: "Docker",
                icon: faDocker
            },
            {
                name: "Git",
                icon: faGit
            },
            {
                name: "GitHub",
                icon: faGithub
            },
            // {
            //     name: "Netlify",
            //     icon: ""
            // },
            {
                name: "AWS",
                icon: faAws
            },
            {
                name: "Cloudflare",
                icon: faCloudflare
            },
            {
                name: "DigitalOcean",
                icon: faDigitalOcean
            },
            {
                name: "Ubuntu Server",
                icon: faUbuntu
            }
        ]
    }
]
