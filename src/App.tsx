import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Preloader from './components/Preloader'
import Results from './components/Results'
import Services from './components/Services'
import Tools from './components/Tools'
import Work from './components/Work'

export default function App() {
  const [selectedTools, setSelectedTools] = useState<string[]>([])
  const toggleTool = (name: string) => {
    setSelectedTools((prev) =>
      prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name]
    )
  }
  const clearTools = () => {
    setSelectedTools([])
  }
  useEffect(() => {
    try {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
      const hasAosElements = !!document.querySelector('[data-aos]')
      if (!prefersReducedMotion && hasAosElements) {
        import('aos')
          .then((mod) => {
            const AOS = mod.default
            AOS.init({
              duration: 500,
              easing: 'ease-in-out',
              delay: 50,
              once: true,
            })
          })
          .catch(() => {
            /* noop */
          })
      }
    } catch {
      void 0
    }
  }, [])

  useEffect(() => {
    let initialised = false
    const init = async () => {
      if (initialised) return
      initialised = true
      const { getCalApi } = await import('@calcom/embed-react')
      const cal = await getCalApi({
        namespace: '30min',
        embedJsUrl: 'https://booking.strangeways.co/embed/embed.js',
      })
      cal('floatingButton', {
        calLink: 'studio/30min',
        calOrigin: 'https://booking.strangeways.co',
        config: { layout: 'month_view', theme: 'auto' },
        buttonText: 'Book a free consultation',
        hideButtonIcon: false,
        buttonColor: '#637f25',
        buttonTextColor: '#f5f7ff',
      })
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#1a1d3f' },
          dark: { 'cal-brand': '#f5f7ff' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    }

    const scheduleIdleInit = () => {
      try {
        if (typeof window.requestIdleCallback === 'function') {
          window.requestIdleCallback(
            () => {
              void init()
            },
            { timeout: 5000 }
          )
        } else {
          setTimeout(() => {
            void init()
          }, 3000)
        }
      } catch {
        setTimeout(() => {
          void init()
        }, 3000)
      }
    }

    if (document.readyState === 'complete') scheduleIdleInit()
    const onLoad = () => {
      scheduleIdleInit()
    }
    if (document.readyState !== 'complete') {
      window.addEventListener('load', onLoad, { once: true })
    }

    const onFirstInteraction = () => {
      void init()
      cleanupInteraction()
    }

    const onPointerDown = () => {
      onFirstInteraction()
    }

    const onKeyDown = () => {
      onFirstInteraction()
    }

    const cleanupInteraction = () => {
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('keydown', onKeyDown)
    }
    window.addEventListener('pointerdown', onPointerDown, {
      once: true,
    })
    window.addEventListener('keydown', onKeyDown, {
      once: true,
    })

    return () => {
      window.removeEventListener('load', onLoad)
      cleanupInteraction()
    }
  }, [])
  return (
    <div className="flex min-h-screen flex-col">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Services />
        <Results />
        <Tools selected={selectedTools} onToggle={toggleTool} />
        <Work selected={selectedTools} onClear={clearTools} />
        <About />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
