const COLORS = {
  background: "#F9FAFF",

  themeGreen: "#1a9d9b",
  headingGreen: "#aadbda",
  underline: "#3f8280",
  textGreen: "#27bbb5",
  
  gray: "#777777",
  lightGray: "#c4c6c5",

  white: "#FFFFFF",
  text: "#000000",
};

const FONT = {
  RobotoRegular: "RobotoRegular",
  RobotoBold: "RobotoBold",
  MontserratMedium: "MontserratMedium",
  MontserratBold: "MontserratBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 15,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
