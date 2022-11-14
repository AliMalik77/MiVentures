import React from 'react';
import {StyleSheet, Text} from 'react-native';

type TitleProps = {
  title: string;
};

const Title = ({title}: TitleProps) => {
  return <Text style={styles.text}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: 'black',
    fontWeight: '800',
  },
});
