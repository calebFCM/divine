import { StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, FONT, SIZES } from "@/constants";

const { width } = Dimensions.get("window");
const CARD_MARGIN = 10;
const CARD_COUNT_PER_ROW = 2;
const CARD_WIDTH = (width - (CARD_MARGIN * (CARD_COUNT_PER_ROW - 1)) - 70) / CARD_COUNT_PER_ROW;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 20,
      marginTop: 30,
    },
    purchaseHeading: {
      color: COLORS.text,
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
    },
    bottomCards: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      backgroundColor: COLORS.white,
      borderRadius: 15,
      paddingVertical: 15,
      paddingHorizontal: 15,
      width: 115,
      shadowColor: '#000',
      margin: 7,
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
      resizeMode: 'contain',
      width: 44,
      height: 44,
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
      color: COLORS.text,
      fontSize: SIZES.xLarge,
      fontWeight: 'bold',
      marginTop: 20,
    },
    additionalTextContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    additionalTextTop: {
      fontSize: SIZES.medium,
      color: COLORS.text,
    },
    additionalTextMiddle: {
      fontSize: SIZES.medium,
      color: COLORS.text,
    },
    box: {
      backgroundColor: '#e81393',
      borderRadius: 7,
      padding: 11,
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
    boxImage: {
      marginRight: 15,
      resizeMode: 'contain'
    },
    bluBanner:{
      marginLeft: -20,
      marginVertical: -20,
      borderRadius: 9,
      borderBottomRightRadius: 25,
      width: 130,
      height: 81,
    },
    flashBanner:{ 
      marginLeft: -20,
      marginVertical: -20,
      borderRadius: 9,
      borderBottomRightRadius: 25,
      width: 110,
      height: 81,
    },
    boxContent: {
      flex: 1,
    },
    boxTextTop: {
      color: COLORS.white,
      fontSize: SIZES.medium,
      fontWeight: 'bold',
    },
    boxTextBottom: {
      fontSize: SIZES.medium,
      color: COLORS.white,
    },
  
    // Style for each individual Rica box
    ricaBoxContainer: {
      flexDirection: 'row', // Align boxes horizontally
      justifyContent: 'center', // Align boxes in the center
      marginTop: 20, // Add some top margin
      paddingHorizontal: 35, // Add horizontal padding
    },
  
    // Style for each individual Rica box
    ricaBox: {
      backgroundColor: COLORS.themeRed, // Background color
      borderRadius: 10, // Rounded corners
      padding: 27, // Padding inside the box
      width: CARD_WIDTH, // Set the width based on calculated value
      marginBottom: 20, // Add some bottom margin for spacing
      marginHorizontal: 5,
      shadowColor: '#000', // Shadow color
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5, // Shadow properties for Android
      flexDirection: 'row', // Align text and icon horizontally
      alignItems: 'center', // Center text and icon vertically
    },
  
    // Style for the text inside the Rica box
    boxText: {
      color: COLORS.white, // Text color
    },
  
    // Style for the medium-sized text inside Rica box
    mediumText: {
      fontSize: SIZES.medium, // Medium font size
      fontWeight: 'bold', // Bold font weight
    },
  
    // Style for the xLarge-sized text inside Rica box
    xLargeText: {
      fontSize: SIZES.xLarge, // Extra large font size
      fontWeight: 'bold', // Bold font weight
      marginTop: -5,
    },
    boldText: {
      fontWeight: 'bold',
    },
    additionalTextBottom: {
      fontSize: SIZES.medium,
      color: COLORS.text,
      marginTop: 20,
    },
    bluBox: {
      alignItems: 'center',
      marginTop: 20,
    },
    flashBox: {
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 50,
    },
});

export default styles;
