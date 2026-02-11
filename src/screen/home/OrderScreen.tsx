import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constant/color'
import { AppContainer } from '../../components/AppContainer'
import { AppText } from '../../components/AppHeading'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { h } from '../../constant/dimension'
import { OrderTabs } from '../../components/header/OrderTabs'
import { Spacer } from '../../components/Spacer'
import { OrderStatus } from '../../constant/type'
import { OrderCard } from '../../components/Home/OrderCard'
import { orders } from '../../constant/StaticData'

const OrderScreen = () => {
    const [status, setStatus] = useState<OrderStatus>(
  OrderStatus.IN_PROGRESS
);

const filteredOrders = orders.filter(
  order => order.status === status
);


  return (
    <SafeAreaView style={{backgroundColor:colors.white,flex:1}}>
         <ScrollView
              contentContainerStyle={styles.scroll}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}>
      <AppContainer>
    <View>
      <AppText title='Orders' fontFamily={fonts.semiBold} fontSize={fontSize.extraLarge} style={{lineHeight:fontSize.extraLarge + 6,marginTop:h(2)}} />
      <AppText title='View you ongoing and past deliveries' fontFamily={fonts.regular} 
      fontSize={fontSize.default} color={colors.InactiveButtonColor} style={{lineHeight:fontSize.default + 5}}/>
    </View>
<Spacer/>
<OrderTabs
  selectedStatus={status}
  onChange={setStatus}
/>

  {filteredOrders.length > 0 ? (
            filteredOrders.map(order => (
              <OrderCard
                key={order.orderId}
                orderId={order.orderId}
                dateTime={order.dateTime}
                restaurantAddress={order.restaurantAddress}
                customerAddress={order.customerAddress}
                distance={order.distance}
                amount={order.amount}
                status={order.status}
                onPress={() =>
                  console.log('Order Pressed', order.orderId)
                }
              />
            ))
          ) : (
            <AppText
              title="No orders found"
              style={{
                textAlign: 'center',
                marginTop: h(4),
              }}
              color={colors.Grey}
            />
          )}
    </AppContainer>
    </ScrollView>
    </SafeAreaView>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
scroll: {
    flexGrow: 1,
    paddingBottom: 28,
    backgroundColor: colors.white,
  },
});