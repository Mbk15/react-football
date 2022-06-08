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
        primary_hover: "#BA4A0C",
        primary_red: "#D23131",
        neutral_primary: "#222222",
        neutral_secondary: "#2D2D2D",
        heading: "#F8F8F8",
        normal: "#CBCBCB",
        muted: "#999999",
        disabled: "#707070",
        border_default: "#494949",
      },
      spacing: {
        hugW: "105px",
        hugH: "44px",
      },
    },
  },
  plugins: [],
};
