export default function Services() {
    return (
        <section id="services" className="py-16 sm:py-24">
            <div className="container-responsive">
                <div className="mb-8 max-w-3xl">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Services</h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                        We help medium to large organizations, venture-backed startups, and agencies reduce tech costs, avoid vendor lock-in, and ship performant software with confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* Sidebar: USPs */}
                    <aside className="lg:col-span-4">
                        <div className="card sticky top-4 rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Why Strangeways</h3>
                            <ul className="mt-4 space-y-3 text-sm">
                                <li className="flex items-start gap-3">
                                    <span className="mt-0.5 text-brand-600 dark:text-brand-400" aria-hidden>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z"/></svg>
                                    </span>
                                    <span>
                                        <strong className="font-semibold">18+ years</strong> of hands-on web engineering and infrastructure.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-0.5 text-brand-600 dark:text-brand-400" aria-hidden>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5a9 9 0 109 9h-2a7 7 0 11-7-7V5zM7 17l5-5 1 1-5 5H7z"/></svg>
                                    </span>
                                    <span>
                                        <strong className="font-semibold">Performance-first</strong> delivery with modern stacks and rigorous fundamentals.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-0.5 text-brand-600 dark:text-brand-400" aria-hidden>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-6h-1V8a5 5 0 10-10 0h2a3 3 0 016 0v3H6a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2z"/></svg>
                                    </span>
                                    <span>
                                        <strong className="font-semibold">Cost and lock-in mitigation</strong> via serverless and open-source where it fits.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-0.5 text-brand-600 dark:text-brand-400" aria-hidden>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.4 13a7.96 7.96 0 000-2l2.1-1.6-2-3.4-2.5 1a8.1 8.1 0 00-1.7-1L13 2h-4l-.3 2.9a8.1 8.1 0 00-1.7 1l-2.5-1-2 3.4L4.6 11a7.96 7.96 0 000 2l-2.1 1.6 2 3.4 2.5-1c.5.4 1.1.7 1.7 1L9 22h4l.3-2.9c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.4L19.4 13zM12 15a3 3 0 110-6 3 3 0 010 6z"/></svg>
                                    </span>
                                    <span>
                                        <strong className="font-semibold">Engagements</strong> on retainer or hourly (2h minimum).
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-subtle transition hover:bg-brand-700">
                                    Book a free 15‑min consultation
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Service cards */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {/* Hosted Web Applications */}
                            <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l8 4-8 4-8-4 8-4zm0 7l8 4-8 4-8-4 8-4zm0 7l8 4-8 4-8-4 8-4z"/></svg>
                                    </span>
                                    <h3 className="text-lg font-semibold leading-tight">Hosted web applications</h3>
                                </div>
                                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                                    Modern, maintainable apps with best-in-class performance, accessibility, and SEO.
                                </p>
                                <ul className="mt-3 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                                    <li>Preferred: <strong>Payload CMS</strong> (Next.js under the hood) on <strong>Cloudflare Workers</strong>.</li>
                                    <li>Also experienced: <strong>Laravel (PHP)</strong>, <strong>Django (Python)</strong>.</li>
                                    <li>Security, observability, CI/CD baked in.</li>
                                </ul>
                                {/* Minimal diagram */}
                                <div className="mt-4 rounded-lg bg-neutral-50 p-3 dark:bg-neutral-900">
                                    <svg viewBox="0 0 400 120" className="h-24 w-full" aria-hidden>
                                        <rect x="12" y="40" width="90" height="40" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                        <text x="30" y="65" className="fill-neutral-600 dark:fill-neutral-300 text-[10px]">Client</text>
                                        <line x1="102" y1="60" x2="160" y2="60" className="stroke-neutral-400"/>
                                        <rect x="160" y="28" width="90" height="64" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                        <text x="170" y="55" className="fill-neutral-600 dark:fill-neutral-300 text-[10px]">Cloudflare</text>
                                        <text x="170" y="70" className="fill-neutral-600 dark:fill-neutral-300 text-[10px]">Workers</text>
                                        <line x1="250" y1="60" x2="320" y2="60" className="stroke-neutral-400"/>
                                        <rect x="320" y="28" width="70" height="64" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                        <text x="330" y="55" className="fill-neutral-600 dark:fill-neutral-300 text-[10px]">Payload</text>
                                    </svg>
                                </div>
                            </article>

                            {/* Serverless on AWS */}
                            <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18a4 4 0 010-8 5 5 0 019.6-1.2A4.5 4.5 0 1118 18H6z"/></svg>
                                    </span>
                                    <h3 className="text-lg font-semibold leading-tight">Serverless on AWS</h3>
                                </div>
                                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                                    Scale-to-zero architectures that minimize ops and align cost with usage.
                                </p>
                                <ul className="mt-3 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                                    <li>Frameworks: <strong>Webiny</strong>, <strong>SST.dev</strong>.</li>
                                    <li>Provisioning with <strong>Pulumi</strong>.</li>
                                    <li>Services: Lambda, API Gateway, DynamoDB, S3, CloudFront.</li>
                                </ul>
                                <div className="mt-4 rounded-lg bg-neutral-50 p-3 dark:bg-neutral-900">
                                    <svg viewBox="0 0 400 120" className="h-24 w-full" aria-hidden>
                                        <rect x="12" y="40" width="90" height="40" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                        <text x="30" y="65" className="fill-neutral-600 dark:fill-neutral-300 text-[10px]">Client</text>
                                        <line x1="102" y1="60" x2="180" y2="60" className="stroke-neutral-400"/>
                                        <rect x="180" y="28" width="70" height="64" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                        <text x="192" y="55" className="fill-neutral-600 dark:fill-neutral-300 text-[10px]">CF</text>
                                        <text x="188" y="70" className="fill-neutral-600 dark:fill-neutral-300 text-[10px]">CDN</text>
                                        <line x1="250" y1="60" x2="290" y2="60" className="stroke-neutral-400"/>
                                        <circle cx="305" cy="60" r="18" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                        <text x="298" y="63" className="fill-neutral-600 dark:fill-neutral-300 text-[9px]">λ</text>
                                        <line x1="323" y1="60" x2="365" y2="60" className="stroke-neutral-400"/>
                                        <rect x="365" y="40" width="20" height="40" rx="4" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                    </svg>
                                </div>
                            </article>

                            {/* Open-source Alternatives */}
                            <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 2h6v4h-6v-4z"/></svg>
                                    </span>
                                    <h3 className="text-lg font-semibold leading-tight">Open‑source alternatives to SaaS</h3>
                                </div>
                                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                                    Replace costly subscriptions with self-hosted tools where it makes sense, keeping control of your data.
                                </p>
                                <ul className="mt-3 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                                    <li>We deploy: Nextcloud, Invoice Ninja, Cal.com, Plunk, Postiz, Umami, n8n, and more.</li>
                                    <li>TCO analysis to decide build vs. buy pragmatically.</li>
                                    <li>Backups, monitoring, and security hardening included.</li>
                                </ul>
                                <div className="mt-4 rounded-lg bg-neutral-50 p-3 dark:bg-neutral-900">
                                    <svg viewBox="0 0 400 120" className="h-24 w-full" aria-hidden>
                                        <rect x="20" y="20" width="90" height="80" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                        <rect x="155" y="20" width="90" height="80" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                        <rect x="290" y="20" width="90" height="80" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                        <line x1="110" y1="60" x2="155" y2="60" className="stroke-neutral-400"/>
                                        <line x1="245" y1="60" x2="290" y2="60" className="stroke-neutral-400"/>
                                    </svg>
                                </div>
                            </article>

                            {/* Tech Infrastructure Deployment */}
                            <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.4 13a7.96 7.96 0 000-2l2.1-1.6-2-3.4-2.5 1a8.1 8.1 0 00-1.7-1L13 2h-4l-.3 2.9a8.1 8.1 0 00-1.7 1l-2.5-1-2 3.4L4.6 11a7.96 7.96 0 000 2l-2.1 1.6 2 3.4 2.5-1c.5.4 1.1.7 1.7 1L9 22h4l.3-2.9c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.4L19.4 13zM12 15a3 3 0 110-6 3 3 0 010 6z"/></svg>
                                    </span>
                                    <h3 className="text-lg font-semibold leading-tight">Tech infrastructure deployment</h3>
                                </div>
                                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                                    Reproducible environments with Infrastructure as Code, CI/CD, and observability from day one.
                                </p>
                                <ul className="mt-3 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                                    <li>IaC with <strong>Pulumi</strong> (and team familiarity with Terraform/CDK).</li>
                                    <li>GitHub Actions pipelines, secrets, and policy baselines.</li>
                                    <li>Logging, metrics, and alerting baked in.</li>
                                </ul>
                                <div className="mt-4 rounded-lg bg-neutral-50 p-3 dark:bg-neutral-900">
                                    <svg viewBox="0 0 400 120" className="h-24 w-full" aria-hidden>
                                        <rect x="20" y="20" width="70" height="80" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                        <circle cx="160" cy="60" r="18" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                        <rect x="220" y="20" width="70" height="80" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                        <line x1="90" y1="60" x2="142" y2="60" className="stroke-neutral-400"/>
                                        <line x1="178" y1="60" x2="220" y2="60" className="stroke-neutral-400"/>
                                    </svg>
                                </div>
                            </article>

                            {/* Linux System Administration */}
                            <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 5h16v6H4V5zm0 8h16v6H4v-6zm3 2h4v2H7v-2z"/></svg>
                                    </span>
                                    <h3 className="text-lg font-semibold leading-tight">Linux system administration</h3>
                                </div>
                                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                                    Secure, reliable Ubuntu Server operations with Cloudflare in front for protection.
                                </p>
                                <ul className="mt-3 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                                    <li>Backups scheduled to S3 with cron.</li>
                                    <li>Hardening, patching, migrations, and HA setups.</li>
                                    <li>Monitoring and incident response readiness.</li>
                                </ul>
                                <div className="mt-4 rounded-lg bg-neutral-50 p-3 dark:bg-neutral-900">
                                    <svg viewBox="0 0 400 120" className="h-24 w-full" aria-hidden>
                                        <rect x="40" y="30" width="70" height="60" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                        <rect x="170" y="30" width="70" height="60" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                        <path d="M240 60 L300 60" className="stroke-neutral-400 fill-none"/>
                                        <rect x="300" y="48" width="60" height="24" rx="6" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"/>
                                    </svg>
                                </div>
                            </article>
                        </div>

                        {/* Process */}
                        <div className="mt-10 rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
                            <h3 className="text-base font-semibold tracking-tight">Process</h3>
                            <ol className="mt-3 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                                <li>
                                    <strong>Discovery</strong>
                                    <p className="mt-1 text-neutral-600 dark:text-neutral-300">Goals, constraints, success metrics.</p>
                                </li>
                                <li>
                                    <strong>Architecture</strong>
                                    <p className="mt-1 text-neutral-600 dark:text-neutral-300">Blueprints, stack selection, costs.</p>
                                </li>
                                <li>
                                    <strong>Build</strong>
                                    <p className="mt-1 text-neutral-600 dark:text-neutral-300">Implementation, reviews, hardening.</p>
                                </li>
                                <li>
                                    <strong>Operate</strong>
                                    <p className="mt-1 text-neutral-600 dark:text-neutral-300">Monitoring, iteration, support.</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}