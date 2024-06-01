import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import styles from '@/components/cart/shoppingcart.style';
import { COLORS, FONT, SIZES } from "@/constants";

const ShoppingCart = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showAvailableContainer, setShowAvailableContainer] = useState(false);
  const [showRadioButtonContainer, setShowRadioButtonContainer] = useState(false);

  const handlePickerChange = (itemValue) => {
    setSelectedPayment(itemValue);

    // Show/hide containers based on selected value
    if (itemValue === 'My Airtime Wallet') {
      setShowAvailableContainer(true);
      setShowRadioButtonContainer(false);
    } else if (itemValue === 'Bank Card') {
      setShowAvailableContainer(false);
      setShowRadioButtonContainer(true);
    } else {
      setShowAvailableContainer(false);
      setShowRadioButtonContainer(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headingText}>Shopping Cart</Text>
      </View>

      <Text style={styles.payingWithText}>Paying With</Text>

      {/* Picker */}
      <View style={styles.dropDownContainer}>
        <Picker
          selectedValue={selectedPayment}
          onValueChange={handlePickerChange}
        >
          <Picker.Item label="Payment method" value="" disabled={true} color={COLORS.gray} />
          <Picker.Item label="Bank Card" value="Bank Card" />
          <Picker.Item label="My Airtime Wallet" value="My Airtime Wallet" />
        </Picker>
      </View>

      {/* Available Container */}
      {showAvailableContainer && (
        <View style={styles.availableContainer}>
          <Text style={styles.availableLabel}>Available Airtime</Text>
          <Text style={styles.availableAmount}>R100,00</Text>
        </View>
      )}

      {/* Radio Buttons */}
      {showRadioButtonContainer && (
        <View style={styles.radioButtonContainer}>
          <View style={styles.radioItem}>
            {/* Paying with */}
            <View style={styles.radioBtns}>
              <RadioButton
                value="myNumber"
                status={selectedOption === 'myNumber' ? 'checked' : 'unchecked'}
                onPress={() => setSelectedOption('myNumber')}
                color={COLORS.themeRed}
                uncheckedColor={COLORS.themeRed}
              />
              <Text style={styles.radioLabel}>Saved card: 55xxxxx84</Text>
            </View>
          </View>
          <View style={styles.radioItem}>
            <View style={styles.radioBtns}>
              <RadioButton
                value="otherNumber"
                status={selectedOption === 'otherNumber' ? 'checked' : 'unchecked'}
                onPress={() => setSelectedOption('otherNumber')}
                color={COLORS.themeRed}
                uncheckedColor={COLORS.themeRed}
              />
              <Text style={styles.radioLabel}>New card</Text>
            </View>
            <View style={styles.cardIcons}>
              {/* Visa Icon */}
              <FontAwesome5 style={styles.cardIcon} name="cc-visa" size={24} color={COLORS.text} />
              {/* Mastercard Icon */}
              <FontAwesome5 style={styles.cardIcon} name="cc-mastercard" size={24} color={COLORS.text} />
            </View>
          </View>
        </View>
      )}




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

        {/* Bin Button */}
        <TouchableOpacity style={styles.binButton}>
          <FontAwesome5 name="trash-alt" size={15} color={COLORS.themeRed} />
        </TouchableOpacity>
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

        {/* Bin Button */}
        <TouchableOpacity style={styles.binButton}>
          <FontAwesome5 name="trash-alt" size={15} color={COLORS.themeRed} />
        </TouchableOpacity>
      </View>

      {/* White Box 2 */}
      <View style={styles.whiteBox}> 
      
      {/* Paying With Text */}
        
        {/* Grey Line 
        <View style={styles.greyLine}></View>*/}


        {/* Send receipt to */}
        <View style={styles.receiptContainer}>
          <Text style={styles.receiptTextLeft}>Send receipt to</Text>
          <Text style={styles.receiptTextRight}>user@email.address.com</Text>
        </View>

        {/* Change Button 
        <TouchableOpacity style={styles.changeButton}>
          <Text style={styles.changeButtonText}>Change</Text>
        </TouchableOpacity>
        {/* Grey Line 
        <View style={styles.greyLine}></View>*/}

        {/* Black Box */}
        <View style={styles.blackBox}>
          {/* Total */}
          <Text style={styles.totalTextLeft}>TOTAL (2 items)</Text>
          <Text style={styles.totalTextRight}>R57.00</Text>
        </View>

        {/* Terms and Conditions Text */}
        <Text style={styles.termsText}>
          By clicking 'Next', I confirm that I have rerad, understood and agree with the 
          <Text style={styles.termsLinkText}> terms and conditions</Text>
        </Text>
        {/* Continue to Payment Button */}
        <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')} 
        style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Continue to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShoppingCart;
