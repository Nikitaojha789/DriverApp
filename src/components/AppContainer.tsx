import React, {ReactNode} from 'react';
import {useThemeColor} from '../theme/themeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constant/color';
import { View } from 'react-native';

interface appContainerProps {
  children: ReactNode;
}

export const AppContainer = ({children}: appContainerProps) => {
  const themeColor = useThemeColor();

  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      {children}
    </View>
  );
};

export const PureContainer = ({children}: appContainerProps) => {
  const themeColor = useThemeColor();

  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      {children}
    </View>
  );
};
