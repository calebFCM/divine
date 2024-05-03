import React from 'react';
import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen/LoginScreen';
import OtpScreen from './screens/OtpScreen/OtpScreen';
import AgentLoginScreen from './screens/LoginScreen/AgentLoginScreen';
import AgentApplicationScreen from './screens/AgentApplicationScreen/AgentApplicationScreen';
import SimApplicationScreen from './screens/SimApplicationScreen/SimApplicationScreen';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import AirtimeScreen from './screens/HomeScreen/AirtimeScreen';
import DataScreen from './screens/HomeScreen/DataScreen';
import DataSelectedScreen from './screens/HomeScreen/DataSelectedScreen';
import VoiceScreen from './screens/HomeScreen/VoiceScreen';
import VoiceSelectedScreen from './screens/HomeScreen/VoiceSelectedScreen';
import SocialScreen from './screens/HomeScreen/SocialScreen';
import SocialSelectedScreen from './screens/HomeScreen/SocialSelectedScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

import CartScreen from './screens/CartScreen/CartScreen';
import PaymentScreen from './screens/CartScreen/PaymentScreen';
import PaymentOutcomeScreen from './screens/CartScreen/PaymentOutcomeScreen';

import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import EmailAddressScreen from './screens/ProfileScreen/EmailAddressScreen';
import MyNumberScreen from './screens/ProfileScreen/MyNumberScreen';
import NumberListScreen from './screens/ProfileScreen/NumberListScreen';
import PasswordScreen from './screens/ProfileScreen/PasswordScreen';
import CreditCardScreen from './screens/ProfileScreen/CreditCardScreen';

import MenuScreen from './screens/MenuScreen/MenuScreen';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="AgentLoginScreen" component={AgentLoginScreen} />
        <Stack.Screen name="AgentApplicationScreen" component={AgentApplicationScreen} />
        <Stack.Screen name="SimApplicationScreen" component={SimApplicationScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AirtimeScreen" component={AirtimeScreen} />
        <Stack.Screen name="DataScreen" component={DataScreen} />
        <Stack.Screen name="DataSelectedScreen" component={DataSelectedScreen} />
        <Stack.Screen name="VoiceScreen" component={VoiceScreen} />
        <Stack.Screen name="VoiceSelectedScreen" component={VoiceSelectedScreen} />
        <Stack.Screen name="SocialScreen" component={SocialScreen} />
        <Stack.Screen name="SocialSelectedScreen" component={SocialSelectedScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="PaymentOutcomeScreen" component={PaymentOutcomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="EmailAddressScreen" component={EmailAddressScreen} />
        <Stack.Screen name="MyNumberScreen" component={MyNumberScreen} />
        <Stack.Screen name="NumberListScreen" component={NumberListScreen} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
        <Stack.Screen name="CreditCardScreen" component={CreditCardScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
