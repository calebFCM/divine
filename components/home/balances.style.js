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
      marginBottom: 20,
    },
    balanceCardsContainer: {
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
      borderRadius: 20,
      padding: 20,
      width: 150,
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
      marginBottom: 10,
      marginLeft: -10,
    },
    smallText: {
      fontSize: 14,
      marginBottom: 5,
    },
    largeText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    balancesButton: {
      marginTop: 30,
      marginBottom: 30,
      backgroundColor: '#27bbb5',
      paddingVertical: 12,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 8,
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
      fontSize: 16,
      fontWeight: 'bold',
    },
});

export default styles;
