import React from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type TutorialProps = {
  currentPage: number;
  setCurrentPage: (val: any) => void;
  imageUri: any;
  title: string;
  description: string;
  btntxt: string;
};

const Tutorial = ({
  currentPage,
  setCurrentPage,
  imageUri,
  title,
  description,
  btntxt,
}: TutorialProps) => {
  //   console.log('image is ', imageUri);

  return (
    <View style={styles.middle}>
      <View>
        <Image
          source={imageUri}
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
          {title}
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
          {description}
          {/* You are investing in a startup in exchange for future equity, better
          known as a <Text style={styles.highlights}>Crowd SAFE</Text>. */}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button3}
        onPress={() => {
          setCurrentPage(currentPage + 1);
        }}>
        <Text style={styles.text2}>{btntxt}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tutorial;

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
  middle: {
    flex: 2,
    alignItems: 'center',
    marginTop: 50,
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
});
