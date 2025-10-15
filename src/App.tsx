import Header from './components/Header'
import PortfolioCard from './components/PortfolioCard'
import Preloader from './components/Preloader'
import { portfolio } from './data/portfolio'
import { Tools } from './components/Tools'
import Services from './components/Services'
import Contact from './components/Contact'


export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Preloader />
      <Header />
      <main>
        {/* Hero */}
        <section className="container-responsive py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Modern web and application development
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              We bring 18 years of experience to the table, delivering Minimal, fast, and reliable web and application development. I design and build performant products with modern stacks and best practices.
            </p>
          </div>
        </section>
        {/* Services */}
        <Services />
        {/* Work */}
        <section id="work" className="container-responsive py-8 sm:py-12">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Selected work</h2>
            <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
              Hire us →
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
              We prioritize clarity, performance, and maintainability. Accessibility, responsive design, and SEO are first-class citizens.
              We deliver quickly without compromising quality, with strong collaboration and documentation.
            </p>
          </div>
        </section>
        <section id="tools" className="container-responsive py-16">
          <Tools />
        </section>
        {/* Contact */}
        <Contact />
      </main>
      <footer className="mt-auto border-t border-neutral-200 py-6 text-center text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
        © {new Date().getFullYear()} strangeways.dev
      </footer>
    </div>
  )
}
