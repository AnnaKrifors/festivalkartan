/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    extend: {
      colors: {
        black: "rgb(35, 31, 32)",
        brown: "rgb(168, 78, 64)",
        blue: "rgb(0, 62, 74)",
        "dark-pink": "rgb(242, 130, 127)",
        green: "rgb(68, 99, 75)",
        pink: "rgb(247, 161, 161)",
        teal: "rgb(124, 204, 191)",
        white: "rgb(255, 255, 255)",
        yellow: "rgb(255, 224, 117)",
        "dark-green": "#216b5e",
        beige: "#fff8d6",
      },
    },
  },
  plugins: [],
  important: true,
};
