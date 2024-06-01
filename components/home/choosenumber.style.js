import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
   
   container: {
     paddingBottom: 30,
   },
   inputContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     borderWidth: 1,
     marginTop: 15,
     borderColor: COLORS.lightGray,
     borderRadius: 8,
     backgroundColor: COLORS.white,
   },
   input: {
     flex: 1,
     paddingVertical: 12,
     paddingHorizontal: 10,
     fontSize: SIZES.medium,
     color: COLORS.black,
   },
  numberHeading: {
    marginTop: 20,
    fontSize: SIZES.large,
    fontWeight: '500',
    color: COLORS.text,
  },
  radioButtonContainer: {
    marginTop: 10,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  radioLabel: {
    marginTop: 5,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
     marginLeft: 37
  },
  radioBtns: {
    alignItems: 'flex-start',
  },
  numbertHeading: {
    marginTop: 20,
    fontSize: SIZES.medium,
    color: COLORS.text,
  },
  dropDownContainer: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: COLORS.white,
  },
  orText: {
   textAlign: 'center',
   marginBottom: 0,
   color: COLORS.gray,
  },
  instructionText: {
    fontSize: SIZES.large,
    color: COLORS.text,
  },
   
});

export default styles;