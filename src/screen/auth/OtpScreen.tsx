import { View, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { AppNavigation } from '../../route/app_navigation';
import { AppContainer } from '../../components/AppContainer';
import { AppImage } from '../../components/AppImage';
import { AppText } from '../../components/AppHeading';
import { fontSize } from '../../asset/style/commonStyle';
import { fonts } from '../../asset';
import { colors } from '../../constant/color';
import { OtpInput } from '../../components/OtpInput';
import { Spacer } from '../../components/Spacer';
import { AppButton } from '../../components/AppButton';
import { routeNames } from '../../route/route_name';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../../store/actionType';
import { appStatusTypes } from '../../constant/type';
import { setAppStatus } from '../../store/action';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from '../../components/button/BackButton';
import { h } from '../../constant/dimension';


const OtpScreen = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation<any>();
  const handleOtpChange = (value: string) => {
    setOtp(value);
    console.log('OTP:', value);
  };
  const handleVerifyPress = () => {
    if (otp.length === 6) {
      setAppStatus(appStatusTypes.home);
    }

    console.log('Navigating....');
    // AppNavigation.navigateToHomeScreen();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <AppContainer>
            <View style={{marginTop:h(3)}}><BackButton /></View>
            <View style={{marginTop:h(3)}}>
              <AppText
                title="Verify Your Account"
                color="#3E1F63"
                fontSize={fontSize.largeDefault}
                fontFamily={fonts.semiBold}

              />
              <AppText
                title="Enter the code sent to 9876543210"
                color={colors.black}
                fontSize={fontSize.default}
                fontFamily={fonts.regular}
              />
              {/* <AppText
                title="drive@gmail.com"
                color={colors.darkBlack}
                fontSize={fontSize.default}
                fontFamily={fonts.medium}
              /> */}
            </View>

            <View style={{ marginTop: 30 }}>
              <OtpInput
                otpLength={6}
                onOtpChange={handleOtpChange}
                filledBackgroundColor={colors.purple}
              />
            </View>

            <View
              style={{
                marginTop: 28,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <AppText
                title="Didn't receive the code? "
                color={colors.textColor}
                fontSize={fontSize.normal}
                fontFamily={fonts.regular}
              />
              <AppText
                title="Resend in 28s"
                color={colors.InactiveButtonColor}
                fontSize={fontSize.normal}
                fontFamily={fonts.regular}
              />
            </View>

            <Spacer size={20} />

            <AppButton
              title="Verify"
              bgColor="#5C2E92"
              textColor={colors.white}
              onPress={handleVerifyPress}
              height={52}
            />

            <Spacer size={25} />

          </AppContainer>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};


export default OtpScreen

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    paddingBottom: 28,
    backgroundColor: colors.white,
  },
  backButton: {
    marginTop: 50,
    paddingVertical: 20,
  },
  backText: {
    fontSize: 16,
    color: '#5C2E92',
    fontWeight: '500',
  },
  imageContainer: {
    width: 24,
    height: 24,
  },
  heading: {
    paddingHorizontal: 20,
  }
});
