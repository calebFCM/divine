import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './esimscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import ESim from '@/components/home/ESim';


export default function ESimScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

    <ScrollView>
      <ESim/>
    </ScrollView>
    
    <Footer/>
  </View>
  );
}
