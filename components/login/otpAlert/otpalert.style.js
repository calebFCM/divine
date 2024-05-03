import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
  otpAlertContainer: {
   paddingHorizontal: 20,
    },
    otpAlertText: {
      fontSize: SIZES.medium,
      marginBottom: 5,
      textAlign: "center",
      paddingHorizontal: 40,
    },
    phoneNumber: {
      fontWeight: 'bold',
    },
    circleContainer: {
      backgroundColor: COLORS.white,
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 30,
      paddingHorizontal: 20,
      paddingVertical: 20,
      alignItems: 'center',
    },
    circle: {
      width: 57,
      height: 57,
      borderRadius: 57,
      margin: 10,
      borderWidth: 2,
      borderColor: COLORS.lightGray,
      backgroundColor: COLORS.white,
      textAlign: 'center', // Align text horizontally
      textAlignVertical: 'center', // Align text vertically
      fontSize: SIZES.large,
    },
    resendText: {
      fontSize: SIZES.medium,
      marginTop: 15,
    },
    resendLink: {
      color: COLORS.underline,
      textDecorationLine: 'underline', 
    },

  });

export default styles;
   