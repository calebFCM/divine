import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from '@/screens/CartScreen/CartScreen';
import ProfileScreen from '@/screens/ProfileScreen/EmailAddressScreen';
import MenuScreen from '@/screens/MenuScreen/MenuScreen';
import HomeNavigation from '../StackNav/HomeNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name='homeeee' component={HomeNavigation} />
        <Tab.Screen name='wallet' component={CartScreen} />
        <Tab.Screen name='profile' component={ProfileScreen} />
        <Tab.Screen name='menu' component={MenuScreen} />
      </Tab.Navigator>
   )
}