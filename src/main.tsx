import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import { RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import './index.css'
import router from './routes'
import { ThemeProvider } from './theme/ThemeProvider'
const rootEl = document.getElementById('root')

const MEASUREMENT_ID = 'G-R65Z95GRDH'
ReactGA.initialize(MEASUREMENT_ID)

if (!rootEl) {
  throw new Error('Root element "#root" not found')
}

createRoot(rootEl).render(
  <ParallaxProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </ParallaxProvider>
)
