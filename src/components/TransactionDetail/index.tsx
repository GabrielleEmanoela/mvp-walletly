import React from 'react';
import { Avatar, Card, Text } from 'react-native-paper';

import { theme } from '@/theme/colors';
import { styles } from './styles';

export type TransactionDetailProps = {
  id: string;
  date: string;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'payment';
  amount: number;
  currency: string;
  status: 'completed' | 'pending' | 'failed';
  description: string;
  fromAccount?: { name: string; accountNumber: string };
  toAccount?: { name: string; accountNumber: string };
  fee?: number;
  creditCard?: { number: string; brand: string };
  icon?: string;
  iconColor?: string;
};

function formatTitle(
  description: string,
  fromAccount?: { name: string; accountNumber: string },
) {
  if (fromAccount?.name) {
    return `${fromAccount.name}${fromAccount.accountNumber ? ` (${fromAccount.accountNumber})` : ''} - ${description}`;
  }
  return description;
}

function formatAmount(amount: number) {
  return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatDate(date: string) {
  return date ? new Date(date).toLocaleString('pt-BR') : '';
}

export const TransactionDetailCard = ({
  date,
  description,
  icon,
  iconColor,
  fromAccount,
  creditCard,
  amount,
  status,
  currency,
}: TransactionDetailProps) => (
  <Card style={styles.card} testID="transaction-detail-card">
    <Card.Title
      style={styles.title}
      title={formatTitle(description, fromAccount)}
      left={(props) =>
        icon ? (
          <Avatar.Icon
            {...props}
            icon={icon}
            style={[
              styles.icon,
              { backgroundColor: iconColor || theme.colors.primary },
            ]}
            testID="transaction-detail-icon"
          />
        ) : null
      }
    />
    <Card.Content>
      <Text style={styles.description} testID="transaction-detail-description">
        {description}
      </Text>
      {creditCard && (
        <Text style={styles.creditCard} testID="transaction-detail-creditcard">
          {creditCard.brand} ({creditCard.number})
        </Text>
      )}
      {date && (
        <Text style={styles.date} testID="transaction-detail-date">
          {formatDate(date)}
        </Text>
      )}
      <Text
        style={{
          ...styles.right,
          color:
            status === 'completed' ? theme.colors.success : theme.colors.danger,
        }}
        testID="transaction-detail-amount"
      >
        {formatAmount(amount)}
      </Text>
    </Card.Content>
  </Card>
);
