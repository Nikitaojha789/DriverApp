import React from 'react';
import {View} from 'react-native';
import {Icons} from '../asset';
import {colors} from '../constant/color';

export const AppRadioButton = ({
  isSelected = false,
  color = colors.secondary,
}) => {
  return (
    <View>
      {isSelected ? (
        <Icons.RadioButtonIcon color={color} />
      ) : (
        <Icons.UnCheckRadioButtonIcon color={color} />
      )}
    </View>
  );
};
