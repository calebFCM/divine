import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './agentapplicationscreen.style';

import SignInHeader from '@/components/common/header/SignInHeader';
import AgentApplicationHeading from '@/components/login/header/AgentApplicationHeading';
import AgentApplicationForm from '@/components/login/form/AgentApplicationForm';


export default function AgentApplicationScreen() {
  return (
  <View style={styles.container}>
    <LinearGradient
      colors={['#fbfcfc', '#daf7f5']}
      style={styles.gradient}>
        
        <SignInHeader/>
        <AgentApplicationHeading/>
        <AgentApplicationForm/>
    
    </LinearGradient>
  </View>
  );
}
