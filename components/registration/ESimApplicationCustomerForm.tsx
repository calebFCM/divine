import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper'; // Import RadioButton from react-native-paper
import styles from './simapplicationcustomerform.style';
import { COLORS, FONT, SIZES } from "@/constants";
import { useNavigation } from '@react-navigation/native';

const ESimApplicationCustomerForm = () => {
   const navigation = useNavigation();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedOption, setSelectedOption] = useState('myNumber');

  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>Enter your details below</Text>

   
      {/* First Name */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      {/* Surname */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Surname"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      {/* Alternative Mobile Number */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Alternative Mobile Number"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      <View style={styles.inputContainer}>
        <Picker
            selectedValue={selectedCountry}
            onValueChange={(itemValue) => setSelectedCountry(itemValue)}
          >
          <Picker.Item label="Country of ID Origin" value="" disabled={true} color={COLORS.lightGray} />
          <Picker.Item label="South Africa" value="South Africa" />
          <Picker.Item label="Wakanda" value="Wakanda" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <Text style={styles.clientDets}>ID Type</Text>

      {/* ID Number */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="ID Number"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      <Text style={styles.orText}>Or</Text>
      
      {/* Passport Number */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Passport Number"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      
      <Text style={styles.clientDets}>Current Physical Address</Text>

      {/* Street Address */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Street Address"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      {/* City */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="City"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      {/* Country */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Country"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      {/* Postal code */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Postal code"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      {/* Next Button */}
      <TouchableOpacity 
         style={styles.buttonContainer}
         onPress={() => navigation.navigate('ESimApplicationPaymentScreen')}>
        <Text style={styles.buttonText}>continue</Text>
      </TouchableOpacity>
      
      
    </View>
  );
};

export default ESimApplicationCustomerForm;
