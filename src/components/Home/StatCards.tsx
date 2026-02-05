import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AppText } from '../AppHeading';
import { colors } from '../../constant/color';
import { h, w } from '../../constant/dimension';
import { fonts } from '../../asset';
import { fontSize } from '../../asset/style/commonStyle';

interface TextStyleProps {
  fontSize?: number;
  fontFamily?: string;
  color?: string;
}

interface StatCardsProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  iconBgColor?: string;
  variant?: 'card' | 'flat' | 'row';
  height?: number;
  width?: number;
  isCard?: boolean;
  isRow?: boolean;
  valueStyle?: TextStyleProps;
  labelStyle?: TextStyleProps;
}

export const StatCards = ({
  icon,
  value,
  label,
  isCard = true,
  isRow = false,
  iconBgColor,
  variant = 'card',
  height,
  width,
  valueStyle,
  labelStyle,
}: StatCardsProps) => {
  // const isCard = variant === 'card';
  // const isRow = variant === 'row';
  return (
    <View style={[
      styles.base,
      isCard && styles.cardShadow,
      isRow && styles.rowItem,
    ]}
    >
      <View
        style={[
          styles.iconBox,
          {
            backgroundColor: iconBgColor ?? '#F2F2F2', width: width ?? w(12.2),
            height: height ?? h(5.5),
          }
        ]}
      >
        <View style={styles.icon} >
          {icon}
        </View>
      </View>

      <View style={{ gap: h(0.5)}}>
        <Text
          style={[
            styles.value,
            valueStyle && {
              fontSize: valueStyle.fontSize,
              fontFamily: valueStyle.fontFamily,
              color: valueStyle.color,
            },
          ]}
        >
          {value}
        </Text>

        <Text
          style={[
            styles.label,
            labelStyle && {
              fontSize: labelStyle.fontSize,
              fontFamily: labelStyle.fontFamily,
              color: labelStyle.color,
            },
          ]}
        >
          {label}
        </Text>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    // flex: 1,
    backgroundColor: colors.white,
    // width: '48%',
  },
  cardShadow: {
    paddingVertical: h(0.1),
    paddingHorizontal: w(2),
    shadowColor: '#000000af',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
    borderWidth: 0,
    borderColor: colors.InactiveButtonColor,
    shadowOffset: { width: 2, height: 2 },
    marginHorizontal: w(0.2),
  },
  rowItem: {
    flex: 1,
  },


  iconBox: {
    width: w(12.2),
    height: h(5.5),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: w(3),
  },
  icon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  value: {
    fontSize: fontSize.veryLarge,
    fontFamily: fonts.medium,
    color: colors.textColor,
  },
  label: {
    fontFamily: fonts.regular,
    fontSize: fontSize.normal,
    bottom: h(1),
    color: colors.InactiveButtonColor,
    // marginTop: 2,
  },
});
