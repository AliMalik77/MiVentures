import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type TutorialProps = {
  currentPage: number;
  setCurrentPage: (val: number) => void;
  ImageUri: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  btntxt: string;
};

const Tutorial = ({
  currentPage,
  setCurrentPage,
  ImageUri,
  title,
  description,
  btntxt,
}: TutorialProps) => {
  console.log(':pagination result', ImageUri);

  return (
    <View style={styles.middle}>
      <View>
        <ImageUri />
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
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
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

  middle: {
    flex: 2,
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
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
