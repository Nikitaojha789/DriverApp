// This component defines three types of buttons: AppIconButton, AppButton, and SmallButton,
// with various customizable properties such as title, onPress function, styles, and activity indicator.

import React, {JSX, memo} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {colors} from '../constant/color';
import {TouchableButton} from './button/TouchableButton';
import {ButtonText} from './AppHeading';

export type appButtonProps = {
  title?: string;
  onPress?: () => void;
  topSpace?: number;
  width?: any;
  isBorder?: boolean;
  primary?: boolean;
  bgColor?: string;
  disabled?: boolean;
  badge?: any;
  borderRadius?: number;
  activity?: boolean;
  textColor?: string;
  fontFamily?: string;
  height?: number;
  fontSize?: number;
  borderColor?: string;
  borderedTextColor?: string;
};

// Component for a customizable button with an optional activity indicator
export const AppButton = memo(
  ({
    title = 'Title',
    onPress,
    topSpace = 0,
    width = '100%',
    isBorder = false,
    primary = false,
    bgColor = colors.buttonBg,
    disabled,
    borderRadius = 12,
    activity,
    height = 50,
    borderColor = colors.white,
    borderedTextColor = colors.white,
    textColor = colors.white,
  }: appButtonProps) => {
    return (
      <TouchableButton
        disabled={disabled || activity}
        onPress={onPress}
        style={{
          height: height,
          width: width,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: disabled
            ? colors.white
            : isBorder
            ? 'transparent'
            : bgColor,
          borderRadius: borderRadius,
          marginTop: topSpace,
          borderWidth: 1,
          borderColor: isBorder ? borderColor : 'transparent',
          alignSelf: 'center',
          
        }}>
        {activity ? (
          <>
            <ActivityIndicator
              color={primary ? colors.white : colors.textColor}
              size="small"
            />
          </>
        ) : (
          <ButtonText primary={primary} title={title} color={textColor} />
        )}
      </TouchableButton>
    );
  },
);

type SocialCardProps = {
  icon: JSX.Element;
  onPress: () => void;
};

export const SocialCard = memo(({icon, onPress}: SocialCardProps) => {
  return (
    <TouchableButton
      style={{
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(252, 252, 252, 1)',
        borderColor: 'rgba(239, 239, 239, 1)',
        borderWidth: 2,
        borderRadius: 12,
        margin: 10,
        marginHorizontal: 15,
      }}
      onPress={onPress}>
      {icon}
    </TouchableButton>
  );
});
