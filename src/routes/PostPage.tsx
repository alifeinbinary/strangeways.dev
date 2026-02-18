import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLoaderData, useNavigate } from 'react-router-dom'
import type { PortfolioItem } from '../data/portfolio'

interface LoaderData {
  item: PortfolioItem
}

export default function PostPage() {
  const { item } = useLoaderData<LoaderData>()
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      {/* Header with close button */}
      <div
        className="flex items-start justify-between gap-4"
        data-aos="fade-in"
      >
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            {item.title}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-2 px-3 py-1.5 font-medium text-brand-600 transition-colors duration-200 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Visit live site
            </a>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            void navigate('/', { replace: true })
          }}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white text-neutral-700 transition-all duration-200 hover:bg-neutral-50 hover:shadow-md dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600"
          aria-label="Close details"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      {/* Main content grid */}
      <div
        className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        data-aos="fade-in"
        data-aos-delay="100"
      >
        {/* Screenshot */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700">
            <img
              src={item.screenshot}
              alt={item.title}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-brand-600 dark:text-brand-400">
                {item.tools.length}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-300">
                Technologies
              </div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-brand-600 dark:text-brand-400">
                {Object.keys(item.outcomes ?? {}).length}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-300">
                Key Outcomes
              </div>
            </div>
          </div>
        </div>

        {/* Project details */}
        <div className="space-y-6">
          {/* Case Study */}
          <section>
            <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-neutral-900 dark:text-neutral-100">
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Case Study
            </h4>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
                {item.caseStudy}
              </p>
            </div>
          </section>

          {/* Outcomes */}
          {item.outcomes && Object.keys(item.outcomes).length > 0 && (
            <section>
              <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-neutral-900 dark:text-neutral-100">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Key Outcomes
              </h4>
              <ul className="space-y-3">
                {Object.values(item.outcomes).map((outcome, index) => (
                  <li
                    key={
                      'outcome-' +
                      String(index) +
                      '-' +
                      outcome.slice(0, 20).replace(/\s+/g, '-')
                    }
                    className="flex items-start gap-3 rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800"
                  >
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    <span className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Technology Stack */}
          <section>
            <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-neutral-900 dark:text-neutral-100">
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-sm inline-flex items-center rounded-full border border-brand-200 bg-brand-100 px-3 py-1.5 font-medium text-brand-800 dark:border-brand-700 dark:bg-brand-900 dark:text-brand-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Call to action */}
          <div className="border-t border-neutral-200 pt-4 dark:border-neutral-700">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-3 rounded-lg bg-brand-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-200 hover:bg-brand-700 hover:shadow-lg"
            >
              <svg
                className="h-5 w-5"
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
              Visit Live Project
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
      </div>
    </div>
  )
}
