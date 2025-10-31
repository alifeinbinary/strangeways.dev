import { tools, type Tools, type Tool } from "../data/tools"
import { Parallax } from "react-scroll-parallax"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type ToolsProps = {
    selected: string[]
    onToggle: (name: string) => void
}

export default function Tools({ selected, onToggle }: ToolsProps) {
    return (
        <section id="tools" className="container mx-auto max-w-7xl py-0 sm:py-4 px-0 sm:px-4">
            <div className="relative h-[500px] overflow-hidden">
                <div className="h-[500px] relative py-8 px-0 sm:px-4">
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
                                        const tipId = `tip-${tool.name.toLowerCase().replace(/\s+/g, '-')}`
                                        return (
                                            <li key={tool.name} className="relative group flex items-center align-middle">
                                                <button
                                                    type="button"
                                                    aria-pressed={isSelected}
                                                    aria-describedby={tipId}
                                                    onClick={() => onToggle(tool.name)}
                                                    className={[
                                                        "px-3 pt-1 w-auto h-auto cursor-pointer rounded-full text-[32px] transition-colors",
                                                        isSelected
                                                            ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                                                            : "bg-neutral-100 dark:bg-neutral-800 text-inherit"
                                                    ].join(" ")}
                                                >
                                                    <span className="inline-flex items-center gap-2 align-baseline">
                                                        {typeof tool.icon !== "string" ? (
                                                            <FontAwesomeIcon icon={tool.icon} style={{ color: "#7f95ff" }} />
                                                        ) : (
                                                            <img src={tool.icon} alt={tool.name} width={24} height={24} className="object-contain" />
                                                        )}
                                                        {/* <span>{tool.name}</span> */}
                                                    </span>
                                                </button>
                                                <span
                                                    id={tipId}
                                                    role="tooltip"
                                                    className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded text-xs bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap z-20 shadow-md"
                                                >
                                                    {tool.name}
                                                    <span className="absolute left-1/2 -translate-x-1/2 top-5 h-2 w-2 rotate-45 bg-neutral-900 dark:bg-white"></span>
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}