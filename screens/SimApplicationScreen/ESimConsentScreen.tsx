import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './consentscreen.style';

import { ScrollView } from 'react-native-gesture-handler';
import UserHeader from '@/components/common/header/UserHeader';
import ESimApplicationHeading from '@/components/registration/ESimApplicationHeading';
import ESimConsentForm from '@/components/registration/ESimConsentForm';


export default function ESimConsentScreen() {
  return (
  <View style={styles.container}>
    
    <UserHeader/>

      <View
        style={styles.gradient}>
          
        <ScrollView>
      
          <ESimApplicationHeading/>
          <ESimConsentForm/>
       </ScrollView>
        
      </View>

  </View>
  );
}
