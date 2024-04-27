import React from 'react';
import { View, Text } from 'react-native';

import styles from '@/components/login/header/loginheading.style';

const AgentLoginHeading = () => {
  return (

   <View style={styles.loginContainer}>
      <Text style={styles.loginText}>Agent Login</Text>
   </View>

  );
};

export default AgentLoginHeading;