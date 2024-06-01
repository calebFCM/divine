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
   mediumText: {
     fontSize: SIZES.medium,
     fontWeight: 'bold',
     marginTop: 10,
   },
   boxContainer: {
     flex: 1,
     backgroundColor: COLORS.white,
     padding: 20,
     marginTop: 15,
     borderWidth: 2,
     borderColor: COLORS.text,
     marginBottom: 10,
     borderRadius: 8,
     flexDirection: 'column',
     paddingVertical: 10,
   },
   purchaseHeadingsContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
   leftPurchaseHeading: {
     marginRight: 10,
   },
   rightPurchaseHeading: {
     marginLeft: 10,
   },
   boldText: {
      fontSize: SIZES.large,
     fontWeight: 'bold',
   },
   bundleDetailsTitle: {
     color: COLORS.gray,
     marginTop: 15,
     fontSize: SIZES.medium,
   },
   bundleDetailsContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'flex-start',
     marginTop: 5,
   },
   leftSide: {
     marginRight: 10,
   },
   rightSide: {
     // No need for styling as it will naturally float to the right
   },
   bundleDetailLabel: {
      color: COLORS.gray,
      fontSize: SIZES.small,
     marginTop: 10,
   },
   bundleDetailValue: {
      fontSize: SIZES.small,
      color: COLORS.gray,
      fontWeight: '600',
     marginTop: 10,
     textAlign: 'right',
   },
   viewLessContainer: {
     flexDirection: 'row',
     justifyContent: 'flex-end',
     marginTop: 20,
   },
   viewLessText: {
     color: COLORS.themeRed,
   },
});

export default styles;
