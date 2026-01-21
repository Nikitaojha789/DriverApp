import React, {useLayoutEffect, useRef, useState} from 'react';
import {View, TextInput, StyleSheet, Keyboard} from 'react-native';
import {colors} from '../constant/color';
import {TouchableButton} from './button/TouchableButton';
import {AppHeading} from './AppHeading';
import {fonts} from '../asset';
import {w} from '../constant/dimension';

const size = w(12);

interface otpInputProps {
  onOtpChange?: Function;
  textColor: string;
  otpLength: number;
}

export const OtpInput = ({
  onOtpChange,
  textColor = 'white',
  otpLength = 6,
}: otpInputProps) => {
  const inputRef = useRef<TextInput>(null);
  const list = Array(otpLength).fill(1);

  const [otp, setOtp] = useState('');

  const onItemPress = () => {
    inputRef?.current?.focus();
  };

  useLayoutEffect(() => {
    //onItemPress();
  }, [inputRef]);

  const onChangeOtp = (otp: string) => {
    if (String(otp).length <= otpLength) {
      setOtp(otp);
      onOtpChange && onOtpChange(otp);
      if (String(otp).length == otpLength) {
        Keyboard.dismiss();
      }
      return;
    }
    Keyboard.dismiss();
  };

  const getOtpByIndex = (index: number) => {
    const arr = String(otp).split('');
    return arr[index];
  };

  return (
    <View>
      <TextInput
        ref={inputRef}
        style={{
          width: 1,
          height: 1,
          color: colors.white,
        }}
        onChangeText={onChangeOtp}
        //autoFocus
        keyboardType="number-pad"
        returnKeyType="done"
      />

      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignSelf: 'center',
        }}>
        {list.map((item, index) => {
          const otpData = getOtpByIndex(index) ?? '';

          return (
            <OtpView
              key={String(index)}
              onPress={() => onItemPress()}
              otp={otpData}
            />
          );
        })}
      </View>
    </View>
  );
};

interface otpViewProps {
  onPress: Function;
  otp: string;
}

const OtpView = ({onPress, otp}: otpViewProps) => {
  return (
    <TouchableButton
      onPress={onPress}
      style={{
        ...styles.inputView,
        borderColor: 'rgb(220, 220, 220)',
        borderWidth: 1,
      }}>
      <AppHeading
        title={otp}
        color={colors.white}
        fontSize={26}
      />
    </TouchableButton>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputView: {
    width: size,
    height: size * 1.2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
