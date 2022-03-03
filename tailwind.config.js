module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}"],
  theme: {
    extend: {
      spacing: {
        mbottom: "100%",
        "65%": "29rem",
        100: "35rem",
        "ml50%": "50%",
        "30p": "27%",
        "35p": "35%",
        "60p": "60%",
        "85p": "85%",
        "15p": "15%",
      },
      fontFamily: {
        goth: ['"Gothic A1"'],
        ubuntu: ["Ubuntu"],
      },
      colors: {
        white: "white",
        skyblue: "#29abe2",
        bgpurple: "#64a2ff",
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
