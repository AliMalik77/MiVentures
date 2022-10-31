import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';
import Signup from './src/screens/SignupType';
// import auth from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '180123884938-0iv7p5s8me7e1l6gthmmosd40m4i8o2a.apps.googleusercontent.com',
  //   });
  // }, []);
  // const [firstLaunch, setFirstLaunch] = useState(null);
  // let isSignedIn = auth().currentUser;
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
