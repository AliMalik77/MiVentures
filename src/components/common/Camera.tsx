import React, {Component, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
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

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
