import React, {ReactNode} from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

interface touchableProps extends TouchableOpacityProps {
  children?: ReactNode;
  onPress?: () => void | Function;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const TouchableButton = ({
  children,
  onPress,
  onLongPress,
  disabled,
  style,
  accessibilityState,
  accessibilityLabel,
  testID,
  ...rest
}: touchableProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      onLongPress={onLongPress}
      style={style}
      accessibilityState={accessibilityState}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      {...rest}>
      {children}
    </TouchableOpacity>
  );
};
