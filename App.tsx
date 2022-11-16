import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import BottomNavigator from './src/navigation/BottomNavigator';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [authenticated, setAuthenticated] = useState(false);
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

export default App;
