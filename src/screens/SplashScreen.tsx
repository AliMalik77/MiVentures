import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type SplashScreenProps = {
  navigation: any;
};

const SplashScreen = ({navigation}: SplashScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Shopify.png')}
          style={{width: 100, height: 100}}
          resizeMode="contain"></Image>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Stay connected with everyone!</Text>
        <Text style={styles.text}>SignIn with Account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialCommunityIcons
                style={styles.textSign}
                name="arrow-right"
                size={30}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  logo: {
    width: 40,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'gray',
    margin: 5,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
