import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Close from '../../../../assets/svgs/Exiticon.svg';
import Apple from '../../../../assets/svgs/Apple.svg';
import Background2 from '../../../../assets/svgs/Background2.svg';
import Mailbox from '../../../../assets/svgs/Mailbox.svg';
import Google from '../../../../assets/svgs/Google.svg';
import auth from '@react-native-firebase/auth';
import Config from 'react-native-config';
import {NavigationProp} from '@react-navigation/native';
const LoginType = ({
  navigation,
}: {
  navigation: NavigationProp<{Auth: undefined; Login: undefined}>;
}) => {
  const [authenticated, setAuthenticated] = useState(false);

  console.log('env data', Config.CLIENTID);
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.CLIENTID,
    });

    auth().onAuthStateChanged(user => {
      if (user) {
        setAuthenticated(true);
      }
    });
  }, []);

  const googleSignin = async () => {
    // await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    console.log('hi');

    const {idToken} = await GoogleSignin.signIn();
    console.log('id token', idToken);

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);
  };

  const createUser = (email: string, password: string) => {
    try {
      auth().createUserWithEmailAndPassword(email, password);
    } catch (error: any) {
      Alert.alert(error);
    }
  };

  const handleBack = () => {
    navigation.navigate('Auth');
  };

  const handleEmailLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={handleBack}>
            <Close height={25} width={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.descHeader}>
          <Text style={styles.description}>How do you want to log in?</Text>
        </View>
      </View>
      <View style={styles.center}>
        <Background2 style={styles.background2} />
      </View>
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
            googleSignin()
              .then(res => {
                console.log('google response is successful', res);
              })
              .catch(err => console.log('error getting is =======', err));
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
  background2: {alignItems: 'center', width: '100%', height: '100%'},
  w90: {
    width: '90%',
  },
  descHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '25%',
    width: '50%',
  },
  description: {
    color: 'black',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },

  icon: {
    padding: 30,
    marginTop: 30,
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
  header: {
    flex: 1,
  },
  center: {
    flex: 2,
    marginRight: 30,
    marginLeft: 30,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
  },
});
