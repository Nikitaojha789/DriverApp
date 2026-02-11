import { View, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { fontSize } from '../../asset/style/commonStyle'
import { w } from '../../constant/dimension'
import { AppText } from '../AppHeading'
import { fonts } from '../../asset'
import { colors } from '../../constant/color'

interface DistanceCardsProps {
  icon: React.ReactNode;
  iconBgColor?: string; 
  title: string;
  subTitle: string;
  backgroundColor?: string;
  containerStyle?: ViewStyle; 
}

export const DistanceCards = ({
  icon,
  iconBgColor,
  subTitle,
  title,
  backgroundColor,
  containerStyle
}: DistanceCardsProps) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor || colors.white }, containerStyle]}>
      <View style={styles.iconBox}>
        <View style={[styles.icon, { backgroundColor: iconBgColor }]}>
          {icon}
        </View>
        <View style={styles.titleContainer}>
          <AppText 
            title={title} 
            fontFamily={fonts.regular} 
            fontSize={fontSize.normal} 
          />
        </View>
      </View>
      <View style={styles.subTitleContainer}>
        <AppText 
          title={subTitle} 
          fontFamily={fonts.bold} 
          fontSize={fontSize.veryLarge} 
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 12, 
   flex:1,
    shadowColor: '#74747463',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 2,
    // // Android shadow
    elevation:4,
    borderWidth:1,
    borderColor:'#adabab0f'
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: w(2),
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  subTitleContainer: {
    marginTop: 4,
  }
})
