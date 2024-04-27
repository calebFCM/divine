import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   formContainer: {
     paddingHorizontal: 20,
     marginTop: 20,
   },
   buttonContainer: {
     backgroundColor: '#27bbb5',
     borderRadius: 8,
     paddingVertical: 16,
     marginTop: 10,
     marginLeft: 20,
     marginRight: 20,
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
   