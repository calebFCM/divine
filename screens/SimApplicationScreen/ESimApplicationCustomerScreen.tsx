import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './simapplicationcustomerscreen.style';

import SimApplicationHeader from '@/components/common/header/SimApplicationHeader';
import SimApplicationHeading from '@/components/registration/SimApplicationHeading';
import { ScrollView } from 'react-native-gesture-handler';
import UserHeader from '@/components/common/header/UserHeader';
import ESimApplicationCustomerForm from '@/components/registration/ESimApplicationCustomerForm';
import ESimApplicationHeading from '@/components/registration/ESimApplicationHeading';


export default function ESimApplicationCustomerScreen() {
  return (
  <View style={styles.container}>
    
    <UserHeader/>

      <View
        style={styles.gradient}>
          
        <ScrollView>
      
          <ESimApplicationHeading/>
          <ESimApplicationCustomerForm/>
          
       </ScrollView>
        
      </View>

  </View>
  );
}
