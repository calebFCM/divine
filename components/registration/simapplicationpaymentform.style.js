import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 40,
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
    dropdownField: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 12,
    },
  });

export default styles;