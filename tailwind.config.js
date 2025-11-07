/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0EAFF',
          200: '#C7D6FF',
          300: '#A4B6FF',
          400: '#7E8EFF',
          500: '#5B6AFF',
          600: '#3C4AFF',
          700: '#2F3AD9',
          800: '#232CA6',
          900: '#1A217F',
        },
      },
      boxShadow: {
        glow: '0 10px 30px rgba(91,106,255,0.3)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
      }
    },
  },
  plugins: [],
};
