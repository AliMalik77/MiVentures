import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PortfolioCard from '../../components/portfolio/PortfolioCard';
import UserData from '../../components/portfolio/UserData';
import {portfolioData} from '../../utils/portfolio/Portfolio';
import {ScaledSheet} from 'react-native-size-matters';
type PortfolioScreenProps = {
  route: {
    key: string;
    name: string;
  };
};

const PortfolioScreen = ({route}: PortfolioScreenProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={portfolioData}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => {
          return (
            <>
              <UserData />
              <View style={styles.investments}>
                <View style={styles.divider} />
                <TouchableOpacity>
                  <Text style={styles.investorHeading}>My Investments (2)</Text>
                </TouchableOpacity>
              </View>
            </>
          );
        }}
        renderItem={({item}) => {
          return <PortfolioCard data={item} />;
        }}></FlatList>
    </View>
  );
};

export default PortfolioScreen;

const styles = ScaledSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},

  investorHeading: {
    fontWeight: '700',
    fontSize: '14@s',
    color: 'black',
    marginTop: 15,
    marginBottom: 20,
  },
  investments: {width: '90%', alignSelf: 'center'},
  divider: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    width: '100%',
    alignSelf: 'center',
  },
});
