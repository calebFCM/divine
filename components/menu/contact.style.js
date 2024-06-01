import { StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 20,
      marginTop: 20,
      marginBottom: 50,
    },
    BackBtnContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 13,
    },
    icon: {
      width: 25,
      height: 25,
      color: COLORS.additionalTextBottom,
    },
    headText: {
      fontSize: SIZES.large,
      fontWeight: 'bold',
      color: COLORS.additionalTextBottom,
      marginLeft: 8,
    },
    customerHeading: {
      color: COLORS.text,
      fontSize: SIZES.large,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 5,
    },
    additionalTextContainer: {
      alignItems: 'center',
      marginTop: 20,
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
    containerBox: {
      alignItems: 'center',
      marginTop: 10,
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
    },
    boxTextBottom: {
      fontSize: SIZES.medium,
      color: COLORS.text,
    },
    websiteContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    websiteText: {
      fontSize: SIZES.medium,
      marginRight: 5,
    },
    websiteUrl: {
      color: COLORS.themeRed,
    },
});

export default styles;
