import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Search from '../../components/common/Search';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from '../../components/home/CarousalCard';
import {ScaledSheet} from 'react-native-size-matters';

import Card from '../../components/home/Card';
import Arrowright from '../../../assets/svgs/Arrowright.svg';
import Dropdown from '../../../assets/svgs/Dropdown.svg';
import {carouselData, startups, testData} from '../../utils/home/Home';
import {NavigationProp} from '@react-navigation/native';

import Header from '../../components/home/Header';

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
        ListHeaderComponent={() => {
          return (
            <>
              <View style={styles.headerContainer}>
                <Header />
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
  text: {fontSize: '15@s', fontWeight: '700'},
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
});
