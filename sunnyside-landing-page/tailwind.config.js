/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow"],
        fraunces: ["Fraunces"],
      },

      colors: {
        // Primary

        softRed: "hsl(7, 99%, 70%)",
        customYellow: "hsl(51, 100%, 49%)",
        darkDesaturatedCyan: "hsl(167, 40%, 24%)", //graphic design text
        darkBlue: "hsl(198, 62%, 26%)", //photography text
        darkModerateCyan: "hsl(168, 34%, 41%)", //footer
        navCyan: "hsl(199.9, 100%, 62.16%)",
        footerBackgroundColor: "hsl(168.17, 42.51%, 67.25%)",

        // Neutral

        veryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
        veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        darkGrayishBlue: "hsl(232, 10%, 55%)",
        grayishBlue: "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
