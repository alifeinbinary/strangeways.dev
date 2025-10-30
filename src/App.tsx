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
import Faq from './components/Faq'
import Results from './components/Results'
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

  useEffect(() => {
    (async function () {
      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi({ "namespace": "15min", "embedJsUrl": "https://booking.strangeways.co/embed/embed.js" });
      cal("floatingButton", { "calLink": "studio/15min", "calOrigin": "https://booking.strangeways.co", "config": { "layout": "month_view", "theme": "auto" }, "buttonText": "Book a free consultation", "hideButtonIcon": false, "buttonColor": "#1a1d3f", "buttonTextColor": "#f5f7ff" });
      cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#1a1d3f" }, "dark": { "cal-brand": "#f5f7ff" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
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
