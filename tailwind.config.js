/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'green-base': '#d9e8da',
        'green-base-2': '#2ec936',
        'yellow-base': '#e5ca00',
      }
    },
  },
  plugins: [],
}

