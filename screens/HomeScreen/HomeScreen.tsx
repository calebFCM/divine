import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './homescreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import Balances from '@/components/home/Balances';


export default function HomeScreen () {
  return (
  <View style={styles.OtpScreencontainer}>
    <LinearGradient
      colors={['#fbfcfc', '#daf7f5']}
      style={styles.gradient}>
        
        <UserHeader/>
        <Balances/>
    
    </LinearGradient>
  </View>
  );
}
