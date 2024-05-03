import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from '@/constants';
import styles from './password.style';
import { useNavigation } from '@react-navigation/native';

const Password = () => {
   
   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reset Password</Text>
      <Text style={styles.label}>Enter old password</Text>
      <TextInput
        style={styles.input}
        placeholder="xxxxxxxx"
        placeholderTextColor={COLORS.lightGray}
        secureTextEntry={true}
        autoCompleteType="password"
      />
      <Text style={styles.label}>Enter new password</Text>
      <TextInput
        style={styles.input}
        placeholder="xxxxxxxx"
        placeholderTextColor={COLORS.lightGray}
        secureTextEntry={true}
        autoCompleteType="password"
      />
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}
      style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Password;
