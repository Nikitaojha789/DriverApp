import React from 'react';
import {ActivityIndicator} from 'react-native';
import {AppText} from '../AppHeading';
import {colors} from '../../constant/color';
import {TouchableButton} from './TouchableButton';
import { fontSize, width } from '../../asset/style/commonStyle';
import { fonts } from '../../asset';

interface appButtonProps {
  title: string;
  backgroundColor?: string;
  onPress?: () => void;
  activity?: boolean;
  disabled?: boolean;
  height?: number;
  width?: number;
  variant?: 'solid' | 'text'; 
  fontsize?:number;
  fontfamily?:string;
  color?:string;
}

export const AppButton = ({
  color=colors.black,
  fontfamily = fonts.bold,
  fontsize = fontSize.default,
  title,
  backgroundColor = colors.secondary,
  onPress,
  activity,
  disabled,
  height = 50,
  width=80,
  variant = 'solid',
}: appButtonProps) => {
  return (
    <TouchableButton
      onPress={onPress}
      disabled={activity || disabled}
      style={{
        width:width,
        height: height,
       backgroundColor:
          variant === 'text'
            ? 'transparent'
            : disabled
            ? colors.placeholder
            : backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      }}>
      {activity ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <AppText color={color} title={title} fontSize={fontsize} fontFamily={fontfamily}/>
      )}
    </TouchableButton>
  );
};
