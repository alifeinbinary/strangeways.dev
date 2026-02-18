import { Link } from 'react-router-dom'
import type { PortfolioItem } from '../data/portfolio'

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const baseDir = `/media/portfolio/${item.id}/`
  const baseName = item.id
  const srcSet = [320, 480, 680, 768, 960, 1200]
    .map((w) => `${baseDir}${baseName}_${String(w)}.webp ${String(w)}w`)
    .join(', ')
  const sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'

  return (
    <Link to={`/${item.id}`} className="group relative block">
      <article
        className="card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        data-aos="fade-up"
      >
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={item.screenshot}
            srcSet={srcSet}
            sizes={sizes}
            alt={item.title}
            className="aspect-video w-full object-cover transition-all duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            width={16}
            height={9}
          />

          {/* Overlay gradient */}
          <div className="bg-linear-to-t absolute inset-0 from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Quick view indicator */}
          <div className="absolute right-4 top-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="text-sm inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 font-medium text-neutral-900 shadow-lg backdrop-blur-sm">
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              View details
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-start justify-between">
            <h3 className="text-xl font-bold leading-tight text-neutral-900 transition-colors duration-200 group-hover:text-brand-600 dark:text-neutral-100 dark:group-hover:text-brand-400">
              {item.title}
            </h3>
            <div className="opacity-0 transition-all duration-300 group-hover:opacity-100">
              <svg
                className="h-5 w-5 text-brand-600"
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
            </div>
          </div>

          <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
            {item.shortDescription}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {item.tools.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className="text-xs inline-flex items-center rounded-full bg-neutral-200 px-2 py-1 font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {tool}
                </span>
              ))}
              {item.tools.length > 3 && (
                <span className="text-xs inline-flex items-center rounded-full bg-neutral-200 px-2 py-1 font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                  +{item.tools.length - 3}
                </span>
              )}
            </div>

            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              <svg
                className="mr-1 inline h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Visit
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
