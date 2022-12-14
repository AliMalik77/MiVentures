import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../../components/common/Title';
import Search from '../../components/common/Search';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from '../../components/home/CarousalCard';

import Card from '../../components/home/Card';
import Gift from '../../../assets/svgs/Gift.svg';
import Arrowright from '../../../assets/svgs/Arrowright.svg';
import Dropdown from '../../../assets/svgs/Dropdown.svg';
import {NavigationProps} from '../../types/navigation';
import {carouselData, startups, testData} from '../../utils/home/Home';

const HomeScreen = ({navigation}: NavigationProps) => {
  const isCarousel = React.useRef(null);
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
                  marginBottom: 10,
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
        showsVerticalScrollIndicator={false}
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
