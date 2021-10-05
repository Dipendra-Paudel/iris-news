module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#f52f56",
        primary2: "#de1840",
        secondary: "#155dd1",
        secondary2: "#0c49ab",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
