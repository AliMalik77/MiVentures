import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);

type CarouselCardItemProps = {
  item: {
    body: string;
    ImgUrl: any;
    title: string;
  };
  index: number;
};

const CarouselCardItem = ({item, index}: CarouselCardItemProps) => {
  const {ImgUrl, title} = item;

  return (
    <>
      <View style={styles.ImageContainer}>
        <ImgUrl />
      </View>

      <View style={styles.container} key={index}>
        <Text style={styles.text}>{title}</Text>

        <Text style={styles.desc}>Homeskool</Text>
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderRadius: 8,
    marginLeft: 20,
    justifyContent: 'flex-end',
    width: '80%',
    height: '160@vs',
  },
  text: {fontWeight: '800', fontSize: 20, color: '#fff'},
  ImageContainer: {position: 'absolute', top: 0, left: 0, right: 0, bottom: 0},
  image: {
    width: ITEM_WIDTH,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  desc: {
    fontWeight: '500',
    fontSize: 13,
    color: '#fff',
    marginBottom: 10,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
