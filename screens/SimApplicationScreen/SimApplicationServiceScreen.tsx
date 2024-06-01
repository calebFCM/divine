import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './simapplicationservicescreen.style';

import SimApplicationHeader from '@/components/common/header/SimApplicationHeader';
import SimApplicationHeading from '@/components/registration/SimApplicationHeading';
import { ScrollView } from 'react-native-gesture-handler';
import SimApplicationServiceForm from '@/components/registration/SimApplicationServiceForm';
import UserHeader from '@/components/common/header/UserHeader';


export default function SimApplicationServiceScreen() {
  return (
  <View style={styles.container}>
    
    <UserHeader/>

      <View
        style={styles.gradient}>
          
        <ScrollView>
      
          <SimApplicationHeading/>
          <SimApplicationServiceForm/>
       </ScrollView>
        
      </View>

  </View>
  );
}
