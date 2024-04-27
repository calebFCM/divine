import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './otpscreen.style';

import SignInHeader from '@/components/common/header/SignInHeader';
import OtpHeading from '@/components/login/header/OtpHeading';
import OtpAlert from '@/components/login/otpAlert/OtpAlert';


export default function OtpScreen () {
  return (
  <View style={styles.OtpScreencontainer}>
    <LinearGradient
      colors={['#fbfcfc', '#daf7f5']}
      style={styles.gradient}>
        
        <SignInHeader/>
        <OtpHeading/>
        <OtpAlert/>
    
    </LinearGradient>
  </View>
  );
}
