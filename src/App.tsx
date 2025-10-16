import { useEffect, useState } from 'react';
import Header from './components/Header'
import Preloader from './components/Preloader'
import Tools from './components/Tools'
import Services from './components/Services'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Footer from './components/Footer'
import Booker from './components/Booker'
import 'aos/dist/aos.css'

export default function App() {
  const [selectedTools, setSelectedTools] = useState<string[]>([])
  const toggleTool = (name: string) => {
    setSelectedTools((prev) =>
      prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name]
    )
  }
  const clearTools = () => setSelectedTools([])
  useEffect(() => {
    try {
      const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      const hasAosElements = !!document.querySelector('[data-aos]');
      if (!prefersReducedMotion && hasAosElements) {
        import('aos').then((mod) => {
          const AOS = mod.default;
          AOS.init({
            duration: 500,
            easing: 'ease-in-out',
            delay: 50,
            once: true,
          });
        }).catch(() => {/* noop */ });
      }
    } catch { }
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Services />
        <Tools selected={selectedTools} onToggle={toggleTool} />
        <Work selected={selectedTools} onClear={clearTools} />
        <About />
        <Booker />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
