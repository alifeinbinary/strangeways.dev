import Header from './components/Header'
import PortfolioCard from './components/PortfolioCard'
import { portfolio } from './data/portfolio'

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

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        {/* Hero */}
        <section className="container-responsive py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Strangeways Developments
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              Minimal, fast, and reliable web and application development. I design and build performant products with modern stacks and best practices.
            </p>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="container-responsive py-8 sm:py-12">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Selected work</h2>
            <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
              Hire me →
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="container-responsive py-16">
          <div className="prose prose-neutral max-w-3xl dark:prose-invert">
            <h2>Approach</h2>
            <p>
              I prioritize clarity, performance, and maintainability. Accessibility, responsive design, and SEO are first-class citizens.
              I deliver quickly without compromising quality, with strong collaboration and documentation.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container-responsive py-16">
          <div className="flex flex-wrap items-center gap-4">
            <ObfuscatedEmail />
            <a
              href="https://strangeways.dev"
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              strangeways.dev
            </a>
          </div>
        </section>
      </main>
      <footer className="mt-auto border-t border-neutral-200 py-6 text-center text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
        © {new Date().getFullYear()} Strangeways Developments
      </footer>
    </div>
  )
}
