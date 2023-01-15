import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from '../screens/LoginScreen';
import { ProductList } from '../screens/ProductList';

const Tab = createBottomTabNavigator();

export const RootNavigator = () => {
    return (
        <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Login" component={LoginScreen} />
                    <Tab.Screen name="ProductList" component={ProductList} />
                </Tab.Navigator>
        </NavigationContainer>
    )
}