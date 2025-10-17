import { useState } from "react"
import { faCcAmex, faCcDiscover, faCcMastercard, faCcVisa } from "@fortawesome/free-brands-svg-icons"
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Contact() {

    function ObfuscatedEmail() {
        const user = 'studio'
        const domain = 'strangeways.co'
        const addr = `${user}@${domain}`
        const href = `mailto:${addr}`
        return (
            <a
                href={href}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-subtle transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:ring-offset-0 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
            >
                <span>{user}[at]{domain}</span>
            </a>
        )
    }

    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.currentTarget
        setError(null)
        setSuccess(false)

        if (!form.checkValidity()) {
            form.reportValidity()
            return
        }

        const formData = new FormData(form)
        setSubmitting(true)

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData as any).toString()
        })
            .then(() => {
                setSuccess(true)
                form.reset()
            })
            .catch((err) => {
                console.error(err)
                setError("Something went wrong. Please try again.")
            })
            .finally(() => {
                setSubmitting(false)
            })
    };

    return (
        <section id="contact" className="container-responsive py-8 cv-auto">
            <div className="mb-8 max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Get in touch</h2>
                <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                    We offer a free 15-minute consultation to discuss your project and answer any questions you may have.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <article className="card flex flex-col overflow-hidden p-6" data-aos="fade-right">
                    <h3 className="text-lg font-semibold tracking-tight">Mail</h3>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Strangeways Studios</p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">PO Box 204</p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">V0R 2H0 </p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">British Columbia, Canada</p>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight">Email</h3>
                    {/* <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Prefer email? We typically reply within one business day.</p> */}
                    <div className="mt-2">
                        <ObfuscatedEmail />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight">Pay an invoice</h3>
                    <div className="mt-2 flex items-center gap-2 text-2xl">
                        <FontAwesomeIcon icon={faCcMastercard} />
                        <FontAwesomeIcon icon={faCcVisa} />
                        <FontAwesomeIcon icon={faCcAmex} />
                        <FontAwesomeIcon icon={faCcDiscover} />
                        <FontAwesomeIcon icon={faMoneyBillTransfer} />
                    </div>
                    <a href="https://invoicing.strangeways.co/client/subscriptions/VolejRejNm/purchase" className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-subtle transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:ring-offset-0 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800">Pay Invoice</a>

                </article>
                <article className="card md:col-span-2 flex flex-col overflow-hidden p-6" data-aos="fade-left">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
                        {success && (
                            <div className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800 dark:border-green-900/50 dark:bg-green-950/50 dark:text-green-200">
                                Thanks! Your message has been sent.
                            </div>
                        )}
                        {error && (
                            <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/50 dark:text-red-200">
                                {error}
                            </div>
                        )}
                        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className='flex flex-col gap-4' onSubmit={handleSubmit} id="contact-form">
                            <input type="hidden" name="form-name" value="contact" />
                            <p className="hidden">
                                <label>Don't fill this out: <input name="bot-field" /></label>
                            </p>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Your Name</label>
                                    <input id="name" required type="text" name="name" autoComplete="name" minLength={2} onInvalid={(e) => e.currentTarget.setCustomValidity('Please enter your name (at least 2 characters).')} onInput={(e) => e.currentTarget.setCustomValidity('')} className='form-input w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-subtle transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white' placeholder="Your Name" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Your Email</label>
                                    <input id="email" required type="email" name="email" autoComplete="email" inputMode="email" onInvalid={(e) => e.currentTarget.setCustomValidity('Please enter a valid email address.')} onInput={(e) => e.currentTarget.setCustomValidity('')} className='form-input w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-subtle transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white' placeholder="your.email@example.com" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="phone" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Phone</label>
                                    <input id="phone" required type="tel" name="phone" autoComplete="tel" inputMode="tel" pattern="^\\+?(?=(?:.*\\d){7,15}$)[\\d\\s().-]+$" title="Enter a valid phone number (7–15 digits). Digits, spaces, parentheses, dots, and hyphens are allowed. Examples: +1 555-123-4567, (604) 555 1234, 16045551234" onInvalid={(e) => e.currentTarget.setCustomValidity('Please enter a valid phone number (7–15 digits). You may use spaces, parentheses, dots, or hyphens, e.g. +1 555-123-4567.')} onInput={(e) => e.currentTarget.setCustomValidity('')} className='form-input w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-subtle transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white' placeholder="+15551234567" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="website" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Website</label>
                                    <input id="website" required type="url" name="website" autoComplete="url" inputMode="url" onInvalid={(e) => e.currentTarget.setCustomValidity('Please enter a valid URL including protocol, e.g. https://example.com.')} onInput={(e) => e.currentTarget.setCustomValidity('')} className='form-input w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-subtle transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white' placeholder="https://your-website.com" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Message</label>
                                <textarea id="message" required name="message" rows={5} minLength={10} onInvalid={(e) => (e.currentTarget as HTMLTextAreaElement).setCustomValidity('Please enter a brief message (at least 10 characters).')} onInput={(e) => (e.currentTarget as HTMLTextAreaElement).setCustomValidity('')} className='form-textarea w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-subtle transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white'></textarea>
                            </div>
                            {/* Netlify reCAPTCHA widget. Netlify will render this on deployed site. */}
                            <div data-netlify-recaptcha="true"></div>
                            <div className="flex items-center justify-end">
                                <button type="submit" disabled={submitting} className='inline-flex cursor-pointer items-center justify-center rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-subtle transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/30 disabled:cursor-not-allowed disabled:opacity-70'>
                                    {submitting ? 'Sending…' : 'Send'}
                                </button>
                            </div>
                        </form>
                    </div>
                </article>
            </div>
        </section>
    )
}