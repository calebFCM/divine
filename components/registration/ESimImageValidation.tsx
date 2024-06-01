import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './imagevalidation.style';
import { COLORS, SIZES } from "@/constants";
import { useNavigation } from '@react-navigation/native';

const ESimImageValidation = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Take Image for validation</Text>

      {/* Square box for camera view */}
      <View style={styles.cameraView}></View>

      
      <Text style={styles.titleText}>Fill the box with your face</Text>

      {/* Red circle button for capturing photo */}
      <View style={styles.buttonContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('ESimImageRetakeScreen')}
            style={styles.captureButton}>
         
         </TouchableOpacity>
      </View>

    </View>
  );
};

export default ESimImageValidation;



