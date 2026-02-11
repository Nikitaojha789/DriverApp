import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CorrectIconSvg, DeliveryIcon, EarningTabIcon, LocationIcon, ProfileIcon, RatingIcon } from '../../asset/icons/HomeIcon'
import { colors } from '../../constant/color'
import { fontSize } from '../../asset/style/commonStyle'
import { fonts } from '../../asset'
import { AppText } from '../../components/AppHeading'
import { AppContainer } from '../../components/AppContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { h } from '../../constant/dimension'
import { OnlineIcon } from '../../components/Home/OnlineIcon'
import { StatCards } from '../../components/Home/StatCards'
import AppStatCards from '../../components/Home/AppStatCards'
import { Compliance } from '../../components/Profile/Compliance'
import { useNavigation } from '@react-navigation/native'
import { routeNames } from '../../route/route_name'

const Home = () => {
  const navigation = useNavigation<any>();
  
  const onProfilePress = () => {
    navigation.navigate(routeNames.ProfileScreen);
    console.log("Button pressed!!");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
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
            <TouchableOpacity onPress={onProfilePress}>
            <ProfileIcon />
            </TouchableOpacity>
          </View>
          <View>
            <OnlineIcon />
          </View>
          <View style={{ marginTop: h(6) }}>
            <AppText title="Today's Stats" fontSize={fontSize.largeMedium}
              fontFamily={fonts.semiBold} />
            <AppStatCards/>
          </View>
          <View style={{marginTop:h(3)}}>
                      <Compliance title='Quick Tips'
                        items={[
                          {
                            icon: <CorrectIconSvg/>,
                            title: 'Keep your phone charged for continuous updates',
                          },
                          {
                            icon: <CorrectIconSvg/>,
                            title: 'Check weather conditions before  heading out',
                          },
                          {
                            icon: <CorrectIconSvg/>,
                            title: 'Maintain a high rating for better opportunities',
                          },
                        ]}
                      />
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
    paddingTop: h(2),
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