import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './menuscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import Menu from '@/components/menu/Menu';


export default function MenuScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

    <ScrollView>
      <Menu/>
    </ScrollView>
    
    <Footer/>
  </View>
  );
}
