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
    color: COLORS.underline,
  },
  headingText: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.underline,
    marginLeft: 8,
  },
  amountHeading: {
    marginTop: 20,
    fontSize: SIZES.medium,
    color: COLORS.text,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 15,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    backgroundColor: COLORS.white,
  },
  currencySign: {
    fontSize: SIZES.large,
    marginLeft: 15,
    marginRight: 5,
    color: COLORS.text,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  instructionText: {
    marginTop: 7,
    fontSize: SIZES.small,
    color: COLORS.text,
  },
   
});

export default styles;
   