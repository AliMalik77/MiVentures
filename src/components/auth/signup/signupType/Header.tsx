import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Close from '../../../../../assets/svgs/Exiticon.svg';
import Background2 from '../../../../../assets/svgs/Background2.svg';

type HeaderProps = {
  onPress: (val: any) => void;
};

const Header = ({onPress}: HeaderProps) => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={onPress}>
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
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  background2: {alignItems: 'center', width: '100%', height: '100%'},
  icon: {
    padding: 30,
    marginTop: 30,
  },
  header: {
    flex: 1,
  },
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
  center: {
    flex: 2,
    marginRight: 30,
    marginLeft: 30,
  },
});
