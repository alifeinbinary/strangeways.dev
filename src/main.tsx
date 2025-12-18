import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import './index.css'
import router from './routes'
import { ThemeProvider } from './theme/ThemeProvider'

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root element "#root" not found')
}

createRoot(rootEl).render(
  <StrictMode>
    <ParallaxProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ParallaxProvider>
  </StrictMode>
)
