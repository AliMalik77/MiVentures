import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/AuthAction";
// import

function SettingsScreen() {
  const count = useSelector((state: any) => state.auth.signedIn);
  const dispatch: any = useDispatch();

  useEffect(() => {
    console.log("count on first render", count);
  }, []);

  useEffect(() => {
    console.log("count is ", count);
  }, [count]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={() => dispatch(login())}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Text>Settings!</Text>
    </View>
  );
}

export default SettingsScreen;
