// This component provides various input fields including text inputs, password inputs, OTP inputs, and others with custom styling and features.
import React, {memo, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  Alert,
  Platform,
  GestureResponderEvent,
} from 'react-native';
import {TouchableButton} from './button/TouchableButton';
import {EyeIcon, EyeOffIcon} from '../asset/icons/icons';
import {colors} from '../constant/color';
import {useSelector} from 'react-redux';
import {AppTxt, RequiredText} from './AppHeading';
import {spacer} from '../constant/dimension';
import {fonts} from '../asset';
import {ErrorMsg} from './ErrorMsg';
import {countryCodeStyle, fontSize, inputLabelStyle} from '../asset/style/commonStyle';

// Define the properties that the AppInput component accepts
export interface appTextInputProps extends TextInputProps {
  showIcon?: boolean;
  isDescription?: boolean;
  error?: React.ReactNode;
  showError?: boolean;
  password?: boolean;
  editable?: boolean;
  activeBorderColor?: string;
  textStyle?: any;
  leftIcon?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  onPress?: () => void;
  marginHorizontal?: number;
  getRef?: (ref: any) => void;
  width?: any;
  labelSpacing?: number;
  countryCode?: string;
  label?: string;
  fontFamily?: string;
  rightIcon?: React.ReactNode;
  countryCodePress?: () => void;
  isLeftSearchIcon?: boolean;
  paddingRight?: number;
  maxHeight?: number;
  topSpace?: number;
  iconPress?: () => void;

  options?: Array<any>;
  optionPress?: () => void;
  onRightIconPress?: () => void;
  style?: any;
  isBorder?: boolean;
  isRequired?: boolean;
  autoComplete?: TextInputProps['autoComplete'];
}
type InputPasswordIconProps = {
  isShow?: boolean;
  onPress: () => void;
};

// Password visibility toggle icon component
export const InputPasswordIcon = memo(
  ({isShow = false, onPress}: InputPasswordIconProps) => {
    return (
      <TouchableButton
        onPress={onPress}
        style={{
          alignItems: 'center',
          height: '100%',
          width: 40,
          justifyContent: 'center',
        }}>
        {isShow ? (
          <EyeIcon color={colors.inputLabelColor} size={20} />
        ) : (
          <EyeOffIcon color={colors.inputLabelColor} size={20} />
        )}
      </TouchableButton>
    );
  },
);

// Main input component with various configurable options
export const AppInput = memo(
  ({
    placeholder = 'Password',
    value,
    onChangeText,
    onFocus = () => {},
    onBlur = () => {},
    showIcon,
    isDescription = false,
    error,
    password = false,
    style = {},
    activeBorderColor,
    textStyle = {},
    keyboardType = 'default',
    maxLength = 500,
    leftIcon,
    label,
    editable = true,
    multiline = false,
    scrollEnabled = true,
    secureTextEntry = false,
    autoCapitalize = 'sentences',
    autoCorrect = true,
    backgroundColor = colors.white,
    placeholderTextColor = colors.placeholder,
    textColor = colors.textColor,
    defaultValue,
    onPress,
    onRightIconPress,
    marginHorizontal = 20,
    onSubmitEditing,
    getRef,
    returnKeyType,

    width = '100%',
    labelSpacing = 13,
    countryCode,
    rightIcon,
    countryCodePress,
    maxHeight = 120,
    showError = true,
    options = [],
    optionPress,
    autoFocus,
    isBorder = true,
    isRequired,
    textContentType,
    autoComplete,
  }: appTextInputProps) => {
    const [inputLength, setInputLength] = React.useState(
      defaultValue?.length || 0,
    );

    const handleTextChange = (text: string) => {
      if (text.length <= 500) {
        onChangeText?.(text); // see fix for next error
        setInputLength(text.length);
      } else {
        Alert.alert(
          'Character Limit Exceeded',
          'You cannot enter more than 500 characters.',
        );
      }
    };

    return (
      <View
        style={{
          marginTop: 6,
          width: width,
        }}>
        {label ? (
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
            }}>
            {/* <AppText
          title={label}
          style={{
            marginVertical: labelSpacing,
            // marginLeft: 20,
            fontFamily: fontFamily,
          }}
          fontSize={16}
          color={colors.textColor}
        /> */}
            <AppTxt
              title={label}
              style={{...inputLabelStyle, marginVertical: 10,}}
              color={colors.textColor}          
    fontFamily={fonts.regular}  
    fontSize={fontSize.default }
    
            />
            {
          isRequired && (
          <RequiredText
            style={{
              marginVertical: labelSpacing,
              marginHorizontal: 5,
              fontFamily: fonts.semiBold,
            }}
          />
          )
        }
          </View>
        ) : null}
        {/* Single bordered input — when countryCode provided show a left pane + separator */}
        <View
          style={{
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: isDescription ? maxHeight : 45,
              borderRadius: 8,
              overflow: 'hidden',
              borderWidth: error ? 1 : isBorder ? 0.5 : 0,
              borderColor: colors.borderColor,
              backgroundColor: backgroundColor,
               ...style,
            }}>
            {countryCode ? (
              <TouchableButton
                onPress={countryCodePress}
                style={{
                  minWidth: '20%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: spacer,
                  backgroundColor: 'transparent',
                }}>
                <AppTxt title={countryCode} style={countryCodeStyle} />
              </TouchableButton>
            ) : null}

            {countryCode ? (
              <View
                style={{
                  width: 1,
                  backgroundColor: colors.inputBorder,
                  alignSelf: 'stretch',
                }}
              />
            ) : null}

            <View
              style={{
                flex: 1,
                paddingHorizontal: spacer,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {leftIcon ? <View>{leftIcon}</View> : null}
              <TextInput
                ref={getRef}
                onFocus={onFocus}
                onBlur={onBlur}
                value={value}
                defaultValue={defaultValue}
                onChangeText={handleTextChange}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                maxLength={maxLength}
                autoFocus={autoFocus}
                keyboardType={keyboardType}
                editable={editable}
                autoCorrect={autoCorrect}
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry}
                multiline={isDescription}
                scrollEnabled={scrollEnabled}
                onSubmitEditing={onSubmitEditing}
                returnKeyType={returnKeyType}
                textContentType={textContentType}
                autoComplete={autoComplete as any}
                style={[
                  {
                    flex: 1,
                    color: colors.black,
                    fontFamily: fonts.regular,
                    fontSize: 12,
                    paddingLeft: showIcon && showIcon ? 10 : 10,
                    textAlignVertical: isDescription ? 'top' : 'center',
                    paddingBottom: isDescription
                      ? 30
                      : Platform.OS === 'ios'
                      ? 0
                      : 6,
                    ...textStyle,
                  },
                  isDescription ? {paddingTop: isDescription ? spacer : 0} : {},
                ]}
              />

              {rightIcon ? (
                onRightIconPress ? (
                  <TouchableOpacity
                    style={{paddingRight: 3}}
                    onPress={onRightIconPress}
                    activeOpacity={0.7}>
                    {rightIcon}
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{paddingRight: 3}}
                    onPress={() => {
                      onPress && onPress();
                    }}
                    activeOpacity={0.7}>
                    {rightIcon}
                  </TouchableOpacity>
                )
              ) : null}
            </View>
          </View>

          {onPress ? (
            <TouchableButton
              onPress={onPress}
              style={{
                ...StyleSheet.absoluteFillObject,
                width: '100%',
              }}
            />
          ) : null}
        </View>
        {isDescription && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // width: '100%',
              position: 'absolute',
              right: spacer - 20,
              bottom: 5,
            }}>
            {inputLength >= 500 && showError ? (
              <ErrorMsg msg="Character limit reached!" />
            ) : null}

            <Text
              style={{
                color: inputLength >= 500 ? colors.red : colors.darkGray,
                marginHorizontal: marginHorizontal,
                marginTop: 5,
                textAlign: 'right',
              }}>
              {inputLength}/500 characters
            </Text>
          </View>
        )}

        {error && showError ? (
          <ErrorMsg msg={typeof error === 'string' ? error : String(error)} />
        ) : null}
      </View>
    );
  },
);

// Container for right icons
export const RightIconContainer = memo(
  ({
    children,
    rightSpace,
  }: {
    children?: React.ReactNode;
    rightSpace?: number;
  }) => {
    return (
      <View
        style={[
          styles.iconContainer,
          {
            paddingRight: rightSpace,
          },
        ]}>
        {children}
      </View>
    );
  },
);

// Styles for various input components
const styles = StyleSheet.create({
  InputView: {
    marginVertical: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  otpInputView: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 250,
    paddingVertical: 5,
  },
  iconContainer: {
    height: 50,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
