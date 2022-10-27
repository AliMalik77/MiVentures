import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Story from "../screens/Story";
import Contact from "../screens/Contact";
import SignInScreen from "../screens/SignIn";
import SplashScreen from "../screens/SplashScreen";
import SearchScreen from "../screens/Search";
import CardComponent from "../components/Cards";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Story" component={Story} />
      <Stack.Screen name="ContactUS" component={Contact} />
      // <Stack.Screen name="Splash" component={SplashScreen} /> */}
      {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Card" component={CardComponent} />
    </Stack.Navigator>
  );
};

export default AppStack;
