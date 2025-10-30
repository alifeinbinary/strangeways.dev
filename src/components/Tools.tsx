import { tools, type Tools, type Tool } from "../data/tools"
import { Parallax } from "react-scroll-parallax"
import ts from "../assets/typescript.svg"
import py from "../assets/python.svg"
import cf from "../assets/cloudflare.svg"
import react from "../assets/react.svg"
import payload from "../assets/payload.svg"
import webiny from "../assets/webiny.svg"
import sst from "../assets/sst.svg"
import aws from "../assets/aws.svg"
import ubuntu from "../assets/ubuntu.svg"

type ToolsProps = {
    selected: string[]
    onToggle: (name: string) => void
}

export default function Tools({ selected, onToggle }: ToolsProps) {
    return (
        <section id="tools" className="container py-0 sm:py-4 px-0 sm:px-4">
            <div className="relative h-[600px] overflow-hidden">
                <div className="h-[600px] relative py-8 px-0 sm:px-4">
                    {/* Parallaxed image */}
                    <Parallax translateY={[-20, 10]} disabled={false} className="absolute inset-0 z-0">
                        <picture>
                            <source
                                type="image/webp"
                                srcSet="/hero/coder-at-desk_480.webp 480w, /hero/coder-at-desk_768.webp 768w, /hero/coder-at-desk_960.webp 960w, /hero/coder-at-desk_1200.webp 1200w"
                                sizes="100vw"
                            />
                            <img
                                src="/hero/coder-at-desk_768.webp"
                                alt=""
                                className="h-full w-full object-cover scale-110"
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                            />
                        </picture>
                    </Parallax>

                    {/* Gradient overlay */}
                    <div
                        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-transparent via-white/60 dark:to-black/90 dark:via-black/60 to-white/90"
                        aria-hidden="true"
                    />

                    <div className="mb-8 max-w-3xl relative z-20">
                        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Tools</h2>
                        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                            We love building beautifully crafted, performant web digital products with the right tools. Select the tools you are interested in to filter out relevant projects where we've used those technologies.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 pt-3 sm:grid-cols-4 lg:grid-cols-4 relative z-20">
                        {tools.map((toolGroup: Tools) => (
                            <article key={toolGroup.label} className="card flex flex-col overflow-hidden">
                                <h3 className="pb-3 text-lg font-semibold tracking-tight">{toolGroup.label}</h3>
                                <ul className="flex flex-wrap gap-4 list-none p-0">
                                    {toolGroup.tools.map((tool: Tool) => {
                                        const isSelected = selected.includes(tool.name)
                                        return (
                                            <li key={tool.name}>
                                                <button
                                                    type="button"
                                                    aria-pressed={isSelected}
                                                    onClick={() => onToggle(tool.name)}
                                                    className={[
                                                        "px-3 py-1.5 cursor-pointer rounded-full text-sm transition-colors",
                                                        isSelected
                                                            ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                                                            : "bg-neutral-100 dark:bg-neutral-800 text-inherit"
                                                    ].join(" ")}
                                                >
                                                    {tool.name}
                                                </button>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </article>
                        ))}
                    </div>
                    <p className="mt-8 text-center text-sm text-neutral-700 dark:text-neutral-300 relative z-20">
                        Selected technologies we design, deploy, and operate
                    </p>
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-6 relative z-30">
                        <img src={ts} width={64} height={64} alt="TypeScript" />
                        <img src={py} width={64} height={64} alt="Python" />
                        <img src={cf} width={64} height={64} alt="Cloudflare" />
                        <img src={aws} width={64} height={64} alt="AWS" />
                        <img src={react} width={64} height={64} alt="React" />
                        <img src={payload} width={64} height={64} alt="Payload" />
                        <img src={sst} width={64} height={64} alt="SST" />
                        <img src={webiny} width={64} height={64} alt="Webiny" />
                        <img src={ubuntu} width={64} height={64} alt="Ubuntu" />
                    </div>
                </div>
            </div>
        </section>
    )
}