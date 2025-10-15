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

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Tools />
        <Booker />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
