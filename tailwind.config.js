module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FEA013",
        primary_red: "#D23131",
        secondary: "#BA4A0C",
        neutral_primary: "#222222",
        neutral_secondary: "#2D2D2D",
      },
    },
  },
  plugins: [],
};
