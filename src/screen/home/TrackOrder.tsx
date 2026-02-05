import React from 'react';
import {View,StyleSheet} from 'react-native';
import { colors } from '../../constant/color';
import { h, w } from '../../constant/dimension';
import { fonts } from '../../asset';
import { fontSize } from '../../asset/style/commonStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppImage } from '../../components/AppImage';
import AtRestaurant from '../../components/BottomSheet/AtRestaurant';
import { TrackScreenHeader } from '../../components/header/TrackScreenHeader';

import { OrderStatus } from '../../constant/type';
import { BottomSheetRenderer } from '../../components/BottomSheet/BottomSheetRenderer';
import { ORDER_STATUS_UI } from '../../constant/OrderStatusConfig';

const TrackOrderScreen = () => {
  const [orderStatus, setOrderStatus] = React.useState<OrderStatus>(
    OrderStatus.ON_THE_WAY
  );

  const statusUI = ORDER_STATUS_UI[orderStatus];

  return (
    <SafeAreaView style={styles.container}>
      <TrackScreenHeader
        status={statusUI.label}
        statusStyle={{
          backgroundColor: statusUI.backgroundColor,
          textColor: statusUI.textColor,
          badge: {
            paddingHorizontal: w(3),
            paddingVertical: h(0.6),
            borderRadius: 16,
          },
        }}
      />

      <AppImage
        url={require('../../asset/images/mapPlaceholder.png')}
        containerStyle={styles.mapImage}
        resizeMode="cover"
      />

      <BottomSheetRenderer status={orderStatus} />
    </SafeAreaView>
  );
};


export default TrackOrderScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    mapImage: {
        width: '100%',
        flex: 1,
    },
});
