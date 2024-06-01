import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import styles from "./contact.style";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { icons } from '@/constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS, FONT, SIZES } from "@/constants";

const Contact = () => { 
   const navigation = useNavigation();
   const handleWebsitePress = () => {
    Linking.openURL('https://www.divinemobile.co.za');
  };
  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
         </TouchableOpacity > 
         <Text style={styles.headText}>Contact Us</Text>
      </View>

      <Text style={styles.customerHeading}>Customer Care</Text>

      {/* First Box Container */}
      <View style={styles.containerBox}>
        <View style={styles.box}>
          <Image source={icons.dial} style={styles.boxIcon} />
          <View style={styles.boxContent}>
            <Text style={styles.boxTextTop}>Dial *** free from your mobile</Text>
            <Text style={styles.boxTextBottom}>
              or *** *** *** at standard rates
            </Text>
          </View>
        </View>
      </View>
      
      {/* Second Box Container */}
      <View style={styles.containerBox}>
        <View style={styles.box}>
          <Image source={icons.website} style={styles.boxIcon} />
          <View style={[styles.boxContent, styles.websiteContainer]}>
            <Text style={[styles.boxTextTop, styles.websiteText]}
              >Website: <Text onPress={handleWebsitePress} style={styles.websiteUrl}> www.divinemobile.co.za </Text>
            </Text>
          </View>
        </View>
      </View>

      {/* Third Box Container */}
      <View style={styles.containerBox}>
        <View style={styles.box}>
          <Image source={icons.phone} style={styles.boxIcon} />
          <View style={styles.boxContent}>
            <Text style={styles.boxTextTop}>Self Care Ussd: <Text style={styles.boldText}>*136*#</Text></Text>
          </View>
        </View>
      </View>

      {/* Fourth Box Container */}
      <View style={styles.containerBox}>
        <View style={styles.box}>
          <Image source={icons.phone} style={styles.boxIcon} />
          <View style={styles.boxContent}>
            <Text style={styles.boxTextTop}>Voicemail: Dial <Text style={styles.boldText}>132</Text></Text>
          </View>
        </View>
      </View>
    </View>       
  );
};

export default Contact;
