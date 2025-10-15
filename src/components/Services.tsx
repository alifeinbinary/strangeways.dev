import { useEffect } from 'react';
import AOS from 'aos';
import { faCloud, faFileInvoice, faGaugeSimpleHigh, faGear, faLayerGroup, faNetworkWired, faServer, faShieldHalved, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-in-out',
            delay: 50,
            once: false
        });
    }, []);
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
                                        <FontAwesomeIcon icon={faShieldHalved} />
                                    </span>
                                    <span>
                                        <strong className="font-semibold">18+ years</strong> of hands-on web engineering and infrastructure.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-0.5 text-brand-600 dark:text-brand-400" aria-hidden>
                                        <FontAwesomeIcon icon={faGaugeSimpleHigh} />
                                    </span>
                                    <span>
                                        <strong className="font-semibold">Performance-first</strong> delivery with modern stacks and rigorous fundamentals.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-0.5 text-brand-600 dark:text-brand-400" aria-hidden>
                                        <FontAwesomeIcon icon={faUnlock} />
                                    </span>
                                    <span>
                                        <strong className="font-semibold">Cost and lock-in mitigation</strong> via serverless and open-source where it fits.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-0.5 text-brand-600 dark:text-brand-400" aria-hidden>
                                        <FontAwesomeIcon icon={faFileInvoice} />
                                    </span>
                                    <span>
                                        <strong className="font-semibold">Engagements</strong> on retainer or hourly (2h minimum).
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-brand-50 px-4 py-2 text-sm font-medium text-white shadow-subtle transition hover:bg-brand-100">
                                    Book a free 15‑min consultation
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Service cards */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {/* Hosted Web Applications */}
                            <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                        <FontAwesomeIcon icon={faLayerGroup} />
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
                                        <rect x="12" y="40" width="90" height="40" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                        <text x="30" y="65" className="fill-neutral-600 dark:fill-neutral-300 text-md">Client</text>
                                        <line x1="102" y1="60" x2="160" y2="60" className="stroke-neutral-400" />
                                        <rect x="160" y="28" width="100" height="64" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                        <text x="170" y="55" className="fill-neutral-600 dark:fill-neutral-300 text-md">Cloudflare</text>
                                        <text x="170" y="75" className="fill-neutral-600 dark:fill-neutral-300 text-md">Workers</text>
                                        <line x1="260" y1="60" x2="320" y2="60" className="stroke-neutral-400" />
                                        <rect x="320" y="40" width="80" height="40" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                        <text x="330" y="65" className="fill-neutral-600 dark:fill-neutral-300 text-md">Payload</text>
                                    </svg>
                                </div>
                            </article>

                            {/* Serverless on AWS */}
                            <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                        <FontAwesomeIcon icon={faCloud} />
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
                                        <rect x="12" y="40" width="90" height="40" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                        <text x="30" y="65" className="fill-neutral-600 dark:fill-neutral-300 text-md">Client</text>
                                        <line x1="102" y1="60" x2="150" y2="60" className="stroke-neutral-400" />
                                        <rect x="150" y="28" width="100" height="64" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                        <text x="162" y="55" className="fill-neutral-600 dark:fill-neutral-300 text-md">Cloudflare</text>
                                        <text x="162" y="75" className="fill-neutral-600 dark:fill-neutral-300 text-md">CDN</text>
                                        <line x1="250" y1="60" x2="290" y2="60" className="stroke-neutral-400" />
                                        <circle cx="305" cy="60" r="28" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                        <text x="288" y="65" className="fill-neutral-600 dark:fill-neutral-300 text-md">AWS</text>
                                    </svg>
                                </div>
                            </article>

                            {/* Open-source Alternatives */}
                            <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                        <FontAwesomeIcon icon={faNetworkWired} />
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
                                        <rect x="20" y="20" width="90" height="80" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                        <rect x="155" y="20" width="90" height="80" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                        <rect x="290" y="20" width="90" height="80" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                        <line x1="110" y1="60" x2="155" y2="60" className="stroke-neutral-400" />
                                        <line x1="245" y1="60" x2="290" y2="60" className="stroke-neutral-400" />
                                    </svg>
                                </div>
                            </article>

                            {/* Tech Infrastructure Deployment */}
                            <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                        <FontAwesomeIcon icon={faGear} />
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
                                        <rect x="20" y="20" width="70" height="80" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                        <circle cx="160" cy="60" r="18" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                        <rect x="220" y="20" width="70" height="80" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                        <line x1="90" y1="60" x2="142" y2="60" className="stroke-neutral-400" />
                                        <line x1="178" y1="60" x2="220" y2="60" className="stroke-neutral-400" />
                                    </svg>
                                </div>
                            </article>

                            {/* Linux System Administration */}
                            <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                        <FontAwesomeIcon icon={faServer} />
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
                                        <rect x="40" y="30" width="70" height="60" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                        <rect x="170" y="30" width="70" height="60" rx="8" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                        <path d="M240 60 L300 60" className="stroke-neutral-400 fill-none" />
                                        <rect x="300" y="48" width="60" height="24" rx="6" className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" />
                                    </svg>
                                </div>
                            </article>
                        </div>

                        {/* Process */}
                        <div className="mt-10 rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
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