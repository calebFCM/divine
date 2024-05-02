import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper'; 
import styles from '@/components/cart/shoppingcart.style';
import { COLORS, FONT, SIZES } from "@/constants";

const ShoppingCart = () => {
  const navigation = useNavigation(); 
  const [selectedOption, setSelectedOption] = useState('myNumber');

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity > 
        <Text style={styles.headingText}>Shopping Cart</Text>
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

        {/* Bin Button */}
        <TouchableOpacity style={styles.binButton}>
          <FontAwesome5 name="trash-alt" size={15} color={COLORS.textGreen} />
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
          <FontAwesome5 name="trash-alt" size={15} color={COLORS.textGreen} />
        </TouchableOpacity>
      </View>

      {/* White Box 2 */}
      <View style={styles.whiteBox}> 
      
      {/* Paying With Text */}
        <Text style={styles.payingWithText}>Paying With</Text>

         {/* Radio Buttons */}
         <View style={styles.radioButtonContainer}>
            <View style={styles.radioItem}>
               {/* Paying with */}
               <View style={styles.radioBtns}>
                  <RadioButton
                  value="myNumber"
                  status={selectedOption === 'myNumber' ? 'checked' : 'unchecked'}
                  onPress={() => setSelectedOption('myNumber')}
                  color={COLORS.themeGreen}
                  uncheckedColor={COLORS.themeGreen} // Set the color for unchecked state
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
                  color={COLORS.themeGreen}
                  uncheckedColor={COLORS.themeGreen} // Set the color for unchecked state
                  />
                  <Text style={styles.radioLabel}>New card</Text>
                  
            </View>
               <View style={styles.cardIcons}>
                  {/* Visa Icon */}
                  <FontAwesome5 style={styles.cardIcon}
                  name="cc-visa" size={24} color={COLORS.text} />
                  {/* Mastercard Icon */}
                  <FontAwesome5 style={styles.cardIcon}
                  name="cc-mastercard" size={24} color={COLORS.text} />
               </View>
            </View>
         </View>


        {/* Grey Line */}
        <View style={styles.greyLine}></View>
        {/* Send receipt to */}
        <View style={styles.receiptContainer}>
          <Text style={styles.receiptTextLeft}>Send receipt to</Text>
          <Text style={styles.receiptTextRight}>user@email.address.com</Text>
        </View>
        {/* Change Button */}
        <TouchableOpacity style={styles.changeButton}>
          <Text style={styles.changeButtonText}>Change</Text>
        </TouchableOpacity>
        {/* Grey Line */}
        <View style={styles.greyLine}></View>

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
