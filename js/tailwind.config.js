tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        mainbgblue: "#011e26",
        mainbgblue2: "#213c4786",
        bgWrapper: "#00000073",
        customGray1: "#3d4144",
        whiteShadow: "#FFF",
        redShadowSpread: "0 4px 20px 20px rgba(255, 0, 0, 0.5)", // X, Y, blur, spread, color
      },

      screens: {
        lgMd: "991px", // Adding a custom breakpoint
      },
    },
  },
};
