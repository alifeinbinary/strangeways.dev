import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPiggyBank, faBolt, faShieldHeart } from "@fortawesome/free-solid-svg-icons"

export default function Results() {
    return (
        <section id="results" className="container-responsive py-8 sm:py-12 cv-auto">

            <div className="mb-6 flex items-end justify-between">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Results</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
                    <div className="flex items-center gap-3">
                        <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                            <FontAwesomeIcon icon={faPiggyBank} />
                        </span>
                        <h3 className="text-lg font-semibold leading-tight">Lower SaaS spend, more control</h3>
                    </div>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                        Consolidated tooling with self-hosted services and SSO while maintaining reliability and supportability.
                    </p>
                    <ul className="mt-3 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                        <li><strong>-42%</strong> annual subscription costs</li>
                        <li>Unified sign-on and policy enforcement</li>
                        <li>Backups, monitoring, and DR in place</li>
                    </ul>
                </article>

                <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
                    <div className="flex items-center gap-3">
                        <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                            <FontAwesomeIcon icon={faBolt} />
                        </span>
                        <h3 className="text-lg font-semibold leading-tight">AI that speeds up real work</h3>
                    </div>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                        Deployed agentic AI with retrieval, guardrails, and persistent memory to automate triage and routine ops.
                    </p>
                    <ul className="mt-3 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                        <li><strong>-34%</strong> time to resolution with human-in-the-loop</li>
                        <li>Quality dashboards and audit trails</li>
                        <li>On-prem or trusted providers as needed</li>
                    </ul>
                </article>

                <article className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
                    <div className="flex items-center gap-3">
                        <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                            <FontAwesomeIcon icon={faShieldHeart} />
                        </span>
                        <h3 className="text-lg font-semibold leading-tight">Global apps, production-ready</h3>
                    </div>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                        Delivered secure, observable web applications with CI/CD and cost-aware architectures from day one.
                    </p>
                    <ul className="mt-3 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
                        <li><strong>99.95%</strong> availability, sub-200ms median</li>
                        <li>SSO, RBAC, encryption, and logging baseline</li>
                        <li>Autoscaling and edge delivery where it fits</li>
                    </ul>
                </article>
            </div>
        </section>
    )
}