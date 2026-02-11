import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../AppHeading';
import { OrderStatus } from '../../constant/type';
import { ORDER_STATUS_UI } from '../../constant/OrderStatusConfig';

interface Props {
  status: OrderStatus;
}

export const StatusBadge = ({ status }: Props) => {
  const ui = ORDER_STATUS_UI[status];

  if (!ui) return null;

  return (
    <View style={[styles.container, { backgroundColor: ui.backgroundColor }]}>
      <AppText
        title={ui.label}
        color={ui.textColor}
        fontSize={12}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
});
