import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './emailaddressscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import ProfileHeading from '@/components/profile/ProfileHeading';
import MyNumber from '@/components/profile/MyNumber';


export default function MyNumberScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

    <ScrollView>
      <ProfileHeading/>
      <MyNumber/>
    </ScrollView>
    
    <Footer/>
  </View>
  );
}
