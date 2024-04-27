import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '@/components/login/form/registerform.style';

const AgentApplicationForm = () => {

  const navigation = useNavigation();
  return (
   
   <View style={styles.formContainer}>
      
      {/* Continue Button */}
      <TouchableOpacity 
         style={styles.buttonContainer}
         onPress={() => navigation.navigate('SimApplicationScreen')}>
        <Text style={styles.buttonText}>start new sim application</Text>
      </TouchableOpacity>
      
   </View>
  );
};

export default AgentApplicationForm;