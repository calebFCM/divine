import React from 'react';
import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import LoginScreen from './screens/LoginScreen/LoginScreen';
import OtpScreen from './screens/OtpScreen/OtpScreen';
import AgentLoginScreen from './screens/LoginScreen/AgentLoginScreen';
import AgentApplicationScreen from './screens/AgentApplicationScreen/AgentApplicationScreen';
import SimApplicationPaymentScreen from './screens/SimApplicationScreen/SimApplicationPaymentScreen';
import ESimApplicationPaymentScreen from './screens/SimApplicationScreen/ESimApplicationPaymentScreen';
import SimApplicationCustomerScreen from './screens/SimApplicationScreen/SimApplicationCustomerScreen';
import ESimApplicationCustomerScreen from './screens/SimApplicationScreen/ESimApplicationCustomerScreen';
import SimApplicationServiceScreen from './screens/SimApplicationScreen/SimApplicationServiceScreen';
import SimApplicationPostPaidScreen from './screens/SimApplicationScreen/SimApplicationPostPaidScreen';
import SimConsentScreen from './screens/SimApplicationScreen/SimConsentScreen';
import ESimConsentScreen from './screens/SimApplicationScreen/ESimConsentScreen';
import ESimImageValidationScreen from './screens/SimApplicationScreen/ESimImageValidationScreen';
import SimImageRetakeScreen from './screens/SimApplicationScreen/SimImageRetakeScreen';
import ESimImageRetakeScreen from './screens/SimApplicationScreen/ESimImageRetakeScreen';
import SimImageValidationScreen from './screens/SimApplicationScreen/SimImageValidationScreen';
import ESimQRScreen from './screens/SimApplicationScreen/ESimQRScreen';
import SimSubmitFormScreen from './screens/SimApplicationScreen/SimSubmitFormScreen';
import ESimSubmitFormScreen from './screens/SimApplicationScreen/ESimSubmitFormScreen';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import AirtimeScreen from './screens/HomeScreen/AirtimeScreen';
import AirtimeAmountScreen from './screens/HomeScreen/AirtimeAmountScreen';
import DataScreen from './screens/HomeScreen/DataScreen';
import DataBundlesScreen from './screens/HomeScreen/DataBundlesScreen';
import DataSelectedScreen from './screens/HomeScreen/DataSelectedScreen';
import VoiceScreen from './screens/HomeScreen/VoiceScreen';
import VoiceBundlesScreen from './screens/HomeScreen/VoiceBundlesScreen';
import VoiceSelectedScreen from './screens/HomeScreen/VoiceSelectedScreen';
import SocialScreen from './screens/HomeScreen/SocialScreen';
import SocialBundlesScreen from './screens/HomeScreen/SocialBundlesScreen';
import SocialSelectedScreen from './screens/HomeScreen/SocialSelectedScreen';
import SimScreen from './screens/HomeScreen/SimScreen';
import ESimScreen from './screens/HomeScreen/ESimScreen';
import GetStartedScreen from './screens/HomeScreen/GetStartedScreen';
import SimNumberScreen from './screens/HomeScreen/SimNumberScreen';
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
import BalancesScreen from './screens/MenuScreen/BalancesScreen';
import WalletScreen from './screens/MenuScreen/WalletScreen';
import HistoryScreen from './screens/MenuScreen/HistoryScreen';
import ContactScreen from './screens/MenuScreen/ContactScreen';
import RechargeScreen from './screens/MenuScreen/RechargeScreen';

// import TabNavigation from './routes/TabNav/TabNavigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="LoginScreen"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="AgentLoginScreen" component={AgentLoginScreen} />
          <Stack.Screen name="AgentApplicationScreen" component={AgentApplicationScreen} />
          <Stack.Screen name="SimApplicationPaymentScreen" component={SimApplicationPaymentScreen} />
          <Stack.Screen name="ESimApplicationPaymentScreen" component={ESimApplicationPaymentScreen} />
          <Stack.Screen name="SimApplicationServiceScreen" component={SimApplicationServiceScreen} />
          <Stack.Screen name="SimApplicationCustomerScreen" component={SimApplicationCustomerScreen} />
          <Stack.Screen name="ESimApplicationCustomerScreen" component={ESimApplicationCustomerScreen} />
          <Stack.Screen name="SimApplicationPostPaidScreen" component={SimApplicationPostPaidScreen} />
          <Stack.Screen name="SimConsentScreen" component={SimConsentScreen} />
          <Stack.Screen name="ESimImageValidationScreen" component={ESimImageValidationScreen} />
          <Stack.Screen name="ESimConsentScreen" component={ESimConsentScreen} />
          <Stack.Screen name="SimImageRetakeScreen" component={SimImageRetakeScreen} />
          <Stack.Screen name="ESimImageRetakeScreen" component={ESimImageRetakeScreen} />
          <Stack.Screen name="SimImageValidationScreen" component={SimImageValidationScreen} />
          <Stack.Screen name="ESimQRScreen" component={ESimQRScreen} />
          <Stack.Screen name="SimSubmitFormScreen" component={SimSubmitFormScreen} />
          <Stack.Screen name="ESimSubmitFormScreen" component={ESimSubmitFormScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SimScreen" component={SimScreen} />
          <Stack.Screen name="ESimScreen" component={ESimScreen} />
          <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
          <Stack.Screen name="SimNumberScreen" component={SimNumberScreen} />
          <Stack.Screen name="AirtimeScreen" component={AirtimeScreen} />
          <Stack.Screen name="AirtimeAmountScreen" component={AirtimeAmountScreen} />
          <Stack.Screen name="DataScreen" component={DataScreen} />
          <Stack.Screen name="DataBundlesScreen" component={DataBundlesScreen} />
          <Stack.Screen name="DataSelectedScreen" component={DataSelectedScreen} />
          <Stack.Screen name="VoiceScreen" component={VoiceScreen} />
          <Stack.Screen name="VoiceBundlesScreen" component={VoiceBundlesScreen} />
          <Stack.Screen name="VoiceSelectedScreen" component={VoiceSelectedScreen} />
          <Stack.Screen name="SocialScreen" component={SocialScreen} />
          <Stack.Screen name="SocialBundlesScreen" component={SocialBundlesScreen} />
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
          <Stack.Screen name="BalancesScreen" component={BalancesScreen} />
          <Stack.Screen name="WalletScreen" component={WalletScreen} />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
          <Stack.Screen name="ContactScreen" component={ContactScreen} />
          <Stack.Screen name="RechargeScreen" component={RechargeScreen} />
        </Stack.Navigator>

        {/* <TabNavigation/> */}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default registerRootComponent(App);
