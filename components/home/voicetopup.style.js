import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   
  container: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  BackBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: COLORS.text,
  },
  headingText: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
    marginLeft: 8,
  },
  amountHeading: {
    marginTop: 30,
    fontSize: SIZES.large,
    fontWeight: '600',
    color: COLORS.text,
  },
  buttonContainer: {
    backgroundColor: COLORS.themeRed,
    borderRadius: 15,
    paddingVertical: 16,
    marginTop: 40,
    marginHorizontal: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    textTransform: 'uppercase'
  },
   
});

export default styles;
   