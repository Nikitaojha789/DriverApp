import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AppText } from '../AppHeading'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { colors } from '../../constant/color'
import { CalendarIcon, CardIcon, VehicalIcon } from '../../asset/icons/authIcon'
import { h, w } from '../../constant/dimension'
import { CameraInput } from '../CameraInput'
import { AppInput } from '../AppInput'
import { AppButton } from '../AppButton'

type Props = {
    onNext: () => void
}


export const VehicalDocuments = ({ onNext }: Props) => {
    const [registrationImageName, setRegistrationImageName] = useState<string | null>(null);
        const [insuranceImageName, setInsuranceImageName] = useState<string | null>(null);
        const [registrationImage, setRegistrationImage] = useState<string | null>(null);
        const [insuranceImage, setInsuranceImage] = useState<string | null>(null);
       const [validity, setValidity] = useState<string>('');
      const [registrationNumber, setRegistrationNumber] = useState<string>('');
            const [insuranceNumber, setInsuranceNumber] = useState<string>('');
            const [registrationValidity, setRegistrationValidity] = useState('');
const [insuranceValidity, setInsuranceValidity] = useState('');

   const [errors, setErrors] = useState({
      registration: '',
      insurance:'',
      validity: '',
      registrationImage:'',
      insuranceImage:'',
    });

    // 12 numeric digits + month and year
const registrationRegex =
  /^([A-Z]{2,3}\s?\d{3,6}|\d{3}\s?[A-Z]{3})\s?(GP|WC|EC|KZN|LP|MP|NW|FS|NC)?$/i;

const insuranceRegex = /^[A-Z0-9\-\/]{6,20}$/i;
  const validityRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

const handleRegistrationChange = (text: string) => {
  setRegistrationNumber(text.toUpperCase());

  if (text.length === 0) {
    setErrors(prev => ({ ...prev, registration: '' }));
    return;
  }

  if (!registrationRegex.test(text)) {
    setErrors(prev => ({ ...prev, registration: 'Enter valid SA registration number' }));
  } else {
    setErrors(prev => ({ ...prev, registration: '' }));
  }
};

const handleInsuranceChange = (text: string) => {
  setInsuranceNumber(text.toUpperCase());

  if (text.length === 0) {
    setErrors(prev => ({ ...prev, insurance: '' }));
    return;
  }

  if (!insuranceRegex.test(text)) {
    setErrors(prev => ({ ...prev, insurance: 'Enter valid insurance number' }));
  } else {
    setErrors(prev => ({ ...prev, insurance: '' }));
  }
};


 const handleValidityChange = (
  text: string,
  type: 'registration' | 'insurance'
) => {
  const cleaned = text.replace(/\D/g, '');
  let formatted = cleaned;

  if (cleaned.length > 2) {
    formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
  }

  if (type === 'registration') {
    setRegistrationValidity(formatted);
  } else {
    setInsuranceValidity(formatted);
  }

  if (formatted.length === 5 && !validityRegex.test(formatted)) {
    setErrors(prev => ({ ...prev, validity: 'Invalid Month (01-12)' }));
  } else {
    setErrors(prev => ({ ...prev, validity: '' }));
  }
};


  const isFormValid =
  registrationRegex.test(registrationNumber) &&
  insuranceRegex.test(insuranceNumber) &&
  validityRegex.test(registrationValidity) &&
  validityRegex.test(insuranceValidity) &&
  registrationImage !== null &&
  insuranceImage !== null;


  const onContinue = () => {
  const registrationValid = registrationRegex.test(registrationNumber);
    const insuranceValid = insuranceRegex.test(insuranceNumber);
  const registrationValidityValid =
  validityRegex.test(registrationValidity);

const insuranceValidityValid =
  validityRegex.test(insuranceValidity);

  const registrationImageValid = registrationImage !== null;
  const insuranceImageValid = insuranceImage !== null;

  setErrors({
  registration: registrationValid ? '' : 'Enter valid SA registration number',
  insurance: insuranceValid ? '' : 'Enter valid insurance number',
  validity:
    registrationValidityValid && insuranceValidityValid
      ? ''
      : 'Enter valid date (MM/YY)',
  registrationImage: registrationImageValid ? '' : 'registration image is required',
  insuranceImage: insuranceImageValid ? '' : 'insurance image is required',
});


  if (
  registrationValid &&
  insuranceValid &&
  registrationValidityValid &&
  insuranceValidityValid &&
  registrationImageValid &&
  insuranceImageValid
) {
  onNext();
}
};

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
            placeholder='Enter Regestration Number'
            isBorder={false}
            backgroundColor='#e6e6e642'
      textAlignVertical='center'
            style={{
          height: 40,
          alignSelf:'center'
        }}
        leftIcon={<CardIcon/>}
        placeholderTextColor={colors.InactiveButtonColor}
        value={registrationNumber}
                    onChangeText={handleRegistrationChange}
                    keyboardType="default"
autoCapitalize="characters"
maxLength={10}

              // Pass the error state here
              error={errors.registration} 
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
value={registrationValidity}
onChangeText={(text) =>
  handleValidityChange(text, 'registration')
}
  keyboardType="numeric"
  maxLength={5}//2+1+2
  error={errors.validity} 
      />
      <CameraInput
        title="Upload Regestration Certificate"
        fileName={registrationImageName}
        error={errors.registrationImage}
        onImagePicked={({ uri, fileName }: any) => {
          setRegistrationImage(uri);                
          setRegistrationImageName(fileName);
setErrors(prev => ({ ...prev, registrationImage: '' }));
        }}
      />
          </View>
          </View>
<View  style={styles.cardStyle}>
        
          <AppText title='Insurance Certificate' fontFamily={fonts.semiBold} 
          fontSize={fontSize.largeMedium} color={colors.black} />
                              <View style={{gap:h(1.5)}}>

             <AppInput
            placeholder='Enter Insurance Number'
            isBorder={false}
            backgroundColor='#e6e6e642'
            style={{
          height: 40,
          alignSelf:'center',
        }}
        leftIcon={<CardIcon/>}
        placeholderTextColor={colors.InactiveButtonColor}
      value={insuranceNumber}
              onChangeText={handleInsuranceChange}
keyboardType="default"
maxLength={20}
              // Pass the error state here
              error={errors.insurance} 
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
              value={insuranceValidity}
onChangeText={(text) =>
  handleValidityChange(text, 'insurance')
}

               keyboardType="numeric"
               maxLength={5}//2+1+2
               error={errors.validity} 
             />
      <CameraInput
        title="Upload Insurance Certificate"
        fileName={insuranceImageName}
        error={errors.insuranceImage}
        onImagePicked={({ uri, fileName }: any) => {
          setInsuranceImage(uri);                
          setInsuranceImageName(fileName);
setErrors(prev => ({ ...prev, insuranceImage: '' }));
        }}
      />
          </View>
          </View>

       <View  style={styles.bottomCardStyle}>
        <AppText title='Documents must be valid and not expired' color='#1E88E5' 
        fontFamily={fonts.regular} fontSize={fontSize.normal}
        />
      </View>
      
      <View style={styles.btnContainer}> 
            <AppButton title="Continue" onPress={() => {
             onContinue()
            }} bgColor={colors.purple} />
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