import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Camera = () => {
  const [camera, setCamera] = useState(false);
  return (
    <>
      {!camera ? (
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#377BF5',
            padding: 10,
            alignItems: 'center',
          }}
          onPress={() => {
            setCamera(true);
          }}>
          <Text style={{color: '#fff'}}>Click me</Text>
        </TouchableOpacity>
      ) : (
        <>
          <RNCamera style={{flex: 1, alignItems: 'center'}} />
        </>
      )}
    </>
  );
};

export default Camera;
