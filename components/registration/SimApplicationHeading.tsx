import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import styles from '@/components/registration/simapplicationheading.style';

const SimApplicationHeading = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
      </TouchableOpacity>
      {/* Heading Text */}
      <Text style={styles.headingText}>SIM Registration</Text>
    </View>
  );
};

export default SimApplicationHeading;
