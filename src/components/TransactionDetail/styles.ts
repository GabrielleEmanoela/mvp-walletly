import { theme } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    marginBottom: 24,
    padding: 16,
    borderRadius: 16,
    elevation: 2,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
  },
  right: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: theme.colors.gray,
  },
  icon: {
    marginRight: 12,
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  creditCard: {
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: 8,
  },
  currency: {
    fontSize: 14,
    color: theme.colors.text,
    marginTop: 4,
  },
});
