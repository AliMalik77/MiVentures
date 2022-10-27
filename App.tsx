import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import LoginType from './src/screens/LoginType';
import SignLog from './src/screens/SignLog';
import Splash from './src/screens/Splash';
import SplashScreen from './src/screens/SplashScreen';
// import {NavigationContainer} from '@react-navigation/native';
// import AppStack from './src/navigation/AppStack';
// import AuthStack from './src/navigation/AuthStack';
// import SplashScreen from './src/screens/SplashScreen';
// import TabNavigation from './src/navigation/TabNavigation';
// import TopNavigator from './src/navigation/TopNavigation';
// import auth from '@react-native-firebase/auth';
// import DrawerNavigation from './src/navigation/DrawerNavigation';
// import {Provider} from 'react-redux';
// import store from './src/redux/store';
// import DropdownComponent from './src/components/Dropdown';
// import Home from './src/screens/Home';
// import Search from './src/screens/Search';
// import {NativeBaseProvider, useColorMode} from 'native-base';
// import {customTheme} from './src/components/ColorTheme';

//Api for user serach
// https://api.github.com/search/users?q=AliMalik77

//Api for repo search
//https://api.github.com/search/repositories?q=Address-Book

const App = () => {
  // let isSignedIn = auth().currentUser;
  // const [isSignedIn, setSignedIn] = useState('');

  // if (authData.uid) {
  // let signout = auth().signOut();
  // let authData = auth().currentUser;

  return (
    <>
      <LoginType />
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
