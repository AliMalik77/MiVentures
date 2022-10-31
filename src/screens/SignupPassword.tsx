import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

type PasswordScreenProps = {
  navigation: any;
  userData: any;
  setUserData: (val: any) => void;
};

const SignupPassword = ({
  navigation,
  userData,
  setUserData,
}: PasswordScreenProps) => {
  const [error, setError] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleBack = () => {
    navigation.navigate('Email');
  };

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setAuthenticated(true);
      }
    });
  }, []);

  useEffect(() => {
    console.log('userData', userData);
  }, [userData]);
  const createUser = () => {
    try {
      auth()
        .createUserWithEmailAndPassword(userData.email, userData.password)
        .then(res => {
          Alert.alert('Signup Successfully');
        })
        .catch(err => {
          Alert.alert('Something went wrong. Please try again');
        });
    } catch (error: any) {
      Alert.alert(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => handleBack()}>
            <MaterialIcons name="arrow-back-ios" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.descHeader}>
          <Text style={styles.description}>Create your password</Text>
        </View>

        <View style={{width: '100%', alignItems: 'center'}}>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.fieldContainer}
            onChangeText={password =>
              setUserData({...userData, password: password})
            }
            //   onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          ></TextInput>

          {error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>
                Must have at least 8-characters, an uppercase letter, a number
                and a special character.
              </Text>
            </View>
          ) : (
            <View style={styles.errorContainer}></View>
          )}
          <Pressable
            style={styles.button3}
            onPress={() => {
              createUser();
            }}>
            <Text style={styles.text}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignupPassword;

const styles = StyleSheet.create({
  errorContainer: {width: '90%', marginTop: 50, marginBottom: 10},
  errorText: {
    color: '#EA4335',
    fontSize: 14,
    fontWeight: '400',
  },
  forgotPassword: {
    color: '#377BF5',
    marginTop: 24,
  },
  fieldContainer: {
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#EAEAEA',
    marginTop: 20,
    textAlign: 'center',
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
    // marginTop: 60,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  icon: {
    padding: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  descHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '25%',
    width: '50%',
    marginBottom: 30,
  },
  image: {
    width: 125,
    height: 125,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: 40,
  },
  header: {
    flex: 1,
    margin: 10,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontWeight: '800',
    color: 'white',
    fontSize: 60,
  },
  description: {
    color: '#000000',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
  footerDesc: {color: 'white', fontSize: 30, fontWeight: '700'},
});
