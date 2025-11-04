export type Theme = 'light' | 'dark'

export function getSystemTheme(): Theme {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
}

export function applyThemeClass(t: Theme) {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    if (t === 'dark') {
        root.classList.add('dark')
    } else {
        root.classList.remove('dark')
    }
}

export const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}
