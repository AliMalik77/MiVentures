import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PaginationDot from 'react-native-animated-pagination-dot';

type HeaderProps = {
  currentPage: number;
};

const Header = ({currentPage}: HeaderProps) => {
  return (
    <>
      <View style={styles.descHeader}>
        <Text style={styles.description}>How it works</Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <PaginationDot
          activeDotColor={'#377BF5'}
          curPage={currentPage}
          maxPage={3}
        />
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  descHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '25%',
    width: '50%',
    marginBottom: 30,
  },
  header: {
    flex: 1,
    margin: 10,
  },
  description: {
    color: '#000000',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
});
