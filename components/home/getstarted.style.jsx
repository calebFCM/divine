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
    justifyContent: 'flex-end',
    marginBottom: 13,
  },
  icon: {
    color: COLORS.text,
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
    alignItems: 'center',
    marginTop: 'auto', // Pushes the button to the bottom
    marginBottom: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    textTransform: 'uppercase'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  closeIconContainer: {
    position: 'absolute',
    top: 33,
    right: 20,
  },
  closeIcon: {
    color: COLORS.white, // Change to white color
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
    paddingTop: 40, // 40 padding at the top
    paddingBottom: 40, // 40 padding at the bottom
    marginHorizontal: 15,
    height: modalHeight,
  },
  modalHeading: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 20,
  },
  modalText: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    marginBottom: 5,
  },
  modalButtonContainer: {
    backgroundColor: COLORS.themeRed,
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 'auto', // Pushes the button to the bottom
    marginBottom: 20,
  },
  modalButtonText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    textTransform: 'uppercase'
  },
});

export default styles;
