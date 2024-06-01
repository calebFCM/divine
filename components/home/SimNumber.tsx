import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONT, SIZES } from "@/constants";
import styles from './simnumber.style';

const SimNumber = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      
      <View style={styles.whiteBox}>
         <View style={styles.BackBtnContainer}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
         </TouchableOpacity >
         </View>
         <View style={styles.headingContainer}>
            <Text style={styles.heading}>Enter your SIM card Number.</Text>
         </View>
         
         {/* Input Field */}
         <View style={styles.inputContainer}>
            <TextInput
               style={styles.input}
               placeholder="SIM number"
               keyboardType="numeric"
               placeholderTextColor={COLORS.gray}
            />
         </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('SimApplicationCustomerScreen')} 
            style={styles.buttonContainer}>
          <Text style={styles.buttonText}>continue</Text>
        </TouchableOpacity>
      </View>




    </View>
  );
};

export default SimNumber;
