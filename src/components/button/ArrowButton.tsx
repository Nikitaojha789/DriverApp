import React from 'react';
import {StyleSheet, TextStyle} from 'react-native';
import {colors} from '../../constant/color';
import {AppText} from '../AppHeading';
import {Icons} from '../../asset';
import {TouchableButton} from './TouchableButton';

interface arrowButton {
  title: string;
  onPress?: () => void;
  width?: any;
  textStyle?: TextStyle;
}

export const ArrowButton = ({
  title,
  onPress,
  width = 'auto',
  textStyle,
}: arrowButton) => {
  return (
    <TouchableButton
      onPress={onPress}
      style={[
        styles.container,
        {
          width: width,
        },
      ]}>
      <AppText title={title} numberOfLines={1} style={textStyle} />
      <Icons.BottomArrowIcon color={colors.secondary} />
    </TouchableButton>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 0.8,
    borderColor: colors.secondary,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
