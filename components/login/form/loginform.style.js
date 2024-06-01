

import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
  container:{
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
  buttonContainer: {
    backgroundColor: COLORS.themeRed,
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    textTransform: 'uppercase'
  },
});

export default styles;
