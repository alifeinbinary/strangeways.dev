import type { PortfolioItem } from '../data/portfolio'

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const baseDir = `/portfolio/${item.id}/`
  const baseName = item.id
  const srcSet = [320, 480, 640, 768, 960, 1200]
    .map((w) => `${baseDir}${baseName}_${w}.webp ${w}w`)
    .join(', ')
  const sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
  return (
    <article className="card flex flex-col overflow-hidden">
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="group relative block aspect-[13/9] overflow-hidden rounded-lg">
        <img
          src={item.screenshot}
          srcSet={srcSet}
          sizes={sizes}
          alt={item.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
          width={13}
          height={9}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition group-hover:opacity-100" />
      </a>
      <div className="mt-4">
        <h3 className="text-lg font-semibold leading-tight">
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {item.title}
          </a>
        </h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{item.caseStudy}</p>
      </div>
    </article>
  )
}
