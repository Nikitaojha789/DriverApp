import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { h, w } from '../../constant/dimension';
import { fontSize } from '../../asset/style/commonStyle';
import { fonts } from '../../asset';
import { colors } from '../../constant/color';

type Props = {
  distance: string;
  label?: string;
  icon:React.ReactNode;
};

const OrdereInfoCard = ({ distance, label = 'Distance', icon }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        {icon}
      </View>

      <Text style={styles.distance}>{distance}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default OrdereInfoCard;
const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:h(0.5),
    paddingHorizontal:w(6)
  },
  iconWrap: {
    marginBottom: 6,
  },
  distance: {
    fontSize: fontSize.default,
    fontFamily: fonts.semiBold,
  },
  label: {
     fontSize: fontSize.small,
    fontFamily: fonts.regular,
    color: colors.InactiveButtonColor,
    marginTop: 2,
  },
});



