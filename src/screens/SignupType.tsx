import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import Close from '../../assets/svgs/Exiticon.svg';
import Google from '../../assets/svgs/Google.svg';
type SignupTypeScreenProps = {
  navigation: any;
};

const SignupType = ({navigation}: SignupTypeScreenProps) => {
  const handleClick = () => {
    navigation.navigate('Login');
  };

  const handleBack = () => {
    navigation.navigate('Auth');
  };

  const handleEmailSignup = () => {
    navigation.navigate('Email');
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
          <Text style={styles.description}>
            Sign up with Google or Email to invest.
          </Text>
        </View>
      </View>
      <View style={styles.center}>
        <Image
          source={require('../../assets/background2.png')}
          style={{alignItems: 'center', width: '100%', height: '100%'}}
          resizeMode="contain"></Image>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.button2}>
          <Google height={25} width={25} />
          <Text style={styles.text}>Sign up with Google</Text>
        </Pressable>
        <Pressable
          style={styles.signupEmailbutton}
          onPress={() => {
            handleEmailSignup();
          }}>
          <Text style={styles.signupButtontext}>Sign up with Email</Text>
        </Pressable>
        <Pressable
          style={styles.button3}
          onPress={() => {
            handleClick();
          }}>
          <Text style={styles.textLogin}>Log in </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignupType;

const styles = StyleSheet.create({
  textLogin: {
    fontSize: 20,
    color: '#377BF5',
  },
  signupButtontext: {fontSize: 20, color: '#fff'},
  descHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '20%',
    width: '60%',
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
    width: '90%',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#377BF5',
  },
  signupEmailbutton: {
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
    justifyContent: 'center',
  },
});
