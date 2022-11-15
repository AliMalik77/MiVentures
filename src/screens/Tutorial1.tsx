import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import PaginationDot from 'react-native-animated-pagination-dot';
import Tutorial from '../components/Tutorial';

const Tutorial1 = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity></TouchableOpacity>
        </View>
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
      </View>

      {currentPage === 0 ? (
        <Tutorial
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          imageUri={require('../../assets/Rocket.png')}
          title={' Find a startup and invest $25 or more'}
          description={` You are investing in a startup in exchange for future equity, betterknown as a `}
          btntxt={'Next'}
        />
      ) : currentPage === 1 ? (
        <Tutorial
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          imageUri={require('../../assets/Clock.png')}
          title={'Invest in a business before time runs out'}
          description={`Each business has 120 days to raise their funding goal or each investor gets a full refund.`}
          btntxt={'Next'}
        />
      ) : (
        <Tutorial
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          imageUri={require('../../assets/Cat.png')}
          title={'Becoming a startup investor'}
          description={`  You must be at least 18 years old and have a U.S. tax ID. Be aware that investing has risks so only invest an amount you can afford to lose.`}
          btntxt={'You Made it!'}
        />
      )}

      <View style={styles.footer}>
        <Text
          style={{
            color: '#909090',
            fontWeight: '500',
            fontSize: 11,
            textAlign: 'center',
          }}>
          Disclaimer: All investment opportunities on Miventure are offered
          under <Text style={styles.highlights}>Regulation Crowdfunding</Text>{' '}
          through Miventure Inc., a Funding Portal registered with the SEC and a
          member of FINRA.
        </Text>
      </View>
    </View>
  );
};

export default Tutorial1;

const styles = StyleSheet.create({
  text2: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: '500',
    letterSpacing: 0.25,
    color: '#fff',
  },
  highlights: {
    color: '#377BF5',
  },
  button3: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: '#377BF5',
    width: '90%',
    marginTop: 20,
  },

  icon: {
    padding: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  descHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '25%',
    width: '50%',
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    margin: 10,
  },
  middle: {
    flex: 2,
    alignItems: 'center',
    marginTop: 50,
  },
  footer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  description: {
    color: '#000000',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
});
