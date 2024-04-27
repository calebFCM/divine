import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
   container: {
     backgroundColor: COLORS.themeGreen,
     paddingTop: 15,
     paddingBottom: 10,
     paddingHorizontal: 20,
   },
   name: {
     color: COLORS.white,
     fontSize: SIZES.medium,
   },
   headerContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
   },
   phoneNumber: {
     color: COLORS.white,
     fontSize: 16,
   }
});
export default styles;
