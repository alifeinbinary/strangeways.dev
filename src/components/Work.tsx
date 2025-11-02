import { useEffect, useState } from "react"
import { portfolio } from "../data/portfolio"
import PortfolioCard from "./PortfolioCard"
import { Outlet } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShuffle } from "@fortawesome/free-solid-svg-icons"
import { scrollToId } from "../theme/utils"

type WorkProps = {
    selected: string[]
    onClear: () => void
}

export default function Work({ selected, onClear }: WorkProps) {
    const [base, setBase] = useState(portfolio)
    const [visibleCount, setVisibleCount] = useState(3)

    // Shuffle base order when no filters are active
    useEffect(() => {
        if (selected.length === 0) {
            setBase(shuffleArray(portfolio))
        }
    }, [selected])

    // Reset visible count whenever filters change
    useEffect(() => {
        setVisibleCount(3)
    }, [selected])

    const filtered = selected.length === 0
        ? base
        : portfolio.filter((item) => selected.every((tag) => item.tools.includes(tag)))

    function shuffleArray<T>(arr: T[]): T[] {
        const a = [...arr]
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
                ;[a[i], a[j]] = [a[j], a[i]]
        }
        return a
    }

    const handleShowMore = () => setVisibleCount((c) => Math.min(c + 3, filtered.length))
    const handleShuffle = () => setBase((prev) => shuffleArray(prev))
    const handleCollapse = () => setVisibleCount(3)

    const allShown = visibleCount >= filtered.length
    const canShuffle = selected.length === 0 && filtered.length > 1 && !allShown
    const canShowMore = !allShown
    const canCollapse = allShown && filtered.length > 3
    return (
        <section id="work" className="container-responsive py-8 sm:py-12 cv-auto">
            <div className="mb-6 flex items-end justify-between">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Selected work</h2>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId('contact') }} className="text-sm cursor-pointer text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                    Hire us →
                </a>
            </div>
            <div className="mb-8 rounded-lg border border-neutral-200 p-4 h-auto dark:border-neutral-700 transition-height duration-500 ease-in-out">
                <Outlet />
            </div>
            {
                selected.length > 0 && (
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
                            className="ml-auto cursor-pointer inline-flex items-center gap-1 rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                            aria-label="Clear active filters"
                        >
                            Clear
                        </button>
                    </div>
                )
            }
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
                {filtered.slice(0, visibleCount).map((item) => (
                    <PortfolioCard key={item.id} item={item} />
                ))}
            </div>
            {
                (canShuffle || canShowMore || canCollapse) && (
                    <div className="mt-6 flex items-center justify-center gap-3">
                        {canShuffle && (
                            <button
                                type="button"
                                onClick={handleShuffle}
                                className="inline-flex items-center gap-1 cursor-pointer rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                                aria-label="Shuffle work order"
                            >
                                <FontAwesomeIcon icon={faShuffle} />
                            </button>
                        )}
                        {canShowMore && (
                            <button
                                type="button"
                                onClick={handleShowMore}
                                className="inline-flex items-center gap-1 cursor-pointer rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                                aria-label="Show more work items"
                            >
                                Show more
                            </button>
                        )}
                        {canCollapse && (
                            <button
                                type="button"
                                onClick={handleCollapse}
                                className="inline-flex items-center gap-1 cursor-pointer rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                                aria-label="Collapse work items to first three"
                            >
                                Collapse
                            </button>
                        )}
                    </div>
                )
            }
        </section >
    )
}