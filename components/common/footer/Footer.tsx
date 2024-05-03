import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './footer.style';

const Footer = ({ activeScreen }) => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('HomeScreen')}>
        <MaterialIcons
          name="home-filled"
          size={24}
          style={activeScreen === 'HomeScreen' ? styles.highlightedIcon : styles.icon}
        />
        <Text style={activeScreen === 'HomeScreen' ? styles.highlightedLabel : styles.labelText}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ProfileScreen')}>
        <FontAwesome5
          name="user-circle"
          size={24}
          style={activeScreen === 'Profile' ? styles.highlightedIcon : styles.icon}
        />
        <Text style={activeScreen === 'Profile' ? styles.highlightedLabel : styles.labelText}>
          Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('MenuScreen')}>
        <Ionicons
          name="menu-outline"
          size={24}
          style={activeScreen === 'Menu' ? styles.highlightedIcon : styles.icon}
        />
        <Text style={activeScreen === 'Menu' ? styles.highlightedLabel : styles.labelText}>
          Menu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
