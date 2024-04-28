import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   formContainer: {
     paddingHorizontal: 20,
     marginTop: 20,
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
   orText: {
     fontSize: SIZES.medium,
     textAlign: 'center',
     marginBottom: 20,
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
     fontSize: SIZES.small,
     textTransform: 'uppercase'
   },
   agentLink: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 20,
   },
   agentText: {
     fontSize: 16,
     marginLeft: 10,
     color: COLORS.underline,
     textDecorationLine: 'underline',
   },
   
});

export default styles;
   