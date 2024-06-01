import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import { COLORS } from '@/constants';
import styles from './wallet.style';
import { icons } from '@/constants';

const Wallet = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity > 
        <Text style={styles.headText}>Top Up Wallet</Text>
      </View>

      <Text style={styles.subheading}>Amount of airtime</Text>
      <TextInput
        style={styles.input}
        placeholder="R50.00"
        placeholderTextColor={COLORS.gray}
        keyboardType="numeric"
        autoCapitalize="none"
      />
      <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}
      style={styles.buttonContainer}>
        <Text style={styles.buttonText}>add to wallet</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Wallet;
