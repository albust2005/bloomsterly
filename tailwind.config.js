/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'bloomsterly': ['Great Vibes', 'Arial', 'sans-serif'],
        'title' : ['Merriweather', 'Arial', 'sans-serif'],
        'subTitle' : ['Poppins', 'Arial', 'sans-serif'],
        'text' : ['Raleway', 'Arial', 'sans-serif'],
      }
    },
   
  },
  plugins: [],
}

