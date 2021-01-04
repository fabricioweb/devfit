import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StarterIntro from '../screens/StarterIntro';

const StarterStack = createStackNavigator();

export default ()=>(
    <StarterStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <StarterStack.Screen name='Intro' component={StarterIntro} />
    </StarterStack.Navigator>
)