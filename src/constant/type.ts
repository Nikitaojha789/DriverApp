import { IN_PROGRESS } from "./StaticData";

export const fieldTypes: any = {
  name: 'name',
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword',
  mobile: 'mobile',
};

export const appStatusTypes = {
  splash: 'splash',
  market: 'market',
  auth: 'auth',
  plan: 'plan',
  home: 'home',
  status: 'status',
};

export const userStatusType = {
  active: 'active',
  pending: 'pending',
};
export const bookingStatusType = {
  confirmed: 'confirmed',
  pending: 'pending',
  completed: 'completed',
  cancelled: 'cancelled',
};

export const serviceStatusType = {
    pending: 'pending',
    approved: 'approved',
    rejected: 'rejected',
};
export const roleTypes = {
  user: 'User',
  staff: 'staff',
};
export const checkListType = {
  reqForm: 'req-form',
  patientPrep: 'patient-prep',
  roomPrep: 'room-prep',
  imageEvaluation: 'image-evaluation',
  imageProt: 'radiation-prot',
};

export type TimeSlotItemProps = {
  time: string;
  status: string;
};

export enum OrderStatus {
  PICKUP = "PICKUP",
  AT_RESTAURANT = "AT_RESTAURANT",
  ON_THE_WAY = "ON_THE_WAY",
  PROOF_OF_DELIVERY = "PROOF_OF_DELIVERY",
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
  CANCELLED = "CANCELLED"
}

export const ORDER_TABS = {
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
} as const

export type OrderTab = typeof ORDER_TABS[keyof typeof ORDER_TABS]

export const PERFORMANCE_TABS = {
  THIS_WEEK: 'This Week',
  THIS_MONTH: 'This Month',
  THIS_YEAR: 'This Year',
} as const
export type PerformanceTabsHeader = typeof PERFORMANCE_TABS[keyof typeof PERFORMANCE_TABS]