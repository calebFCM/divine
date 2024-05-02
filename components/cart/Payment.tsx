import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper'; 
import styles from '@/components/cart/payment.style';
import { COLORS, FONT, SIZES } from "@/constants";

const Payment = () => {
  const navigation = useNavigation(); 
  const [selectedOption, setSelectedOption] = useState('myNumber');

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity > 
        <Text style={styles.headingText}>Payment</Text>
      </View>

      {/* White Box */}
      <View style={styles.whiteBox}>
        {/* Bundle Type and Price */}
        <View style={styles.bundleContainer}>
          <Text style={styles.bundleType}>weekly 1GB</Text>
          <Text style={styles.bundlePrice}>R37,50</Text>
        </View>
        {/* Grey Line */}
        <View style={styles.greyLine}></View>
        {/* For this number */}
        <View style={styles.numberContainer}>
          <Text style={styles.forText}>For this number</Text>
          <Text style={styles.phoneNumber}>072 345 6789</Text>
        </View>
      </View>

      {/* White Box */}
      <View style={styles.whiteBox}>
        {/* Bundle Type and Price */}
        <View style={styles.bundleContainer}>
          <Text style={styles.bundleType}>Airtime</Text>
          <Text style={styles.bundlePrice}>R20,00</Text>
        </View>
        {/* Grey Line */}
        <View style={styles.greyLine}></View>
        {/* For this number */}
        <View style={styles.numberContainer}>
          <Text style={styles.forText}>For this number</Text>
          <Text style={styles.phoneNumber}>072 345 6789</Text>
        </View>
      </View>

      {/* White Box 2 */}
      <View style={styles.whiteBox}> 
        {/* Black Box */}
        <View style={styles.blackBox}>
          {/* Total */}
          <Text style={styles.totalTextLeft}>TOTAL (2 items)</Text>
          <Text style={styles.totalTextRight}>R57.00</Text>
        </View>
        {/*Payment Button */}
        <TouchableOpacity onPress={() => navigation.navigate('PaymentOutcomeScreen')}
        style={styles.buttonContainer}>
          <Text style={styles.buttonText}>pay now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;
