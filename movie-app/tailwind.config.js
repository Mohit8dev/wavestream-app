/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'windowgray': '#0E0E0E',
        'lightgray' : '#1C1C1C',
        'themepurple' : '#5A2E98',
      }
    },
    fontFamily: {
      'teko' : 'Teko',
      'raleway': "Raleway",
      'kalam' : 'Kalam'
    },
    screens: {
      'sm'  : '346px',
      'md'  : '768px',
      'lg'  : '1024px',
      'xl'  : '1280px',
      '2xl' : '1500px',
    }
  },
  plugins: [],
}

