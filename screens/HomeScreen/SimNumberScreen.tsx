import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './simnumberscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import Footer from '@/components/common/footer/Footer';
import SimNumber from '@/components/home/SimNumber';


export default function PaymentScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

      <SimNumber/>
    
    <Footer/>
  </View>
  );
}
