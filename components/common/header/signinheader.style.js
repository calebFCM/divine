import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({

  signInHeaderContainer: {
    backgroundColor: COLORS.themeRed,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 120, // Set the height of the header
    paddingHorizontal: 20,
  },

  headerLogo:{
    width: 123, // Set the width of the logo
    height: 66, // Set the height of the logo
    marginBottom: 20,
  },
  
  signInHeadingContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
    marginTop: 10,
 },

 signInHeadingText: {
    fontSize: SIZES.xxLarge,
    color: COLORS.headingGreen,
    fontWeight: "bold",
 },
});
export default styles;
