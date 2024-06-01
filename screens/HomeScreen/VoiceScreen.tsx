import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './voicescreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import DataTopUp from '@/components/home/DataTopUp';
import VoiceTopUp from '@/components/home/VoiceTopUp';


export default function VoiceScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

    <ScrollView>
      <VoiceTopUp/>
    </ScrollView>
    
    <Footer/>
  </View>
  );
}
