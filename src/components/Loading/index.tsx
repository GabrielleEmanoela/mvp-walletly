import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';

export const Loading = () => {
  return (
    <View style={styles.loadingContainer} testID="Loading">
      <ActivityIndicator animating size="large" />
    </View>
  );
};
