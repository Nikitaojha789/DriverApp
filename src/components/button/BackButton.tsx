import React, {useCallback} from 'react';
import {View} from 'react-native';
import {TouchableButton} from './TouchableButton';
import {Icons} from '../../asset';
import {AppNavigation} from '../../route/app_navigation';
import {colors} from '../../constant/color';
import { w } from '../../constant/dimension';

interface backButtonInterface {
  onPress?: () => void;
}

export const BackButton = ({onPress}: backButtonInterface) => {
  const onBack = useCallback(() => {
    if (onPress) {
      onPress();
      return;
    }
    AppNavigation.goBack();
  }, []);

  return (
    <TouchableButton
      onPress={onBack}
      style={{
        width: w(0),
        // height: 35,
        // borderRadius: 40,
        // borderColor: colors.borderColor,
        // borderWidth: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
      }}>
      <View style={{marginRight:w(5)}}>
        <Icons.BackIcon/>
      </View>
    </TouchableButton>
  );
};

export const BgBackButton = ({onPress}: backButtonInterface) => {
  const onBack = useCallback(() => {
    if (onPress) {
      onPress();
      return;
    }
    AppNavigation.goBack();
  }, []);

  return (
    <TouchableButton
      onPress={onBack}
      style={{
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        alignSelf: 'center',
        borderRadius: 10,
        paddingLeft: 8,
      }}>
      <Icons.BackIcon size={20} color={colors.white} />
    </TouchableButton>
  );
};
