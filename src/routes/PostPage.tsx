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
    <>
      <div
        className="flex items-start justify-between gap-4"
        data-aos="fade-in"
      >
        <h3 className="pl-6 text-xl font-semibold">{item.title}</h3>
        <button
          type="button"
          onClick={() => {
            void navigate('/', { replace: true })
          }}
          className="text-sm cursor-pointer rounded-md border border-neutral-300 px-2 py-1 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
          aria-label="Close details"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div
        className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2"
        data-aos="fade-in"
      >
        <img
          src={item.screenshot}
          alt={item.title}
          className="w-full rounded-lg object-cover"
          loading="lazy"
        />
        <div>
          <h4 className="text-lg pb-1 pt-2 font-semibold">Case study</h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            {item.caseStudy}
          </p>
          <h4 className="text-lg pb-1 pt-2 font-semibold">Outcomes</h4>
          <ul className="list-inside list-disc">
            {Object.values(item.outcomes ?? {}).map((outcome) => (
              <li
                key={outcome}
                className="text-sm text-neutral-600 dark:text-neutral-300"
              >
                {outcome}
              </li>
            ))}
          </ul>
          <h4 className="text-lg pb-1 pt-2 font-semibold">Stack</h4>
          <div className="mt-1 flex flex-wrap gap-2">
            {item.tools.map((t) => (
              <span
                key={t}
                className="text-xs rounded-full bg-neutral-100 px-2.5 py-1 dark:bg-neutral-800"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm mt-4 inline-block text-blue-700 hover:underline dark:text-blue-400"
          >
            Visit site ↗
          </a>
        </div>
      </div>
    </>
  )
}
