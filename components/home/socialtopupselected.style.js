import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 30,
    flex: 1, // Ensure the container takes the full height
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
  allBundles: {
    marginTop: 10,
    color: COLORS.lightGray,
    fontSize: SIZES.medium,
  }, 
  clickableBox: {
    marginTop: 20,
  },
  greenBox: {
    backgroundColor: COLORS.themeRed,
    borderRadius: 10,
    padding: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  whiteBox: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 8,
  },
  bigText: {
    fontSize: SIZES.xLarge,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  type: {
    fontSize: SIZES.large,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  included: {
    fontSize: SIZES.small,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 7,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 65,
  },
  leftText: {
    textAlign: 'left',
  },
  rightText: {
    textAlign: 'right',
  },
  price: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: COLORS.white,
  },
  additionalTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  additionalTextLeft: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    textAlign: 'left',
  },
  additionalTextRight: {
    fontWeight: '900',
    fontSize: SIZES.medium,
    color: COLORS.text,
    textAlign: 'right',
  },
  buttonContainer: {
    backgroundColor: COLORS.themeRed,
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 50, 
    left: 20, 
    right: 20, 
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    textTransform: 'uppercase'
  },
});

export default styles;
