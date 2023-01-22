/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      fontSize: {
        "xxs": '0.625rem',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
};
