/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainColor: '#252525',
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.3) 10px 20px 20px -20px',
        reviews:
          'rgba(0, 0, 0, 0.2) 0px 12px 20px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
      },
      dropShadow: {
        title: '#c9c9c9 0 2px 0, #bbb 0 3px 0, #000 0 4px 0',
      },
    },
  },
  plugins: [],
};
