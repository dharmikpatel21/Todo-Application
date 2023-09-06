/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{jsx,js}"],
    theme: {
      extend: {},
    },
    plugins: [
      // eslint-disable-next-line global-require
      require('@tailwindcss/forms'),
    ],
  }