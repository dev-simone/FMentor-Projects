/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ["Commissioner"],
      },
      colors: {
        moderateCyan: "var(--moderate-cyan)",
        darkCyan: "var(--dark-cyan)",
        darkGray: "var(--dark-gray)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
