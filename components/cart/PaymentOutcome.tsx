import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper'; 
import styles from '@/components/cart/paymentoutcome.style';
import { COLORS, FONT, SIZES } from "@/constants";

const PaymentOutcome = () => {
  const navigation = useNavigation(); 
  const [selectedOption, setSelectedOption] = useState('myNumber');

  return (
    <View style={styles.container}>
      {/* Big Check Icon */}
      <FontAwesome5 style={styles.icon}
         name="check-circle" color={COLORS.textGreen} />
      {/* Payment Successful Text */}
      <Text style={styles.text}>Payment Successful</Text>
    </View>
  );
};

export default PaymentOutcome;
