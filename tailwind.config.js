module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
        background: "rgb(253, 253, 253)",
      },
      height: {
        // 97: "24.2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
