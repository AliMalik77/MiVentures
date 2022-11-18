import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/auth/AuthStack';
import BottomNavigator from './src/navigation/app/BottomNavigator';
import RootNavigation from './src/navigation/RootNavigation';
import Camera from './src/components/common/Camera';
import Fundraising from './src/screens/fundraising/Fundraising';

const App = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  // if (authData.uid) {
  // let signout = auth().signOut();
  // let authData = auth().currentUser;

  return (
    <>
      <NavigationContainer>
        <RootNavigation
          userData={userData}
          setUserData={setUserData}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </NavigationContainer>
    </>
  );
};

// auth file name //
// func change //
// type of input fields //
// utils //
// props type//
// svgs
//button component
//hide scroll //
//add space in home component //
export default App;
