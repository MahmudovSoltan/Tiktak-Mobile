import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Main/HomeScreen';
import SerachScren from '../../screens/Main/SerachScren';
import AccountScreen from '../../screens/Main/AccountScreen';
import { HomeIcon, ProfileIcon, SeacrhIcon } from '../../assets/icons/index';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native';
import HomeStack from '../Main/HomeStack';

const Tab = createBottomTabNavigator();

type TabButtonProps = {
    tabName: string;
    icon: any;
} & BottomTabBarButtonProps;

const TabButton = (props: TabButtonProps) => {
    const Icon = props.icon;
    const active = props['aria-selected'];

    return (
        <Pressable onPress={props.onPress} style={styles.tabButton}>
            <View style={styles.iconContainer}>
                <Icon color={active ? '#76CB4F' : '#80808080'} width={24} height={24} />
                <Text style={styles.tabBarLabelStyle}>{props.tabName}</Text>
            </View>
        </Pressable>
    );
};

const MainTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 70,
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                },
                headerShown:false
            }}>
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarButton: (props) => {
                        return <TabButton {...props} tabName='Home' icon={HomeIcon} />;
                    },
                    animation: "shift"
                }}
            />
            <Tab.Screen
                name="Search"
                component={SerachScren}
                options={{
                    tabBarButton: (props) => {
                        return <TabButton {...props} tabName='Home' icon={SeacrhIcon} />;
                    },
                    animation: "shift"
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarButton: (props) => {
                        return <TabButton {...props} tabName='Hesabım' icon={ProfileIcon} />;
                    },
                    animation: "shift"
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTab
const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: 'black',
        borderTopWidth: 0,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', // ortalayır
        marginHorizontal: 6,
        backgroundColor: 'transparent',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBarLabelStyle: {
        marginTop: 3, // ikonla aradakı məsafə
        fontSize: 12,
        color: 'black',
    },

    tabLine: {
        position: 'absolute',
        height: 3,
        width: 50,
        backgroundColor: 'red',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
    },
});