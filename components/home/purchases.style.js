import { StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 20,
      marginTop: 20,
    },
    purchaseHeading: {
      color: COLORS.underline,
      fontSize: SIZES.large,
      fontWeight: 'bold', 
    },
    balanceCardsContainer: {
      marginTop: 20,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    topCards: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    bottomCards: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    card: {
      backgroundColor: COLORS.white,
      borderRadius: 15,
      paddingVertical: 15,
      paddingHorizontal: 15,
      width: 115,
      shadowColor: '#000',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    icon: {
      width: 40,
      height: 40,
    },
    cardText: {
      fontSize: SIZES.medium,
      fontWeight: 'bold',
      marginTop: 3,
    },
    balancesButton: {
      marginTop: 30,
      marginBottom: 30,
      backgroundColor: '#27bbb5',
      paddingVertical: 12,
      borderRadius: 8,
      margin: 90,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    rechargeHeading: {
      color: COLORS.underline,
      fontSize: SIZES.large,
      fontWeight: 'bold',
      marginTop: 20,
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
    },
    boxTextBottom: {
      fontSize: SIZES.medium,
      color: COLORS.text,
    },
});

export default styles;
