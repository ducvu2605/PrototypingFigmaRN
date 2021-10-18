import React from 'react';
import {
  SafeAreaView, Text, View,
} from 'react-native';
import ButtonCT from './src/views/components/buttonCT';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1}} >
     <ButtonCT/>
    </SafeAreaView>
  );
};

export default App;
