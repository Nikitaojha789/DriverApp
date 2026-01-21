/**
 * ErrorMsg Component
 * This component displays an error message with custom styles.
 * It accepts a `msg` prop to show the error text.
 */

import React from 'react';
import {View} from 'react-native';
import {AppTxt} from './AppHeading';
import {errorMsg} from '../asset/style/commonStyle';
// ErrorMsg Component

type ErrorMsgProps = {
  msg?: string;
};

export const ErrorMsg = React.memo(({msg = ''}: ErrorMsgProps) => {
  return (
    <View>
      <AppTxt title={msg} style={errorMsg} />
    </View>
  );
});
