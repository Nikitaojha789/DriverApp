import React, {ReactNode} from 'react';
import {ActivityIndicator} from 'react-native';
import {AppText} from '../AppHeading';
import {colors} from '../../constant/color';
import {TouchableButton} from './TouchableButton';

interface iconTextButtonProps {
  title: string;
  icon?: ReactNode;
  isSelected?: boolean;
  onPress?: () => void;
  activity?: boolean;
}

export const IconTextButton = ({
  title,
  icon,
  isSelected = true,
  onPress,
  activity,
}: iconTextButtonProps) => {
  return (
    <TouchableButton
      onPress={onPress}
      disabled={activity}
      style={{
        height: 40,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.secondary,
        justifyContent: 'center',
        alignSelf: 'flex-start',
        gap: 10,
        flexDirection: 'row',
        backgroundColor: isSelected ? colors.secondary : 'transparent',
      }}>
      {activity ? (
        <ActivityIndicator color={colors.secondary} />
      ) : (
        <>
          {icon}
          <AppText title={title} fontSize={13} />
        </>
      )}
    </TouchableButton>
  );
};
