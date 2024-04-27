import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './registerscreen.style';

import SignInHeader from '@/components/common/header/SignInHeader';
import RegisterHeading from '@/components/login/header/RegisterHeading';
import RegisterForm from '@/components/login/form/RegisterForm';


export default function RegisterScreen() {
  return (
  <View style={styles.container}>
    <LinearGradient
      colors={['#fbfcfc', '#daf7f5']}
      style={styles.gradient}>
        
        <SignInHeader/>
        <RegisterHeading/>
        <RegisterForm/>
    
    </LinearGradient>
  </View>
  );
}
