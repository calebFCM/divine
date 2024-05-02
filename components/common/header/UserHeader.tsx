import React from 'react';
import { View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { icons } from '@/constants';

import { useNavigation } from '@react-navigation/native'; 

import { FontAwesome6 } from '@expo/vector-icons'; 
import styles from '@/components/common/header/userheader.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserHeader = () => {

  
  const navigation = useNavigation(); 
  return (

   <SafeAreaView style={styles.container}>
      
      <Text style={styles.name}>Desmond Thuli</Text>

      <View style={styles.headerContainer}>
        {/* Text displaying 'Michael Smith' */}

        {/* Phone number */}
        <Text style={styles.phoneNumber}>071 190 5625</Text>

        {/* Shopping basket icon */}
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Image source={icons.basket} style={styles.icon} />
        </TouchableOpacity>
        
      </View>
      
   </SafeAreaView>
 
  );
};

export default UserHeader;