import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Gifticon from '../../../assets/svgs/Gift.svg';
import Title from '../common/Title';

const Header = () => {
  return (
    <>
      <View style={{width: '60%'}}>
        <Title title={'Invest in a Startup'} />
      </View>
      <View style={styles.cardShadow}>
        <View style={styles.giftWrapper}>
          <TouchableOpacity>
            <Gifticon height={25} width={25} color={'#377BF5'} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  giftWrapper: {
    borderRadius: 50,
    borderColor: '#E5E5E5',
    borderWidth: 2,
    padding: 7,
  },
  cardShadow: {
    borderRadius: 50,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 2.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
});
