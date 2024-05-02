import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    marginTop: 30,
  },
  BackBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
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
  whiteBox: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
    marginTop: 12,
  },
  bundleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  bundleType: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: SIZES.xLarge,
  },
  bundlePrice: {
    fontSize: SIZES.xLarge,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  greyLine: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    marginBottom: 12,
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forText: {
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  phoneNumber: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  binButton: {
    alignSelf: 'flex-end',
    backgroundColor: COLORS.transparent,
    marginTop: 20,
  },
  payingWithText: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  radioButtonContainer: {
    marginTop: 5,
     marginBottom:10,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  radioBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  radioLabel: {
    fontSize: SIZES.medium,
    flex: 1,
  },
  cardIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardIcon: {
   marginLeft: 5,
  },
  receiptContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  receiptTextLeft: {
    fontSize: SIZES.medium,
    color: COLORS.text,
  },
  receiptTextRight: {
    fontSize: SIZES.medium,
    color: COLORS.text,
  },
  changeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  changeButtonText: {
    fontSize: SIZES.medium,
    color: COLORS.textGreen,
  },
  blackBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.text,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  totalTextLeft: {
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  totalTextRight: {
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  termsText: {
    fontSize: SIZES.medium,
    color: COLORS.themeGreen,
    textAlign: 'center'
  },
  termsLinkText: {
    color: '#ebb8cb',
  },
  buttonContainer: {
    backgroundColor: '#27bbb5',
    borderRadius: 8,
    paddingVertical: 16,
    marginTop: 20,
    marginBottom: 20,
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
   