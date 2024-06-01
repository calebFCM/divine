import React from 'react';
import { Image  } from 'react-native';
import { View, Text } from 'react-native';
import styles from './databundlesscreen.style';

import UserHeader from '@/components/common/header/UserHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@/components/common/footer/Footer';
import DataBundles from '@/components/home/DataBundles';


export default function DataBundlesScreen (activeScreen) {
  return (
  <View style={styles.OtpScreencontainer}>
    
    {/* UserHeader  is the header  with name and phone number bro! */}
    <UserHeader/>

    <ScrollView>
      <DataBundles/>
    </ScrollView>
    
    <Footer/>
  </View>
  );
}
