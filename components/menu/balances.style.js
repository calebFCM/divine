import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@/constants';

const styles = StyleSheet.create({
   container: {
     paddingHorizontal: 20,
     paddingBottom: 40,
     marginTop: 30,
   },
   BackBtnContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     marginBottom: 13,
   },
   headText: {
     fontSize: SIZES.large,
     fontWeight: 'bold',
     color: COLORS.text,
     marginLeft: 8,
   },
   mediumText: {
     fontSize: SIZES.large,
     fontWeight: 'bold',
     marginTop: 0,
     marginLeft: 10,
   },
   boxContainer: {
     backgroundColor: COLORS.white,
     padding: 20,
     marginTop: 10,
     borderWidth: 2,
     borderColor: COLORS.text,
     marginBottom: 10,
     borderRadius: 8,
   },
   topPart: {
    flexDirection: 'row'
   },
   icon: {
     width: 25,
     height: 25,
     color: COLORS.text,
   },
   middle: {
      flex: 1, // Occupy remaining space
      marginRight: 20,
      marginTop: 10,
   },
   grayLine: {
     borderBottomWidth: 1,
     borderBottomColor: COLORS.gray,
     marginVertical: 20,
   },
  balanceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6                                                  ,
  },
  balanceLabel: {
    flex: 1,
    marginLeft: 35,
    fontSize: SIZES.medium,
    fontWeight: '400',
  },
  balanceAmount: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  chevronIcon: {
    color: COLORS.themeGreen,
  },
  purchaseAgain: {
    flexDirection: 'row', 
    justifyContent: 'flex-end',
    marginTop: 10, 
  },
  purchaseText: {
    textDecorationLine: 'underline',
    color: COLORS.themeRed,
  },
  divider: {
    color: COLORS.text,
  },
});

export default styles;
