import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import DropDownPicker from 'react-native-element-dropdown';
import styles from '@/components/registration/simapplicationpaymentform.style';


const SimApplicationPaymentForm = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        Enter the customer's Payment details below
      </Text>

      {/* First Dropdown Field: Elected Payment Day */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.dropdownField}>
          <Text>Elected Payment Day</Text>
          <FontAwesome5 name="chevron-down" size={20} />
        </TouchableOpacity>
      </View>

      {/* Second Dropdown Field: Payment Method */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.dropdownField}>
          <Text>Payment Method</Text>
          <FontAwesome5 name="chevron-down" size={20} />
        </TouchableOpacity>
      </View>  
    </View>
  );
};

export default SimApplicationPaymentForm;