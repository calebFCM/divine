import { StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 20,
      marginTop: 20,
    },
    BackBtnContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    icon: {
      width: 25,
      height: 25,
      color: COLORS.text,
    },
    headText: {
      fontSize: SIZES.large,
      fontWeight: 'bold',
      color: COLORS.text,
      marginLeft: 8,
    },
    additionalTextContainer: {
      alignItems: 'center',
      marginTop: 40,
    },
    additionalTextTop: {
      fontSize: SIZES.medium,
      color: COLORS.gray,
    },
    additionalTextMiddle: {
      fontSize: SIZES.medium,
      color: COLORS.text,
      color: COLORS.gray,
    },
    boldText: {
      fontWeight: 'bold',
    },
    additionalTextBottom: {
      fontSize: SIZES.medium,
      color: COLORS.text,
      color: COLORS.gray,
      marginTop: 20,
    },
    bluBox: {
      alignItems: 'center',
      marginTop: 20,
    },
    flashBox: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 50,
    },
    box: {
      backgroundColor: COLORS.white,
      borderRadius: 10,
      padding: 20,
      paddingHorizontal: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    boxIcon: {
      marginRight: 20,
      width: 40,
      height: 40,
    },
    boxContent: {
      flex: 1,
    },
    boxTextTop: {
      fontSize: SIZES.medium,
      colors: COLORS.white,
    },
    boxTextBottom: {
      fontSize: SIZES.medium,
      color: COLORS.white,
    },
});

export default styles;
