/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "src/**/*.{html,ejs}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', ...defaultTheme.fontFamily.sans],
        'roboto': ['Roboto', ...defaultTheme.fontFamily.sans],
        'noto': ['Noto Sans', ...defaultTheme.fontFamily.sans],
        'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'oswald': ['Oswald', ...defaultTheme.fontFamily.sans],
        'open-sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

