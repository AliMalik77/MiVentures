import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  TextInput,
  Animated,
  Image,
} from 'react-native';
import {LiquidLike} from 'react-native-animated-pagination-dots';
// import Carousel, {Pagination} from 'react-native-snap-carousel';
// import PaginationDot from 'react-native-animated-pagination-dot';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PaginationDot from 'react-native-animated-pagination-dot';

// import Dots from 'react-native-dots-pagination';

// type Tutorial1ScreenProps = {
//   navigation: any;
//   userData: any;
//   setUserData: (val: any) => void;
// };

const Tutorial1 = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity
          //   onPress={() => handleBack()}
          >
            {/* <MaterialIcons name="arrow-back-ios" size={25} color="black" /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.descHeader}>
          <Text style={styles.description}>How it works</Text>
        </View>
        {/* <View></View> */}

        <View style={{alignItems: 'center'}}>
          <PaginationDot
            activeDotColor={'#377BF5'}
            curPage={currentPage}
            maxPage={3}
          />
        </View>
      </View>

      {currentPage === 0 ? (
        <View style={styles.middle}>
          <View>
            <Image
              source={require('../../assets/Rocket.png')}
              style={{alignItems: 'center', width: 200, height: 200}}
              resizeMode="contain"></Image>
          </View>
          <View style={{marginTop: 30, width: '50%'}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 20,
                textAlign: 'center',
                color: 'black',
              }}>
              Find a startup and invest $25 or more
            </Text>
          </View>
          <View style={{width: '80%', marginTop: 20}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '400',
                color: 'black',
                lineHeight: 20,
              }}>
              You are investing in a startup in exchange for future equity,
              better known as a{' '}
              <Text style={styles.highlights}>Crowd SAFE</Text>.
            </Text>
          </View>
          <Pressable
            style={styles.button3}
            onPress={() => {
              setCurrentPage(1);
            }}>
            <Text style={styles.text2}>Next</Text>
          </Pressable>
        </View>
      ) : currentPage === 1 ? (
        <View style={styles.middle}>
          <View>
            <Image
              source={require('../../assets/Clock.png')}
              style={{alignItems: 'center', width: 200, height: 200}}
              resizeMode="contain"></Image>
          </View>
          <View style={{marginTop: 30, width: '60%'}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 20,
                textAlign: 'center',
                color: 'black',
              }}>
              Invest in a business before time runs out
            </Text>
          </View>
          <View style={{width: '80%', marginTop: 20}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '400',
                color: 'black',
                lineHeight: 20,
              }}>
              Each business has 120 days to raise their funding goal or each
              investor gets a full refund.
            </Text>
          </View>
          <Pressable
            style={styles.button3}
            onPress={() => {
              setCurrentPage(2);
            }}>
            <Text style={styles.text2}>Next</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.middle}>
          <View>
            <Image
              source={require('../../assets/Cat.png')}
              style={{alignItems: 'center', width: 200, height: 200}}
              resizeMode="contain"></Image>
          </View>
          <View style={{marginTop: 30, width: '40%'}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 20,
                textAlign: 'center',
                color: 'black',
              }}>
              Becoming a startup investor
            </Text>
          </View>
          <View style={{width: '80%', marginTop: 20}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '400',
                color: 'black',
              }}>
              You must be at least 18 years old and have a U.S. tax ID. Be aware
              that investing has risks so only invest an amount you can afford
              to lose.
            </Text>
          </View>
          <Pressable style={styles.button3}>
            <Text style={styles.text2}>Next</Text>
          </Pressable>
        </View>
      )}

      {/* screen2 */}

      {/* screen3 */}

      <View style={styles.footer}>
        {/* <View> */}
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
        {/* </View> */}
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
  //   image: {
  //     width: 125,
  //     height: 125,
  //   },
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
    // backgroundColor: 'red',
  },

  description: {
    color: '#000000',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
});
