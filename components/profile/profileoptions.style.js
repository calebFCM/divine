import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '@/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  optionContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginBottom: 15,
    padding: 25,
    paddingVertical: 27,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: SIZES.medium,
    color: COLORS.lightGray,
  },
});

export default styles;
