import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '@/components/login/welcome/welcome.style';


const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.welcomeContainer}>
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome</Text>

      {/* Register Now Text with TouchableOpacity */}
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.registerText}>
          Don't have an account?{' '}
          <Text style={styles.registerLink}>Register now</Text>
        </Text>
      </TouchableOpacity>

      <Text style={styles.optionsText}>
        Login with either your cellphone number or email
      </Text>
    </View>
  );
};

export default Welcome;