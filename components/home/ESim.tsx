import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONT, SIZES } from "@/constants";
import styles from './esim.style';

const ESim = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity >
        <Text style={styles.headingText}>Self Rica</Text>
      </View>

      
      <View style={styles.whiteBox}>
         <View style={styles.headingContainer}>
            <Text style={styles.heading}>Activate an eSIM</Text>
         </View>
         <View style={styles.textContainer}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>Please note the following:</Text>
            <Text style={styles.text}>Your device must be eSIM-enabled.</Text>
            <Text style={styles.text}>eSim activation will take between 2 to 24 hours to complete.</Text>
         </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('ESimApplicationCustomerScreen')} 
            style={styles.buttonContainer}>
          <Text style={styles.buttonText}>get started</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default ESim;
