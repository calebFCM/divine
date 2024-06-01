import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './balancesscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import Menu from '@/components/menu/Menu';
import Balances from '@/components/menu/Balances';


export default function BalancesScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

    <ScrollView>
      <Balances/>
    </ScrollView>
    
    <Footer/>
  </View>
  );
}
