import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../../components/common/Title';
import Search from '../../components/common/Search';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from '../../components/home/CarousalCard';
import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';

import Card from '../../components/home/Card';
import Gift from '../../../assets/svgs/Gift.svg';
import Arrowright from '../../../assets/svgs/Arrowright.svg';
import Dropdown from '../../../assets/svgs/Dropdown.svg';
import {carouselData, startups, testData} from '../../utils/home/Home';
import {NavigationProp} from '@react-navigation/native';

const HomeScreen = ({
  navigation,
}: {
  navigation: NavigationProp<{
    postal: {};
  }>;
}) => {
  const carousalReference = React.useRef(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [search, setSearch] = useState([
    {id: '', fundingGoal: '', title: '', topic: ''},
  ]);
  useEffect(() => {
    const filtered = startups.filter(startup => {
      return startup.title === searchQuery;
    });

    if (filtered.length > 0) {
      setSearch([filtered[0]]);
    }
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FlatList
        data={searchQuery ? search : startups}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => {
          return <></>;
        }}
        ListHeaderComponent={() => {
          return (
            <>
              <View style={styles.headerContainer}>
                <View style={{width: '60%'}}>
                  <Title title={'Invest in a Startup'} />
                </View>
                <View style={styles.cardShadow}>
                  <View style={styles.giftWrapper}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('postal', {
                          data: testData,
                        });
                      }}>
                      <Gift height={25} width={25} color={'#377BF5'} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.divider} />
              <View style={styles.founder}>
                <Text style={styles.text}>Founder Stories</Text>
                <View>
                  <Arrowright width={25} />
                </View>
              </View>
              <View>
                <Carousel
                  layout="default"
                  slideStyle={styles.carousal}
                  ref={carousalReference}
                  data={carouselData}
                  renderItem={CarouselCardItem}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={ITEM_WIDTH}
                  useScrollView={true}
                  activeSlideAlignment="start"
                  contentContainerCustomStyle={{marginRight: 20}}
                  inactiveSlideOpacity={1}
                />
              </View>
              <View style={styles.startup}>
                <Text style={styles.text}>All Startups</Text>

                <Dropdown width={25} />
              </View>
            </>
          );
        }}
        extraData={() => {
          return <></>;
        }}
        renderItem={({item}) => {
          return <Card data={item} />;
        }}
        // stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default HomeScreen;

const styles = ScaledSheet.create({
  divider: {
    borderWidth: 1,
    borderColor: '#EAEAEA',
    width: '70%',
    marginTop: 20,
  },
  carousal: {borderRadius: 20, overflow: 'hidden'},
  text: {fontSize: '14@s', fontWeight: '700'},
  startup: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  founder: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  giftWrapper: {
    borderRadius: 50,
    borderColor: '#E5E5E5',
    borderWidth: 2,
    padding: 7,
  },
  headerContainer: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
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
