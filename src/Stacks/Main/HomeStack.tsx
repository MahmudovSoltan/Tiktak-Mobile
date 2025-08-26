import React from 'react'
import ProductScreen from '../../screens/Main/ProductScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Main/HomeScreen';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Product' component={ProductScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack