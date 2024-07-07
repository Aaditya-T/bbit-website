/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "daisy-bush-50": "#f3f2ff",
        "daisy-bush-100": "#eae6ff",
        "daisy-bush-200": "#d8d1ff",
        "daisy-bush-950": "#27066f",
        thistle: {
          "100": "#d1cce6",
          "200": "rgba(209, 204, 230, 0.09)",
        },
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        inherit: "inherit",
        "open-sans": "'Open Sans'",
        lato: "Lato",
        "orelega-one": "'Orelega One'",
      },
      borderRadius: {
        "14xl": "33px",
        "31xl": "50px",
        xl: "20px",
      },
    },
    fontSize: {
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      "29xl": "48px",
      "19xl": "38px",
      "11xl": "30px",
      lg: "18px",
      "9xl": "28px",
      "7xl": "26px",
      "2xl": "21px",
      lgi: "19px",
      "45xl": "64px",
      inherit: "inherit",
    },
    screens: {
      mq1600: {
        raw: "screen and (max-width: 1600px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
