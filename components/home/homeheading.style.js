import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  icon: {
    color: COLORS.underline,
  },
  headingText: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.underline,
    marginLeft: 8,
  },
   
});

export default styles;
   