import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ImageBackground,
} from 'react-native';
import Button from '../../components/common/Button';
import {NavigationProps} from '../../types/navigation';

const Auth = ({navigation}: NavigationProps) => {
  const handleClick = (data: any) => {
    if (data === 'login') {
      navigation.navigate('LoginType');
    }
    if (data === 'signup') {
      navigation.navigate('SignupType');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../../assets/background.png')}
        resizeMode="contain">
        <View style={styles.mainContent}>
          <Image
            source={require('../../../assets/Headphone.png')}
            style={styles.headphone}
            resizeMode="contain"></Image>

          <View>
            <Image
              source={require('../../../assets/LogoBlue.png')}
              style={styles.image}
              resizeMode="contain"></Image>
          </View>

          <View style={styles.headerTextCont}>
            <Text style={styles.headerText}>
              Easily invest in your favourite startups
            </Text>
          </View>
        </View>
        <View style={styles.center}>
          <Image
            source={require('../../../assets/cycle.png')}
            style={styles.cycle}
            resizeMode="contain"></Image>
        </View>

        <View style={styles.footer}>
          <Button
            text="Signup"
            btnWidth="95%"
            color="#377BF5"
            textColor="white"
            bordercolor="#377BF5"
            border={0}
            handler={() => handleClick('signup')}
          />
          <Button
            text="Login"
            btnWidth="95%"
            color="#fff"
            textColor="#377BF5"
            bordercolor="#377BF5"
            border={2}
            handler={() => handleClick('login')}
          />

          <View>
            <Text>
              By viewing the{' '}
              <Text style={styles.highlights}>Offerings here</Text> , I accept
              Miventure’s{' '}
              <Text style={styles.highlights}>Terms of Service</Text> and
              <Text style={styles.highlights}>Privacy Policy.</Text>
            </Text>
          </View>
          <View style={styles.ball}>
            <Image
              source={require('../../../assets/Circle.png')}
              resizeMode="contain"></Image>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  ball: {
    position: 'absolute',
    right: 0,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cycle: {
    width: 150,
    height: 150,
    marginLeft: 50,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  headphone: {
    width: 100,
    height: 100,
    alignItems: 'center',
    marginLeft: -250,
    marginTop: 10,
  },
  highlights: {
    color: '#377BF5',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: '#377BF5',
    width: '95%',
    marginBottom: 10,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: '#fff',
    width: '95%',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#377BF5',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: '700',
    letterSpacing: 0.25,
    color: 'white',
  },
  text2: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#377BF5',
  },
  image: {
    width: 250,
    height: 300,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    color: '#377BF5',
    fontSize: 20,
    textAlign: 'center',
  },
  headerTextCont: {
    width: '65%',
    alignItems: 'center',
  },

  mainContent: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
