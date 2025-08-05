import { theme } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: `${theme.colors.white}`,
  },
  svgContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    marginBottom: 5,
    backgroundColor: `${theme.colors.white}`,
  },
  button: {
    marginTop: 8,
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});

export const inputTheme = {
  colors: {
    primary: `${theme.colors.primary}`,
    outline: `${theme.colors.outline}`,
    background: `${theme.colors.background}`,
    text: `${theme.colors.text}`,
    placeholder: `${theme.colors.placeholder}`,
  },
};
