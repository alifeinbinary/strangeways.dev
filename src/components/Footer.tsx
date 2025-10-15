import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="mt-auto border-t border-neutral-200 py-6 text-center text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
            © {new Date().getFullYear()} strangeways.dev
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Released under the MIT License. Fork <FontAwesomeIcon icon={faCodeFork} /> on <a href="https://github.com/alifeinbinary/strangeways.dev" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline dark:text-brand-700">GitHub</a>.</p>
        </footer>
    )
}