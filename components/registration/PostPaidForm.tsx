import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper'; // Import RadioButton from react-native-paper
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 for icons
import styles from './postpaidfrom.style';
import { COLORS, FONT, SIZES } from "@/constants";
import { useNavigation } from '@react-navigation/native';

const PostPaidForm = () => {
  const navigation = useNavigation();
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedConsent, setSelectedConsent] = useState(''); 
  const [selectedPackage, setSelectedPackage] = useState(''); 
  const [selectedOption, setSelectedOption] = useState(''); 

  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>PostPaid</Text>

      
      {/* Number */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Number to be ported in"
            placeholderTextColor="#c4c6c5"
            keyboardType='numeric'
         />
      </View>

      <View style={styles.inputContainer}>
        <Picker
            selectedValue={selectedNetwork}
            onValueChange={(itemValue) => setSelectedNetwork(itemValue)}
          >
          <Picker.Item label="Current Network" value="" disabled={true} color={COLORS.lightGray}/>
          <Picker.Item label="MTN" value="MTN" />
          <Picker.Item label="Vodacom" value="Vodacom" />
          <Picker.Item label="Cell C" value="Cell C" />
        </Picker>
      </View>

      
      
      {/* Number */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Postpaid Account ID - Current network"
            placeholderTextColor="#c4c6c5"
            keyboardType='numeric'
         />
      </View>


      {/* Next Button */}
      <TouchableOpacity 
         style={styles.buttonContainer}
         onPress={() => navigation.navigate('SimConsentScreen')}>
        <Text style={styles.buttonText}>continue</Text>
      </TouchableOpacity>
      
      
    </View>
  );
};

export default PostPaidForm;
