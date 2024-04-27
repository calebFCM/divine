import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './agentloginscreen.style';

import SignInHeader from '@/components/common/header/SignInHeader';
import AgentLoginHeading from '@/components/login/header/AgentLoginHeading';
import AgentLoginForm from '@/components/login/form/AgentLoginForm';


export default function AgentLoginScreen() {
  return (
  <View style={styles.container}>
    <LinearGradient
      colors={['#fbfcfc', '#daf7f5']}
      style={styles.gradient}>
        
        <SignInHeader/>
        <AgentLoginHeading/>
        <AgentLoginForm/>
    
    </LinearGradient>
  </View>
  );
}
