import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../pages/welcome';
import Login from '../pages/auth/login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Welcome'} component={Welcome} />
      <Stack.Screen name={'Home'} component={HomeFlow} />
    </Stack.Navigator>
  );
};

const HomeFlow = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Welcome'} component={Welcome} />
      <Tab.Screen name={'Welcome1'} component={Welcome} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AuthFlow />
    </NavigationContainer>
  );
};
export default AppNavigation;
