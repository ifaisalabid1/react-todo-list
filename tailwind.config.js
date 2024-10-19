/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
