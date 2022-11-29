import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Verify from '../../../assets/svgs/Verify.svg';

import PortfolioCard from '../../components/portfolio/PortfolioCard';
import {portfolioData} from '../../utils/portfolio/Portfolio';

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
              <View style={styles.userInfo}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />

                <Text style={styles.userName}>Jason Summers</Text>
                <View style={styles.verificationWrapper}>
                  <Verify width={50} height={15} fill="#377BF5" />
                  <Text style={styles.verifiedText}>Verified Investor</Text>
                </View>
              </View>
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

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  userName: {
    fontWeight: '800',
    fontSize: 24,
    color: 'black',
    marginTop: 30,
  },
  userInfo: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  verificationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  investorHeading: {
    fontWeight: '700',
    fontSize: 14,
    color: 'black',
    marginTop: 15,
    marginBottom: 20,
  },
  investments: {width: '90%', alignSelf: 'center'},
  verifiedText: {color: '#909090', fontWeight: '400'},
  divider: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    width: '100%',
    alignSelf: 'center',
  },
  tinyLogo: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
});
