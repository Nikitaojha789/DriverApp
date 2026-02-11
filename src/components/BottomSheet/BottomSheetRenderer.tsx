import React from "react";
import { OrderStatus } from "../../constant/type";
import AtRestaurant from "./AtRestaurant";
import { OnTheWay } from "./OnTheWay";
import OrderPickUp from "./OrderPickUp";
import { Helper } from "../../helper/Helper";
import { ProofOfDelivery } from "./ProofOfDelivery";
import { useNavigation } from "@react-navigation/native";
import { routeNames } from "../../route/route_name";

type Props = {
  status: OrderStatus;
  onPickupComplete?: () => void;
  onAtRestaurantComplete?: () => void;
  onOnTheWayComplete?: () => void;
};

export const BottomSheetRenderer = ({ status, onPickupComplete ,onAtRestaurantComplete,onOnTheWayComplete}: Props) => {
  const renderBottomSheet = React.useMemo(() => {
    if (status === OrderStatus.PICKUP) {
      return <OrderPickUp onPress={onPickupComplete} />;
    }

    if (status === OrderStatus.AT_RESTAURANT) {
      return <AtRestaurant onPress={onAtRestaurantComplete} />;
    }

    if (status === OrderStatus.ON_THE_WAY) {
      return <OnTheWay onPress={onOnTheWayComplete}/>;
    }

    if (status === OrderStatus.PROOF_OF_DELIVERY) {
      return <ProofOfDelivery />;
    }

    return null;
  }, [status, onPickupComplete]);

  return <>{renderBottomSheet}</>;
};

