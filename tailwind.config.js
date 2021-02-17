const colors = require("tailwindcss/colors");
module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      gray: colors.trueGray,
      bluegray: colors.blueGray,
      red: colors.red,
      blue: colors.lightBlue,
      teal: colors.teal,
      green: colors.green,
      white: colors.white,
      black: colors.black,
      yellow: colors.amber,
    },
    extend: {},
  },
  variants: {
    extend: {
      // ...

      visibility: ["hover", "focus"],
    },
  },
  plugins: [],
};
