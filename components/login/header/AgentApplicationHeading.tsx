import React from 'react';
import { View, Text } from 'react-native';

import styles from '@/components/login/header/loginheading.style';

const AgentApplicationHeading = () => {
  return (

   <View style={styles.loginContainer}>
      <Text style={styles.loginText}>Hi, Michael</Text>
   </View>

  );
};

export default AgentApplicationHeading;