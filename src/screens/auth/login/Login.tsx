import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Back from '../../../../assets/svgs/Backicon.svg';
import Button from '../../../components/common/Button';
import {NavigationProp} from '@react-navigation/native';
import LoginHeader from '../../../components/auth/login/login/Header';
import {ScaledSheet} from 'react-native-size-matters';
type LoginScreenProps = {
  authenticated: Boolean;
  setAuthenticated: (val: Boolean) => void;
  navigation: NavigationProp<{
    ForgotPassword: undefined;
    LoginType: undefined;
  }>;
};

const Login = ({
  authenticated,
  setAuthenticated,
  navigation,
}: LoginScreenProps) => {
  const [email, setEmail] = useState<any | null>(null);
  const [password, setPassword] = useState<any | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        auth().signOut();
        setAuthenticated(true);
      }
    });
  }, []);

  useEffect(() => {
    if (authenticated === true) {
      Alert.alert('user signed in already');
    }
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    try {
      if (!email && !password) {
        Alert.alert('Enter email & password to login');
      }
      if (!email && password) {
        Alert.alert('Enter email to login');
      }
      if (!password && email) {
        Alert.alert('Enter  password to login');
      }
      if (email.length && password.length) {
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(res => {
            Alert.alert('user logged in successfully');
          });
      }
    } catch (error: any) {
      Alert.alert(error);
    }
  };
  const handleForgot = () => {
    navigation.navigate('ForgotPassword');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LoginHeader onPress={handleBack} />

        <View style={styles.fieldWrapper}>
          <TextInput
            textContentType="emailAddress"
            placeholder="Email"
            style={styles.fieldContainer}
            onChangeText={setEmail}></TextInput>
          <TextInput
            textContentType="password"
            placeholder="Password"
            secureTextEntry={true}
            style={styles.fieldContainer}
            onChangeText={setPassword}></TextInput>
          <TouchableOpacity onPress={handleForgot}>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
          </TouchableOpacity>
          <View style={styles.w90}>
            <Button
              text="Login"
              color="#377BF5"
              textColor="#fff"
              bordercolor="#377BF5"
              border={0}
              onPress={handleLogin}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = ScaledSheet.create({
  fieldWrapper: {width: '100%', alignItems: 'center'},
  w90: {
    width: '90%',
  },
  forgotPassword: {
    color: '#377BF5',
    marginTop: 24,
    marginBottom: 15,
  },
  fieldContainer: {
    height: '40@vs',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#EAEAEA',
    marginTop: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    margin: 10,
  },
});
