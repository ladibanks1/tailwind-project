/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../HTML/*.html",
    "../CSS/*.css",
  ],
  theme: {
    extend: {
     colors:{
      "gold" : {
        "100": "#ffd700"
      },
      "navy-blue" : "#00008B",
      "forest-green": "#228B22",
      "wine" : "rgb(162, 28, 49)"
     },
     spacing:{
        "50" : "50%",
        "75" : "75%"
     },
    screens: {
      "sm": "600px",
    }
    },
  },
  plugins: [],
}

