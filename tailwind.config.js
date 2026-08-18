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
        awwlight: {
          bg: '#FAFAFA',
          surface: '#FFFFFF',
          search: '#EAEAEA',
          border: '#E2E2E2',
          black: '#111111',
          pill: '#222222',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
