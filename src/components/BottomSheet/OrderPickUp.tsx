import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AppText } from '../AppHeading'
import { DestinationIcon, TelephoneIcon } from '../../asset/icons/HomeIcon'
import { h, w } from '../../constant/dimension'
import { colors } from '../../constant/color'
import { fontSize } from '../../asset/style/commonStyle'
import { fonts } from '../../asset';

interface OderPickUpProps{
onPress?:() => void,
}

const OrderPickUp = ({onPress}:OderPickUpProps) => {
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
            <AppText style={styles.sectionLabel} title='Destination' />

            <View style={styles.destinationRow}>
                <View>
                    <AppText style={styles.destination} title='Hollywoodbets' />
                    <AppText style={styles.address} title=' 123 - Wall Street, Downtown' />

                </View>

                <TouchableOpacity style={styles.callBtn}>
                    <TelephoneIcon />
                    <AppText style={styles.callText} title='Call' />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.outlineBtn}>
                    <DestinationIcon />
                    <AppText style={styles.outlineText} title='Start Navigation' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.primaryBtn} onPress={onPress}>
                    <AppText style={styles.primaryText} title='Mark as Arrived' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderPickUp

const styles = StyleSheet.create({
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingBottom: h(8),
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
    },
    sectionLabel: {
        color: colors.InactiveButtonColor,
        fontSize: fontSize.normal,
        fontFamily: fonts.regular,
    },
    destinationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: h(1),
    },
    destination: {
        fontFamily: fonts.bold,
        fontSize: fontSize.veryLarge,
    },
    address: {
        color: colors.InactiveButtonColor,
        marginTop: 2,
        fontFamily: fonts.regular,
        fontSize: fontSize.normal,
    },

    callBtn: {
        backgroundColor: '#E8F5E9',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        gap: w(1)
    },
    callText: {
        color: '#2ECC71',
        fontFamily: fonts.medium,
        fontSize: fontSize.medium,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    buttonRow: {
        flexDirection: 'row',
        gap: w(4),
        marginTop: h(2),
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    outlineBtn: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#4A90E2',
        paddingVertical: h(1.5),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: w(2)
    },
    outlineText: {
        color: '#4A90E2',
        fontFamily: fonts.regular,
        fontSize: fontSize.default,
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