import { faRaspberryPi } from "@fortawesome/free-brands-svg-icons";
import { faFileInvoice, faGaugeSimpleHigh, faHandshake, faLayerGroup, faNetworkWired, faServer, faShieldHalved, faUnlock, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { services } from "../data/services";
import { howWeWorkItems } from "../data/how-we-work";

const iconMap: { [key: string]: any } = {
    faLayerGroup,
    faRaspberryPi,
    faNetworkWired,
    faServer
};

export default function Services() {
    const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

    const toggleCard = (cardId: string) => {
        setExpandedCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }));
    };
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
                            {services.map((service) => (
                                <article key={service.id} className="card rounded-xl border border-neutral-200 p-5 dark:border-neutral-800 relative" data-aos="fade-up-left">
                                    <div className="mb-12">
                                        <div className={`transition-all duration-300 ${expandedCards[service.id] ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                                            <div className="flex items-center gap-3">
                                                <span className="text-brand-600 dark:text-brand-400" aria-hidden>
                                                    <FontAwesomeIcon icon={iconMap[service.icon]} size="2xl" />
                                                </span>
                                                <h3 className="text-3xl font-semibold leading-tight">{service.title}</h3>
                                            </div>
                                            <p className="mt-2 text-xl text-neutral-600 dark:text-neutral-300">
                                                {service.description}
                                            </p>
                                        </div>
                                        <ul className={`list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200 transition-all duration-300 ${expandedCards[service.id] ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                                            {service.details.map((detail, index) => (
                                                <li className="mb-2" key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="absolute bottom-5 left-5">
                                        {expandedCards[service.id] ? (
                                            <button
                                                className="inline-flex items-center cursor-pointer rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-900 backdrop-blur transition hover:bg-white dark:border-neutral-700 dark:bg-black/60 dark:text-neutral-200 dark:hover:bg-black"
                                                onClick={(e) => { e.preventDefault(); toggleCard(service.id) }}
                                            >
                                                <FontAwesomeIcon icon={faTimes} className="mr-2" />
                                                Close
                                            </button>
                                        ) : (
                                            <button
                                                className="inline-flex items-center cursor-pointer rounded-full border border-neutral-300 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-900 backdrop-blur transition hover:bg-white dark:border-neutral-700 dark:bg-black/60 dark:text-neutral-200 dark:hover:bg-black"
                                                onClick={(e) => { e.preventDefault(); toggleCard(service.id) }}
                                            >
                                                Learn more
                                            </button>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div id="how-we-work" className="mt-10 rounded-xl border border-neutral-200 p-5 dark:border-neutral-800" data-aos="fade-up-left">
                            <h3 className="text-base font-semibold tracking-tight">How we work</h3>
                            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Choose the engagement that fits your team and timeline.</p>
                            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {howWeWorkItems.map((item) => (
                                    <article key={item.id} className="card rounded-lg border border-neutral-200 p-4 dark:border-neutral-800 relative">
                                        <div className="mb-8">
                                            <div className={`transition-all duration-300 ${expandedCards[item.id] ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                                                <h4 className="text-2xl font-semibold">{item.title}</h4>
                                                <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">{item.summary}</p>
                                            </div>
                                            <ul className={`list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200 transition-all duration-300 ${expandedCards[item.id] ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                                                {item.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="absolute bottom-4 left-4">
                                            {expandedCards[item.id] ? (
                                                <button
                                                    className="inline-flex items-center cursor-pointer text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
                                                    onClick={(e) => { e.preventDefault(); toggleCard(item.id) }}
                                                >
                                                    <FontAwesomeIcon icon={faTimes} className="mr-2" />
                                                    Close
                                                </button>
                                            ) : (
                                                <button
                                                    className="inline-block text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
                                                    onClick={(e) => { e.preventDefault(); toggleCard(item.id) }}
                                                >
                                                    Learn more
                                                </button>
                                            )}
                                        </div>
                                    </article>
                                ))}
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