/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blogBg: '#E0643E',
        blogColor: '#4AB18A',
        textColor: '#333',
        dateColor: 'rgb(107 114 128 / var(--tw-text-opacity))',
        pointColor: '#5316BD',
        devColor: '#4AB18A',
        testColor: '#168FBE',
        lifeColor: '#5316bE',
      }
    },
  },
  plugins: [],
}
