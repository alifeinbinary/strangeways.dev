import { Parallax } from "react-scroll-parallax"
import { scrollToId } from "../theme/utils"

export default function Hero() {
    return (
        <section id="hero" className="container mx-auto max-w-7xl py-0 sm:py-4 px-0 sm:px-4">
            <div className="relative fit-content pt-16 overflow-hidden">
                {/* Parallaxed image */}
                <Parallax translateY={[-20, 20]} disabled={false} className="absolute inset-0 z-0">
                    <picture>
                        <source
                            type="image/webp"
                            srcSet="/hero/cool-room_480.webp 480w, /hero/cool-room_768.webp 768w, /hero/cool-room_960.webp 960w, /hero/cool-room_1200.webp 1200w"
                            sizes="100vw"
                        />
                        <img
                            src="/hero/cool-room_768.webp"
                            alt=""
                            className="h-full w-full object-cover scale-110"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </picture>
                </Parallax>

                {/* Gradient overlay */}
                <div
                    className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-white/90 via-white/60 dark:from-black/90 dark:via-black/60 to-transparent"
                    aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-20 flex h-full max-w-3xl items-end text-neutral-900 dark:text-neutral-300 px-4 sm:px-4 pb-8">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl text-shadow-lg/10 text-shadow-neutral-300 dark:text-shadow-none">
                            Modern applications, AI, and infrastructure—built for control and scale
                        </h1>
                        <p className="mt-4 text-lg">
                            We design and deliver web apps, embeddable devices, agentic AI, and self-hosted infrastructure. Reduce costs and lock-in, improve security and reliability, and move from pilot to production with confidence.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToId('services') }} className="inline-flex items-center cursor-pointer rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-900 backdrop-blur transition hover:bg-white dark:border-neutral-700 dark:bg-black/60 dark:text-neutral-200 dark:hover:bg-black">
                                See capabilities
                            </a>
                        </div>
                        <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300/90">
                            18+ years · Security-first · Performance at global scale · Compliance-ready
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}