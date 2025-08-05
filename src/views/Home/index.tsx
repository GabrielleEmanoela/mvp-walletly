import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { IconButton, Card, Text, Divider } from 'react-native-paper';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { theme } from '@/theme/colors';
import { getLocale } from '@/lib/native/locale';
import { mixpanelTracker } from '@/lib/mixPanel';
import { ListComponent } from '@/components/List';
import { typographyVariant } from '@/theme/variant';
import * as HomeActions from '@/redux/modules/home/action';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { RootPrivateStackParamList } from '@/navigation/types';
import { BalanceResponse, TransactionResponse } from '@/types/user';

type HomeProps = NativeStackScreenProps<RootPrivateStackParamList, 'Home'>;

const Home = ({ navigation }: HomeProps) => {
  const dispatch = useAppDispatch();
  const [balance, setBalance] = useState<BalanceResponse>({
    balance: 'Carregando...',
    currency: '',
    sessionExpiration: false,
  });
  const [selectTransactions, setSelectTransactions] = useState<
    Array<TransactionResponse>
  >([]);
  const [eyeOpen, setEyeOpen] = useState(false);

  const user = useAppSelector((state) => state.auth?.user);
  const [language, setLanguage] = useState<string | null>(null);

  const getBalance = async () => {
    if (!user?.token) return;
    const getBalance = await dispatch(HomeActions.getBalance(user?.token));
    const getTransactions = await dispatch(
      HomeActions.getTransactions(user?.token),
    );
    if (getBalance) {
      setBalance({
        balance: getBalance.balance,
        currency: getBalance.currency,
        sessionExpiration: getBalance.sessionExpiration,
      });
    }
    if (getTransactions) {
      setSelectTransactions(getTransactions);
    }
  };

  const start = async () => {
    const locale = await getLocale();
    if (locale) {
      setLanguage(locale);
    }
  };

  useEffect(() => {
    mixpanelTracker.trackerScreen('home_screen');
    getBalance();
    start();
  }, []);

  const onClickItem = (item: string) => {
    if (!item) return;
    mixpanelTracker.trackerEvent('transaction_selected', {
      transactionId: item,
    });
    navigation.navigate('TransactionDetails', {
      transactionId: item,
    });
  };

  return (
    <View style={styles.container}>
      {language && (
        <Text
          variant={typographyVariant.titleMedium}
          style={styles.historyTitle}
        >
          Seu celular está configurado para o idioma {language}
        </Text>
      )}
      <Card style={styles.card}>
        <Card.Title
          title="Saldo da Carteira"
          right={(props) => (
            <IconButton
              {...props}
              icon={!eyeOpen ? 'eye-off' : 'eye'}
              iconColor={theme.colors.black}
              onPress={() => setEyeOpen(!eyeOpen)}
            />
          )}
        />
        <Card.Content>
          <Text
            variant={typographyVariant.headlineMedium}
            style={styles.balanceSubtitle}
          >
            {!eyeOpen ? '****' : `${balance.currency} ${balance.balance}`}
          </Text>
        </Card.Content>
      </Card>

      <Divider style={styles.separator} />
      <Text variant={typographyVariant.titleMedium} style={styles.historyTitle}>
        Histórico de Transações
      </Text>
      {selectTransactions && selectTransactions.length > 0 ? (
        <ListComponent
          data={selectTransactions}
          onPress={(item) => onClickItem(item.id)}
        />
      ) : (
        <Text
          variant={typographyVariant.bodyMedium}
          style={styles.historyTitle}
        >
          Nenhuma transação encontrada.
        </Text>
      )}
    </View>
  );
};

export default Home;
