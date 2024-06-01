import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './registerscreen.style';

import SignInHeader from '@/components/common/header/SignInHeader';
import RegisterHeading from '@/components/login/header/RegisterHeading';
import RegisterForm from '@/components/login/form/RegisterForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function RegisterScreen() {
  return (
  <View style={styles.container}>
    <SignInHeader/>
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollContainer}
      enableOnAndroid={true}
      extraScrollHeight={0}
      keyboardOpeningTime={0}> 

      <RegisterHeading/>
      <RegisterForm/>
      
    </KeyboardAwareScrollView>
  </View>
  );
}
