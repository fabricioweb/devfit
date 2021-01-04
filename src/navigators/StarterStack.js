import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StarterIntro from '../screens/StarterIntro';
import StarterName from '../screens/StarterName';
import StarterDias from '../screens/StarterDias';
import StarterNivel from '../screens/StarterNivel';
import StarterRecommendations from '../screens/StarterRecommendations';

const StarterStack = createStackNavigator();

export default ()=>(
    <StarterStack.Navigator>
        <StarterStack.Screen options={{headerShown: false}} name='StarterIntro' component={StarterIntro} />
        <StarterStack.Screen name='StarterName' component={StarterName} />
        <StarterStack.Screen name='StarterDias' component={StarterDias} />
        <StarterStack.Screen name='StarterNivel' component={StarterNivel} />
        <StarterStack.Screen name='StarterRecommendations' component={StarterRecommendations} />
    </StarterStack.Navigator>
)