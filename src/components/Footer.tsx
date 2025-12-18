import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="text-sm mt-auto border-t border-neutral-200 px-4 pb-24 pt-6 text-center text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 lg:pb-6"
    >
      <img
        width={64}
        height={64}
        src="/tesseract-dark.svg"
        alt="Strangeways Developments"
        className="mb-2 inline-flex h-12 w-auto items-center justify-center dark:hidden"
      />
      <img
        width={64}
        height={64}
        src="/tesseract-light.svg"
        alt="Strangeways Developments"
        className="mb-2 hidden h-12 w-auto items-center justify-center dark:inline-flex"
      />
      <span className="flex items-center justify-center gap-2">
        © {new Date().getFullYear()} strangeways.dev
      </span>
      <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-300">
        Released under the CC BY-NC-SA 4.0 License. View the source code on{' '}
        <FontAwesomeIcon icon={faGithub} />{' '}
        <a
          href="https://github.com/alifeinbinary/strangeways.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-600 hover:underline dark:text-brand-700"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  )
}
