import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import BottomNavigator from './src/navigation/app/BottomNavigator';
import Intro from './src/screens/intro/Intro';
const App = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  return (
    <>
      <NavigationContainer>
        <RootNavigation
          userData={userData}
          setUserData={setUserData}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
        {/* <BottomNavigator /> */}
        {/* <Intro /> */}
        {/* <InvestorInfo /> */}
      </NavigationContainer>
    </>
  );
};

export default App;
