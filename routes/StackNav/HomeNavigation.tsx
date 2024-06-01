import { View, Text } from 'react-native';
import React from 'react';

import HomeScreen from '@/screens/HomeScreen/HomeScreen';
import AirtimeScreen from '@/screens/HomeScreen/AirtimeScreen';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
   <Stack.Navigator screenOptions={{
      headerShown: false}
   }>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='AirtimeScreen' component={AirtimeScreen} />
      
   </Stack.Navigator>
  )
}