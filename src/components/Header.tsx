import { useState, useLayoutEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../theme/useTheme'
import { scrollToId } from '../theme/utils'
import { Link } from 'react-router-dom'

export default function Header() {
    const [open, setOpen] = useState(false)
    const { theme } = useTheme()

    const colours = [
        "#f5f7ff", // 0.97
        "#e9edff", // 0.83
        "#c8d3ff", // 0.78
        "#a6b7ff", // 0.76
        "#7f95ff", // 0.74
        "#6378f6", // 0.73
        "#4f60d6", // 0.69
        "#424fb0", // 0.67
        "#373f8c", // 0.65
        "#2e356f", // 0.63
        "#1a1d3f", // 0.62
        "#e9edff", // 0.59
        "#c8d3ff", // 0.58
        "#a6b7ff", // 0.45
        "#7f95ff", // 0.43
        "#4f60d6", // 0.42
        "#373f8c", // 0.38
        "#1a1d3f", // 0.36
    ];

    const name = ["s", "t", "r", "a", "n", "g", "e", "w", "a", "y", "s", ".", "d", "e", "v"]

    function calculateLuminance(hexColor: string) {
        const r = parseInt(hexColor.substring(1, 3), 16) / 255;
        const g = parseInt(hexColor.substring(3, 5), 16) / 255;
        const b = parseInt(hexColor.substring(5, 7), 16) / 255;

        const rLinear = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
        const gLinear = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
        const bLinear = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

        return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
    }

    const lightColourList = colours.filter(color => calculateLuminance(color) > 0.25);
    const darkColourList = colours.filter(color => calculateLuminance(color) <= 0.25);

    const colourList = theme === 'light' ? darkColourList : lightColourList;

    useLayoutEffect(() => {
        const svg = document.querySelector('svg') as SVGSVGElement | null;
        const path = (svg?.querySelector('path') as SVGPathElement | null);
        const word = document.querySelector('#brand') as HTMLElement | null;
        const letters = document.querySelectorAll('#name span') as NodeListOf<HTMLSpanElement>;

        if (letters && word && path && theme && svg) {
            let intervalId: number | undefined;

            const animateLoop = () => {
                intervalId = window.setInterval(() => {
                    const randomColourIndex = Math.floor(Math.random() * colourList.length);
                    const randomColour = colourList[randomColourIndex];
                    if (path) {
                        path.style.transition = 'fill 1s ease-in-out';
                        path.style.fill = randomColour;
                    }
                    letters?.forEach((letter) => {
                        let randomLetterColourIndex = Math.floor(Math.random() * colourList.length);
                        while (randomLetterColourIndex === randomColourIndex) {
                            randomLetterColourIndex = Math.floor(Math.random() * colourList.length);
                        }
                        letter.style.transition = 'color 2.5s ease-in-out';
                        letter.style.color = colourList[randomLetterColourIndex];
                    });
                }, 1000);
            };

            // Start animation immediately on page load
            animateLoop();

            return () => {
                if (intervalId) {
                    window.clearInterval(intervalId);
                }
            };
        }
    }, [colourList, theme]);

    return (
        <header
            id="header"
            className="z-20 border-b border-neutral-200 bg-white/70 backdrop-blur supports-backdrop-filter:bg-white/60 dark:border-neutral-800 dark:bg-neutral-950/70"
        >
            <div className="container-responsive flex items-center justify-between py-2 vertical-align:middle" id="brand">
                <div className="flex items-center gap-1">
                    <img
                        width={80}
                        height={80}
                        src="/tesseract-dark.svg"
                        alt="Strangeways Developments"
                        className="inline-flex mr-1 h-12 w-auto items-center justify-center dark:hidden"
                    />
                    <img
                        width={80}
                        height={80}
                        src="/tesseract-light.svg"
                        alt="Strangeways Developments"
                        className="hidden mr-1 h-12 w-auto items-center justify-center dark:inline-flex"
                    />
                    <span className="text-xl sm:text-2xl font-italic tracking-tight uppercase">
                        <Link to={"/"}>
                            <div id="name" className="italic ibm-plex-sans-700">
                                {name.map((letter, index) => (
                                    <span key={index}>{letter}</span>
                                ))}
                            </div>
                        </Link>
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <nav className="hidden items-center gap-3 md:flex">
                        <a
                            href="#work"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToId('work')
                            }}
                            className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                        >
                            Work
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToId('about')
                            }}
                            className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                        >
                            About
                        </a>
                        <a
                            href="#faq"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToId('faq')
                            }}
                            className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                        >
                            FAQ
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToId('contact')
                            }}
                            className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                        >
                            Contact
                        </a>
                        <ThemeToggle />
                    </nav>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded border border-neutral-200 p-2 text-neutral-700 md:hidden dark:border-neutral-800 dark:text-neutral-200"
                        aria-label="Toggle menu"
                        aria-controls="mobile-menu"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <FontAwesomeIcon
                            icon={open ? faSquareMinus : faSquarePlus}
                            className="text-xl"
                        />
                    </button>
                </div>
            </div>
            {open && (
                <nav
                    id="mobile-menu"
                    className="border-t border-neutral-200 bg-white md:hidden dark:border-neutral-800 dark:bg-neutral-950"
                >
                    <div className="container-responsive flex flex-col gap-2 py-3">
                        <a
                            onClick={(e) => {
                                e.preventDefault()
                                setOpen(false)
                                scrollToId('work')
                            }}
                            href="#work"
                            className="py-2 text-base text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
                        >
                            Work
                        </a>
                        <a
                            onClick={(e) => {
                                e.preventDefault()
                                setOpen(false)
                                scrollToId('about')
                            }}
                            href="#about"
                            className="py-2 text-base text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
                        >
                            About
                        </a>
                        <a
                            onClick={(e) => {
                                e.preventDefault()
                                setOpen(false)
                                scrollToId('contact')
                            }}
                            href="#contact"
                            className="py-2 text-base text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
                        >
                            Contact
                        </a>
                        <div className="py-2">
                            <ThemeToggle />
                        </div>
                    </div>
                </nav>
            )}
        </header>
    )
}
