import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignLog from '../screens/SignLog';
import Splash from '../screens/Splash';
import LoginType from '../screens/LoginType';
import Login from '../screens/Login';
import PasswordReset from '../screens/PasswordReset';
import SignupType from '../screens/SignupType';
import EmailAddress from '../screens/EmailAddress';
import SignupPassword from '../screens/SignupPassword';
import InvestorInfo from '../screens/InvestorInfo';

const Stack = createStackNavigator();

type AuthProps = {
  userData: any;
  setUserData: (val: any) => void;
};

const AuthStack = ({userData, setUserData}: AuthProps) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={SignLog}></Stack.Screen>
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
