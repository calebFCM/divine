import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './consentscreen.style';

import SimApplicationHeader from '@/components/common/header/SimApplicationHeader';
import SimApplicationHeading from '@/components/registration/SimApplicationHeading';
import { ScrollView } from 'react-native-gesture-handler';
import SimApplicationServiceForm from '@/components/registration/SimApplicationServiceForm';
import UserHeader from '@/components/common/header/UserHeader';
import SimConsentForm from '@/components/registration/SimConsentForm';


export default function ConsentScreen() {
  return (
  <View style={styles.container}>
    
    <UserHeader/>

      <View
        style={styles.gradient}>
          
        <ScrollView>
      
          <SimApplicationHeading/>
          <SimConsentForm/>
       </ScrollView>
        
      </View>

  </View>
  );
}
