import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faq } from '../data/faq'

export default function Faq() {
    return (
        <section
            id="faq"
            className="container-responsive cv-auto py-8 sm:py-12"
        >
            <div className="mb-6 flex items-end justify-between">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    Frequently Asked Questions
                </h2>
            </div>
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {faq.map((item, idx) => (
                    <details
                        key={idx}
                        className="group p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                    >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                            <span className="text-base font-medium">
                                {item.question}
                            </span>
                            <span className="text-xl leading-none transition-transform duration-500 ease-in-out select-none group-open:rotate-45">
                                <FontAwesomeIcon icon={faPlus} />
                            </span>
                        </summary>
                        <div className="mt-3 text-neutral-600 dark:text-neutral-300">
                            {typeof item.answer === 'string' ? (
                                item.answer
                            ) : (
                                <div dangerouslySetInnerHTML={item.answer} />
                            )}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    )
}
