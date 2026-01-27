import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { AppText } from '../AppHeading'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { colors } from '../../constant/color'
import { CalendarIcon, CardIcon, VehicalIcon } from '../../asset/icons/authIcon'
import { SafeAreaView } from 'react-native-safe-area-context'
import { h, w } from '../../constant/dimension'
import { CameraInput } from '../CameraInput'
import { AppInput } from '../AppInput'
import { AppButton } from '../AppButton'

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
                   fontSize={fontSize.default} color={colors.InactiveButtonColor} style={{textAlign:'center'}}/>
      <View  style={styles.cardStyle}>
                    <AppText title='Registration Certificate' fontFamily={fonts.semiBold} 
                    fontSize={fontSize.largeMedium} color={colors.black} />
                    <View style={{gap:h(1.5)}}>
            <AppInput
            placeholder='Enter License Number'
            isBorder={false}
            backgroundColor='#e6e6e642'
      textAlignVertical='center'
            style={{
          height: 40,
          alignSelf:'center'
        }}
        leftIcon={<CardIcon/>}
        placeholderTextColor={colors.InactiveButtonColor}
      
            />
             <AppInput
             placeholder='Validity MM/YY'
            isBorder={false}
            backgroundColor='#e6e6e642'
            style={{
          height: 40,
              alignSelf:'center'
        }}
      leftIcon={<CalendarIcon/>}
      placeholderTextColor={colors.InactiveButtonColor}
      />
      <CameraInput title='Front Side of License' titleFontSize={fontSize.normal}
      titleColor={colors.textColor} titleFontFamily={fonts.regular} />
      <CameraInput title='Back Side of License' titleFontSize={fontSize.normal}
      titleColor={colors.textColor} titleFontFamily={fonts.regular} />
          </View>
          </View>
<View  style={styles.cardStyle}>
        
          <AppText title='Insurance Certificate' fontFamily={fonts.semiBold} 
          fontSize={fontSize.largeMedium} color={colors.black} />
                              <View style={{gap:h(1.5)}}>

             <AppInput
            placeholder='Enter License Number'
            isBorder={false}
            backgroundColor='#e6e6e642s'
            style={{
          height: 40,
          alignSelf:'center',
        }}
        leftIcon={<CardIcon/>}
        placeholderTextColor={colors.InactiveButtonColor}
      
            />
             <AppInput
             placeholder='Validity MM/YY'
            isBorder={false}
            backgroundColor='#e6e6e642'
            style={{
          height: 40,
              alignSelf:'center'
        }}
      leftIcon={<CalendarIcon/>}
      placeholderTextColor={colors.InactiveButtonColor}
      />
      <CameraInput title='Front Side of License' titleFontSize={fontSize.normal}
      titleColor={colors.textColor} titleFontFamily={fonts.regular} />
      <CameraInput title='Back Side of License' titleFontSize={fontSize.normal}
      titleColor={colors.textColor} titleFontFamily={fonts.regular} />
          </View>
          </View>

       <View  style={styles.bottomCardStyle}>
        <AppText title='Documents must be valid and not expired' color='#1E88E5' 
        fontFamily={fonts.regular} fontSize={fontSize.normal}
        />
      </View>
      
      <View style={styles.btnContainer}> 
            <AppButton title="Continue" onPress={onNext} bgColor={colors.purple} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:h(3),
  },

cardStyle : {
  backgroundColor: '#fff',
  borderRadius: 16,
gap:h(1.5),
  // Android
  // elevation: 2.2,
paddingHorizontal:w(3.5),
paddingVertical:h(1.2),
  // iOS
  shadowColor: '#898686',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 8,
  marginTop:h(2.5),
  borderColor: '#e0e0e069',
borderWidth: 0.8,
},
heading:{
  marginBottom:10,
},
bottomCardStyle:{
      marginTop:h(2),
  backgroundColor: '#1e88e517',
  borderRadius: 16,
gap:h(1.5),
  // Android
  // elevation: 2.2,
padding:12,
  // iOS
  shadowColor: '#898686',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 8,
},
btnContainer:{
    marginTop:h(2),
},

})