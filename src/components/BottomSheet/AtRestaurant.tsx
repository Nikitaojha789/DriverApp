import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../constant/color'
import { fontSize } from '../../asset/style/commonStyle'
import { fonts } from '../../asset'
import { DestinationIcon, TelephoneIcon } from '../../asset/icons/HomeIcon'
import { AppText } from '../AppHeading'
import { h, w } from '../../constant/dimension'

interface OrderPickUpProps{
onPress?:() => void,
}

const AtRestaurant = ({onPress}:OrderPickUpProps) => {
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

            <View style={styles.destinationRow}>
                <View>
                    <AppText style={styles.destination} title='#8834' />
                    <AppText style={styles.address} title='Order Number' />
                </View>

                <TouchableOpacity style={styles.PickUpBtn}>
                    {/* <TelephoneIcon/> */}
                    <AppText style={styles.callText} title='Picking Up' />
                </TouchableOpacity>
            </View>

            <View style={styles.CustomerName}>
                <AppText style={styles.address} title='Customer' />
                <AppText style={styles.destination} title='Michael' />
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.outlineBtn}>
                    {/* <DestinationIcon /> */}
                    <AppText style={styles.outlineText} title='Report an Issue' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.primaryBtn}>
                    <AppText style={styles.primaryText} title='Mark as Pichup' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AtRestaurant

const styles = StyleSheet.create({
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: h(4),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.20,
        shadowRadius: 8,
        elevation: 1,
        zIndex: 20,
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
    CustomerName: {
        // justifyContent: 'space-between',
        // alignItems: 'center',
        marginTop: h(2),
        borderWidth: 1,
        borderColor: colors.Grey,
        borderRadius: 10,
        paddingHorizontal: w(4),
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

    PickUpBtn: {
        backgroundColor: '#f5a52319',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        gap: w(1)
    },
    callText: {
        color: '#F5A623',
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
        // borderWidth: 1,
        borderColor: colors.purple,
        paddingVertical: h(1.5),
        // borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    outlineText: {
        color: colors.purple,
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