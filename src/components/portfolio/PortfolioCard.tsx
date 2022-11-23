import React from 'react';
import {Text, View} from 'react-native';
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
  return (
    <View
      style={{
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#EAEAEA',
        backgroundColor: '#fff',
        width: '100%',
        marginBottom: 20,
      }}>
      <View
        style={{
          marginTop: 10,
          marginRight: 20,
          alignItems: 'flex-end',
        }}>
        <Option width={20} />
      </View>

      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight: '800', fontSize: 19, color: 'black'}}>
          {data.topic}
        </Text>
        <Text style={{fontWeight: '800', fontSize: 19, color: '#FFB400'}}>
          Fundraising
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>{data.desc} </Text>
        <Text>{data.remainingTime} days left</Text>
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{marginRight: 10}}>Invested</Text>
            <Infoicon />
          </View>
          <Text>${data.invested}</Text>
        </View>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{marginRight: 10}}>Valuation Cap</Text>
            <Infoicon />
          </View>
          <Text> ${data.valuationCap}</Text>
        </View>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{marginRight: 10}}>Discount</Text>
            <Infoicon />
          </View>
          <Text>{data.discount}%</Text>
        </View>
      </View>
    </View>
  );
};

export default PortfolioCard;
