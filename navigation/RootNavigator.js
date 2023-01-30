import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, ProductList, ModalScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { SwitchScreen } from '../screens/SwitchScreen';

const Stack = createStackNavigator();

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SwitchScreen" component={SwitchScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ProductList" component={ProductList} options={{ headerShown: false }} />
                <Stack.Screen name="ModalScreen" component={ModalScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}