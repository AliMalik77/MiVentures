import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Back from '../../../assets/svgs/Backicon.svg';

type HeaderProps = {
  onPress: (val: any) => void;
};

const Header = ({onPress}: HeaderProps) => {
  return (
    <View>
      <TouchableOpacity style={{marginTop: 50}} onPress={onPress}>
        <Back height={25} width={25} />
      </TouchableOpacity>

      <Text style={styles.title}>Investor Information</Text>
      <Text style={styles.infoDesc}>
        This info is required by U.S. Banking laws to verify your identity and
        is protected using{' '}
        <Text style={{color: '#377BF5'}}>bank-level security.</Text>
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: '800',
    color: 'black',
  },
  infoDesc: {fontSize: 16, fontWeight: '500', color: 'black'},
});
