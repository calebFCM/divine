import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    color: COLORS.gray,
  },
  labelText: {
    color: COLORS.gray,
  },
  highlightedIcon: {
    color: COLORS.themeGreen,
  },
  highlightedLabel: {
    color: COLORS.themeGreen,
  },
});

export default styles;