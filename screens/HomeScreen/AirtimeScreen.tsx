import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './airtimescreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import AirtimeTopUp from '@/components/home/AirtimeTopUp';
import ChooseNumber from '@/components/home/ChooseNumber';


export default function AirtimeScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

    <ScrollView>
      <AirtimeTopUp/>
    </ScrollView>
    
    <Footer/>
  </View>
  );
}
