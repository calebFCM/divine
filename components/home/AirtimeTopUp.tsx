import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import styles from '@/components/home/airtimetopup.style';
import { COLORS, FONT, SIZES } from "@/constants";

const AirtimeTopUp = () => {
  const navigation = useNavigation(); 
  const [selectedOption, setSelectedOption] = useState('myNumber');

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity > 
        <Text style={styles.headingText}>Airtime Top Up</Text>
      </View>

      {/* Amount of Airtime Text */}
      <Text style={styles.amountHeading}>Amount of airtime to purchase</Text>
      
      {/* Input Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.currencySign}>R</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          keyboardType="numeric"
          placeholderTextColor={COLORS.gray}
        />
      </View>
      {/* Instruction Text */}
      <Text style={styles.instructionText}>The airtime amount must be between R20 and R1000</Text>

    </View>
  );
};

export default AirtimeTopUp;
