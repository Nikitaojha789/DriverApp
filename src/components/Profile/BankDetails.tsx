import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AppText } from '../AppHeading'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { colors } from '../../constant/color'
import { BankIcon } from '../../asset/icons/authIcon'
import { SafeAreaView } from 'react-native-safe-area-context'
import { h } from '../../constant/dimension'

export const BankDetails = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center'}}>
            <BankIcon/>
            </View>
      <AppText title='Bank Details' fontFamily={fonts.semiBold} 
      fontSize={fontSize.veryLarge} color={colors.black} style={{textAlign:'center',marginTop:h(1)}}/>
      <AppText title='Add your payment details for earnings.' 
      fontFamily={fonts.regular} 
            fontSize={fontSize.default} color={colors.InactiveButtonColor} style={{textAlign:'center',marginTop:h(1)}}/>
            
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:h(3),
  },

})
