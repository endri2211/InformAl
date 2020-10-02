import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import GuestView from '../screens/GuestView'
import MyTabs from '../screens/MyTabs';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lista from '../screens/Lista';



const Tab = createBottomTabNavigator();

 function TabView() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={GuestView} />
        <Tab.Screen name="Settings" component={Lista} />
      </Tab.Navigator>
    
  );
}

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="none">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="GuestView" component={TabView} />
      

    </Stack.Navigator>
  );
}
