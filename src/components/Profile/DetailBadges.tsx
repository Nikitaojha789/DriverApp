import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AppText } from '../AppHeading'
import { colors } from '../../constant/color'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { h, w } from '../../constant/dimension'

type DetailBadgeItemProps = {
    icon: React.ReactNode
    containerBgColor?: string,
    borderClr?: string,
    BorderWidth?: number,
    spaceHorizontal?: number,
    ContainerElevation?: number,
    ContainerRadius?: number,
    title: string,
    subtitle?: string,
    statusText?: string,
    statusBgColor?: string,
    statusTextColor?: string,
    FontColor?: string,
    TextFamily?: string,
    TextSize?: number,
    subFontColor?: string,
    subTextFamily?: string,
    subTextSize?: number,
    position?: 'center' | 'baseline' | 'flex-start' | 'flex-end' | 'stretch',
      showShadow?: boolean
}

export const DetailBadges = ({
    icon,
    containerBgColor = colors.white,
    title,
    subtitle,
    statusText,
    statusBgColor,
    statusTextColor,
    FontColor = colors.textColor,
    TextFamily = fonts.medium,
    TextSize = fontSize.medium,
    subFontColor = colors.InactiveButtonColor,
    subTextFamily = fonts.medium,
    subTextSize = fontSize.small,
    position,
    BorderWidth,
    borderClr,
    spaceHorizontal,
    ContainerElevation = 4,
      showShadow = false,

}: DetailBadgeItemProps) => {
    return (
        <View style={[
            styles.container,
            {
                backgroundColor: containerBgColor,
                borderColor: borderClr,
                borderWidth: BorderWidth,
                paddingHorizontal: spaceHorizontal,
                 ...(showShadow && {
        shadowColor: '#525151c4',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 0},
        elevation: ContainerElevation,
      }),
            },
        ]}>

            <View style={[styles.left, { alignItems: position }]}>
                {/* left icon */}
                <View>
                    {icon}
                </View>
                {/* center title */}
                <View style={styles.textContainer}>
                    <AppText
                        title={title}
                        color={FontColor} fontFamily={TextFamily} fontSize={TextSize}
                    />

                    {subtitle ? (
                        <AppText
                            title={subtitle}
                            color={subFontColor} fontFamily={subTextFamily} fontSize={subTextSize}
                        />
                    ) : null}
                </View>
            </View>

            {/* right badge */}
            {statusText ? (
                <View style={[styles.statusBadge, { backgroundColor: statusBgColor }]}>
                    <AppText
                        title={statusText}
                        fontSize={fontSize.small}
                        fontFamily={fonts.medium}
                        color={statusTextColor}
                    />
                </View>
            ) : null}


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingVertical: h(1.4),
        borderRadius: 16,
        marginBottom: h(2),
        // overflow: 'hidden',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1,
    },
    textContainer: {
        marginLeft: w(2),
        flex: 1,
        flexShrink: 1,
    },
    subtitle: {
        alignSelf: 'center',
    },
    statusBadge: {
        paddingHorizontal: w(2.8),
        paddingVertical: h(0.6),
        borderRadius: 16,
    },
})
