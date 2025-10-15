export default function Footer() {
    return (
        <footer className="mt-auto border-t border-neutral-200 py-6 text-center text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
            © {new Date().getFullYear()} strangeways.dev
        </footer>
    )
}