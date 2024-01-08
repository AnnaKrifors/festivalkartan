/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    extend: {
      colors: {
        eggwhite: "#FCFCFC",
        limegreen: "#B5D9B9",
        white: "#FFFFFF",
        black: "#1B1B1B",
        cherryred: "#C03743",
        darkgrey: "#BCBCBC",
        lightgrey: "#00000029",
        darkgreen: "#216B5B",
        coralred: "#E9425C",
      },
      dropShadow: {
        markerShadow: "0 0px 15px rgba(255, 255, 255, 0.93)",
      },
    },
  },
  plugins: [],
  important: true,
};
