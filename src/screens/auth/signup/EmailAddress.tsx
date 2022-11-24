import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Back from '../../../../assets/svgs/Backicon.svg';
import Button from '../../../components/common/Button';

type EmailScreenProps = {
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
  userData: {email: string; password: string};
  setUserData: (val: {email: string; password: string}) => void;
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={handleBack}>
            <Back height={25} width={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.descHeader}>
          <Text style={styles.description}>What’s your email address?</Text>
        </View>

        <View style={{width: '100%', alignItems: 'center'}}>
          <TextInput
            textContentType="emailAddress"
            placeholder="Email Address"
            style={styles.fieldContainer}
            onChangeText={email =>
              setUserData({...userData, email: email})
            }></TextInput>

          <View style={{marginTop: 20, width: '100%', alignItems: 'center'}}>
            <Button
              text="Next"
              btnWidth="90%"
              color="#377BF5"
              textColor="white"
              bordercolor="#377BF5"
              border={0}
              handler={() => handleNext()}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default EmailAddress;

const styles = StyleSheet.create({
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
  description: {
    color: '#000000',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
});
