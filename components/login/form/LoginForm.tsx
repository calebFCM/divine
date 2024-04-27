import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from '@/components/login/form/loginform.style';

const LoginForm = () => {

  const navigation = useNavigation();
  return (
   
   <View style={styles.formContainer}>
      {/* Cellphone Number Input */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Enter your cellphone number"
            placeholderTextColor="#c4c6c5"
         />
      </View>

      {/* Or Text */}
      <Text style={styles.orText}>or</Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder="Enter your user name"
            placeholderTextColor="#c4c6c5"
         />
      </View>
      
      {/* Continue Button */}
      <TouchableOpacity 
      style={styles.buttonContainer}
      onPress={() => navigation.navigate('OtpScreen')}>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
      
      {/* Agent Login */}
      <TouchableOpacity
        style={styles.agentLink}
        onPress={() => navigation.navigate('AgentLoginScreen')}
      >
        <FontAwesome5 name="user-tie" size={24} color="#3f8280" />
        <Text style={styles.agentText}>Log in as agent</Text>
      </TouchableOpacity>
   </View>
  );
};

export default LoginForm;