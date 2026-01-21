import React from 'react';
import {View} from 'react-native';
import {Icons} from '../asset';
import {colors} from '../constant/color';

export const AppCheckboxButton = ({
  isSelected = false,
  color = colors.secondary,
}) => {
  return (
    <View>
      {isSelected ? (
        <Icons.CheckBoxIcon color={color} />
      ) : (
        <Icons.UnFillCheckboxIcon color={color} />
      )}
    </View>
  );
};
