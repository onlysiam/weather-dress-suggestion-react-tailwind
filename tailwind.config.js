module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}"],
  theme: {
    screens: {
      sm: "500px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        mbottom: "100%",
        "65%": "29rem",
        100: "35rem",
        98: "30rem",
        "ml50%": "50%",
        "15p": "15%",
        "20p": "20%",
        "25p": "25%",
        "27p": "27%",
        "30p": "30%",
        "35p": "35%",
        "37p": "37%",
        "50p": "50%",
        "60p": "60%",
        "65p": "65%",
        "85p": "85%",
      },
      fontFamily: {
        goth: ['"Gothic A1"'],
        ubuntu: ["Ubuntu"],
      },
      colors: {
        primary: "#64a2ff",
        secondary: "#29abe2",
        accent: "#E26029",
        bgOpacityPointOne: "rgba(0,0,0,0.1)",
        navPurple: "#3154C2",
        btnPurple: "#A091EB",
        inputPurple: "#ffffff30",
        darkPurple: "#273297",
        bluishBlack: "#100e3b",
        bluishWhite: "#ddf2fc",
        skyBlueCompliment: "#E26029",
        navPurpleCompliment: "#C29F31",
      },
    },
  },
  plugins: [],
};
