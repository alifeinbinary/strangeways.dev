import { portfolio } from "../data/portfolio"
import PortfolioCard from "./PortfolioCard"

type WorkProps = {
    selected: string[]
    onClear: () => void
}

export default function Work({ selected, onClear }: WorkProps) {
    const filtered = selected.length === 0
        ? portfolio
        : portfolio.filter((item) => selected.every((tag) => item.tools.includes(tag)))
    return (
        <section id="work" className="container-responsive py-8 sm:py-12 cv-auto">
            <div className="mb-6 flex items-end justify-between">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Selected work</h2>
                <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                    Hire us →
                </a>
            </div>
            {selected.length > 0 && (
                <div className="mb-6 flex flex-wrap items-center gap-3">
                    <span className="text-sm text-neutral-600 dark:text-neutral-300">Active filters:</span>
                    <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                        {selected.map((tag) => (
                            <li key={tag} className="px-2.5 py-1 rounded-full text-xs bg-neutral-100 dark:bg-neutral-800">
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        onClick={onClear}
                        className="ml-auto inline-flex items-center gap-1 rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                        aria-label="Clear active filters"
                    >
                        Clear
                    </button>
                </div>
            )}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((item) => (
                    <PortfolioCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}