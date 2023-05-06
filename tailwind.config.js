/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {

    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },

    extend: {
      colors: {
        'green-base': '#d9e8da',
        'green-base-2': '#2ec936',
        'green-base-3': '#137f12',
        'yellow-base': '#e5ca00',
      }
    },
    
  plugins: [],
}
}
