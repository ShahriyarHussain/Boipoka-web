module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkblue: "#14213D",
        purewhite: "#FFFFFF",
        pureblack: "#000000",
        mildorange: "#FCA311",
        offwhite: "#E5E5E5",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
