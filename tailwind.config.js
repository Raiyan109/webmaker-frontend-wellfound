/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#1F2937',
        titleButtonGray: '#4B5563',
        titleGray2: '#667085'
      },
    },
  },
  plugins: [],
}