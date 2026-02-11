import { View, Text } from 'react-native'
import React from 'react'
import { PayOutCard } from './PayOutCard'
import { CalendarIcon } from '../../asset/icons/authIcon'
import { Divider } from '../Divider'
import { colors } from '../../constant/color'
import { AppText } from '../AppHeading'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'

const PayOutSummery = () => {
  return (
    <View style={{backgroundColor:colors.white,padding:10,borderRadius:20}}>
        <View>
            <AppText title='Payout Summery' fontFamily={fonts.semiBold} fontSize={fontSize.largeMedium}/>
        </View>
      <PayOutCard 
      icon={<CalendarIcon/>}
      value='Last Payout'
      label='Jan 8, 2026'
      Payment='$450.00'
      />
      <Divider isLight bgColor={colors.Grey}/>
      <PayOutCard 
      icon={<CalendarIcon/>}
      value='Next Payout'
      label='Jan 15, 2026'
      Payment='$350.00'
      paymentColor={colors.primary}
      />
    </View>
  )
}

export default PayOutSummery