import React from 'react';
import {View, TextInput, TextInputProps, StyleSheet} from 'react-native';
import {colors} from '../constant/color';
import {spacer} from '../constant/dimension';
import {TouchableButton} from './button/TouchableButton';
import {Icons} from '../asset';
import {Helper} from '../helper/Helper';

interface searchInputProps extends TextInputProps {
  onPress?: () => void;
  backgroundColor?: string;
}

export const SearchInput = ({
  placeholder = 'Search...',
  editable = true,
  onPress,
  backgroundColor = colors.primary,
  onChangeText,
}: searchInputProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.darkGray}
        style={[styles.input]}
        editable={editable}
        onChangeText={onChangeText}
      />
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icons.SearchIcon size={18} color={colors.darkGray} />
      </View>
      {!editable && (
        <TouchableButton
          onPress={onPress}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 40,
    paddingLeft: spacer,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: "rgba(199, 156, 83, 0.43)",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    color: colors.darkGray,
  },
});
