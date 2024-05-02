import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Provider, Menu, Divider } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { COLORS, SIZES } from '@/constants';
import styles from './numberlist.style';

const NumberList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My phone number list</Text>
      <Text style={styles.subheading}>Phone numbers (3)</Text>

      <Provider>
        <Menu
          visible={false}
          onDismiss={() => {}}
          anchor={<MenuAnchor />}
          style={styles.dropdown}
        >
          <Menu.Item onPress={() => {}} title="Number 1" />
          <Menu.Item onPress={() => {}} title="Number 2" />
          <Menu.Item onPress={() => {}} title="Number 3" />
        </Menu>
      </Provider>

      <Text style={styles.chooseText}>I am buying for</Text>
      <Text style={styles.grayText}>Enter a Divine phone number</Text>
      <TextInput
         style={styles.inputField}
         placeholder="Enter number"
         />
      <View style={styles.contactListContainer}>
        <Text style={styles.contactListText}>Or choose a divine phone number from your phone's contact list.</Text>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="user-friends" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>ENTER</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.underlineButton}>
        <Text style={styles.underlineButtonText}>Add another Divine number</Text>
      </TouchableOpacity>

    </View>
  );
};

const MenuAnchor = () => (
  <View style={styles.menuAnchor}>
    <Text style={styles.menuText}>View my numbers</Text>
    <Feather name="chevron-down" size={24} color={COLORS.themeGreen} />
  </View>
);

export default NumberList;
