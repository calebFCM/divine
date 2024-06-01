import React from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./purchases.style";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { icons, images } from '@/constants';
import { COLORS, FONT, SIZES } from "@/constants";
import blu from "../assets/images/blue_banner.png";
import flash from "../assets/images/flash_banner.png";

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
               <Image source={icons.airtime} style={styles.icon} />
               <Text style={styles.cardText}>Airtime</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DataScreen')} 
              style={styles.card}>
               <Image source={icons.data} style={styles.icon} />
               <Text style={styles.cardText}>Data</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.bottomCards}>
            <TouchableOpacity onPress={() => navigation.navigate('VoiceScreen')}
            style={styles.card}>
               <Image source={icons.voice} style={styles.icon} />
               <Text style={styles.cardText}>Voice</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SocialScreen')}
            style={styles.card}>
               <Image source={icons.social} style={styles.icon} />
               <Text style={styles.cardText}>Social</Text>
            </TouchableOpacity>
         </View>
      </View>

      <Text style={styles.rechargeHeading}>Self Rica.</Text>

      <View style={styles.additionalTextContainer}>
        <Text style={styles.boldText}>RICA a new SIM card or eSIM.</Text>
        <Text style={styles.additionalTextTop}>
          Activate your SIM in a few simple steps.
        </Text>
      </View>
      
      <View style={styles.ricaContainer}>
        {/* Other content */}

        {/* Box Container */}
        <View style={styles.ricaBoxContainer}>
          {/* First Box */}
          <TouchableOpacity onPress={() => navigation.navigate('SimScreen')}
            style={[styles.ricaBox, styles.firstBox]}>
            <Text style={[styles.boxText, styles.mediumText]}>RICA </Text>
            <Text style={[styles.boxText, styles.xLargeText]}>SIM</Text>
          </TouchableOpacity>

          {/* Second Box */}
          <TouchableOpacity onPress={() => navigation.navigate('ESimScreen')}
            style={[styles.ricaBox, styles.secondBox]}>
            <Text style={[styles.boxText, styles.mediumText]}>RICA </Text>
            <Text style={[styles.boxText, styles.xLargeText]}>eSIM</Text>
          </TouchableOpacity>
        </View>

        {/* Other content */}
      </View>

      <Text style={styles.rechargeHeading}>Recharge.</Text>

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
          <Image source={images.blu} style={[styles.boxImage, styles.bluBanner]} />
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
      
      <View style={ styles.flashBox }>
        <View style={[styles.box, { backgroundColor: '#114a3f' }]}>
          <Image source={images.flash} style={[styles.boxImage, styles.flashBanner]} />
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


export default Purchases;
