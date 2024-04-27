import React from 'react';
import { View, Text } from 'react-native';

import styles from '@/components/login/header/loginheading.style';

const LoginHeading = () => {
  return (

   <View style={styles.loginContainer}>
      <Text style={styles.loginText}>Login</Text>
   </View>

  );
};

export default LoginHeading;