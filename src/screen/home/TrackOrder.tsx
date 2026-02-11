import React from 'react';
import {View,StyleSheet} from 'react-native';
import { colors } from '../../constant/color';
import { h, w } from '../../constant/dimension';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppImage } from '../../components/AppImage';
import { TrackScreenHeader } from '../../components/header/TrackScreenHeader';
import { OrderStatus } from '../../constant/type';
import { BottomSheetRenderer } from '../../components/BottomSheet/BottomSheetRenderer';
import { ORDER_STATUS_UI } from '../../constant/OrderStatusConfig';

const TrackOrderScreen = () => {
  const [orderStatus, setOrderStatus] = React.useState<OrderStatus>(
    OrderStatus.PICKUP
  );

  const statusUI = ORDER_STATUS_UI[orderStatus];
const goToAtRestaurant = () => {
  setOrderStatus(OrderStatus.AT_RESTAURANT);
};

const goToOnTheWay = () => {
  setOrderStatus(OrderStatus.ON_THE_WAY);
};

const goToProofOfDelivery = () => {
  setOrderStatus(OrderStatus.PROOF_OF_DELIVERY);
};


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

    <BottomSheetRenderer
  status={orderStatus}
  onPickupComplete={goToAtRestaurant}
  onAtRestaurantComplete={goToOnTheWay}
  onOnTheWayComplete={goToProofOfDelivery}
/>

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
