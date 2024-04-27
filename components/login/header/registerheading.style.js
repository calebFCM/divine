import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   otpHeadingContainer: {
      marginBottom: 20,
      paddingHorizontal: 20,
      marginTop: 10,
   },

   otpHeadingText: {
      fontSize: SIZES.xxLarge,
      color: COLORS.headingGreen,
      fontWeight: "bold",
   },
   
});

export default styles;
   