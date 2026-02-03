import React, { memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextProps,
  TextStyle,
  TextStyleAndroid,
  TextStyleIOS,
  GestureResponderEvent,
} from 'react-native';
import {colors} from '../constant/color';
import {fonts} from '../asset';
import {
  blueButtonTextStyle,
  fontSize,
  h1Style,
  screenHeadingStyle,
  whiteButtonTextStyle,
} from '../asset/style/commonStyle';

interface appHeadingProps {
  title: string;
  color?: string;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  style?: TextStyle;
  numberOfLines?: number;
  isCapitalize?: boolean;
  //   onPress?: Function;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';

  onPress?: (event: GestureResponderEvent) => void;
  fontFamily?: string;
  center?: boolean;
  primary?: boolean;
}

export const AppHeading = ({
  title,
  color = colors.white,
  fontSize = 18,
  fontWeight,
  style,
  numberOfLines,
  isCapitalize,
  textTransform = 'none',
  fontFamily,
}: appHeadingProps) => {
  return (
    <Text
      style={{
        color,
        fontSize,
        fontFamily,
        fontWeight,
        textTransform: isCapitalize ? 'capitalize' : textTransform,
        ...style,
      }}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
};

export const AppText = ({
  title,
  color = colors.black,
  fontSize = 14,
  style,
  isCapitalize,
  textTransform = 'none',
  numberOfLines,
  onPress,
  center = false,
  fontFamily = fonts.regular,
}: appHeadingProps) => {
  return (
    <Text
      onPress={onPress}
      style={[{
        color,
        fontSize,
        fontFamily,
        textTransform: isCapitalize ? 'capitalize' : textTransform,
        ...style,
        textAlign: center ? 'center' : 'left',
      },
    style,]}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
};

export const AppTxt = ({
  title,
  style,
  isCapitalize,
  textTransform = 'none',
  numberOfLines,
  onPress,
  center = false,
}: appHeadingProps) => {
  return (
    <Text
      onPress={onPress}
      style={{
        textTransform: isCapitalize ? 'capitalize' : textTransform,
        ...style,
        textAlign: center ? 'center' : 'left',
      }}
      ellipsizeMode="tail"
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
};

export const ScreenHeading = ({
  title,
  isCapitalize,
  textTransform = 'none',
  numberOfLines,
  onPress,
}: appHeadingProps) => {
  return (
    <Text
      onPress={onPress}
      style={{
        textTransform: isCapitalize ? 'capitalize' : textTransform,
        ...screenHeadingStyle,
      }}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
};

export const H1 = ({
  title,
  isCapitalize,
  textTransform = 'none',
  numberOfLines,
  onPress,
  center = false,
}: appHeadingProps) => {
  return (
    <Text
      onPress={onPress}
      style={{
        textTransform: isCapitalize ? 'capitalize' : textTransform,
        ...h1Style,
        textAlign: center ? 'center' : 'left',
      }}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
};

export const ButtonText = ({
  title,
  isCapitalize,
  textTransform = 'none',
  numberOfLines,
  onPress,
  primary = false,
  color = colors.white, 
}: appHeadingProps) => {
  return (
    <Text
      onPress={onPress}
      style={{
        textTransform: isCapitalize ? 'capitalize' : textTransform,
        ...(primary ? whiteButtonTextStyle : blueButtonTextStyle),
        color: color,
        fontFamily:fonts.medium,
        fontSize:fontSize.default,
      }}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
};


export const RequiredTextCard = ({style}: {style: any}) => {
  return <AppText title={'*'} style={style} fontSize={fontSize.medium} color={colors.red} />;
};

export const RequiredText = memo(RequiredTextCard);