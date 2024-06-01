import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './simimagevalidationscreen.style';

import SimApplicationHeader from '@/components/common/header/SimApplicationHeader';
import SimApplicationHeading from '@/components/registration/SimApplicationHeading';
import { ScrollView } from 'react-native-gesture-handler';
import SimApplicationServiceForm from '@/components/registration/SimApplicationServiceForm';
import UserHeader from '@/components/common/header/UserHeader';
import ConsentForm from '@/components/registration/SimConsentForm';
import ImageValidation from '@/components/registration/SimImageValidation';


export default function SimImageValidationScreen() {
  return (
  <View style={styles.container}>
    
    <UserHeader/>

      <View
        style={styles.gradient}>
          
          <SimApplicationHeading/>
          <ImageValidation/>
          
      </View>

  </View>
  );
}
