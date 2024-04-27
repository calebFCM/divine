import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({

  signInHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 120, // Set the height of the header
    paddingHorizontal: 20,
  },

  headerLogo:{
    width: 120, // Set the width of the logo
    height: 60, // Set the height of the logo
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
