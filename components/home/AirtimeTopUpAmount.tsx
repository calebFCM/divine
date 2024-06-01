import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import styles from '@/components/home/airtimetopupamount.style';
import { RadioButton } from 'react-native-paper';
import { COLORS, FONT, SIZES } from "@/constants";

const AirtimeTopUpAmount = () => {
  const navigation = useNavigation(); 
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioPress = (value) => {
    setSelectedOption((prevSelectedOption) => 
    prevSelectedOption === value ? '' : value
    );
  };

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

      
      {/* Radio Buttons */}
      <View style={styles.radioButtonContainer}>
        {/* My Number */}
        <View style={styles.radioItem}>
          <View style={styles.radioBtns}>
            <RadioButton
              value="myWallet"
              status={selectedOption === 'myWallet' ? 'checked' : 'unchecked'}
              onPress={() => handleRadioPress('myWallet')}
              color={COLORS.themeRed}
              uncheckedColor={COLORS.themeRed} // Set the color for unchecked state
            />
          </View>
          <Text style={styles.radioLabel}>Add to My Airtime Wallet</Text>

        </View>
      </View>



      {/* Button */}
      <TouchableOpacity onPress={() => navigation.navigate('')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>add to basket</Text>
      </TouchableOpacity>

    </View>
  );
};

export default AirtimeTopUpAmount;
