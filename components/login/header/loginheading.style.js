import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   loginContainer: {
      marginBottom: 30,
      paddingHorizontal: 20,
      marginTop: 30,
   },

   loginText: {
      fontSize: SIZES.xxLarge,
      color: COLORS.text,
      fontWeight: "bold",
      textAlign: 'center',
   },
   
});

export default styles;
   