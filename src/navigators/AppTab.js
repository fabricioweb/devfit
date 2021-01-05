import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import TmpScreen from '../screens/TmpScreen';
//import WorkoutStack from './WorkoutStack';
//import MyWorkoutsStack from './MyWorkoutsStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="TmpScreen" component={TmpScreen} />
      </Tab.Navigator>
  );
}