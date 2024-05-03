import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from '@/constants';
import styles from './email.style';
import { useNavigation } from '@react-navigation/native';

const Email = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Email Address</Text>
      <Text style={styles.subheading}>Enter a new email address</Text>
      <TextInput
        style={styles.input}
        placeholder="John@gmail.com"
        placeholderTextColor={COLORS.lightGray}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
      />
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}
      style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Email;
