import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/common/Button';
import Circle from '../../../assets/svgs/Circle.svg';
import Headphone from '../../../assets/svgs/Headphone.svg';
import Logo from '../../../assets/svgs/Logo.svg';
import Background from '../../../assets/svgs/Background.svg';
import Cycle from '../../../assets/svgs/Cycle.svg';
import {NavigationProp} from '@react-navigation/native';

const Auth = ({
  navigation,
}: {
  navigation: NavigationProp<{LoginType: undefined; SignupType: undefined}>;
}) => {
  const handleClick = (data: any) => {
    if (data === 'login') {
      console.log('asdsasadas');

      navigation.navigate('LoginType');
    }
    if (data === 'signup') {
      navigation.navigate('SignupType');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Background />
      </View>

      <View style={styles.mainContent}>
        <Headphone style={styles.headphone} />
        <View style={styles.logo}>
          <Logo style={styles.image} />
        </View>

        <View style={styles.headerTextCont}>
          <Text style={styles.headerText}>
            Easily invest in your favourite startups
          </Text>
        </View>
      </View>
      <View style={(styles.center, {width: '100%'})}>
        <Cycle style={styles.cycle} />
      </View>

      <View style={styles.footer}>
        <Button
          text="Signup"
          color="#377BF5"
          textColor="white"
          bordercolor="#377BF5"
          border={0}
          onPress={() => handleClick('signup')}
        />
        <Button
          text="Login"
          color="#fff"
          textColor="#377BF5"
          bordercolor="#377BF5"
          border={2}
          onPress={() => handleClick('login')}
        />

        <View style={styles.descriptionText}>
          <Text>
            By viewing the <Text style={styles.highlights}>Offerings here</Text>{' '}
            , I accept Miventure’s{' '}
            <Text style={styles.highlights}>Terms of Service</Text> and
            <Text style={styles.highlights}>Privacy Policy.</Text>
          </Text>
        </View>
        <View style={styles.ball}>
          <Circle style={styles.circle} />
        </View>
      </View>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  circle: {
    zIndex: -1,
  },
  background: {position: 'absolute', top: 0, left: 0, right: 0, bottom: 0},
  logo: {
    marginBottom: 20,
    marginTop: 20,
  },
  descriptionText: {
    padding: 20,
    paddingTop: 0,
  },
  ball: {
    position: 'absolute',
    right: 0,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
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
  image: {
    width: 250,
    height: 300,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
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
