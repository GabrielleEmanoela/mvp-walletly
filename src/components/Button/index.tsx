import React from 'react';
import { Button } from 'react-native-paper';
import { ViewStyle } from 'react-native';

import { styles } from './styles';

export type ButtonProps = {
  testID?: string;
  children: React.ReactNode | string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  contentStyle?: ViewStyle;
};

export const ButtonContainer = ({
  children,
  onPress,
  loading = false,
  disabled = false,
  contentStyle,
}: ButtonProps) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      loading={loading}
      disabled={disabled}
      style={styles.button}
      labelStyle={styles.buttonText}
      contentStyle={contentStyle}
      testID={'ButtonContainer'}
    >
      {children}
    </Button>
  );
};
