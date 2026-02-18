import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { Parallax } from 'react-scroll-parallax'
import { tools, type Tool, type Tools } from '../data/tools'

interface ToolsProps {
  selected: string[]
  onToggle: (name: string) => void
}

export default function Tools({ selected, onToggle }: ToolsProps) {
  const selectedCount = selected.length

  return (
    <section
      id="tools"
      className="container mx-auto max-w-7xl px-0 py-0 sm:px-4 sm:py-4"
    >
      <div className="fit-content relative overflow-hidden">
        <div className="fit-content relative px-4 py-8">
          {/* Parallaxed image */}
          <Parallax
            translateY={[-20, 10]}
            disabled={false}
            className="absolute inset-0 z-0"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="/media/hero/coder-at-desk_480.webp 480w, /media/hero/coder-at-desk_768.webp 768w, /media/hero/coder-at-desk_960.webp 960w, /media/hero/coder-at-desk_1200.webp 1200w"
                sizes="100vw"
              />
              <img
                src="/media/hero/coder-at-desk_768.webp"
                alt="Coders at work"
                className="h-full w-full scale-110 object-cover"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </Parallax>

          {/* Enhanced gradient overlay */}
          <div
            className="bg-linear-to-t pointer-events-none absolute inset-0 z-10 from-transparent via-white/70 to-white/95 dark:via-black/70 dark:to-black/95"
            aria-hidden="true"
          />

          <div className="relative z-20 mb-6 max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="sm:text-4xl text-3xl font-bold tracking-tight">
                Tools
              </h2>
              {selectedCount > 0 && (
                <span className="text-sm inline-flex items-center rounded-full bg-brand-100 px-3 py-1 font-medium text-brand-800 dark:bg-brand-900 dark:text-brand-200">
                  {selectedCount} selected
                </span>
              )}
            </div>
            <p className="text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
              We love building beautifully crafted, performant web digital
              products with the right tools. Select the technologies you're
              interested in to filter relevant projects from our portfolio.
            </p>
          </div>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}
            className="relative z-20"
          >
            <Masonry>
              {tools.map((toolGroup: Tools) => (
                <article
                  key={toolGroup.label}
                  className="card group/tool-category transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                      {toolGroup.label}
                    </h3>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">
                      {toolGroup.tools.length} tools
                    </div>
                  </div>
                  <ul className="flex list-none flex-wrap gap-2 p-0">
                    {toolGroup.tools.map((tool: Tool) => {
                      const isSelected = selected.includes(tool.name)
                      const tipId = `tip-${tool.name.toLowerCase().replace(/\s+/g, '-')}`
                      return (
                        <li
                          key={tool.name}
                          className="group relative flex items-center align-middle"
                        >
                          <button
                            type="button"
                            aria-pressed={isSelected}
                            aria-describedby={tipId}
                            aria-label={`Toggle ${tool.name} filter`}
                            onClick={() => {
                              onToggle(tool.name)
                            }}
                            className={[
                              'h-16 w-16 cursor-pointer rounded-2xl p-3 text-[28px] transition-all duration-300 hover:scale-110 hover:shadow-md',
                              isSelected
                                ? 'bg-linear-to-br from-brand-500 to-brand-600 text-white shadow-lg ring-2 ring-brand-500 ring-offset-2 dark:ring-offset-neutral-900'
                                : 'bg-brand-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700',
                            ].join(' ')}
                          >
                            <span className="inline-flex h-full w-full items-center justify-center">
                              {typeof tool.icon !== 'string' ? (
                                <FontAwesomeIcon
                                  icon={tool.icon}
                                  className={isSelected ? 'text-white' : ''}
                                  style={{
                                    color: isSelected ? undefined : '#9cbf3b',
                                  }}
                                />
                              ) : (
                                <img
                                  src={tool.icon}
                                  alt={tool.name}
                                  width={24}
                                  height={24}
                                  className="object-contain"
                                />
                              )}
                            </span>
                          </button>
                          <span
                            id={tipId}
                            role="tooltip"
                            className="text-sm pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-neutral-900 px-3 py-2 font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 dark:bg-white dark:text-neutral-900"
                          >
                            {tool.name}
                            <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 rotate-45 bg-neutral-900 dark:bg-white"></span>
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </article>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  )
}
