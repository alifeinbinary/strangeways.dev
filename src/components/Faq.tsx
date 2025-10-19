import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faq } from '../data/faq'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function FAQ() {
    return (
        <section id="faq" className="container-responsive py-8 sm:py-12 cv-auto">
            <div className="mb-6 flex items-end justify-between">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Frequently Asked Questions</h2>
            </div>
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {faq.map((item, idx) => (
                    <details key={idx} className="group py-4">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                            <span className="text-base font-medium">{item.question}</span>
                            <span className="transition-transform group-open:rotate-45 select-none text-xl leading-none">
                                <FontAwesomeIcon icon={faPlus} />
                            </span>
                        </summary>
                        <div className="mt-3 text-neutral-600 dark:text-neutral-300">
                            {item.answer}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    )
}
