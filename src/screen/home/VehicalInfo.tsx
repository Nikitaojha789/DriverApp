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
import { fontSize } from '../../asset/style/commonStyle'

const VehicalInfo = () => {
   const navigation = useNavigation<any>();
const vehicleTypes = ['Motorcycle', 'Car', 'Truck', 'Bicycle']
const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    vehicleType: '',
     model: '',
    mfYear: '',
    plateNo: '',
    color: '',
  })

  const [errors, setErrors] = useState<any>({})
  const validateForm = () => {
  let newErrors: any = {}

  if (!form.vehicleType) {
    newErrors.vehicleType = 'Vehicle type is required'
  }

  if (!form.model.trim()) {
    newErrors.model = 'Model is required'
  }

  if (!form.mfYear || form.mfYear.length !== 4) {
    newErrors.mfYear = 'Enter valid year'
  }

  if (!form.plateNo.trim()) {
    newErrors.plateNo = 'License plate is required'
  }

  if (!form.color.trim()) {
    newErrors.color = 'Vehicle color is required'
  }

  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}


  const onSave = () => {
    if (validateForm()) {
      console.log('Form is valid', form);
       navigation.navigate(routeNames.ProfileScreen)}
    }
const handleSelectVehicle = (item: string) => {
    setForm({ ...form, vehicleType: item });
    setOpen(false);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
                contentContainerStyle={styles.scroll}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
              >
      <AppContainer>
        <AppHeader title='Vehical Information' />
        <View>
          {/* <View style={styles.ProfileWrapper}>
            <ProfileImage />
            <View style={styles.cameraView}>
              <CameraIcon size={16} color={colors.white} strokeColor={colors.white} />
            </View>
          </View> */}
          <TouchableOpacity activeOpacity={1} onPress={() => setOpen(true)}>
                <View pointerEvents="none"> 
                    <AppInput
                        isBorder={false}
                        backgroundColor={colors.lightGrey}
                        label='Vehicle Type'
                        placeholder='Select Vehicle'
                        value={form.vehicleType}
                        error={errors.vehicleType}
                        editable={false} 
                        rightIcon={<View style={styles.arrow}><DropDownIcon /></View>}
                    />
                </View>
            </TouchableOpacity>

          <AppInput
            isBorder={false}
            backgroundColor={colors.lightGrey}
            label='Make & Model'
            placeholder='Honda CB500X'
            // keyboardType="number-pad"
            //  editable={false}
            value={form.model}
            onChangeText={(text) =>
              setForm({ ...form, model: text })
            }
            error={errors.model}
          />
          <AppInput
            isBorder={false}
            backgroundColor={colors.lightGrey}
            label='Manufacturing Year'
            placeholder='2003'
            value={form.mfYear}
            onChangeText={(text) =>
              setForm({ ...form, mfYear: text })
            }
            error={errors.mfYear}
          />
          <AppInput
            isBorder={false}
            backgroundColor={colors.lightGrey}
            label='License Plate Number'
            placeholder='ABC-1234'
            // isDescription={true}
            // maxHeight={90}
            // textStyle={{paddingTop:8}}
            value={form.plateNo}
            onChangeText={(text) =>
              setForm({ ...form, plateNo: text })
            }
            error={errors.plateNo}
          />
          <AppInput
            isBorder={false}
            backgroundColor={colors.lightGrey}
            label='Vehicle Color'
            placeholder='Black'
            // editable={false}
            value={form.color}
            onChangeText={(text) =>
              setForm({ ...form, color: text })
            }
            error={errors.color}
          />

        </View>
        <View style={{top:h(25)}}>
        <AppButton title='Save Changes' bgColor={colors.purple} onPress={onSave}/>
        </View>
      </AppContainer>
      </ScrollView>
      <Modal visible={open} transparent animationType="fade">
        <TouchableOpacity 
            style={styles.modalOverlay} 
            onPress={() => setOpen(false)}
        >
          <View style={styles.dropdownMenu}>
            <FlatList
              data={vehicleTypes}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity 
                    style={styles.dropdownItem} 
                    onPress={() => handleSelectVehicle(item)}
                >
                  <AppText title={item} fontSize={fontSize.medium} />
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  )
}

export default VehicalInfo

const styles = StyleSheet.create({
   scroll: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingTop: h(2),
    paddingBottom:h(30),
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
  arrow: {
    fontSize: 16,
    color: colors.Grey,
    paddingRight: 6,
    marginTop:h(1)
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dropdownMenu: {
    width: w(80),
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 10,
    elevation: 5
  },
  dropdownItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lightGrey
  }

})