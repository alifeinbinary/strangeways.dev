import Booker from "./Booker"

export default function Contact() {
    function ObfuscatedEmail() {
        const user = 'studio'
        const domain = 'strangeways.co'
        const addr = `${user}@${domain}`
        const href = `mailto:${addr}`
        return (
            <a
                href={href}
                className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium shadow-subtle transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            >
                <span>Contact: {user}[at]{domain}</span>
            </a>
        )
    }
    return (
        <section id="contact" className="container-responsive py-16">
            <Booker />
            <div className="flex flex-wrap items-center gap-4">

                <article className="card flex flex-col overflow-hidden">
                    <ObfuscatedEmail />
                </article>
                <article className="card flex flex-col overflow-hidden">

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
                        <form name="contact" method="POST" data-netlify="true" className='flex flex-col gap-4'>
                            <p>
                                <label>Your Name: <input type="text" name="name" className='border border-neutral-200 rounded-md px-4 py-2' /></label>
                            </p>
                            <p>
                                <label>Your Email: <input type="email" name="email" className='border border-neutral-200 rounded-md px-4 py-2' /></label>
                            </p>
                            <p>
                                <label>Your Role: <select name="role[]" multiple className='border border-neutral-200 rounded-md px-4 py-2'>
                                    <option value="leader">Leader</option>
                                    <option value="follower">Follower</option>
                                </select></label>
                            </p>
                            <p>
                                <label>Message: <textarea name="message" className='border border-neutral-200 rounded-md px-4 py-2'></textarea></label>
                            </p>
                            <p>
                                <button type="submit" className='bg-brand-600 text-white px-4 py-2 rounded-md'>Send</button>
                            </p>
                        </form>
                    </div>
                </article>
            </div>
        </section>
    )
}