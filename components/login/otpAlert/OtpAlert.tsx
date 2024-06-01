import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '@/components/login/otpAlert/otpalert.style';

const OtpAlert = () => {
  const navigation = useNavigation();
  const inputs = useRef(Array(4).fill(null)); // Use useRef instead of useState for inputs

  // Function to focus the next input
  const focusNextInput = (index) => {
    if (index < 3) { // Only focus next input if not the last one
      inputs.current[index + 1].focus();
    }
  };

  // Function to focus the previous input
  const focusPrevInput = (index) => {
    if (index > 0) { // Only focus previous input if not the first one
      inputs.current[index - 1].focus();
    }
  };

  // Handle backspace press
  const handleBackspace = (index, value) => {
    if (value === '' && index > 0) {
      focusPrevInput(index);
    }
  };

  return (
    <View style={styles.otpAlertContainer}>
      {/* otpAlert Text */}
      <Text style={styles.otpAlertText}>
        Your one-time PIN (OTP) was sent via SMS to{' '}
        <Text style={styles.phoneNumber}>071 190 5625</Text>
      </Text>

      {/* Input Fields for OTP */}
      <View style={styles.circleContainer}>
        {Array(4).fill(0).map((_, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputs.current[index] = input)} // Assign ref to array element
            style={styles.circle}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(value) => {
              if (value && value.length === 1) { // If a number is typed
                focusNextInput(index); // Focus next input
              } else if (value === '' && index > 0) { // If backspace is pressed and field is empty
                handleBackspace(index, value); // Focus previous input
              }
            }}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(index, inputs.current[index]?.value);
              }
            }}
          />
        ))}
      </View>

      {/* OTP Resend */}
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.resendText}>
          Didn't get (OTP)?{' '}
          <Text style={styles.resendLink}>Resend</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpAlert;
