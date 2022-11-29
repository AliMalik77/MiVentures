import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';

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
        {/* <InvestorInfo /> */}
      </NavigationContainer>
    </>
  );
};

export default App;
