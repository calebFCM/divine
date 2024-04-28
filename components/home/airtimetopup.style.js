import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
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
  numberHeading: {
    marginTop: 20,
    fontSize: SIZES.large,
    fontWeight: '500',
    color: COLORS.text,
  },
  radioButtonContainer: {
    marginTop: 10,
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
    flex: 1, 
    alignItems: 'flex-end',
  },
  buttonContainer: {
    backgroundColor: '#27bbb5',
    borderRadius: 8,
    paddingVertical: 16,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    textTransform: 'uppercase'
  },
   
});

export default styles;
   