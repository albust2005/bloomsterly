/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode" : "class",
  theme: {
    extend: {
      fontFamily:{
        'bloomsterly': ['Great Vibes', 'Arial', 'sans-serif'],
        'title' : ['Merriweather', 'Arial', 'sans-serif'],
        'subTitle' : ['Poppins', 'Arial', 'sans-serif'],
        'text' : ['Raleway', 'Arial', 'sans-serif'],
      },
      colors:{
        'dark_theme': "#2D0969",
        'color_font_dark' : "#9173C4",
        'light_theme' :"#F5E1CE",
        'second_color_lt' :"#BC0B38",
        'nav_light_theme' : "#EEDAC7",
        'color_font_light' : "#3c0764",
        'color_switch_theme_dark' : "#9173C4",
        'color_inicio_sesion' : "#D9C2FF",
        'empresa_card' : "#D9C2FF",
        'admin_card' : "rgb(160, 107, 249)",
        'hover_boton_admin': "#5c46bc", 
        'border_tabla': "#6c1a95"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        'minicel' : "250px",
        'celular' : '350px'
      },
      height: {
        'screen/100' :'100vh'
      }, 
    },
   
  },
  plugins: [],
}

