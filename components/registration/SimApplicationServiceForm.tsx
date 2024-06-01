import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper'; // Import RadioButton from react-native-paper
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 for icons
import styles from './simapplicationserviceform.style';
import { COLORS, FONT, SIZES } from "@/constants";
import { useNavigation } from '@react-navigation/native';

const SimApplicationServiceForm = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(''); 

  return (
    <View style={styles.container}>

      <Text style={[styles.clientDets, { color: COLORS.gray, fontWeight: 'bold' }]}>Service Type</Text>

      {/* Radio Buttons */}
      <View style={styles.radioButtonContainer}>
         <View style={styles.radioItem}>
            {/* Paying with */}
            <View style={styles.radioBtns}>
               <RadioButton
               value="PrePaid"
               status={selectedOption === 'PrePaid' ? 'checked' : 'unchecked'}
               onPress={() => setSelectedOption('PrePaid')}
               color={COLORS.themeRed}
               uncheckedColor={COLORS.themeRed} // Set the color for unchecked state
               />
               <Text style={styles.radioLabel}>PrePaid</Text>
            </View>
         </View>
         
         <View style={styles.radioItem}>
            <View style={styles.radioBtns}>
               <RadioButton
               value="PostPaid"
               status={selectedOption === 'PostPaid' ? 'checked' : 'unchecked'}
               onPress={() => setSelectedOption('PostPaid')}
               color={COLORS.themeRed}
               uncheckedColor={COLORS.themeRed} // Set the color for unchecked state
               />
               <Text style={styles.radioLabel}>PostPaid</Text>
            </View>
         </View>
      </View>


      {/* Next Button */}
      <TouchableOpacity 
         style={styles.buttonContainer}
         onPress={() => navigation.navigate('SimApplicationPostPaidScreen')}>
        <Text style={styles.buttonText}>continue</Text>
      </TouchableOpacity>
      
      
    </View>
  );
};

export default SimApplicationServiceForm;
