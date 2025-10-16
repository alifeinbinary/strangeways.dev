import { tools, type Tools, type Tool } from "../data/tools"

type ToolsProps = {
    selected: string[]
    onToggle: (name: string) => void
}

export default function Tools({ selected, onToggle }: ToolsProps) {
    return (
        <section id="tools" className="container-responsive py-16">
            <div className="w-full max-w-none">
                <div className="mb-8 max-w-3xl">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Tools</h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                        We love building beautifully crafted, performant web digital products with the right tools.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 pt-3 sm:grid-cols-4 lg:grid-cols-4">
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
            </div>
        </section>
    )
}