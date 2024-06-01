import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@/constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 40,
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
