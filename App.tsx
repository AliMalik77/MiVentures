import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './src/navigation/AuthStack';

const App = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  // if (authData.uid) {
  // let signout = auth().signOut();
  // let authData = auth().currentUser;

  return (
    <>
      <NavigationContainer>
        <AuthStack userData={userData} setUserData={setUserData} />
      </NavigationContainer>
    </>
  );
};

export default App;
