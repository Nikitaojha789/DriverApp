import React, { memo, useRef, useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { TouchableButton } from './button/TouchableButton';
import { AppHeading } from './AppHeading';
import { colors } from '../constant/color';

interface OtpInputProps {
  otpLength?: number;
  onOtpChange?: (otp: string) => void;
  borderColor?: string;
  filledBackgroundColor?: string;
  emptyBackgroundColor?: string;
  textColor?: string;
  filledTextColor?: string;
  boxSize?: number;
  borderRadius?: number;
}

export const OtpInput = memo(({
  otpLength = 6,
  onOtpChange,
  borderColor = '#5C2E92',
  filledBackgroundColor = '#f39ee6',
  textColor = '#000',
  emptyBackgroundColor = '#FFFFFF',
  boxSize = 44,
  borderRadius = 10,
}: OtpInputProps) => {
  const inputRef = useRef<TextInput>(null);
  const [otp, setOtp] = useState('');

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  }, []);

  const handleChange = (value: string) => {
    if (value.length <= otpLength) {
      setOtp(value);
      onOtpChange?.(value);

      if (value.length === otpLength) {
        Keyboard.dismiss();
      }
    }
  };

const activeIndex =
  otp.length < otpLength ? otp.length : otpLength - 1;

  return (
    <View>
      <TextInput
        ref={inputRef}
        value={otp}
        autoFocus
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        onChangeText={handleChange}
        maxLength={otpLength}
        caretHidden
        style={styles.hiddenInput}
      />


     <View style={styles.row}>
  {Array.from({ length: otpLength }).map((_, index) => {
    const digit = otp[index] ?? '';
    const isFilled = digit.length > 0;
    const isActive = index === activeIndex;

    return (
      <TouchableButton
        key={index}
        onPress={() => inputRef.current?.focus()}
        style={{
          width: boxSize,
          height: boxSize * 1.00,
          borderRadius,
          borderWidth: isFilled || isActive
              ? 2
              : 1,

          borderColor:
            isFilled || isActive
              ? borderColor
              : colors.inputBorder,

          backgroundColor:
            isFilled ? borderColor : emptyBackgroundColor,

          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AppHeading
          title={digit}
          fontSize={24}
          color={isFilled ? '#fff' : textColor}
        />
      </TouchableButton>
    );
  })}
</View>



    </View>
  );
});

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 14,
    alignSelf: 'center',
  },
  hiddenInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0.01,
  },
});
