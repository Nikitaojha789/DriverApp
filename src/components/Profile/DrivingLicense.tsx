import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AppText } from '../AppHeading'
import { fontSize } from '../../asset/style/commonStyle'
import { fonts } from '../../asset'
import { colors } from '../../constant/color'
import { CalendarIcon, CardIcon, DrivingIcon } from '../../asset/icons/authIcon';
import { h, w } from '../../constant/dimension'
import { AppInput } from '../AppInput'
import { CameraInput } from '../CameraInput'
import { AppButton } from '../AppButton'

type Props = {
  onNext: () => void
}


export const DrivingLicense = ({ onNext }: Props) => {
  const [frontImage, setFrontImage] = useState<string | null>(null)
const [backImage, setBackImage] = useState<string | null>(null)
    const [validity, setValidity] = useState<string>('');
  const [licenseNumber, setLicenseNumber] = useState<string>('');
  const [errors, setErrors] = useState({
    license: '',
    validity: ''
  });
  
  // 12 numeric digits + month and year
   const licenseRegex = /^\d{12}$/;
  const validityRegex = /^(0[1-9]|1[0-2])\/\d{4}$/;

  const handleTextChange = (text: string) => {
    setLicenseNumber(text);
    if (text.length > 0 && text.length < 12) {
      setErrors(prev => ({ ...prev, license: 'License number must be 12 digits' }));
    } else {
      setErrors(prev => ({ ...prev, license: '' }));
    }
  };

 const handleValidityChange = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    let formatted = cleaned;
    if (cleaned.length > 2) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 6)}`;
    }
    setValidity(formatted);

    if (formatted.length === 7 && !validityRegex.test(formatted)) {
      setErrors(prev => ({ ...prev, validity: 'Invalid Month (01-12)' }));
    } else {
      setErrors(prev => ({ ...prev, validity: '' }));
    }
  };

  const isFormValid = licenseRegex.test(licenseNumber) && validityRegex.test(validity);

  const onContinue = () => {
    if (isFormValid) {
      onNext();
    } else {
      setErrors({
        license: licenseRegex.test(licenseNumber) ? '' : 'Enter valid 12-digit number',
        validity: validityRegex.test(validity) ? '' : 'Enter valid date (MM/YYYY)'
      });
    }
  };

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
      
 <View  style={styles.cardStyle}>
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
                          value={licenseNumber}
              onChangeText={handleTextChange}
              keyboardType="numeric"
              maxLength={12}
              // Pass the error state here
              error={errors.license} 

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
 value={validity}
  onChangeText={handleValidityChange}
  keyboardType="numeric"
  maxLength={7} //2+1+4
  error={errors.validity} 
/>
</View>
<CameraInput
  title="Front Side of License"
  onImagePicked={(uri) => setFrontImage(uri)}
/>

<CameraInput
  title="Back Side of License"
  onImagePicked={(uri) => setBackImage(uri)}
/>
 </View>

 <View  style={styles.bottomCardStyle}>
  <AppText title='Make sure the license number and photo are clearly visible' color='#1E88E5' 
  fontFamily={fonts.regular} fontSize={fontSize.normal}
  />
</View>

<View style={styles.btnContainer}> 
      <AppButton title="Continue" bgColor={colors.purple}  onPress={() => {
             onContinue()
            }} />
</View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:h(2),
  },


 cardStyle : {
  backgroundColor: '#fff',
  borderRadius: 16,
gap:h(1.5),
  // Android
  // elevation: 2.2,
paddingHorizontal:w(3.5),
paddingVertical:h(1.2),  
  shadowColor: '#898686',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 8,
  borderColor: '#e0e0e069',
borderWidth: 0.8,
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

