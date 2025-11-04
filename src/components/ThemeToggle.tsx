import { useTheme } from '../theme/useTheme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function ThemeToggle() {
    const { theme, toggle } = useTheme()
    return (
        <button
            type="button"
            onClick={toggle}
            className="shadow-subtle inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            aria-label="Toggle theme"
            title="Toggle theme"
        >
            <span className="sr-only">Toggle theme</span>
            {theme === 'dark' ? (
                <FontAwesomeIcon icon={faMoon} />
            ) : (
                <FontAwesomeIcon icon={faSun} />
            )}
            <span className="hidden sm:inline">
                {theme === 'dark' ? 'Dark' : 'Light'}
            </span>
        </button>
    )
}
