import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './simapplicationpostpaidscreen.style';

import SimApplicationHeader from '@/components/common/header/SimApplicationHeader';
import SimApplicationHeading from '@/components/registration/SimApplicationHeading';
import SimApplicationPaymentForm from '@/components/registration/SimApplicationPaymentForm';
import { ScrollView } from 'react-native-gesture-handler';
import UserHeader from '@/components/common/header/UserHeader';
import PostPaidForm from '@/components/registration/PostPaidForm';


export default function SimApplicationPostPaidScreen() {
  return (
  <View style={styles.container}>
    
    <UserHeader/>

      <View
        style={styles.gradient}>
          
        <ScrollView>
      
          <SimApplicationHeading/>
          <PostPaidForm/>
          
       </ScrollView>
        
      </View>

  </View>
  );
}
