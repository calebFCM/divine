import React from 'react';
import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import OtpScreen from './screens/OtpScreen/OtpScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import AgentLoginScreen from './screens/LoginScreen/AgentLoginScreen';
import AgentApplicationScreen from './screens/AgentApplicationScreen/AgentApplicationScreen';
import SimApplicationScreen from './screens/SimApplicationScreen/SimApplicationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="AgentLoginScreen" component={AgentLoginScreen} />
        <Stack.Screen name="AgentApplicationScreen" component={AgentApplicationScreen} />
        <Stack.Screen name="SimApplicationScreen" component={SimApplicationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
