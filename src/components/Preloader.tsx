import { useEffect, useState } from 'react'
import { Spinner } from './Spinner'

const Preloader = () => {
    const [hide, setHide] = useState(false)
    useEffect(() => {
        const t = setTimeout(() => { setHide(true); }, 800)
        return () => { clearTimeout(t); }
    }, [])
    if (hide) return null
    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-white/80 backdrop-blur-sm dark:bg-neutral-950/80">
            <Spinner size="md" />
        </div>
    )
}

export default Preloader
