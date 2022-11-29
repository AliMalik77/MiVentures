import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import Back from '../../../../assets/svgs/Backicon.svg';
import Button from '../../../components/common/Button';
import {NavigationProp} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';

type PasswordScreenProps = {
  userData: {
    email: string;
    password: string;
  };
  setUserData: (val: {email: string; password: string}) => void;
  navigation: NavigationProp<{
    Email: undefined;
  }>;
};

const SignupPassword = ({
  userData,
  setUserData,
  navigation,
}: PasswordScreenProps) => {
  const [error] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setAuthenticated(true);
      }
    });
  }, []);

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
          <TouchableOpacity onPress={handleBack}>
            <Back height={25} width={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.descHeader}>
          <Text style={styles.description}>Create your password</Text>
        </View>

        <View style={styles.fieldsWrapper}>
          <TextInput
            textContentType="password"
            secureTextEntry={true}
            placeholder="Password"
            style={styles.fieldContainer}
            onChangeText={password =>
              setUserData({...userData, password: password})
            }></TextInput>

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
          <Button
            text="Next"
            color="#377BF5"
            textColor="white"
            bordercolor="#377BF5"
            border={0}
            onPress={() => createUser()}
          />
        </View>
      </View>
    </View>
  );
};

export default SignupPassword;

const styles = ScaledSheet.create({
  fieldsWrapper: {width: '100%', alignItems: 'center'},
  errorContainer: {width: '90%', marginTop: 50, marginBottom: 10},
  errorText: {
    color: '#EA4335',
    fontSize: 14,
    fontWeight: '400',
  },
  fieldContainer: {
    height: '50@vs',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#EAEAEA',
    marginTop: 20,
    textAlign: 'center',
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
  container: {
    flex: 1,
    backgroundColor: 'white',
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
});
