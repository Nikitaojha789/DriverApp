import React from 'react';
import {ActivityIndicator} from 'react-native';
import {AppText} from '../AppHeading';
import {colors} from '../../constant/color';
import {TouchableButton} from './TouchableButton';

interface appButtonProps {
  title: string;
  backgroundColor?: string;
  onPress?: () => void;
  activity?: boolean;
  disabled?: boolean;
  height?: number;
}

export const AppButton = ({
  title,
  backgroundColor = colors.secondary,
  onPress,
  activity,
  disabled,
  height = 50,
}: appButtonProps) => {
  return (
    <TouchableButton
      onPress={onPress}
      disabled={activity || disabled}
      style={{
        height: height,
        backgroundColor: disabled ? colors.placeholder : backgroundColor,
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
