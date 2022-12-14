import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from '../../screens/auth/Auth';
import Splash from '../../screens/splash/Splash';
import LoginType from '../../screens/auth/login/LoginType';
import Login from '../../screens/auth/login/Login';
import PasswordReset from '../../screens/auth/login/PasswordReset';
import SignupType from '../../screens/auth/signup/SignupType';
import EmailAddress from '../../screens/auth/signup/EmailAddress';
import SignupPassword from '../../screens/auth/signup/SignupPassword';
import InvestorInfo from '../../screens/investorInfo/InvestorInfo';

const Stack = createStackNavigator();

type AuthProps = {
  userData: {
    email: string;
    password: string;
  };
  setUserData: (val: {email: string; password: string}) => void;
  authenticated: Boolean;
  setAuthenticated: (val: Boolean) => void;
};

const AuthStack = ({
  userData,
  setUserData,
  authenticated,
  setAuthenticated,
}: AuthProps) => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={Auth}></Stack.Screen>
      <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
      <Stack.Screen name="LoginType" component={LoginType}></Stack.Screen>
      <Stack.Screen name="Login">
        {props => (
          <Login
            {...props}
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="SignupType" component={SignupType}></Stack.Screen>
      <Stack.Screen name="Email">
        {props => (
          <EmailAddress
            {...props}
            userData={userData}
            setUserData={setUserData}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="SignupPassword">
        {props => (
          <SignupPassword
            {...props}
            userData={userData}
            setUserData={setUserData}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="ForgotPassword"
        component={PasswordReset}></Stack.Screen>
      <Stack.Screen name="InvestorInfo" component={InvestorInfo}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
