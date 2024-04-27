import React from 'react';
import { View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesome6 } from '@expo/vector-icons'; 
import styles from '@/components/common/header/userheader.style';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserHeader = () => {
  return (

   <SafeAreaView style={styles.container}>
      
      <Text style={styles.name}>Desmond Thuli</Text>

      <View style={styles.headerContainer}>
        {/* Text displaying 'Michael Smith' */}

        {/* Phone number */}
        <Text style={styles.phoneNumber}>071 190 5625</Text>

        {/* Shopping basket icon */}
        <FontAwesome6 name="basket-shopping" size={24} color="white" />
      </View>
      
   </SafeAreaView>
 
  );
};

export default UserHeader;