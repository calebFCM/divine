import React from 'react';
import { View, Text } from 'react-native';

import styles from '@/components/login/header/otpheading.style';

const OtpHeading = () => {
  return (

   <View style={styles.otpHeadingContainer}>
      <Text style={styles.otpHeadingText}>Type in OTP</Text>
   </View>

  );
};

export default OtpHeading;