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
          50: '#f7faf0',
          100: '#eef5df',
          200: '#ddeebf',
          300: '#c9e59b',
          400: '#b4d455',
          500: '#9cbf3b',
          600: '#7f9f2f',
          700: '#637f25',
          800: '#4d631d',
          900: '#3c4d17',
          950: '#1f280c',
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
