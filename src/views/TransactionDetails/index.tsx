import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './styles';
import { useAppDispatch } from '@/hooks/redux';
import { Loading } from '@/components/Loading';
import { mixpanelTracker } from '@/lib/mixPanel';
import { TransactionResponse } from '@/types/user';
import * as HomeActions from '@/redux/modules/home/action';
import { RootPrivateStackParamList } from '@/navigation/types';
import { TransactionDetailCard } from '@/components/TransactionDetail';

type TransactionDetailsProps = NativeStackScreenProps<
  RootPrivateStackParamList,
  'TransactionDetails'
>;

const TransactionDetails = ({ route }: TransactionDetailsProps) => {
  const { transactionId } = route.params;

  const [transaction, setTransaction] = useState<TransactionResponse | null>(
    null,
  );
  const dispatch = useAppDispatch();
  const getTransactions = async () => {
    const response = await dispatch(
      HomeActions.transactionDetail(transactionId),
    );
    if (response) {
      setTransaction(response);
    }
  };

  useEffect(() => {
    mixpanelTracker.trackerScreen('transaction_details_screen');
    getTransactions();
  }, []);

  if (!transaction) return <Loading />;

  return (
    <View style={styles.container}>
      <TransactionDetailCard {...transaction} />
    </View>
  );
};

export default TransactionDetails;
