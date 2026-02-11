import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constant/color'
import { AppContainer } from '../../components/AppContainer'
import { AppText } from '../../components/AppHeading'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { h } from '../../constant/dimension'
import { WalletCard } from '../../components/Home/WalletCard'
import { Spacer } from '../../components/Spacer'
import { PERFORMANCE_TABS, PerformanceTabsHeader } from '../../constant/type'
import { PerformanceTabs } from '../../components/header/PerformanceTabs'
import { PerformanceSummary } from '../../components/Home/PerformanceSummery'
import PayOutSummery from '../../components/Home/PayOutSummery'
import { TransactionItem } from '../../components/Home/TransactionItem'
import { ShadowWrapper } from '../../components/ShadowWrapper'
import { Divider } from '../../components/Divider'

const EarningScreen = () => {
  const [tab, setTab] = useState<PerformanceTabsHeader>(
    PERFORMANCE_TABS.THIS_WEEK
  )
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <AppContainer>
          <View style={{ marginTop: h(2) }}>
            <AppText title='Earning & Performance' fontFamily={fonts.semiBold} fontSize={fontSize.veryLarge} style={{ lineHeight: fontSize.veryLarge + 4 }} />
            <AppText title='Track your income and stats' fontFamily={fonts.regular} fontSize={fontSize.default} color={colors.InactiveButtonColor} style={{ lineHeight: fontSize.default + 6 }} />
          </View>
          <Spacer />
          <View>
            <WalletCard orderId='Available Balance' dateTime='$345.75' />
          </View>
          <View style={{ marginTop: h(1) }}>
            <PerformanceTabs
              selectedStatus={tab}
              onChange={setTab}
            />
            <View>
              <AppText title='Performance Overview' fontFamily={fonts.semiBold} fontSize={fontSize.largeMedium} />
            </View>
          </View>
          <View>
            <PerformanceSummary />
          </View>
          <ShadowWrapper>
            <View>
              <PayOutSummery />
            </View>
          </ShadowWrapper>
          <ShadowWrapper>
            <View style={{backgroundColor:colors.white,padding:10,borderRadius:20}}>
              <AppText title='Earnings Breakdown' fontFamily={fonts.semiBold} fontSize={fontSize.largeMedium} />
              <Spacer size={10} />
              <TransactionItem
                title="Base Fare"
                amount="R15.00"
                amountColor={colors.textColor}
                marginBottom={h(0.4)}
                amountFamily={fonts.regular}
              />
              <TransactionItem
                title="Tips"
                amount="$95.00"
                amountColor={colors.textColor}
                marginBottom={h(0.4)}
                amountFamily={fonts.regular}
              />
              <TransactionItem
                title="Bonuses"
                amount="$30.00"
                amountColor={colors.textColor}
                marginBottom={h(0.4)}
                amountFamily={fonts.regular}
              />
              <Divider isLight bgColor={colors.Grey}/>
              <TransactionItem
                title="Total"
                amount="$1245.50"
                amountColor={colors.primary}
                amountSize={fontSize.medium}
                textColor={colors.textColor}
                textFamily={fonts.semiBold}
                textSize={fontSize.medium}
                marginBottom={h(0.4)}
                amountFamily={fonts.semiBold}
              />
            </View>
            </ShadowWrapper>
        </AppContainer>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EarningScreen

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    paddingBottom: 28,
    backgroundColor: colors.white,

  },
});