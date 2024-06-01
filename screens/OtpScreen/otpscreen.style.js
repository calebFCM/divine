import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   OtpScreencontainer: {
      flex: 1,
   },

   overlay: {
      flex: 1,
      backgroundColor: COLORS.background,
   },
   
   logoContainer: {

   },
   logo: {
      width: 100, 
      height: 100, 
      aspectRatio: 1, 
   }
});

export default styles;
   