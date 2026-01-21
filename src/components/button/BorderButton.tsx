import React from 'react';
import {ActivityIndicator} from 'react-native';
import {AppText} from '../AppHeading';
import {colors} from '../../constant/color';
import {TouchableButton} from './TouchableButton';

interface appBorderButtonProps {
  title: string;
  backgroundColor?: string;
  width?: number | string;
  onPress?: () => void;
  activity?: boolean;
}

export const BorderButton = ({
  title,
  backgroundColor = colors.secondary,
  width = '50%',
  onPress,
  activity,
}: appBorderButtonProps) => {
  return (
    <TouchableButton
      onPress={onPress}
      disabled={activity}
      style={{
        width: typeof width === 'number' ? width : parseInt(width, 10),
        height: 40,
        borderWidth: 1,
        borderColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {activity ? (
        <ActivityIndicator color={colors.secondary} />
      ) : (
        <AppText title={title} fontSize={16} />
      )}
    </TouchableButton>
  );
};
