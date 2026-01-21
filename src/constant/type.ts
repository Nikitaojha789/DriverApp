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
