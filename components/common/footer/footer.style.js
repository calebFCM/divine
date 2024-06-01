import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLORS.themeRed,
    borderRadius: 20,
    paddingBottom: 10,
    alignItems: 'center',
    paddingTop: 10,
    marginHorizontal: 20,
    height: 60, // Adjust height as needed
    elevation: 0, // For Android
    shadowOpacity: 0, // For iOS
    shadowOffset: { width: 0, height: 0 }, // For iOS
    shadowRadius: 0, // For iOS
  },
  iconContainer: {
    alignItems: 'center',
  },
  labelText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
  highlightedLabel: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
});
