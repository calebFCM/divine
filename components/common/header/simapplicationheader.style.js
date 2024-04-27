import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({

   container: {
      backgroundColor: COLORS.themeGreen,
      paddingHorizontal: 10,
    },
    headerContainer: {
      paddingTop: 50, 
      paddingHorizontal: 16, 
      paddingBottom: 16,
    },
    headerText: {
      fontSize: SIZES.medium,
      color: COLORS.white,
   },
});
export default styles;
