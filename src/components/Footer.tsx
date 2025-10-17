import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer id="footer" className="mt-auto border-t border-neutral-200 py-6 text-center text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
            <img src="/icon.webp" alt="Strangeways Developments" className="h-9 w-auto mb-2 inline-flex items-center justify-center" />
            <span className="flex items-center justify-center gap-2">© {new Date().getFullYear()} strangeways.dev</span>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Released under the CC BY-NC-SA 4.0 License. View the source code on <FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/alifeinbinary/strangeways.dev" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline dark:text-brand-700">GitHub</a>.</p>
        </footer>
    )
}