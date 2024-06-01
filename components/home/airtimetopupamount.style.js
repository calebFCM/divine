import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   
   container: {
      flex: 1, // Add this to make the container fill the entire screen
      paddingHorizontal: 20,
      marginTop: 30,
      justifyContent: 'space-between', // Add this to arrange items vertically with space between
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
  radioButtonContainer: {
    marginTop: 20,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  radioLabel: {
    fontSize: SIZES.medium,
  },
  radioBtns: {
    alignItems: 'flex-start',
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
   