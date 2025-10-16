import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header id="header" className="border-b border-neutral-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-950/70">
      <div className="container-responsive flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="text-lg">Strangeways.dev</span>
        </a>
        <nav className="flex items-center gap-3">
          <a href="#work" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Work</a>
          <a href="#about" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">About</a>
          <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
