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
  cameraView: {
    width: 200, // Adjust as needed
    height: 200, // Adjust as needed
    backgroundColor: COLORS.lightGray,
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
   padding: 2,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: COLORS.themeRed,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  captureButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.themeRed,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default styles;
