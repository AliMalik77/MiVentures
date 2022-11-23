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

type LoginScreenProps = {
  navigation: {
    addListener: Function;
    canGoBack: Function;
    dispatch: Function;
    getId: Function;
    getParent: Function;
    getState: Function;
    goBack: Function;
    isFocused: Function;
    navigate: Function;
    pop: Function;
    popToTop: Function;
    push: Function;
    removeListener: Function;
    replace: Function;
    reset: Function;
    setOptions: Function;
    setParams: Function;
  };
  authenticated: Boolean;
  setAuthenticated: (val: Boolean) => void;
};

const Login = ({
  navigation,
  authenticated,
  setAuthenticated,
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
    navigation.navigate('LoginType');
  };

  const handleLogin = () => {
    try {
      if (email && password) {
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
        <View style={styles.icon}>
          <TouchableOpacity onPress={handleBack}>
            <Back height={25} width={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.descHeader}>
          <Text style={styles.description}>Hey there! Welcome back.</Text>
        </View>

        <View style={{width: '100%', alignItems: 'center'}}>
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
          <Button
            text="Login"
            btnWidth="90%"
            color="#377BF5"
            textColor="#fff"
            bordercolor="#377BF5"
            border={0}
            handler={handleLogin}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  forgotPassword: {
    color: '#377BF5',
    marginTop: 24,
    marginBottom: 15,
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
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    margin: 10,
  },
  description: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
});
