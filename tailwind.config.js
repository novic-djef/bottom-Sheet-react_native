module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#D1C4E9",
          DEFAULT: "#512DA8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
