import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home/Home';
import Menu from '../../../assets/svgs/Menu.svg';
import Portfolio from '../../../assets/svgs/Portfolio.svg';
import Vector from '../../../assets/svgs/Vector.svg';
import PortfolioScreen from '../../screens/portfolio/Portfolio';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="invest"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Invest',
          tabBarIcon: () => {
            return <Vector height={25} width={25} />;
          },
        }}
      />
      <Tab.Screen
        name="postal"
        component={PortfolioScreen}
        options={{
          tabBarLabel: 'postal',
          tabBarIcon: () => {
            return <Portfolio height={25} width={25} />;
          },
        }}
      />
      <Tab.Screen
        name="menu"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: () => {
            return <Menu height={25} width={25} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
