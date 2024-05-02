import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './numberlistscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import ProfileHeading from '@/components/profile/ProfileHeading';
import NumberList from '@/components/profile/NumberList';


export default function NumberListScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

    <ScrollView>
      <ProfileHeading/>
      <NumberList/>
    </ScrollView>
    
    <Footer/>
  </View>
  );
}
