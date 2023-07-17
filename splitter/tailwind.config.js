/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ["Space Mono"],
      },
      colors: {
        //Primary
        strongCyan: "var(--strong-cyan)",

        //Neutral
        veryDarkCyan: "var(--very-dark-cyan)",
        darkGrayishCyan: "var(--dark-grayish-cyan)",
        grayishCyan: "var(--grayish-cyan)",
        lightGrayishCyan: "var(--light-grayish-cyan)",
        veryLightGrayishCyan: "var(--very-light-grayish-cyan)",
      },
    },
  },
  plugins: [],
};
