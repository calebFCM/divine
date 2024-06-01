import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   formContainer: {
     paddingHorizontal: 20,
   },
   inputContainer: {
     borderWidth: 1,
     borderColor: COLORS.lightGray,
     borderRadius: 8,
     marginBottom: 20,
     backgroundColor: COLORS.white,
   },
   input: {
     paddingVertical: 12,
     paddingHorizontal: 16,
     fontSize: SIZES.medium,
     color: COLORS.text,
   },
   buttonContainer: {
     backgroundColor: COLORS.themeRed,
     borderRadius: 8,
     paddingVertical: 16,
     marginTop: 10,
     marginHorizontal: 20,
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
     color: COLORS.white,
     fontSize: 16,
     fontWeight: 'bold',
     textTransform: 'uppercase'
   },
   
});

export default styles;
   