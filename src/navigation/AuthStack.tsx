import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignIn';
import SignLog from '../screens/SignLog';
import Splash from '../screens/Splash';
import LoginType from '../screens/LoginType';
import Login from '../screens/Login';
import PasswordReset from '../screens/PasswordReset';
import Signup from '../screens/SignupType';
import SignupType from '../screens/SignupType';

const Stack = createStackNavigator();

type AuthProps = {
  isSignedIn: string;
  setSignedIn: (val: string) => void;
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={SignLog}></Stack.Screen>
      <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
      <Stack.Screen name="LoginType" component={LoginType}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="SignupType" component={SignupType}></Stack.Screen>
      <Stack.Screen
        name="ForgotPassword"
        component={PasswordReset}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
