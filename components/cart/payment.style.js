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
    color: COLORS.text,
  },
  headingText: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
    marginLeft: 8,
  },
  whiteBox: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
    marginTop: 12,
  },
  infoIcon: {
    color: COLORS.themeRed,
    marginLeft: 10,
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
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure items are spaced out correctly
    marginTop: 15,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    fontSize: SIZES.medium,
    marginLeft: 8,
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
    fontWeight: 'bold',
  },
  totalTextRight: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: COLORS.themeRed,
    borderRadius: 15,
    paddingVertical: 16,
    marginTop: 10,
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
