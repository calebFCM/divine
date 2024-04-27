import React from 'react';
import { View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '@/components/common/header/simapplicationheader.style';
import { SafeAreaView } from 'react-native-safe-area-context';

const SimApplicationHeader = () => {
  return (

   <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
      {/* Text displaying 'Michael Smith' */}
      <Text style={styles.headerText}>Michael Smith</Text>
      </View>
   </SafeAreaView>
 
  );
};

export default SimApplicationHeader;