import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Contact from "../screens/Contact";
import SettingsScreen from "../screens/Settings";

const Tab = createMaterialTopTabNavigator();

const TopNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
};

export default TopNavigator;
