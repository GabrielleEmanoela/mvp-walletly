import { theme } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 16,
  },
  card: {
    marginVertical: 12,
  },
  balanceCard: {
    marginBottom: 24,
    borderRadius: 16,
    elevation: 2,
    backgroundColor: theme.colors.white,
  },
  balanceLabel: {
    color: theme.colors.gray,
    marginBottom: 4,
  },
  balanceValue: {
    color: theme.colors.text,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  historyTitle: {
    marginBottom: 8,
    marginTop: 8,
    color: theme.colors.text,
  },
  list: {
    flex: 1,
  },
  listItem: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    marginBottom: 4,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  separator: {
    marginVertical: 8,
  },
  balanceSubtitle: {
    color: theme.colors.text,
    marginBottom: 4,
  },
});
