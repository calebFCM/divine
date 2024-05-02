import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 100,
    colors: COLORS.themeGreen,
    marginTop: 90
  },
  text: {
    marginTop: 20,
    fontSize: SIZES.large,
    color: COLORS.text,
    fontWeight: 'bold',
  },
});

export default styles;
