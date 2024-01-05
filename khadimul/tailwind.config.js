/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#0e459f",
        secoundary:"#b4e466",
        third:"#eef5ff",
        grey:"#b9b9b9",
        line:"#053889"
      },
      fontFamily:{
        "rowdies":['Rowdies', 'sans-serif']
      },
      backgroundImage:{
        'hero':'url(./src/assets/hero.jpg)',
        'hajj':'url(./src/assets/hajj.jpg)',
        'umrah':'url(./src/assets/umrah.jpg)',
        'experience':'url(./src/assets/experience.jpg)',
      },
      height:{
        45:"47%",
        60:"60%",
        43:"43%",
        70:"70vh"
      }
    },
  },
  plugins: [],
}

