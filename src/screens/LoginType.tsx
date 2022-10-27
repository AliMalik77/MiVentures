import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginType = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="close" size={30} color="black" />
        </View>
        <View style={styles.descHeader}>
          <Text style={styles.description}>How do you want to log in?</Text>
        </View>
      </View>
      <View style={styles.center}>
        <Image
          source={require('../../assets/background2.png')}
          style={{alignItems: 'center', width: '100%', height: '100%'}}
          resizeMode="contain"></Image>
        {/* <View style={{alignItems: 'flex-end'}}>
          <Image
            source={require('../../assets/Controller.png')}
            style={{}}
            resizeMode="contain"></Image>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/man.png')}
            //   style={styles.image}
            resizeMode="contain"></Image>
        </View>
        <View style={{alignItems: 'flex-start'}}>
          <Image
            source={require('../../assets/Storm.png')}
            //   style={styles.image}
            resizeMode="contain"></Image>
        </View> */}
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.button}>
          <MaterialCommunityIcons name="apple" size={25} color="white" />
          <Text style={styles.text}>Log in with Apple</Text>
        </Pressable>
        <Pressable style={styles.button2}>
          <MaterialCommunityIcons name="google" size={25} color="white" />
          <Text style={styles.text}>Log in with Google</Text>
        </Pressable>
        <Pressable style={styles.button3}>
          <MaterialCommunityIcons name="email" size={25} color="black" />
          <Text style={styles.text}>Log in with Email</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginType;

const styles = StyleSheet.create({
  descHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '25%',
    width: '50%',
  },
  description: {
    color: 'black',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  //   image: {
  //     width: 125,
  //     height: 125,
  //   },
  icon: {
    padding: 30,
    marginTop: 30,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: 'black',
    width: '90%',
    marginBottom: 10,
  },
  button2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: '#EA4335',
    width: '90%',
    marginBottom: 10,
  },
  button3: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: '#377BF5',
    width: '90%',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    // lineHeight: 21,
    // fontWeight: '500',
    // letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    flex: 1,
    // alignItems: 'center',
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
    alignItems: 'center',
  },
  //   logo: {
  //     width: 40,
  //   },
  //   header: {
  //     flex: 3,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   footer: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   name: {
  //     fontWeight: '800',
  //     color: 'white',
  //     fontSize: 60,
  //   },
  //   description: {
  //     color: 'white',
  //     fontSize: 25,
  //   },
  //   footerDesc: {color: 'white', fontSize: 30, fontWeight: '700'},
});
