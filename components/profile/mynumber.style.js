import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
    marginTop: 30,
    marginBottom: 40,
    marginHorizontal: 20,
    borderRadius: 8,
    shadowColor: COLORS.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  buttonContainer: {
    backgroundColor: COLORS.themeRed,
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    textTransform: 'uppercase',
  },
  anotherNumber: {
   marginTop: 30,
   color: COLORS.themeRed,
   textDecorationLine: 'underline',
   fontWeight: '400'
  },
});

export default styles;
