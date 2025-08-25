import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/Main/HomeScreen';
import ProductScreen from '../../screens/Main/ProductScreen';
import SerachScren from '../../screens/Main/SerachScren';
import AccountScreen from '../../screens/Main/AccountScreen';
import BasketScreen from '../../screens/Main/BasketScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const MainStacks = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Product' component={ProductScreen} />
            <Stack.Screen name='Serach' component={SerachScren} />
            <Stack.Screen name='Account' component={AccountScreen} />
            <Stack.Screen name='Basket' component={BasketScreen} />
        </Stack.Navigator>
    )
}

export default MainStacks