import { View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./balances.style";
import { icons } from '@/constants';

const Balances = () => { 
  return (
  <View style={styles.container}>
      <Text style={styles.balanceHeading}>Balances</Text>

      <View style={styles.balanceCardsContainer}>
      <View style={styles.topCards}>
         <View style={styles.card}>
            <Image source={icons.airtimeBlack} style={styles.icon} />
            <Text style={styles.smallText}>Airtime</Text>
            <Text style={styles.largeText}>R10,00</Text>
         </View>
         <View style={styles.card}>
            <Image source={icons.dataBlack} style={styles.icon} />
            <Text style={styles.smallText}>Data</Text>
            <Text style={styles.largeText}>1GB</Text>
         </View>
      </View>
      <View style={styles.bottomCards}>
         <View style={styles.card}>
            <Image source={icons.voiceBlack} style={styles.icon} />
            <Text style={styles.smallText}>Voice</Text>
            <Text style={styles.largeText}>20 MIN</Text>
         </View>
         <View style={styles.card}>
            <Image source={icons.socialBlack} style={styles.icon} />
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
