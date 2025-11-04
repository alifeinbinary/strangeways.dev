import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import ThemeToggle from './ThemeToggle'
import { scrollToId } from '../theme/utils'

export default function Header() {
  const [open, setOpen] = useState(false)


  return (
    <header id="header" className="border-b border-neutral-200 bg-white/70 backdrop-blur supports-backdrop-filter:bg-white/60 dark:border-neutral-800 dark:bg-neutral-950/70 z-20">
      <div className="container-responsive flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <img width={320} height={64} src="/logo-dark_320.webp" alt="Strangeways Developments" className="h-9 w-auto dark:hidden" />
          <img width={320} height={64} src="/logo-light_320.webp" alt="Strangeways Developments" className="h-9 w-auto hidden dark:block" />
        </a>
        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-3">
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); scrollToId('work') }}
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollToId('about') }}
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#faq"
              onClick={(e) => { e.preventDefault(); scrollToId('faq') }}
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToId('contact') }}
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              Contact
            </a>
            <ThemeToggle />
          </nav>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded border border-neutral-200 dark:border-neutral-800 p-2 text-neutral-700 dark:text-neutral-200"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <FontAwesomeIcon icon={open ? faSquareMinus : faSquarePlus} className="text-xl" />
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
          <div className="container-responsive py-3 flex flex-col gap-2">
            <a
              onClick={(e) => { e.preventDefault(); setOpen(false); scrollToId('work') }}
              href="#work"
              className="py-2 text-base text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
            >
              Work
            </a>
            <a
              onClick={(e) => { e.preventDefault(); setOpen(false); scrollToId('about') }}
              href="#about"
              className="py-2 text-base text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
            >
              About
            </a>
            <a
              onClick={(e) => { e.preventDefault(); setOpen(false); scrollToId('contact') }}
              href="#contact"
              className="py-2 text-base text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
            >
              Contact
            </a>
            <div className="py-2"><ThemeToggle /></div>
          </div>
        </nav>
      )}
    </header>
  )
}
