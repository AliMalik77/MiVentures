import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';

type LoginScreenProps = {
  navigation: any;
  authenticated: any;
  setAuthenticated: any;
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
            navigation.navigate('InvestorInfo');
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
          <TouchableOpacity onPress={() => handleBack()}>
            <MaterialIcons name="arrow-back-ios" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.descHeader}>
          <Text style={styles.description}>Hey there! Welcome back.</Text>
        </View>

        <View style={{width: '100%', alignItems: 'center'}}>
          <TextInput
            placeholder="Email"
            style={styles.fieldContainer}
            onChangeText={e => setEmail(e)}></TextInput>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.fieldContainer}
            onChangeText={password => setPassword(password)}></TextInput>
          <TouchableOpacity onPress={() => handleForgot()}>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
          </TouchableOpacity>
          <Pressable
            style={styles.button3}
            onPress={() => {
              handleLogin();
            }}>
            <Text style={styles.text}>Log in </Text>
          </Pressable>
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
    marginTop: 24,
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
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  footerDesc: {color: 'white', fontSize: 30, fontWeight: '700'},
});
