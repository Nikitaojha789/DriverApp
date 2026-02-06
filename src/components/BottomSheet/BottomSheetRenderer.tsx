import React from "react";
import { OrderStatus } from "../../constant/type";
import AtRestaurant from "./AtRestaurant";
import { OnTheWay } from "./OnTheWay";
import OrderPickUp from "./OrderPickUp";
import { Helper } from "../../helper/Helper";
import { ProofOfDelivery } from "./ProofOfDelivery";

type Props = {
  status: OrderStatus;
};

export const BottomSheetRenderer = ({ status }: Props) => {
  const renderBottomSheet = React.useMemo(() => {
    if (
      status === OrderStatus.PICKUP
    ) {
      return <OrderPickUp onPress={() => console.log('We are here in order pickup screen')}/>;
    }
     if(
        status === OrderStatus.AT_RESTAURANT
     ) {
        return <AtRestaurant/>
     }
    if (
      status === OrderStatus.ON_THE_WAY 
    ) {
      return <OnTheWay />;
    }
     if(
      status === OrderStatus.PROOF_OF_DELIVERY
     ) {
        return <ProofOfDelivery/>
     }
    return null;
  }, [status]);

  return <>{renderBottomSheet}</>;
};
