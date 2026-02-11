import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { AppContainer } from '../../components/AppContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppHeader } from '../../components/header/AppHeader'
import { OrderStatusBadge } from '../../components/OrderStatusBadge'
import { OrderStatus } from '../../constant/type'
import { AppText } from '../../components/AppHeading'
import { fontSize } from '../../asset/style/commonStyle'
import { fonts } from '../../asset'
import { colors } from '../../constant/color'
import { VerifiedIcon } from '../../asset/icons/authIcon'
import { h, w } from '../../constant/dimension'
import { ShadowWrapper } from '../../components/ShadowWrapper'
import { OrderIdCard } from '../../components/Home/OrderIDCard'
import { InfoRow } from '../../components/Home/InfoRow'
import { LocationIcon } from '../../asset/icons/HomeIcon'
import { Spacer } from '../../components/Spacer'
import { TransactionItem } from '../../components/Home/TransactionItem'
import { Divider } from '../../components/Divider'

const OrderDetails = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <AppContainer>
          <View style={{marginBottom:h(10)}}>
          <View style={{ marginTop: h(2) }}>
            <AppHeader title='Order Details' />
          </View>
          <Spacer size={40} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: w(2) }}>
            <View style={{ flexDirection: 'row', gap: w(2) }}>
              <VerifiedIcon />
              <OrderStatusBadge status={OrderStatus.COMPLETED} />
            </View>
            <AppText
              title={'Jan 12, 2026 • 2:30 PM'}
              fontSize={fontSize.normal}
              fontFamily={fonts.regular}
              color={colors.InactiveButtonColor}
            />
          </View>
          <Spacer size={10} />
          <View>
            <ShadowWrapper>
              <OrderIdCard orderId="OR2026-012" />
            </ShadowWrapper>
          </View>
          <View style={{ gap: h(1) }}>
            <InfoRow
              icon={<LocationIcon color={'#1E88E5'} />}
              label="PICKUP"
              title="HollywoodBets"
              subtitle="789 West St."
              bgColor='#1e88e536'
            />
            <InfoRow
              icon={<LocationIcon color={'#2ECC71'} />}
              label="DROP-OFF"
              title="Customer Location"
              subtitle="321 Park Ave"
              bgColor='#2ecc7031'
            />
          </View>
          <Spacer size={15} />
          <Divider isLight bgColor={colors.Grey} />
          <Spacer size={15} />
          <View>
            <AppText title='Timeline' fontFamily={fonts.semiBold} fontSize={fontSize.default} />
            <Spacer size={10} />
            <TransactionItem
              title="Order Created"
              amount="1:37 PM"
              amountColor={colors.textColor}
              marginBottom={h(0.4)}
              amountFamily={fonts.regular}
            />
            <TransactionItem
              title="Accepted"
              amount="1:37 PM"
              amountColor={colors.textColor}
              marginBottom={h(0.4)}
              amountFamily={fonts.regular}
            />
            <TransactionItem
              title="Picked Up"
              amount="1:37 PM"
              amountColor={colors.textColor}
              marginBottom={h(0.4)}
              amountFamily={fonts.regular}
            />
            <TransactionItem
              title="Delivered"
              amount="1:37 PM"
              amountColor={colors.textColor}
              marginBottom={h(0.4)}
              amountFamily={fonts.regular}
            />
          </View>
          <Spacer size={15} />
          <Divider isLight bgColor={colors.Grey} />
          <Spacer size={15} />
          <View>
            <AppText title='Earnings Breakdown' fontFamily={fonts.semiBold} fontSize={fontSize.default} />
            <Spacer size={10} />
            <TransactionItem
              title="Base Fare"
              amount="R15.00"
              amountColor={colors.textColor}
              marginBottom={h(0.4)}
              amountFamily={fonts.regular}
            />
            <TransactionItem
              title="Distance (4.5 km)"
              amount="Included"
              amountColor={colors.textColor}
              marginBottom={h(0.4)}
              amountFamily={fonts.regular}
            />
            <TransactionItem
              title="Tip"
              amount="+R3.00"
              amountColor={'#2ECC71'}
              textColor={'#2ECC71'}
              marginBottom={h(0.4)}
              amountFamily={fonts.regular}
            />
          </View>
          <Spacer size={15} />
          <Divider isLight bgColor={colors.Grey} />
          <Spacer size={15} />
          <TransactionItem
            title="Total Earnings"
            amount="R18.00"
            amountColor={'#2ECC71'}
            textColor={colors.textColor}
            marginBottom={h(0.4)}
            amountFamily={fonts.semiBold}
            amountSize={fontSize.default}
            textFamily={fonts.semiBold}
            textSize={fontSize.default}
          />
          </View>
        </AppContainer>
      </ScrollView>
    </SafeAreaView>
  )
}
export default OrderDetails

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    paddingBottom: 28,
    backgroundColor: colors.white,
  },
})