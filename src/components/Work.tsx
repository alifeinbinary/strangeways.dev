import { portfolio } from "../data/portfolio"
import PortfolioCard from "./PortfolioCard"

export default function Work() {
    return (
        <section id="work" className="container-responsive py-8 sm:py-12">
            <div className="mb-6 flex items-end justify-between">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Selected work</h2>
                <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                    Hire us →
                </a>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {portfolio.map((item) => (
                    <PortfolioCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}