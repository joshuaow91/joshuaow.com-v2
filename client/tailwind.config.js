/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': 'rgb(23, 23, 27)',
      },
      fontFamily: {
        'paytone': ['Paytone One', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif']
      },
    }
  },
  plugins: [],
}

