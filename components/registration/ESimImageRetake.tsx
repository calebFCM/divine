import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './imageretake.style';
import { COLORS, SIZES } from "@/constants";
import { useNavigation } from '@react-navigation/native';

const ImageRetake = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Take Image for validation</Text>

      {/* Square box for camera view */}
      <View style={styles.cameraView}></View>

      <Text onPress={() => navigation.navigate('ESimImageValidationScreen')} 
        style={[styles.titleText, {color: COLORS.themeRed,textDecorationLine: 'underline',}]}>Retake Photo</Text>

      {/* Next Button */}
      <TouchableOpacity 
         style={styles.buttonContainer}
         onPress={() => navigation.navigate('ESimSubmitFormScreen')}>
        <Text style={styles.buttonText}>submit</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default ImageRetake;



