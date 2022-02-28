module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        mbottom: "100%",
        "65%": "29rem",
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
      },
    },
  },
  plugins: [],
};
