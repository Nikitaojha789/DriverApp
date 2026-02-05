import React from 'react';
import { TouchableOpacity } from 'react-native';
import { colors } from '../constant/color';
import { OffToggleIcon, OnToggleIcon } from '../asset/icons/HomeIcon';
  
interface ToggleIconProps {
onPress:() => void;
isSelected:boolean,
color:string,
}

export const ToggleIcon = ({
  isSelected = false,
  onPress,
  color = colors.secondary,
}:ToggleIconProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      {isSelected ? (
        <OnToggleIcon color={color} />
      ) : (
        <OffToggleIcon color={color} />
      )}
    </TouchableOpacity>
  );
};

