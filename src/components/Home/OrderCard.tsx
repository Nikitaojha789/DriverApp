import { View, StyleSheet } from 'react-native'
import React from 'react'
import { AppText } from '../AppHeading'
import { colors } from '../../constant/color'
import { NextIcon, RestroAddress } from '../../asset/icons/HomeIcon'
import { fontSize } from '../../asset/style/commonStyle'
import { fonts } from '../../asset'
import { w } from '../../constant/dimension'
import { Divider } from '../Divider'
import { Spacer } from '../Spacer'
import { OrderStatus } from '../../constant/type'
import { StatusBadge } from '../button/StatusBadge'
import { useNavigation } from '@react-navigation/native'
import { routeNames } from '../../route/route_name'

interface OrderCardProps {
    orderId: string
    dateTime: string
    restaurantAddress: string
    customerAddress: string
    distance: string
    amount?: string
    status: OrderStatus
    onPress?: () => void
}

export const OrderCard: React.FC<OrderCardProps> = ({
    orderId,
    dateTime,
    restaurantAddress,
    customerAddress,
    distance,
    amount,
    status,
    onPress,
}) => {
const navigation = useNavigation<any>();

const OnNextPress = () => {
navigation.navigate(routeNames.OrderDetails);
  console.log("Button pressed!!");
}

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AppText
                    title={orderId}
                    fontSize={fontSize.default}
                    fontFamily={fonts.semiBold}
                />
                <NextIcon onPress={OnNextPress} />
            </View>

            <AppText
                title={dateTime}
                fontSize={fontSize.normal}
                fontFamily={fonts.regular}
                color={colors.InactiveButtonColor}
            />

            <Spacer />

            <View style={styles.address}>
                <RestroAddress />
                <AppText
                    title={restaurantAddress}
                    fontSize={fontSize.default}
                    fontFamily={fonts.regular}
                />
            </View>

            <View style={styles.address}>
                <RestroAddress />
                <AppText
                    title={customerAddress}
                    fontSize={fontSize.default}
                    fontFamily={fonts.regular}
                />
            </View>

            <Spacer />
            <Divider bgColor="#d6d2d2" isLight />
            <Spacer />

            <View style={styles.footer}>
                <StatusBadge status={status} />
                <AppText
                    title={distance}
                    fontSize={fontSize.normal}
                    fontFamily={fonts.regular}
                    color={colors.InactiveButtonColor}
                />
            
                <AppText
                    title={amount}
                    fontSize={fontSize.normal}
                    fontFamily={fonts.semiBold}
                    color={colors.primary}
                    style={{ marginLeft: 'auto' }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 2,
        elevation: 2,
        padding: 20,
        marginBottom: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: w(2),
        marginTop: 4,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: w(5),
    },
})
