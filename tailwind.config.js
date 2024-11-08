/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        'custom' : '2px 4px 4px rgba(33, 33, 33)'
      }
    },
  },
  plugins: [],
}

