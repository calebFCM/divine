import React from 'react';
import styles from './loginscreen.style';

import SignInHeader from '@/components/common/header/SignInHeader';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Welcome from '@/components/login/welcome/Welcome';
import LoginForm from '@/components/login/form/LoginForm';
import LoginHeading from '@/components/login/header/LoginHeading';
 import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';

const backgroundImage = require('@/assets/images/model.png');

export default function LoginScreen() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.loginScreenContainer}>
      <SignInHeader />
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} imageStyle={styles.image}>
        <View style={styles.overlay}>
       
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
        </View>
      </ImageBackground>
    </View>
  );
}
