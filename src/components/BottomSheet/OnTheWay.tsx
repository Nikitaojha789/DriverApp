import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AppText } from '../AppHeading'
import { DestinationIcon, MessageIcon, TelephoneIcon } from '../../asset/icons/HomeIcon'
import { h, w } from '../../constant/dimension'
import { colors } from '../../constant/color'
import { fontSize } from '../../asset/style/commonStyle'
import { fonts } from '../../asset';
import { VerifiedIcon } from '../../asset/icons/authIcon'

interface OnTheWayProps {
    onPress?: () => void,
}

export const OnTheWay = ({ onPress }: OnTheWayProps) => {
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
            <AppText style={styles.sectionLabel} title='Delivering to' />

            <View style={styles.destinationRow}>
                <View>
                    <AppText style={styles.destination} title='Sarah Johnson' />
                    <AppText style={styles.address} title='Order #DL2026-001 • 2 items' />

                </View>
                <View style={styles.Buttons}>
                    <TouchableOpacity style={styles.callBtn}>
                        <TelephoneIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.msgBtn}>
                        <MessageIcon />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.outlineBtn}>
                    <DestinationIcon />
                    <AppText style={styles.outlineText} title='Start Navigation' />
                </TouchableOpacity>
                <View style={styles.TimeKm}>
                    <View style={styles.timeBtn}>
                        <VerifiedIcon size={19}/>
                        <AppText style={styles.timeText} title='20 min' />
                    </View>
                    <AppText title='4.5 km away' style={styles.distance}/>
                </View>
            </View> 
            <TouchableOpacity style={styles.primaryBtn} onPress={onPress}>
                <AppText style={styles.primaryText} title='Mark as Arrived' />
            </TouchableOpacity>

        </View>
    )
}


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
        lineHeight: fontSize.normal + 3,
    },
    destinationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: h(1),
    },
    destination: {
        fontFamily: fonts.bold,
        fontSize: fontSize.veryLarge,
        lineHeight: fontSize.veryLarge + 2,
    },
    address: {
        color: colors.InactiveButtonColor,
        marginTop: 2,
        fontFamily: fonts.regular,
        fontSize: fontSize.normal,
        lineHeight: fontSize.normal + 2,
    },
    Buttons: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        gap: w(2)
    },
    callBtn: {
        backgroundColor: '#E8F5E9',
        // paddingHorizontal: 14,
        // paddingVertical: 8,
        padding: 10,
        borderRadius: 10,
        // flexDirection: 'row',
        // alignItems: "center",
        // justifyContent: 'center',
        // gap: w(1)
    },
    msgBtn: {
        backgroundColor: '#1e88e530',
        padding: 10,
        borderRadius: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: w(4),
        marginVertical: h(2),
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    outlineBtn: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#4A90E2',
        padding: h(1.8),
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
    TimeKm:{
        // flex: 1,
        paddingHorizontal: h(0.8),
        paddingVertical: h(0.8),
        borderRadius: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'row',
        gap: w(2),
        backgroundColor: '#E8F5E9',
    },
    timeBtn: {
        // flex: 1,
        // borderWidth: 1,
        // borderColor: '#E8F5E9',
        // paddingVertical: h(1.5),
        // borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: w(1)
    },
    timeText: {
        color: '#2ECC71',
        fontFamily: fonts.regular,
        fontSize: fontSize.largeMedium,
        lineHeight: fontSize.largeMedium + 1,
    },
    distance: {
        color: colors.InactiveButtonColor,
         marginBottom: 4,
        fontFamily: fonts.regular,
        fontSize: fontSize.normal,
        lineHeight: fontSize.normal - 2,
        
    },
})