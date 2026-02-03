import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icons } from '../asset';
import { colors } from '../constant/color';
import { FillCheckBoxIcon, UnFillCheckboxIcon } from '../asset/icons/authIcon';
  
interface CheckBoxProps {
onPress:() => void;
isSelected:boolean,
color:string,
}

export const AppCheckboxButton = ({
  isSelected = false,
  onPress,
  color = colors.secondary,
}:CheckBoxProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      {isSelected ? (
        <FillCheckBoxIcon color={color} />
      ) : (
        <UnFillCheckboxIcon color={color} />
      )}
    </TouchableOpacity>
  );
};

