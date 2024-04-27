import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from '@/components/login/form/registerform.style';

const RegisterForm = () => {
  return (
   
   <View style={styles.formContainer}>
      {/* First NAme field */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="First name"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      {/* Surname field */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Surname"
            placeholderTextColor="#c4c6c5"
         />
      </View>
      
      {/* emai address */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      {/* cellphone number */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Cellphone number"
            placeholderTextColor="#c4c6c5"
         />
      </View>
      
      {/* Continue Button */}
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
   </View>
  );
};

export default RegisterForm;