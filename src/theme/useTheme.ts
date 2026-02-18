import { createContext, use } from 'react'
import type { Theme } from './utils'

interface ThemeContextValue {
  theme: Theme
  setTheme: (t: Theme) => void
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme() {
  const ctx = use(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
