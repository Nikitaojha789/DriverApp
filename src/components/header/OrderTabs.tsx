import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { fonts } from '../../asset'
import { h } from '../../constant/dimension'
import { AppText } from '../AppHeading'
import { fontSize } from '../../asset/style/commonStyle'
import { colors } from '../../constant/color'
import { OrderStatus } from '../../constant/type'

const TABS = [
  { label: 'Active', status: OrderStatus.IN_PROGRESS },
  { label: 'Completed', status: OrderStatus.COMPLETED },
  { label: 'Cancelled', status: OrderStatus.CANCELLED },
];

interface Props {
  selectedStatus: OrderStatus;
  onChange: (status: OrderStatus) => void;
}


export const OrderTabs = ({ selectedStatus, onChange }: Props) => {
  return (
    <View style={styles.container}>
      {TABS.map(tab => {
        const isActive = selectedStatus === tab.status;

        return (
          <TouchableOpacity
            key={tab.label}
            style={[styles.tab, isActive && styles.activeTab]}
            activeOpacity={0.8}
            onPress={() => onChange(tab.status)}
          >
            <AppText
              title={tab.label}
              style={[
                styles.tabText,
                isActive ? styles.activeText : styles.inactiveText,
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2', 
    borderRadius: 16,
    padding: 4,
    marginVertical: 14,
  },
  tab: {
    flex: 1,
    paddingVertical: h(0.8),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor:colors.white, 
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.06,
    // shadowRadius: 2,
    // elevation: 2,
  },
  tabText: {
    fontFamily: fonts.regular,
    fontSize: fontSize.normal,
  },
  activeText: {
    color: '#5E2E91', 
  },
  inactiveText: {
    color: '#7D7D7D',
  },
})
