import { View, Text, StyleSheet, TouchableOpacity, TextStyle } from 'react-native'
import React from 'react'
import { h, w } from '../../constant/dimension'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { colors } from '../../constant/color'
import { BackButton } from '../button/BackButton'
import { AppText } from '../AppHeading'
import { ShareIcon } from '../../asset/icons/HomeIcon'

import { StyleProp, ViewStyle} from 'react-native'

type StatusStyle = {
  backgroundColor?: string
  textColor?: string

  badge?: StyleProp<ViewStyle>
  text?: StyleProp<TextStyle>
  share?: StyleProp<ViewStyle>
}

type TrackScreenHeaderProps = {
  status?: string
  statusStyle?: StatusStyle
  showShare?: boolean
  onSharePress?: () => void
}



export const TrackScreenHeader = ({
  status = 'At Restaurant',
  statusStyle = {},
  showShare = true,
  onSharePress,
}:TrackScreenHeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: w(4) }}>
        <BackButton />
      </View>

      <View>
        <AppText style={styles.title} title="Track Order" />
        <AppText style={styles.subTitle} title="Order #SS2257662" />
      </View>

      {status && (
        <TouchableOpacity
          style={[
            styles.pickupBadge,
            { backgroundColor: statusStyle.backgroundColor },
            statusStyle.badge,
          ]}
        >
          <AppText
            style={[
              styles.pickupText,
              { color: statusStyle.textColor },
              statusStyle.text,
            ]}
            title={status}
          />
        </TouchableOpacity>
      )}

      {showShare && (
        <TouchableOpacity
          style={[styles.shareBadge, statusStyle.share]}
          onPress={onSharePress}
        >
          <ShareIcon />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: w(4),
    paddingVertical: h(1.5),
    gap: w(8),
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.default,
  },
  subTitle: {
    color: colors.SecondaryColor,
    fontFamily: fonts.regular,
    fontSize: fontSize.small,
  },
  pickupBadge: {
    borderRadius: 14,
  },
  pickupText: {
    fontSize: fontSize.small,
    fontFamily: fonts.regular,
  },
  shareBadge: {
    paddingHorizontal: w(6),
  },

})