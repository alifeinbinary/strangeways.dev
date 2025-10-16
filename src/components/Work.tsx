import { portfolio } from "../data/portfolio"
import PortfolioCard from "./PortfolioCard"

type WorkProps = {
    selected: string[]
}

export default function Work({ selected }: WorkProps) {
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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((item) => (
                    <PortfolioCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}