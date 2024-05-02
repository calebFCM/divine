import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './simapplicationscreen.style';

import SimApplicationHeader from '@/components/common/header/SimApplicationHeader';
import SimApplicationHeading from '@/components/registration/SimApplicationHeading';
import SimApplicationPaymentForm from '@/components/registration/SimApplicationPaymentForm';


export default function SimApplicationScreen() {
  return (
  <View style={styles.container}>
    <LinearGradient
      colors={['#fbfcfc', '#daf7f5']}
      style={styles.gradient}>
    
      <SimApplicationHeader/>
      <SimApplicationHeading/>
      {/* <SimApplicationPaymentForm/> */}
      
    </LinearGradient>
  </View>
  );
}
