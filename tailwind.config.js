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
        blogBg: '#F5F7FB',
        blogColor: '#02A5E9',
        textColor: '#A3A3A3',
        categoryTech: ''
      }
    },
  },
  plugins: [],
}
