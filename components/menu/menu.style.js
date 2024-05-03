import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@/constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  headingText: {
   paddingVertical: 20,
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.underline
  },
  whiteBox: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  buttonHeading: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonSubheading: {
    fontSize: SIZES.small,
    color: COLORS.lightGray,
  },
  buttonContainer: {
    backgroundColor: COLORS.textGreen,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 27,
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconTxt: {
   flexDirection: 'row',
   justifyContent: 'space-between',
  },
  icon: {
   paddingRight: 20,
  },
  txt: {
   color: COLORS.white,
   fontSize: SIZES.medium,
   fontWeight: 'bold'
  },
  grayLine: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    marginHorizontal: 20,
  },
});

export default styles;
