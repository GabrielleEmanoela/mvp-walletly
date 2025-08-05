import { StyleSheet } from 'react-native';
import { theme } from '@/theme/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    height: 55,
    justifyContent: 'center',
    borderRadius: 40,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
