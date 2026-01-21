import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {spacer} from '../constant/dimension';
import {colors} from '../constant/color';

interface rowProps {
  children: ReactNode;
  gap?: number;
  spaceBetween?: boolean;
  borderBottom?: boolean;
  alignItems?: string;
}

export const Row = ({
  children,
  gap = spacer,
  spaceBetween = false,
  alignItems = 'center',
  borderBottom = false,
}: rowProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: alignItems,
        gap: gap,
        justifyContent: spaceBetween ? 'space-between' : 'flex-start',
        borderBottomWidth: borderBottom ? 1 : 0,
        borderBottomColor: borderBottom ? colors.borderBottom : '#fff',
      }}>
      {children}
    </View>
  );
};
