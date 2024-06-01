import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@/constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  titleText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: COLORS.white,
  },
  clientDets: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 10,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: SIZES.medium,
    color: COLORS.text,
  },
  radioButtonContainer: {
    marginTop: 5,
    marginBottom: 10,
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
    alignItems: 'center',
  },
  cardIcon: {
    marginLeft: 10,
  },
  buttonContainer: {
    backgroundColor: COLORS.themeRed,
    borderRadius: 15,
    paddingVertical: 16,
    marginHorizontal: 40,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    textTransform: 'uppercase'
  },
});

export default styles;
