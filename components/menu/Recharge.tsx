import { View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./recharge.style";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { icons } from '@/constants';
import { FontAwesome5 } from '@expo/vector-icons';

const Recharge = () => { 
   const navigation = useNavigation();
  return (
  <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
         </TouchableOpacity > 
         <Text style={styles.headText}>Recharge</Text>
      </View>

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
              <Text style={{ color: '#fff' }}>*136*</Text>{" "}
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
              <Text style={{ color: '#fff' }}>*130*3621*3*</Text>
              Pin#
            </Text>
          </View>
        </View>
      </View>
   </View>       
  );
};


export default Recharge;
