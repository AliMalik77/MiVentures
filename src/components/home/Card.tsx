import React from 'react';
import {Text, View} from 'react-native';
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
  return (
    <>
      <View
        style={{
          alignSelf: 'center',
          borderWidth: 2,
          borderRadius: 12,
          borderColor: '#FFFFFF',
          backgroundColor: '#fff',
          width: '100%',
          marginBottom: 20,
        }}>
        <View>
          <Shoes
            style={{borderRadius: 12, borderTopRightRadius: 12}}
            preserveAspectRatio="none"
          />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 20, fontWeight: '800', color: 'black'}}>
              {data.title}
            </Text>
            <Text style={{fontSize: 13, fontWeight: '400'}}>{data.topic}</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, fontWeight: '800', color: 'black'}}>
              {data.fundingGoal}
            </Text>
            <Text>Funding Goal</Text>
          </View>
        </View>
        <ProgressBar
          progress={0.5}
          color={'#377BF5'}
          style={{width: '80%', alignSelf: 'center', marginBottom: 20}}
        />
      </View>
    </>
  );
};

export default Card;
