import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from '@/constants';
import styles from './creditcard.style';
import { useNavigation } from '@react-navigation/native';

const CreditCard = () => {

   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add a credit card</Text>
      <Text style={styles.label}>Credit card holder name</Text>
      <TextInput
        style={styles.input}
        placeholder="John Doe"
        placeholderTextColor={COLORS.gray}
        autoCapitalize="words"
      />
      <Text style={styles.label}>Card number</Text>
      <TextInput
        style={styles.input}
        placeholder="xxxx xxxx xxxx xxxx"
        placeholderTextColor={COLORS.lightGray}
        keyboardType="numeric"
      />
      <View style={styles.inlineContainer}>
        <View style={styles.inlineItem}>
          <Text style={styles.label}>Expiration date</Text>
          <TextInput
            style={styles.inlineInput}
            placeholder="MM/YY"
            placeholderTextColor={COLORS.lightGray}
            keyboardType="numeric"
          />
        </View>
        <View style={[styles.inlineItem, styles.cvv]}>
          <Text style={styles.label}>CVV</Text>
          <TextInput
            style={styles.inlineInput}
            placeholder="CVV"
            placeholderTextColor={COLORS.lightGray}
            keyboardType="numeric"
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}
      style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreditCard;
