import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './simimagevalidationscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import ESimApplicationHeading from '@/components/registration/ESimApplicationHeading';
import ESimImageValidation from '@/components/registration/ESimImageValidation';


export default function ESimImageValidationscreen() {
  return (
  <View style={styles.container}>
    
    <UserHeader/>

      <View
        style={styles.gradient}>
          
          <ESimApplicationHeading/>
          <ESimImageValidation/>
          
      </View>

  </View>
  );
}
