import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home/Home';
import PortfolioScreen from '../../screens/portfolio/Portfolio';
import DrawerNavigation from './DrawerNavigation';
import VectorComponent from '../../components/common/svgs/Vector';
import PortfolioComponent from '../../components/common/svgs/Portfolio';
import MenuComponent from '../../components/common/svgs/Menu';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#377BF5',
        tabBarInactiveTintColor: '#909090',
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '700',
        },
        tabBarStyle: {
          height: 60,
          padding: 10,
          paddingBottom: 5,
        },
      })}>
      <Tab.Screen
        name="invest"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Invest',

          tabBarIcon: ({focused}) => {
            return focused ? (
              <VectorComponent color="#377BF5" />
            ) : (
              <VectorComponent color="#9a9a9a" />
            );
          },
        }}
      />
      <Tab.Screen
        name="postal"
        component={PortfolioScreen}
        options={{
          tabBarLabel: 'postal',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <PortfolioComponent color="#377BF5" />
            ) : (
              <PortfolioComponent color="#9a9a9a" />
            );
          },
        }}
      />
      <Tab.Screen
        name="menu"
        component={DrawerNavigation}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <MenuComponent color="#377BF5" />
            ) : (
              <MenuComponent color="#9a9a9a" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
