import { clearAllStorage } from '@/redux/storage';
import * as HomeService from '@/services/home.service';
import { BalanceResponse, TransactionResponse } from '@/types/user';
import { Alert } from 'react-native';

export const getBalance =
  (token: string) => async (): Promise<BalanceResponse | null> => {
    try {
      if (!token) {
        throw new Error('Token is required to fetch balance');
      }
      const responseBalance = await HomeService.balance(token);
      if (!responseBalance) {
        throw new Error('Failed to fetch balance');
      }
      return responseBalance;
    } catch {
      Alert.alert('Error', 'Ocorreu um erro ao buscar o saldo.');
      return null;
    }
  };

export const getTransactions =
  (token: string) => async (): Promise<TransactionResponse[] | null> => {
    try {
      const responseTransactions = await HomeService.transactions(token);
      if (!responseTransactions) {
        throw new Error('Failed to fetch transactions');
      }
      return responseTransactions;
    } catch {
      Alert.alert('Error', 'Ocorreu um erro ao buscar transações.');
      return null;
    }
  };

export const transactionDetail =
  (transactionId: string) => async (): Promise<TransactionResponse | null> => {
    try {
      const responseTransaction =
        await HomeService.transactionDetail(transactionId);
      if (!responseTransaction) {
        throw new Error('Failed to fetch transaction details');
      }
      return responseTransaction;
    } catch {
      Alert.alert(
        'Error',
        'Ocorreu um erro ao buscar os detalhes da transação.',
      );
      return null;
    }
  };

export const cleanUpStorage = () => async (): Promise<void> => {
  try {
    clearAllStorage();
  } catch {
    Alert.alert('Error', 'Ocorreu um erro ao limpar os dados.');
  }
};
