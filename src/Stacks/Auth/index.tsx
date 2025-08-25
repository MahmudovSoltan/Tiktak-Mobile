import React from 'react'
import Login from '../../screens/Auth/Login';
import Register from '../../screens/Auth/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../../screens/Auth/Welcome';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'welcome'}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='welcome' component={Welcome} />
            <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='register' component={Register} />

        </Stack.Navigator>
    )
}

export default AuthStack