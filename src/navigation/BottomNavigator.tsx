import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import HomeScreen from '../screens/Home';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    //
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="invest"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Invest',
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="chart-line-variant"
                size={30}
                color="#909090"
              />
            );
          },
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="postal"
        component={HomeScreen}
        options={{
          tabBarLabel: 'postal',
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="credit-card-outline"
                size={30}
                color="#909090"
              />
            );
          },
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="menu"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons name="menu" size={30} color="#909090" />
            );
          },
          // tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
