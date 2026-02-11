import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppText } from '../AppHeading'
import { Spacer } from '../Spacer'
import { colors } from '../../constant/color'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { useNavigation } from '@react-navigation/native'
import { routeNames } from '../../route/route_name'
import { ArrowIcon, EarningTabIcon } from '../../asset/icons/HomeIcon'
import { AppButton } from '../AppButton'
import { AppBtn } from '../button/AppBtn'
import { h, w } from '../../constant/dimension'

interface WalletCardProps {
    orderId: string
    dateTime: string
    onPress?: () => void
}

export const WalletCard: React.FC<WalletCardProps> = ({
    orderId,
    dateTime,
    onPress,
}) => {
    const navigation = useNavigation<any>();

    const OnNextPress = () => {
        // navigation.navigate(routeNames.OrderDetails);
        console.log("Button pressed!!");
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <AppText
                        title={orderId}
                        fontSize={fontSize.normal}
                        fontFamily={fonts.regular}
                        color={colors.white}
                        style={{ lineHeight: fontSize.normal + 4 }}
                    />
                    <AppText
                        title={dateTime}
                        fontSize={fontSize.largeDefault}
                        fontFamily={fonts.bold}
                        color={colors.white}
                        style={{ lineHeight: fontSize.normal + 15 }}
                    />
                </View>

                <View style={styles.iconView}>
                    <EarningTabIcon color={colors.purple} />
                </View>
            </View>
            <Spacer />
             <TouchableOpacity style={styles.outlineBtn}>
                                <ArrowIcon />
                                <AppText style={styles.outlineText} title='Withdraw Earnings' />
                            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.purple,
        padding: 20,
        borderRadius: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    iconView: {
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 10,
    },
    outlineBtn: {
            flex: 1,
            borderWidth: 1,
            backgroundColor: colors.white,
            paddingVertical: h(1.5),
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: w(2)
        },
        outlineText: {
        color: colors.purple,
        fontFamily: fonts.semiBold,
        fontSize: fontSize.normal,
    },
})