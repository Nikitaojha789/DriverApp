import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppContainer } from '../../components/AppContainer'
import { AppText } from '../../components/AppHeading'
import { colors } from '../../constant/color'
import { fonts } from '../../asset'
import { fontSize, width } from '../../asset/style/commonStyle'
import { h, w } from '../../constant/dimension'
import { DetailBadges } from '../../components/Profile/DetailBadges'
import { AuthVerifyIcon, UnderReviewIcon, VerifiedIcon } from '../../asset/icons/authIcon'
import { Compliance } from '../../components/Profile/Compliance'
import { CheckIcon } from '../../asset/icons/icons'

const AccountVerification = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ flex: 1 }}>
        <AppContainer>
          <View style={{ marginTop: h(4) }}>
            <AppText title='Account Verification' color={colors.textColor} fontFamily={fonts.semiBold}
              fontSize={fontSize.veryLarge} style={{ lineHeight: fontSize.veryLarge + 2 }} />
            <AppText title='We’re verifying your document' color={colors.InactiveButtonColor}
              fontFamily={fonts.medium} fontSize={fontSize.small} style={{
                marginTop: h(0.5),
                lineHeight: fontSize.small + 2,
                marginBottom: h(2)
              }} />
          </View>
          <DetailBadges
            icon={<UnderReviewIcon />}
            title="Under Review"
            subtitle="We're reviewing your documents. This 
          usually takes 24-48 hours. We'll notify you once it's complete."
            TextFamily={fonts.semiBold}
            TextSize={fontSize.default}
            FontColor={'#F5A623'}
            subFontColor={"#F5A623"}
            subTextFamily={fonts.regular}
            subTextSize={fontSize.normal}
            containerBgColor={'#FEFCE8'}
            BorderWidth={1}
            borderClr={'#F5A623'}
            spaceHorizontal={w(2.2)}
          />
          <View>
            <AppText title='Verification Checklist' fontFamily={fonts.semiBold}
              fontSize={fontSize.default} color={colors.textColor} style={{ marginBottom: h(1) }} />
            <DetailBadges
              icon={<VerifiedIcon />}
              title="Driving License"
              statusText="Verified"
              statusBgColor="#EAF8F0"
              statusTextColor={colors.primary}
              position='center'
              BorderWidth={0}
              // borderClr={'#9b9b9b1c'}
              subTextFamily={fonts.regular}
              TextFamily={fonts.medium}
              TextSize={fontSize.default}
              subTextSize={fontSize.small}
              spaceHorizontal={w(2.2)}
              ContainerRadius={10}
              showShadow={true}
              ContainerElevation={2}
            />
            <DetailBadges
              icon={<VerifiedIcon />}
              title="Registration Certificate"
              statusText="Verified"
              statusBgColor="#EAF8F0"
              statusTextColor={colors.primary}
              position='center'
              BorderWidth={0.5}
              borderClr={'#9b9b9b1c'}
              subTextFamily={fonts.regular}
              TextFamily={fonts.medium}
              TextSize={fontSize.default}
              subTextSize={fontSize.small}
              spaceHorizontal={w(2.2)}
              showShadow={true}
              ContainerElevation={2}
            />
            <DetailBadges
              icon={<UnderReviewIcon size={24}/>}
              title="Insurance Cetificate"
              statusText="Under Review"
              statusBgColor="#f5a52318"
              statusTextColor={"#F5A623"}
              position='center'
              BorderWidth={0.5}
              borderClr={'#9b9b9b1c'}
              subTextFamily={fonts.regular}
              TextFamily={fonts.medium}
              TextSize={fontSize.default}
              subTextSize={fontSize.small}
              spaceHorizontal={w(2.2)}
              showShadow={true}
              ContainerElevation={2}
            />
            <DetailBadges
              icon={<VerifiedIcon />}
              title="Bank Account"
              subtitle='Account verification'
              statusText="Verified"
              statusBgColor="#EAF8F0"
              statusTextColor={colors.primary}
              position='center'
              BorderWidth={0.5}
              borderClr={'#9b9b9b1c'}
              TextFamily={fonts.medium}
              TextSize={fontSize.default}
              subTextFamily={fonts.regular}
              subTextSize={fontSize.small}
              spaceHorizontal={w(2.2)}
              showShadow={true}
              ContainerElevation={2}
            />
          </View>
          <View>
            <Compliance title="'Compliance & Terms'"
              items={[
                {
                  icon: <VerifiedIcon size={20} />,
                  title: 'Insurance acknowledgment accepted',
                },
                {
                  icon: <VerifiedIcon size={20} />,
                  title: 'Terms & Conditions accepted',
                },
                {
                  icon: <VerifiedIcon size={20} />,
                  title: 'Privacy Policy acknowledged',
                },
              ]}
            />
          </View>
          <View style={{marginBottom:h(15)}}>
            <DetailBadges
              icon={<AuthVerifyIcon />}
              title="Why do we need this?"
              subtitle="Background verification ensures the safety of our customers and helps us 
          maintain a trusted community of drivers. Your information is securely stored and 
          used only for verification purposes."
              TextFamily={fonts.semiBold}
              TextSize={fontSize.default}
              FontColor={colors.textColor}
              subFontColor={colors.textColor}
              subTextFamily={fonts.regular}
              subTextSize={fontSize.normal}
              containerBgColor={'rgba(230, 230, 230, 0.26)'}
              spaceHorizontal={w(2.2)}
            />
          </View>
        </AppContainer>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AccountVerification