import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constant/color'
import { AppContainer } from '../../components/AppContainer'
import { AppHeader } from '../../components/header/AppHeader'
import { fontSize } from '../../asset/style/commonStyle'
import { LocationIcon, NextIcon, ProfileImage } from '../../asset/icons/HomeIcon'
import { h, w } from '../../constant/dimension'
import { AppText } from '../../components/AppHeading'
import { fonts } from '../../asset'
import { ShadowWrapper } from '../../components/ShadowWrapper'
import { ProfileOptionItem } from '../../components/Home/ProfileOptionItem'
import { BellIcon, UserIcon, WalletIcon } from '../../asset/icons/authIcon'
import { useNavigation } from '@react-navigation/native'
import { routeNames } from '../../route/route_name'
import { Logout } from '../../asset/icons/icons'

const ProfileScreen = () => {
    const navigation = useNavigation<any>();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
             <ScrollView
                    contentContainerStyle={styles.scroll}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                  >
            <AppContainer>
                <AppHeader title='Profile & Settings' size={fontSize.default} />
                <ShadowWrapper>
                    <View style={styles.mainWrapper}>
                        <View style={styles.ProfileWrapper}>
                            <View style={styles.iconBox}>
                                <ProfileImage />
                            </View>
                            <View>
                                <AppText title='Jack Sparrow' fontFamily={fonts.semiBold} fontSize={fontSize.largeMedium} style={{ lineHeight: fontSize.normal + 15 }} />
                                <AppText title='jack@example.com' fontFamily={fonts.regular} fontSize={fontSize.normal} color={colors.InactiveButtonColor} style={{ lineHeight: fontSize.normal + 8 }} />
                                <AppText title='+27 82 123 4567' fontFamily={fonts.regular} fontSize={fontSize.normal} color={colors.InactiveButtonColor} />
                            </View>
                        </View>
                        <View style={{ marginTop: h(1) }}>
                            <AppText title='Member since January 2025' fontFamily={fonts.regular} fontSize={fontSize.normal} color={colors.InactiveButtonColor} />
                        </View>
                    </View>
                </ShadowWrapper>
                <View>
                    <ProfileOptionItem
                        icon={<UserIcon />}
                        title="Personal Details"
                        subtitle="Name, email, phone, Address"
                        rightIcon={<NextIcon />}
                        onPress={() => navigation.navigate(routeNames.EditProfile)}
                    />

                    <ProfileOptionItem
                        icon={<LocationIcon color={colors.purple} />}
                        title="Vehicle Information"
                        subtitle="Manage your delivery addresses"
                        rightIcon={<NextIcon />}
                        onPress={() => navigation.navigate(routeNames.VehicalInfo)}
                    />

                    <ProfileOptionItem
                        icon={<WalletIcon />}
                        title="Payment Methods"
                        subtitle="Add or remove payment methods"
                        rightIcon={<NextIcon />}
                        onPress={() => navigation.navigate(routeNames.PaymentMethod)}
                    />

                    <ProfileOptionItem
                        icon={<BellIcon color={colors.purple} />}
                        title="Documents"
                        subtitle="License, Insurance, Registration"
                        rightIcon={<NextIcon />}
                        onPress={() => navigation.navigate(routeNames.Documents)}
                    />

                </View>
                 <View style={{alignItems:'center',top:h(20)}}>
                    <AppText title='Version 1.0.0' fontFamily={fonts.regular} fontSize={fontSize.normal} 
                    color={colors.InactiveButtonColor}/>
                    <View style={{flexDirection:'row',alignItems:'center',gap:w(1)}}>
                    <AppText title='Terms of Service' fontFamily={fonts.regular} fontSize={fontSize.normal} 
                    color={colors.InactiveButtonColor}/>
                    <AppText title='•' fontFamily={fonts.regular} fontSize={fontSize.normal} 
                    color={colors.InactiveButtonColor} style={{marginTop:h(0.6)}}/>
                    <AppText title='Privacy Policy' fontFamily={fonts.regular} fontSize={fontSize.normal} 
                    color={colors.InactiveButtonColor}/>
                </View>
                </View>
                 <TouchableOpacity style={styles.outlineBtn}>
                                                <Logout color={colors.white}/>
                                                <AppText style={styles.outlineText} title='Log out' />
                                            </TouchableOpacity>
            </AppContainer>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    scroll: {
    flexGrow: 1,
    backgroundColor: colors.white,
    // paddingTop: h(2),
    paddingBottom: h(15),
  },
    mainWrapper: {
        padding: 10,
    },
    iconBox: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: w(4),
    },
    ProfileWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: w(2),
    },
    outlineBtn: {
            // flex: 1,
            // borderWidth: 1,
            backgroundColor: colors.red,
            paddingVertical: h(1.5),
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: w(2),
            top: h(22),
        },
        outlineText: {
        color: colors.white,
        fontFamily: fonts.semiBold,
        fontSize: fontSize.normal,
    },
})