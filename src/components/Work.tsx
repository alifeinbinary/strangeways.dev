import { faShuffle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMemo, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useOutlet } from 'react-router-dom'
import { portfolio } from '../data/portfolio'
import { scrollToId } from '../theme/utils'
import type { ResponsiveMasonryProps } from '../types'
import PortfolioCard from './PortfolioCard'

interface WorkProps {
  selected: string[]
  onClear: () => void
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

type PortfolioItem = (typeof portfolio)[number]

export default function Work({ selected, onClear }: WorkProps) {
  const [shuffleNonce, setShuffleNonce] = useState(0)
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({})

  const selectedKey = selected.join('|')
  const visibleCount = visibleCounts[selectedKey] ?? 3

  const filtered = useMemo<PortfolioItem[]>(() => {
    if (selected.length === 0) {
      void shuffleNonce
      return shuffleArray(portfolio)
    }

    return portfolio.filter((item) =>
      selected.every((tag) => item.tools.includes(tag))
    )
  }, [selected, shuffleNonce])

  const handleShowMore = () => {
    setVisibleCounts((prev) => {
      const current = prev[selectedKey] ?? 3
      return { ...prev, [selectedKey]: Math.min(current + 3, filtered.length) }
    })
  }
  const handleShuffle = () => {
    setShuffleNonce((n) => n + 1)
  }
  const handleCollapse = () => {
    setVisibleCounts((prev) => ({ ...prev, [selectedKey]: 3 }))
  }

  const allShown = visibleCount >= filtered.length
  const canShuffle = selected.length === 0 && filtered.length > 1 && !allShown
  const canShowMore = !allShown
  const canCollapse = allShown && filtered.length > 3
  const outlet = useOutlet()

  return (
    <section id="work" className="container-responsive cv-auto py-12 sm:py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="sm:text-4xl text-3xl font-bold tracking-tight">
            Selected Work
          </h2>
          <p className="text-lg mt-2 text-neutral-600 dark:text-neutral-300">
            Explore our portfolio of innovative digital solutions
          </p>
        </div>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            scrollToId('contact')
          }}
          className="text-sm inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 font-medium text-white shadow-md transition-colors duration-200 hover:bg-brand-700 hover:shadow-lg"
        >
          Hire us
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      <div className="bg-linear-to-br mb-8 min-h-[200px] rounded-xl border border-neutral-200 from-neutral-50 to-neutral-100 p-6 transition-all duration-500 ease-in-out dark:border-neutral-700 dark:from-neutral-900 dark:to-neutral-800">
        {!outlet && filtered.length > 0 && (
          <div className="py-8 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-100">
              <svg
                className="h-8 w-8 text-brand-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              Click on any project below to view detailed information
            </p>
          </div>
        )}
        {outlet}
      </div>

      {selected.length > 0 && (
        <div className="mb-8 flex flex-wrap items-center gap-3 rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Active filters:
          </span>
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
            {selected.map((tag) => (
              <li
                key={tag}
                className="text-sm inline-flex items-center gap-1 rounded-full bg-brand-100 px-3 py-1.5 font-medium text-brand-800 dark:bg-brand-900 dark:text-brand-200"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => {
                    onClear()
                  }}
                  className="ml-1 text-brand-600 hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-100"
                  aria-label={`Remove ${tag} filter`}
                >
                  <svg
                    className="h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={onClear}
            className="text-sm ml-auto inline-flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2 font-medium text-neutral-700 transition-colors duration-200 hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600"
            aria-label="Clear all active filters"
          >
            Clear all
          </button>
        </div>
      )}

      <div className="" aria-live="polite">
        <ResponsiveMasonry
          {...({
            columnsCountBreakPoints: {
              320: 1,
              640: 2,
              768: 2,
              960: 3,
              1280: 3,
            },
            className: 'relative z-20',
            gutterBreakPoints: {
              320: '1.5rem',
              768: '1.5rem',
              960: '2rem',
            },
          } as ResponsiveMasonryProps)}
        >
          <Masonry>
            {filtered.slice(0, visibleCount).map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <PortfolioCard item={item} />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100">
            <svg
              className="h-10 w-10 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h-.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            No matching projects
          </h3>
          <p className="text-lg mx-auto max-w-md text-neutral-600 dark:text-neutral-300">
            We don't have any projects that match your filters, but that doesn't
            mean we haven't worked with those tools before.
          </p>
          <div className="mt-6">
            <a
              className="text-sm inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-medium text-white shadow-md transition-colors duration-200 hover:bg-brand-700 hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('contact')
              }}
            >
              Contact us to discuss your project
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      )}

      {(canShuffle || canShowMore || canCollapse) && (
        <div className="mt-8 flex items-center justify-center gap-4">
          {canShuffle && (
            <button
              type="button"
              onClick={handleShuffle}
              className="text-sm inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2 font-medium text-neutral-700 transition-all duration-200 hover:bg-neutral-50 hover:shadow-md dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600"
              aria-label="Shuffle work order"
            >
              <FontAwesomeIcon icon={faShuffle} />
              Shuffle
            </button>
          )}
          {canShowMore && (
            <button
              type="button"
              onClick={handleShowMore}
              className="text-sm inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-200 hover:bg-brand-700 hover:shadow-lg"
              aria-label="Show more work items"
            >
              Show more
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          )}
          {canCollapse && (
            <button
              type="button"
              onClick={handleCollapse}
              className="text-sm inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2 font-medium text-neutral-700 transition-all duration-200 hover:bg-neutral-50 hover:shadow-md dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600"
              aria-label="Collapse work items to first three"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
              Collapse
            </button>
          )}
        </div>
      )}
    </section>
  )
}
