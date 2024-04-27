import { View, Text, TouchableOpacity} from "react-native";
import styles from "./balances.style";
import { MaterialIcons } from '@expo/vector-icons';

const Balances = () => { 
  return (
  <View style={styles.container}>
      <Text style={styles.balanceHeading}>Balances</Text>

      <View style={styles.balanceCardsContainer}>
      <View style={styles.topCards}>
         <View style={styles.card}>
            <MaterialIcons name="send-to-mobile" size={50} color="#696969" style={styles.icon} />
            <Text style={styles.smallText}>Airtime</Text>
            <Text style={styles.largeText}>R10,00</Text>
         </View>
         <View style={styles.card}>
            <MaterialIcons name="send-to-mobile" size={50} color="#696969" style={styles.icon} />
            <Text style={styles.smallText}>Data</Text>
            <Text style={styles.largeText}>1GB</Text>
         </View>
      </View>
      <View style={styles.bottomCards}>
         <View style={styles.card}>
            <MaterialIcons name="send-to-mobile" size={50} color="#696969" style={styles.icon} />
            <Text style={styles.smallText}>Voice</Text>
            <Text style={styles.largeText}>20 MIN</Text>
         </View>
         <View style={styles.card}>
            <MaterialIcons name="send-to-mobile" size={50} color="#696969" style={styles.icon} />
            <Text style={styles.smallText}>Social</Text>
            <Text style={styles.largeText}>0 GB</Text>
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
