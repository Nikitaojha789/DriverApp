import React from 'react';
import {View} from 'react-native';
import {spacer} from '../constant/dimension';

interface spacerProps {
  size?: number;
}
export const Spacer = ({size = spacer}: spacerProps) => {
  return (
    <View
      style={{
        width: size,
        aspectRatio: 1,
      }}
    />
  );
};
