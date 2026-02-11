import React from 'react';
import {View} from 'react-native';
import {colors} from '../constant/color';
import {AppText} from './AppHeading';
import {Row} from './Row';

interface dividerProps {
  bgColor?:string,
  isLight:boolean,
}

export const Divider = ({isLight = false,bgColor}:dividerProps) => {
  return (
    <View
      style={{
        width: '100%',
        height: 1,
        backgroundColor: isLight
          ? bgColor
          : colors.secondary,
      }}
    />
  );
};

export const OrDivider = ({isLight = true}) => {
  return (
    <Row>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: isLight
            ? colors.activityPlaceholder
            : colors.secondary,
        }}
      />
      <AppText title="Or" color={colors.secondary} />
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: isLight
            ? colors.activityPlaceholder
            : colors.secondary,
        }}
      />
    </Row>
  );
};
