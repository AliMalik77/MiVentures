import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import Shoes from '../../../assets/svgs/Shoes.svg';

type CardProps = {
  data: {
    fundingGoal: string;
    id: string;
    title: string;
    topic: string;
  };
};

const Card = ({data}: CardProps) => {
  const {title, topic, fundingGoal} = data;

  return (
    <View style={styles.container}>
      <View>
        <Shoes style={styles.shoes} preserveAspectRatio="none" />
      </View>

      <View style={styles.dataContainer}>
        <View>
          <Text style={styles.headings}>{title}</Text>
          <Text style={styles.heading2}>{topic}</Text>
        </View>
        <View>
          <Text style={styles.headings}>{fundingGoal}</Text>
          <Text>Funding Goal</Text>
        </View>
      </View>
      <ProgressBar progress={0.5} color={'#377BF5'} style={styles.progress} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#FFFFFF',
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 20,
  },
  progress: {width: '80%', alignSelf: 'center', marginBottom: 20},
  headings: {fontSize: 20, fontWeight: '800', color: 'black'},
  heading2: {fontSize: 13, fontWeight: '400'},
  text: {
    fontSize: 28,
    color: 'black',
    fontWeight: '800',
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  shoes: {borderRadius: 12, borderTopRightRadius: 12},
});
