import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import BottomNavigator from './src/navigation/app/BottomNavigator';
import DrawerNavigation from './src/navigation/app/DrawerNavigation';
import Intro from './src/screens/intro/Intro';

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
        {/* <RootNavigation
          userData={userData}
          setUserData={setUserData}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        /> */}
        {/* <Intro   /> */}
        <BottomNavigator />
        {/* <DrawerNavigation /> */}
      </NavigationContainer>
    </>
  );
};

export default App;
