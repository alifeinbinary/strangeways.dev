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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm as HTMLFormElement);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData as any).toString()
        })
            .then(() => console.log("Form successfully submitted"))
            .catch(error => console.error(error));
    };

    return (
        <section id="contact" className="container-responsive py-8 cv-auto">
            <div className="mb-6 text-center items-center">
                <h2 className="text-3xl font-semibold tracking-tight">Get in touch</h2>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">We offer a free 15-minute consultation to discuss your project and answer any questions you may have.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <article className="card flex flex-col overflow-hidden p-6" data-aos="fade-right">
                    <h2 className="text-lg font-semibold tracking-tight">Mail</h2>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Strangeways Studios</p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">PO Box 204</p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">V0R 2H0 </p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">British Columbia, Canada</p>
                    <h2 className="mt-2 text-lg font-semibold tracking-tight">Email</h2>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Prefer email? We typically reply within one business day.</p>
                    <div className="mt-4">
                        <ObfuscatedEmail />
                    </div>
                </article>
                <article className="card md:col-span-2 flex flex-col overflow-hidden p-6" data-aos="fade-left">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
                        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className='flex flex-col gap-4' onSubmit={handleSubmit} id="contact-form">
                            <input type="hidden" name="form-name" value="contact" />
                            <p className="hidden">
                                <label>Don’t fill this out: <input name="bot-field" /></label>
                            </p>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Your Name</label>
                                    <input id="name" required type="text" name="name" className='w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-subtle transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white' />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Your Email</label>
                                    <input id="email" required type="email" name="email" className='w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-subtle transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white' />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Message</label>
                                <textarea id="message" required name="message" rows={5} className='w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-subtle transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white'></textarea>
                            </div>
                            <div className="flex items-center justify-end">
                                <button type="submit" className='inline-flex items-center justify-center rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-subtle transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/30'>Send</button>
                            </div>
                        </form>
                    </div>
                </article>
            </div>
        </section>
    )
}