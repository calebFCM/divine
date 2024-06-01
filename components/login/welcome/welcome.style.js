import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
  welcomeContainer: {
      alignItems: 'center',
      paddingHorizontal: 40,
    },
    welcomeText: {
      fontSize: SIZES.large,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    registerText: {
      fontSize: SIZES.medium,
    },
    registerLink: {
      color: COLORS.themeRed, // Change color
    },
    registerTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionsText: {
      marginTop: 15,
      textAlign: "center",
      color: COLORS.text
    }
  });

export default styles;
   