import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppText } from '../AppHeading'
import { colors } from '../../constant/color'
import { h, w } from '../../constant/dimension'
import { DeliveryIcon, DistanceIcon, LocationIcon, PickupLocationIcon } from '../../asset/icons/HomeIcon'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { UnderReviewIcon } from '../../asset/icons/authIcon'
import { StatCards } from '../Home/StatCards'
import { AppNavigation } from '../../route/app_navigation'
import { useNavigation } from '@react-navigation/native'
import { routeNames } from '../../route/route_name'
import OrdereInfoCard from '../Home/OrderInfoCard'
import { Spacer } from '../Spacer'

interface NewOrderModelProps {
    visible: boolean,
    onClose: () => void,
}


const NewOrderModel = ({ visible, onClose }: NewOrderModelProps) => {
    const navigation = useNavigation<any>();

    const OnAccept = () => {
        navigation.navigate(routeNames.TrackOrder);
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalBox}>

                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <View style={styles.iconCircle}>
                                <DeliveryIcon color={colors.purple} /></View>
                            <View>
                                <AppText title="New Order!" color={colors.white} />
                                <AppText title="Order #DL2026-001" color={colors.white} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.bottomContainer}>
                        <View style={styles.timerBar}>
                            <UnderReviewIcon color={colors.DarkRed} pathColor={colors.DarkRed} size={20} />
                            <AppText title='Accept within 15 seconds' color={colors.DarkRed}
                                fontFamily={fonts.medium} fontSize={fontSize.default}
                            />
                        </View>
                        <View style={{ marginVertical: h(0.9) }}>
                            <StatCards
                                icon={<PickupLocationIcon name="cube-outline" />}
                                value="Pickup Location"
                                label="Hollywoodbets"
                                labelStyle={{ fontFamily: fonts.medium, fontSize: fontSize.normal, color: colors.textColor }}
                                iconBgColor="#1e88e52a"
                                height={h(4)}
                                width={w(8.8)}
                                valueStyle={{ fontFamily: fonts.semiBold, fontSize: fontSize.small, color: colors.InactiveButtonColor }}
                                isRow={false}
                                isCard={false}
                            />

                            <StatCards
                                icon={<LocationIcon name="cube-outline" color={"#2ECC71"} />}
                                label="456 Customer St, Downtown"
                                labelStyle={{ fontFamily: fonts.medium, fontSize: fontSize.normal, color: colors.textColor }}
                                valueStyle={{ fontFamily: fonts.semiBold, fontSize: fontSize.small, color: colors.InactiveButtonColor }}
                                value="Delivery Location"
                                iconBgColor="#2ecc702c"
                                height={h(4)}
                                width={w(8.8)}
                                isRow={false}
                                isCard={false}
                            />
                        </View>
                        <View style={{flexDirection:'row',gap:w(2)}}>
                        <OrdereInfoCard
                            distance="3.5 km"
                            label="Distance"
                            icon={<LocationIcon width={20} height={20} color={'#1E88E5'}/>}
                        />
                        <OrdereInfoCard
                            distance="3.5 km"
                            label="Distance"
                            icon={<LocationIcon width={20} height={20} color={'#1E88E5'}/>}
                        />
                        <OrdereInfoCard
                            distance="3.5 km"
                            label="Distance"
                            icon={<LocationIcon width={20} height={20} color={'#1E88E5'}/>}
                        />
                        </View>
                        <Spacer/>

                        <View style={styles.button}>
                            <TouchableOpacity onPress={onClose} style={styles.DeclineBtn}>
                                <AppText title="Decline" color={colors.DarkRed} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={OnAccept} style={styles.AcceptBtn}>
                                <AppText title="Accept Order" color={colors.white} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>

    )
}

export default NewOrderModel

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        // paddingHorizontal: 1,
        borderRadius: 16,
        width: '90%',
        backgroundColor: colors.white,
        overflow: 'hidden'
    },
    header: {
        backgroundColor: colors.purple,
        //   borderTopLeftRadius: 20,
        //   borderTopRightRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },

    iconCircle: {
        height: 42,
        width: 42,
        borderRadius: 21,
        backgroundColor: '#E6DDF1',
        justifyContent: 'center',
        alignItems: 'center',
    },

    closeCircle: {
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(255,255,255,0.25)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: { padding: 22 },
    timerBar: {
        flexDirection: 'row',
        gap: w(2),
        backgroundColor: '#d32f2f1e',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 8,
        // justifyContent:'center',
        alignItems: 'center',
        // marginBottom:h(2)
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    DeclineBtn: {
        paddingVertical: h(1),
        paddingHorizontal: w(8.2),
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.DarkRed,
    },
    AcceptBtn: {
        paddingVertical: h(1),
        paddingHorizontal: w(4),
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: colors.purple,
    }
})
