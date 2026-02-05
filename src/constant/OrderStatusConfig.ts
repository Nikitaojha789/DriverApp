import { OrderStatus } from "./type";

export const ORDER_STATUS_UI = {
  [OrderStatus.PICKUP]: {
    label: "Pickup",
    backgroundColor: "#FFD60A16",
    textColor: "#F5A623",
  },

  [OrderStatus.AT_RESTAURANT]: {
    label: "At Restaurant",
    backgroundColor: "#2ecc701a",
    textColor: "#2ECC71",
  },

  [OrderStatus.ON_THE_WAY]: {
    label: "On the Way",
    backgroundColor: "#1e88e525",
    textColor: "#1E88E5",
  },

  [OrderStatus.DELIVERED]: {
    label: "Delivered",
    backgroundColor: "#30D15816",
    textColor: "#30D158",
  },

  [OrderStatus.PROOF_OF_DELIVERY]: {
    label: "Proof of Delivery",
    backgroundColor: "#30D15816",
    textColor: "#30D158",
  },
};
