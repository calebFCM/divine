import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './dataselectedscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import SocialTopUpSelected from '@/components/home/SocialTopUpSelected';


export default function SocialSekectedScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

    <ScrollView>
      <SocialTopUpSelected/>
    </ScrollView>
    
    <Footer/>
  </View>
  );
}
