import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeMessage: {
    fontFamily: FONT.RobotoRegular,
    fontSize: SIZES.medium,
    color: COLORS.lightGray,
  },
  welcomeHeading: {
    fontFamily: FONT.MontserratBold,
    fontSize: SIZES.xLarge,
    color: COLORS.iou,
    marginTop: 2,
  }
});

export default styles;
