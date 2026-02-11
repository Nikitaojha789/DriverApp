import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constant/color'
import { AppContainer } from '../../components/AppContainer'
import { AppHeader } from '../../components/header/AppHeader'
import { ProfileImage } from '../../asset/icons/HomeIcon'
import { h, w } from '../../constant/dimension'
import { CameraIcon } from '../../asset/icons/authIcon'
import { AppInput } from '../../components/AppInput'
import { Validator } from '../../helper/Validator'
import { AppButton } from '../../components/AppButton'
import { useNavigation } from '@react-navigation/native'
import { routeNames } from '../../route/route_name'

const EditProfile = () => {
   const navigation = useNavigation<any>();

  const [form, setForm] = useState({
    name: '',
    // phone: '',
    email: '',
    address: '',
  })

  const [errors, setErrors] = useState<any>({})
  const validateForm = () => {
    let newErrors: any = {}

    // Full Name
    if (!Validator.validateName(form.name)) {
      newErrors.name = 'Enter a valid name'
    } else if (!Validator.validateNameLength(form.name)) {
      newErrors.name = 'Name must be under 100 characters'
    }

    // Phone
    // if (!Validator.validateNumber(form.phone)) {
    //   newErrors.phone = 'Phone must contain only numbers'
    // } else if (!Validator.validateMobileNumber(form.phone)) {
    //   newErrors.phone = 'Phone number must be 8 digits'
    // }

    // Email
    if (!Validator.validateEmail(form.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    // Address (manual validation)
    if (!form.address.trim()) {
      newErrors.address = 'Address is required'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const onSave = () => {
    if (validateForm()) {
      console.log('Form is valid', form);
       navigation.navigate(routeNames.ProfileScreen)}
    }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
                contentContainerStyle={styles.scroll}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
              >
      <AppContainer>
        <AppHeader title='Edit Profile' />
        <View>
          <View style={styles.ProfileWrapper}>
            <ProfileImage />
            <View style={styles.cameraView}>
              <CameraIcon size={16} color={colors.white} strokeColor={colors.white} />
            </View>
          </View>
          <AppInput
            isBorder={false}
            backgroundColor={colors.lightGrey}
            label='Full Name'
            placeholder='Jack Sparrow'
              value={form.name}
  onChangeText={(text) =>
    setForm({ ...form, name: text })
  }
  error={errors.name}

          />
          <AppInput
            isBorder={false}
            // backgroundColor={colors.lightGrey}
            label='Phone Number'
            placeholder=' +27 82 123 4567'
            keyboardType="number-pad"
             editable={false}
            // value={form.phone}
            // onChangeText={(text) =>
            //   setForm({ ...form, phone: text })
            // }
            // error={errors.phone}
          />
          <AppInput
            isBorder={false}
            backgroundColor={colors.lightGrey}
            label='Email Address'
            placeholder='jack@gmail.com'
            value={form.email}
            onChangeText={(text) =>
              setForm({ ...form, email: text })
            }
            error={errors.email}
          />
          <AppInput
            isBorder={false}
            backgroundColor={colors.lightGrey}
            label='Home Address'
            placeholder='123 Driver St, City, State 12345'
            isDescription={true}
            maxHeight={90}
            // textStyle={{paddingTop:8}}
            value={form.address}
            onChangeText={(text) =>
              setForm({ ...form, address: text })
            }
            error={errors.address}
          />
          <AppInput
            isBorder={false}
            // backgroundColor={colors.lightGrey}
            label='Member Since'
            placeholder='January 20258'
            editable={false}
          />

        </View>
        <View style={{top:h(8)}}>
        <AppButton title='Save Changes' bgColor={colors.purple} onPress={onSave}/>
        </View>
      </AppContainer>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
   scroll: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingTop: h(2),
    paddingBottom:h(20),
  },
  ProfileWrapper: {
    alignItems: 'center',
    marginTop: h(1.5),
  },
  cameraView: {
    backgroundColor: colors.purple,
    padding: 6,
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    marginLeft: w(14)
    // right: w(),
    // width: 32,
    // height: 32,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})