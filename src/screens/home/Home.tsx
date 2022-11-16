import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../../components/common/Title';
import Search from '../../components/common/Search';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from '../../components/home/CarousalCard';
const Entreprenuer = require('../../../assets/Enterprenuer.png');
const CoffeeBar = require('../../../assets/CoffeeBar.png');
import Card from '../../components/home/Card';
import Gift from '../../../assets/svgs/Gift.svg';
import Arrowright from '../../../assets/svgs/Arrowright.svg';
import Dropdown from '../../../assets/svgs/Dropdown.svg';

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

const testData = [
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
];

type HomeScreenProps = {
  navigation: any;
};

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const isCarousel = React.useRef(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [search, setSearch] = useState();
  useEffect(() => {
    const filtered = startups.filter(startup => {
      return startup.title === searchQuery;
    });
    console.log('filtered: data getting is ======= ', filtered);

    if (filtered.length > 0) {
      console.log('filtering again =====', filtered);
    }
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
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 17, fontWeight: '700'}}>
                  Founder Stories
                </Text>
                <View>
                  <Arrowright width={25} />
                </View>
              </View>
              <View>
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
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 17, fontWeight: '700'}}>
                  All Startups
                </Text>

                <Dropdown width={25} />
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