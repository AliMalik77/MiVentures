import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Title from '../components/common/Title';
import Search from '../components/Search';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from '../components/CarousalCard';
const Entreprenuer = require('../../assets/Enterprenuer.png');
const CoffeeBar = require('../../assets/CoffeeBar.png');
import Card from '../components/Card';

const data = [
  {
    title: 'From School Teacher to Tech Entreprenuer',
    body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
    imgUrl: Entreprenuer,
  },
  {
    title: 'Coffee and Cocktail Bars are Here to Stay',
    body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
    imgUrl: CoffeeBar,
  },
  {
    title: 'From Worker to Rawalpindi Express',
    body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
    imgUrl: Entreprenuer,
  },
  {
    title: 'Coffee and Cocktail Bars are Here to Stay',
    body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
    imgUrl: CoffeeBar,
  },
  {
    title: 'From Worker to Rawalpindi Express',
    body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
    imgUrl: Entreprenuer,
  },
];

const startups = [
  {
    id: '1',
    title: 'Mint & Dry',
    topic: 'Speakeasy & Bar',
    fundingGoal: '$31000',
  },
  {
    id: '2',
    title: 'Kicks Box',
    topic: 'Speakeasy & Bar',
    fundingGoal: '$20000',
  },
  {
    id: '3',
    title: 'Nitro Scope',
    topic: 'Sneaker Exchange',
    fundingGoal: '$17000',
  },
];

const HomeScreen = () => {
  const isCarousel = React.useRef(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [search, setSearch] = useState();
  useEffect(() => {
    const filtered = startups.filter(startup => {
      return startup.title === searchQuery;
    });
    // if (filtered[0]) {
    // }
  }, [searchQuery]);

  return (
    <View
      style={{
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        marginTop: 50,
      }}>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FlatList
        data={searchQuery ? search : startups}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => {
          return (
            <>
              <View
                style={{
                  marginTop: 30,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '60%'}}>
                  <Title title={'Invest in a Startup'} />
                </View>
                <View style={styles.cardShadow}>
                  <View
                    style={{
                      borderRadius: 50,
                      borderColor: '#E5E5E5',
                      borderWidth: 2,
                      padding: 7,
                    }}>
                    <MaterialCommunityIcons
                      name="gift-outline"
                      size={25}
                      color="#377BF5"
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#EAEAEA',
                  width: '70%',
                  marginTop: 20,
                }}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 17, fontWeight: '700'}}>
                  Founder Stories
                </Text>
                <View>
                  <MaterialIcons
                    name="arrow-right-alt"
                    size={25}
                    color="#454545"
                  />
                </View>
              </View>
              <View style={{}}>
                <Carousel
                  layout="default"
                  slideStyle={{borderRadius: 20, overflow: 'hidden'}}
                  ref={isCarousel}
                  data={data}
                  renderItem={CarouselCardItem}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={ITEM_WIDTH}
                  useScrollView={true}
                  activeSlideAlignment="start"
                  contentContainerCustomStyle={{marginRight: 20}}
                  inactiveSlideOpacity={1}
                />
              </View>
              <View
                style={{
                  marginTop: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 10,
                }}>
                <Text style={{fontSize: 17, fontWeight: '700'}}>
                  All Startups
                </Text>

                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={25}
                  color="#454545"
                />
              </View>
            </>
          );
        }}
        renderItem={({item}) => {
          return <Card data={item} />;
        }}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
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
