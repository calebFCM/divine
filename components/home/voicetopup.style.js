import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
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
  allBundles: {
   marginTop: 10,
   color: COLORS.lightGray,
   fontSize: SIZES.medium,
  }, 
  clickableBox: {
    marginTop: 20,
  },
  greenBox: {
    backgroundColor: COLORS.textGreen,
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
  included: {
    fontSize: SIZES.small,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 7,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 75,
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
   
});

export default styles;
   