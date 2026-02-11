import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constant/color'
import { AppContainer } from '../../components/AppContainer'
import { AppHeader } from '../../components/header/AppHeader'
import { h, w } from '../../constant/dimension'
import { AppButton } from '../../components/AppButton'
import { useNavigation } from '@react-navigation/native'
import { routeNames } from '../../route/route_name'
import { NextIcon, UploadIcon } from '../../asset/icons/HomeIcon'
import { AppText } from '../../components/AppHeading'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { ProfileOptionItem } from '../../components/Home/ProfileOptionItem'
import { UserIcon, VerifiedIcon } from '../../asset/icons/authIcon'
import { ShadowWrapper } from '../../components/ShadowWrapper'


const Documents = () => {
  const navigation = useNavigation<any>();

  const onSave = () => {
    console.log('Form is valid');
    navigation.navigate(routeNames.ProfileScreen)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <AppContainer>
          <AppHeader title='Documents' />
          <View>
            <ShadowWrapper>
        
                <ProfileOptionItem
                  icon={<VerifiedIcon />}
                  title="Driver's License"
                  subtitle="Uploaded Jan 5, 2026"
                  subText='Upload'
                  rightIcon={<UploadIcon />}
                  bgColor={'#2ecc7023'}
                  // rightGap={w(2)}
                  gapHorizontal={h(1)}
                  badgeIcon
                  badge='Verfied'
                />

            </ShadowWrapper>
            <ShadowWrapper>

                <ProfileOptionItem
                  icon={<VerifiedIcon />}
                  title="Vehicle Registration"
                  subtitle="Uploaded Jan 5, 2026"
                  subText='Upload'
                  rightIcon={<UploadIcon />}
                  bgColor={'#2ecc7023'}
                  // rightGap={w(2)}
                  gapHorizontal={h(1)}
                  badgeIcon
                  badge='Verfied'
                />

            </ShadowWrapper>
            <ShadowWrapper>
   
                <ProfileOptionItem
                  icon={<VerifiedIcon />}
                  title="Insurance"
                  subtitle="Uploaded Jan 5, 2026"
                  subText='Upload'
                  rightIcon={<UploadIcon />}
                  bgColor={'#2ecc7023'}
                  // rightGap={w(2)}
                  gapHorizontal={h(1)}
                  badgeIcon
                  badge='Verfied'
                />

            </ShadowWrapper>
          </View>
          <TouchableOpacity style={styles.outlineBtn}>
            <UploadIcon />
            <AppText style={styles.outlineText} title='Upload New Documents' />
          </TouchableOpacity>
          <View style={{ top: h(33) }}>
            <AppButton title='Save Changes' bgColor={colors.purple} onPress={onSave} />
          </View>
        </AppContainer>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Documents

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingTop: h(2),
    paddingBottom: h(20),
  },
  outlineBtn: {
    // flex: 1,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.Grey,
    paddingVertical: h(1.5),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: w(2),
    top: h(6),
  },
  outlineText: {
    color: colors.textColor,
    fontFamily: fonts.semiBold,
    fontSize: fontSize.normal,
  },
})