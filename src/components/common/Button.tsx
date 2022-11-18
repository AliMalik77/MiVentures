import React from 'react';
import {Pressable, Text} from 'react-native';

type ButtonProps = {
  text: string;
  btnWidth: string;
  color: string;
  textColor: string;
  bordercolor: string;
  border: number;
  handler?: (val: any) => void;
};

const Button = ({
  text,
  btnWidth,
  color,
  textColor,
  bordercolor = 'none',
  border,
  handler = () => {},
}: ButtonProps) => {
  console.log('button props are ', text, handler);

  return (
    <>
      <Pressable
        style={{
          backgroundColor: color,
          width: btnWidth,
          paddingVertical: 8,
          paddingHorizontal: 32,
          borderRadius: 30,
          marginBottom: 10,
          alignItems: 'center',
          borderWidth: border,
          borderColor: bordercolor,
        }}
        onPress={handler}>
        <Text style={{color: textColor, fontSize: 18, fontWeight: '600'}}>
          {text}
        </Text>
      </Pressable>
    </>
  );
};

export default Button;
