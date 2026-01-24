import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { AppButton } from '../button/AppButton'
import { AppText } from '../AppHeading'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { colors } from '../../constant/color'
import { VehicalIcon } from '../../asset/icons/authIcon'
import { SafeAreaView } from 'react-native-safe-area-context'
import { h } from '../../constant/dimension'

type Props = {
    onNext: () => void
}


export const VehicalDocuments = ({ onNext }: Props) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center'}}>
            <VehicalIcon/>
            </View>
            <AppText title='Vehical Documents' fontFamily={fonts.semiBold} fontSize={fontSize.veryLarge}
             color={colors.black} style={{textAlign:'center',marginTop:h(1)}}/>
             <AppText title='Upload your Vehicle Documents.' 
             fontFamily={fonts.regular} 
                   fontSize={fontSize.default} color={colors.InactiveButtonColor} style={{textAlign:'center',marginTop:h(1)}}/>
                   
      <AppButton title="Continue" onPress={onNext} variant='text'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:h(3),
  },

})