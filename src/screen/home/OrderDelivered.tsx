import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TrackScreenHeader } from '../../components/header/TrackScreenHeader'
import { ORDER_STATUS_UI } from '../../constant/OrderStatusConfig'
import { h, w } from '../../constant/dimension'
import { OrderStatus } from '../../constant/type'
import { colors } from '../../constant/color'
import { DeliveredIcon, DistanceIcon, EarningTabIcon, RatingIcon } from '../../asset/icons/HomeIcon'
import { AppText } from '../../components/AppHeading'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { YourEarning } from '../../components/Home/YourEarning'
import { ShadowWrapper } from '../../components/ShadowWrapper'
import { AppContainer } from '../../components/AppContainer'
import { DistanceCards } from '../../components/Home/DistanceCards'
import { VerifiedIcon } from '../../asset/icons/authIcon'
import { AppButton } from '../../components/AppButton'
import { routeNames } from '../../route/route_name'
import { useNavigation } from '@react-navigation/native'

const OrderDelivered = () => {
    const navigation = useNavigation<any>();
    const onButtonPress = () => {
        navigation.navigate(routeNames.bottomTabNavigator);
        console.log("Button pressed!!");
    }
    return (
        <SafeAreaView style={styles.container}>
            <AppContainer>
                <TrackScreenHeader paddingHorizontal={w(30)} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <DeliveredIcon />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <AppText title='Order Delivered' fontFamily={fonts.semiBold} fontSize={fontSize.largeDefault} />
                    <AppText title={`Enjoy your meal from HOLLYWOODBets \n Delivered on Time`}
                        fontFamily={fonts.regular} fontSize={fontSize.default} center
                        color={colors.InactiveButtonColor} />
                </View>
                <View>
                    <ShadowWrapper>
                        <YourEarning
                            icon={<EarningTabIcon color={colors.primary} />}
                            totalAmount='$8.50'

                        />
                    </ShadowWrapper>
                </View>
                <View style={{
                    flexDirection: 'row',
                    gap: w(4), marginHorizontal: w(1),
                }}>
                    {/* <View style={styles.cardWrapper}> */}
                    <DistanceCards
                        icon={<DistanceIcon />}
                        title='Distance'
                        subTitle='4.8 km'
                    // backgroundColor='#8bf5e832'
                    />


                    <DistanceCards
                        icon={<VerifiedIcon size={20} />}
                        title='Delivery Time'
                        subTitle='23 Minutes'
                    // backgroundColor='#f5ae8b32'
                    />
                </View>
                <View style={{ marginTop: h(9) }}>
                    <AppButton bgColor={'#e6e6e657'} onPress={onButtonPress}
                        title='Back to Dashboard' titleColor={colors.purple} />
                </View>
            </AppContainer>
        </SafeAreaView>
    )
}

export default OrderDelivered

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    cardWrapper: {

    },
});
