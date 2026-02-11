import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AppText } from '../AppHeading'
import { colors } from '../../constant/color'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { h } from '../../constant/dimension'
import { SummaryCard } from './SummaryCard'
import { DeliveryIcon, DistanceIcon, EarningTabIcon, RatingIcon } from '../../asset/icons/HomeIcon'

export const PerformanceSummary = () => {
  return (
    <View style={styles.container}>
      <SummaryCard
        icon={<EarningTabIcon color={colors.primary}/>}
        iconBg="#EAF7EE"
        value="$1245.50"
        label="Total Earnings"
      />

      <SummaryCard
        icon={<DeliveryIcon color={colors.status}/>}
        iconBg="#1e88e52d"
        value="87"
        label="Deliveries"
      />

      <SummaryCard
        icon={<RatingIcon />}
        iconBg="#FFF5E5"
        value="4.8"
        label="Avg. Rating"
      />

      <SummaryCard
        icon={<DistanceIcon color={colors.purple}/>}
        iconBg="#F2ECFF"
        value="$14.32"
        label="Per Delivery"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: h(2),
  },
  
})
