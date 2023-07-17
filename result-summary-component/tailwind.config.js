/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        /* PRIMARY */
        lightRed: "hsl(0, 100%, 67%)",
        OrangeYellow: "hsl(39, 100%, 56%)",
        GreenTeal: "hsl(166, 100%, 37%)",
        CobaltBlue: "hsl(234, 85%, 45%)",

        /* GRADIENTS */
        lightSlateBlue: "hsl(252, 100%, 67%)" /* (background) */,
        lightRoyalBlue: "hsl(241, 81%, 54%)" /* (background) */,
        VioletBlue: "hsla(256, 72%, 46%, 1)" /* (circle) */,
        PersianBlue: "hsla(241, 72%, 46%, 0)" /* (circle) */,

        /* NEUTRAL */
        PaleBlue: "hsl(221, 100%, 96%)",
        LightLavender: "hsl(241, 100%, 89%)",
        DarkGrayBlue: "hsl(224, 30%, 27%)",
      },

      fontFamily: {
        hankenGrotesk: ["'Hanken Grotesk'"],
      },
    },
  },
  plugins: [],
};
