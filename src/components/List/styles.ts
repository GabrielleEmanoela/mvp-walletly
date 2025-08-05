import { theme } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  item: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'center',
    flexWrap: 'wrap',

    maxWidth: 120,
  },
  contentContainer: {
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  listItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.grayLight,
  },
  emptyState: {
    textAlign: 'center',
    color: theme.colors.gray,
    fontSize: 16,
    marginTop: 20,
  },
  icon: {
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
  },
});
