import React from 'react';
import {View} from 'react-native';
import {AppText} from '../AppHeading';
import {Row} from '../Row';
import {IconButton} from './IconButton';
import {Icons} from '../../asset';
import {colors} from '../../constant/color';
import {TouchableButton} from './TouchableButton';

interface addNewButtonProps {
  title?: string;
  onPress?: () => void;
  topSpace?: number;
  width?: any;
  isBorder?: boolean;
  primary?: boolean;
  bgColor?: string;
  disabled?: boolean;
  badge?: any;
  borderRadius?: number;
  activity?: boolean;
  textColor?: string;
  fontFamily?: string;
  height?: number;
  fontSize?: number;
  borderColor?: string;
  borderedTextColor?: string;
}

export const AddNewButton = ({
  title = 'Add New',
  onPress,
}: addNewButtonProps) => {
  return (
    <TouchableButton onPress={onPress}>
      <Row gap={10}>
        <AppText title={title} />
        <IconButton
          onPress={onPress}
          style={{
            width: 25,
            aspectRatio: 1,
            backgroundColor: colors.secondary,
            borderRadius: 5,
          }}>
          <Icons.PlusIcon />
        </IconButton>
      </Row>
    </TouchableButton>
  );
};

export const AddNewFillButton = ({
  title = 'Add New',
  onPress,
  topSpace = 0,
  width = '100%',
  isBorder = false,
  primary = false,
  bgColor = colors.buttonBg,
  disabled,
  borderRadius = 12,
  activity,
  height = 50,
  borderColor = colors.white,
  borderedTextColor = colors.white,
}: addNewButtonProps) => {
  return (
    <TouchableButton
      onPress={onPress}
      style={{
        // backgroundColor: colors.secondary,
        // alignSelf: 'auto',
        // padding: 5,
        // paddingHorizontal: 10,
        // paddingVertical: 10,
        // borderRadius: 5,

        height: height,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: disabled
          ? colors.lightGray
          : isBorder
          ? 'transparent'
          : bgColor,
        borderRadius: borderRadius,
        marginTop: topSpace,
        borderWidth: 1,
        borderColor: isBorder ? borderColor : 'transparent',
        alignSelf: 'center',
      }}>
      <Row gap={8}>
        <Icons.PlusIcon color={colors.black} />
        <AppText title={title} color={colors.black} />
      </Row>
    </TouchableButton>
  );
};
