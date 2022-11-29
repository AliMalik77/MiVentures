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
  return (
    <View style={styles.middle}>
      <View>
        <ImageUri />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.descWrapper}>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCurrentPage(currentPage + 1);
        }}>
        <Text style={styles.btntext}>{btntxt}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  btntext: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: '500',
    letterSpacing: 0.25,
    color: '#fff',
  },
  titleWrapper: {marginTop: 30, width: '50%'},
  descWrapper: {width: '80%', marginTop: 20},
  description: {
    textAlign: 'center',
    fontWeight: '400',
    color: 'black',
    lineHeight: 20,
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
  title: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
});
