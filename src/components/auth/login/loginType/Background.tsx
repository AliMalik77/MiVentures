import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Close from '../../../../../assets/svgs/Exiticon.svg';
import Background2 from '../../../../../assets/svgs/Background2.svg';

type BackgroundProps = {
  onPress: (val: any) => void;
};

const Background = ({onPress}: BackgroundProps) => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={onPress}>
            <Close height={25} width={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.descHeader}>
          <Text style={styles.description}>How do you want to log in?</Text>
        </View>
      </View>
      <View style={styles.center}>
        <Background2 style={styles.background2} />
      </View>
    </>
  );
};
export default Background;

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  center: {
    flex: 2,
    marginRight: 30,
    marginLeft: 30,
  },
  icon: {
    padding: 30,
    marginTop: 30,
  },
  background2: {alignItems: 'center', width: '100%', height: '100%'},

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
});
