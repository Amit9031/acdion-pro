/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FAF9F5',
          100: '#F4F2EB',
          200: '#E8E5DA',
          800: '#1C1D21',
          900: '#121316',
          950: '#0B0C0E',
        },
        terracotta: {
          500: '#C95230',
          600: '#B24222',
          700: '#913317',
        },
        ink: {
          900: '#18181B',
          700: '#3F3F46',
          500: '#71717A',
          400: '#A1A1AA',
        }
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
