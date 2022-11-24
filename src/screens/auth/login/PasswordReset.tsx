import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Back from '../../../../assets/svgs/Backicon.svg';
import {NavigationProps} from '../../../types/navigation';

const PasswordReset = ({navigation}: NavigationProps) => {
  const [error, setError] = useState();

  const handleBack = () => {
    navigation.navigate('Login');
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
          <Text style={styles.description}>Password Reset</Text>
        </View>

        <View style={{width: '100%', alignItems: 'center'}}>
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

const styles = StyleSheet.create({
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

  description: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
});
