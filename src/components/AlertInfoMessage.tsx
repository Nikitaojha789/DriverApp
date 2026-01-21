import React from 'react';
import {View, StyleSheet} from 'react-native';
import {spacer} from '../constant/dimension';
import {AppText} from './AppHeading';
import {colors} from '../constant/color';
import {Helper} from '../helper/Helper';
import {Icons} from '../asset';

interface alertInfoProps {
  message: string;
}

export const AlertInfoMessage = ({message = ''}: alertInfoProps) => {
  return (
    <View style={[styles.container]}>
      <Icons.InfoIcon />
      <AppText title={message} style={{flex: 1}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacer,
    backgroundColor: Helper.hexToRgb(colors.secondary, 0.2),
    borderWidth: 1,
    borderColor: colors.secondary,
    flexDirection: 'row',
    gap: 7,
  },
});
