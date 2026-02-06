// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'
// import { h, w } from '../constant/dimension'
// import { colors } from '../constant/color'

// export const ShadowWrapper = () => {
//   return (
//     <View>
//       isShadow ? {
//         {}
//       }
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//     container: {
//         marginBottom: h(2),
//         marginHorizontal: w(2),
//         marginTop: h(3),
//         borderRadius: 8,
//         padding: 16,
//         margin:16,
//         backgroundColor: colors.white,
//         borderWidth: 0,
//         // iOS shadow
//         shadowColor: '#747474',
//         shadowOffset: { width: 0, height: 0 },
//         shadowOpacity: 0.14,
//         shadowRadius: 8,
//     // borderTopWidth:1,
//     // borderColor:colors.lightGrey,
//         // Android shadow
//         elevation: 5,
//     },
// })

import React, { ReactNode } from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { h, w } from '../constant/dimension'
import { colors } from '../constant/color'

type ShadowWrapperProps = {
  children: ReactNode
  style?: StyleProp<ViewStyle>
  isShadow?: boolean
}


export const ShadowWrapper = ({ children, style, isShadow = true }:ShadowWrapperProps) => {
  return (
    <View style={[isShadow ? styles.shadowContainer : style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  shadowContainer: {
    marginBottom: h(2),
    marginHorizontal: w(2),
    marginTop: h(1),
    borderRadius: 16,
    backgroundColor: colors.white,

    // iOS shadow
    shadowColor: '#747474',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 2,
    // Android shadow
    elevation: 6,
  },
})
