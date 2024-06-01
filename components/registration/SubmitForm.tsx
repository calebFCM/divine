import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './submitform.style';
import { COLORS, SIZES } from "@/constants";
import { useNavigation } from '@react-navigation/native';
import progress from '@/assets/icons/progress.png';

const SubmitForm = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <View style={styles.container}>

      {/* Square box for camera view */}
      <View>
         <Image
            source={progress}
            style={styles.progressView}
         />
      </View>

      <Text style={styles.titleText}>Thank you for completing the form</Text>

      {/* Next Button */}
      <TouchableOpacity 
         style={styles.buttonContainer}
         onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>submit form</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default SubmitForm;



