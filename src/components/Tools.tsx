import { tools, type Tools, type Tool } from "../data/tools"

export default function Tools() {
    return (
        <section id="tools" className="container-responsive py-16">
            <div className="w-full max-w-none">
                <h2>Tools</h2>
                <p>We love building beautifully crafted, performant web digital products with the right tools.</p>
                <div className="grid grid-cols-1 gap-6 pt-3 sm:grid-cols-4 lg:grid-cols-4">
                    {tools.map((tool: Tools) => (
                        <article className="card flex flex-col overflow-hidden">
                            <h3 className="pb-3 text-lg font-semibold tracking-tight">{tool.label}</h3>
                            <ul className="flex flex-wrap gap-4 list-none p-0">
                                {tool.tools.map((tool: Tool) => (
                                    <li key={tool.name} className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm">{tool.name}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}