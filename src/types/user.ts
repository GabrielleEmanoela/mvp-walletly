export type LoginForm = {
  pin: string;
  confirmPin: string;
};

export type UserResponse = {
  id: string;
  name: string;
  email?: string;
  token: string;
};

export type CreditCard = {
  number: string;
  brand: string;
};

export type Account = {
  name: string;
  accountNumber: string;
};

export type BalanceResponse = {
  balance: string;
  currency: string;
  sessionExpiration?: boolean;
};

export type TransactionResponse = {
  id: string;
  date: string;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'payment';
  amount: number;
  currency: string;
  status: 'completed' | 'pending' | 'failed';
  description: string;
  creditCard?: CreditCard;
  icon?: string;
  iconColor?: string;
};

export type Transaction = {
  id: string;
  date: string;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'payment';
  amount: number;
  currency: string;
  status: 'completed' | 'pending' | 'failed';
  description: string;
  fromAccount?: Account;
  toAccount?: Account;
  fee?: number;
  creditCard?: CreditCard;
  icon: string;
  iconColor: string;
};
