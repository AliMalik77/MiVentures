import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        Disclaimer: All investment opportunities on Miventure are offered under{' '}
        <Text style={styles.highlights}>Regulation Crowdfunding</Text> through
        Miventure Inc., a Funding Portal registered with the SEC and a member of
        FINRA.
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  text: {
    color: '#909090',
    fontWeight: '500',
    fontSize: 11,
    textAlign: 'center',
  },
  highlights: {
    color: '#377BF5',
  },
});
