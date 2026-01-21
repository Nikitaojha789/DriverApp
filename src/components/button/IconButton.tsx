import React, {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import {TouchableButton} from './TouchableButton';

export const IconButton = ({
  children,
  onPress,
  style,
}: {
  children?: ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
}) => {
  return (
    <TouchableButton
      onPress={onPress}
      style={{
        width: 40,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
      {children}
    </TouchableButton>
  );
};
