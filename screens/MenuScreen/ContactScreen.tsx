import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './contactscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import Contact from '@/components/menu/Contact';


export default function ContactScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

    <ScrollView>
      <Contact/>
    </ScrollView>
    
    <Footer/>
  </View>
  );
}
