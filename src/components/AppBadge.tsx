import React from 'react';
import {View} from 'react-native';
import {colors} from '../constant/color';
import {AppHeading, AppText} from './AppHeading';
import {AppHeader} from './header/AppHeader';

export const AppBadge = ({badge = 0}) => {
  return (
    <View
      style={{
        width: 15,
        aspectRatio: 1,
        borderRadius: 20,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <AppHeading title={badge} color={colors.black} fontSize={8} />
    </View>
  );
};
