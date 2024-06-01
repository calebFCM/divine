import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './esimqrscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import ESimQR from '@/components/registration/ESimQR';


export default function ESimQRScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

      <ESimQR/>
    
    <Footer/>
  </View>
  );
}
