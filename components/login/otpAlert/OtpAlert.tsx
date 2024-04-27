import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '@/components/login/otpAlert/otpalert.style';


const OtpAlert = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.otpAlertContainer}>
      {/* otpAlert Text */}
      <Text style={styles.otpAlertText}>Your one-time PIN (OTP) was sent via SMS to{' '}
         <Text style={styles.phoneNumber}>071 190 5625</Text>
      </Text>

      {/* Circles */}
      {/* Input Fields for OTP */}
      <View style={styles.circleContainer}>
        <TextInput
          style={styles.circle}
          keyboardType="number-pad"
          maxLength={1}/>

        <TextInput
          style={styles.circle}
          keyboardType="number-pad"
          maxLength={1}/>

        <TextInput
          style={styles.circle}
          keyboardType="number-pad"
          maxLength={1}/>

        <TextInput
          style={styles.circle}
          keyboardType="number-pad"
          maxLength={1}/>
      </View>

      {/*OTP Resend */}
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