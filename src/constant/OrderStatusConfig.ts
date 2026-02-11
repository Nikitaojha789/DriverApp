import { OrderStatus } from "./type";

export const ORDER_STATUS_UI = {
  [OrderStatus.PICKUP]: {
    label: "Heading to pickup",
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

  [OrderStatus.PROOF_OF_DELIVERY]: {
    label: "Verify Delivery",
    backgroundColor: "#30D15816",
    textColor: "#30D158",
  },
  [OrderStatus.COMPLETED]: {
    label: "Completed",
    backgroundColor: "#2ecc701a",
    textColor: "#2ECC71",
  },

  [OrderStatus.IN_PROGRESS]: {
    label: "In Progress",
    backgroundColor: "#5d2e921b",
    textColor: "#5C2E92",
  },

  [OrderStatus.CANCELLED]: {
    label: "Cancelled ",
    backgroundColor: "#d32f2f20",
    textColor: "#D32F2F",
  },
};
