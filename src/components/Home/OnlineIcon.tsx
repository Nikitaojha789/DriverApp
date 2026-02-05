import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppContainer } from '../AppContainer';
import { AppText } from '../AppHeading';
import { ShowOnlineIcon } from '../../asset/icons/HomeIcon';
import { h, w } from '../../constant/dimension';
import { ToggleIcon } from '../ToggleIcon';
import { colors } from '../../constant/color';
import { fonts } from '../../asset';
import { fontSize } from '../../asset/style/commonStyle';
import NewOrderModel from '../model/NewOrderModel';

export const OnlineIcon = () => {
    const [rememberMe, setRememberMe] = useState(true);
  const [showOrderModal, setShowOrderModal] = useState(false);

  useEffect(() => {
    if (rememberMe) {
      setShowOrderModal(true);
    } else {
      setShowOrderModal(false);
    }
  }, [rememberMe]);

  return (
    <>
      <NewOrderModel visible={showOrderModal}  onClose={() => setShowOrderModal(false)}/>

      <View style={styles.container}>
        <ShowOnlineIcon />
      <View>
        <AppText title="You're Online" fontFamily={fonts.semiBold} fontSize={fontSize.default}
          style={{ lineHeight: fontSize.default + 2 }} />
        <AppText title='Ready to receive orders' fontFamily={fonts.regular}
          fontSize={fontSize.small} color={colors.InactiveButtonColor} style={{ lineHeight: fontSize.small + 2 }} />
      </View>
      <View style={{ marginLeft:w(25) ,alignSelf:'center'}}>
        <ToggleIcon
          isSelected={rememberMe}
          onPress={() => setRememberMe(!rememberMe)}
          color={colors.purple}
        />
      </View>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.white,
    shadowColor: '#000000af',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation:3,
    borderWidth:0,
    borderColor:colors.InactiveButtonColor,
    borderRadius:16,
    shadowOffset: { width: 2, height: 2 },
    flexDirection: 'row', alignItems: 'center', gap: w(4), padding: 15, marginTop: h(1.5),
    marginHorizontal:w(0.2),
  }
});