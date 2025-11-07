import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'
import PortfolioCard from './PortfolioCard'
import { useOutlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle } from '@fortawesome/free-solid-svg-icons'
import { scrollToId } from '../theme/utils'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import type { ResponsiveMasonryProps } from '../types'

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

    const filtered =
        selected.length === 0
            ? base
            : portfolio.filter((item) =>
                selected.every((tag) => item.tools.includes(tag))
            )

    function shuffleArray<T>(arr: T[]): T[] {
        const a = [...arr]
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
                ;[a[i], a[j]] = [a[j], a[i]]
        }
        return a
    }

    const handleShowMore = () =>
        setVisibleCount((c) => Math.min(c + 3, filtered.length))
    const handleShuffle = () => setBase((prev) => shuffleArray(prev))
    const handleCollapse = () => setVisibleCount(3)

    const allShown = visibleCount >= filtered.length
    const canShuffle = selected.length === 0 && filtered.length > 1 && !allShown
    const canShowMore = !allShown
    const canCollapse = allShown && filtered.length > 3
    const outlet = useOutlet()
    return (
        <section
            id="work"
            className="container-responsive cv-auto py-8 sm:py-12"
        >
            <div className="mb-6 flex items-end justify-between">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    Selected work
                </h2>
                <a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault()
                        scrollToId('contact')
                    }}
                    className="cursor-pointer text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                >
                    Hire us →
                </a>
            </div>
            <div className="transition-height mb-8 h-auto rounded-lg border border-neutral-200 p-4 duration-500 ease-in-out dark:border-neutral-700">
                {!outlet && filtered.length > 0 && (
                    <p>
                        Click on a portfolio item to view details about it in
                        this section.
                    </p>
                )}
                {outlet}
            </div>
            {selected.length > 0 && (
                <div className="mb-6 flex flex-wrap items-center gap-3">
                    <span className="text-sm text-neutral-600 dark:text-neutral-300">
                        Active filters:
                    </span>
                    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                        {selected.map((tag) => (
                            <li
                                key={tag}
                                className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs dark:bg-neutral-800"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        onClick={onClear}
                        className="ml-auto inline-flex cursor-pointer items-center gap-1 rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                        aria-label="Clear active filters"
                    >
                        Clear
                    </button>
                </div>
            )}
            <div className="" aria-live="polite">
                <ResponsiveMasonry
                    {...({
                        columnsCountBreakPoints: {
                            320: 2,
                            640: 2,
                            768: 3,
                            960: 3,
                        },
                        className: 'relative z-20',
                        gutterBreakPoints: {
                            320: '1rem',
                            768: '1rem',
                            960: '1rem',
                        },
                    } as ResponsiveMasonryProps)}
                >
                    <Masonry>
                        {filtered.slice(0, visibleCount).map((item) => (
                            <PortfolioCard key={item.id} item={item} />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            {filtered.length === 0 && (
                <p className="card max-w-1/1 sm:max-w-1/2 lg:max-w-1/3 rounded-lg text-center text-md text-neutral-600 dark:text-neutral-300">
                    We don't have any projects that match your filters but that doesn't mean we haven't worked with those tools before. Please <a className='cursor-pointer hover:underline' onClick={(e) => {
                        e.preventDefault()
                        scrollToId('contact')
                    }}>contact us</a> to discuss your project.
                </p>
            )}
            {(canShuffle || canShowMore || canCollapse) && (
                <div className="mt-6 flex items-center justify-center gap-3">
                    {canShuffle && (
                        <button
                            type="button"
                            onClick={handleShuffle}
                            className="inline-flex cursor-pointer items-center gap-1 rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                            aria-label="Shuffle work order"
                        >
                            <FontAwesomeIcon icon={faShuffle} />
                        </button>
                    )}
                    {canShowMore && (
                        <button
                            type="button"
                            onClick={handleShowMore}
                            className="inline-flex cursor-pointer items-center gap-1 rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                            aria-label="Show more work items"
                        >
                            Show more
                        </button>
                    )}
                    {canCollapse && (
                        <button
                            type="button"
                            onClick={handleCollapse}
                            className="inline-flex cursor-pointer items-center gap-1 rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                            aria-label="Collapse work items to first three"
                        >
                            Collapse
                        </button>
                    )}
                </div>
            )}
        </section>
    )
}
