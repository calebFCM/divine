import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const { width } = Dimensions.get("window");
const CARD_MARGIN = 10;
const CARD_COUNT_PER_ROW = 4;
const CARD_WIDTH = (width - (CARD_MARGIN * (CARD_COUNT_PER_ROW - 1)) - 40) / CARD_COUNT_PER_ROW; // Adjusted to include spacing and card padding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  balanceHeading: {
    color: COLORS.text,
    fontSize: SIZES.xLarge,
    fontWeight: 'bold', 
  },
  balanceCardsContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: -CARD_MARGIN, // Adjust for negative margin of individual cards
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: CARD_WIDTH,
    marginBottom: CARD_MARGIN, // Add margin between cards
    marginRight: CARD_MARGIN, // Add margin between cards
    borderWidth: 1,
    borderColor: COLORS.lightGray, // Add light gray border
  },
  smallText: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    textAlign: 'center', // Center small text
  },
  largeText: {
    fontSize: SIZES.medium,
    textAlign: 'center', // Center large text
  },
  balancesButton: {
    backgroundColor: COLORS.themeRed,
    paddingHorizontal: 20, // Adjust padding horizontally
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 20, // Adjust margin top
    alignSelf: 'center', // Center the button horizontally
  },
  buttonText: {
    color: 'white',
    fontSize: SIZES.small,
  },
});

export default styles;
