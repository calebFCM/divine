import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   otpHeadingContainer: {
      marginBottom: 20,
      paddingHorizontal: 20,
      marginTop: 10,
   },

   otpHeadingText: {
      marginTop: 30,
      fontSize: SIZES.large,
      color: COLORS.text,
      fontWeight: "bold",
      textAlign: 'center',
   },
   
});

export default styles;
   