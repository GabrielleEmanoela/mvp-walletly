import { StyleSheet } from 'react-native';
import { theme } from '@/theme/colors';

export const errorStyles = StyleSheet.create({
  error: {
    color: theme.colors.danger,
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 13,
  },
  errorContainer: {
    minHeight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
