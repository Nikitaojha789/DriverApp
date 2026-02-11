import { View, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import { colors } from '../../constant/color';
import { fontSize } from '../../asset/style/commonStyle';
import { w } from '../../constant/dimension';
import { fonts } from '../../asset';
import { AppText } from '../AppHeading';

interface OrderIdCardProps {
  orderId: string;
  label?: string;
  containerStyle?: ViewStyle;
}

export const OrderIdCard = ({
  orderId,
  label = 'Order ID',
  containerStyle,
}: OrderIdCardProps) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <AppText style={styles.label} title={label}/>
      <AppText style={styles.value} title={orderId} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingVertical: w(2.5),
    paddingHorizontal: w(3),
  },
  label: {
    fontSize: fontSize.normal,
    fontFamily: fonts.regular,
    color: colors.textColor,
    marginBottom: w(1),
  },
  value: {
    fontSize: fontSize.default,
    fontFamily: fonts.semiBold,
    color: colors.textColor,
  },
});

