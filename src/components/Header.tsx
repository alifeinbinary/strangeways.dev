import { useState, useLayoutEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../theme/useTheme'
import { scrollToId } from '../theme/utils'
import { Link } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { theme } = useTheme()

  const colours = [
    '#f7faf0', // 0.97
    '#eef5df', // 0.83
    '#ddeebf', // 0.78
    '#c9e59b', // 0.76
    '#b4d455', // 0.74
    '#9cbf3b', // 0.73
    '#7f9f2f', // 0.69
    '#637f25', // 0.67
    '#4d631d', // 0.65
    '#3c4d17', // 0.63
    '#1f280c', // 0.62
    '#eef5df', // 0.59
    '#ddeebf', // 0.58
    '#c9e59b', // 0.45
    '#b4d455', // 0.43
    '#7f9f2f', // 0.42
    '#4d631d', // 0.38
    '#1f280c', // 0.36
  ]

  const name = ['s', 't', 'r', 'a', 'n', 'g', 'e', 'w', 'a', 'y', 's']

  function calculateLuminance(hexColor: string) {
    const r = parseInt(hexColor.substring(1, 3), 16) / 255
    const g = parseInt(hexColor.substring(3, 5), 16) / 255
    const b = parseInt(hexColor.substring(5, 7), 16) / 255

    const rLinear =
      r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)
    const gLinear =
      g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4)
    const bLinear =
      b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)

    return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear
  }

  const lightColourList = colours.filter(
    (color) => calculateLuminance(color) > 0.25
  )
  const darkColourList = colours.filter(
    (color) => calculateLuminance(color) <= 0.75
  )

  const colourList = theme === 'light' ? darkColourList : lightColourList

  useLayoutEffect(() => {
    const svg = document.querySelector('svg')
    const path = svg?.querySelector('path') as SVGPathElement | null
    const word = document.querySelector('#brand')
    const letters = document.querySelectorAll('#name span')

    if (letters && word && path && theme && svg) {
      let intervalId: number | undefined

      const animateLoop = () => {
        intervalId = window.setInterval(() => {
          const randomColourIndex = Math.floor(
            Math.random() * colourList.length
          )
          const randomColour = colourList[randomColourIndex]
          if (path) {
            path.style.transition = 'fill 1s ease-in-out'
            path.style.fill = randomColour
          }
          letters?.forEach((letter) => {
            let randomLetterColourIndex = Math.floor(
              Math.random() * colourList.length
            )
            while (randomLetterColourIndex === randomColourIndex) {
              randomLetterColourIndex = Math.floor(
                Math.random() * colourList.length
              )
            }
            letter.style.transition = 'color 2s ease-in-out'
            letter.style.color = colourList[randomLetterColourIndex]
          })
        }, 1000)
      }

      // Start animation immediately on page load
      animateLoop()

      return () => {
        if (intervalId) {
          window.clearInterval(intervalId)
        }
      }
    }
  }, [colourList, theme])

  return (
    <header
      id="header"
      className="supports-backdrop-filter:bg-white/70 sticky top-0 z-30 border-b border-neutral-200 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70"
    >
      <div
        className="container-responsive vertical-align:middle flex items-center justify-between py-2"
        id="brand"
      >
        <div className="flex items-center gap-1">
          <img
            width={80}
            height={80}
            src="/tesseract-dark.svg"
            alt="Strangeways Developments"
            className="mr-1 inline-flex h-9 w-auto items-center justify-center dark:hidden"
          />
          <img
            width={80}
            height={80}
            src="/tesseract-light.svg"
            alt="Strangeways Developments"
            className="mr-1 hidden h-9 w-auto items-center justify-center dark:inline-flex"
          />
          <span className="text-xl uppercase tracking-tight sm:text-2xl">
            <Link to={'/'}>
              <div id="name" className="ibm-plex-sans-700 italic">
                {name.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
                <span className="font-normal lowercase">.</span>
                <span className="font-normal lowercase">d</span>
                <span className="font-normal lowercase">e</span>
                <span className="font-normal lowercase">v</span>
              </div>
            </Link>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-3 md:flex">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('work')
              }}
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('about')
              }}
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('faq')
              }}
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('contact')
              }}
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              Contact
            </a>
            <ThemeToggle />
          </nav>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded border border-neutral-200 p-2 text-neutral-700 dark:border-neutral-800 dark:text-neutral-200 md:hidden"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => {
              setOpen((v) => !v)
            }}
          >
            <FontAwesomeIcon
              icon={open ? faSquareMinus : faSquarePlus}
              className="text-xl"
            />
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 md:hidden"
        >
          <div className="container-responsive flex flex-col gap-2 py-3">
            <a
              onClick={(e) => {
                e.preventDefault()
                setOpen(false)
                scrollToId('work')
              }}
              href="#work"
              className="text-base py-2 text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
            >
              Work
            </a>
            <a
              onClick={(e) => {
                e.preventDefault()
                setOpen(false)
                scrollToId('about')
              }}
              href="#about"
              className="text-base py-2 text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
            >
              About
            </a>
            <a
              onClick={(e) => {
                e.preventDefault()
                setOpen(false)
                scrollToId('contact')
              }}
              href="#contact"
              className="text-base py-2 text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
            >
              Contact
            </a>
            <div className="py-2">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
