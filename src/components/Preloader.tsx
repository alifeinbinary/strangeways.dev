import { useEffect, useState } from 'react'

const Preloader = () => {
    const [hide, setHide] = useState(false)
    useEffect(() => {
        const t = setTimeout(() => setHide(true), 800)
        return () => clearTimeout(t)
    }, [])
    if (hide) return null
    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-white/80 backdrop-blur-sm dark:bg-neutral-950/80">
            <div
                className="border-t-brand-600 dark:border-t-brand-400 h-10 w-10 animate-spin rounded-full border-2 border-neutral-300 dark:border-neutral-700"
                aria-label="Loading"
            />
        </div>
    )
}

export default Preloader
