import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './creditcardscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import DataTopupSelected from '@/components/home/DataTopUpSelected';
import ShoppingCart from '@/components/cart/ShoppingCart';
import ProfileHeading from '@/components/profile/ProfileHeading';
import ProfileOptions from '@/components/profile/ProfileOptions';
import Email from '@/components/profile/Email';
import Password from '@/components/profile/Password';
import CreditCard from '@/components/profile/CreditCard';


export default function CreditCardScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

      <ProfileHeading/>
      <CreditCard/>
    
    <Footer/>
  </View>
  );
}
