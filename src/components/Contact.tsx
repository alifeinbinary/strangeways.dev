import { useState } from "react"
import { useForm } from "react-hook-form"
import { faCcAmex, faCcDiscover, faCcMastercard, faCcVisa } from "@fortawesome/free-brands-svg-icons"
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type FormValues = {
    name: string
    email: string
    phone: string
    website: string
    message: string
    'bot-field'?: string
}

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
    const { register, handleSubmit: rhfHandleSubmit, reset } = useForm<FormValues>({
        mode: 'onChange',
    })

    const encode = (obj: Record<string, string>) =>
        Object.entries(obj)
            .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
            .join('&')

    const onSubmit = async (data: FormValues, event?: React.BaseSyntheticEvent) => {
        try {
            setError(null)
            setSuccess(false)
            setSubmitting(true)

            const formEl = (event?.target as HTMLFormElement) ?? document.getElementById('contact-form') as HTMLFormElement | null
            let body: string
            if (formEl) {
                // Include all DOM fields so Netlify picks up honeypot and reCAPTCHA token
                const fd = new FormData(formEl)
                if (!fd.get('form-name')) fd.append('form-name', 'contact')
                // Merge RHF values to ensure consistency
                Object.entries(data).forEach(([k, v]) => fd.set(k, String(v ?? '')))
                body = new URLSearchParams(fd as any).toString()
            } else {
                // Fallback to encoding RHF data only
                body = encode({ 'form-name': 'contact', ...data as any })
            }

            await fetch('/', {
                method: 'POST',
                // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body,
            })

            setSuccess(true)
            reset()
        } catch (err) {
            console.error(err)
            setError('Something went wrong. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

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
                        <form name="contact" method="POST" data-netlify-honeypot="bot-field" className='flex flex-col gap-4' onSubmit={rhfHandleSubmit(onSubmit)} id="contact-form" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <p className="hidden">
                                <label>Don't fill this out: <input name="bot-field" /></label>
                            </p>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Your Name</label>
                                    <input id="name" type="text" autoComplete="name"
                                        {...register('name', { required: true, minLength: 2 })}
                                        className='form-input w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-subtle transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white' placeholder="Your Name" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Your Email</label>
                                    <input id="email" type="email" autoComplete="email" inputMode="email"
                                        {...register('email', { required: true, pattern: /.+@.+\..+/ })}
                                        className='form-input w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-subtle transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white' placeholder="your.email@example.com" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="phone" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Phone</label>
                                    <input id="phone" type="tel" autoComplete="tel" inputMode="tel"
                                        {...register('phone', { required: false, pattern: /^\+?(?:[\s().-]*\d){7,15}$/ })}
                                        className='form-input w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-subtle transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white' placeholder="+15551234567" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="website" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Website</label>
                                    <input id="website" type="text" autoComplete="url" inputMode="url"
                                        {...register('website', { required: false, pattern: /^(?:https?:\/\/)?(?:www\.)?[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\/.*)?$/ })}
                                        className='form-input w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-subtle transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white' placeholder="https://your-website.com" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Message</label>
                                <textarea id="message" rows={5}
                                    {...register('message', { required: true, minLength: 10 })}
                                    className='form-textarea w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-subtle transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white'></textarea>
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