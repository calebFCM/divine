import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONT, SIZES } from "@/constants";
import styles from './esimqr.style';

const ESimQR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <View style={styles.whiteBox}>
         <View style={styles.BackBtnContainer}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="times" size={24} style={styles.icon} />
         </TouchableOpacity >
         </View>

         <View style={styles.headingContainer}>
            <Text style={styles.heading}>Activate an eSIM.</Text>
         </View>

         <View style={styles.textContainer}>
            <Text style={styles.text}>Enter your email below to get your unique QR code.</Text>
         </View>
         
        {/* emai address */}
        <View style={styles.inputContainer}>
          <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#c4c6c5"
          />
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('SimNumberScreen')} 
            style={styles.buttonContainer}>
          <Text style={styles.buttonText}>continue</Text>
        </TouchableOpacity>
      </View>



    </View>
  );
};

export default ESimQR;
