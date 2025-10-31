import { faRaspberryPi } from "@fortawesome/free-brands-svg-icons";
import { faFileInvoice, faGaugeSimpleHigh, faHandshake, faLayerGroup, faNetworkWired, faServer, faShieldHalved, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
    return (
        <section id="services" className="py-16 sm:py-24 cv-auto">
            <div className="container-responsive">
                <div className="mb-8 max-w-3xl">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Services</h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                        We help medium to large organisations, venture-backed start-ups, and agencies reduce tech costs, avoid vendor lock-in, and ship high-performance software with confidence.
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
                        </div>
                    </aside>

                    {/* Service cards */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {/* Web Application Development */}
                            <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                        <FontAwesomeIcon icon={faLayerGroup} />
                                    </span>
                                    <h3 className="text-lg font-semibold leading-tight">Web application development</h3>
                                </div>
                                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                                    Build secure, scalable applications—internal tools or public products—that evolve with your business.
                                </p>
                                <ul className="mt-3 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                                    <li>Architected for your context: serverless, containerised, or hybrid on major clouds.</li>
                                    <li>Security and observability by default: SSO, RBAC, encryption, logs/metrics/traces.</li>
                                    <li>CI/CD pipelines for safe, frequent releases; cost-aware designs to minimise cloud spend.</li>
                                    <li>Expertise with Next.js/Payload, Laravel, Django, and modern front-end stacks.</li>
                                </ul>
                            </article>

                            {/* Embeddable Devices */}
                            <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                        <FontAwesomeIcon icon={faRaspberryPi} />
                                    </span>
                                    <h3 className="text-lg font-semibold leading-tight">Embeddable devices</h3>
                                </div>
                                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                                    Reliable, connected devices for kiosks, installations, industrial tools, and consumer products.
                                </p>
                                <ul className="mt-3 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                                    <li>Custom firmware on Linux-based systems; CAD design for manufacturability and durability.</li>
                                    <li>Integrations for connectivity, sensors, displays, and peripherals with field reliability.</li>
                                    <li>OTA updates, secure boot, signed releases, remote diagnostics, and fleet management.</li>
                                    <li>Path from rapid prototype to small-batch or scaled production, including compliance guidance.</li>
                                </ul>
                            </article>

                            {/* Agentic AI Infrastructure & Orchestration */}
                            <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                        <FontAwesomeIcon icon={faNetworkWired} />
                                    </span>
                                    <h3 className="text-lg font-semibold leading-tight">Agentic AI infrastructure & orchestration</h3>
                                </div>
                                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                                    Deploy practical AI agents to automate workflows—on-prem for control, or in the cloud for speed.
                                </p>
                                <ul className="mt-3 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                                    <li>On-prem GPUs for data control or trusted providers (OpenAI, Anthropic, Gemini) for time-to-value.</li>
                                    <li>Agents with retrieval (RAG), tool use, guardrails, and persistent memory across sessions.</li>
                                    <li>Security and compliance by design: access controls, anonymisation, audit trails.</li>
                                    <li>Evaluation harnesses, quality dashboards, human-in-the-loop, and clear ROI tracking.</li>
                                </ul>
                            </article>

                            {/* Self-hosted Business Infrastructure */}
                            <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                        <FontAwesomeIcon icon={faServer} />
                                    </span>
                                    <h3 className="text-lg font-semibold leading-tight">Self-hosted business infrastructure</h3>
                                </div>
                                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                                    Reduce dependency on costly SaaS and regain control with secure, open-source systems.
                                </p>
                                <ul className="mt-3 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                                    <li>Replace select SaaS with FOSS equivalents deployed at the edge, in colo, or on-prem.</li>
                                    <li>Identity and access across services with SSO, MFA, and policy enforcement.</li>
                                    <li>Resilience and operations: backups, disaster recovery, observability, and lifecycle management.</li>
                                    <li>Data sovereignty and regulatory alignment (GDPR, HIPAA, SOC 2 practices).</li>
                                </ul>
                            </article>
                        </div>

                        <div id="how-we-work" className="mt-10 rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
                            <h3 className="text-base font-semibold tracking-tight">How we work</h3>
                            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Choose the engagement that fits your team and timeline.</p>
                            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <article className="card rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
                                    <h4 className="text-sm font-semibold">White-label delivery</h4>
                                    <ul className="mt-2 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                                        <li>Ideal for agencies and enterprise teams.</li>
                                        <li>Commitment: by project or retainer.</li>
                                        <li>Billing: fixed or time & materials.</li>
                                        <li>Confidentiality and code ownership respected.</li>
                                    </ul>
                                    <a href="#contact" className="mt-3 inline-block text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400">Discuss this model</a>
                                </article>
                                <article className="card rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
                                    <h4 className="text-sm font-semibold">Fractional / staff augmentation</h4>
                                    <ul className="mt-2 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                                        <li>Ideal for CTOs/teams needing extra velocity.</li>
                                        <li>Commitment: flexible hours, 2h minimum.</li>
                                        <li>Billing: hourly or monthly retainer.</li>
                                        <li>SLA: agreed response times and cadence.</li>
                                    </ul>
                                    <a href="#contact" className="mt-3 inline-block text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400">Discuss this model</a>
                                </article>
                                <article className="card rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
                                    <h4 className="text-sm font-semibold">Fixed-scope projects</h4>
                                    <ul className="mt-2 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                                        <li>Ideal for well-defined outcomes and POCs.</li>
                                        <li>Commitment: milestone-based delivery.</li>
                                        <li>Billing: fixed price by scope.</li>
                                        <li>Includes handoff and documentation.</li>
                                    </ul>
                                    <a href="#contact" className="mt-3 inline-block text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400">Discuss this model</a>
                                </article>
                            </div>
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