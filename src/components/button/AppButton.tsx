import React from 'react';
import {ActivityIndicator} from 'react-native';
import {AppText} from '../AppHeading';
import {colors} from '../../constant/color';
import {TouchableButton} from './TouchableButton';
import { width } from '../../asset/style/commonStyle';

interface appButtonProps {
  title: string;
  backgroundColor?: string;
  onPress?: () => void;
  activity?: boolean;
  disabled?: boolean;
  height?: number;
  width?: number;
  variant?: 'solid' | 'text'; 
}

export const AppButton = ({
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
        <AppText color={colors.black} title={title} fontSize={16} />
      )}
    </TouchableButton>
  );
};
