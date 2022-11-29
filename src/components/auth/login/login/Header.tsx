import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Back from '../../../../../assets/svgs/Backicon.svg';

type LoginHeaderProps = {
  onPress: (val: any) => void;
};

const LoginHeader = ({onPress}: LoginHeaderProps) => {
  return (
    <>
      <View style={styles.icon}>
        <TouchableOpacity onPress={onPress}>
          <Back height={25} width={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.descHeader}>
        <Text style={styles.description}>Hey there! Welcome back.</Text>
      </View>
    </>
  );
};
export default LoginHeader;

const styles = StyleSheet.create({
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
  description: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
});
