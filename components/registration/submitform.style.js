import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@/constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  progressView: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  titleText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    textAlign: 'center',
    marginBottom: 20,
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
