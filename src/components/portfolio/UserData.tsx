import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Verify from '../../../assets/svgs/Verify.svg';

const UserData = () => {
  return (
    <View style={styles.userInfo}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

      <Text style={styles.userName}>Jason Summers</Text>
      <View style={styles.verificationWrapper}>
        <Verify width={50} height={15} fill="#377BF5" />
        <Text style={styles.verifiedText}>Verified Investor</Text>
      </View>
    </View>
  );
};

export default UserData;

const styles = ScaledSheet.create({
  userName: {
    fontWeight: '800',
    fontSize: 24,
    color: 'black',
    marginTop: 30,
  },
  userInfo: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  verifiedText: {color: '#909090', fontWeight: '400'},
  tinyLogo: {
    width: '70@s',
    height: '70@vs',
    borderRadius: 50,
  },
  verificationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
