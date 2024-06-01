import React from 'react';
import { Image  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import styles from './homescreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import Balances from '@/components/home/Balances';
import { ScrollView } from 'react-native-gesture-handler';
import Purchases from '@/components/home/Purchases';
import Footer from '@/components/common/footer/Footer';


export default function HomeScreen () {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

    <ScrollView>
      <View style={styles.overlay}>
          
        <Balances/>
          
        <Purchases/>
      
      </View>

    </ScrollView>

    <Footer/>
  </View>
  );
}
