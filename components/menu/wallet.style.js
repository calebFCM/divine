import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@/constants';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingBottom: 40,
      marginTop: 30,
   },
   BackBtnContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     marginBottom: 20,
   },
   headText: {
     fontSize: SIZES.large,
     fontWeight: 'bold',
     color: COLORS.text,
     marginLeft: 8,
   },
   subheading: {
     marginTop: 10,
     fontSize: SIZES.medium,
     color: COLORS.text,
     marginBottom: 20,
   },
   input: {
     borderWidth: 1,
     backgroundColor: COLORS.white,
     borderColor: COLORS.gray,
     borderRadius: 8,
     padding: 10,
     marginBottom: 20,
     fontSize: SIZES.medium,
     color: COLORS.black,
   },
   buttonContainer: {
     backgroundColor: COLORS.themeRed,
     borderRadius: 15,
     paddingVertical: 16,
     marginHorizontal: 40,
     paddingHorizontal: 20,
     alignItems: 'center',
     position: 'absolute',
     bottom: 40,
     left: 20,
     right: 20,
   },
   buttonText: {
     color: COLORS.white,
     fontSize: SIZES.small,
     textTransform: 'uppercase',
   },
});

export default styles;
