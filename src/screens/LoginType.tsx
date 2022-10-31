import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
type LoginTypeScreenProps = {
  navigation: any;
};

const LoginType = ({navigation}: LoginTypeScreenProps) => {
  // const [confirm, setConfirm] = useState<any | null>(null);
  // const [phoneNumber, setPhoneNumber] = useState('');

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      // scopes: ['email'],
      webClientId:
        '180123884938-0iv7p5s8me7e1l6gthmmosd40m4i8o2a.apps.googleusercontent.com',
      // offlineAccess: true,
    });

    auth().onAuthStateChanged(user => {
      if (user) {
        setAuthenticated(true);
      }
    });
  }, []);

  useEffect(() => {
    if (authenticated === true) {
      console.log('true');
    }
    console.log('');
  }, [authenticated]);

  const signin = (email: string, password: string) => {
    try {
      auth().signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      Alert.alert(error);
    }
  };
  // const signInWithPhoneNumber = async (phoneNumber: string) => {
  //   const ConfirmationResult: any = await auth().signInWithPhoneNumber(
  //     phoneNumber,
  //   );
  //   console.log('confirmation result', ConfirmationResult);
  //   setConfirm(ConfirmationResult);
  // };

  // const confirmCode = async () => {
  //   try {
  //     console.log('verification is ', confirm);
  //     // await confirm.confirm(code);
  //     // setSignedIn('true');
  //   } catch (error) {
  //     console.log('Invalid code.');
  //   }
  // };
  const googleSignin = async () => {
    console.log('callinf google signin');

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

  const handleClick = () => {
    navigation.navigate('Login');
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
            <MaterialCommunityIcons name="close" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.descHeader}>
          <Text style={styles.description}>How do you want to log in?</Text>
        </View>
      </View>
      <View style={styles.center}>
        <Image
          source={require('../../assets/background2.png')}
          style={{alignItems: 'center', width: '100%', height: '100%'}}
          resizeMode="contain"></Image>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.button}>
          <MaterialCommunityIcons name="apple" size={25} color="white" />
          <Text style={styles.text}>Log in with Apple</Text>
        </Pressable>
        <Pressable
          style={styles.button2}
          onPress={() => {
            // createUser('ali.haider@carbonteq.com', '123456');
            // signInWithPhoneNumber('+923054042027');
            // handleClick();
            googleSignin()
              .then(res => {
                console.log('google response is successful', res);
              })
              .catch(err => console.log(err));
          }}>
          <MaterialCommunityIcons name="google" size={25} color="white" />
          <Text style={styles.text}>Log in with Google</Text>
        </Pressable>
        <Pressable style={styles.button3} onPress={() => handleEmailLogin()}>
          <MaterialCommunityIcons name="email" size={25} color="black" />
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
  //   image: {
  //     width: 125,
  //     height: 125,
  //   },
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
    // lineHeight: 21,
    // fontWeight: '500',
    // letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    flex: 1,
    // alignItems: 'center',
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
  //   logo: {
  //     width: 40,
  //   },
  //   header: {
  //     flex: 3,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   footer: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   name: {
  //     fontWeight: '800',
  //     color: 'white',
  //     fontSize: 60,
  //   },
  //   description: {
  //     color: 'white',
  //     fontSize: 25,
  //   },
  //   footerDesc: {color: 'white', fontSize: 30, fontWeight: '700'},
});
