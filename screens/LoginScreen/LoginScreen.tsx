import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './loginscreen.style';

import SignInHeader from '@/components/common/header/SignInHeader';
import Welcome from '@/components/login/welcome/Welcome';
import LoginForm from '@/components/login/form/LoginForm';
import LoginHeading from '@/components/login/header/LoginHeading';


export default function LoginScreen() {
  return (
    <View style={styles.loginScreenContainer}>
      <LinearGradient
        colors={['#fbfcfc', '#daf7f5']}
        style={styles.gradient}
      >
         <SignInHeader/>
         <LoginHeading/>
         <Welcome />
         <LoginForm/>
      
      </LinearGradient>
    </View>
  );
}
