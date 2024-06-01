import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@/constants';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  image: {
    marginTop: '40%',
  },
  container: {
    flex: 1,
  },
  loginContainer: {
    marginBottom: 30,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  loginText: {
    fontSize: SIZES.xxLarge,
    color: COLORS.text,
    fontWeight: "bold",
    textAlign: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  welcomeText: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  registerText: {
    fontSize: SIZES.medium,
  },
  registerLink: {
    color: COLORS.themeRed, // Change color
  },
  registerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsText: {
    marginTop: 15,
    textAlign: "center",
    color: COLORS.text
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    flex: 1, // Ensure the form container takes up available space
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: COLORS.white,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: SIZES.medium,
    color: COLORS.text,
  },
  orText: {
    fontSize: SIZES.medium,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: COLORS.themeRed,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    textTransform: 'uppercase'
  },
  overlay: {
    flex: 1,
    margin: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white
    borderRadius: 10, // Optional: Add rounded corners
    justifyContent: 'center',
  },
  loginScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 100, // Add padding to ensure content is not hidden behind the button
  },
  logoContainer: {
    // Additional styles for logo container if needed
  },
  logo: {
    width: 100,
    height: 100,
    aspectRatio: 1,
  },
});

export default styles;
