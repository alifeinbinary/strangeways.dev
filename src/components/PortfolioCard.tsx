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
    <Link to={`/${item.id}`} className="group relative block rounded-lg">
      <article
        className="card flex flex-col overflow-hidden hover:bg-neutral-600 dark:hover:bg-neutral-300"
        data-aos="fade-up"
      >
        <img
          src={item.screenshot}
          srcSet={srcSet}
          sizes={sizes}
          alt={item.title}
          className="aspect-13/9 h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
          width={13}
          height={9}
        />

        <div className="bg-linear-to-t pointer-events-none absolute inset-0 from-black/5 to-transparent opacity-0 transition group-hover:opacity-100" />

        <div className="mt-4">
          <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
          <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-300">
            {item.shortDescription}
          </p>
        </div>
      </article>
    </Link>
  )
}
