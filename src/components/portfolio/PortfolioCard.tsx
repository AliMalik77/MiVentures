import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Option from '../../../assets/svgs/Option.svg';
import Infoicon from '../../../assets/svgs/Infoicon.svg';

type ProtfolioCardProps = {
  data: {
    desc: string;
    discount: string;
    id: string;
    invested: string;
    remainingTime: string;
    topic: string;
    valuationCap: string;
  };
};

const PortfolioCard = ({data}: ProtfolioCardProps) => {
  const {desc, discount, invested, remainingTime, topic, valuationCap} = data;
  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <Option width={20} />
      </View>

      <View style={styles.topicWrapper}>
        <Text style={[styles.text, {color: 'black'}]}>{topic}</Text>
        <Text style={[styles.text, {color: '#FFB400'}]}>Fundraising</Text>
      </View>
      <View style={styles.desc}>
        <Text>{desc} </Text>
        <Text>{remainingTime} days left</Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 40,
          marginBottom: 20,
          justifyContent: 'space-evenly',
        }}>
        <View>
          <View style={styles.infoIcon}>
            <Text style={styles.mr10}>Invested</Text>
            <Infoicon />
          </View>
          <Text>${invested}</Text>
        </View>
        <View>
          <View style={styles.infoIcon}>
            <Text style={{marginRight: 10}}>Valuation Cap</Text>
            <Infoicon />
          </View>
          <Text> ${valuationCap}</Text>
        </View>
        <View>
          <View style={styles.infoIcon}>
            <Text style={styles.mr10}>Discount</Text>
            <Infoicon />
          </View>
          <Text>{discount}%</Text>
        </View>
      </View>
    </View>
  );
};

export default PortfolioCard;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#EAEAEA',
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 20,
  },
  mr10: {marginRight: 10},
  option: {
    marginTop: 10,
    marginRight: 20,
    alignItems: 'flex-end',
  },

  infoIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '800',
    fontSize: 19,
  },
  topicWrapper: {
    width: '90%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  desc: {
    width: '90%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
