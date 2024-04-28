import { StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 20,
      marginTop: 20,
    },
    balanceHeading: {
      color: COLORS.underline,
      fontSize: SIZES.xLarge,
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
      width: 125,
      shadowColor: '#000',
      margin: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    icon: {
      width: 25,
      height: 25,
    },
    smallText: {
      fontSize: SIZES.xSmall,
    },
    largeText: {
      fontSize: SIZES.medium,
      fontWeight: 'bold',
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
    buttonText: {
      color: 'white',
      fontSize: SIZES.small,
    },
});

export default styles;
