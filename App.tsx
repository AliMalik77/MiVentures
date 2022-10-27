import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';
import Signup from './src/screens/SignupType';

const App = () => {
  const [firstLaunch, setFirstLaunch] = useState(null);
  // let isSignedIn = auth().currentUser;
  const [isSignedIn, setSignedIn] = useState('');

  // if (authData.uid) {
  // let signout = auth().signOut();
  // let authData = auth().currentUser;

  return (
    <>
      <NavigationContainer>
        <AuthStack />
        {/* <Signup /> */}

        {/* {isSignedIn ? <AuthStack /> : <LoginType />} */}
      </NavigationContainer>
    </>
    // <NativeBaseProvider theme={customTheme}>
    // <Provider store={store}>
    // {
    /* <NavigationContainer>
        {!isSignedIn ? (
          <TabNavigation />
        ) : (
          <AuthStack isSignedIn={isSignedIn} setSignedIn={setSignedIn} />
        )}
      </NavigationContainer> */
    // }
    // </Provider>
    // </NativeBaseProvider>
  );
};

export default App;
