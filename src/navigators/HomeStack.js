import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import HomeConfig from '../screens/HomeConfig';

const HomeStack = createStackNavigator();

export default ()=>(
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={Home} />
        <HomeStack.Screen name='HomeConfig' component={HomeConfig} />
    </HomeStack.Navigator>
)