/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      margin:{
        'full': '100%'
      }
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'darkgray': '#5E6472',
      'subheader': '#AED9E0',
      'login': '#FAF3DD',
      'maincontent': '#FFA69E',
      'secondarycontent': '#B8F2E6'
    }
  },
  plugins: [],
}

