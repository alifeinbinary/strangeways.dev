import { useContext } from 'react'
import type { Theme } from './utils'
import { createContext } from 'react'

export type ThemeContextValue = {
    theme: Theme
    setTheme: (t: Theme) => void
    toggle: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme() {
    const ctx = useContext(ThemeContext)
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
    return ctx
}
