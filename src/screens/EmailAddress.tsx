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
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

type EmailScreenProps = {
  navigation: any;
  userData: any;
  setUserData: (val: any) => void;
};

const EmailAddress = ({
  navigation,
  userData,
  setUserData,
}: EmailScreenProps) => {
  const handleBack = () => {
    navigation.navigate('SignupType');
  };

  const handleNext = () => {
    navigation.navigate('SignupPassword');
  };

  useEffect(() => {
    console.log('userData', userData);
  }, [userData]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => handleBack()}>
            <MaterialIcons name="arrow-back-ios" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.descHeader}>
          <Text style={styles.description}>What’s your email address?</Text>
        </View>

        <View style={{width: '100%', alignItems: 'center'}}>
          <TextInput
            placeholder="Email Address"
            style={styles.fieldContainer}
            onChangeText={email =>
              setUserData({...userData, email: email})
            }></TextInput>

          <Pressable
            style={styles.button3}
            onPress={() => {
              handleNext();
            }}>
            <Text style={styles.text}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default EmailAddress;

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
    marginTop: 60,
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
