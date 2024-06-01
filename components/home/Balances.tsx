import { View, Text, TouchableOpacity } from "react-native";
import styles from "./balances.style";
import { COLORS, FONT, SIZES } from '@/constants';

const Balances = () => { 
  return (
    <View style={styles.container}>
      <Text style={styles.balanceHeading}>Balances</Text>

      <View style={styles.balanceCardsContainer}>
        <View style={styles.cardsRow}>
          <View style={styles.card}>
            <Text style={styles.largeText}>Airtime</Text>
            <Text style={styles.smallText}>R10,00</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.largeText}>Data</Text>
            <Text style={styles.smallText}>1GB</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.largeText}>Voice</Text>
            <Text style={styles.smallText}>20 MIN</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.largeText}>Social</Text>
            <Text style={styles.smallText}>0 GB</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.balancesButton}>
        <Text style={styles.buttonText}>DETAILED BALANCES</Text>
      </TouchableOpacity>
    </View>       
  );
};

export default Balances;
