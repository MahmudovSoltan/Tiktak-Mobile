import React from 'react'
import ProductScreen from '../../screens/Main/ProductScreen';
import SerachScren from '../../screens/Main/SerachScren';
import AccountScreen from '../../screens/Main/AccountScreen';
import BasketScreen from '../../screens/Main/BasketScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab from '../Tab/MainTab';
const Stack = createNativeStackNavigator();
const MainStacks = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='MainTab' component={MainTab} />
            <Stack.Screen name='Product' component={ProductScreen} />
            <Stack.Screen name='Serach' component={SerachScren} />
            <Stack.Screen name='Account' component={AccountScreen} />
            <Stack.Screen name='Basket' component={BasketScreen} />
        </Stack.Navigator>
    )
}

export default MainStacks