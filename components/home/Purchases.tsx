import { View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./purchases.style";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { icons } from '@/constants';

const Purchases = () => { 
   const navigation = useNavigation();
  return (
  <View style={styles.container}>
      <Text style={styles.purchaseHeading}>Purchase your top up </Text>
      <Text style={styles.purchaseHeading}>& data bundles</Text>

      <View style={styles.balanceCardsContainer}>
         <View style={styles.topCards}>
            <TouchableOpacity onPress={() => navigation.navigate('AirtimeScreen')}
              style={styles.card}>
               <Image source={icons.airtimeBlack} style={styles.icon} />
               <Text style={styles.cardText}>Airtime</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DataScreen')} 
              style={styles.card}>
               <Image source={icons.dataBlack} style={styles.icon} />
               <Text style={styles.cardText}>Data</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.bottomCards}>
            <TouchableOpacity onPress={() => navigation.navigate('VoiceScreen')}
            style={styles.card}>
               <Image source={icons.voiceBlack} style={styles.icon} />
               <Text style={styles.cardText}>Voice</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SocialScreen')}
            style={styles.card}>
               <Image source={icons.socialBlack} style={styles.icon} />
               <Text style={styles.cardText}>Social</Text>
            </TouchableOpacity>
         </View>
      </View>

      <Text style={styles.rechargeHeading}>Recharge</Text>

      <View style={styles.additionalTextContainer}>
        <Text style={styles.additionalTextTop}>
          Top up your Divine Mobile SIM card with{" "}
        </Text>
        <Text style={styles.additionalTextMiddle}>
          <Text style={styles.boldText}>Airtime</Text>,{" "}
          <Text style={styles.boldText}>Minutes</Text>,{" "}
          <Text style={styles.boldText}>SMS</Text> or{" "}
          <Text style={styles.boldText}>Data</Text>.
        </Text>
        <Text style={styles.additionalTextBottom}>
          Recharge your account by:
        </Text>
      </View>

      <View style={styles.bluBox}>
        <View style={styles.box}>
          <Image source={icons.blu} style={styles.boxIcon} />
          <View style={styles.boxContent}>
            <Text style={styles.boxTextTop}>Using Blu Vouchers</Text>
            <Text style={styles.boxTextBottom}>
              Dial:{" "}
              <Text style={{ color: '#1a9d9b' }}>*136*</Text>{" "}
              Blu Recharge Pin #
            </Text>
          </View>
        </View>
      </View>
      
      <View style={styles.flashBox}>
        <View style={styles.box}>
          <Image source={icons.flash} style={styles.boxIcon} />
          <View style={styles.boxContent}>
            <Text style={styles.boxTextTop}>Using Flash Eezi Airtime</Text>
            <Text style={styles.boxTextBottom}>
              Dial:{" "}
              <Text style={{ color: '#1a9d9b' }}>*130*3621*3*</Text>
              Pin#
            </Text>
          </View>
        </View>
      </View>
   </View>       
  );
};


export default Purchases;
