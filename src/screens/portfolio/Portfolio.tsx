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

const data = [
  {
    id: '1',
    topic: 'Homeskool',
    desc: 'Ed Tech',
    remainingTime: '99',
    invested: '50',
    valuationCap: '800000',
    discount: '50',
  },
  {
    id: '2',
    topic: 'Subliminal',
    desc: 'AR & VR',
    remainingTime: '15',
    invested: '220',
    valuationCap: '33000',
    discount: '80',
  },
  {
    id: '3',
    topic: 'Homeskool',
    desc: 'Ed Tech',
    remainingTime: '112',
    invested: '50',
    valuationCap: '7500',
    discount: '750',
  },
  {
    id: '4',
    topic: 'Subliminal',
    desc: 'AR & VR',
    remainingTime: '15',
    invested: '220',
    valuationCap: '33000',
    discount: '80',
  },
  {
    id: '5',
    topic: 'Homeskool',
    desc: 'Ed Tech',
    remainingTime: '112',
    invested: '50',
    valuationCap: '7500',
    discount: '750',
  },
];

type PortfolioScreenProps = {
  route: any;
};

const PortfolioScreen = ({route}: PortfolioScreenProps) => {
  console.log('navigation data received is ', route.params);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => {
          return (
            <>
              <View
                style={{
                  marginTop: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 30,
                }}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />

                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 24,
                    color: 'black',
                    marginTop: 30,
                  }}>
                  Jason Summers
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Verify width={50} height={15} fill="black" />
                  <Text style={{color: '#909090', fontWeight: '400'}}>
                    Verified Investor
                  </Text>
                </View>
              </View>
              <View style={{width: '90%', alignSelf: 'center'}}>
                <View
                  style={{
                    marginTop: 30,
                    borderWidth: 1,
                    borderColor: '#EAEAEA',
                    width: '100%',
                    alignSelf: 'center',
                  }}
                />
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: '700',
                      fontSize: 14,
                      color: 'black',
                      marginTop: 15,
                      marginBottom: 20,
                    }}>
                    My Investments (2)
                  </Text>
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
  tinyLogo: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
});
