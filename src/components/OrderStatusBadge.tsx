import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { OrderStatus } from "../constant/type";
import { ORDER_STATUS_UI } from "../constant/OrderStatusConfig";
import { fonts } from "../asset";
import { h, w } from "../constant/dimension";
import { AppText } from "./AppHeading";

type Props = {
  status: OrderStatus;
};

export const OrderStatusBadge = ({ status }: Props) => {
  const statusUI = ORDER_STATUS_UI[status];

  if (!statusUI) return null;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: statusUI.backgroundColor },
      ]}
    >
      <AppText style={[styles.text, { color: statusUI.textColor }]}
        title={statusUI.label}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: w(2),
    paddingVertical: h(0.2),
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color:'#000'
  },
});
