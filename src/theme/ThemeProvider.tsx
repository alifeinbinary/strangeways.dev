import { useEffect, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { applyThemeClass, getSystemTheme } from './utils'
import { ThemeContext } from './useTheme'

type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  setTheme: (t: Theme) => void
  toggle: () => void
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light'
    const stored = window.localStorage.getItem('theme') as Theme | null
    return stored ?? getSystemTheme()
  })

  useEffect(() => {
    applyThemeClass(theme)
    try {
      window.localStorage.setItem('theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = () => {
      const stored = window.localStorage.getItem('theme') as Theme | null
      if (!stored) {
        setThemeState(getSystemTheme())
      }
    }
    mq.addEventListener?.('change', listener)
    return () => mq.removeEventListener?.('change', listener)
  }, [])

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme: (t) => setThemeState(t), toggle: () => setThemeState((t) => (t === 'dark' ? 'light' : 'dark')) }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
