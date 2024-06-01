import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '@/components/login/form/loginform.style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginForm = () => {
  const navigation = useNavigation();

  return (
   <KeyboardAwareScrollView
            contentContainerStyle={styles.scrollContainer}
            enableOnAndroid={true}
            extraScrollHeight={0}
            keyboardOpeningTime={0}>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.registerText}>
            Don't have an account?{' '}
            <Text style={styles.registerLink}>Register now</Text>
          </Text>
        </TouchableOpacity>
        <Text style={styles.optionsText}>Login with either your cellphone number or email</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your cellphone number"
            placeholderTextColor="#c4c6c5"
          />
        </View>
        <Text style={styles.orText}>or</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your user name"
            placeholderTextColor="#c4c6c5"
          />
        </View>
        <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('OtpScreen')}
        >
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
   </KeyboardAwareScrollView>
  );
};

export default LoginForm;