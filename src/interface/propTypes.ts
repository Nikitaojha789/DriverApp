export interface errorState {
  msg: string;
  type: string;
}

export interface WalletInterface {
  availableBalance: string;
  createdAt: string;
  deletedAt: string | null;
  id: number;
  isActive: 0 | 1;
  pendingBalance: string;
  providerId: number;
  status: 'active' | 'inactive';
  totalEarned: string;
  totalWithdrawn: string;
  transactions: Transaction[];
  updatedAt: string;
}


export type WalletType = {
  availableBalance: string;
  createdAt: string;
  deletedAt: string | null;
  id: number;
  isActive: 0 | 1;
  pendingBalance: string;
  providerId: number;
  status: 'active' | 'inactive';
  totalEarned: string;
  totalWithdrawn: string;
  transactions: Transaction[];
  updatedAt: string;
};

export type Transaction = {
};