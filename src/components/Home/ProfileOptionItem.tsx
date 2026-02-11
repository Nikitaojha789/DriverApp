import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { AppText } from '../AppHeading'
import { colors } from '../../constant/color'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { h, w } from '../../constant/dimension'

interface Props {
  icon: React.ReactNode
  title: string
  subtitle: string
  onPress?: () => void
  rightIcon?: React.ReactNode
  bgColor?:string
  subText?:string
  rightGap?:number
  gapHorizontal?:number
  badgeIcon?:React.ReactNode
  badge?:string
}

export const ProfileOptionItem = ({
  icon,
  title,
  subtitle,
  onPress,
  rightIcon,
  bgColor = '#EEE8F7',
  subText,
  rightGap,
  gapHorizontal,
  badgeIcon,
  badge,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container,{paddingHorizontal:gapHorizontal}]}
      onPress={onPress}
    >
      <View style={styles.left}>
        <View style={[styles.iconBox,{backgroundColor:bgColor}]}>{icon}</View>

        <View>
          <AppText
            title={title}
            fontFamily={fonts.semiBold}
            fontSize={fontSize.normal}
          />
          <AppText
            title={subtitle}
            fontFamily={fonts.regular}
            fontSize={fontSize.small}
            color={colors.InactiveButtonColor}
          />
        </View>
      </View>

      {rightIcon && (
        <View>
         { badgeIcon &&
            <AppText title={badge}
             style={{padding:2,backgroundColor:'#2ecc7023',borderRadius:20,textAlign:'center',marginBottom:h(1)}} 
            color='#2ecc70'/>
         }
        <View style={[styles.rightSide,{marginRight:rightGap}]}>
          {rightIcon}
          <AppText 
            title={subText} 
            fontSize={fontSize.normal}
            fontFamily={fonts.medium}
          />
        </View>
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: h(1.8),
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: w(10),
    height: w(10),
    borderRadius: 12,
    backgroundColor: '#EEE8F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: w(4),
  },
  rightSide:{
    flexDirection:'row',
    gap:w(1.5),
    alignItems:'center'
  }
})
