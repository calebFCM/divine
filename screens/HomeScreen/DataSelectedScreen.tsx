import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './dataselectedscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import DataTopupSelected from '@/components/home/DataTopUpSelected';



export default function DataSelectedScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

      <DataTopupSelected/>
    
    <Footer/>
  </View>
  );
}
