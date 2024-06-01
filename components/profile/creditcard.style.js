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
  label: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  inlineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inlineItem: {
    flex: 1,
  },
  cvv: {
    marginLeft: 40,
  },
  inlineInput: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    padding: 10,
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  buttonContainer: {
    backgroundColor: COLORS.themeRed,
    borderRadius: 15,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    textTransform: 'uppercase',
  },
});

export default styles;
