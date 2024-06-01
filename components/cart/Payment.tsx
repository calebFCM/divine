import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import styles from '@/components/cart/payment.style';
import { COLORS, FONT, SIZES } from "@/constants";

const Payment = () => {
  const navigation = useNavigation();
  const [selectedOption1, setSelectedOption1] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(false);

  const handleRadioButtonPress1 = () => {
    setSelectedOption1(!selectedOption1);
  };

  const handleRadioButtonPress2 = () => {
    setSelectedOption2(!selectedOption2);
  };

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity>
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

        {/* Radio Button 1 */}
        <View style={styles.radioRow}>
          <TouchableOpacity style={styles.radioContainer} onPress={handleRadioButtonPress1}>
            <RadioButton
              value="recurringPurchase1"
              status={selectedOption1 ? 'checked' : 'unchecked'}
              onPress={handleRadioButtonPress1}
              color={COLORS.themeRed}
              uncheckedColor={COLORS.themeRed} // Set the color for unchecked state
            />
            <Text style={styles.radioLabel}>Recurring monthly purchase</Text>
          </TouchableOpacity>
          {/* Red Information Icon */}
          <TouchableOpacity>
            <FontAwesome5 name="info-circle" size={20} style={styles.infoIcon} />
          </TouchableOpacity>
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

        {/* Radio Button 2 */}
        <View style={styles.radioRow}>
          <TouchableOpacity style={styles.radioContainer} onPress={handleRadioButtonPress2}>
            <RadioButton
              value="recurringPurchase2"
              status={selectedOption2 ? 'checked' : 'unchecked'}
              onPress={handleRadioButtonPress2}
              color={COLORS.themeRed}
              uncheckedColor={COLORS.themeRed} // Set the color for unchecked state
            />
            <Text style={styles.radioLabel}>Recurring monthly purchase</Text>
          </TouchableOpacity>
          {/* Red Information Icon */}
          <TouchableOpacity>
            <FontAwesome5 name="info-circle" size={20} style={styles.infoIcon} />
          </TouchableOpacity>
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
        {/* Payment Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('PaymentOutcomeScreen')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>pay now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;

