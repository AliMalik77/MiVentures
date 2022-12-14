import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationProps} from '../../types/navigation';
import SplashLogo from '../../../assets/svgs/Splash.svg';

const Splash = ({navigation}: NavigationProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SplashLogo style={styles.image} />
        <Text style={styles.name}>miventure</Text>
        <Text style={styles.description}>Easily invest in startups</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 125,
  },
  container: {
    flex: 1,
    backgroundColor: '#377BF5',
  },
  logo: {
    width: 40,
  },
  header: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: 'white',
    fontSize: 25,
  },
  footerDesc: {color: 'white', fontSize: 30, fontWeight: '700'},
});
