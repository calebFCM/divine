import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONT, SIZES } from "@/constants";

const { height, width } = Dimensions.get('window');

const modalHeight = height * 0.6; // 20% shorter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
    marginTop: 30,
  },
  BackBtnContainer: {
    flexDirection: 'row',
    marginBottom: 13,
  },
  icon: {
    color: COLORS.text,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
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
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
  whiteBox: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
  },
  headingContainer: {},
   textContainer: {
    marginTop: 10,
  },
  heading: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  text: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    marginVertical: 2,
  },
  buttonContainer: {
    backgroundColor: COLORS.themeRed,
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 'auto', // Pushes the button to the bottom
    marginBottom: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    textTransform: 'uppercase'
  },
});

export default styles;
