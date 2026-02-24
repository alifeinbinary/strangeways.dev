import { scrollToId } from '../theme/utils'
import { Plasma } from './Plasma'

export default function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto max-w-7xl px-0 py-0 sm:px-4 sm:py-0"
    >
      <div className="fit-content relative overflow-hidden pt-12">
        <div className="absolute inset-0 z-0">
          <Plasma
            color="#b4d455"
            speed={0.6}
            direction="forward"
            scale={1.5}
            opacity={0.8}
            mouseInteractive={true}
          />
        </div>
        {/* Content */}
        <div className="relative z-20 flex h-full max-w-3xl items-end px-4 pb-8 text-neutral-900 dark:text-neutral-300 sm:px-4">
          <div>
            <h1 className="sm:text-5xl text-3xl font-semibold tracking-tight">
              Research & Development
            </h1>
            <p className="text-lg mt-4">
              We design and deliver web apps, embeddable devices, agentic AI,
              and self-hosted infrastructure for innovative companies. We help
              reduce costs and vendor lock-in, improve security and reliability,
              and move ideas from pilot to production with confidence.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId('services')
                }}
                className="text-sm inline-flex cursor-pointer items-center rounded-full border border-neutral-300 bg-white/80 px-4 py-2 font-medium text-neutral-900 backdrop-blur transition hover:bg-white dark:border-neutral-700 dark:bg-black/60 dark:text-neutral-200 dark:hover:bg-black"
              >
                See capabilities
              </a>
            </div>
            <p className="text-sm mt-3 text-neutral-700 dark:text-neutral-300/90">
              18+ years · Security-first · Performance at global scale ·
              Compliance-ready
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
