import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StarterIntro from '../screens/StarterIntro';

const StarterStack = createStackNavigator();

export default ()=>(
    <StarterStack.Navigator>
        <StarterStack.Screen name='Intro' component={StarterIntro} />
    </StarterStack.Navigator>
)