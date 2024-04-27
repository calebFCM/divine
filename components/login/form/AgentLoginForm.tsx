import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '@/components/login/form/registerform.style';

const AgentLoginForm = () => {

  const navigation = useNavigation();
  return (
   
   <View style={styles.formContainer}>
      {/* Agent Code */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Agent Code"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      {/* ID Number */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="ID Number"
            placeholderTextColor="#c4c6c5"
         />
      </View>
      
      {/* Name */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#c4c6c5"
         />
      </View>
      
      {/* Continue Button */}
      <TouchableOpacity 
         style={styles.buttonContainer}
         onPress={() => navigation.navigate('AgentApplicationScreen')}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      
   </View>
  );
};

export default AgentLoginForm;