import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Pagination from '../../components/intro/Pagination';
import Rocket from '../../../assets/svgs/Rocket.svg';
import Clock from '../../../assets/svgs/Clock.svg';
import Cat from '../../../assets/svgs/Cat.svg';
import Footer from '../../components/intro/Footer';
import Header from '../../components/intro/Header';

const Intro = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header currentPage={currentPage} />
      </View>
      {currentPage === 0 ? (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          ImageUri={Rocket}
          title={' Find a startup and invest $25 or more'}
          description={` You are investing in a startup in exchange for future equity, betterknown as a `}
          btntxt={'Next'}
        />
      ) : currentPage === 1 ? (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          ImageUri={Clock}
          title={'Invest in a business before time runs out'}
          description={`Each business has 120 days to raise their funding goal or each investor gets a full refund.`}
          btntxt={'Next'}
        />
      ) : (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          ImageUri={Cat}
          title={'Becoming a startup investor'}
          description={`  You must be at least 18 years old and have a U.S. tax ID. Be aware that investing has risks so only invest an amount you can afford to lose.`}
          btntxt={'You Made it!'}
        />
      )}
      <Footer />
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
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

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 100,
  },
  middle: {
    flex: 2,
    alignItems: 'center',
    marginTop: 50,
  },

  description: {
    color: '#000000',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
});
