import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

type AuthProps = {
  isSignedIn: string;
  setSignedIn: (val: string) => void;
  navigation: any;
};

const SignInScreen = ({isSignedIn, setSignedIn, navigation}: AuthProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState<any | null>(null);
  const [code, setCode] = useState('');

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      setSignedIn('true');
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  const signInWithPhoneNumber = async (phoneNumber: string) => {
    const ConfirmationResult: any = await auth().signInWithPhoneNumber(
      phoneNumber,
    );
    setConfirm(ConfirmationResult);
  };

  if (!confirm) {
    return (
      <View style={styles.container1}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Welcome!</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.textFooter}>Phone Number</Text>
          <View style={styles.action}>
            <MaterialCommunityIcons name="account" size={30} />
            <TextInput
              style={styles.textInput}
              value={phoneNumber}
              onChangeText={phoneNumber =>
                setPhoneNumber(phoneNumber)
              }></TextInput>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => signInWithPhoneNumber(phoneNumber)}>
              <Text style={[styles.textSign, {color: '#fff'}]}>SignIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={text => setCode(text)}
      />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#009387',
  },
  textHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textFooter: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    width: '100%',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SignInScreen;
