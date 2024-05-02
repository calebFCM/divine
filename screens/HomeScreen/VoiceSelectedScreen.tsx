import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './voiceselectedscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import VoiceTopUpSelected from '@/components/home/VoiceTopUpSelected';


export default function VoiceSelectedScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

    <ScrollView>
      <VoiceTopUpSelected/>
    </ScrollView>
    
    <Footer/>
  </View>
  );
}
