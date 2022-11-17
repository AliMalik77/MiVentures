import React from 'react';
import AuthStack from './auth/AuthStack';
import BottomNavigator from './app/BottomNavigator';

type RootNavigationProps = {
  userData: any;
  setUserData: (val: any) => void;
  authenticated: any;
  setAuthenticated: (val: any) => void;
};

const RootNavigation = ({
  userData,
  setUserData,
  authenticated,
  setAuthenticated,
}: RootNavigationProps) => {
  return (
    <>
      {!authenticated ? (
        <AuthStack
          userData={userData}
          setUserData={setUserData}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      ) : (
        <BottomNavigator />
      )}
    </>
  );
};

export default RootNavigation;
