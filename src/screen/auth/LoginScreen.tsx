import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AppContainer } from '../../components/AppContainer'
import { colors } from '../../constant/color'
import { h, w } from '../../constant/dimension'
import { AppIcon, ShakeIcon } from '../../asset/icons/authIcon'
import { AppText } from '../../components/AppHeading'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { AppInput } from '../../components/AppInput'
import { AppCheckboxButton } from '../../components/AppCheckboxButton'
import { Spacer } from '../../components/Spacer'
import { AppButton } from '../../components/AppButton'
import { useNavigation } from '@react-navigation/native'
import { appStatusTypes } from '../../constant/type'
import { AppNavigation } from '../../route/app_navigation'
import { routeNames } from '../../route/route_name'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
  const [phone, setPhone] = useState('');
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation<any>();
  const [selectedCountry, setSelectedCountry] = useState({
    flag: '🇿🇦',
    code:'91'
  });

  const onContinuePress = () => {
    navigation.navigate(routeNames.OtpScreen);
    console.log("Button pressed!!");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <AppContainer>
          <View>
            <View style={{ alignItems: 'center' }}>
              <AppIcon />
            </View>
            <View style={styles.header}>
              <View style={{ flexDirection: 'row' }}>
                <AppText title='Welcome Back!' color={colors.darkPurple} fontFamily={fonts.semiBold} fontSize={fontSize.xxlarge} style={{ lineHeight: fontSize.xxlarge + h(2.9) }} />
                <ShakeIcon />
              </View>
              <AppText title='Sign in to continue' color={colors.textColor} fontFamily={fonts.regular} fontSize={fontSize.default} style={{
                // marginTop: h(0.5),
                lineHeight: fontSize.default + 3,
                marginBottom: h(3)
              }} />
            </View>
            <View>
              <AppInput
                placeholder="Enter Number"
                keyboardType="phone-pad"
                countryCode={selectedCountry.flag}
                // countryCodePress={() => setShowCountryModal(true)}
                value={phone}
                onChangeText={setPhone}   
                cursorColor={colors.black}
                isBorder
              />
            </View>
            <View style={{ flexDirection: 'row', marginTop: h(2), gap: h(1), alignItems: 'center' }}>
              <AppCheckboxButton
                isSelected={rememberMe}
                onPress={() => setRememberMe(!rememberMe)}
                color={colors.purple}
              />

              <AppText
                title="Remember my login for faster sign-in"
                color={colors.textColor}
                onPress={() => setRememberMe(!rememberMe)}
              />
            </View>
            <Spacer size={16} />
            <View>
              <AppButton title='Continue' bgColor='#5C2E92' textColor={colors.white} onPress={onContinuePress} />
            </View>

            <Spacer size={80} />
            <View style={{ marginTop: h(12),alignItems:'center' }}>
              <AppText
                title={"By continuing, you agree to our"}
                color={colors.textColor}
                fontSize={fontSize.normal}
                fontFamily={fonts.regular}
                center={true}
                style={{lineHeight:fontSize.normal+2}}
              />
              <AppText
                title={'Terms of Service  Privacy Policy  Content Polic'}
                color={colors.textColor}
                fontSize={fontSize.normal}
                fontFamily={fonts.regular}
                center={true}
              />
            </View>
          </View>
        </AppContainer>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    paddingBottom: 28,
    backgroundColor: colors.white,
    marginTop: h(15)
  },
  header: {
    marginTop: h(10),
  },
  logo: {
    width: w(50),
    height: h(10),
    alignSelf: 'center'
  },
  // form: {
  //   backgroundColor: colors.white,
  //   marginTop: h(10),
  // },
})