import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { AppButton } from '../button/AppButton'
import { AppText } from '../AppHeading'
import { fontSize } from '../../asset/style/commonStyle'
import { fonts } from '../../asset'
import { colors } from '../../constant/color'
import { DrivingIcon } from '../../asset/icons/authIcon';
import { SafeAreaView } from 'react-native-safe-area-context'
import { h } from '../../constant/dimension'

type Props = {
  onNext: () => void
}
export const DrivingLicense = ({ onNext }: Props) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center',}}>
      <DrivingIcon/>
      </View>
      <View>
      <AppText title='Driving License' fontFamily={fonts.semiBold} 
      fontSize={fontSize.veryLarge} color={colors.black} style={{textAlign:'center',marginTop:h(1)}}/>
       <AppText title='Please Provide your driving license details
to continue.' 
fontFamily={fonts.regular} 
      fontSize={fontSize.default} color={colors.InactiveButtonColor} style={{textAlign:'center',marginTop:h(1)}}/>
      
      <AppButton title="Continue" onPress={onNext} variant='text'/>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:h(2),
  },

})

