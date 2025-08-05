import { AxiosService } from '@/lib/axios';
import { BalanceResponse, TransactionResponse } from '@/types/user';

export const transactions = async (
  token: string,
): Promise<Array<TransactionResponse>> => {
  return AxiosService.get('transactions', { token });
};

export const balance = async (token: string): Promise<BalanceResponse> => {
  return AxiosService.get('balance', { token });
};

export const transactionDetail = async (
  id: string,
): Promise<TransactionResponse> => {
  const response = await AxiosService.get(`/transactions/${id}`);
  return response;
};
