import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@/constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  heading: {
    fontSize: SIZES.large,
    color: COLORS.text,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: 'bold',
  },
  subheading: {
    color: COLORS.gray
  },
  boxContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 16,
    paddingBottom: 5,
    marginTop: 10,
    shadowColor: COLORS.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  labelText: {
    fontSize: SIZES.medium,
    fontWeight: '600',
    color: COLORS.gray,
  },
  grayLine: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  numberContainer: {
  },
  number: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  numberText: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    fontWeight: '600'
  },
  chooseText: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 30,
  },
  grayText: {
    marginTop: 10,
    color: COLORS.gray,
  },
  inputField: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  contactListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactListText: {
    paddingRight: 70,
    flex: 1,
    color: COLORS.gray,
  },
  iconButton: {
    padding: 10,
    borderRadius: 200,
    backgroundColor: COLORS.faintRed,
    marginVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  buttonContainer: {
    backgroundColor: COLORS.themeRed,
    borderRadius: 15,
    marginHorizontal: 20,
    paddingVertical: 16,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
});

export default styles;
