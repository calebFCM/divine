import React from 'react';
import { View, Text } from 'react-native';

import styles from '@/components/login/header/registerheading.style';

const RegisterHeading = () => {
  return (

   <View style={styles.otpHeadingContainer}>
      <Text style={styles.otpHeadingText}>Create Account</Text>
   </View>

  );
};

export default RegisterHeading;