import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignIn";

const Stack = createStackNavigator();

type AuthProps = {
  isSignedIn: string;
  setSignedIn: (val: string) => void;
};

const AuthStack = ({ isSignedIn, setSignedIn }: AuthProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn">
        {(props) => (
          <SignInScreen
            {...props}
            isSignedIn={isSignedIn}
            setSignedIn={setSignedIn}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
