import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStacks from './src/Stacks/Main';
import AuthStack from './src/Stacks/Auth';



export default function App() {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <MainStacks/>
    </NavigationContainer>
  );
}