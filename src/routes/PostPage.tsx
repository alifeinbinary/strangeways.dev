import { useLoaderData, useNavigate } from "react-router-dom";
import type { PortfolioItem } from "../data/portfolio";

type LoaderData = { item: PortfolioItem };

export default function PostPage() {
  const { item } = useLoaderData() as LoaderData;
  const navigate = useNavigate();
  return (
    <div className="mb-8 rounded-lg border border-neutral-200 p-4 dark:border-neutral-700">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <button
          type="button"
          onClick={() => navigate("/", { replace: true })}
          className="rounded-md border border-neutral-300 px-2 py-1 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
          aria-label="Close details"
        >
          Close
        </button>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
        <img
          src={item.screenshot}
          alt={item.title}
          className="w-full rounded-lg object-cover"
          loading="lazy"
        />
        <div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.caseStudy}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tools.map(t => (
              <span key={t} className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs dark:bg-neutral-800">{t}</span>
            ))}
          </div>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-blue-700 hover:underline dark:text-blue-400"
          >
            Visit site ↗
          </a>
        </div>
      </div>
    </div>
  );
}
