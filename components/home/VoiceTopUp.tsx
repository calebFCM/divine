import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import styles from '@/components/home/voicetopup.style';
import { COLORS, FONT, SIZES } from "@/constants";
import ChooseNumber from './ChooseNumber';

const VoiceTopUp = () => {
  const navigation = useNavigation(); 
  const [selectedOption, setSelectedOption] = useState('myNumber');

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity > 
        <Text style={styles.headingText}>Voice Bundles</Text>
      </View>

      {/* Amount of Airtime Text */}
      <Text style={styles.amountHeading}>Who are you buying for?</Text>

      <ChooseNumber/>

      
      {/* Button */}
      <TouchableOpacity onPress={() => navigation.navigate('VoiceBundlesScreen')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>continue</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default VoiceTopUp;
