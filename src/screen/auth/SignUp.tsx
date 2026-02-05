import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import { AppContainer } from '../../components/AppContainer';
import { AppNavigation } from '../../route/app_navigation';
import { AppImage } from '../../components/AppImage';
import { AppText, AppTxt } from '../../components/AppHeading';
import { fontSize } from '../../asset/style/commonStyle';
import { fonts } from '../../asset';
import { AppInput } from '../../components/AppInput';
import { colors } from '../../constant/color';
import { Spacer } from '../../components/Spacer';
import { AppButton } from '../../components/AppButton';
import { TouchableButton } from '../../components/button/TouchableButton';
import { h, w } from '../../constant/dimension';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    fullName: '',
    mobileNumber: '',
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {
      email: '',
      fullName: '',
      mobileNumber: '',
    };

    // Full Name validation
    if (!fullName) {
      newErrors.fullName = 'Full name is required';
    } else if (fullName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Mobile Number validation
    if (!mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be 10 digits';
    }

    setErrors(newErrors);

    if (
    newErrors.fullName ||
    newErrors.email ||
    newErrors.mobileNumber
  ) {
    return;
  }

  AppNavigation.navigateToProfileRegistration();
  };


  // const login = async () => {
  //   if (!validateForm()) return;

  //   try {
  //     setLoading(true);
  //     const form = {
  //       email,
  //       password,
  //       type: 'user',
  //       deviceId: deviceId || '0101010101',
  //     };

  //     const res = await loginUserByApi({form});
  //     Helper.log('🚀 ~ login ~ res:', res);

  //     if (res.detail && (res.detail as any).user) {
  //       const user = (res.detail as any).user;

  //       // First check: Is user verified?
  //       if (!user.isVerified) {
  //         Helper.showToast(
  //           'You are not a verified user. Please contact admin.',
  //         );
  //         return;
  //       }
  //     }
  //   } catch (error) {
  //     Helper.log('Login failed:', error);
  //     Helper.showToast('Login failed. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <AppContainer>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <View style={{ marginTop: 10, }}>
            <View >
              <AppImage
                url={require('../../asset/images/hollywoodBets.png')}
                containerStyle={styles.logo}
                resizeMode="contain"
              />
            </View>
          </View>
          <View >
            <View style={styles.header}>
              <AppText
                title='Create Account'
                color='#3E1F63'
                fontSize={fontSize.extraLarge}
                fontFamily={fonts.bold}
              />
              <AppText
                title='Sign up to start delivering'
                color='#3E1F63'
                fontSize={fontSize.default}
                fontFamily={fonts.regular}
                center={true}
              />
            </View>
            <View style={styles.formCard}>
              <AppInput
                label="Full name"
                placeholder="Enter Name"
                keyboardType='ascii-capable'
                autoCapitalize="none"
                value={fullName}
                onChangeText={text => {
                  setFullName(text);
                  if (errors.fullName) setErrors({ ...errors, fullName: '' });
                }}
                backgroundColor={colors.lightGrey}
                textColor={colors.textColor}
                placeholderTextColor={colors.InactiveButtonColor}
                error={errors.fullName}
                isBorder={false}
              />

              <AppInput
                label="Email Address"
                placeholder="driver@gmail.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={text => {
                  setEmail(text);
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                backgroundColor={colors.lightGrey}
                textColor={colors.textColor}
                placeholderTextColor={colors.InactiveButtonColor}
                error={errors.email}
                isBorder={false}
              />

              <AppInput
                label="Mobile number"
                placeholder="+27 82 123 4567"
                keyboardType='phone-pad'
                value={mobileNumber}
                onChangeText={text => {
                  setMobileNumber(text);
                  if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: '' });
                }}
                backgroundColor={colors.lightGrey}
                textColor={colors.textColor}
                placeholderTextColor={colors.InactiveButtonColor}
                error={errors.mobileNumber}
                isBorder={false}
              />
            </View>
            <Spacer size={16} />
            <View>
              <AppButton title='Next' bgColor='#5C2E92' textColor={colors.white} onPress={() => validateForm()}/>
            </View>
            <Spacer size={25} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 4,
              }}>
              <AppTxt
                title={"Already have an account? "}
                style={styles.prompt}
                center
              />
              <TouchableButton onPress={() =>   AppNavigation.navigateToLoginScreen()}>
                <AppTxt title={'Sign in'} style={styles.cta} center />
              </TouchableButton>
            </View>
            <Spacer size={50} />
            <View style={{marginTop:40,}}>
              <AppText
                title={`By continuing, you agree to our 
   Terms of Service  Privacy Policy  Content Policy.`}
                color={colors.textColor}
                fontSize={fontSize.normal}
                fontFamily={fonts.regular}
                center={true}
              />
            </View>
            </View>
          </View>
      </ScrollView>
    </AppContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    paddingBottom: 28,
    backgroundColor: colors.white,

  },
  header: {
    alignSelf: 'center',
    marginTop: h(3),
  },
  logo: {
    width: w(50),
    height: h(10),
    alignSelf: 'center'
  },
  form: {
    backgroundColor: colors.white,
    marginTop: h(10),
  },
  formCard: {
    paddingBottom: 28,
    paddingTop: 2,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  link: { color: colors.black, fontSize: 14, fontFamily: fonts.medium },
  primaryButton: {
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  primaryButtonText: {
    color: colors.black,
    fontSize: 14,
    fontFamily: fonts.semiBold,
  },
  prompt: {
    color: colors.InactiveButtonColor,
    fontSize: fontSize.normal,
    fontFamily: fonts.regular
  },
  cta: {
    color: colors.purple,
    fontSize: fontSize.default,
    fontFamily: fonts.medium
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 6,
  },
  divider: { flex: 1, height: 1, backgroundColor: colors.deviderBgColor },
  dividerText: { color: colors.offWhite, fontSize: 12 },
  socialButton: {
    height: h(5),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.socialbtnBgcolor,
  },
  socialText: { color: colors.black, fontSize: 14 },
  disabledButton: {
    opacity: 0.7,
  },
  splashImage: {
    width: '35%',
    height: '20%',
    backgroundColor: colors.white,
    alignSelf: 'center',
  },
  resetButton: {
    height: h(5),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.resetbtnBgcolor,
    borderWidth: 1,
    borderColor: colors.resetbtnBordercolor,
  },
  resetButtonText: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.medium,
  },



});