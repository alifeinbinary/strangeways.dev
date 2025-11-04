/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'IBM Plex Sans',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji',
                ],
            },
            colors: {
                brand: {
                    50: '#f5f7ff',
                    100: '#e9edff',
                    200: '#c8d3ff',
                    300: '#a6b7ff',
                    400: '#7f95ff',
                    500: '#6378f6',
                    600: '#4f60d6',
                    700: '#424fb0',
                    800: '#373f8c',
                    900: '#2e356f',
                    950: '#1a1d3f',
                },
            },
            boxShadow: {
                subtle: '0 1px 2px rgba(0,0,0,0.06), 0 1px 1px rgba(0,0,0,0.04)',
            },
            transitionProperty: {
                height: 'height',
                'max-height': 'max-height',
            },
        },
        fontSize: {
            xl: [
                '2.25rem',
                {
                    lineHeight: '1.75rem',
                    letterSpacing: '-0.01em',
                    fontWeight: '500',
                },
            ],
            '2xl': [
                '3.5rem',
                {
                    lineHeight: '2rem',
                    letterSpacing: '-0.01em',
                    fontWeight: '500',
                },
            ],
            '3xl': [
                '4.875rem',
                {
                    lineHeight: '2.25rem',
                    letterSpacing: '-0.02em',
                    fontWeight: '700',
                },
            ],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
