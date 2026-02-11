import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, FlatList } from 'react-native'
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
import { AppDropdown } from '../../components/AppDropDown'
import { DropDownIcon } from '../../asset/icons/icons'
import { AppText } from '../../components/AppHeading'
import { fontSize, height } from '../../asset/style/commonStyle'
import { fonts } from '../../asset'

const PaymentMethod = () => {
   const navigation = useNavigation<any>();
const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    bankAcc: '',
     holderName: '',
    accNo: '',
    bankName: '',
  })

  const [errors, setErrors] = useState<any>({})
  const validateForm = () => {
  let newErrors: any = {}

  if (!form.bankAcc) {
    newErrors.bankAcc = 'Vehicle type is required'
  }

  if (!form.holderName.trim()) {
    newErrors.holderName = 'Model is required'
  }

  if (!form.accNo || form.accNo.length !== 12) {
    newErrors.accNo = 'Enter valid year'
  }

  if (!form.bankName.trim()) {
    newErrors.bankName = 'License plate is required'
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
        <AppHeader title='Payment Method' />
        <View>          
                    <AppInput
                        isBorder={false}
                        backgroundColor={colors.lightGrey}
                        label='Payment Method'
                        placeholder='Bank Account'
                        value={form.bankAcc}
                        onChangeText={(text) =>
              setForm({ ...form, bankAcc: text })
            }
                        error={errors.bankAcc}
                    />

          <AppInput
            isBorder={false}
            backgroundColor={colors.lightGrey}
            label='Account Holder Name'
            placeholder='Baby John'
            // keyboardType="number-pad"
            //  editable={false}
            value={form.holderName}
            onChangeText={(text) =>
              setForm({ ...form, holderName: text })
            }
            error={errors.holderName}
          />
          <AppInput
            isBorder={false}
            backgroundColor={colors.lightGrey}
            label='Account Number'
            placeholder='**** **** **** 1234'
            value={form.accNo}
            onChangeText={(text) =>
              setForm({ ...form, accNo: text })
            }
            error={errors.accNo}
          />
          <AppInput
            isBorder={false}
            backgroundColor={colors.lightGrey}
            label='Bank Name'
            placeholder='Standard Bank'
            // isDescription={true}
            // maxHeight={90}
            // textStyle={{paddingTop:8}}
            value={form.bankName}
            onChangeText={(text) =>
              setForm({ ...form, bankName: text })
            }
            error={errors.bankName}
            // style={{height:52}}
          />
          <View style={styles.bottomCardStyle}>
          <AppText title='Make sure the license number and photo are clearly visible' color='#1E88E5'
            fontFamily={fonts.regular} fontSize={fontSize.normal}
          />
        </View>
        </View>
        <View style={{top:h(25)}}>
        <AppButton title='Save Changes' bgColor={colors.purple} onPress={onSave}/>
        </View>
      </AppContainer>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PaymentMethod

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
    marginLeft: w(14),
  },
  arrow: {
    fontSize: 16,
    color: colors.Grey,
    paddingRight: 6,
    marginTop:h(1),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownMenu: {
    width: w(80),
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 10,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lightGrey,
  },
 bottomCardStyle: {
    marginTop: h(2),
    backgroundColor: '#1e88e517',
    borderRadius: 16,
    borderWidth:1,
    borderColor:'#1e88e5',
    gap: h(1.5),
    // Android
    // elevation: 2.2,
    padding: 12,
    // iOS
    shadowColor: '#898686',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
})