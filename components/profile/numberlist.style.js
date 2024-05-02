import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@/constants';

const styles = StyleSheet.create({
  container: {
   paddingHorizontal: 20,
    marginBottom: 10,
  },
  heading: {
    fontSize: SIZES.large,
    color: COLORS.themeGreen,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  dropdown: {
    marginTop: 10,
    marginLeft: -10,
  },
  menuAnchor: {
   backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 15,
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
  menuText: {
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  chooseText: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 20,
  },
  grayText: {
   marginTop: 10,
    color: COLORS.gray,
  },
  inputField: {
   backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  contactListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactListText: {
   paddingRight: 70,
    flex: 1,
    color: COLORS.text,
  },
  iconButton: {
   padding: 10,
   borderRadius: 200,
   backgroundColor: COLORS.headingGreen,
   marginVertical: 10,
  },
  icon: {
   color: COLORS.text,
   fontSize: 12,
  },
  buttonContainer: {
    backgroundColor: COLORS.themeGreen,
    borderRadius: 8,
    paddingVertical: 16,
    marginTop: 10,
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
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
  underlineButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  underlineButtonText: {
   marginTop: 10,
   color: COLORS.themeGreen,
    textDecorationLine: 'underline',
  },
});

export default styles;
