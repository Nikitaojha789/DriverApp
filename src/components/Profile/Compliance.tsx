import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AppText } from '../AppHeading'
import { colors } from '../../constant/color'
import { fonts } from '../../asset'
import { fontSize } from '../../asset/style/commonStyle'
import { h, w } from '../../constant/dimension'

type ComplianceItem = {
  icon: React.ReactNode
  title: string
}

type ComplianceProps = {
  title?: string
  items: ComplianceItem[]
}

export const Compliance = ({
  title,
  items,
}: ComplianceProps) => {
  return (
    <View style={styles.container}>
      {/* heading */}
      <AppText
        title={title}
        fontFamily={fonts.semiBold}
        fontSize={fontSize.default}
        color={colors.textColor}
        style={styles.header}
      />

      {/* rows */}
      {items.map((item, index) => (
        <View key={index} style={styles.row}>
            {/* icon */}
          <View style={styles.icon}>{item.icon}</View>

          <AppText
            title={item.title}
            fontFamily={fonts.regular}
            fontSize={fontSize.normal}
            color={colors.textColor}
            style={styles.text}
          />
        </View>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingVertical: h(1),
    paddingHorizontal: w(4),
    marginBottom: h(2),
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation:1,
        borderWidth:0,
        borderColor:colors.InactiveButtonColor,
        shadowOffset: { width: 2, height: 2 },
        marginHorizontal:w(0.2),
  },

  header: {
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: h(1.2),
  },

  icon: {
    marginRight: w(3),
  },

  text: {
    flex: 1,
  },
})
