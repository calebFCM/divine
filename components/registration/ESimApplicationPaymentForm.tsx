import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper'; // Import RadioButton from react-native-paper
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 for icons
import styles from './simapplicationpaymentform.style';
import { COLORS, FONT, SIZES } from "@/constants";
import { useNavigation } from '@react-navigation/native';

const ESimApplicationPaymentForm = () => {
  const navigation = useNavigation();
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedConsent, setSelectedConsent] = useState(''); 
  const [selectedPackage, setSelectedPackage] = useState(''); 
  const [selectedOption, setSelectedOption] = useState(''); 

  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>Enter your payment details below</Text>

      <View style={styles.inputContainer}>
        <Picker
            selectedValue={selectedDay}
            onValueChange={(itemValue) => setSelectedDay(itemValue)}
          >
          <Picker.Item label="Select Day" value="" disabled={true} color={COLORS.lightGray}/>
          <Picker.Item label="Monday" value="monday" />
          <Picker.Item label="Tuesday" value="tuesday" />
          <Picker.Item label="Wednesday" value="wednesday" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Picker
          selectedValue={selectedMethod}
          onValueChange={(itemValue) => setSelectedMethod(itemValue)}
        >
          <Picker.Item label="Payment Method" value="" disabled={true} color={COLORS.lightGray}/>
          <Picker.Item label="Credit Card" value="credit_card" />
          <Picker.Item label="Debit Card" value="debit_card" />
          <Picker.Item label="Bank Transfer" value="bank_transfer" />
        </Picker>
      </View>

      <Text style={styles.clientDets}>Client's banking Details</Text>

      {/* Bank */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Bank"
            placeholderTextColor="#c4c6c5"
         />
      </View>
      
      {/* Account Number */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Account Number"
            placeholderTextColor="#c4c6c5"
         />
      </View>
      
      {/* Account Type */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Account Type"
            placeholderTextColor="#c4c6c5"
         />
      </View>
      
      {/* Branch Code */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Branch Code"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      {/* CVV */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="CVV"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      <View style={styles.inputContainer}>
        <Picker
          selectedValue={selectedConsent}
          onValueChange={(itemValue) => setSelectedConsent(itemValue)}
        >
          <Picker.Item label="Consent to Bank Collection" value="" disabled={true} color={COLORS.lightGray}/>
          <Picker.Item label="Yes" value="Yes" />
          <Picker.Item label="No" value="No" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Picker
          selectedValue={selectedPackage}
          onValueChange={(itemValue) => setSelectedPackage(itemValue)}
        >
          <Picker.Item label="Package Code as per BRS" value="" disabled={true} color={COLORS.lightGray}/>
          <Picker.Item label="Yes" value="Yes" />
          <Picker.Item label="No" value="No" />
        </Picker>
      </View>
      
      {/* Serial Number */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Full 19 Digit SIM Serial Number"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      {/* Port-In Number title */}
      <Text style={[styles.clientDets, { color: COLORS.gray, fontWeight: 'bold' }]}>Port-In Number</Text>

      {/* Radio Buttons */}
      <View style={styles.radioButtonContainer}>
         <View style={styles.radioItem}>
            {/* Paying with */}
            <View style={styles.radioBtns}>
               <RadioButton
               value="Yes"
               status={selectedOption === 'Yes' ? 'checked' : 'unchecked'}
               onPress={() => setSelectedOption('Yes')}
               color={COLORS.themeRed}
               uncheckedColor={COLORS.themeRed} // Set the color for unchecked state
               />
               <Text style={styles.radioLabel}>Yes</Text>
            </View>
         </View>
         
         <View style={styles.radioItem}>
            <View style={styles.radioBtns}>
               <RadioButton
               value="No"
               status={selectedOption === 'No' ? 'checked' : 'unchecked'}
               onPress={() => setSelectedOption('No')}
               color={COLORS.themeRed}
               uncheckedColor={COLORS.themeRed} // Set the color for unchecked state
               />
               <Text style={styles.radioLabel}>No</Text>
            </View>
         </View>
      </View>


      {/* Next Button */}
      <TouchableOpacity 
         style={styles.buttonContainer}
         onPress={() => navigation.navigate('ESimConsentScreen')}>
        <Text style={styles.buttonText}>continue</Text>
      </TouchableOpacity>
      
      
    </View>
  );
};

export default ESimApplicationPaymentForm;
