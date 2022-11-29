import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Close from '../../../../assets/svgs/Exiticon.svg';
import Button from '../../../components/common/Button';
import Background2 from '../../../../assets/svgs/Background2.svg';
import {NavigationProp} from '@react-navigation/native';

const SignupType = ({
  navigation,
}: {
  navigation: NavigationProp<{
    Login: undefined;
    Auth: undefined;
    Email: undefined;
  }>;
}) => {
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
          <TouchableOpacity onPress={handleBack}>
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
        <Background2 style={styles.background2} />
      </View>
      <View style={styles.footer}>
        <Button
          text="Sign up with Google"
          color="#EA4335"
          textColor="white"
          bordercolor="#377BF5"
          border={0}
        />

        <Button
          text="Signup with email"
          color="#377BF5"
          textColor="white"
          bordercolor="#377BF5"
          border={0}
          onPress={() => handleEmailSignup()}
        />
        <Button
          text="Login"
          color="#fff"
          textColor="#377BF5"
          bordercolor="#377BF5"
          border={2}
          onPress={() => handleClick()}
        />
      </View>
    </View>
  );
};

export default SignupType;

const styles = StyleSheet.create({
  background2: {alignItems: 'center', width: '100%', height: '100%'},
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
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
  },
});
