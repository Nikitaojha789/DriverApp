import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProfileIcon } from '../../asset/icons/HomeIcon'
import { colors } from '../../constant/color'
import { fontSize } from '../../asset/style/commonStyle'
import { fonts } from '../../asset'
import { AppText } from '../../components/AppHeading'
import { AppContainer } from '../../components/AppContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { h } from '../../constant/dimension'
import { OnlineIcon } from '../../components/Home/OnlineIcon'

const Home = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
    <AppContainer>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <View>
            <AppText
              title="Hello, Driver"
              fontFamily={fonts.semiBold}
              fontSize={fontSize.largeMedium}
              color={colors.textColor}
              style={{ lineHeight: fontSize.largeMedium + h(1) }}
            />
            <AppText
              title="Ready to deliver today?"
              color={colors.InactiveButtonColor}
              fontSize={fontSize.normal}
              fontFamily={fonts.regular}
              style={{ lineHeight: fontSize.normal + h(1) }}
            />
          </View>
          <ProfileIcon />
        </View>
        <View>
          <OnlineIcon/>
        </View>
      </ScrollView>
    </AppContainer>
    </SafeAreaView>
  );
};


export default Home

const styles = StyleSheet.create({
   scroll: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingTop: h(8), 
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    color: 'grey',
  },
})