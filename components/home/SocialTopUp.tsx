import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import styles from '@/components/home/socialtopup.style';
import { COLORS, FONT, SIZES } from "@/constants";
import ChooseNumber from './ChooseNumber';

const SocialTopUp = () => {
  const navigation = useNavigation(); 
  const [selectedOption, setSelectedOption] = useState('myNumber');

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity > 
        <Text style={styles.headingText}>Social Bundles</Text>
      </View>

      {/* Amount of Airtime Text */}
      <Text style={styles.amountHeading}>Who are you buying for?</Text>

      <ChooseNumber/>

      
      {/* Button */}
      <TouchableOpacity onPress={() => navigation.navigate('SocialBundlesScreen')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>continue</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default SocialTopUp;
