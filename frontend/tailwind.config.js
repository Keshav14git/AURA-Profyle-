/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          bg: '#03060d',
          surface: '#102d44',
          border: '#5f8ea8',
          text: '#f8fafc', // slate-50 (offwhite)
        }
      }
    },
  },
  plugins: [],
}
