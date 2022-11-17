import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Close from '../../../../assets/svgs/Exiticon.svg';
import Apple from '../../../../assets/svgs/Apple.svg';
import Mailbox from '../../../../assets/svgs/Mailbox.svg';
import Google from '../../../../assets/svgs/Google.svg';
import auth from '@react-native-firebase/auth';
type LoginTypeScreenProps = {
  navigation: any;
};

const LoginType = ({navigation}: LoginTypeScreenProps) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '180123884938-0iv7p5s8me7e1l6gthmmosd40m4i8o2a.apps.googleusercontent.com',
    });

    auth().onAuthStateChanged(user => {
      if (user) {
        setAuthenticated(true);
      }
    });
  }, []);

  const googleSignin = async () => {
    const {idToken} = await GoogleSignin.signIn();

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
          <TouchableOpacity
            onPress={() => {
              handleBack();
            }}>
            <Close height={25} width={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.descHeader}>
          <Text style={styles.description}>How do you want to log in?</Text>
        </View>
      </View>
      <View style={styles.center}>
        <Image
          source={require('../../../../assets/background2.png')}
          style={{alignItems: 'center', width: '100%', height: '100%'}}
          resizeMode="contain"></Image>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.button}>
          <Apple height={25} width={25} />
          <Text style={styles.text}>Log in with Apple</Text>
        </Pressable>
        <Pressable
          style={styles.button2}
          onPress={() => {
            googleSignin()
              .then(res => {
                console.log('google response is successful', res);
              })
              .catch(err => console.log(err));
          }}>
          <Google height={25} width={25} />
          <Text style={styles.text}>Log in with Google</Text>
        </Pressable>
        <Pressable style={styles.button3} onPress={() => handleEmailLogin()}>
          <Mailbox height={25} width={25} />
          <Text style={styles.text}>Log in with Email</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginType;

const styles = StyleSheet.create({
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
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: 'black',
    width: '90%',
    marginBottom: 10,
  },
  button2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: '#EA4335',
    width: '90%',
    marginBottom: 10,
  },
  button3: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: '#377BF5',
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
