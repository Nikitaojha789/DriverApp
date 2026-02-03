import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AppText } from '../AppHeading'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { colors } from '../../constant/color'
import { BankIcon } from '../../asset/icons/authIcon'
import { h, w } from '../../constant/dimension'
import { AppInput } from '../AppInput'
import { AppButton } from '../AppButton'
import { AppNavigation } from '../../route/app_navigation'
import { setAppStatus } from '../../store/action'
import { appStatusTypes } from '../../constant/type'

export const BankDetails = () => {
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankCode, setBankCode] = useState('');
  const accountNumberRegex = /^\d{6,11}$/;
  const bankCodeRegex = /^\d{5,6}$/;
  const [errors, setErrors] = useState({
    accountName: '',
    accountNumber: '',
    bankCode: '',
  });

  const validateAccountName = (name: string) => {
    const trimmed = name.trim();

    if (!trimmed) return 'Account holder name is required';
    if (trimmed.length < 3) return 'Name must be at least 3 characters';
    if (trimmed.length > 50) return 'Name is too long';

    for (const char of trimmed) {
      if (
        !(
          (char >= 'A' && char <= 'Z') ||
          (char >= 'a' && char <= 'z') ||
          char === ' ' ||
          char === '.' ||
          char === '-' ||
          char === "'"
        )
      ) {
        return 'Name contains invalid characters';
      }
    }

    return '';
  };


  const validateAccountNumber = (number: string) => {
    if (!number.trim()) return 'Account number is required';
    if (!accountNumberRegex.test(number)) return 'Enter a valid account number';
    return '';
  };

  const validateBankCode = (code: string) => {
    if (!code.trim()) return 'Bank code is required';
    if (!bankCodeRegex.test(code)) return 'Enter a valid bank code';
    return '';
  };


  const validateForm = () => {
    const nameError = validateAccountName(accountName);
    const numberError = validateAccountNumber(accountNumber);
    const bankCodeError = validateBankCode(bankCode);

    setErrors({
      accountName: nameError,
      accountNumber: numberError,
      bankCode: bankCodeError,
    });

    if (nameError || numberError || bankCodeError) {
      return;
    }

    // setAppStatus(appStatusTypes.home);
    AppNavigation.navigateToAccountVerification();
  };


  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <BankIcon />
      </View>
      <AppText title='Bank Details' fontFamily={fonts.semiBold}
        fontSize={fontSize.veryLarge} color={colors.black} style={{ textAlign: 'center', marginTop: h(1) }} />
      <AppText title='Add your payment details for earnings.'
        fontFamily={fonts.regular}
        fontSize={fontSize.default} color={colors.InactiveButtonColor} style={{ textAlign: 'center', marginTop: h(1) }} />
      <View style={styles.cardStyle}>
        <View style={{ gap: h(0.2) }}>
          <AppInput
            label='Account Holder Name'
            placeholder='Enter Name'
            isBorder={false}
            backgroundColor='#e6e6e642'
            textAlignVertical='center'
            style={{
              height: 40,
              alignSelf: 'center'
            }}
            placeholderTextColor={colors.InactiveButtonColor}
            value={accountName}
            onChangeText={(text) => {
              setAccountName(text);
              setErrors(prev => ({ ...prev, accountName: '' }));
            }}
            keyboardType="default"
            autoCapitalize="words"
            maxLength={50}
            error={errors.accountName}


          />
          <AppInput
            label='Account Number'
            placeholder='Enter Account Number'
            isBorder={false}
            backgroundColor='#e6e6e642'
            style={{
              height: 40,
              alignSelf: 'center'
            }}
            placeholderTextColor={colors.InactiveButtonColor}
            keyboardType="numeric"
            maxLength={11}
            value={accountNumber}
            onChangeText={(text) => {
              setAccountNumber(text);
              setErrors(prev => ({ ...prev, accountNumber: '' }));
            }}
            error={errors.accountNumber}
          />
          <AppInput
            label='Bank Code'
            placeholder='Enter Bank Code'
            isBorder={false}
            backgroundColor='#e6e6e642'
            style={{
              height: 40,
              alignSelf: 'center'
            }}
            placeholderTextColor={colors.InactiveButtonColor}
            keyboardType="numeric"
            maxLength={6}
            error={errors.bankCode}
            value={bankCode}
            onChangeText={(text) => {
              setBankCode(text);
              setErrors(prev => ({ ...prev, bankCode: '' }));
            }}
          />
        </View>

      </View>

      <View style={styles.bottomCardStyle}>
        <AppText title='Your earnings will be transferred to this account weekly' color='#2ECC71'
          fontFamily={fonts.regular} fontSize={fontSize.normal}
        />
      </View>

      <View style={styles.btnContainer}>
        <AppButton title="Continue" bgColor={colors.purple}
          onPress={validateForm}

        />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: h(3),
  },
  cardStyle: {
    backgroundColor: '#fff',
    borderRadius: 16,
    // Android
    // elevation: 2.2,
    paddingHorizontal: w(3.5),
    paddingVertical: h(0.8),
    shadowColor: '#898686',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    borderColor: '#e0e0e069',
    borderWidth: 0.8,
  },
  bottomCardStyle: {
    marginTop: h(2),
    backgroundColor: '#2ecc701a',
    borderRadius: 16,
    // Android
    // elevation: 2.2,
    padding: 12,
    // iOS
    shadowColor: '#898686',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  btnContainer: {
    marginTop: h(8),
  },

})
