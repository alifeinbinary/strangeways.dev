import { Parallax } from "react-scroll-parallax"

export default function Hero() {
    return (
        <section id="hero" className="container py-0 sm:py-4 px-0 sm:px-4">
            <div className="relative h-[500px] overflow-hidden">
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
                    className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-white/90 via-white/60 dark:from-black/90 dark:via-black/60 to-transparent"
                    aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-20 flex h-full max-w-3xl items-end text-neutral-900 dark:text-neutral-300 px-4 sm:px-4 pb-8">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                            Modern web and application development
                        </h1>
                        <p className="mt-4 text-lg">
                            We bring 18 years of experience to the table, delivering Minimal, fast, and reliable web and application development. We design and build performant products with modern stacks and best practices.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}