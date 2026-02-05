import { View, Text } from 'react-native'
import React from 'react'
import { StatCards } from './StatCards'
import { DeliveryIcon, EarningTabIcon, RatingIcon } from '../../asset/icons/HomeIcon'
import { LocationIcon } from '../../asset/icons/icons'
import { h } from '../../constant/dimension'

export const NewOrderDetail = () => {
  return (
    <View>
      <View style={{ flexDirection: 'row', gap: 12, marginTop: h(1) }}>
        <StatCards
          isRow
          isCard
          icon={<DeliveryIcon size={20} color="#1E88E5" />}
          value="12"
          label="Deliveries"
          iconBgColor="#1e88e52a"
        />

        <StatCards
          isRow
          isCard
          icon={<EarningTabIcon size={20} color="#2ECC71" />}
          value="R156.5"
          label="Earnings"
          iconBgColor="rgba(46, 204, 112, 0.09)"
        />
      </View>

        <StatCards
          // isRow
          isCard
          icon={<EarningTabIcon size={20} color="#D32F2F" />}
          value="45.8 km"
          label="Distance"
          iconBgColor="#d32f2f1f"
        />
    </View>
  )
}
