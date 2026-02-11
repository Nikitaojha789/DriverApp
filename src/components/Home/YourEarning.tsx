import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../AppHeading';
import { colors } from '../../constant/color';
import { fontSize } from '../../asset/style/commonStyle';
import { fonts } from '../../asset';
import { h, w } from '../../constant/dimension';
import { TransactionItem } from './TransactionItem';

interface YourEarningProps {
  icon: React.ReactNode;
  iconBgColor?: string;
  totalAmount: string;
}

export const YourEarning = ({
  icon,
  iconBgColor = '#EAF7EE',
  totalAmount,
}: YourEarningProps) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View style={[styles.iconBox, { backgroundColor: iconBgColor }]}>
          {icon}
        </View>

        <View style={{alignSelf:'center'}}>
          <AppText
            title="You Earned"
            fontSize={fontSize.normal}
            fontFamily={fonts.regular}
            color={colors.textColor}
            style={{lineHeight:fontSize.normal +2}}
          />
          <AppText
            title={totalAmount}
            fontSize={fontSize.veryLarge}
            fontFamily={fonts.bold}
            color={colors.primary}
            // style={{ marginTop:  }}
          />
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Earnings Breakdown */}
      <TransactionItem
        title="Base Fare"
        amount="R26.00"
        date=""
        amountColor={colors.textColor}
      />

      <TransactionItem
        title="Distance Bonus"
        amount="R12.00"
        date=""
        amountColor={colors.textColor}
      />

      <TransactionItem
        title="Tip"
        amount="+R5.00"
        date=""
        amountColor={colors.primary}
      />

      {/* Divider */}
      {/* <View style={styles.divider} /> */}

      {/* Total */}
      <TransactionItem
        title="Total Earning"
        amount="+R43.00"
        date=""
        amountColor={colors.primary}
        textColor={colors.textColor}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
    width: '90%',
  },

  header: {
    flexDirection: 'row',
    // alignItems: 'center',
    // marginBottom: h(1),
  },

  iconBox: {
    width: w(12),
    height: w(12),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: w(4),
  },

  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginVertical: h(1.2),
  },
});
