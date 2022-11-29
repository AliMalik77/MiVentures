import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '../../../components/auth/login/passwordReset/Header';

const PasswordReset = ({
  navigation,
}: {
  navigation: NavigationProp<{
    Login: undefined;
  }>;
}) => {
  const [error] = useState();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header onPress={handleBack} />
        <View style={styles.fieldWrapper}>
          <View style={styles.w80}>
            <Text style={styles.submitText}>
              Submit your user email and we’ll send you password reset
              instructions.
            </Text>
          </View>
          <TextInput
            textContentType="emailAddress"
            placeholder="Email"
            style={styles.fieldContainer}></TextInput>
          {!error ? (
            <View style={styles.success}>
              <Text style={styles.successText}>
                Password reset submitted! Check your email.
              </Text>
            </View>
          ) : (
            <View style={[styles.mt24, styles.w80]}>
              <Text style={styles.error}>
                This account was recently deleted. Login with your previous user
                email to reactivate.
              </Text>
            </View>
          )}
          <Pressable style={styles.button}>
            <Text style={styles.text}>Submit </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PasswordReset;

const styles = ScaledSheet.create({
  fieldWrapper: {width: '100%', alignItems: 'center'},
  error: {textAlign: 'center', color: '#EA4335'},
  successText: {textAlign: 'center', color: '#57A773'},
  w80: {
    width: '80%',
  },
  success: {
    marginTop: 24,
    width: '50%',
  },
  mt24: {
    marginTop: 24,
  },
  submitText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  forgotPassword: {
    color: '#377BF5',
    marginTop: 24,
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
  button: {
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

  container: {
    flex: 1,
    backgroundColor: '#fff',
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
});
