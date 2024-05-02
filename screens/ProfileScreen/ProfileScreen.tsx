import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './profilescreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import DataTopupSelected from '@/components/home/DataTopUpSelected';
import ShoppingCart from '@/components/cart/ShoppingCart';
import ProfileHeading from '@/components/profile/ProfileHeading';
import ProfileOptions from '@/components/profile/ProfileOptions';


export default function ProfileScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

    <ScrollView>
      <ProfileHeading/>
      <ProfileOptions/>
    </ScrollView>
    
    <Footer/>
  </View>
  );
}
