import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);

type CarouselCardItemProps = {
  item: any;
  index: any;
};

const CarouselCardItem = ({item, index}: CarouselCardItemProps) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={item.imgUrl}
      style={{borderRadius: 8}}>
      <View style={styles.container} key={index}>
        <Text style={{fontWeight: '800', fontSize: 20, color: '#fff'}}>
          {item.title}
        </Text>

        <Text
          style={{
            fontWeight: '500',
            fontSize: 13,
            color: '#fff',
            marginBottom: 10,
          }}>
          Homeskool{' '}
        </Text>
        {/* <Text style={styles.body}>{item.body}</Text> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    borderRadius: 8,
    marginLeft: 20,
    // alignItems: 'center',
    justifyContent: 'flex-end',
    width: '80%',
    // width: ITEM_WIDTH,
    // paddingBottom: 40,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,
    // marginRight: 30,
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    height: 200,
  },
  image: {
    width: ITEM_WIDTH,
    // height: 300,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,

    paddingRight: 20,
  },
});

export default CarouselCardItem;
