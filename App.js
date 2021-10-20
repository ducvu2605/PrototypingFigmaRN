import React from 'react';
import AppNavigation from './src/views/navigations';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return <AppNavigation />;
};

export default App;
