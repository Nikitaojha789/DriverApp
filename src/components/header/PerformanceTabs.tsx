import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { fonts } from '../../asset'
import { h } from '../../constant/dimension'
import { AppText } from '../AppHeading'
import { fontSize } from '../../asset/style/commonStyle'
import { colors } from '../../constant/color'
import { PERFORMANCE_TABS, PerformanceTabsHeader } from '../../constant/type'

const TABS = [
  { label: 'This Week', value: PERFORMANCE_TABS.THIS_WEEK },
  { label: 'This Month', value: PERFORMANCE_TABS.THIS_MONTH },
  { label: 'This Year', value: PERFORMANCE_TABS.THIS_YEAR },
];


interface Props {
  selectedStatus: PerformanceTabsHeader
  onChange: (status: PerformanceTabsHeader) => void
}



export const PerformanceTabs = ({ selectedStatus, onChange }: Props) => {
  return (
    <View style={styles.container}>
      {TABS.map(tab => {
        const isActive = selectedStatus === tab.value

        return (
          <TouchableOpacity
            key={tab.value}
            style={[styles.tab, isActive && styles.activeTab]}
            activeOpacity={0.8}
            onPress={() => onChange(tab.value)}
          >
            <AppText
              title={tab.label}
              style={[
                styles.tabText,
                isActive ? styles.activeText : styles.inactiveText,
              ]}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2', 
    borderRadius: 10,
    padding: 4,
    marginVertical: 14,
  },
  tab: {
    flex: 1,
    paddingVertical: h(0.4),
    borderRadius: 6,
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
