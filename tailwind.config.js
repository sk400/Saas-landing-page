/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#fffdfd",
          "200": "#292526",
          "300": "#231f20",
          "400": "#1d1d1d",
          "500": "#1d1d1b",
        },
        black: "#000",
        coral: "#ff734f",
        "faq-border-bottom-color": "#f24e1e",
        tomato: "#f86642",
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f6f6f6",
        },
        snow: {
          "100": "#fffcfd",
          "200": "#fffbfb",
        },
        orangered: "#ff6900",
        aliceblue: "#e0eaf3",
        powderblue: "#91cfd2",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        inter: "Inter",
      },
      borderRadius: {
        "16xl": "35px",
        mini: "15px",
        "xs-8": "11.8px",
        "31xl": "50px",
      },
    },
    fontSize: {
      mini: "15px",
      sm: "14px",
      "31xl": "50px",
      "4xl": "23px",
      "19xl": "38px",
      lg: "18px",
      "16xl-7": "35.7px",
      base: "16px",
      "21xl": "40px",
      "10xl": "29px",
      xs: "12px",
      smi: "13px",
      "127xl": "146px",
      "5xl": "24px",
      "base-4": "16.4px",
      "8xl": "27px",
      xl: "20px",
      "15xl": "34px",
      lgi: "19px",
      "9xl": "28px",
      mid: "17px",
      "25xl": "44px",
      inherit: "inherit",
    },
    screens: {
      xs: {
        raw: "screen and (min-width: 320px)",
      },
      sm: {
        raw: "screen and (min-width: 640px)",
      },
      md: {
        raw: "screen and (min-width: 768px)",
      },
      lg: {
        raw: "screen and (min-width: 1024px)",
      },
      xl: {
        raw: "screen and (min-width: 1280px)",
      },
      mq2xl: {
        raw: "screen and (min-width: 1536px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
