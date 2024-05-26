/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Hanken Grotesk", ...defaultTheme.fontFamily.sans],
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        heading: "#171F46",
        para: "#7E858E",
        primaryButton: "#2DCA73",
        secnodaryButton: "#0B69FF",
        borderColor: "#D7DFE9",
      },
    },
  },
  plugins: [],
};
