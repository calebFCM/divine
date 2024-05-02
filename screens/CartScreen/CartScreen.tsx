import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './cartscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import DataTopupSelected from '@/components/home/DataTopUpSelected';
import ShoppingCart from '@/components/cart/ShoppingCart';


export default function CartScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

    <ScrollView>
      <ShoppingCart/>
    </ScrollView>
    
    <Footer/>
  </View>
  );
}
