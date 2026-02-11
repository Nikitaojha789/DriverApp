import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AppText } from '../AppHeading'
import { h, w } from '../../constant/dimension'
import { colors } from '../../constant/color'
import { fontSize } from '../../asset/style/commonStyle'
import { fonts } from '../../asset';
import { OtpInput } from '../OtpInput'
import { ShadowWrapper } from '../ShadowWrapper'
import { AppBtn } from '../button/AppBtn'
import { AppButton } from '../AppButton'
import { useNavigation } from '@react-navigation/native'
import { routeNames } from '../../route/route_name'

interface ProofOfDeliveryProps {
    onPress?: () => void,
}

export const ProofOfDelivery = ({ onPress }: ProofOfDeliveryProps) => {
    const [otp, setOtp] = useState('');
    const [isOtpComplete, setIsOtpComplete] = useState(false);
const navigation = useNavigation<any>();

const onButtonPress = () => {
  navigation.navigate(routeNames.OrderDelivered);
  console.log("Button pressed!!");
};

    return (
        <View style={styles.bottomSheet}>
            <View style={{
                height: h(0.5),
                width: 120,
                backgroundColor: '#E6E6E6',
                borderRadius: 4,
                alignSelf: 'center',
                marginVertical: 8,
            }} />
            <ShadowWrapper>
                <View style={styles.otpContainer}>
                    <AppText title='Proof of Delivery' fontFamily={fonts.semiBold} fontSize={fontSize.largeMedium} />
                    <AppText title='OTP Verification' fontFamily={fonts.medium} fontSize={fontSize.default} />
                    <View style={{ marginBottom: h(2) }}>
                        <OtpInput onOtpChange={(value, complete) => {
                            setOtp(value);
                            setIsOtpComplete(complete);
                        }} />
                    </View>
                    <View style={styles.btnContainer}>
                        <AppBtn title='Confirm otp' color={colors.white} backgroundColor={colors.purple} fontfamily={fonts.regular} fontsize={fontSize.normal} width={120} borderRadius={12} />
                        <AppBtn title='Resent OTP' color={'#1E88E5'} variant='text' fontfamily={fonts.regular} fontsize={fontSize.normal} width={110} />
                    </View>
                </View>
            </ShadowWrapper>
            <View style={{ marginBottom: 10 }}>
                <AppButton onPress={onButtonPress} bgColor={colors.purple}
                    title='Mark as Arrived' disabled={!isOtpComplete} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingBottom: h(4),
        backgroundColor: colors.white,
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        borderWidth: 0,
        shadowOffset: { width: 0, height: 0 },
        borderColor: colors.InactiveButtonColor,
        shadowColor: '#000000af',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
        overflow: "visible"
    },
    otpContainer: {
        borderRadius: 8,
        margin: 16,
        backgroundColor: colors.white,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    primaryBtn: {
        flex: 1,
        backgroundColor: colors.purple,
        paddingVertical: h(1.5),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryText: {
        color: colors.white,
        fontFamily: fonts.regular,
        fontSize: fontSize.default,
    },
})