import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from '@/constants';
import styles from './mynumber.style';

const MyNumber = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My number </Text>
      <Text style={styles.subheading}>Edit my phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="John@gmail.com"
        placeholderTextColor={COLORS.gray}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      
      <TouchableOpacity>
        <Text style={styles.anotherNumber}>Add another Divine Number</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyNumber;