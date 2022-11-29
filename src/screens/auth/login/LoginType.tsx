import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Apple from '../../../../assets/svgs/Apple.svg';
import Mailbox from '../../../../assets/svgs/Mailbox.svg';
import Google from '../../../../assets/svgs/Google.svg';
import auth from '@react-native-firebase/auth';
import Config from 'react-native-config';
import {NavigationProp} from '@react-navigation/native';
import Background from '../../../components/auth/login/loginType/Background';

type LogintypeProps = {
  authenticated: Boolean;
  setAuthenticated: (val: Boolean) => void;
  navigation: NavigationProp<{Auth: undefined; Login: undefined}>;
};

const LoginType = ({
  authenticated,
  setAuthenticated,
  navigation,
}: LogintypeProps) => {
  useEffect(() => {
    GoogleSignin.configure();
    auth().onAuthStateChanged(user => {
      if (user) {
        setAuthenticated(true);
      }
    });
  }, []);

  const googleSignin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo.user) {
        setAuthenticated(true);
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleEmailLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Background onPress={handleBack} />
      <View style={styles.footer}>
        <Pressable style={[styles.button, {backgroundColor: 'black'}]}>
          <View style={styles.buttonContent}>
            <Apple height={25} width={25} />
            <Text style={styles.text}>Log in with Apple</Text>
          </View>
        </Pressable>

        <Pressable
          style={[styles.button, {backgroundColor: '#EA4335'}]}
          onPress={() => {
            googleSignin();
          }}>
          <View style={styles.buttonContent}>
            <Google height={25} width={25} />
            <Text style={styles.text}>Log in with Google</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.button, {backgroundColor: '#377BF5'}]}
          onPress={handleEmailLogin}>
          <View style={styles.buttonContent}>
            <Mailbox height={25} width={25} />
            <Text style={styles.text}>Log in with Email</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginType;

const styles = StyleSheet.create({
  buttonContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-evenly',
  },
  w90: {
    width: '90%',
  },

  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '90%',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  container: {
    flex: 1,
  },

  footer: {
    flex: 1,
    alignItems: 'center',
  },
});
