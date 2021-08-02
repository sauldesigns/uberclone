import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import EatsScreen from '../screens/EatsScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';

export const MainStack = createStackNavigator();

const MainNavigation = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <MainStack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                    headerShown: false,
                }}
            />
            <MainStack.Screen
                name="EatsScreen"
                component={EatsScreen}
                options={{
                    headerShown: false,
                }}
            />
        </MainStack.Navigator>
    );
};

export default MainNavigation;
