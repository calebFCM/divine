import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Octicons, MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '@/constants';
import styles from './footer.style'; // Ensure this file contains the necessary styles

const Footer = ({ activeScreen }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('HomeScreen')}>
        <MaterialIcons
          name={activeScreen === 'HomeScreen' ? 'home-filled' : 'home'}
          size={SIZES.xLarge}
          color={COLORS.white}
        />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('CartScreen')}>
        <Ionicons
          name={activeScreen === 'CartScreen' ? 'wallet' : 'wallet-outline'}
          size={SIZES.xLarge}
          color={COLORS.white}
        />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ProfileScreen')}>
        <Octicons
          name={activeScreen === 'ProfileScreen' ? 'person-fill' : 'person'}
          size={SIZES.xLarge}
          color={COLORS.white}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('MenuScreen')}>
        <Ionicons
          name={activeScreen === 'MenuScreen' ? 'menu' : 'menu-outline'}
          size={SIZES.xLarge}
          color={COLORS.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
